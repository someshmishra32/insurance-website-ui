// Webhook Receiver for Strapi Events
// Production-ready webhook receiver with signature verification and ISR revalidation

import { headers } from 'next/headers';
import { revalidateTag, revalidatePath } from 'next/cache';
import crypto from 'crypto';

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface WebhookEntry {
  id: number;
  documentId: string;
  title?: string;
  slug?: string;
  language?: string;
  publishedAt?: string;
  [key: string]: any;
}

interface StrapiWebhook {
  event: string;
  createdAt: string;
  model: string;
  entry: WebhookEntry;
}

// ============================================================================
// CONFIGURATION
// ============================================================================

const WEBHOOK_SECRET = process.env.STRAPI_WEBHOOK_SECRET || '';
const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN || '';

// ============================================================================
// LOGGING UTILITIES
// ============================================================================

const log = {
  info: (message: string, data?: any) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [WEBHOOK] ${message}`, data ? JSON.stringify(data, null, 2) : '');
  },
  error: (message: string, error?: any) => {
    const timestamp = new Date().toISOString();
    console.error(
      `[${timestamp}] [WEBHOOK-ERROR] ${message}`,
      error instanceof Error ? error.message : JSON.stringify(error)
    );
  },
  warn: (message: string) => {
    const timestamp = new Date().toISOString();
    console.warn(`[${timestamp}] [WEBHOOK-WARN] ${message}`);
  },
};

// ============================================================================
// SIGNATURE VERIFICATION
// ============================================================================

/**
 * Verify webhook signature using HMAC-SHA256
 * Prevents spoofed webhook requests
 */
function verifySignature(body: string, signature: string): boolean {
  if (!WEBHOOK_SECRET) {
    log.warn('WEBHOOK_SECRET not configured - skipping signature verification');
    return true;
  }

  try {
    const hash = crypto
      .createHmac('sha256', WEBHOOK_SECRET)
      .update(body)
      .digest('hex');

    // Use timing-safe comparison to prevent timing attacks
    return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(signature));
  } catch (error) {
    log.error('Signature verification failed', error);
    return false;
  }
}

// ============================================================================
// CACHE REVALIDATION
// ============================================================================

/**
 * Determine which cache tags should be revalidated
 */
function getRevalidationTags(model: string, entry: WebhookEntry): string[] {
  const tags: string[] = [];

  // Model-specific tags
  tags.push(`${model}:list`);
  tags.push(`${model}:${entry.id}`);
  tags.push(`${model}:${entry.documentId}`);

  // Language-specific tags
  if (entry.language) {
    tags.push(`${model}:${entry.language}`);
    tags.push(`${model}:${entry.language}:${entry.id}`);
    tags.push(`${model}:${entry.language}:list`);
  }

  // Slug-based tags
  if (entry.slug) {
    tags.push(`blog:${entry.slug}`);
    tags.push(`page:${entry.slug}`);
    if (entry.language) {
      tags.push(`blog:${entry.language}:${entry.slug}`);
    }
  }

  // Model-specific revalidation
  switch (model) {
    case 'blog':
    case 'blog-post':
      tags.push('blog:latest');
      tags.push('homepage:blog-preview');
      break;
    case 'compliance-rule':
      tags.push('admin:dashboard:compliance');
      tags.push('compliance:all');
      break;
    case 'disclaimer':
      tags.push('disclaimers:all');
      tags.push('admin:dashboard:disclaimers');
      break;
    case 'forbidden-word':
      tags.push('forbidden-words:all');
      tags.push('compliance:validation');
      break;
    case 'irdai-guideline':
      tags.push('irdai:all');
      tags.push('admin:dashboard:irdai');
      break;
  }

  // Admin dashboard tags
  tags.push('admin:dashboard');
  tags.push('admin:dashboard:metrics');

  return [...new Set(tags)]; // Remove duplicates
}

/**
 * Revalidate cache tags
 */
async function revalidateCacheTags(tags: string[]): Promise<void> {
  for (const tag of tags) {
    try {
      revalidateTag(tag);
      log.info(`Revalidated tag: ${tag}`);
    } catch (error) {
      log.error(`Failed to revalidate tag ${tag}`, error);
    }
  }
}

/**
 * Get paths to revalidate for content
 */
function getRevalidatePaths(model: string, entry: WebhookEntry): string[] {
  const paths = ['/'];

  switch (model) {
    case 'blog':
    case 'blog-post':
      paths.push('/blog');
      if (entry.slug) {
        paths.push(`/blog/${entry.slug}`);
      }
      break;
    case 'faq':
      paths.push('/faq');
      break;
    case 'insurance-company':
    case 'comparison':
      paths.push('/compare');
      break;
    case 'learning-resource':
      paths.push('/learn');
      break;
    default:
      break;
  }

  return paths;
}

/**
 * Revalidate specific paths
 */
async function revalidateContentPaths(paths: string[]): Promise<void> {
  for (const path of paths) {
    try {
      revalidatePath(path);
      log.info(`Revalidated path: ${path}`);
    } catch (error) {
      log.error(`Failed to revalidate path ${path}`, error);
    }
  }
}


// ============================================================================
// EVENT HANDLERS
// ============================================================================

/**
 * Handle entry.publish event
 */
async function handleEntryPublish(webhook: StrapiWebhook): Promise<void> {
  const { model, entry } = webhook;
  log.info(`Processing ${model} publish event`, { id: entry.id, slug: entry.slug });

  // Revalidate cache tags
  const tags = getRevalidationTags(model, entry);
  await revalidateCacheTags(tags);

  // Revalidate paths
  const paths = getRevalidatePaths(model, entry);
  await revalidateContentPaths(paths);

  // Update dashboard metrics
  await updateDashboardMetrics(model, 'publish', entry);

  log.info(`Completed ${model} publish event`, { tagsCount: tags.length, pathsCount: paths.length });
}

/**
 * Handle entry.update event
 */
async function handleEntryUpdate(webhook: StrapiWebhook): Promise<void> {
  const { model, entry } = webhook;
  log.info(`Processing ${model} update event`, { id: entry.id });

  // Revalidate cache tags
  const tags = getRevalidationTags(model, entry);
  await revalidateCacheTags(tags);

  // Update metrics
  await updateDashboardMetrics(model, 'update', entry);

  log.info(`Completed ${model} update event`);
}

/**
 * Handle entry.delete event
 */
async function handleEntryDelete(webhook: StrapiWebhook): Promise<void> {
  const { model, entry } = webhook;
  log.info(`Processing ${model} delete event`, { id: entry.id });

  // Revalidate cache tags
  const tags = getRevalidationTags(model, entry);
  await revalidateCacheTags(tags);

  // Revalidate paths
  const paths = getRevalidatePaths(model, entry);
  await revalidateContentPaths(paths);

  // Update metrics
  await updateDashboardMetrics(model, 'delete', entry);

  log.info(`Completed ${model} delete event`);
}

/**
 * Handle entry.unpublish event
 */
async function handleEntryUnpublish(webhook: StrapiWebhook): Promise<void> {
  const { model, entry } = webhook;
  log.info(`Processing ${model} unpublish event`, { id: entry.id });

  // Revalidate cache tags
  const tags = getRevalidationTags(model, entry);
  await revalidateCacheTags(tags);

  // Update metrics
  await updateDashboardMetrics(model, 'unpublish', entry);

  log.info(`Completed ${model} unpublish event`);
}

/**
 * Handle entry.create event
 */
async function handleEntryCreate(webhook: StrapiWebhook): Promise<void> {
  const { model, entry } = webhook;
  log.info(`Processing ${model} create event`, { id: entry.id });

  // Revalidate list views
  const tags = [
    `${model}:list`,
    `${model}:list:${entry.language}`,
    'admin:dashboard',
  ];
  await revalidateCacheTags(tags);

  // Update metrics
  await updateDashboardMetrics(model, 'create', entry);

  log.info(`Completed ${model} create event`);
}

// ============================================================================
// DASHBOARD METRICS UPDATE
// ============================================================================

/**
 * Update dashboard metrics in Strapi
 */
async function updateDashboardMetrics(
  model: string,
  action: string,
  entry: WebhookEntry
): Promise<void> {
  try {
    const response = await fetch(`${STRAPI_API_URL}/api/analytics/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
      },
      body: JSON.stringify({
        eventName: `webhook_${action}`,
        entityType: model,
        entityId: entry.id,
        documentId: entry.documentId,
        timestamp: new Date().toISOString(),
        data: {
          title: entry.title,
          slug: entry.slug,
          language: entry.language,
        },
      }),
    });

    if (!response.ok) {
      log.warn(`Failed to update metrics: ${response.statusText}`);
    }
  } catch (error) {
    log.error('Error updating dashboard metrics', error);
    // Don't throw - webhook should succeed even if metrics update fails
  }
}

