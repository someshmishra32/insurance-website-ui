/**
 * Strapi API Integration for Dashboard
 * Provides functions for fetching compliance, analytics, and content data
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

async function strapiFetch(endpoint: string, options: FetchOptions = {}) {
  const url = `${STRAPI_URL}/api${endpoint}`;
  
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
  }

  const response = await fetch(url, {
    method: options.method || 'GET',
    headers,
    body: options.body,
  });

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.statusText}`);
  }

  return response.json();
}

// Dashboard endpoints

export async function getDashboard(range: string = '30d') {
  return strapiFetch(`/dashboard?range=${range}`);
}

export async function getComplianceMetrics(range: string = '30d') {
  return strapiFetch(`/dashboard/compliance?range=${range}`);
}

export async function getContentStats(range: string = '30d') {
  return strapiFetch(`/dashboard/content?range=${range}`);
}

export async function getLeadMetrics(range: string = '30d') {
  return strapiFetch(`/dashboard/leads?range=${range}`);
}

export async function getTrendsData(range: string = '30d') {
  return strapiFetch(`/dashboard/trends?range=${range}`);
}

export async function exportDashboardReport(
  format: 'csv' | 'json' = 'csv',
  range: string = '30d'
) {
  return strapiFetch(`/dashboard/export?format=${format}&range=${range}`);
}

// Compliance management

export async function getComplianceRules() {
  return strapiFetch('/dashboard/compliance-rules');
}

export async function createComplianceRule(data: {
  name: string;
  category: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  pattern: string;
  irdaiReference: string;
  suggestion: string;
  autoFix?: boolean;
  autoFixReplacement?: string;
}) {
  return strapiFetch('/dashboard/compliance-rules', {
    method: 'POST',
    body: JSON.stringify({ data }),
  });
}

export async function updateComplianceRule(
  id: string,
  data: Partial<typeof createComplianceRule extends (arg: infer T) => any ? T : never>
) {
  return strapiFetch(`/dashboard/compliance-rules/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ data }),
  });
}

export async function deleteComplianceRule(id: string) {
  return strapiFetch(`/dashboard/compliance-rules/${id}`, {
    method: 'DELETE',
  });
}

// Disclaimer templates

export async function getDisclaimers(language?: string) {
  const query = language ? `?language=${language}` : '';
  return strapiFetch(`/dashboard/disclaimers${query}`);
}

export async function createDisclaimer(data: {
  name: string;
  category: string;
  language: string;
  content: string;
  shortVersion?: string;
  placement: 'Top' | 'Bottom' | 'Inline' | 'Popup';
  irdaiCode: string;
}) {
  return strapiFetch('/dashboard/disclaimers', {
    method: 'POST',
    body: JSON.stringify({ data }),
  });
}

export async function updateDisclaimer(
  id: string,
  data: Partial<typeof createDisclaimer extends (arg: infer T) => any ? T : never>
) {
  return strapiFetch(`/dashboard/disclaimers/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ data }),
  });
}

export async function deleteDisclaimer(id: string) {
  return strapiFetch(`/dashboard/disclaimers/${id}`, {
    method: 'DELETE',
  });
}

// Forbidden words

export async function getForbiddenWords(category?: string) {
  const query = category ? `?category=${category}` : '';
  return strapiFetch(`/dashboard/forbidden-words${query}`);
}

export async function createForbiddenWord(data: {
  word: string;
  category: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  reason: string;
  irdaiReference?: string;
  suggestedReplacement: string;
}) {
  return strapiFetch('/dashboard/forbidden-words', {
    method: 'POST',
    body: JSON.stringify({ data }),
  });
}

export async function updateForbiddenWord(
  id: string,
  data: Partial<typeof createForbiddenWord extends (arg: infer T) => any ? T : never>
) {
  return strapiFetch(`/dashboard/forbidden-words/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ data }),
  });
}

export async function deleteForbiddenWord(id: string) {
  return strapiFetch(`/dashboard/forbidden-words/${id}`, {
    method: 'DELETE',
  });
}

// IRDAI guidelines

export async function getIrdaiGuidelines(category?: string, status?: string) {
  const params = new URLSearchParams();
  if (category) params.append('category', category);
  if (status) params.append('status', status);
  
  const query = params.toString() ? `?${params.toString()}` : '';
  return strapiFetch(`/dashboard/irdai-guidelines${query}`);
}

export async function getIrdaiGuidelineById(id: string) {
  return strapiFetch(`/dashboard/irdai-guidelines/${id}`);
}

export async function createIrdaiGuideline(data: {
  guidelineCode: string;
  title: string;
  category: string;
  version: string;
  effectiveDate: string;
  expiryDate?: string;
  status: 'Active' | 'Superseded' | 'Pending' | 'Archived';
  documentUrl?: string;
}) {
  return strapiFetch('/dashboard/irdai-guidelines', {
    method: 'POST',
    body: JSON.stringify({ data }),
  });
}

export async function updateIrdaiGuideline(
  id: string,
  data: Partial<typeof createIrdaiGuideline extends (arg: infer T) => any ? T : never>
) {
  return strapiFetch(`/dashboard/irdai-guidelines/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ data }),
  });
}

// Compliance checking

export async function checkContentCompliance(
  content: string,
  contentType: 'Blog Post' | 'Product' | 'Company' | 'Email'
) {
  return strapiFetch('/dashboard/check-compliance', {
    method: 'POST',
    body: JSON.stringify({
      content,
      contentType,
    }),
  });
}

interface ComplianceReport {
  compliant: boolean;
  score: number;
  issues: Array<{
    type: string;
    severity: string;
    message: string;
    suggestion: string;
  }>;
  forbiddenWords: Array<{
    word: string;
    position: number;
    severity: string;
    suggestion: string;
  }>;
  requiredDisclaimers: Array<{
    id: string;
    name: string;
    placement: string;
  }>;
  timestamp: string;
}

export async function validateBlogContent(content: string): Promise<ComplianceReport> {
  return checkContentCompliance(content, 'Blog Post');
}

export async function validateProductContent(content: string): Promise<ComplianceReport> {
  return checkContentCompliance(content, 'Product');
}

// Localization

export async function getLocalizationStatus() {
  return strapiFetch('/dashboard/localization');
}

export async function getTranslationStatus(
  contentType: string,
  contentId: string
) {
  return strapiFetch(`/dashboard/translation-status/${contentType}/${contentId}`);
}

export async function getTranslationCoverage(contentType: string) {
  return strapiFetch(`/dashboard/translation-coverage/${contentType}`);
}

export async function createMultiLanguageContent(
  contentType: string,
  content: Record<string, any>,
  languages: string[]
) {
  return strapiFetch(`/${contentType}`, {
    method: 'POST',
    body: JSON.stringify({
      data: {
        ...content,
        localizations: languages.map((lang) => ({
          locale: lang,
          ...content,
        })),
      },
    }),
  });
}

// Utility functions

export async function getAlerts() {
  const metrics = await getComplianceMetrics();
  const alerts = [];

  if (metrics.complianceRate < 85) {
    alerts.push({
      level: 'warning',
      title: 'Low Compliance Rate',
      message: `Compliance rate is ${metrics.complianceRate}%. Target is 95%.`,
      action: 'View flagged content',
    });
  }

  if (metrics.flagged > 5) {
    alerts.push({
      level: 'warning',
      title: 'Multiple Compliance Issues',
      message: `${metrics.flagged} items flagged for compliance review.`,
      action: 'Review items',
    });
  }

  return alerts;
}

export async function getCategoryStats() {
  const rules = await getComplianceRules();
  const categories = new Map<string, number>();

  rules.forEach((rule: { category: string }) => {
    categories.set(
      rule.category,
      (categories.get(rule.category) || 0) + 1
    );
  });

  return Object.fromEntries(categories);
}

export async function getSeverityDistribution() {
  const rules = await getComplianceRules();
  const distribution = {
    Critical: 0,
    High: 0,
    Medium: 0,
    Low: 0,
  };

  rules.forEach((rule: { severity: keyof typeof distribution }) => {
    distribution[rule.severity]++;
  });

  return distribution;
}

// Real-time dashboard data

export interface DashboardMetrics {
  summary: {
    totalContent: number;
    publishedContent: number;
    totalLeads: number;
    conversionRate: number;
    pendingReview: number;
  };
  compliance: {
    complianceRate: number;
    totalChecks: number;
    approved: number;
    flagged: number;
    rejected: number;
  };
  trends: {
    contentCreation: Array<{ date: string; count: number }>;
    compliance: Array<{ date: string; count: number }>;
    leadGeneration: Array<{ date: string; count: number }>;
  };
}

export async function getFullDashboardMetrics(): Promise<DashboardMetrics> {
  try {
    const [dashboard, compliance, trends] = await Promise.all([
      getDashboard(),
      getComplianceMetrics(),
      getTrendsData(),
    ]);

    return {
      summary: dashboard.summary,
      compliance,
      trends,
    };
  } catch (error) {
    console.error('Error fetching dashboard metrics:', error);
    throw error;
  }
}

// Export report

export async function exportComplianceReport(format: 'csv' | 'json' = 'csv') {
  const data = await exportDashboardReport(format, '30d');
  
  if (format === 'csv') {
    // Convert CSV data to downloadable file
    const blob = new Blob([data], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `compliance-report-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  
  return data;
}
