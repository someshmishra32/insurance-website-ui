import type { Metadata } from "next"
import { FileText, CheckCircle, AlertTriangle, Phone, Upload, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScheduleCallButton } from "@/components/schedule-call-button"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Claims Education | How to File Insurance Claims | InsureWise",
  description:
    "Step-by-step guide to filing life and health insurance claims. Learn about required documents, timelines, and common rejection reasons.",
}

export default function ClaimsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <FileText className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance">Claims Education Center</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Comprehensive guides to filing insurance claims successfully. Know your rights and avoid common mistakes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-12">
            {/* Life Insurance Claims */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Life Insurance Claims Process</h2>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Step-by-Step Guide
                  </CardTitle>
                  <CardDescription>How to file a term life insurance claim</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <Badge className="h-6 w-6 flex items-center justify-center shrink-0">1</Badge>
                    <div>
                      <h4 className="font-semibold">Intimate the Insurer Immediately</h4>
                      <p className="text-sm text-muted-foreground">
                        Contact insurance company within 24-48 hours of the event via helpline, email, or online portal
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Badge className="h-6 w-6 flex items-center justify-center shrink-0">2</Badge>
                    <div>
                      <h4 className="font-semibold">Collect Required Documents</h4>
                      <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                        <li>Death certificate (original)</li>
                        <li>Policy document</li>
                        <li>Claim form (duly filled)</li>
                        <li>ID proof of claimant</li>
                        <li>Medical records (if applicable)</li>
                        <li>Police FIR (for accidental death)</li>
                        <li>Post-mortem report (if required)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Badge className="h-6 w-6 flex items-center justify-center shrink-0">3</Badge>
                    <div>
                      <h4 className="font-semibold">Submit Claim</h4>
                      <p className="text-sm text-muted-foreground">
                        Submit all documents to nearest branch or via registered post/online portal. Keep acknowledgment
                        receipt
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Badge className="h-6 w-6 flex items-center justify-center shrink-0">4</Badge>
                    <div>
                      <h4 className="font-semibold">Investigation (if any)</h4>
                      <p className="text-sm text-muted-foreground">
                        Insurer may investigate for policies in first 3 years. Cooperate fully and provide additional
                        documents if requested
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Badge className="h-6 w-6 flex items-center justify-center shrink-0">5</Badge>
                    <div>
                      <h4 className="font-semibold">Claim Settlement</h4>
                      <p className="text-sm text-muted-foreground">
                        Settlement typically takes 30-90 days. Amount is paid via NEFT to nominee's account
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Health Insurance Claims */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Health Insurance Claims Process</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Cashless Claims</CardTitle>
                    <CardDescription>At network hospitals</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                      <span>Inform insurer before hospitalization (planned)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                      <span>Submit insurance card at hospital admission desk</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                      <span>Hospital sends pre-authorization request to insurer</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                      <span>After approval, hospital directly settles with insurer</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                      <span>You only pay non-covered expenses & co-pay (if any)</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Reimbursement Claims</CardTitle>
                    <CardDescription>At non-network hospitals</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Upload className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>Pay hospital bills directly</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Upload className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>Collect all original bills, discharge summary, prescriptions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Upload className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>Fill claim form and submit within 15-30 days</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Upload className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>Insurer reviews and processes claim (30-45 days)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Upload className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>Approved amount credited to your bank account</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Top 10 Rejection Reasons */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Top 10 Claim Rejection Reasons (& How to Avoid)</h2>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {[
                      {
                        reason: "Non-disclosure of pre-existing conditions",
                        solution: "Always declare all health conditions honestly at purchase",
                      },
                      {
                        reason: "Claim filed during waiting period",
                        solution: "Know your policy waiting periods (30 days initial, 2-4 years PED)",
                      },
                      {
                        reason: "Incomplete documentation",
                        solution: "Submit all original bills, reports, prescriptions, and discharge summary",
                      },
                      {
                        reason: "Treatment not covered under policy",
                        solution: "Check policy wordings for exclusions before treatment",
                      },
                      {
                        reason: "Policy lapsed due to non-payment",
                        solution: "Pay premiums on time, use auto-debit for renewals",
                      },
                      {
                        reason: "Incorrect information in claim form",
                        solution: "Fill claim form accurately, cross-verify all details",
                      },
                      {
                        reason: "Death due to suicide within 1 year",
                        solution: "Life insurance suicide exclusion applies for first year",
                      },
                      {
                        reason: "Alcohol/drug-related death",
                        solution: "Ensure lifestyle habits are disclosed; some policies exclude substance abuse deaths",
                      },
                      {
                        reason: "No police FIR for accidental death",
                        solution: "Always file police complaint for accidental deaths immediately",
                      },
                      {
                        reason: "Treatment at non-AYUSH hospital",
                        solution: "Verify hospital registration and policy coverage before admission",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex gap-3 pb-3 border-b last:border-0">
                        <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm">
                            {index + 1}. {item.reason}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            <strong>How to avoid:</strong> {item.solution}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6 text-center">
                <Phone className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold">Need Help with Claims?</h3>
                <p className="mb-4 text-muted-foreground">Our experts can assist you throughout the claim process</p>
                <ScheduleCallButton defaultInterest="Claims Assistance" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
