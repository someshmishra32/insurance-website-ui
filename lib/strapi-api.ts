// Strapi API Service for Next.js Frontend
// Handles all communication between Next.js frontend and Strapi CMS

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN;

// --- Types ---

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiItem<T> {
  id: number;
  attributes: T;
}

export interface BlogPostAttributes {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime?: string; // New optional field
  readingTime?: number; // Legacy field (integer)
  audience?: string;
  takeaways?: { item: string }[]; // Optional for backward compatibility
  coverImage?: {
    data?: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
  featuredImage?: { // Alias for coverImage
    data?: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
}

export interface InsuranceCompanyAttributes {
  name: string;
  slug: string;
  logo: string; // Emoji or URL
  type?: 'term' | 'health' | 'general';
  establishedYear: number;
  claimSettlementRatio: number;
  avgApprovalTime: string;
  hospitalNetwork?: number;
  hospitalNetworkCount?: number; // Alias for hospitalNetwork
  description?: string;
}

export interface InsuranceProductAttributes {
  name: string;
  slug?: string;
  type: 'term' | 'health';
  premiumStartingAt?: string; // New simplified field
  coverageAmount?: string; // New simplified field
  termYears?: number;
  minEntryAge?: number;
  maxEntryAge?: number;
  features?: { feature: string }[];
  advantages?: { advantage?: string; feature?: string }[]; // Supports both structures
  rating?: number;
  medicalExamRequired?: boolean;
  waitingPeriodMonths?: number;
  brochureUrl?: string;
  company: {
    data: StrapiItem<InsuranceCompanyAttributes>;
  };
}

// Frontend-facing types (flattened)
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  audience: string;
  takeaways: string[];
  imageUrl?: string;
}

export interface InsuranceProductFlat {
  id: string; // Composite or slug
  name: string;
  companyName: string;
  companyLogo: string;
  premium: string;
  coverage: string;
  rating: number;
  features: string[];
  advantages: string[];
  brochure?: string;
  claimSettlement: number;
  hospitalNetwork: number;
  avgApprovalTime: string;
  established: number;
  type: 'term' | 'health';
  medicalExam?: string;     // formatting needed
  waitingPeriod?: string;   // formatting needed
}

// --- Adapters ---

function adaptBlogPost(item: StrapiItem<BlogPostAttributes>): BlogPost {
  const attrs = item.attributes;

  // Handle both readTime (string) and readingTime (integer) fields
  let readTimeDisplay = attrs.readTime || '';
  if (!readTimeDisplay && attrs.readingTime) {
    readTimeDisplay = `${attrs.readingTime} min read`;
  }
  if (!readTimeDisplay) {
    readTimeDisplay = '5 min read';
  }

  // Handle both coverImage and featuredImage
  let imageUrl: string | undefined;
  if (attrs.coverImage?.data?.attributes?.url) {
    imageUrl = `${API_URL}${attrs.coverImage.data.attributes.url}`;
  } else if (attrs.featuredImage?.data?.attributes?.url) {
    imageUrl = `${API_URL}${attrs.featuredImage.data.attributes.url}`;
  }

  return {
    id: item.id,
    title: attrs.title,
    slug: attrs.slug,
    excerpt: attrs.excerpt || '',
    content: attrs.content || '',
    category: attrs.category || 'General',
    date: new Date(attrs.publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
    readTime: readTimeDisplay,
    audience: attrs.audience || 'General Audience',
    takeaways: attrs.takeaways?.map(t => t.item) || [],
    imageUrl,
  };
}

function adaptInsuranceProduct(item: StrapiItem<InsuranceProductAttributes>): InsuranceProductFlat {
  const attrs = item.attributes;
  const companyAttrs = attrs.company?.data?.attributes;

  // Handle advantages that might use either 'advantage' or 'feature' field
  const advantagesList = attrs.advantages?.map(a => a.advantage || a.feature).filter(Boolean) as string[] || [];

  return {
    id: attrs.slug || `product-${item.id}`,
    name: attrs.name,
    type: attrs.type,
    premium: attrs.premiumStartingAt || 'Contact for quote',
    coverage: attrs.coverageAmount || 'Varies',
    rating: attrs.rating || 0,
    features: attrs.features?.map(f => f.feature).filter(Boolean) as string[] || [],
    advantages: advantagesList,
    brochure: attrs.brochureUrl,

    // Company details flattened into product
    companyName: companyAttrs?.name || 'Unknown Company',
    companyLogo: companyAttrs?.logo || '🏢',
    claimSettlement: companyAttrs?.claimSettlementRatio || 0,
    hospitalNetwork: companyAttrs?.hospitalNetworkCount || companyAttrs?.hospitalNetwork || 0,
    avgApprovalTime: companyAttrs?.avgApprovalTime || 'N/A',
    established: companyAttrs?.establishedYear || 2000,

    // Formatted fields for UI
    medicalExam: attrs.medicalExamRequired ? "Required" : "No (conditions apply)",
    waitingPeriod: attrs.waitingPeriodMonths ? `${attrs.waitingPeriodMonths} months` : "None",
  };
}

// --- API Client ---

interface RequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  tags?: string[];
  cache?: RequestCache;
}

/**
 * Core fetch wrapper with Error Handling and Auth
 */
async function fetchAPI<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { method = 'GET', headers = {}, body, tags = [], cache = 'force-cache' } = options;

