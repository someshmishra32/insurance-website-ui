import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Users, TrendingUp, CheckCircle2 } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { LeadCaptureForm } from "@/components/lead-capture-form"
import { ScheduleCallButton } from "@/components/schedule-call-button"
import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation - Updated navigation with intent-based labels */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Independent Insurance Advisor for Life & Health Insurance in India
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Helping individuals and families make informed insurance decisions with honest, unbiased advice since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Advisor Profile Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="shrink-0">
                    <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                      <Users className="w-24 h-24 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">Your Independent Insurance Advisor</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      With over 10 years of experience in the insurance industry, I help individuals and families
                      navigate the complex world of insurance. Unlike traditional agents tied to a single company, I
                      work independently to provide unbiased advice across 20+ insurance providers.
                    </p>
                    <p className="text-foreground font-semibold mb-4 leading-relaxed text-lg">
                      I do not sell a single company's policy. I compare plans from multiple insurers and recommend what
                      fits your needs — not commissions.
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      My approach is simple: understand your unique needs, explain your options in clear language, and
                      help you choose the right coverage without pushy sales tactics. Your financial security and peace
                      of mind are my top priorities.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">IRDA Certified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">500+ Families Advised</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">10+ Years Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Independent Advisory */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Expert Insurance Advice Matters</h2>
              <p className="text-muted-foreground leading-relaxed">
                The independent advisory advantage – what makes us different
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-xl mb-3">No Bias, Just Facts</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Unlike tied agents who can only sell their company's products, I compare policies across multiple
                    insurers to find what truly works best for you. Your interests always come first.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-xl mb-3">Your Advocate, Not a Salesperson</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I represent your interests, not the insurance company's. My job is to ensure you get the right
                    coverage at the best price, with no hidden agendas or pushy tactics.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Award className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-xl mb-3">100% Transparent Process</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Clear explanations of policy terms, no hidden clauses, and honest answers to all your questions.
                    You'll understand exactly what you're buying and why it's right for you.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <TrendingUp className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-xl mb-3">Lifelong Support Partnership</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Support doesn't end after purchase. I'm here for policy reviews, claim assistance, renewals, and any
                    insurance questions throughout your journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What You Get with Expert Advisory</h2>
            <Card className="bg-gradient-to-br from-blue-50 to-green-50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Personalized policy recommendations based on your needs",
                    "Side-by-side comparison of 20+ insurers",
                    "Clear explanation of terms, exclusions, and benefits",
                    "Help with medical underwriting and documentation",
                    "Claim filing assistance when you need it most",
                    "Annual policy review and coverage optimization",
                    "Honest advice – if you don't need insurance, I'll tell you",
                    "Lifelong support for all your insurance questions",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclosure Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-blue-50 border-primary/20">
              <CardContent className="p-8">
                <h3 className="font-semibold text-xl mb-3">Professional Disclosure & Transparency</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am an independent insurance advisor associated with a licensed insurance broker registered with the
                  Insurance Regulatory and Development Authority of India (IRDAI). This partnership allows me to offer
                  products from multiple insurance companies while maintaining complete independence in my
                  recommendations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  All advice provided is based solely on your specific needs and circumstances, with absolutely no bias
                  toward any particular insurance provider. My compensation is fully transparent and does not influence
                  the recommendations I provide to you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Updated CTA copy */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Get Honest Insurance Guidance?
            </h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Schedule a free consultation to discuss your insurance needs. No obligation, no pressure, just expert
              advice you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <WhatsAppButton variant="secondary" size="lg" />
              <ScheduleCallButton size="lg" variant="secondary" />
            </div>
            <LeadCaptureForm />
          </div>
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
