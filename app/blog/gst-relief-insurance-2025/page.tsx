import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { ArticleNavigation } from "@/components/article-navigation"
import { IndianRupee, CheckCircle2, Calculator } from "lucide-react"

export const metadata = {
  title: "0% GST on Term & Health Insurance (2025 Update) – How Much You Save | InsureWise",
  description:
    "Complete guide to GST relief on insurance premiums in 2025. Understand how 0% GST on term life insurance, health insurance, and riders reduces your premium costs.",
  keywords:
    "GST on insurance 2025, zero GST insurance, term insurance GST relief, health insurance tax benefits, insurance premium savings",
}

export default function GSTReliefBlogPost() {
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

      {/* Article */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <IndianRupee className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-600">Tax Relief Update</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Insurance Made More Affordable: 0% GST Relief Explained
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              How the 2025 GST reforms reduce your insurance premiums and what it means for your wallet
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
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
                      <strong>Critical Illness & Accidental Riders:</strong> 0% GST (previously 18%)
                    </span>
                  </li>
                </ul>
              </div>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <Calculator className="w-8 h-8 text-primary" />
                  How Much Will You Save?
                </h2>

                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Example 1: Term Insurance</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <p className="text-sm text-red-800 font-medium mb-2">Before GST Relief (2024)</p>
                        <p className="text-muted-foreground text-sm mb-1">Base Premium: ₹10,170</p>
                        <p className="text-muted-foreground text-sm mb-1">GST @ 18%: ₹1,830</p>
                        <p className="text-2xl font-bold text-red-900 mt-2">Total: ₹12,000</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="text-sm text-green-800 font-medium mb-2">After GST Relief (2025)</p>
                        <p className="text-muted-foreground text-sm mb-1">Base Premium: ₹10,170</p>
                        <p className="text-muted-foreground text-sm mb-1">GST @ 0%: ₹0</p>
                        <p className="text-2xl font-bold text-green-900 mt-2">Total: ₹10,170</p>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-primary/10 rounded-lg text-center">
                      <p className="font-bold text-lg text-primary">Annual Savings: ₹1,830</p>
                      <p className="text-sm text-muted-foreground">Over 20 years: ₹36,600 saved!</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Example 2: Family Health Insurance</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <p className="text-sm text-red-800 font-medium mb-2">Before GST Relief (2024)</p>
                        <p className="text-muted-foreground text-sm mb-1">Base Premium: ₹25,424</p>
                        <p className="text-muted-foreground text-sm mb-1">GST @ 18%: ₹4,576</p>
                        <p className="text-2xl font-bold text-red-900 mt-2">Total: ₹30,000</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="text-sm text-green-800 font-medium mb-2">After GST Relief (2025)</p>
                        <p className="text-muted-foreground text-sm mb-1">Base Premium: ₹25,424</p>
                        <p className="text-muted-foreground text-sm mb-1">GST @ 0%: ₹0</p>
                        <p className="text-2xl font-bold text-green-900 mt-2">Total: ₹25,424</p>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-primary/10 rounded-lg text-center">
                      <p className="font-bold text-lg text-primary">Annual Savings: ₹4,576</p>
                      <p className="text-sm text-muted-foreground">Significant relief for family health coverage!</p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <Card className="bg-gradient-to-r from-primary to-blue-700 text-white mb-12">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-3">Ready to Get Affordable Insurance Coverage?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Compare policies and find the best rates with our expert guidance
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
                      <Link href="/compare">Compare Plans →</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3 text-amber-900">Disclaimer</h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    As per Government of India and GST Council notifications. Subject to policy terms and conditions.
                    GST rates and regulations are subject to change. Always verify current premium amounts with your
                    insurance provider.
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
          <ArticleNavigation currentSlug="gst-relief-insurance-2025" articles={articles} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 InsureWise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
