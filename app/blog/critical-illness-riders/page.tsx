import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { ArticleNavigation } from "@/components/article-navigation"
import { blogPosts } from "@/lib/blog-data"
import { Shield, CheckCircle2, AlertCircle, Heart, HeartPulse, Activity } from "lucide-react"

export const metadata = {
    title: "Critical Illness Riders: Are They Worth the Extra Premium? | InsureWise",
    description:
        "Detailed analysis of critical illness riders in term insurance. Learn which diseases are covered, claim statistics, and whether you actually need this add-on.",
    keywords:
        "critical illness rider, term insurance rider, critical illness cover, term insurance add-on, critical illness insurance",
}

export default function CriticalIllnessRidersBlogPost() {
    const articles = blogPosts.map(post => ({
        title: post.title,
        slug: post.slug,
        href: `/blog/${post.slug}`,
        image: post.image
    }))

    const currentPost = blogPosts.find(p => p.slug === "critical-illness-riders")
    const postImage = currentPost?.image || "/placeholder.svg"

    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <nav className="border-b bg-background sticky top-0 z-50 backdrop-blur-sm bg-background/95">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-2xl font-bold text-primary">
                            InsureWise
                        </Link>
                        <div className="hidden md:flex items-center gap-6">
                            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                                Home
                            </Link>
                            <Link href="/compare" className="text-sm font-medium hover:text-primary transition-colors">
                                Compare Plans
                            </Link>
                            <Link href="/blog" className="text-sm font-medium text-primary">
                                Learn Insurance
                            </Link>
                            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                                Get Expert Advice
                            </Link>
                            <WhatsAppButton />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Article */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <HeartPulse className="w-5 h-5 text-red-600" />
                            <span className="text-sm font-medium text-red-600">Term Insurance</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                            Critical Illness Riders: Are They Worth the Extra Premium?
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                            A detailed analysis of critical illness riders to help you decide if this add-on is right for you
                        </p>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-lg border">
                            <Image
                                src={postImage}
                                alt="Critical Illness Riders: Are They Worth the Extra Premium?"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            {/* Key Takeaways */}
                            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
                                <h3 className="font-bold text-lg mb-3 text-green-900">Key Takeaways</h3>
                                <ul className="space-y-2 text-green-800">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Critical illness riders cover 30-40 major diseases with lump sum payout</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Lump sum payout on diagnosis, not death – helps with treatment costs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Consider your family medical history before adding this rider</span>
                                    </li>
                                </ul>
                            </div>

                            {/* What is Critical Illness Rider */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Shield className="w-8 h-8 text-blue-600" />
                                    What is a Critical Illness Rider?
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    A critical illness rider is an add-on to your term insurance policy that pays out a lump sum amount when you're diagnosed with any of the covered critical illnesses. Unlike regular health insurance which reimburses hospital bills, this pays you directly regardless of actual expenses.
                                </p>

                                <Card className="mb-6">
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg mb-4">How It Works</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                                <p className="text-sm text-blue-800 font-medium mb-2">Regular Term Insurance</p>
                                                <p className="text-sm text-blue-800">Pays only on death of the policyholder</p>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                                <p className="text-sm text-green-800 font-medium mb-2">With Critical Illness Rider</p>
                                                <p className="text-sm text-green-800">Pays lump sum on diagnosis of covered illness (you receive money while alive)</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* Diseases Covered */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Heart className="w-8 h-8 text-red-600" />
                                    What Diseases Are Covered?
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Most critical illness riders cover 30-40 major diseases. Here are the commonly covered conditions:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <Card>
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-4 text-red-900">Heart & Cardiovascular</h3>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <Activity className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>First Heart Attack (Myocardial Infarction)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Activity className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>Coronary Artery Bypass Surgery</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Activity className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>Stroke (Cerebrovascular Accident)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Activity className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>Aorta Surgery</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-4 text-purple-900">Cancer & Organ Failure</h3>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <Activity className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                                                    <span>Cancer of specified severity</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Activity className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                                                    <span>Kidney Failure (requiring dialysis)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Activity className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                                                    <span>Liver Failure</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Activity className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                                                    <span>Major Organ Transplant</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-4 text-blue-900">Neurological Conditions</h3>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <Activity className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                                    <span>Paralysis (Permanent)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Activity className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                                    <span>Multiple Sclerosis</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Activity className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                                    <span>Parkinson's Disease</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Activity className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                                    <span>Alzheimer's Disease</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-4 text-orange-900">Other Conditions</h3>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <Activity className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                                                    <span>Blindness (Complete)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Activity className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                                                    <span>Deafness (Total)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Activity className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                                                    <span>Coma</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Activity className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                                                    <span>Loss of Limbs</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            {/* Should You Buy */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6">Should You Add a Critical Illness Rider?</h2>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <Card className="border-green-200">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-4 text-green-900">✓ Yes, Consider It If:</h3>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    <span>You have family history of cancer, heart disease, or stroke</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    <span>You are the sole breadwinner for your family</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    <span>Your health insurance has sub-limits on critical illness treatment</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    <span>You want income replacement during recovery period</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    <span>The additional premium is affordable for you</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-red-200">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-4 text-red-900">✗ Maybe Skip It If:</h3>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>You already have comprehensive health insurance with high coverage</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>You have substantial savings to cover medical emergencies</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>The premium significantly stretches your budget</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>You have employer coverage with critical illness benefits</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            {/* Cost Analysis */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6">Cost Analysis</h2>
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg mb-4">Typical Premium Impact</h3>
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                                            <p className="text-sm text-blue-800 mb-2">
                                                <strong>Example:</strong> 30-year-old male, ₹1 Crore term insurance
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4 mt-3">
                                                <div>
                                                    <p className="text-sm text-blue-800">Base Term Premium: ₹12,000/year</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-blue-800">With ₹25L CI Rider: ₹16,000-18,000/year</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Critical illness riders typically add 30-50% to your base term insurance premium, depending on the cover amount and age at purchase.
                                        </p>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* Important Points */}
                            <section className="mb-12">
                                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
                                    <h3 className="font-bold text-lg mb-4 text-yellow-900">Important Points to Remember</h3>
                                    <ul className="space-y-3 text-yellow-800">
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Survival period:</strong> Most policies require you to survive 30 days after diagnosis to claim</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Disease definitions:</strong> Each illness has a specific definition that must be met for claim</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>One-time payout:</strong> Most riders pay only once, even if multiple conditions occur</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Impact on sum assured:</strong> Some policies reduce the death benefit after CI payout</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* CTA */}
                            <Card className="bg-gradient-to-r from-primary to-blue-700 text-white mb-12">
                                <CardContent className="p-8 text-center">
                                    <h3 className="text-2xl font-bold mb-3">Need Help Choosing the Right Riders?</h3>
                                    <p className="text-lg mb-6 opacity-90">
                                        Our experts can help you evaluate whether a critical illness rider makes sense for your situation
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <ExpertAdviceButton size="lg" variant="secondary">
                                            Get Free Consultation
                                        </ExpertAdviceButton>
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="border-white text-white hover:bg-white/10 bg-transparent"
                                            asChild
                                        >
                                            <Link href="/compare">Compare Term Plans →</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Disclaimer */}
                            <Card className="bg-amber-50 border-amber-200">
                                <CardContent className="p-6">
                                    <h3 className="font-bold mb-3 text-amber-900">Disclaimer</h3>
                                    <p className="text-sm text-amber-800 leading-relaxed">
                                        Critical illness rider terms, covered conditions, and definitions vary by insurer. Always read the policy document carefully for exact terms and conditions. This information is for educational purposes only.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </article>

            {/* Article Navigation */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <ArticleNavigation currentSlug="critical-illness-riders" articles={articles} />
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
