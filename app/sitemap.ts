import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://insurewise.com'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/compare',
    '/learn',
    '/calculator',
    '/policy-check',
    '/ai-assistant',
    '/claims',
    '/faq',
    '/testimonials',
    '/transparency',
  ]

  // Blog articles
  const blogArticles = [
    '/blog',
    '/blog/term-vs-whole-life-insurance',
    '/blog/top-5-things-to-check-before-buying-health-insurance',
    '/blog/gst-relief-insurance-2025',
    '/blog/mission-2047-insurance-for-all',
  ]

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const blogRoutes = blogArticles.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}
