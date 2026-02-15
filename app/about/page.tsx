import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Users, TrendingUp, CheckCircle2 } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { LeadCaptureForm } from "@/components/lead-capture-form"
import { ScheduleCallButton } from "@/components/schedule-call-button"

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-in fade-in slide-in-from-left duration-700">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                Independent Insurance Advisor for <span className="text-primary">Life & Health Insurance</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Helping individuals and families make informed insurance decisions with honest, unbiased advice and expert guidance. Join 500+ families who trust us for their financial security.
              </p>
              <div className="flex flex-wrap gap-4">
                <ScheduleCallButton size="lg" />
                <WhatsAppButton size="lg" variant="outline" />
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-1000">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/about_advisory_hero.png"
                  alt="Professional Insurance Advisory"
                  className="w-full h-auto"
                />
              </div>
              {/* Subtle decorative elements */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10" />
            </div>
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
                    <div className="w-full md:w-64 lg:w-72 aspect-[4/5] relative overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-slate-50">
                      <img
                        src="/images/advisor_profile.png"
                        alt="Somesh Mishra - Independent Insurance Advisor"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-2 text-primary">Somesh Mishra</h2>
                    <p className="text-xl font-semibold mb-4">Your Independent Insurance Advisor</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
                      With over 6 years of experience in the insurance industry, I help individuals and families
                      navigate the complex world of insurance. I spent 3+ years with Policybazaar and the rest of my career working with other top insurance companies in India, which allows me to provide truly unbiased advice across 20+ insurance providers.
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
                        <span className="text-sm font-medium">6+ Years Experience</span>
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
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission & Commitment</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We are on a mission to bring transparency and trust back to the insurance industry. Our commitment is to ensure that every family in India has access to the right financial protection through unbiased advice and expert guidance.
                </p>
                <Card className="bg-gradient-to-br from-blue-50 to-green-50">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        "Personalized policy recommendations",
                        "Side-by-side comparison of 20+ insurers",
                        "Clear explanation of terms",
                        "Help with documentation",
                        "Claim filing assistance",
                        "Annual policy review",
                        "Honest advice – no sales pressure",
                        "Lifelong support",
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/team_mission.png"
                  alt="Our Team Mission"
                  className="w-full h-auto"
                />
              </div>
            </div>
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
            <p>© 2025 Life Cover Now. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
