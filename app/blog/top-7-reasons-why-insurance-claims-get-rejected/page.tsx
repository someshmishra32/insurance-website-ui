import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { ArticleNavigation } from "@/components/article-navigation"
import { blogPosts } from "@/lib/blog-data"
import { XCircle, CheckCircle2, AlertCircle, FileWarning, Shield, FileText } from "lucide-react"

export const metadata = {
    title: "Top 7 Reasons Why Insurance Claims Get Rejected | InsureWise",
    description:
        "Learn the most common reasons for insurance claim rejections and how to avoid them. Protect your family from claim denials with these expert tips.",
    keywords:
        "insurance claim rejected, claim rejection reasons, health insurance claim denied, life insurance claim rejection, avoid claim rejection",
}

export default function ClaimRejectionReasonsBlogPost() {
    const articles = blogPosts.map(post => ({
        title: post.title,
        slug: post.slug,
        href: `/blog/${post.slug}`,
        image: post.image
    }))

    const currentPost = blogPosts.find(p => p.slug === "top-7-reasons-why-insurance-claims-get-rejected")
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
                            <XCircle className="w-5 h-5 text-red-600" />
                            <span className="text-sm font-medium text-red-600">Claim Process</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                            Top 7 Reasons Why Insurance Claims Get Rejected
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                            Learn the most common reasons for insurance claim rejections and how to avoid them to protect your family
                        </p>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-lg border">
                            <Image
                                src={postImage}
                                alt="Top 7 Reasons Why Insurance Claims Get Rejected"
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
                                        <span>Most claim rejections are due to non-disclosure or incomplete information</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Understanding policy exclusions can prevent unexpected rejections</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Proper documentation and timely intimation are crucial for claim approval</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Introduction */}
                            <section className="mb-12">
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    According to IRDAI data, approximately 4-5% of health insurance claims and 2-3% of life insurance claims are rejected every year. Understanding why claims get rejected can help you avoid these pitfalls and ensure your family is protected when they need it most.
                                </p>
                            </section>

                            {/* Reason 1 */}
                            <section className="mb-8">
                                <Card className="border-l-4 border-l-red-600">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                                                <span className="text-xl font-bold text-red-600">1</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                                    <FileWarning className="w-5 h-5 text-red-600" />
                                                    Non-Disclosure of Pre-Existing Conditions
                                                </h3>
                                                <p className="text-muted-foreground mb-3">
                                                    The #1 reason for claim rejection. Hiding your medical history during policy purchase almost always leads to claim denial.
                                                </p>
                                                <div className="bg-red-50 p-4 rounded-lg">
                                                    <p className="text-sm text-red-800 mb-2">
                                                        <strong>Example:</strong> Rahul didn't disclose his diabetes during policy purchase. His kidney failure claim (a diabetes complication) was rejected even 3 years later.
                                                    </p>
                                                    <p className="text-sm text-green-700 font-medium mt-2">
                                                        ✓ Solution: Always disclose ALL known health conditions, even minor ones.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* Reason 2 */}
                            <section className="mb-8">
                                <Card className="border-l-4 border-l-orange-600">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                                                <span className="text-xl font-bold text-orange-600">2</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Policy Still in Waiting Period</h3>
                                                <p className="text-muted-foreground mb-3">
                                                    All policies have waiting periods – initial 30 days, 2-year specific disease, and 2-4 year pre-existing disease waiting periods.
                                                </p>
                                                <div className="bg-orange-50 p-4 rounded-lg">
                                                    <p className="text-sm text-orange-800 mb-2">
                                                        <strong>Example:</strong> Priya filed a hernia surgery claim just 6 months after buying her policy. It was rejected because hernia has a 2-year waiting period.
                                                    </p>
                                                    <p className="text-sm text-green-700 font-medium mt-2">
                                                        ✓ Solution: Understand all waiting periods before buying. Buy insurance early.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* Reason 3 */}
                            <section className="mb-8">
                                <Card className="border-l-4 border-l-yellow-600">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                                                <span className="text-xl font-bold text-yellow-600">3</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Treatment Falls Under Exclusions</h3>
                                                <p className="text-muted-foreground mb-3">
                                                    Every policy has a list of permanent exclusions – treatments that are never covered regardless of circumstances.
                                                </p>
                                                <div className="bg-yellow-50 p-4 rounded-lg">
                                                    <p className="text-sm text-yellow-800 mb-2"><strong>Common exclusions include:</strong></p>
                                                    <ul className="text-sm text-yellow-800 grid md:grid-cols-2 gap-1">
                                                        <li>• Cosmetic/plastic surgery</li>
                                                        <li>• Dental treatments</li>
                                                        <li>• Spectacles/contact lenses</li>
                                                        <li>• Infertility treatment</li>
                                                        <li>• Self-inflicted injuries</li>
                                                        <li>• War/nuclear events</li>
                                                    </ul>
                                                    <p className="text-sm text-green-700 font-medium mt-2">
                                                        ✓ Solution: Read the exclusions list carefully before buying any policy.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* Reason 4 */}
                            <section className="mb-8">
                                <Card className="border-l-4 border-l-blue-600">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                                                <span className="text-xl font-bold text-blue-600">4</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                                    <FileText className="w-5 h-5 text-blue-600" />
                                                    Incomplete or Incorrect Documentation
                                                </h3>
                                                <p className="text-muted-foreground mb-3">
                                                    Missing documents or incorrect information in claim forms can lead to delays or rejection.
                                                </p>
                                                <div className="bg-blue-50 p-4 rounded-lg">
                                                    <p className="text-sm text-blue-800 mb-2"><strong>Essential documents:</strong></p>
                                                    <ul className="text-sm text-blue-800 space-y-1">
                                                        <li>• Original bills and receipts</li>
                                                        <li>• Discharge summary</li>
                                                        <li>• Doctor's prescription</li>
                                                        <li>• Diagnostic reports</li>
                                                        <li>• Policy document copy</li>
                                                    </ul>
                                                    <p className="text-sm text-green-700 font-medium mt-2">
                                                        ✓ Solution: Keep all medical documents organized. Take photos of originals.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* Reason 5 */}
                            <section className="mb-8">
                                <Card className="border-l-4 border-l-purple-600">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                                                <span className="text-xl font-bold text-purple-600">5</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Policy Lapsed Due to Non-Payment</h3>
                                                <p className="text-muted-foreground mb-3">
                                                    If your premium payment was due and not paid, your policy may have lapsed, making you ineligible for claims.
                                                </p>
                                                <div className="bg-purple-50 p-4 rounded-lg">
                                                    <p className="text-sm text-purple-800 mb-2">
                                                        <strong>Grace periods:</strong>
                                                    </p>
                                                    <ul className="text-sm text-purple-800 space-y-1">
                                                        <li>• Health insurance: Usually 15-30 days</li>
                                                        <li>• Life insurance: Usually 30 days</li>
                                                    </ul>
                                                    <p className="text-sm text-green-700 font-medium mt-2">
                                                        ✓ Solution: Set up auto-pay for premiums. Keep track of renewal dates.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* Reason 6 */}
                            <section className="mb-8">
                                <Card className="border-l-4 border-l-green-600">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                                                <span className="text-xl font-bold text-green-600">6</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Delay in Claim Intimation</h3>
                                                <p className="text-muted-foreground mb-3">
                                                    Policies require you to intimate claims within a specific timeframe. Late intimation can result in rejection.
                                                </p>
                                                <div className="bg-green-50 p-4 rounded-lg">
                                                    <p className="text-sm text-green-800 mb-2">
                                                        <strong>Typical timelines:</strong>
                                                    </p>
                                                    <ul className="text-sm text-green-800 space-y-1">
                                                        <li>• Cashless claim: 24-48 hours before hospitalization (planned)</li>
                                                        <li>• Emergency: Within 24 hours of admission</li>
                                                        <li>• Reimbursement: Within 15-30 days of discharge</li>
                                                    </ul>
                                                    <p className="text-sm text-blue-700 font-medium mt-2">
                                                        ✓ Solution: Contact the insurer immediately after hospitalization.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* Reason 7 */}
                            <section className="mb-8">
                                <Card className="border-l-4 border-l-indigo-600">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
                                                <span className="text-xl font-bold text-indigo-600">7</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                                    <Shield className="w-5 h-5 text-indigo-600" />
                                                    Hospitalization in Non-Network Hospital
                                                </h3>
                                                <p className="text-muted-foreground mb-3">
                                                    While not a complete rejection, going to a non-network hospital can affect your claim amount significantly.
                                                </p>
                                                <div className="bg-indigo-50 p-4 rounded-lg">
                                                    <p className="text-sm text-indigo-800 mb-2">
                                                        <strong>What can happen:</strong>
                                                    </p>
                                                    <ul className="text-sm text-indigo-800 space-y-1">
                                                        <li>• No cashless facility – must pay upfront</li>
                                                        <li>• Some plans have higher co-pay for non-network</li>
                                                        <li>• Longer reimbursement processing time</li>
                                                    </ul>
                                                    <p className="text-sm text-green-700 font-medium mt-2">
                                                        ✓ Solution: Check network hospitals near you before buying a policy.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* Prevention Tips */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6">How to Avoid Claim Rejection</h2>

                                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                            <p className="text-blue-900"><strong>Disclose everything:</strong> Be completely honest about your health history during policy purchase</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                            <p className="text-blue-900"><strong>Read the policy:</strong> Understand exclusions, waiting periods, and claim procedures</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                            <p className="text-blue-900"><strong>Keep documents ready:</strong> Maintain organized records of all medical documents</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                            <p className="text-blue-900"><strong>Pay premiums on time:</strong> Set up auto-renewal to avoid policy lapse</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                            <p className="text-blue-900"><strong>Intimate claims promptly:</strong> Contact insurer immediately after hospitalization</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* What to do if rejected */}
                            <section className="mb-12">
                                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
                                    <h3 className="font-bold text-lg mb-4 text-yellow-900 flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5" />
                                        What to Do If Your Claim is Rejected?
                                    </h3>
                                    <ol className="space-y-3 text-yellow-800 list-decimal list-inside">
                                        <li>Request a written explanation from the insurer for the rejection reason</li>
                                        <li>Check if the rejection is valid by reviewing your policy document</li>
                                        <li>File a grievance with the insurance company's grievance cell</li>
                                        <li>Escalate to the Insurance Ombudsman if not resolved within 30 days</li>
                                        <li>As a last resort, approach the Consumer Court or IRDAI</li>
                                    </ol>
                                </div>
                            </section>

                            {/* CTA */}
                            <Card className="bg-gradient-to-r from-primary to-blue-700 text-white mb-12">
                                <CardContent className="p-8 text-center">
                                    <h3 className="text-2xl font-bold mb-3">Need Help With a Rejected Claim?</h3>
                                    <p className="text-lg mb-6 opacity-90">
                                        Our experts can help you understand your policy and guide you through the dispute process
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
                                            <Link href="/claims">Track Claim Status →</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Disclaimer */}
                            <Card className="bg-amber-50 border-amber-200">
                                <CardContent className="p-6">
                                    <h3 className="font-bold mb-3 text-amber-900">Disclaimer</h3>
                                    <p className="text-sm text-amber-800 leading-relaxed">
                                        Claim terms and conditions vary by insurer and policy. Always refer to your specific policy document for exact terms. This information is for educational purposes only and does not constitute legal or financial advice.
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
                    <ArticleNavigation currentSlug="top-7-reasons-why-insurance-claims-get-rejected" articles={articles} />
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
