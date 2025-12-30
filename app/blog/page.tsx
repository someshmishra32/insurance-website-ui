"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { LeadCaptureForm } from "@/components/lead-capture-form"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { Landmark, Shield, Search, X } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { useState } from "react"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = [
    "All",
    "Term Insurance",
    "Health Insurance",
    "Family Floater",
    "Claim Process",
    "Senior Citizens",
    "Government Initiatives",
  ]

  const blogPosts = [
    {
      title: "Term Insurance vs. Whole Life: Which is Right for You?",
      excerpt:
        "Understanding the key differences between term and whole life insurance policies to make the best choice for your family. We break down costs, benefits, and ideal scenarios.",
      category: "Term Insurance",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      audience: "Anyone planning life insurance coverage",
      takeaways: [
        "Term insurance is 70-80% cheaper than whole life",
        "Whole life includes investment but lower returns",
        "Most families benefit more from pure term coverage",
      ],
      slug: "term-vs-whole-life-insurance",
    },
    {
      title: "Top 5 Things to Check Before Buying Health Insurance",
      excerpt:
        "Essential checklist to ensure you get comprehensive coverage without overpaying for unnecessary features. Learn about waiting periods, room rent limits, and more.",
      category: "Health Insurance",
      readTime: "7 min read",
      date: "Dec 12, 2024",
      audience: "First-time health insurance buyers",
      takeaways: [
        "Always check waiting periods for pre-existing conditions",
        "Room rent limits can significantly affect out-of-pocket costs",
        "Co-payment clauses reduce premium but increase claim costs",
      ],
      slug: "top-5-things-to-check-before-buying-health-insurance",
    },
    {
      title: "How to File Insurance Claims Successfully: A Step-by-Step Guide",
      excerpt:
        "Navigate the claim process with confidence. Learn the documents needed and common mistakes to avoid during the crucial claim filing period.",
      category: "Claim Process",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      audience: "Insurance claimants",
      takeaways: [
        "Keep all relevant documents organized",
        "Contact your insurer promptly after an incident",
        "Avoid making unnecessary statements",
      ],
      slug: "how-to-file-insurance-claims-successfully",
    },
    {
      title: "Understanding Co-payment and Deductibles in Health Insurance",
      excerpt:
        "What are co-payment clauses and how do they affect your out-of-pocket expenses? A detailed explanation with real examples.",
      category: "Health Insurance",
      readTime: "5 min read",
      date: "Dec 8, 2024",
      audience: "Health insurance policyholders",
      takeaways: [
        "Co-payment reduces your premium",
        "Deductibles are the amount you pay first",
        "Review your policy terms carefully",
      ],
      slug: "understanding-co-payment-and-deductibles-in-health-insurance",
    },
    {
      title: "Best Health Insurance Plans for Senior Citizens in 2024",
      excerpt:
        "Comprehensive comparison of senior citizen health insurance plans available in India, including coverage limits, premium costs, and pre-existing disease coverage.",
      category: "Senior Citizens",
      readTime: "8 min read",
      date: "Dec 5, 2024",
      audience: "Senior citizens and their families",
      takeaways: [
        "Look for plans with no waiting period",
        "Prioritize coverage for common senior health issues",
        "Consider plans with higher room rent limits",
      ],
      slug: "best-health-insurance-plans-for-senior-citizens-in-2024",
    },
    {
      title: "Family Floater vs Individual Health Plans: What's Better?",
      excerpt:
        "Should you buy a family floater or individual policies for each family member? We analyze the pros and cons based on different family structures.",
      category: "Family Floater",
      readTime: "6 min read",
      date: "Dec 3, 2024",
      audience: "Families considering health insurance",
      takeaways: [
        "Family floater offers shared coverage",
        "Individual plans cater to specific needs",
        "Compare costs and benefits thoroughly",
      ],
      slug: "family-floater-vs-individual-health-plans",
    },
    {
      title: "Critical Illness Riders: Are They Worth the Extra Premium?",
      excerpt:
        "Detailed analysis of critical illness riders in term insurance. Learn which diseases are covered, claim statistics, and whether you actually need this add-on.",
      category: "Term Insurance",
      readTime: "7 min read",
      date: "Nov 28, 2024",
      audience: "Term insurance buyers",
      takeaways: [
        "Critical illness riders cover 30-40 major diseases",
        "Lump sum payout on diagnosis, not death",
        "Consider your family medical history before adding",
      ],
      slug: "critical-illness-riders",
    },
    {
      title: "How Much Life Insurance Cover Do You Really Need?",
      excerpt:
        "Stop guessing! Use our proven calculation method to determine the exact life insurance coverage your family needs based on your income, debts, and future goals.",
      category: "Term Insurance",
      readTime: "6 min read",
      date: "Nov 25, 2024",
      audience: "Working professionals planning life insurance",
      takeaways: [
        "Calculate 10-15x your annual income as baseline",
        "Add all outstanding debts and loans",
        "Include children's education and marriage expenses",
      ],
      slug: "how-much-life-insurance-cover-do-you-really-need",
    },
    {
      title: "Pre-Existing Disease Coverage: What You Need to Know",
      excerpt:
        "Everything about waiting periods, disclosure requirements, and how to get your pre-existing conditions covered without claim rejection.",
      category: "Health Insurance",
      readTime: "8 min read",
      date: "Nov 20, 2024",
      audience: "People with existing health conditions",
      takeaways: [
        "Always disclose pre-existing conditions truthfully",
        "Waiting periods range from 2-4 years typically",
        "Some plans offer reduced waiting periods at higher premium",
      ],
      slug: "pre-existing-disease-coverage",
    },
    {
      title: "Maternity Coverage in Health Insurance: Complete Guide",
      excerpt:
        "Planning to start a family? Understand maternity benefits, waiting periods, newborn coverage, and which health insurance plans offer the best maternity coverage.",
      category: "Health Insurance",
      readTime: "7 min read",
      date: "Nov 15, 2024",
      audience: "Couples planning for children",
      takeaways: [
        "Maternity waiting period is typically 2-4 years",
        "Coverage includes normal and C-section delivery",
        "Newborn baby covered from day one under most plans",
      ],
      slug: "maternity-coverage-in-health-insurance",
    },
    {
      title: "Top 7 Reasons Why Insurance Claims Get Rejected",
      excerpt:
        "Learn the most common reasons for claim rejection and how to avoid them. Real case studies and expert tips to ensure your claim gets approved.",
      category: "Claim Process",
      readTime: "9 min read",
      date: "Nov 10, 2024",
      audience: "All insurance policyholders",
      takeaways: [
        "Non-disclosure is the #1 reason for rejection",
        "Keep all original bills and medical records",
        "File claims within the specified time limits",
      ],
      slug: "top-7-reasons-why-insurance-claims-get-rejected",
    },
    {
      title: "Health Insurance for Diabetics: Best Plans and Coverage Tips",
      excerpt:
        "Comprehensive guide for diabetics looking for health insurance. Compare plans, understand waiting periods, and learn about specialized diabetic care coverage.",
      category: "Health Insurance",
      readTime: "8 min read",
      date: "Nov 5, 2024",
      audience: "Diabetics and pre-diabetics",
      takeaways: [
        "Disclose diabetes during policy purchase",
        "Look for plans covering diabetic complications",
        "Annual health check-ups often included",
      ],
      slug: "health-insurance-for-diabetics",
    },
    {
      title: "Insurance for All by 2047: What It Means for Every Indian",
      excerpt:
        "Understanding IRDAI's Mission 2047, GST reforms, and how insurance is becoming simpler, affordable, and transparent",
      category: "Government Initiatives",
      readTime: "10 min read",
      date: "Nov 1, 2024",
      audience: "All Indians",
      takeaways: [
        "IRDAI aims to provide insurance coverage to every Indian by 2047",
        "GST reforms have made insurance more affordable",
        "Increased transparency and simplicity in insurance policies",
      ],
      slug: "mission-2047-insurance-for-all",
    },
  ]

  // Filter blog posts based on search query and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.takeaways.some(takeaway => takeaway.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("All")
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Mission 2047 Featured Hero */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 400 50 L 450 150 L 550 150 L 480 210 L 510 310 L 400 250 L 290 310 L 320 210 L 250 150 L 350 150 Z"
                fill="none"
                stroke="white"
                strokeWidth="1"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Featured Badge */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Landmark className="w-4 h-4 mr-2" />
                Featured: Government Initiative
              </Badge>
            </div>

            {/* Hero Content */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                Insurance for All by 2047: What It Means for Every Indian
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
                Understanding IRDAI's Mission 2047, GST reforms, and how insurance is becoming simpler, affordable, and
                transparent
              </p>
            </div>

            {/* Mission Visual Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Shield className="w-8 h-8" />
                </div>
                <p className="text-sm font-medium">Life Insurance</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium">Health Insurance</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium">Property Cover</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl font-bold">
                  2047
                </div>
                <p className="text-sm font-medium">Mission Goal</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/blog/mission-2047-insurance-for-all">Read Full Article →</Link>
              </Button>
              <ExpertAdviceButton size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Get Expert Guidance
              </ExpertAdviceButton>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Blog Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">More Insurance Guides & Tips</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Expert insights and honest advice to help you understand insurance better
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search blog posts, topics, or keywords..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  {/* Category Filters */}
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium text-muted-foreground self-center">Filter by:</span>
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                    {(searchQuery || selectedCategory !== "All") && (
                      <Button variant="ghost" size="sm" onClick={clearFilters}>
                        <X className="w-4 h-4 mr-1" />
                        Clear Filters
                      </Button>
                    )}
                  </div>

                  {/* Results Count */}
                  <div className="text-sm text-muted-foreground">
                    {filteredPosts.length} {filteredPosts.length === 1 ? "result" : "results"} found
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className="w-full text-left px-3 py-2 rounded-md hover:bg-muted transition-colors text-sm"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Blog Posts Grid */}
            <div className="flex-1">
              {filteredPosts.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No posts found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search terms or browse all categories.
                    </p>
                    <Button onClick={clearFilters}>Clear Filters</Button>
                  </CardContent>
                </Card>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                      {filteredPosts.map((post, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                          <CardContent className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 flex-wrap">
                              <Badge variant="secondary" className="font-medium">
                                {post.category}
                              </Badge>
                              <span>•</span>
                              <span>{post.readTime}</span>
                              <span>•</span>
                              <span>{post.date}</span>
                            </div>

                            {/* Who should read this? section */}
                            <div className="mb-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                              <p className="text-xs font-semibold text-blue-900 mb-1">Who should read this?</p>
                              <p className="text-xs text-blue-700">{post.audience}</p>
                            </div>

                            <h3 className="font-semibold text-xl mb-3 line-clamp-2">{post.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed flex-1">
                              {post.excerpt}
                            </p>

                            {/* Key Takeaways section */}
                            <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-100">
                              <p className="text-xs font-semibold text-green-900 mb-2">Key Takeaways:</p>
                              <ul className="text-xs text-green-700 space-y-1">
                                {post.takeaways.map((takeaway, idx) => (
                                  <li key={idx} className="flex gap-2">
                                    <span>✓</span>
                                    <span>{takeaway}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <Link href={`/blog/${post.slug}`}>
                              <Button variant="link" className="px-0 mt-auto self-start">
                                Read full article →
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="hidden lg:block">
                      <div className="sticky top-24">
                        <Card className="bg-primary text-primary-foreground">
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-3">Need Personalized Advice?</h3>
                            <p className="text-sm mb-4 opacity-90 leading-relaxed">
                              Talk to an expert and get recommendations tailored to your needs.
                            </p>
                            <ExpertAdviceButton variant="secondary" className="w-full mb-3">
                              Get Free Consultation
                            </ExpertAdviceButton>
                            <WhatsAppButton variant="secondary" className="w-full" />
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>

                  {/* Load More */}
                  <div className="mt-12 text-center">
                    <Button variant="outline" size="lg">
                      Load More Articles
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="pt-8 text-center text-sm text-muted-foreground space-y-2">
            <p className="leading-relaxed">
              <strong>Disclaimer:</strong> Insurance is subject to terms and conditions. Information provided is for
              educational purposes only.
            </p>
            <p>© 2025 InsureWise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
