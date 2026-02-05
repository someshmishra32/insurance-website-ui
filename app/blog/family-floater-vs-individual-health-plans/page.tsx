import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { ArticleNavigation } from "@/components/article-navigation"
import { blogPosts } from "@/lib/blog-data"
import { Users, CheckCircle2, AlertCircle, Heart, Scale, Calculator } from "lucide-react"

export const metadata = {
    title: "Family Floater vs Individual Health Plans: What's Better? | InsureWise",
    description:
        "Should you buy a family floater or individual policies for each family member? We analyze the pros and cons based on different family structures.",
    keywords:
        "family floater health insurance, individual health insurance, family health plan comparison, health insurance for family, floater vs individual",
}

export default function FamilyFloaterVsIndividualBlogPost() {
    const articles = blogPosts.map(post => ({
        title: post.title,
        slug: post.slug,
        href: `/blog/${post.slug}`,
        image: post.image
    }))

    const currentPost = blogPosts.find(p => p.slug === "family-floater-vs-individual-health-plans")
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
                            <Users className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-medium text-blue-600">Family Floater</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                            Family Floater vs Individual Health Plans: What's Better?
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                            Analyze the pros and cons of family floater and individual health insurance policies to find the best fit for your family
                        </p>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-lg border">
                            <Image
                                src={postImage}
                                alt="Family Floater vs Individual Health Plans: What's Better?"
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
                                        <span>Family floater offers shared coverage at lower total premium</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Individual plans provide dedicated coverage for each member</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Compare costs and benefits thoroughly before deciding</span>
                                    </li>
                                </ul>
                            </div>

                            {/* What is Family Floater */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Users className="w-8 h-8 text-blue-600" />
                                    What is a Family Floater Policy?
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    A family floater policy covers multiple family members under a single sum insured. The entire family shares the coverage pool, and any member can use the sum insured when needed.
                                </p>

                                <Card className="mb-6">
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                            <Calculator className="w-5 h-5 text-primary" />
                                            Family Floater Example
                                        </h3>
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                            <p className="text-sm text-blue-800 mb-2">
                                                <strong>Family:</strong> Husband (35), Wife (32), 2 Kids (8, 5)
                                            </p>
                                            <p className="text-sm text-blue-800 mb-2">
                                                <strong>Sum Insured:</strong> ₹10 Lakh (shared by all 4 members)
                                            </p>
                                            <p className="text-sm text-blue-800">
                                                <strong>Premium:</strong> ~₹18,000-25,000/year
                                            </p>
                                        </div>
                                        <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                                            <p className="text-sm text-yellow-800">
                                                <strong>Note:</strong> If the husband is hospitalized for ₹6 Lakh, only ₹4 Lakh remains for the rest of the family for that policy year.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* What is Individual Policy */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Heart className="w-8 h-8 text-red-600" />
                                    What is an Individual Policy?
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    An individual policy provides dedicated coverage for each family member. Each person has their own sum insured that doesn't get shared with others.
                                </p>

                                <Card className="mb-6">
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                            <Calculator className="w-5 h-5 text-primary" />
                                            Individual Policies Example
                                        </h3>
                                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                            <p className="text-sm text-red-800 mb-2">
                                                <strong>Same Family:</strong> 4 separate policies @ ₹5 Lakh each
                                            </p>
                                            <p className="text-sm text-red-800 mb-2">
                                                <strong>Total Coverage:</strong> ₹20 Lakh (₹5L per member)
                                            </p>
                                            <p className="text-sm text-red-800">
                                                <strong>Total Premium:</strong> ~₹35,000-45,000/year
                                            </p>
                                        </div>
                                        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                                            <p className="text-sm text-green-800">
                                                <strong>Advantage:</strong> One member's claim doesn't affect others' coverage.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* Comparison Table */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Scale className="w-8 h-8 text-purple-600" />
                                    Head-to-Head Comparison
                                </h2>

                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse border border-gray-300 rounded-lg">
                                        <thead>
                                            <tr className="bg-gray-50">
                                                <th className="border border-gray-300 px-4 py-3 text-left">Feature</th>
                                                <th className="border border-gray-300 px-4 py-3 text-left">Family Floater</th>
                                                <th className="border border-gray-300 px-4 py-3 text-left">Individual Plans</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-3 font-medium">Sum Insured</td>
                                                <td className="border border-gray-300 px-4 py-3">Shared among members</td>
                                                <td className="border border-gray-300 px-4 py-3">Dedicated per member</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="border border-gray-300 px-4 py-3 font-medium">Premium Cost</td>
                                                <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">Lower</td>
                                                <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">Higher</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-3 font-medium">Management</td>
                                                <td className="border border-gray-300 px-4 py-3 text-green-600">Single policy</td>
                                                <td className="border border-gray-300 px-4 py-3">Multiple policies</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="border border-gray-300 px-4 py-3 font-medium">Claim Impact</td>
                                                <td className="border border-gray-300 px-4 py-3 text-red-600">Reduces pool for others</td>
                                                <td className="border border-gray-300 px-4 py-3 text-green-600">No impact on others</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-3 font-medium">NCB (No Claim Bonus)</td>
                                                <td className="border border-gray-300 px-4 py-3">Lost if any member claims</td>
                                                <td className="border border-gray-300 px-4 py-3 text-green-600">Individual basis</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="border border-gray-300 px-4 py-3 font-medium">Best For</td>
                                                <td className="border border-gray-300 px-4 py-3">Young families, budget-conscious</td>
                                                <td className="border border-gray-300 px-4 py-3">Families with elderly/chronic conditions</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* When to Choose What */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6">Which One Should You Choose?</h2>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <Card className="border-blue-200">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-4 text-blue-900">Choose Family Floater If:</h3>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                                    <span>Family members are young (under 45)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                                    <span>No pre-existing conditions in the family</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                                    <span>You want lower total premium</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                                    <span>You prefer managing single policy</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                                    <span>All members have similar health profiles</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-red-200">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-4 text-red-900">Choose Individual Plans If:</h3>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>Parents are above 60 years</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>Family members have chronic conditions</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>You want dedicated coverage per member</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>High chances of multiple hospitalizations</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                    <span>You want to preserve NCB individually</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            {/* Pro Tip */}
                            <section className="mb-12">
                                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
                                    <h3 className="font-bold text-lg mb-3 text-purple-900">💡 Pro Tip: The Hybrid Approach</h3>
                                    <p className="text-purple-800 mb-3">
                                        Many families benefit from a combination approach:
                                    </p>
                                    <ul className="space-y-2 text-purple-800">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Base floater:</strong> ₹5-10 Lakh family floater for young family members</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Individual for parents:</strong> Separate senior citizen plans for elderly parents</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Super top-up:</strong> Add a super top-up for extra coverage at low cost</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Warning */}
                            <section className="mb-12">
                                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                                    <h3 className="font-bold text-lg mb-3 text-red-900 flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5" />
                                        Important Considerations
                                    </h3>
                                    <ul className="space-y-2 text-red-800">
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span>Premium is calculated based on the oldest member's age in floater plans</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span>Adding elderly parents to a floater significantly increases premium</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span>Children may need to be moved to separate policies when they become adults</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* CTA */}
                            <Card className="bg-gradient-to-r from-primary to-blue-700 text-white mb-12">
                                <CardContent className="p-8 text-center">
                                    <h3 className="text-2xl font-bold mb-3">Not Sure Which Plan is Right for Your Family?</h3>
                                    <p className="text-lg mb-6 opacity-90">
                                        Our experts can analyze your family's needs and recommend the best coverage structure
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
                                        Premium rates and coverage terms vary by insurer. The examples provided are illustrative. Always compare multiple plans and read policy documents carefully before purchasing. This information is for educational purposes only.
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
                    <ArticleNavigation currentSlug="family-floater-vs-individual-health-plans" articles={articles} />
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
