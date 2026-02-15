import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { ArticleNavigation } from "@/components/article-navigation"
import { blogPosts } from "@/lib/blog-data"
import { Calculator, CheckCircle2, AlertCircle, IndianRupee, Users, Shield } from "lucide-react"

export const metadata = {
    title: "How Much Life Insurance Cover Do You Really Need? | InsureWise",
    description:
        "Calculate the ideal term insurance coverage for your family using our simple HLV calculator. Based on income, liabilities, and future goals.",
    keywords:
        "life insurance calculator, how much term insurance, HLV calculator, life insurance coverage, term insurance amount",
}

export default function HowMuchLifeInsuranceBlogPost() {
    const articles = blogPosts.map(post => ({
        title: post.title,
        slug: post.slug,
        href: `/blog/${post.slug}`,
        image: post.image
    }))

    const currentPost = blogPosts.find(p => p.slug === "how-much-life-insurance-cover-do-you-really-need")
    const postImage = currentPost?.image || "/placeholder.svg"

    return (
        <div className="min-h-screen">


            {/* Article */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <Calculator className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-medium text-green-600">Life Insurance</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                            How Much Life Insurance Cover Do You Really Need?
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                            Calculate the ideal term insurance coverage for your family based on your income, liabilities, and future goals
                        </p>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-lg border">
                            <Image
                                src={postImage}
                                alt="How Much Life Insurance Cover Do You Really Need?"
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
                                        <span>Rule of thumb: Cover should be 10-15x your annual income</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Factor in liabilities, future expenses, and inflation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Review and increase coverage as responsibilities grow</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Why Right Coverage Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Shield className="w-8 h-8 text-blue-600" />
                                    Why the Right Coverage Amount Matters
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Life insurance is meant to replace your income and secure your family's financial future in your absence. If the coverage is too low, your family may struggle financially. If it's too high, you're paying unnecessary premiums.
                                </p>

                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    <Card className="border-red-200">
                                        <CardContent className="p-4 text-center">
                                            <p className="text-xl font-bold text-red-600 mb-2">Under-insured</p>
                                            <p className="text-sm text-muted-foreground">Family struggles to maintain lifestyle, pay EMIs, or fund children's education</p>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-blue-200">
                                        <CardContent className="p-4 text-center">
                                            <p className="text-xl font-bold text-blue-600 mb-2">Over-insured</p>
                                            <p className="text-sm text-muted-foreground">Paying higher premiums than necessary, funds could be better invested</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            {/* Calculation Methods */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Calculator className="w-8 h-8 text-purple-600" />
                                    Methods to Calculate Your Ideal Coverage
                                </h2>

                                <Card className="mb-6 border-l-4 border-l-blue-600">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold mb-3">Method 1: Income Multiplier (Simple)</h3>
                                        <p className="text-muted-foreground mb-4">
                                            The quickest way to estimate your coverage need:
                                        </p>
                                        <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                            <p className="text-lg font-bold text-blue-900 text-center">
                                                Coverage = Annual Income × 10 to 15
                                            </p>
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm border-collapse">
                                                <thead>
                                                    <tr className="bg-gray-50">
                                                        <th className="border px-3 py-2 text-left">Annual Income</th>
                                                        <th className="border px-3 py-2 text-left">Minimum Cover (10x)</th>
                                                        <th className="border px-3 py-2 text-left">Recommended (15x)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border px-3 py-2">₹5 Lakh</td>
                                                        <td className="border px-3 py-2">₹50 Lakh</td>
                                                        <td className="border px-3 py-2">₹75 Lakh</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border px-3 py-2">₹10 Lakh</td>
                                                        <td className="border px-3 py-2">₹1 Crore</td>
                                                        <td className="border px-3 py-2">₹1.5 Crore</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border px-3 py-2">₹20 Lakh</td>
                                                        <td className="border px-3 py-2">₹2 Crore</td>
                                                        <td className="border px-3 py-2">₹3 Crore</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="mb-6 border-l-4 border-l-green-600">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold mb-3">Method 2: Human Life Value (HLV) - Detailed</h3>
                                        <p className="text-muted-foreground mb-4">
                                            A more comprehensive calculation that considers all financial aspects:
                                        </p>

                                        <div className="space-y-4">
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <p className="font-semibold text-green-900 mb-2">Step 1: Calculate Income Replacement</p>
                                                <p className="text-sm text-green-800">
                                                    Monthly expenses × 12 × Years until retirement
                                                </p>
                                            </div>

                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <p className="font-semibold text-blue-900 mb-2">Step 2: Add Outstanding Liabilities</p>
                                                <ul className="text-sm text-blue-800 space-y-1">
                                                    <li>• Home loan outstanding</li>
                                                    <li>• Car/personal loans</li>
                                                    <li>• Credit card debt</li>
                                                    <li>• Any other loans</li>
                                                </ul>
                                            </div>

                                            <div className="bg-purple-50 p-4 rounded-lg">
                                                <p className="font-semibold text-purple-900 mb-2">Step 3: Add Future Goals</p>
                                                <ul className="text-sm text-purple-800 space-y-1">
                                                    <li>• Children's education (₹25-50 Lakh per child)</li>
                                                    <li>• Children's marriage (₹10-30 Lakh)</li>
                                                    <li>• Spouse's retirement fund</li>
                                                </ul>
                                            </div>

                                            <div className="bg-red-50 p-4 rounded-lg">
                                                <p className="font-semibold text-red-900 mb-2">Step 4: Subtract Existing Assets</p>
                                                <ul className="text-sm text-red-800 space-y-1">
                                                    <li>• Current investments & savings</li>
                                                    <li>• Existing life insurance</li>
                                                    <li>• EPF/PPF balance</li>
                                                    <li>• Spouse's income potential</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* Example Calculation */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <IndianRupee className="w-8 h-8 text-green-600" />
                                    Example Calculation
                                </h2>

                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Users className="w-6 h-6 text-primary" />
                                            <h3 className="font-bold text-lg">Case Study: 35-year-old IT Professional</h3>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <p className="text-sm font-medium text-muted-foreground">Profile:</p>
                                                <ul className="text-sm space-y-1">
                                                    <li>• Annual income: ₹15 Lakh</li>
                                                    <li>• Monthly expenses: ₹80,000</li>
                                                    <li>• Years to retirement: 25</li>
                                                    <li>• 2 children (ages 5 & 8)</li>
                                                </ul>

                                                <p className="text-sm font-medium text-muted-foreground mt-4">Liabilities:</p>
                                                <ul className="text-sm space-y-1">
                                                    <li>• Home loan: ₹50 Lakh</li>
                                                    <li>• Car loan: ₹5 Lakh</li>
                                                </ul>
                                            </div>

                                            <div className="space-y-3">
                                                <p className="text-sm font-medium text-muted-foreground">Calculation:</p>
                                                <div className="bg-gray-50 p-4 rounded-lg text-sm space-y-2">
                                                    <p>Income Replacement: ₹80K × 12 × 15 = <strong>₹1.44 Cr</strong></p>
                                                    <p>Liabilities: ₹50L + ₹5L = <strong>₹55 Lakh</strong></p>
                                                    <p>Education (2 kids): <strong>₹60 Lakh</strong></p>
                                                    <p>Marriage funds: <strong>₹30 Lakh</strong></p>
                                                    <hr className="my-2" />
                                                    <p className="font-bold">Total Need: ~₹2.9 Crore</p>
                                                    <p>Less: Existing savings (₹30L)</p>
                                                    <p className="text-lg font-bold text-primary">Recommended Cover: ₹2.5-3 Crore</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* Factors to Consider */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6">Factors That Affect Your Coverage Need</h2>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <Card>
                                        <CardContent className="p-4">
                                            <h4 className="font-bold mb-2 text-blue-900">↑ Increases Coverage Need</h4>
                                            <ul className="text-sm text-muted-foreground space-y-1">
                                                <li>• Single income household</li>
                                                <li>• Young children</li>
                                                <li>• Large outstanding loans</li>
                                                <li>• Dependent parents</li>
                                                <li>• Living in metro cities</li>
                                                <li>• Private school/college plans</li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-4">
                                            <h4 className="font-bold mb-2 text-green-900">↓ Decreases Coverage Need</h4>
                                            <ul className="text-sm text-muted-foreground space-y-1">
                                                <li>• Spouse has good income</li>
                                                <li>• Children are grown/earning</li>
                                                <li>• Substantial savings/investments</li>
                                                <li>• No debt</li>
                                                <li>• Owned house (no EMI)</li>
                                                <li>• Existing employer life cover</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            {/* Common Mistakes */}
                            <section className="mb-12">
                                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                                    <h3 className="font-bold text-lg mb-4 text-red-900 flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5" />
                                        Common Mistakes to Avoid
                                    </h3>
                                    <ul className="space-y-3 text-red-800">
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Not accounting for inflation:</strong> ₹1 Crore today won't have same value in 20 years</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Relying only on employer insurance:</strong> You lose coverage when you change jobs</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Not reviewing coverage:</strong> Life changes (marriage, kids) need coverage updates</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Choosing low cover for lower premium:</strong> Defeats the purpose of insurance</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* CTA */}
                            <Card className="bg-gradient-to-r from-primary to-blue-700 text-white mb-12">
                                <CardContent className="p-8 text-center">
                                    <h3 className="text-2xl font-bold mb-3">Get Personalized Coverage Recommendation</h3>
                                    <p className="text-lg mb-6 opacity-90">
                                        Our experts can help you calculate the exact coverage you need based on your unique situation
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
                                        The calculations and examples provided are for illustrative purposes only. Your actual coverage need may vary based on individual circumstances. Consult a financial advisor for personalized recommendations. This information is for educational purposes only.
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
                    <ArticleNavigation currentSlug="how-much-life-insurance-cover-do-you-really-need" articles={articles} />
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
