// Strapi API Service for Next.js Frontend
// Handles all communication between Next.js frontend and Strapi CMS

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN;

interface RequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  tags?: string[];
}

/**
 * Make authenticated request to Strapi
 */
async function fetchAPI(
  path: string,
  options: RequestOptions = {}
) {
  const { method = 'GET', headers = {}, body, tags = [] } = options;

  const url = `${API_URL}/api${path}`;

  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (API_TOKEN) {
    fetchOptions.headers = {
      ...fetchOptions.headers,
      Authorization: `Bearer ${API_TOKEN}`,
    };
  }

  if (body) {
    fetchOptions.body = JSON.stringify(body);
  }

  // Add revalidation tags for ISR
  if (tags.length > 0 && 'next' in fetchOptions) {
    fetchOptions.next = { tags };
  }

  try {
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Strapi API Error:', error);
    throw error;
  }
}

/**
 * Get all published blog posts
 */
export async function getBlogPosts(filters?: any) {
  const query = new URLSearchParams();
  query.append('filters[status][$eq]', 'Published');
  query.append('populate', '*');
  query.append('sort', 'publishedAt:desc');
  query.append('pagination[pageSize]', '10');

  if (filters?.category) {
    query.append('filters[category][$eq]', filters.category);
  }

  if (filters?.search) {
    query.append('filters[title][$contains]', filters.search);
  }

  const response = await fetchAPI(
    `/blog-posts?${query.toString()}`,
    { tags: ['blog-posts'] }
  );

  return response.data || [];
}

/**
 * Get single blog post by slug
 */
export async function getBlogPostBySlug(slug: string) {
  const response = await fetchAPI(
    `/blog-posts?filters[slug][$eq]=${slug}&populate=*`,
    { tags: [`blog-post-${slug}`] }
  );

  return response.data?.[0] || null;
}

/**
 * Get all insurance companies
 */
export async function getInsuranceCompanies(filters?: any) {
  const query = new URLSearchParams();
  query.append('filters[status][$eq]', 'Active');
  query.append('populate', 'products,logo');
  query.append('sort', 'name:asc');

  if (filters?.type) {
    query.append('filters[products][type][$eq]', filters.type);
  }

  const response = await fetchAPI(
    `/insurance-companies?${query.toString()}`,
    { tags: ['insurance-companies'] }
  );

  return response.data || [];
}

/**
 * Get company by slug
 */
export async function getCompanyBySlug(slug: string) {
  const response = await fetchAPI(
    `/insurance-companies?filters[slug][$eq]=${slug}&populate=*`,
    { tags: [`company-${slug}`] }
  );

  return response.data?.[0] || null;
}

/**
 * Get all insurance products
 */
export async function getInsuranceProducts(filters?: any) {
  const query = new URLSearchParams();
  query.append('filters[isActive][$eq]', 'true');
  query.append('populate', 'company,features,riders');
  query.append('sort', 'name:asc');

  if (filters?.type) {
    query.append('filters[type][$eq]', filters.type);
  }

  if (filters?.companyId) {
    query.append('filters[company][id][$eq]', filters.companyId);
  }

  const response = await fetchAPI(
    `/insurance-products?${query.toString()}`,
    { tags: ['insurance-products'] }
  );

  return response.data || [];
}

/**
 * Create lead
 */
export async function createLead(leadData: {
  email: string;
  name: string;
  phone: string;
  insuranceType: string;
  source: string;
  consentGiven: boolean;
}) {
  const response = await fetchAPI('/leads', {
    method: 'POST',
    body: {
      data: {
        ...leadData,
        status: 'New',
        consentGiven: leadData.consentGiven,
        ipAddress: getClientIP(),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      },
    },
  });

  return response.data;
}

/**
 * Get published comparison data
 */
export async function getComparisonData(type: string) {
  const query = new URLSearchParams();
  query.append('filters[type][$eq]', type);
  query.append('filters[isActive][$eq]', 'true');
  query.append('populate', 'company,features,riders,inclusionsExclusions');

  const response = await fetchAPI(
    `/insurance-products?${query.toString()}`,
    { tags: ['comparison-data', type] }
  );

  return response.data || [];
}

/**
 * Search across content
 */
export async function searchContent(query: string) {
  const encoded = encodeURIComponent(query);

  const [blogs, companies, products] = await Promise.all([
    fetchAPI(
      `/blog-posts?filters[title][$contains]=${encoded}&filters[status][$eq]=Published&populate=*`,
      { tags: ['search'] }
    ),
    fetchAPI(
      `/insurance-companies?filters[name][$contains]=${encoded}&filters[status][$eq]=Active`,
      { tags: ['search'] }
    ),
    fetchAPI(
      `/insurance-products?filters[name][$contains]=${encoded}&filters[isActive][$eq]=true`,
      { tags: ['search'] }
    ),
  ]);

  return {
    blogs: blogs.data || [],
    companies: companies.data || [],
    products: products.data || [],
  };
}

/**
 * Invalidate ISR cache
 */
export async function revalidateCache(paths: string[]) {
  try {
    const response = await fetch('/api/revalidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-prerender-revalidate-secret': process.env.PRERENDER_SECRET || '',
      },
      body: JSON.stringify({ paths }),
    });

    return response.ok;
  } catch (error) {
    console.error('Cache revalidation failed:', error);
    return false;
  }
}

/**
 * Get client IP address (for lead tracking)
 */
function getClientIP(): string {
  if (typeof window === 'undefined') {
    return '0.0.0.0';
  }

  // Client-side: fetch from API
  return 'N/A';
}

export default {
  fetchAPI,
  getBlogPosts,
  getBlogPostBySlug,
  getInsuranceCompanies,
  getCompanyBySlug,
  getInsuranceProducts,
  createLead,
  getComparisonData,
  searchContent,
  revalidateCache,
};
