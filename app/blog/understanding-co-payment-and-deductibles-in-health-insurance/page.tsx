import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { ArticleNavigation } from "@/components/article-navigation"
import { blogPosts } from "@/lib/blog-data"
import { IndianRupee, CheckCircle2, AlertCircle, Calculator, Percent, Wallet } from "lucide-react"

export const metadata = {
    title: "Understanding Co-payment and Deductibles in Health Insurance | Life Cover Now",
    description:
        "What are co-payment clauses and how do they affect your out-of-pocket expenses? A detailed explanation with real examples.",
    keywords:
        "co-payment health insurance, deductibles insurance, co-pay meaning, out-of-pocket expenses, health insurance terms",
}

export default function CopaymentDeductiblesBlogPost() {
    const articles = blogPosts.map(post => ({
        title: post.title,
        slug: post.slug,
        href: `/blog/${post.slug}`,
        image: post.image
    }))

    const currentPost = blogPosts.find(p => p.slug === "understanding-co-payment-and-deductibles-in-health-insurance")
    const postImage = currentPost?.image || "/placeholder.svg"

    return (
        <div className="min-h-screen">


            {/* Article */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <IndianRupee className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-medium text-green-600">Health Insurance</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                            Understanding Co-payment and Deductibles in Health Insurance
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                            Learn how co-payment clauses and deductibles affect your out-of-pocket expenses and claim reimbursements
                        </p>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-lg border">
                            <Image
                                src={postImage}
                                alt="Understanding Co-payment and Deductibles"
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
                                        <span>Co-payment reduces your premium but increases out-of-pocket costs during claims</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Deductibles are the amount you pay first before insurance kicks in</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Review your policy terms carefully to understand your financial exposure</span>
                                    </li>
                                </ul>
                            </div>

                            {/* What is Co-payment */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Percent className="w-8 h-8 text-blue-600" />
                                    What is Co-payment (Co-pay)?
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Co-payment is a cost-sharing mechanism where you pay a fixed percentage of every claim amount, while the insurance company pays the rest. It's expressed as a percentage (e.g., 10%, 20%, or 30%).
                                </p>

                                <Card className="mb-6">
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                            <Calculator className="w-5 h-5 text-primary" />
                                            How Co-payment Works - Example
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                                <p className="text-sm text-blue-800 font-medium mb-2">Scenario</p>
                                                <ul className="text-sm text-blue-800 space-y-1">
                                                    <li>• Hospital Bill: ₹2,00,000</li>
                                                    <li>• Co-payment Clause: 20%</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                                <p className="text-sm text-green-800 font-medium mb-2">Payment Split</p>
                                                <ul className="text-sm text-green-800 space-y-1">
                                                    <li>• You Pay: ₹40,000 (20%)</li>
                                                    <li>• Insurer Pays: ₹1,60,000 (80%)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
                                    <h4 className="font-bold text-yellow-900 mb-2">When is Co-payment Applied?</h4>
                                    <ul className="text-sm text-yellow-800 space-y-2">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Senior citizen plans:</strong> Often have mandatory 10-30% co-pay</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Pre-existing diseases:</strong> Higher co-pay may apply for PED-related claims</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Non-network hospitals:</strong> Some plans charge co-pay for reimbursement claims</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Specific treatments:</strong> Certain procedures may have separate co-pay clauses</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* What is Deductible */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Wallet className="w-8 h-8 text-purple-600" />
                                    What is a Deductible?
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    A deductible is a fixed amount you must pay out of your own pocket before the insurance coverage starts. It's expressed as a specific rupee amount (e.g., ₹5,000 or ₹10,000).
                                </p>

                                <Card className="mb-6">
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                            <Calculator className="w-5 h-5 text-primary" />
                                            How Deductible Works - Example
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                                <p className="text-sm text-purple-800 font-medium mb-2">Scenario</p>
                                                <ul className="text-sm text-purple-800 space-y-1">
                                                    <li>• Hospital Bill: ₹50,000</li>
                                                    <li>• Annual Deductible: ₹5,000</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                                <p className="text-sm text-green-800 font-medium mb-2">Payment Split</p>
                                                <ul className="text-sm text-green-800 space-y-1">
                                                    <li>• You Pay First: ₹5,000</li>
                                                    <li>• Insurer Pays: ₹45,000</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                                            <p className="text-sm text-blue-800">
                                                <strong>Note:</strong> Deductibles are usually applied once per policy year. After you've paid the deductible amount, subsequent claims in that year are fully covered (subject to other terms).
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* Key Differences */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6">Co-payment vs Deductible: Key Differences</h2>

                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse border border-gray-300 rounded-lg">
                                        <thead>
                                            <tr className="bg-gray-50">
                                                <th className="border border-gray-300 px-4 py-3 text-left">Feature</th>
                                                <th className="border border-gray-300 px-4 py-3 text-left">Co-payment</th>
                                                <th className="border border-gray-300 px-4 py-3 text-left">Deductible</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-3 font-medium">How it's calculated</td>
                                                <td className="border border-gray-300 px-4 py-3">Percentage of claim</td>
                                                <td className="border border-gray-300 px-4 py-3">Fixed amount</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="border border-gray-300 px-4 py-3 font-medium">When applied</td>
                                                <td className="border border-gray-300 px-4 py-3">Every claim</td>
                                                <td className="border border-gray-300 px-4 py-3">Once per year (usually)</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-3 font-medium">Impact on large claims</td>
                                                <td className="border border-gray-300 px-4 py-3 text-red-600">Higher out-of-pocket</td>
                                                <td className="border border-gray-300 px-4 py-3 text-green-600">Limited to deductible amount</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="border border-gray-300 px-4 py-3 font-medium">Impact on premium</td>
                                                <td className="border border-gray-300 px-4 py-3">Reduces premium</td>
                                                <td className="border border-gray-300 px-4 py-3">Reduces premium</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Pros and Cons */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6">Should You Choose a Plan with Co-pay/Deductible?</h2>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <Card className="border-green-200">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-4 text-green-900">✓ Advantages</h3>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    <span>Lower premium costs</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    <span>Discourages unnecessary claims</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    <span>Good for healthy individuals with infrequent hospitalizations</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    <span>Makes insurance more affordable</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-red-200">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-4 text-red-900">✗ Disadvantages</h3>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>Higher out-of-pocket during claims</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>Co-pay on large claims can be substantial</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>Not ideal for those with chronic conditions</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>May delay seeking medical care</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            {/* CTA */}
                            <Card className="bg-gradient-to-r from-primary to-blue-700 text-white mb-12">
                                <CardContent className="p-8 text-center">
                                    <h3 className="text-2xl font-bold mb-3">Need Help Understanding Your Policy?</h3>
                                    <p className="text-lg mb-6 opacity-90">
                                        Our experts can help you understand co-pay clauses and find the right plan for your needs
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
                                        Co-payment and deductible terms vary by insurer and policy. Always read your policy document carefully to understand the exact terms applicable to your coverage. This information is for educational purposes only.
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
                    <ArticleNavigation currentSlug="understanding-co-payment-and-deductibles-in-health-insurance" articles={articles} />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-muted/30 py-12 border-t">
                <div className="container mx-auto px-4">
                    <div className="pt-8 text-center text-sm text-muted-foreground">
                        <p>© 2025 Life Cover Now. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
