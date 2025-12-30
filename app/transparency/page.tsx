import type { Metadata } from "next"
import { Shield, DollarSign, Award, Users, CheckCircle, AlertCircle, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScheduleCallButton } from "@/components/schedule-call-button"
import Navigation from "@/components/navigation" // Import the Navigation component

export const metadata: Metadata = {
  title: "Trust & Transparency | How We Work & Earn | InsureWise",
  description:
    "Complete transparency on how we earn commissions, why independence matters, and our commitments to clients. No hidden agendas.",
}

export default function TransparencyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation /> {/* Replaced hardcoded navigation with shared Navigation component */}
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Shield className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance">Trust & Transparency</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              How we earn, why we're independent, and our commitments to you. No hidden agendas, just honest advice.
            </p>
          </div>
        </div>
      </section>
      {/* How We Earn Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">How We Earn & Why It Matters</h2>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Commission Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed">
                  We earn through <strong>commissions paid by insurance companies</strong> when you purchase a policy.
                  This is standard practice in the insurance industry and is regulated by IRDAI (Insurance Regulatory
                  and Development Authority of India).
                </p>
                <div className="rounded-lg border bg-background p-4">
                  <p className="mb-2 font-semibold text-primary">Important Facts:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>
                        <strong>Zero extra cost to you:</strong> Commission is included in the premium you pay,
                        regardless of whether you buy directly or through an advisor
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>
                        <strong>Same premium:</strong> You pay the same amount whether you buy online, from an agent, or
                        through us
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>
                        <strong>IRDAI regulated:</strong> Commission rates are capped and standardized by the insurance
                        regulator
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Why Independence Matters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed">
                  Unlike traditional insurance agents who represent a single company, we are{" "}
                  <strong>independent advisors</strong> who work with multiple insurers.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h4 className="mb-2 flex items-center gap-2 font-semibold text-red-600">
                      {/* <XCircle className="h-4 w-4" /> */}
                      Single-Company Agents
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Limited to one insurer's products</li>
                      <li>• May push unsuitable plans</li>
                      <li>• Cannot compare across companies</li>
                      <li>• Biased toward higher commission products</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-green-200 bg-green-50/50 p-4">
                    <h4 className="mb-2 flex items-center gap-2 font-semibold text-green-700">
                      {/* <CheckCircle className="h-4 w-4" /> */}
                      Independent Advisors (Us)
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Access to 20+ insurance companies</li>
                      <li>• Unbiased recommendations</li>
                      <li>• Best-fit solutions for your needs</li>
                      <li>• Transparent comparison across insurers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Our Commitments */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Commitments to You</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <Users className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Client-First Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We prioritize your long-term financial security over short-term commissions. If you don't need
                    insurance, we'll tell you honestly.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>No Mis-selling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We never push ULIPs or investment plans when you need pure term insurance. We recommend based on
                    your needs, not our earnings.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Full Disclosure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We clearly explain policy features, exclusions, limitations, and claim settlement processes before
                    you buy.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Award className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Lifetime Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We don't disappear after the sale. We help with renewals, claim assistance, and policy reviews
                    throughout your policy term.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Why Multiple Insurers */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Why We Work with Multiple Insurers</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1">1</Badge>
                    <div>
                      <h4 className="font-semibold">Better Options for You</h4>
                      <p className="text-sm text-muted-foreground">
                        Different insurers excel in different areas. HDFC Life may have the best term plan, while Star
                        Health excels in health insurance. We find the best fit.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1">2</Badge>
                    <div>
                      <h4 className="font-semibold">Price Competition</h4>
                      <p className="text-sm text-muted-foreground">
                        By comparing 20+ insurers, we can often find similar coverage at 20-30% lower premiums.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1">3</Badge>
                    <div>
                      <h4 className="font-semibold">Claim Settlement Track Record</h4>
                      <p className="text-sm text-muted-foreground">
                        We track claim settlement ratios and recommend insurers with better claim approval rates (95%+
                        CSR).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1">4</Badge>
                    <div>
                      <h4 className="font-semibold">Specialized Products</h4>
                      <p className="text-sm text-muted-foreground">
                        Senior citizen plans, diabetic-friendly health insurance, and other specialized needs require
                        access to multiple insurers.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Regulatory Compliance */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="border-amber-200 bg-amber-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                  Regulatory Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-amber-900">
                  We are associated with IRDAI-licensed insurance brokers and comply with all regulatory requirements.
                  All our recommendations are documented and complaint with IRDAI guidelines.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <ExternalLink className="h-4 w-4 text-amber-700" />
                  <a
                    href="https://www.irdai.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-amber-700 hover:underline"
                  >
                    Learn more about IRDAI regulations
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold">Still Have Questions?</h2>
            <p className="mb-6 text-muted-foreground">
              We're happy to explain our process in detail. Schedule a no-obligation consultation.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <ScheduleCallButton defaultInterest="Transparency & Trust Questions" />
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-muted/30 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 InsureWise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function XCircle({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  )
}
