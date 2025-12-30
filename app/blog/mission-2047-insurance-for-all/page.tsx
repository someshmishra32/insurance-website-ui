import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { ArticleNavigation } from "@/components/article-navigation"
import { Landmark, Shield, IndianRupee, Users, CheckCircle2, TrendingUp } from "lucide-react"

export const metadata = {
  title: "Insurance for All by 2047 – Government of India's Mission Explained | InsureWise",
  description:
    "Comprehensive guide to IRDAI's Mission 2047, Bima Trinity initiatives, GST reforms, and how insurance is becoming affordable and accessible for every Indian household.",
  keywords:
    "Mission 2047, Insurance for All, IRDAI initiatives, Bima Sugam, Bima Vistar, Bima Vahaks, GST on insurance, insurance reforms India",
}

export default function Mission2047BlogPost() {
  const articles = [
    { title: "GST Relief on Insurance (2025 Update)", slug: "gst-relief-insurance-2025", href: "/blog/gst-relief-insurance-2025" },
    { title: "Mission 2047 - Insurance for All", slug: "mission-2047-insurance-for-all", href: "/blog/mission-2047-insurance-for-all" },
    { title: "Term vs Whole Life Insurance", slug: "term-vs-whole-life-insurance", href: "/blog/term-vs-whole-life-insurance" },
    { title: "Top 5 Things to Check Before Buying Health Insurance", slug: "top-5-things-to-check-before-buying-health-insurance", href: "/blog/top-5-things-to-check-before-buying-health-insurance" },
  ]

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

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/blog" className="hover:text-primary">
                Blog
              </Link>
              <span>/</span>
              <span>Mission 2047</span>
            </div>

            {/* Title Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Landmark className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Government Initiative</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                Insurance for All by 2047 – Government of India's Mission Explained
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                How IRDAI's ambitious Mission 2047 is transforming insurance accessibility, affordability, and
                transparency for every Indian citizen
              </p>
              <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
                <span>Published: January 2025</span>
                <span>•</span>
                <span>15 min read</span>
              </div>
            </div>

            {/* Table of Contents */}
            <Card className="mb-12 bg-blue-50/50 border-blue-100">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">In This Article:</h3>
                <nav className="space-y-2 text-sm">
                  <Link href="#why-matters" className="block hover:text-primary">
                    → Why Insurance Penetration Matters for India
                  </Link>
                  <Link href="#bima-trinity" className="block hover:text-primary">
                    → The Bima Trinity – Bima Sugam, Bima Vistar, Bima Vahaks
                  </Link>
                  <Link href="#gst-reforms" className="block hover:text-primary">
                    → GST Reforms Making Insurance Affordable
                  </Link>
                  <Link href="#law-changes" className="block hover:text-primary">
                    → Insurance Laws (Amendment) Act, 2025
                  </Link>
                  <Link href="#what-means" className="block hover:text-primary">
                    → What This Means for You as a Policyholder
                  </Link>
                </nav>
              </CardContent>
            </Card>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {/* Section 1 */}
              <section id="why-matters" className="mb-12">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  Why Insurance Penetration Matters for India
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Despite being one of the world's fastest-growing economies, India's insurance penetration remains
                  significantly low compared to global standards. As of 2024:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <p className="text-3xl font-bold text-primary mb-2">4.2%</p>
                      <p className="text-sm text-muted-foreground">Life Insurance Penetration</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <p className="text-3xl font-bold text-primary mb-2">1.2%</p>
                      <p className="text-sm text-muted-foreground">Health Insurance Penetration</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <p className="text-3xl font-bold text-primary mb-2">40%</p>
                      <p className="text-sm text-muted-foreground">Households Without Any Insurance</p>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mission 2047 aims to bridge this gap by ensuring that every household and enterprise in India has
                  adequate life, health, and property insurance coverage by the year 2047, when India celebrates its
                  100th year of independence.
                </p>
              </section>

              {/* Section 2 */}
              <section id="bima-trinity" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">The Bima Trinity – Three Pillars of Mission 2047</h2>

                <div className="space-y-6">
                  <Card className="border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                          <Shield className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">
                            1. Bima Sugam – One Platform for All Insurance Needs
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            Bima Sugam is India's unified digital platform that allows customers to:
                          </p>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                              <span>Compare and purchase insurance policies from all insurers in one place</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                              <span>Manage policy renewals, premium payments, and policy documents digitally</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                              <span>File and track insurance claims seamlessly across all policies</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                              <span>Access customer support and grievance redressal through a single interface</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                          <IndianRupee className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">2. Bima Vistar – Affordable Insurance for All</h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            Bima Vistar is a revolutionary bundled insurance product designed specifically for
                            economically vulnerable and lower-income segments:
                          </p>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                              <span>Combined life, health, and property coverage in one affordable package</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                              <span>Premiums as low as ₹1,000-₂,500 per year for comprehensive family coverage</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                              <span>Simplified underwriting with minimal documentation requirements</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                              <span>Available in multiple Indian languages for easy understanding</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                          <Users className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">3. Bima Vahaks – Women-Led Insurance Distribution</h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            Bima Vahaks are trained insurance facilitators, predominantly women from rural and
                            semi-urban areas, who:
                          </p>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                              <span>Provide insurance awareness and education in local communities</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                              <span>Help families understand and choose appropriate insurance coverage</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                              <span>Assist with policy purchases and claim filing in regional languages</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                              <span>Create employment opportunities for women while expanding insurance reach</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Section 3 */}
              <section id="gst-reforms" className="mb-12">
                <h2 className="text-3xl font-bold mb-4">GST Reforms Making Insurance Affordable</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In a major relief to policyholders, the Government of India and GST Council announced significant tax
                  reductions on insurance premiums in 2025:
                </p>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6">
                  <h3 className="font-bold text-lg mb-3 text-green-900">Zero GST on Essential Insurance Products</h3>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>
                        <strong>Term Life Insurance:</strong> 0% GST (previously 18%)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>
                        <strong>Health Insurance:</strong> 0% GST (previously 18%)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>
                        <strong>Critical Illness Riders:</strong> 0% GST (previously 18%)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>
                        <strong>Accidental Death Cover:</strong> 0% GST (previously 18%)
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Impact on Premiums:</strong> A typical ₹50 lakh term insurance policy that previously cost
                  ₹12,000 per year (including 18% GST) now costs approximately ₹10,170 – saving you ₹1,830 annually.
                </p>
              </section>

              {/* Section 4 */}
              <section id="law-changes" className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Insurance Laws (Amendment) Act, 2025 – What Changed</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Insurance Laws (Amendment) Act, 2025 introduced several policyholder-friendly reforms:
                </p>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">Faster Claim Settlement</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Insurers must now settle or reject claims within 30 days for health insurance and 60 days for
                        life insurance. Delays beyond this period attract automatic interest payments to the
                        policyholder.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">No Arbitrary Claim Rejections</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Insurers must provide detailed written explanations for any claim rejection, and policyholders
                        have strengthened rights to appeal decisions through IRDAI's grievance redressal mechanism.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">Simplified Policy Language</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        All insurance policies must now be written in plain, simple language that average consumers can
                        understand. Technical jargon must be explained in clear terms within the policy document itself.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">Portability Rights Enhanced</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Policyholders can now switch insurers more easily without losing accumulated benefits or facing
                        new waiting periods for pre-existing conditions (subject to certain conditions).
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Section 5 */}
              <section id="what-means" className="mb-12">
                <h2 className="text-3xl font-bold mb-4">What This Means for You as a Policyholder</h2>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-lg mb-4 text-blue-900">Practical Benefits You Can Expect:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 text-sm font-bold">
                        1
                      </div>
                      <p className="text-blue-900">
                        <strong>Lower Premiums:</strong> GST relief directly reduces your premium costs for term and
                        health insurance
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 text-sm font-bold">
                        2
                      </div>
                      <p className="text-blue-900">
                        <strong>Easier Comparison:</strong> Bima Sugam will let you compare all insurers on one platform
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 text-sm font-bold">
                        3
                      </div>
                      <p className="text-blue-900">
                        <strong>Faster Claims:</strong> Mandatory timelines ensure you get claim settlements without
                        unnecessary delays
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 text-sm font-bold">
                        4
                      </div>
                      <p className="text-blue-900">
                        <strong>Better Understanding:</strong> Simplified policy language helps you know exactly what
                        you're buying
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 text-sm font-bold">
                        5
                      </div>
                      <p className="text-blue-900">
                        <strong>Access to Affordable Options:</strong> Bima Vistar provides comprehensive coverage even
                        on limited budgets
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  While Mission 2047 is an ambitious long-term goal, many of its components are already being rolled
                  out. As consumers, we can expect the insurance industry to become more transparent, affordable, and
                  customer-friendly in the coming years.
                </p>
              </section>

              {/* CTA Section */}
              <Card className="bg-gradient-to-r from-primary to-blue-700 text-white mb-12">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-3">Ready to Find the Right Insurance for Your Family?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Get expert guidance on choosing the best insurance plans that fit your needs and budget
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <ExpertAdviceButton size="lg" variant="secondary">
                      Get Free Expert Consultation
                    </ExpertAdviceButton>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 bg-transparent"
                      asChild
                    >
                      <Link href="/compare">Compare Insurance Plans →</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Compliance Disclaimer */}
              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3 text-amber-900">Important Disclaimer</h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    This information is provided for public awareness and educational purposes only. This website does
                    not represent the Government of India, IRDAI, or any government authority. Insurance products are
                    subject to terms, conditions, and insurer-specific guidelines. Policy terms, GST rates, and
                    regulations are subject to change. Always verify current policy details with your insurance provider
                    before making any decisions. As per Government of India and GST Council notifications, subject to
                    policy terms.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Related Articles */}
            <section className="mt-16 pt-12 border-t">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Top 5 Things to Check Before Buying Health Insurance</h3>
                    <Button variant="link" className="px-0 mt-2" asChild>
                      <Link href="/blog/top-5-things-to-check-before-buying-health-insurance">Read more →</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">How Much Life Insurance Cover Do You Really Need?</h3>
                    <Button variant="link" className="px-0 mt-2" asChild>
                      <Link href="/blog/how-much-life-insurance-cover-do-you-really-need">Read more →</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">
                      Term Insurance vs. Whole Life: Which is Right for You?
                    </h3>
                    <Button variant="link" className="px-0 mt-2" asChild>
                      <Link href="/blog/term-vs-whole-life-insurance">Read more →</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Article Navigation */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleNavigation currentSlug="mission-2047-insurance-for-all" articles={articles} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="pt-8 text-center text-sm text-muted-foreground space-y-2">
            <p className="leading-relaxed">
              <strong>Disclaimer:</strong> Insurance is subject to terms and conditions. Information provided is for
              educational purposes only.
            </p>
            <p>© 2025 InsureWise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
