import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { ArticleNavigation } from "@/components/article-navigation"
import { blogPosts } from "@/lib/blog-data"
import { Activity, CheckCircle2, AlertCircle, Heart, Pill, Shield } from "lucide-react"

export const metadata = {
    title: "Health Insurance for Diabetics: Complete Guide to Coverage & Plans | Life Cover Now",
    description:
        "A comprehensive guide to finding health insurance if you have diabetes. Understand waiting periods, coverage limits, loading charges, and best plans for diabetics.",
    keywords:
        "health insurance for diabetics, diabetes health insurance, diabetic health coverage, insurance for diabetes patients, best health insurance diabetes",
}

export default function HealthInsuranceForDiabeticsBlogPost() {
    const articles = blogPosts.map(post => ({
        title: post.title,
        slug: post.slug,
        href: `/blog/${post.slug}`,
        image: post.image
    }))

    const currentPost = blogPosts.find(p => p.slug === "health-insurance-for-diabetics")
    const postImage = currentPost?.image || "/placeholder.svg"

    return (
        <div className="min-h-screen">


            {/* Article */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <Activity className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-medium text-blue-600">Health Insurance</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                            Health Insurance for Diabetics: Complete Guide to Coverage & Plans
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                            Finding the right health insurance when you have diabetes - understanding waiting periods, loading charges, and coverage options
                        </p>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-lg border">
                            <Image
                                src={postImage}
                                alt="Health Insurance for Diabetics"
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
                                        <span>Diabetics CAN get health insurance – with some conditions and loading</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Pre-existing disease waiting period of 2-4 years applies to diabetes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Always disclose diabetes – hiding it will lead to claim rejection</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Why Diabetics Need Insurance */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Heart className="w-8 h-8 text-red-600" />
                                    Why Diabetics Need Health Insurance
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    India has over 77 million diabetics – the second-highest in the world. Diabetes is a lifelong condition that can lead to expensive complications if not managed properly.
                                </p>

                                <Card className="mb-6">
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg mb-4">Potential Diabetes Complications & Costs</h3>
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse border border-gray-300 rounded-lg text-sm">
                                                <thead>
                                                    <tr className="bg-gray-50">
                                                        <th className="border border-gray-300 px-4 py-3 text-left">Complication</th>
                                                        <th className="border border-gray-300 px-4 py-3 text-left">Estimated Treatment Cost</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-3">Diabetic Retinopathy (eye)</td>
                                                        <td className="border border-gray-300 px-4 py-3">₹30,000 - ₹1,00,000</td>
                                                    </tr>
                                                    <tr className="bg-gray-50">
                                                        <td className="border border-gray-300 px-4 py-3">Kidney Disease/Dialysis</td>
                                                        <td className="border border-gray-300 px-4 py-3">₹15,000 - ₹25,000/month</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-3">Heart Disease/Bypass</td>
                                                        <td className="border border-gray-300 px-4 py-3">₹3 - ₹8 Lakh</td>
                                                    </tr>
                                                    <tr className="bg-gray-50">
                                                        <td className="border border-gray-300 px-4 py-3">Diabetic Foot/Amputation</td>
                                                        <td className="border border-gray-300 px-4 py-3">₹1 - ₹3 Lakh</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-3">Stroke Treatment</td>
                                                        <td className="border border-gray-300 px-4 py-3">₹2 - ₹10 Lakh</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* Getting Insurance with Diabetes */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Shield className="w-8 h-8 text-blue-600" />
                                    Getting Health Insurance with Diabetes
                                </h2>

                                <p className="text-muted-foreground mb-4">
                                    When you apply for health insurance with diabetes, here's what to expect:
                                </p>

                                <div className="space-y-4">
                                    <Card className="border-l-4 border-l-blue-600">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-2">1. Medical Underwriting</h3>
                                            <p className="text-muted-foreground text-sm mb-3">
                                                The insurer will assess your health profile based on:
                                            </p>
                                            <ul className="text-sm text-muted-foreground grid md:grid-cols-2 gap-1">
                                                <li>• Duration of diabetes</li>
                                                <li>• Current HbA1c levels</li>
                                                <li>• Fasting blood sugar levels</li>
                                                <li>• Type of diabetes (Type 1 or 2)</li>
                                                <li>• Body Mass Index (BMI)</li>
                                                <li>• Existing complications</li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-l-4 border-l-orange-600">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-2">2. Premium Loading</h3>
                                            <p className="text-muted-foreground text-sm mb-3">
                                                Insurers typically charge extra premium (loading) for diabetics:
                                            </p>
                                            <div className="bg-orange-50 p-4 rounded-lg">
                                                <ul className="text-sm text-orange-800 space-y-2">
                                                    <li><strong>10-30% loading:</strong> Well-controlled diabetes, no complications</li>
                                                    <li><strong>30-50% loading:</strong> Moderately controlled diabetes</li>
                                                    <li><strong>50%+ or rejection:</strong> Uncontrolled diabetes with complications</li>
                                                </ul>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-l-4 border-l-green-600">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-2">3. Pre-Existing Disease Waiting Period</h3>
                                            <p className="text-muted-foreground text-sm mb-3">
                                                Your diabetes and related hospitalizations will be covered only after:
                                            </p>
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <ul className="text-sm text-green-800 space-y-1">
                                                    <li>• <strong>2-4 years</strong> waiting period (varies by insurer)</li>
                                                    <li>• Non-diabetes hospitalizations covered immediately (after 30-day initial wait)</li>
                                                    <li>• Accidents covered from day 1</li>
                                                </ul>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            {/* Types of Coverage */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6">Insurance Options for Diabetics</h2>

                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    <Card>
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-3 text-blue-900">Regular Health Insurance</h3>
                                            <p className="text-sm text-muted-foreground mb-3">
                                                Standard policies that accept diabetics with conditions
                                            </p>
                                            <ul className="text-sm text-muted-foreground space-y-1">
                                                <li>✓ Lower premiums than diabetes-specific plans</li>
                                                <li>✓ Complete health coverage</li>
                                                <li>✗ 2-4 year PED waiting period</li>
                                                <li>✗ May have loading charges</li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-primary">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-3 text-green-900">Diabetes-Specific Plans</h3>
                                            <p className="text-sm text-muted-foreground mb-3">
                                                Specially designed for diabetic patients
                                            </p>
                                            <ul className="text-sm text-muted-foreground space-y-1">
                                                <li>✓ No waiting period for diabetes</li>
                                                <li>✓ OPD cover for medicines & tests</li>
                                                <li>✓ Wellness programs included</li>
                                                <li>✗ Higher premium</li>
                                                <li>✗ Lower sum insured options</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                                    <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                                        <Pill className="w-5 h-5" />
                                        Popular Diabetes Plans in India
                                    </h4>
                                    <ul className="text-sm text-blue-800 space-y-1">
                                        <li>• Star Health Diabetes Safe Insurance</li>
                                        <li>• Apollo Munich Energy Plan</li>
                                        <li>• ICICI Lombard Health Care Plus</li>
                                        <li>• SBI Arogya Premier (accepts diabetics)</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Tips for Diabetics */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6">Tips to Get Better Coverage & Lower Premiums</h2>

                                <div className="space-y-3">
                                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                                        <div>
                                            <p className="font-semibold">Keep Your Diabetes Under Control</p>
                                            <p className="text-sm text-muted-foreground">Maintain HbA1c below 7% and fasting sugar under 130 mg/dL for better terms</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                                        <div>
                                            <p className="font-semibold">Buy When You're Young & Just Diagnosed</p>
                                            <p className="text-sm text-muted-foreground">New diabetics get better rates. Don't wait for complications to develop.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                                        <div>
                                            <p className="font-semibold">Maintain Medical Records</p>
                                            <p className="text-sm text-muted-foreground">Keep documented proof of controlled diabetes – helps during underwriting</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                                        <div>
                                            <p className="font-semibold">Consider OPD Add-on</p>
                                            <p className="text-sm text-muted-foreground">Regular medicines and tests can add up. OPD cover helps offset costs.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">5</div>
                                        <div>
                                            <p className="font-semibold">Get Adequate Sum Insured</p>
                                            <p className="text-sm text-muted-foreground">Diabetes complications are expensive. Get at least ₹10-15 Lakh cover</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Warning Section */}
                            <section className="mb-12">
                                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                                    <h3 className="font-bold text-lg mb-4 text-red-900 flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5" />
                                        Never Hide Your Diabetes!
                                    </h3>
                                    <p className="text-red-800 mb-3">
                                        Hiding diabetes during policy purchase will lead to:
                                    </p>
                                    <ul className="space-y-2 text-red-800">
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>100% claim rejection</strong> for any diabetes-related hospitalization</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>Policy cancellation</strong> and possible blacklisting</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span><strong>No refund</strong> of paid premiums</span>
                                        </li>
                                    </ul>
                                    <p className="text-red-900 font-semibold mt-4">
                                        Insurers check hospital records, pharmacy records, and lab reports. They WILL find out.
                                    </p>
                                </div>
                            </section>

                            {/* CTA */}
                            <Card className="bg-gradient-to-r from-primary to-blue-700 text-white mb-12">
                                <CardContent className="p-8 text-center">
                                    <h3 className="text-2xl font-bold mb-3">Living with Diabetes? Get Expert Insurance Advice</h3>
                                    <p className="text-lg mb-6 opacity-90">
                                        Our specialists understand diabetic insurance needs and can help you find the best plan
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
                                            <Link href="/compare">Compare Diabetic Plans →</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Disclaimer */}
                            <Card className="bg-amber-50 border-amber-200">
                                <CardContent className="p-6">
                                    <h3 className="font-bold mb-3 text-amber-900">Disclaimer</h3>
                                    <p className="text-sm text-amber-800 leading-relaxed">
                                        Insurance coverage, premium loading, and acceptance criteria vary by insurer and your specific health profile. This information is for educational purposes only. Always consult with insurance advisors for personalized recommendations.
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
                    <ArticleNavigation currentSlug="health-insurance-for-diabetics" articles={articles} />
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
