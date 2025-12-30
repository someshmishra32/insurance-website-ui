import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AllTestimonials } from "@/components/testimonials"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { Star, Users, TrendingUp, Heart } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Customer Testimonials & Reviews | InsureWise",
  description:
    "Read real reviews from thousands of happy customers who found the right insurance with InsureWise. See how we've helped people save money and get better coverage.",
  keywords: "insurance testimonials, customer reviews, InsureWise reviews, insurance success stories",
}

export default function TestimonialsPage() {
  const stats = [
    {
      icon: Users,
      number: "5000+",
      label: "Happy Customers",
    },
    {
      icon: Star,
      number: "4.8/5",
      label: "Average Rating",
    },
    {
      icon: TrendingUp,
      number: "₹50 Cr+",
      label: "Coverage Recommended",
    },
    {
      icon: Heart,
      number: "100%",
      label: "Satisfaction Guarantee",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Trusted by Thousands of Indians
            </h1>
            <p className="text-xl text-muted-foreground">
              See why people choose InsureWise for their insurance decisions
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 pt-12">
            <h2 className="text-3xl font-bold mb-4">Customer Stories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real people sharing their real experiences with InsureWise
            </p>
          </div>
        </div>
        <AllTestimonials />
      </section>

      {/* Why Choose InsureWise */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why People Choose InsureWise</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <span className="text-xl font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Expert Guidance</h3>
                    <p className="text-muted-foreground">
                      Our team has deep expertise in Indian insurance. Get personalized recommendations, not generic advice.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <span className="text-xl font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Transparent Comparisons</h3>
                    <p className="text-muted-foreground">
                      No hidden commission rates. We compare policies side-by-side so you see real differences in coverage and cost.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <span className="text-xl font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Time-Saving Tools</h3>
                    <p className="text-muted-foreground">
                      Our calculators, comparison tools, and policy health checks do the heavy lifting for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <span className="text-xl font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Educational Content</h3>
                    <p className="text-muted-foreground">
                      Detailed guides and blog articles help you understand insurance terminology and make informed decisions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <span className="text-xl font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Quick Support</h3>
                    <p className="text-muted-foreground">
                      Whether via WhatsApp, phone, or email, our team responds quickly to your questions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <span className="text-xl font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">100% Free Service</h3>
                    <p className="text-muted-foreground">
                      All our tools and expert advice are completely free. We help you get better coverage at best rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary to-blue-700 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Thousands of Happy Customers</h2>
            <p className="text-lg mb-8 opacity-90">
              Get expert guidance to find the perfect insurance coverage for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ExpertAdviceButton size="lg" variant="secondary">
                Get Free Consultation
              </ExpertAdviceButton>
              <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                <Link href="/compare">Compare Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
