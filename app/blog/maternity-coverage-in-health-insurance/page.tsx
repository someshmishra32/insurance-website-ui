import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { ArticleNavigation } from "@/components/article-navigation"
import { blogPosts } from "@/lib/blog-data"
import { Baby, CheckCircle2, AlertCircle, Clock, IndianRupee, Heart } from "lucide-react"

export const metadata = {
    title: "Maternity Coverage in Health Insurance: A Complete Guide | InsureWise",
    description:
        "Everything you need to know about maternity health insurance in India. Waiting periods, coverage limits, C-section coverage, and newborn baby benefits.",
    keywords:
        "maternity health insurance, pregnancy insurance, maternity coverage India, C-section insurance, newborn baby coverage, maternity waiting period",
}

export default function MaternityCoverageBlogPost() {
    const articles = blogPosts.map(post => ({
        title: post.title,
        slug: post.slug,
        href: `/blog/${post.slug}`,
        image: post.image
    }))

    const currentPost = blogPosts.find(p => p.slug === "maternity-coverage-in-health-insurance")
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
                            <Baby className="w-5 h-5 text-pink-600" />
                            <span className="text-sm font-medium text-pink-600">Maternity Insurance</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                            Maternity Coverage in Health Insurance: A Complete Guide
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                            Everything you need to know about maternity health insurance, waiting periods, coverage limits, and newborn baby benefits
                        </p>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-lg border">
                            <Image
                                src={postImage}
                                alt="Maternity Coverage in Health Insurance"
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
                                        <span>Maternity coverage has a mandatory waiting period of 2-4 years</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Coverage includes delivery expenses, pre and post-natal care, and newborn coverage</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Plan ahead – buy maternity insurance well before you plan to conceive</span>
                                    </li>
                                </ul>
                            </div>

                            {/* What's Covered */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Heart className="w-8 h-8 text-pink-600" />
                                    What Does Maternity Insurance Cover?
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Maternity coverage is an add-on or built-in benefit in some health insurance policies that covers pregnancy-related expenses. Here's what's typically included:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <Card className="border-pink-200">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-4 text-pink-900">✓ What's Covered</h3>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    <span>Normal delivery expenses</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    <span>C-section (Caesarean) delivery</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    <span>Pre-natal consultations & tests</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    <span>Post-natal care (usually 30-60 days)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    <span>Newborn baby coverage (90 days - 1 year)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    <span>Vaccinations for newborn</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    <span>Pregnancy complications</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-red-200">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-4 text-red-900">✗ What's Not Covered</h3>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>Infertility treatments (IVF, IUI)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>Voluntary termination of pregnancy</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>Surrogacy expenses (for intended parents)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>Congenital defects in newborn (some policies)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>Deliveries before waiting period</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            {/* Coverage Limits */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <IndianRupee className="w-8 h-8 text-green-600" />
                                    Typical Coverage Limits
                                </h2>

                                <Card className="mb-6">
                                    <CardContent className="p-6">
                                        <p className="text-muted-foreground mb-4">
                                            Most maternity policies have sub-limits, meaning they don't cover the full sum insured for maternity:
                                        </p>

                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse border border-gray-300 rounded-lg text-sm">
                                                <thead>
                                                    <tr className="bg-gray-50">
                                                        <th className="border border-gray-300 px-4 py-3 text-left">Coverage Type</th>
                                                        <th className="border border-gray-300 px-4 py-3 text-left">Typical Limit</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-3">Normal Delivery</td>
                                                        <td className="border border-gray-300 px-4 py-3">₹25,000 - ₹50,000</td>
                                                    </tr>
                                                    <tr className="bg-gray-50">
                                                        <td className="border border-gray-300 px-4 py-3">C-Section Delivery</td>
                                                        <td className="border border-gray-300 px-4 py-3">₹35,000 - ₹75,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-3">Pre & Post Natal</td>
                                                        <td className="border border-gray-300 px-4 py-3">₹5,000 - ₹10,000</td>
                                                    </tr>
                                                    <tr className="bg-gray-50">
                                                        <td className="border border-gray-300 px-4 py-3">Newborn Baby (first year)</td>
                                                        <td className="border border-gray-300 px-4 py-3">Up to sum insured</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                                            <p className="text-sm text-yellow-800">
                                                <strong>Note:</strong> Actual delivery costs in metros can range from ₹50,000 (normal) to ₹2-3 Lakh (C-section in private hospitals). Maternity coverage may not fully cover expenses.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* Waiting Period */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Clock className="w-8 h-8 text-orange-600" />
                                    Maternity Waiting Period
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    All maternity insurance policies have a mandatory waiting period. This is the time you must wait after buying the policy before maternity benefits become active.
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <Card className="text-center">
                                        <CardContent className="p-6">
                                            <p className="text-4xl font-bold text-orange-600 mb-2">2 Years</p>
                                            <p className="text-sm text-muted-foreground">Minimum waiting period</p>
                                            <p className="text-xs text-muted-foreground mt-1">(Some premium plans)</p>
                                        </CardContent>
                                    </Card>
                                    <Card className="text-center border-primary">
                                        <CardContent className="p-6">
                                            <p className="text-4xl font-bold text-primary mb-2">3 Years</p>
                                            <p className="text-sm text-muted-foreground">Standard waiting period</p>
                                            <p className="text-xs text-muted-foreground mt-1">(Most common)</p>
                                        </CardContent>
                                    </Card>
                                    <Card className="text-center">
                                        <CardContent className="p-6">
                                            <p className="text-4xl font-bold text-gray-600 mb-2">4 Years</p>
                                            <p className="text-sm text-muted-foreground">Maximum waiting period</p>
                                            <p className="text-xs text-muted-foreground mt-1">(Budget plans)</p>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                                    <h4 className="font-bold text-blue-900 mb-2">💡 Planning Tip</h4>
                                    <p className="text-blue-800 text-sm">
                                        If you're planning to start a family in 2-3 years, buy a maternity cover NOW. By the time you actually need it, your waiting period will be over. Don't wait until pregnancy to think about insurance!
                                    </p>
                                </div>
                            </section>

                            {/* Newborn Coverage */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Baby className="w-8 h-8 text-blue-600" />
                                    Newborn Baby Coverage
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    One of the biggest benefits of maternity insurance is automatic coverage for your newborn baby from day 1.
                                </p>

                                <Card>
                                    <CardContent className="p-6">
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                                    <span className="text-blue-600 font-bold">1</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold mb-1">Automatic Coverage</h4>
                                                    <p className="text-sm text-muted-foreground">Newborn is covered from birth without any additional premium (for 90 days to 1 year)</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                    <span className="text-green-600 font-bold">2</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold mb-1">What's Covered</h4>
                                                    <p className="text-sm text-muted-foreground">Hospitalization, NICU care, vaccinations, congenital anomalies (varies by policy)</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                                    <span className="text-orange-600 font-bold">3</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold mb-1">After Initial Period</h4>
                                                    <p className="text-sm text-muted-foreground">You must add the baby to your policy (floater or individual) and start paying additional premium</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* Tips */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6">Tips for Choosing Maternity Insurance</h2>

                                <div className="space-y-3">
                                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                                        <p className="text-muted-foreground">Compare maternity limits, not just base sum insured – actual maternity benefits vary significantly</p>
                                    </div>
                                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                                        <p className="text-muted-foreground">Check if C-section and normal delivery have different limits</p>
                                    </div>
                                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                                        <p className="text-muted-foreground">Verify newborn coverage duration and what's included for the baby</p>
                                    </div>
                                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                                        <p className="text-muted-foreground">Look for plans covering pregnancy complications under the main sum insured</p>
                                    </div>
                                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">5</div>
                                        <p className="text-muted-foreground">Consider if your employer provides maternity benefits before buying additional coverage</p>
                                    </div>
                                </div>
                            </section>

                            {/* CTA */}
                            <Card className="bg-gradient-to-r from-pink-600 to-purple-600 text-white mb-12">
                                <CardContent className="p-8 text-center">
                                    <h3 className="text-2xl font-bold mb-3">Planning for a Baby? Start Early!</h3>
                                    <p className="text-lg mb-6 opacity-90">
                                        Our experts can help you find the best maternity coverage that fits your timeline and budget
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
                                        Maternity coverage limits, waiting periods, and terms vary by insurer and policy. Always read your policy document carefully for exact coverage applicable to your plan. This information is for educational purposes only.
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
                    <ArticleNavigation currentSlug="maternity-coverage-in-health-insurance" articles={articles} />
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
