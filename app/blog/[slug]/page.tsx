import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"
import { ArticleNavigation } from "@/components/article-navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, User, Facebook, Twitter, Linkedin, Link as LinkIcon, CheckCircle2, Share2, ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = blogPosts.find(p => p.slug === slug)

    if (!post) {
        return {
            title: "Post Not Found | InsureWise",
        }
    }

    return {
        title: `${post.title} | InsureWise`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: ["InsureWise Team"],
            images: post.image ? [post.image] : [],
        },
    }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = blogPosts.find(p => p.slug === slug)

    if (!post) {
        notFound()
    }

    // Get related articles (same category, exclude current)
    const similarArticles = blogPosts
        .filter(p => p.category === post.category && p.slug !== slug)
        .slice(0, 3)
        .map(p => ({
            title: p.title,
            slug: p.slug,
            href: `/blog/${p.slug}`,
            image: p.image
        }))

    // If not enough similar articles in category, fill with random others
    if (similarArticles.length < 3) {
        const otherPosts = blogPosts
            .filter(p => p.slug !== slug && !similarArticles.find(s => s.slug === p.slug))
            .slice(0, 3 - similarArticles.length)
            .map(p => ({
                title: p.title,
                slug: p.slug,
                href: `/blog/${p.slug}`,
                image: p.image
            }))
        similarArticles.push(...otherPosts)
    }

    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back to Blog
                </Link>
            </div>

            <article className="pb-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                                {post.category}
                            </Badge>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-balance leading-tight">
                            {post.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between py-6 border-y mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <User className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm">InsureWise Expert Team</p>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <span>Insurance Analysis</span>
                                    </div>
                                </div>
                            </div>
                            <Button variant="ghost" size="sm" className="gap-2">
                                <Share2 className="w-4 h-4" />
                                <span className="hidden sm:inline">Share</span>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_300px] gap-12">
                        <div className="prose prose-lg max-w-none">
                            {/* Hero Image in Content */}
                            {post.image && (
                                <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-lg border not-prose">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            )}

                            {/* Introduction / Overview */}
                            <p className="lead">
                                Making the right decision about {post.category.toLowerCase()} is crucial for your financial security.
                                This guide breaks down everything you need to know about <strong>{post.title}</strong> to help you choose wisely.
                            </p>

                            {/* Key Takeaways */}
                            {post.takeaways && (
                                <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8 not-prose rounded-r-lg">
                                    <h3 className="font-bold text-lg mb-4 text-green-900 flex items-center gap-2">
                                        <CheckCircle2 className="w-6 h-6" />
                                        Key Takeaways
                                    </h3>
                                    <ul className="space-y-3">
                                        {post.takeaways.map((takeaway, index) => (
                                            <li key={index} className="flex items-start gap-3 text-green-800">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-green-600 rounded-full shrink-0" />
                                                <span>{takeaway}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Dynamic Content Body */}
                            {post.content ? (
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            ) : (
                                <>
                                    <h2>Understanding the Basics</h2>
                                    <p>
                                        When evaluating {post.category}, it's essential to look beyond just the premiums.
                                        The "fine print" often contains the most critical details regarding coverage limits, exclusions, and claim procedures.
                                    </p>

                                    <h2>Who Is This For?</h2>
                                    {post.audience && (
                                        <div className="bg-blue-50 p-6 rounded-lg mb-6 not-prose">
                                            <p className="font-medium text-blue-900 mb-2">Target Audience</p>
                                            <p className="text-blue-800">{post.audience}</p>
                                        </div>
                                    )}

                                    <p>
                                        Whether you are a first-time buyer or looking to port your existing policy, understanding these nuances
                                        can save you significant money and stress during a claim.
                                    </p>

                                    <h2>Expert Recommendation</h2>
                                    <p>
                                        We strongly advise comparing at least 3 different plans before making a commitment.
                                        Look for a Claim Settlement Ratio (CSR) above 95% and ensure the network hospitals list includes facilities near your residence.
                                    </p>
                                </>
                            )}

                            {/* CTA */}
                            <div className="my-10 not-prose text-center bg-gray-50 p-8 rounded-2xl border">
                                <h3 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h3>
                                <p className="text-muted-foreground mb-6">
                                    Our experts can help you navigate these choices based on your specific family and financial situation.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <ExpertAdviceButton size="lg">Get Free Advice</ExpertAdviceButton>
                                    <Button variant="outline" size="lg" asChild>
                                        <Link href="/compare">Compare Plans Now</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="hidden md:block">
                            <div className="sticky top-24 space-y-8">
                                <div className="p-6 bg-muted/30 rounded-xl border">
                                    <h4 className="font-semibold mb-4">Related Topics</h4>
                                    <ul className="space-y-3 text-sm">
                                        {similarArticles.map((article) => (
                                            <li key={article.slug}>
                                                <Link href={article.href} className="text-muted-foreground hover:text-primary transition-colors block leading-snug">
                                                    {article.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            {/* Article Navigation */}
            <section className="py-12 bg-muted/10 border-t">
                <div className="container mx-auto px-4 max-w-4xl">
                    <ArticleNavigation
                        currentSlug={post.slug}
                        articles={blogPosts.map(p => ({
                            title: p.title,
                            slug: p.slug,
                            href: `/blog/${p.slug}`,
                            image: p.image
                        }))}
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-muted/30 py-12 border-t">
                <div className="container mx-auto px-4">
                    <div className="pt-8 text-center text-sm text-muted-foreground">
                        <p>© 2025 InsureWise. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
