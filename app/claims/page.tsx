import type { Metadata } from "next"
import { FileText, CheckCircle, AlertTriangle, Phone, Upload, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { ScheduleCallButton } from "@/components/schedule-call-button"

export const metadata: Metadata = {
  title: "Claims Education | How to File Insurance Claims | InsureWise",
  description:
    "Step-by-step guide to filing life and health insurance claims. Learn about required documents, timelines, and common rejection reasons.",
}

export default function ClaimsPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl mb-6 shadow-sm">
                <FileText className="h-10 w-10 text-primary" />
              </div>
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
                Claims <span className="text-primary">Education Center</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed max-w-xl">
                Comprehensive guides to filing insurance claims successfully. Know your rights, avoid common pitfalls, and ensure a smooth settlement process.
              </p>
              <div className="flex flex-wrap gap-4">
                <ExpertAdviceButton size="lg" />
                <WhatsAppButton size="lg" variant="outline" />
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-1000">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/claims_support_hero.png"
                  alt="Claims Support Hero"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-12">
            {/* Life Insurance Claims */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                    {[
                      { step: 1, title: "Intimate the Insurer Immediately", desc: "Contact insurance company within 24-48 hours" },
                      { step: 2, title: "Collect Required Documents", desc: "Death certificate, Policy document, Claim form, ID proof" },
                      { step: 3, title: "Submit Claim", desc: "Submit all documents and keep acknowledgment receipt" },
                      { step: 4, title: "Investigation (if any)", desc: "Insurer may investigate for policies in first 3 years" },
                      { step: 5, title: "Claim Settlement", desc: "Amount is paid via NEFT to nominee's account" }
                    ].map((item) => (
                      <div key={item.step} className="flex gap-3">
                        <Badge className="h-6 w-6 flex items-center justify-center shrink-0">{item.step}</Badge>
                        <div>
                          <h4 className="font-semibold text-sm">{item.title}</h4>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/claims_process_flow.png"
                  alt="Claims Process Flowchart"
                  className="w-full h-auto"
                />
              </div>
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
                <ScheduleCallButton variant="outline" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
