"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { BlogPost } from "@/lib/strapi-api"

interface BlogContentProps {
    initialPosts: BlogPost[]
}

export function BlogContent({ initialPosts }: BlogContentProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    // In a real app with many posts, you might trigger a server fetch here. 
    // For < 100 posts, client-side filtering is instant and fine.

    // Extract unique categories from posts or use predefined list
    const categories = [
        "All",
        "Term Insurance",
        "Health Insurance",
        "Family Floater",
        "Claim Process",
        "Senior Citizens",
        "Government Initiatives",
        // Add dynamically found categories if needed
        ...Array.from(new Set(initialPosts.map(p => p.category))).filter(c =>
            !["Term Insurance", "Health Insurance", "Family Floater", "Claim Process", "Senior Citizens", "Government Initiatives"].includes(c)
        )
    ]

    // Filter blog posts based on search query and category
    const filteredPosts = initialPosts.filter(post => {
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
        <>
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
                                                    {post.takeaways.length > 0 && (
                                                        <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-100">
                                                            <p className="text-xs font-semibold text-green-900 mb-2">Key Takeaways:</p>
                                                            <ul className="text-xs text-green-700 space-y-1">
                                                                {post.takeaways.slice(0, 3).map((takeaway, idx) => (
                                                                    <li key={idx} className="flex gap-2">
                                                                        <span>✓</span>
                                                                        <span>{takeaway}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

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
                                        <div className="sticky top-24 ml-4">
                                            <div className="flex flex-col h-full">
                                                {/* Image Section - Full Width Top */}
                                                <div className="flex justify-center mb-4">
                                                    <div className="w-full bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-200">
                                                        <img 
                                                            src="/images/personalized-advice-illustration.png" 
                                                            alt="Personalized Advice" 
                                                            className="w-full h-64 object-cover"
                                                        />
                                                    </div>
                                                </div>
                                                
                                                {/* Advice Card - Below Image, Full Width */}
                                                <div className="flex-grow">
                                                    <Card className="bg-primary text-primary-foreground h-full">
                                                        <CardContent className="p-6 flex flex-col justify-between h-full">
                                                            <div>
                                                                <h3 className="text-lg font-bold mb-3">Need Personalized Advice?</h3>
                                                                <p className="text-sm mb-4 opacity-90 leading-relaxed">
                                                                    Talk to an expert and get recommendations tailored to your needs.
                                                                </p>
                                                            </div>
                                                            <div className="space-y-2">
                                                                <ExpertAdviceButton variant="secondary" className="w-full text-sm py-2">
                                                                    Get Free Consultation
                                                                </ExpertAdviceButton>
                                                                <WhatsAppButton variant="secondary" className="w-full text-sm py-2" />
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Load More */}
                                {/* <div className="mt-12 text-center">
                    <Button variant="outline" size="lg">
                      Load More Articles
                    </Button>
                  </div> */}
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
