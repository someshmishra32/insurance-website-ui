import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { LeadCaptureForm } from "@/components/lead-capture-form"
import { ScheduleCallButton } from "@/components/schedule-call-button"
import { ChevronRight, Shield, TrendingUp, Users, CheckCircle, Star, HelpCircle, IndianRupee, UserCheck, Building, FileCheck, HeartPulse, Landmark, HandHeart, UserRoundCog } from "lucide-react"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Main Content */}
      <main id="main-content">
      {/* GST Relief Banner */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-y border-green-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                <IndianRupee className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-green-900">Insurance Made More Affordable (GST Update – 2025)</h3>
                <p className="text-sm text-green-700">
                  <span className="font-medium">0% GST</span> on Term Life Insurance, Health Insurance & Critical
                  Illness Riders
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="shrink-0 bg-white" asChild>
              <Link href="/blog/gst-relief-insurance-2025">Learn More →</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mission 2047 Hero Banner Image */}
      <section className="bg-gradient-to-b from-blue-50/30 to-background">
        <div className="container mx-auto px-4 py-8">
          <Link href="/blog/mission-2047-insurance-for-all" className="block group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/images/mission2047insurance-20forall.png"
                alt="Mission 2047 - Insurance for All: Government of India initiative for Universal Coverage (Life, Health, Property) with Bima Trinity (Bima Sugam, Bima Vistar, Bima Vahaks) and 0% GST on Term Insurance, Health Insurance and Riders"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4 italic">
              Click to learn more about India's Mission 2047 and how it makes insurance more accessible and affordable
            </p>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Message */}
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                  Independent & Unbiased Advice
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                  Buy the Right Insurance with <span className="text-primary">Expert Guidance</span> — Not Sales
                  Pressure.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                  Compare life and health insurance plans from top insurers with clear explanations, honest comparisons,
                  and expert support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <ExpertAdviceButton size="lg">Get Free Expert Guidance</ExpertAdviceButton>
                  <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
                    <Link href="/compare">Compare Insurance Plans →</Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground italic">No spam. No pressure. Honest advice.</p>
              </div>

              {/* Right: Lead Capture Form */}
              <div className="lg:block hidden">
                <LeadCaptureForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Independent Insurance Advice?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <strong>I do not sell a single company's policy.</strong> I compare plans from multiple insurers and
              recommend what fits your needs — not commissions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: UserCheck,
                title: "Independent Advisor",
                description: "No bias towards any single insurer. Your interests come first.",
              },
              {
                icon: Building,
                title: "Multiple Insurance Companies",
                description: "Access to 20+ top insurers for comprehensive comparison.",
              },
              {
                icon: FileCheck,
                title: "Transparent Policy Comparison",
                description: "Clear breakdowns of premiums, coverage, and benefits.",
              },
              {
                icon: HeartPulse,
                title: "Claim Process Explained Clearly",
                description: "Understand exactly how and when to file claims successfully.",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission 2047 Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Landmark className="w-4 h-4" />
                Government of India Initiative
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Mission 2047: Insurance for All Indians
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                India aims to ensure every household and enterprise has life, health, and property insurance by 2047.
                This IRDAI-led initiative focuses on <strong>affordability, transparency, and faster claims</strong>.
              </p>
            </div>

            {/* Bima Trinity Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-blue-200 bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Bima Sugam</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    One digital platform for buying, servicing, and filing claims across all insurers
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    <IndianRupee className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Bima Vistar</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Low-cost bundled life, health, and property coverage designed for every Indian
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                    <HandHeart className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Bima Vahaks</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Women-led grassroots insurance facilitators bringing insurance to rural India
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="outline" asChild className="bg-transparent">
                <Link href="/blog/mission-2047-insurance-for-all">
                  Learn how this mission impacts your insurance choices →
                </Link>
              </Button>
            </div>

            {/* Compliance Disclaimer */}
            <div className="mt-8 p-4 bg-muted/50 rounded-lg border">
              <p className="text-xs text-muted-foreground leading-relaxed text-center">
                <strong>Disclaimer:</strong> This information is provided for public awareness and educational purposes
                only. This website does not represent the Government of India or IRDAI. Insurance products are subject
                to terms, conditions, and insurer guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compare Life and Health Insurance Plans from Top Insurers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Expert guidance across all major insurance categories to protect what matters most
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Term Insurance",
                description: "Affordable life coverage to protect your family's financial future",
                color: "bg-blue-50 text-blue-600",
                href: "/compare?tab=term",
              },
              {
                icon: HeartPulse,
                title: "Health Insurance",
                description: "Comprehensive medical coverage for hospitalization and treatments",
                color: "bg-green-50 text-green-600",
                href: "/compare?tab=health",
              },
              {
                icon: Users,
                title: "Family Floater",
                description: "Single policy covering your entire family with shared sum insured",
                color: "bg-purple-50 text-purple-600",
                href: "/learn#health-insurance",
              },
              {
                icon: UserRoundCog,
                title: "Senior Citizen Insurance",
                description: "Specialized health plans for parents and elderly family members",
                color: "bg-orange-50 text-orange-600",
                href: "/learn#health-insurance",
              },
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                  <Button variant="link" className="mt-4 px-0" asChild>
                    <Link href={category.href}>
                      Learn more →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Expert Advice Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Expert Insurance Advice Matters</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">Avoid Common Mistakes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many people buy inadequate coverage or overpay for features they don't need. An independent advisor
                    helps you avoid costly mistakes and find the right fit.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">Save Time & Money</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Instead of researching dozens of policies, get personalized recommendations based on your specific
                    needs, age, health, and budget.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">Understand Fine Print</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Insurance policies have complex terms and exclusions. We explain everything in simple language so
                    you know exactly what you're buying.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">Claim Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Get guidance during claim filing when you need it most. We help ensure your claims are processed
                    smoothly and fairly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Insurance Guides, Comparisons & Buying Tips</h2>
              <p className="text-muted-foreground">Expert insights to help you make informed decisions</p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex bg-transparent">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Term Insurance vs. Whole Life: Which is Right for You?",
                excerpt:
                  "Understanding the key differences between term and whole life insurance policies to make the best choice for your family.",
                category: "Life Insurance",
                readTime: "5 min read",
                href: "/blog/term-vs-whole-life-insurance",
              },
              {
                title: "Top 5 Things to Check Before Buying Health Insurance",
                excerpt:
                  "Essential checklist to ensure you get comprehensive coverage without overpaying for unnecessary features.",
                category: "Health Insurance",
                readTime: "7 min read",
                href: "/blog/top-5-things-to-check-before-buying-health-insurance",
              },
              {
                title: "How to File Insurance Claims Successfully: A Step-by-Step Guide",
                excerpt:
                  "Navigate the claim process with confidence. Learn the documents needed and common mistakes to avoid.",
                category: "Claim Process",
                readTime: "6 min read",
                href: "/claims",
              },
            ].map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <Button variant="link" className="px-0" asChild>
                    <Link href={post.href}>
                      Read more →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Real stories from real people who found the right insurance with our help
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "InsureWise helped me choose the right term insurance plan. Their expert explained everything clearly and I got 50% more coverage at the same premium I was paying elsewhere."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">RK</span>
                    </div>
                    <div>
                      <p className="font-semibold">Rahul Kumar</p>
                      <p className="text-sm text-muted-foreground">Software Engineer, Bangalore</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "The health insurance comparison was eye-opening. I didn't know about room rent limits and co-payment clauses. Now I have comprehensive coverage for my family."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">SP</span>
                    </div>
                    <div>
                      <p className="font-semibold">Priya Sharma</p>
                      <p className="text-sm text-muted-foreground">Teacher, Mumbai</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "As a senior citizen, I was worried about getting health insurance. InsureWise found me a plan with no waiting period for pre-existing conditions. Excellent service!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">RG</span>
                    </div>
                    <div>
                      <p className="font-semibold">Ramesh Gupta</p>
                      <p className="text-sm text-muted-foreground">Retired, Delhi</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 4 */}
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "The claim assistance was invaluable when my father was hospitalized. They guided us through the entire process and the claim was settled within 3 days."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">AP</span>
                    </div>
                    <div>
                      <p className="font-semibold">Anita Patel</p>
                      <p className="text-sm text-muted-foreground">Homemaker, Ahmedabad</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 5 */}
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "I compared family floater vs individual policies with their help. The analysis was thorough and I saved ₹15,000 annually while getting better coverage."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">VK</span>
                    </div>
                    <div>
                      <p className="font-semibold">Vikram Reddy</p>
                      <p className="text-sm text-muted-foreground">Business Owner, Hyderabad</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 6 */}
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "The critical illness rider analysis was exactly what I needed. They explained the claim statistics and helped me decide based on my family medical history."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">SN</span>
                    </div>
                    <div>
                      <p className="font-semibold">Sunita Nair</p>
                      <p className="text-sm text-muted-foreground">Doctor, Chennai</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Claim Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Insurance Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <HelpCircle className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get answers to common questions about insurance, policies, and our services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {/* Term Insurance Questions */}
              <AccordionItem value="term-insurance-1" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold">
                  What is the difference between term insurance and whole life insurance?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-3">
                    Term insurance provides pure protection for a specific period (10-30 years) at low premiums. 
                    If you pass away during the term, your beneficiaries get the death benefit. Whole life insurance 
                    provides lifelong coverage with an investment component but costs 5-10 times more.
                  </p>
                  <p>
                    <strong>Recommendation:</strong> For most people, term insurance is better - buy term and invest the rest separately for higher returns.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="term-insurance-2" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold">
                  How much life insurance coverage do I need?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-3">
                    Calculate your coverage as: 10-15 times your annual income + all outstanding debts + children's education 
                    expenses + marriage expenses - existing savings/investments.
                  </p>
                  <p>
                    <strong>Example:</strong> If you earn ₹15 lakh/year, have ₹20 lakh debt, and need ₹30 lakh for children's education, 
                    you should aim for ₹1.5-2 crore coverage.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Health Insurance Questions */}
              <AccordionItem value="health-insurance-1" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold">
                  What should I check before buying health insurance?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Key factors to check:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Waiting period for pre-existing diseases (usually 2-4 years)</li>
                      <li>Room rent limits and sub-limits on treatments</li>
                      <li>Co-payment clauses and deductible amounts</li>
                      <li>Network hospitals in your area</li>
                      <li>Claim settlement ratio of the insurer</li>
                      <li>Exclusions and limitations</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="health-insurance-2" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold">
                  Is family floater better than individual health policies?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-3">
                    It depends on your family structure and age differences.
                  </p>
                  <div className="space-y-3">
                    <p><strong>Family floater is better when:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>You're young (under 40) with young children</li>
                      <li>Want to save on premiums (shared sum insured)</li>
                      <li>Family members are generally healthy</li>
                    </ul>
                    <p><strong>Individual policies are better when:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Family members have significant age differences</li>
                      <li>Members have pre-existing conditions</li>
                      <li>Want personalized coverage for each member</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Claims Questions */}
              <AccordionItem value="claims-1" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold">
                  How do I file an insurance claim successfully?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Steps for successful claim:</strong></p>
                    <ol className="list-decimal list-inside space-y-1 ml-4">
                      <li>Inform insurer immediately after hospitalization/admission</li>
                      <li>Fill claim form accurately and completely</li>
                      <li>Submit all required documents (bills, reports, prescriptions)</li>
                      <li>Keep originals and submit photocopies unless originals are required</li>
                      <li>Follow up regularly with the insurer</li>
                      <li>Maintain records of all communication</li>
                    </ol>
                    <p><strong>Common mistakes to avoid:</strong> Non-disclosure of pre-existing conditions, incomplete documentation, delayed filing.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="claims-2" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold">
                  Why do insurance claims get rejected?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Top reasons for claim rejection:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Non-disclosure of pre-existing diseases (40% of rejections)</li>
                      <li>Lapsed policy due to non-payment of premium</li>
                      <li>Claim filed during waiting period</li>
                      <li>Treatment not covered under policy exclusions</li>
                      <li>Incomplete or incorrect documentation</li>
                      <li>Delay in claim filing beyond time limit</li>
                      <li>Fraudulent claims or misrepresentation</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Service Questions */}
              <AccordionItem value="service-1" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold">
                  How does InsureWise help me choose the right insurance?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-3">
                    We provide unbiased, expert guidance to help you make informed decisions:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Free consultation with insurance experts</li>
                    <li>Comparison of 15+ insurance companies</li>
                    <li>Personalized recommendations based on your needs</li>
                    <li>Help with policy selection and documentation</li>
                    <li>Claims assistance when needed</li>
                    <li>No commission from insurers - completely independent</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="service-2" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold">
                  Is your service really free? How do you make money?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-3">
                    Yes, our consultation is completely free for customers. We earn through:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Educational content and partnerships</li>
                    <li>Optional premium services (advanced analysis, portfolio reviews)</li>
                    <li>Commission from insurance companies (but we remain unbiased)</li>
                  </ul>
                  <p>
                    Our goal is to help you make the right decision, not sell you a specific policy.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Still have questions */}
            <div className="mt-12 text-center p-8 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-semibold mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our experts are here to help.
              </p>
              <div className="flex gap-4 justify-center">
                <WhatsAppButton variant="default" />
                <ScheduleCallButton variant="outline" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="get-guidance" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Get Personalized Insurance Recommendations
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              Get expert recommendations tailored to your needs. No obligation, completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <WhatsAppButton variant="secondary" size="lg" />
              <ScheduleCallButton size="lg" variant="secondary" />
            </div>
            <div className="lg:hidden">
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">InsureWise</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Independent insurance advisory helping you make informed decisions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Insurance Types</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Term Insurance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Health Insurance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Family Floater
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Senior Citizen Plans
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Learning Hub
                  </Link>
                </li>
                <li>
                  <Link href="/compare" className="text-muted-foreground hover:text-primary transition-colors">
                    Compare Plans
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: contact@insurewise.in</li>
                <li>Phone: +91 98765 43210</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground space-y-2">
            <p className="leading-relaxed">
              <strong>Disclaimer:</strong> Insurance is subject to terms and conditions. Information provided is for
              educational purposes only. We are associated with a licensed insurance broker.
            </p>
            <p>© 2025 InsureWise. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </main>
    </div>
  )
}
