import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { ArticleNavigation } from "@/components/article-navigation"
import { blogPosts } from "@/lib/blog-data"
import { Clock, CheckCircle2, AlertCircle, Heart, Shield, Calendar } from "lucide-react"

export const metadata = {
    title: "Pre-Existing Disease Coverage in Health Insurance: Everything You Need to Know | InsureWise",
    description:
        "Understand how pre-existing conditions affect your health insurance coverage, waiting periods, and claim settlement. Complete guide with examples.",
    keywords:
        "pre-existing disease health insurance, PED waiting period, health insurance pre-existing conditions, PED coverage, health insurance waiting period",
}

export default function PreExistingDiseaseBlogPost() {
    const articles = blogPosts.map(post => ({
        title: post.title,
        slug: post.slug,
        href: `/blog/${post.slug}`,
        image: post.image
    }))

    const currentPost = blogPosts.find(p => p.slug === "pre-existing-disease-coverage")
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
                            <Heart className="w-5 h-5 text-red-600" />
                            <span className="text-sm font-medium text-red-600">Health Insurance</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                            Pre-Existing Disease Coverage in Health Insurance: Everything You Need to Know
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                            Understanding how pre-existing conditions affect your health insurance coverage, waiting periods, and claim settlement
                        </p>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-lg border">
                            <Image
                                src={postImage}
                                alt="Pre-Existing Disease Coverage in Health Insurance"
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
                                        <span>Pre-existing diseases (PED) are conditions you have before buying the policy</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Standard waiting period for PED is 2-4 years</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Always disclose your health conditions honestly to avoid claim rejection</span>
                                    </li>
                                </ul>
                            </div>

                            {/* What is PED */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Shield className="w-8 h-8 text-blue-600" />
                                    What is a Pre-Existing Disease (PED)?
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    A Pre-Existing Disease (PED) is any medical condition, ailment, injury, or disease that was diagnosed or showed symptoms before you purchased your health insurance policy. This includes conditions you're aware of, even if not formally diagnosed.
                                </p>

                                <Card className="mb-6">
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg mb-4">Common Pre-Existing Conditions</h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-red-50 p-4 rounded-lg">
                                                <p className="font-semibold text-red-900 mb-2">Lifestyle Diseases</p>
                                                <ul className="text-sm text-red-800 space-y-1">
                                                    <li>• Diabetes</li>
                                                    <li>• Hypertension</li>
                                                    <li>• High Cholesterol</li>
                                                    <li>• Obesity</li>
                                                </ul>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <p className="font-semibold text-blue-900 mb-2">Chronic Conditions</p>
                                                <ul className="text-sm text-blue-800 space-y-1">
                                                    <li>• Asthma</li>
                                                    <li>• Thyroid disorders</li>
                                                    <li>• Arthritis</li>
                                                    <li>• Heart conditions</li>
                                                </ul>
                                            </div>
                                            <div className="bg-purple-50 p-4 rounded-lg">
                                                <p className="font-semibold text-purple-900 mb-2">Other Conditions</p>
                                                <ul className="text-sm text-purple-800 space-y-1">
                                                    <li>• Kidney disease</li>
                                                    <li>• Cancer history</li>
                                                    <li>• Mental health issues</li>
                                                    <li>• HIV/AIDS</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* Waiting Periods */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Clock className="w-8 h-8 text-orange-600" />
                                    Types of Waiting Periods
                                </h2>

                                <div className="space-y-4">
                                    <Card className="border-l-4 border-l-blue-600">
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                                                    <Calendar className="w-6 h-6 text-blue-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-2">1. Initial Waiting Period</h3>
                                                    <p className="text-muted-foreground mb-2">
                                                        <strong>Duration:</strong> 30 days from policy start
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        No claims are covered during this period except for accidents. This prevents people from buying insurance only when they know they'll need hospitalization.
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-l-4 border-l-orange-600">
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                                                    <Clock className="w-6 h-6 text-orange-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-2">2. Specific Disease Waiting Period</h3>
                                                    <p className="text-muted-foreground mb-2">
                                                        <strong>Duration:</strong> 1-2 years
                                                    </p>
                                                    <p className="text-sm text-muted-foreground mb-3">
                                                        Certain diseases have a specific waiting period even if you didn't have them before buying insurance:
                                                    </p>
                                                    <div className="bg-orange-50 p-3 rounded-lg">
                                                        <ul className="text-sm text-orange-800 grid md:grid-cols-2 gap-1">
                                                            <li>• Hernia</li>
                                                            <li>• Cataract</li>
                                                            <li>• Joint replacement</li>
                                                            <li>• Piles/Fistula</li>
                                                            <li>• Tonsils</li>
                                                            <li>• Hysterectomy</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-l-4 border-l-red-600">
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                                                    <Heart className="w-6 h-6 text-red-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-2">3. Pre-Existing Disease (PED) Waiting Period</h3>
                                                    <p className="text-muted-foreground mb-2">
                                                        <strong>Duration:</strong> 2-4 years (varies by insurer)
                                                    </p>
                                                    <p className="text-sm text-muted-foreground mb-3">
                                                        Claims related to your disclosed pre-existing conditions are not covered until this waiting period is over.
                                                    </p>
                                                    <div className="bg-red-50 p-3 rounded-lg">
                                                        <p className="text-sm text-red-800">
                                                            <strong>Example:</strong> If you have diabetes and buy a policy with 3-year PED waiting period, any hospitalization related to diabetes complications won't be covered for the first 3 years.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            {/* PED Waiting Period Comparison */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6">PED Waiting Period Comparison</h2>
                                <p className="text-muted-foreground mb-4">
                                    Different insurers offer different PED waiting periods. Here's a comparison:
                                </p>

                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse border border-gray-300 rounded-lg text-sm">
                                        <thead>
                                            <tr className="bg-gray-50">
                                                <th className="border border-gray-300 px-4 py-3 text-left">PED Waiting Period</th>
                                                <th className="border border-gray-300 px-4 py-3 text-left">Premium Impact</th>
                                                <th className="border border-gray-300 px-4 py-3 text-left">Best For</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">1-2 Years</td>
                                                <td className="border border-gray-300 px-4 py-3">Higher premium</td>
                                                <td className="border border-gray-300 px-4 py-3">Those with existing conditions needing early coverage</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">3 Years (Standard)</td>
                                                <td className="border border-gray-300 px-4 py-3">Moderate premium</td>
                                                <td className="border border-gray-300 px-4 py-3">Most individuals</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-3 font-semibold text-orange-600">4 Years</td>
                                                <td className="border border-gray-300 px-4 py-3">Lower premium</td>
                                                <td className="border border-gray-300 px-4 py-3">Young, healthy individuals</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Tips for Getting Coverage */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6">Tips for Getting Coverage with Pre-Existing Conditions</h2>

                                <div className="space-y-4">
                                    <Card className="border-l-4 border-l-green-600">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold mb-2 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                                1. Always Disclose Honestly
                                            </h3>
                                            <p className="text-muted-foreground text-sm">
                                                Never hide your medical history. Non-disclosure is the #1 reason for claim rejection. Insurers can investigate your medical records, and hiding conditions can void your entire policy.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-l-4 border-l-blue-600">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold mb-2 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                                2. Buy Early
                                            </h3>
                                            <p className="text-muted-foreground text-sm">
                                                The earlier you buy insurance, the sooner your waiting periods will be over. If you buy at 30, your PED coverage starts at 33-34. Buy at 45, wait till 48-49.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-l-4 border-l-purple-600">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold mb-2 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-purple-600" />
                                                3. Consider Plans with Lower PED Waiting Period
                                            </h3>
                                            <p className="text-muted-foreground text-sm">
                                                Some plans offer 1-2 year PED waiting period at a higher premium. If you have existing conditions, this might be worth the extra cost.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-l-4 border-l-orange-600">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold mb-2 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-orange-600" />
                                                4. Keep Old Policy Active During Porting
                                            </h3>
                                            <p className="text-muted-foreground text-sm">
                                                When porting to a new insurer, your existing waiting period credit is maintained. Keep your old policy active until the new one is confirmed.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            {/* Warning */}
                            <section className="mb-12">
                                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                                    <h3 className="font-bold text-lg mb-4 text-red-900 flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5" />
                                        What Happens if You Don't Disclose PED?
                                    </h3>
                                    <ul className="space-y-3 text-red-800">
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Claim rejection:</strong> Your claim will be denied if investigation reveals undisclosed conditions</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Policy cancellation:</strong> Insurer can cancel your policy and refuse future coverage</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>No refund:</strong> All premiums paid may be forfeited</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Blacklisting:</strong> You may find it difficult to get insurance from other companies</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* CTA */}
                            <Card className="bg-gradient-to-r from-primary to-blue-700 text-white mb-12">
                                <CardContent className="p-8 text-center">
                                    <h3 className="text-2xl font-bold mb-3">Have Pre-Existing Conditions? We Can Help</h3>
                                    <p className="text-lg mb-6 opacity-90">
                                        Our experts can help you find plans with shorter PED waiting periods that fit your needs
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

                            {/* Disclaimer */}
                            <Card className="bg-amber-50 border-amber-200">
                                <CardContent className="p-6">
                                    <h3 className="font-bold mb-3 text-amber-900">Disclaimer</h3>
                                    <p className="text-sm text-amber-800 leading-relaxed">
                                        Waiting periods and coverage terms vary by insurer and policy. Always read your policy document carefully for exact terms applicable to your coverage. This information is for educational purposes only.
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
                    <ArticleNavigation currentSlug="pre-existing-disease-coverage" articles={articles} />
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
