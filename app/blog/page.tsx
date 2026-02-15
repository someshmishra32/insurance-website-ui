"use client"

import Link from "next/link"
import Image from "next/image"
import { blogPosts, BlogPost } from "@/lib/blog-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { LeadCaptureForm } from "@/components/lead-capture-form"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { Footer } from "@/components/footer"
import { Landmark, Shield, Search, X } from "lucide-react"
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

  /* Local blogPosts array removed in favor of import from @/lib/blog-data */

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

      {/* Mission 2047 Featured Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-balance leading-tight">
                Insurance for All by 2047: What It Means for Every Indian
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-95 leading-relaxed">
                Understanding IRDAI's Mission 2047, GST reforms, and how insurance is becoming simpler, affordable, and
                transparent
              </p>
            </div>

            {/* Mission Visual Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
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
              <ExpertAdviceButton size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
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
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
                    <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(category)}
                          className="whitespace-nowrap shrink-0"
                        >
                          {category}
                        </Button>
                      ))}
                      {(searchQuery || selectedCategory !== "All") && (
                        <Button variant="ghost" size="sm" onClick={clearFilters} className="whitespace-nowrap shrink-0">
                          <X className="w-4 h-4 mr-1" />
                          Clear Filters
                        </Button>
                      )}
                    </div>
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
          {/* Blog Posts Grid */}
          <div className="w-full">
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
                          <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>

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
                          <WhatsAppButton variant="secondary" />
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
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      <Footer />
    </div >
  )
}