// ============================================================================
// MAIN WEBHOOK DISPATCHER
// ============================================================================

export async function POST(request: Request) {
  try {
    const headersList = await headers();
    const signature = headersList.get('x-strapi-webhook-signature');
    const body = await request.text();

    // Verify signature
    if (!signature) {
      log.error('Missing webhook signature header');
      return Response.json(
        { error: 'Missing signature', success: false },
        { status: 401 }
      );
    }

    if (!verifySignature(body, signature)) {
      log.error('Invalid webhook signature');
      return Response.json(
        { error: 'Invalid signature', success: false },
        { status: 401 }
      );
    }

    // Parse event
    let webhook: StrapiWebhook;
    try {
      webhook = JSON.parse(body);
    } catch (error) {
      log.error('Failed to parse webhook body', error);
      return Response.json(
        { error: 'Invalid JSON', success: false },
        { status: 400 }
      );
    }

    // Validate event structure
    if (!webhook.event || !webhook.model || !webhook.entry) {
      log.error('Invalid webhook event structure', webhook);
      return Response.json(
        { error: 'Invalid event structure', success: false },
        { status: 400 }
      );
    }

    log.info(`Received webhook event: ${webhook.event}`, {
      model: webhook.model,
      entryId: webhook.entry.id,
    });

    // Handle different event types
    switch (webhook.event) {
      case 'entry.publish':
        await handleEntryPublish(webhook);
        break;

      case 'entry.update':
        await handleEntryUpdate(webhook);
        break;

      case 'entry.delete':
        await handleEntryDelete(webhook);
        break;

      case 'entry.unpublish':
        await handleEntryUnpublish(webhook);
        break;

      case 'entry.create':
        await handleEntryCreate(webhook);
        break;

      default:
        log.warn(`Unknown webhook event type: ${webhook.event}`);
    }

    // Return success
    return Response.json(
      {
        success: true,
        event: webhook.event,
        model: webhook.model,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    log.error('Webhook processing failed', error);

    return Response.json(
      {
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/webhooks/strapi
 * Health check endpoint
 */
export async function GET() {
  return Response.json(
    {
      status: 'ok',
      message: 'Webhook receiver is running',
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}
