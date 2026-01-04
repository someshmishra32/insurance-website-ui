// ISR Revalidation Route
// On-demand cache revalidation for Incremental Static Regeneration

import { revalidatePath, revalidateTag } from 'next/cache';

/**
 * Revalidation request interface
 */
interface RevalidateRequest {
  paths?: string[];
  tags?: string[];
  secret?: string;
}

/**
 * Revalidation response interface
 */
interface RevalidateResponse {
  success: boolean;
  revalidated: boolean;
  timestamp: string;
  pathsCount?: number;
  tagsCount?: number;
  message?: string;
  error?: string;
}

// ============================================================================
// CONFIGURATION
// ============================================================================

const ISR_REVALIDATE_SECRET = process.env.ISR_REVALIDATE_SECRET || 
                              process.env.STRAPI_WEBHOOK_SECRET || 
                              'change-me';

// ============================================================================
// LOGGING
// ============================================================================

const log = {
  info: (message: string, data?: any) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [ISR-REVALIDATE] ${message}`, data ? JSON.stringify(data, null, 2) : '');
  },
  error: (message: string, error?: any) => {
    const timestamp = new Date().toISOString();
    console.error(
      `[${timestamp}] [ISR-REVALIDATE-ERROR] ${message}`,
      error instanceof Error ? error.message : JSON.stringify(error)
    );
  },
  warn: (message: string) => {
    const timestamp = new Date().toISOString();
    console.warn(`[${timestamp}] [ISR-REVALIDATE-WARN] ${message}`);
  },
};

// ============================================================================
// PATH REVALIDATION
// ============================================================================

/**
 * Revalidate specific paths
 */
async function revalidatePaths(paths: string[]): Promise<{ count: number; failed: string[] }> {
  const failed: string[] = [];

  for (const path of paths) {
    try {
      revalidatePath(path);
      log.info(`Revalidated path: ${path}`);
    } catch (error) {
      log.error(`Failed to revalidate path ${path}`, error);
      failed.push(path);
    }
  }

  return { count: paths.length - failed.length, failed };
}

// ============================================================================
// TAG REVALIDATION
// ============================================================================

/**
 * Revalidate specific tags
 */
async function revalidateTags(tags: string[]): Promise<{ count: number; failed: string[] }> {
  const failed: string[] = [];

  for (const tag of tags) {
    try {
      revalidateTag(tag);
      log.info(`Revalidated tag: ${tag}`);
    } catch (error) {
      log.error(`Failed to revalidate tag ${tag}`, error);
      failed.push(tag);
    }
  }

  return { count: tags.length - failed.length, failed };
}

// ============================================================================
// HTTP HANDLERS
// ============================================================================

/**
 * POST /api/revalidate
 * On-demand ISR revalidation endpoint
 * 
 * Request body:
 * {
 *   paths: ["/blog", "/compare"],
 *   tags: ["blog:list", "compare:data"],
 *   secret: "your-secret"
 * }
 */
export async function POST(request: Request): Promise<Response> {
  try {
    // Check secret
    const secret = request.headers.get('x-revalidate-secret');
    if (secret !== ISR_REVALIDATE_SECRET) {
      log.error('Invalid revalidation secret');
      return Response.json(
        {
          success: false,
          revalidated: false,
          error: 'Invalid or missing secret',
          timestamp: new Date().toISOString(),
        } as RevalidateResponse,
        { status: 401 }
      );
    }

    // Parse request body
    let body: RevalidateRequest;
    try {
      body = await request.json();
    } catch (error) {
      log.error('Failed to parse request body', error);
      return Response.json(
        {
          success: false,
          revalidated: false,
          error: 'Invalid JSON in request body',
          timestamp: new Date().toISOString(),
        } as RevalidateResponse,
        { status: 400 }
      );
    }

    const { paths = [], tags = [] } = body;

    log.info('Revalidation requested', { pathsCount: paths.length, tagsCount: tags.length });

    // Validate input
    if (!Array.isArray(paths) || !Array.isArray(tags)) {
      log.error('Invalid request format - paths and tags must be arrays');
      return Response.json(
        {
          success: false,
          revalidated: false,
          error: 'paths and tags must be arrays',
          timestamp: new Date().toISOString(),
        } as RevalidateResponse,
        { status: 400 }
      );
    }

    if (paths.length === 0 && tags.length === 0) {
      log.warn('Revalidation requested with no paths or tags');
      return Response.json(
        {
          success: false,
          revalidated: false,
          error: 'At least one path or tag must be provided',
          timestamp: new Date().toISOString(),
        } as RevalidateResponse,
        { status: 400 }
      );
    }

    // Perform revalidation
    let pathsResult = { count: 0, failed: [] };
    let tagsResult = { count: 0, failed: [] };

    if (paths.length > 0) {
      pathsResult = await revalidatePaths(paths);
    }

    if (tags.length > 0) {
      tagsResult = await revalidateTags(tags);
    }

    // Check for partial failures
    const hasFailures = pathsResult.failed.length > 0 || tagsResult.failed.length > 0;
    const statusCode = hasFailures ? 207 : 200; // 207 = Multi-Status (partial success)

    const response: RevalidateResponse = {
      success: !hasFailures,
      revalidated: true,
      pathsCount: pathsResult.count,
      tagsCount: tagsResult.count,
      timestamp: new Date().toISOString(),
      message: hasFailures
        ? `Partial success: ${pathsResult.count + tagsResult.count} revalidated, ${pathsResult.failed.length + tagsResult.failed.length} failed`
        : `Successfully revalidated ${pathsResult.count + tagsResult.count} items`,
    };

    if (hasFailures) {
      response.error = JSON.stringify({
        failedPaths: pathsResult.failed,
        failedTags: tagsResult.failed,
      });
    }

    log.info('Revalidation completed', {
      pathsRevalidated: pathsResult.count,
      tagsRevalidated: tagsResult.count,
      pathsFailed: pathsResult.failed.length,
      tagsFailed: tagsResult.failed.length,
    });

    return Response.json(response, { status: statusCode });
  } catch (error) {
    log.error('Revalidation endpoint error', error);

    return Response.json(
      {
        success: false,
        revalidated: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      } as RevalidateResponse,
      { status: 500 }
    );
  }
}

/**
 * GET /api/revalidate
 * Health check endpoint
 */
export async function GET(): Promise<Response> {
  return Response.json(
    {
      status: 'ok',
      message: 'ISR revalidation endpoint is running',
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}
