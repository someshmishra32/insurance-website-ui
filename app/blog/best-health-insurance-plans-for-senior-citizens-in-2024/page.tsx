import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { ArticleNavigation } from "@/components/article-navigation"
import { blogPosts } from "@/lib/blog-data"
import { Heart, CheckCircle2, AlertCircle, Shield, Clock, Users } from "lucide-react"

export const metadata = {
    title: "Best Health Insurance Plans for Senior Citizens in 2024 | InsureWise",
    description:
        "Comprehensive comparison of senior citizen health insurance plans available in India, including coverage limits, premium costs, and pre-existing disease coverage.",
    keywords:
        "senior citizen health insurance, health insurance for elderly, best health insurance 60+, health insurance parents, senior health plans India",
}

export default function SeniorCitizensHealthInsuranceBlogPost() {
    const articles = blogPosts.map(post => ({
        title: post.title,
        slug: post.slug,
        href: `/blog/${post.slug}`,
        image: post.image
    }))

    const currentPost = blogPosts.find(p => p.slug === "best-health-insurance-plans-for-senior-citizens-in-2024")
    const postImage = currentPost?.image || "/placeholder.svg"

    return (
        <div className="min-h-screen">


            {/* Article */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <Users className="w-5 h-5 text-purple-600" />
                            <span className="text-sm font-medium text-purple-600">Senior Citizens</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                            Best Health Insurance Plans for Senior Citizens in 2024
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                            Comprehensive comparison of senior citizen health insurance plans to help you find the right coverage for yourself or your aging parents
                        </p>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-lg border">
                            <Image
                                src={postImage}
                                alt="Best Health Insurance Plans for Senior Citizens"
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
                                        <span>Look for plans with no or minimal waiting period for pre-existing conditions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Prioritize coverage for common senior health issues like cardiac, diabetes, and joint problems</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Consider plans with higher room rent limits to avoid proportionate deductions</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Why Senior Citizens Need Specialized Plans */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                    <Heart className="w-8 h-8 text-red-500" />
                                    Why Senior Citizens Need Specialized Health Insurance
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    As we age, our healthcare needs change significantly. Senior citizens face higher risks of chronic conditions, require more frequent medical check-ups, and often need longer hospital stays. Regular health insurance plans may not adequately address these needs.
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <Card>
                                        <CardContent className="p-4 text-center">
                                            <p className="text-3xl font-bold text-primary mb-2">65%</p>
                                            <p className="text-sm text-muted-foreground">of seniors have at least one chronic condition</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent className="p-4 text-center">
                                            <p className="text-3xl font-bold text-primary mb-2">3x</p>
                                            <p className="text-sm text-muted-foreground">higher hospitalization rate than younger adults</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent className="p-4 text-center">
                                            <p className="text-3xl font-bold text-primary mb-2">₹5L+</p>
                                            <p className="text-sm text-muted-foreground">average annual healthcare cost for 60+</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            {/* What to Look For */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6">What to Look for in Senior Citizen Health Insurance</h2>

                                <div className="space-y-6">
                                    <Card className="border-l-4 border-l-blue-600">
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                                                    <Clock className="w-6 h-6 text-blue-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-2">1. Pre-Existing Disease (PED) Waiting Period</h3>
                                                    <p className="text-muted-foreground mb-3">
                                                        This is crucial for seniors as most have existing health conditions. Look for plans with:
                                                    </p>
                                                    <ul className="space-y-2 text-muted-foreground">
                                                        <li className="flex items-start gap-2">
                                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                                            <span>Shorter PED waiting periods (1-2 years vs standard 4 years)</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                                            <span>Some plans offer coverage from day 1 at higher premiums</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-l-4 border-l-green-600">
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                                                    <Shield className="w-6 h-6 text-green-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-2">2. Coverage Amount (Sum Insured)</h3>
                                                    <p className="text-muted-foreground mb-3">
                                                        Medical costs for seniors can be substantial. Recommended coverage:
                                                    </p>
                                                    <div className="bg-blue-50 p-4 rounded-lg">
                                                        <ul className="space-y-2 text-blue-800 text-sm">
                                                            <li><strong>Age 60-70:</strong> Minimum ₹10-15 Lakh</li>
                                                            <li><strong>Age 70+:</strong> Minimum ₹15-25 Lakh</li>
                                                            <li><strong>With chronic conditions:</strong> ₹25 Lakh or higher</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-l-4 border-l-purple-600">
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                                                    <Heart className="w-6 h-6 text-purple-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-2">3. Disease-Specific Coverage</h3>
                                                    <p className="text-muted-foreground mb-3">
                                                        Ensure the plan covers conditions common in seniors:
                                                    </p>
                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        <ul className="space-y-2 text-muted-foreground text-sm">
                                                            <li className="flex items-start gap-2">
                                                                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                                <span>Cardiac conditions & bypass surgery</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                                <span>Diabetes & related complications</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                                <span>Joint replacement surgeries</span>
                                                            </li>
                                                        </ul>
                                                        <ul className="space-y-2 text-muted-foreground text-sm">
                                                            <li className="flex items-start gap-2">
                                                                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                                <span>Cataract & eye conditions</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                                <span>Kidney disorders & dialysis</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                                <span>Cancer treatment coverage</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            {/* Important Factors */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6">Other Important Factors to Consider</h2>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <Card>
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-3">Co-Payment Clause</h3>
                                            <p className="text-sm text-muted-foreground mb-3">
                                                Many senior citizen plans have mandatory co-pay (10-30%). This means you pay a percentage of the claim.
                                            </p>
                                            <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                                                <p className="text-xs text-yellow-800">
                                                    <strong>Example:</strong> With 20% co-pay on a ₹5 Lakh bill, you pay ₹1 Lakh out of pocket.
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-3">Entry Age Limit</h3>
                                            <p className="text-sm text-muted-foreground mb-3">
                                                Check the maximum entry age and renewal terms:
                                            </p>
                                            <ul className="text-sm text-muted-foreground space-y-1">
                                                <li>• Most plans: Entry up to age 65-70</li>
                                                <li>• Some plans: Entry up to age 80</li>
                                                <li>• Look for lifetime renewability</li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-3">Network Hospitals</h3>
                                            <p className="text-sm text-muted-foreground mb-3">
                                                Cashless treatment is crucial for seniors. Verify:
                                            </p>
                                            <ul className="text-sm text-muted-foreground space-y-1">
                                                <li>• Hospitals near your residence are in-network</li>
                                                <li>• Super-specialty hospitals are included</li>
                                                <li>• Easy cashless approval process</li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-3">Domiciliary Treatment</h3>
                                            <p className="text-sm text-muted-foreground mb-3">
                                                Coverage for treatment at home is valuable for seniors who may not be able to travel to hospitals.
                                            </p>
                                            <div className="bg-green-50 p-3 rounded border border-green-200">
                                                <p className="text-xs text-green-800">
                                                    <strong>Tip:</strong> Look for plans that cover home healthcare and nursing care.
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            {/* Red Flags */}
                            <section className="mb-12">
                                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                                    <h3 className="font-bold text-lg mb-4 text-red-900 flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5" />
                                        Red Flags to Watch Out For
                                    </h3>
                                    <ul className="space-y-3 text-red-800">
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Sub-limits on specific diseases:</strong> Some plans cap payouts for certain conditions like knee replacement or cataract surgery</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>High co-payment above age 70:</strong> Co-pay percentage may increase with age, making claims expensive</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Limited room rent coverage:</strong> Low room rent caps lead to proportionate deductions on entire claims</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>No lifetime renewal:</strong> Some plans may refuse renewal after a major claim or at a certain age</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* CTA */}
                            <Card className="bg-gradient-to-r from-primary to-blue-700 text-white mb-12">
                                <CardContent className="p-8 text-center">
                                    <h3 className="text-2xl font-bold mb-3">Need Help Finding the Right Plan for Your Parents?</h3>
                                    <p className="text-lg mb-6 opacity-90">
                                        Our experts can help you compare senior citizen health plans and find the best coverage for your family
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
                                            <Link href="/compare">Compare Plans →</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Quick Tips */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6">Quick Tips for Buying Senior Citizen Health Insurance</h2>
                                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                                        <p className="text-blue-900">Buy early – premiums are lower and easier to get coverage before age 60</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                                        <p className="text-blue-900">Disclose all pre-existing conditions honestly to avoid claim rejections</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                                        <p className="text-blue-900">Consider a top-up or super top-up plan for additional coverage at lower cost</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                                        <p className="text-blue-900">Check for free annual health check-up benefits included in the plan</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">5</div>
                                        <p className="text-blue-900">Compare at least 3-4 plans before making a decision</p>
                                    </div>
                                </div>
                            </section>

                            {/* Disclaimer */}
                            <Card className="bg-amber-50 border-amber-200">
                                <CardContent className="p-6">
                                    <h3 className="font-bold mb-3 text-amber-900">Disclaimer</h3>
                                    <p className="text-sm text-amber-800 leading-relaxed">
                                        Insurance plans and their features are subject to change. Premium rates vary based on age, health conditions, and plan selected. Always read the policy document carefully and compare multiple plans before purchasing. This information is for educational purposes only.
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
                    <ArticleNavigation currentSlug="best-health-insurance-plans-for-senior-citizens-in-2024" articles={articles} />
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