  // Clean path to ensure valid URL
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${API_URL}/api${cleanPath}`;

  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    cache,
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

  if (tags.length > 0) {
    fetchOptions.next = { tags };
  }

  try {
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      // Try to parse error message
      let errorMessage = `Strapi API error: ${response.status} ${response.statusText}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.error?.message || errorMessage;
        console.error(`[Strapi] API Error Details:`, errorData);
      } catch (e) {
        // failed to parse json, use generic error
      }

      // Provide helpful debugging info for common errors
      if (response.status === 401) {
        console.error('[Strapi] Authentication failed. Check your STRAPI_API_TOKEN in .env.local');
      } else if (response.status === 403) {
        console.error('[Strapi] Access forbidden. Check Strapi Public role permissions.');
      } else if (response.status === 404) {
        console.error(`[Strapi] Endpoint not found: ${url}`);
      }

      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    // Enhanced error logging for debugging
    if (error instanceof TypeError && error.message.includes('fetch')) {
      console.error(`[Strapi] Network error - Cannot connect to ${API_URL}`);
      console.error('[Strapi] Ensure Strapi is running on port 1337');
      console.error('[Strapi] Check CORS configuration in Strapi config/middlewares.js');
    } else {
      console.error(`[Strapi] Error fetching ${url}:`, error);
    }

    // In production, you might want to return default/fallback data instead of throwing
    // For now, rethrow to handle in UI components
    throw error;
  }
}

// --- Endpoints ---

/**
 * Get all blog posts
 */
export async function getBlogPosts(filters?: { category?: string; search?: string }): Promise<BlogPost[]> {
  const query = new URLSearchParams();
  query.append('populate', '*'); // Or specify fields: populate[0]=takeaways&populate[1]=coverImage
  query.append('sort', 'publishedAt:desc');
  // query.append('pagination[pageSize]', '100'); // Fetch all for now

  if (filters?.category && filters.category !== 'All') {
    query.append('filters[category][$eq]', filters.category);
  }

  if (filters?.search) {
    query.append('filters[title][$contains]', filters.search);
  }

  try {
    const data = await fetchAPI<StrapiResponse<StrapiItem<BlogPostAttributes>[]>>(`/blog-posts?${query.toString()}`, {
      tags: ['blog-posts']
    });
    return data.data.map(adaptBlogPost);
  } catch (error) {
    console.warn("Failed to fetch blog posts, returning empty array.");
    return [];
  }
}

/**
 * Get single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const query = new URLSearchParams();
    query.append('filters[slug][$eq]', slug);
    query.append('populate', '*');

    const data = await fetchAPI<StrapiResponse<StrapiItem<BlogPostAttributes>[]>>(`/blog-posts?${query.toString()}`, {
      tags: [`blog-post-${slug}`]
    });

    if (data.data.length === 0) return null;
    return adaptBlogPost(data.data[0]);
  } catch (error) {
    console.warn(`Failed to fetch blog post ${slug}.`);
    return null;
  }
}

/**
 * Get all insurance products (comparable format)
 */
export async function getInsuranceProducts(type?: 'term' | 'health'): Promise<InsuranceProductFlat[]> {
  try {
    const query = new URLSearchParams();
    query.append('populate[company][populate]', '*'); // Nested populate
    query.append('populate[features]', '*');
    query.append('populate[advantages]', '*');

    if (type) {
      query.append('filters[type][$eq]', type);
    }

    const data = await fetchAPI<StrapiResponse<StrapiItem<InsuranceProductAttributes>[]>>(`/insurance-products?${query.toString()}`, {
      tags: ['insurance-products']
    });

    return data.data.map(adaptInsuranceProduct);
  } catch (error) {
    console.warn("Failed to fetch insurance products.");
    return [];
  }
}

// Helper to get all slugs for static generation
export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const data = await fetchAPI<StrapiResponse<StrapiItem<{ slug: string }>[]>>('/blog-posts?fields[0]=slug&pagination[pageSize]=1000');
    return data.data.map(item => item.attributes.slug);
  } catch (error) {
    return [];
  }
}

export default {
  fetchAPI,
  getBlogPosts,
  getBlogPostBySlug,
  getInsuranceProducts,
  getAllBlogSlugs
};

