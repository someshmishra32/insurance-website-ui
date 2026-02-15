import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { ArticleNavigation } from "@/components/article-navigation"
import { blogPosts } from "@/lib/blog-data"
import { FileText, CheckCircle2, AlertCircle, Clock, FileCheck, Phone, Camera } from "lucide-react"

export const metadata = {
    title: "How to File Insurance Claims Successfully: A Step-by-Step Guide | InsureWise",
    description:
        "Navigate the claim process with confidence. Learn the documents needed and common mistakes to avoid during the crucial claim filing period.",
    keywords:
        "insurance claim process, how to file insurance claim, claim documents, insurance claim tips, claim settlement",
}

export default function HowToFileClaimsBlogPost() {
    const articles = blogPosts.map(post => ({
        title: post.title,
        slug: post.slug,
        href: `/blog/${post.slug}`,
        image: post.image
    }))

    const currentPost = blogPosts.find(p => p.slug === "how-to-file-insurance-claims-successfully")
    const postImage = currentPost?.image || "/placeholder.svg" // Fallback placeholder


    return (
        <div className="min-h-screen">


            {/* Article */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <FileText className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-medium text-blue-600">Claim Process</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                            How to File Insurance Claims Successfully: A Step-by-Step Guide
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                            Navigate the claim process with confidence. Learn what documents you need and common mistakes to avoid.
                        </p>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-lg border">
                            <Image
                                src={postImage}
                                alt="How to File Insurance Claims Successfully"
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
                                        <span>Keep all relevant documents organized from day one</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Contact your insurer promptly after an incident</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Avoid making unnecessary statements or exaggerating claims</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Step 1 */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6">Step-by-Step Claim Filing Process</h2>

                                <Card className="mb-6 border-l-4 border-l-blue-600">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                                                <Phone className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Step 1: Intimate the Insurance Company</h3>
                                                <p className="text-muted-foreground mb-3">
                                                    Contact your insurer immediately after the incident. Most policies require intimation within:
                                                </p>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="bg-blue-50 p-4 rounded-lg">
                                                        <p className="font-semibold text-blue-900">Health Insurance</p>
                                                        <p className="text-sm text-blue-800">Within 24-48 hours of hospitalization</p>
                                                    </div>
                                                    <div className="bg-blue-50 p-4 rounded-lg">
                                                        <p className="font-semibold text-blue-900">Life Insurance</p>
                                                        <p className="text-sm text-blue-800">Within 30 days of the event</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="mb-6 border-l-4 border-l-green-600">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                                                <FileCheck className="w-6 h-6 text-green-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Step 2: Gather Required Documents</h3>
                                                <p className="text-muted-foreground mb-3">
                                                    Collect all necessary documents. Missing documents are the #1 reason for claim delays.
                                                </p>
                                                <div className="space-y-4">
                                                    <div className="bg-green-50 p-4 rounded-lg">
                                                        <p className="font-semibold text-green-900 mb-2">For Health Insurance Claims:</p>
                                                        <ul className="text-sm text-green-800 space-y-1">
                                                            <li>• Original hospital bills and receipts</li>
                                                            <li>• Discharge summary from hospital</li>
                                                            <li>• Prescription from treating doctor</li>
                                                            <li>• Diagnostic reports (blood tests, X-rays, etc.)</li>
                                                            <li>• Policy copy and health card</li>
                                                            <li>• Pre-authorization form (for cashless claims)</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-purple-50 p-4 rounded-lg">
                                                        <p className="font-semibold text-purple-900 mb-2">For Life Insurance Claims:</p>
                                                        <ul className="text-sm text-purple-800 space-y-1">
                                                            <li>• Death certificate (original)</li>
                                                            <li>• Policy document (original)</li>
                                                            <li>• Claimant's identity and address proof</li>
                                                            <li>• Bank account details of nominee</li>
                                                            <li>• Medical records (if death due to illness)</li>
                                                            <li>• FIR/Post-mortem report (if accidental death)</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="mb-6 border-l-4 border-l-purple-600">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                                                <FileText className="w-6 h-6 text-purple-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Step 3: Fill the Claim Form Correctly</h3>
                                                <p className="text-muted-foreground mb-3">
                                                    Complete the claim form accurately. Any discrepancies can lead to rejection.
                                                </p>
                                                <ul className="space-y-2 text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                                        <span>Double-check all personal details match your policy</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                                        <span>Provide accurate dates and treatment details</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                                        <span>Get the treating doctor to sign where required</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="mb-6 border-l-4 border-l-orange-600">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                                                <Camera className="w-6 h-6 text-orange-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Step 4: Submit and Track Your Claim</h3>
                                                <p className="text-muted-foreground mb-3">
                                                    Submit all documents and keep copies for your records.
                                                </p>
                                                <div className="bg-orange-50 p-4 rounded-lg">
                                                    <p className="font-semibold text-orange-900 mb-2">Pro Tips:</p>
                                                    <ul className="text-sm text-orange-800 space-y-1">
                                                        <li>• Take photos of all original documents before submission</li>
                                                        <li>• Get acknowledgment receipt with claim number</li>
                                                        <li>• Track claim status online or via the insurer's app</li>
                                                        <li>• Follow up every 3-5 days if no response</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="mb-6 border-l-4 border-l-indigo-600">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
                                                <Clock className="w-6 h-6 text-indigo-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Step 5: Settlement Timeline</h3>
                                                <p className="text-muted-foreground mb-3">
                                                    Know the expected timelines for claim settlement:
                                                </p>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="bg-indigo-50 p-4 rounded-lg">
                                                        <p className="font-semibold text-indigo-900">Health Claims</p>
                                                        <p className="text-sm text-indigo-800">30 days from document submission</p>
                                                    </div>
                                                    <div className="bg-indigo-50 p-4 rounded-lg">
                                                        <p className="font-semibold text-indigo-900">Life Claims</p>
                                                        <p className="text-sm text-indigo-800">30-60 days (simple cases)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
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
                                            <span><strong>Delayed intimation:</strong> Not informing the insurer within the stipulated time</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Incomplete documents:</strong> Missing bills, reports, or prescriptions</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Policy lapse:</strong> Filing claims when premium payment is overdue</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Non-disclosure:</strong> Not mentioning pre-existing conditions during policy purchase</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Wrong hospital choice:</strong> Going to non-network hospital for cashless claims</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* CTA */}
                            <Card className="bg-gradient-to-r from-primary to-blue-700 text-white mb-12">
                                <CardContent className="p-8 text-center">
                                    <h3 className="text-2xl font-bold mb-3">Need Help With Your Claim?</h3>
                                    <p className="text-lg mb-6 opacity-90">
                                        Our experts can guide you through the claim process and help resolve any issues
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
                                        Claim processes may vary by insurer and policy type. Always refer to your specific policy document for exact requirements and timelines. This guide is for educational purposes only.
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
                    <ArticleNavigation currentSlug="how-to-file-insurance-claims-successfully" articles={articles} />
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
