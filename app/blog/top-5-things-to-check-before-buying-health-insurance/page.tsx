import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/blog-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { ArticleNavigation } from "@/components/article-navigation"
import { CheckCircle2, AlertCircle, Heart, DollarSign, Shield } from "lucide-react"

export const metadata = {
  title: "Top 5 Things to Check Before Buying Health Insurance | InsureWise",
  description:
    "Essential checklist of 5 critical factors to verify before buying health insurance. Avoid coverage gaps and choose the right plan for your family.",
  keywords:
    "health insurance checklist, things to check health insurance, health insurance tips, coverage gaps, insurance buying guide",
}

export default function Top5HealthInsuranceBlogPost() {
  const articles = blogPosts.map(post => ({
    title: post.title,
    slug: post.slug,
    href: `/blog/${post.slug}`,
    image: post.image
  }))

  const currentPost = blogPosts.find(p => p.slug === "top-5-things-to-check-before-buying-health-insurance")
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
                Blog
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
              <span className="text-sm font-medium text-red-600">Health Insurance Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Top 5 Things to Check Before Buying Health Insurance
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              A practical checklist to ensure you're buying the right health insurance policy without costly coverage gaps
            </p>

            {/* Hero Image */}
            <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-lg border">
              <Image
                src={postImage}
                alt="Top 5 Things to Check Before Buying Health Insurance"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                <h3 className="font-bold text-lg mb-3 text-red-900">Why This Matters</h3>
                <p className="text-red-800">
                  Health insurance claims are often rejected due to coverage gaps, fine print clauses, and exclusions. By
                  checking these 5 critical factors before buying, you can avoid surprises when you need coverage the most.
                </p>
              </div>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-8">The 5 Essential Checks</h2>

                {/* Check 1 */}
                <Card className="mb-8 border-l-4 border-l-blue-600">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100">
                          <span className="text-2xl font-bold text-blue-600">1</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-blue-900 mb-3">Sum Insured (Coverage Amount)</h3>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            Sum Insured is the maximum amount the insurance company will pay for your medical treatment. This is
                            critical because insufficient coverage can leave you paying out of pocket during emergencies.
                          </p>

                          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                            <h4 className="font-bold text-yellow-900 mb-2">What's the Right Amount?</h4>
                            <ul className="space-y-2 text-yellow-800 text-sm">
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>
                                  <strong>Minimum ₹5 Lakh:</strong> Basic coverage for individuals
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>
                                  <strong>₹10-15 Lakh:</strong> Recommended for families (family of 4)
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>
                                  <strong>₹25+ Lakh:</strong> If you're above 45 or have health issues
                                </span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                            <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                              <AlertCircle className="w-4 h-4" />
                              Red Flag Example
                            </h4>
                            <p className="text-red-800 text-sm">
                              A patient was hospitalized for 20 days with ₹3 Lakh in bills, but his policy had only ₹2 Lakh
                              coverage. He paid ₹1 Lakh out of pocket. Don't let this happen to you!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Check 2 */}
                <Card className="mb-8 border-l-4 border-l-green-600">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100">
                          <span className="text-2xl font-bold text-green-600">2</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-green-900 mb-3">Room Rent Cap & Proportion Deduction</h3>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            Room Rent Cap is the maximum daily hospital room cost the insurer will reimburse. Exceeding this cap
                            can trigger "proportionate deduction" where they reduce your entire claim reimbursement.
                          </p>

                          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                            <h4 className="font-bold text-blue-900 mb-3">How Room Rent Impacts Your Claim</h4>
                            <div className="space-y-3 text-blue-800 text-sm">
                              <div>
                                <p className="font-semibold mb-1">Example:</p>
                                <ul className="space-y-1 ml-4">
                                  <li>• Total Hospital Bill: ₹5 Lakh</li>
                                  <li>• Room Rent Charged: ₹5,000/day (20 days = ₹1 Lakh)</li>
                                  <li>• Your Policy Room Cap: ₹2,000/day</li>
                                  <li>• Reimbursement Reduced to: ₹4 Lakh (20% deduction on entire bill)</li>
                                  <li>• <strong>You Pay Out of Pocket: ₹1 Lakh</strong></li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                            <h4 className="font-bold text-green-900 mb-2">What to Look For</h4>
                            <ul className="space-y-2 text-green-800 text-sm">
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Room cap should be at least ₹3,000-5,000/day</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Better plans offer "Unlimited" room rent</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Check if room rent is calculated as % of sum insured or as absolute limit</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Check 3 */}
                <Card className="mb-8 border-l-4 border-l-purple-600">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100">
                          <span className="text-2xl font-bold text-purple-600">3</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-purple-900 mb-3">Pre-Existing Disease (PED) Waiting Period</h3>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            Pre-Existing Disease (PED) waiting period is how long you must wait before claims related to existing
                            health conditions are covered. This is a major clause that can significantly impact your coverage.
                          </p>

                          <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                            <h4 className="font-bold text-orange-900 mb-3">Typical PED Waiting Periods</h4>
                            <div className="space-y-2 text-orange-800 text-sm">
                              <div className="flex justify-between">
                                <span>Standard Plans:</span>
                                <span className="font-semibold">2-4 years</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Senior Citizens (60+):</span>
                                <span className="font-semibold">30 days - 2 years</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Special Plans:</span>
                                <span className="font-semibold">No waiting period (Higher premium)</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                            <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                              <AlertCircle className="w-4 h-4" />
                              Critical Alert
                            </h4>
                            <p className="text-red-800 text-sm">
                              If you have diabetes or hypertension, you MUST disclose it during application. Non-disclosure can
                              lead to claim rejection even after the waiting period ends!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Check 4 */}
                <Card className="mb-8 border-l-4 border-l-orange-600">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100">
                          <span className="text-2xl font-bold text-orange-600">4</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-orange-900 mb-3">Co-pay & Deductibles</h3>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            Co-pay is the amount you pay out of pocket for each claim, while deductibles are annual amounts you
                            must pay before insurance kicks in. These reduce your reimbursement significantly.
                          </p>

                          <div className="bg-sky-50 border border-sky-200 p-4 rounded-lg">
                            <h4 className="font-bold text-sky-900 mb-3">Understanding Co-pay vs Deductible</h4>
                            <div className="space-y-3 text-sky-800 text-sm">
                              <div>
                                <p className="font-semibold">Co-pay (Percentage-based):</p>
                                <p className="ml-4">
                                  If your policy has 10% co-pay and your bill is ₹1 Lakh, you pay ₹10,000 and insurer pays ₹90,000
                                </p>
                              </div>
                              <div className="border-t pt-3">
                                <p className="font-semibold">Deductible (Amount-based):</p>
                                <p className="ml-4">
                                  If your policy has ₹5,000 deductible and your bill is ₹50,000, you pay ₹5,000 and insurer pays
                                  ₹45,000
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                            <h4 className="font-bold text-green-900 mb-2">Best Options</h4>
                            <ul className="space-y-2 text-green-800 text-sm">
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Zero co-pay (full reimbursement)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Or low deductible (₹1,000-5,000 max)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Some plans waive co-pay for network hospitals</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Check 5 */}
                <Card className="mb-8 border-l-4 border-l-indigo-600">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100">
                          <span className="text-2xl font-bold text-indigo-600">5</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-indigo-900 mb-3">Exclusions & Inclusions</h3>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            Exclusions are conditions and treatments NOT covered by the policy. Some are standard, but reading
                            fine print can reveal unexpected exclusions that leave you unprotected.
                          </p>

                          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                            <h4 className="font-bold text-red-900 mb-3">Common Exclusions to Watch</h4>
                            <ul className="space-y-2 text-red-800 text-sm">
                              <li className="flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Cosmetic/aesthetic procedures</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Treatment abroad (unless specifically included)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Claims from high-risk activities or sports</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Mental health treatments (check coverage)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Some fertility/pregnancy-related treatments</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                            <h4 className="font-bold text-green-900 mb-3">Must-Have Inclusions</h4>
                            <ul className="space-y-2 text-green-800 text-sm">
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Pre & post-hospitalization expenses</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Day-care procedures (surgery without overnight stay)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Outpatient consultations (critical!)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Ambulance charges reimbursement</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Network hospital access (wider network = better)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <Card className="bg-gradient-to-r from-primary to-blue-700 text-white mb-12">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-3">Ready to Buy the Right Health Insurance?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Use our policy comparison tool to evaluate plans side-by-side and avoid coverage gaps
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <ExpertAdviceButton size="lg" variant="secondary">
                      Get Free Expert Advice
                    </ExpertAdviceButton>
                    <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                      <Link href="/compare">Compare Plans</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Quick Checklist for Buying Health Insurance</h2>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked={false} />
                    </div>
                    <p className="text-blue-900">
                      <strong>Sum Insured:</strong> Minimum ₹5L for individual, ₹15L+ for families
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked={false} />
                    </div>
                    <p className="text-blue-900">
                      <strong>Room Rent:</strong> Should be unlimited or at least ₹3,000-5,000/day
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked={false} />
                    </div>
                    <p className="text-blue-900">
                      <strong>PED Waiting:</strong> Choose plans with shorter waiting periods if you have existing health issues
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked={false} />
                    </div>
                    <p className="text-blue-900">
                      <strong>Co-pay/Deductible:</strong> Prefer zero co-pay or low deductibles
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked={false} />
                    </div>
                    <p className="text-blue-900">
                      <strong>Exclusions:</strong> Read the policy wordings carefully for hidden exclusions
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>

      {/* Article Navigation */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleNavigation currentSlug="top-5-things-to-check-before-buying-health-insurance" articles={articles} />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Plan?</h2>
            <p className="text-muted-foreground mb-8">
              Our insurance experts can review your needs and recommend the perfect health insurance plan
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/compare">Compare Plans Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
