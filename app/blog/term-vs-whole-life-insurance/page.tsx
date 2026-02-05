import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScheduleCallButton } from "@/components/schedule-call-button"
import { ArticleNavigation } from "@/components/article-navigation"
import { ArrowLeft, Clock, User, Tag, Shield, TrendingUp, AlertTriangle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/blog-data"

export const metadata = {
  title: "Term vs Whole Life Insurance: Which is Right for You? | InsureWise",
  description: "Understanding the key differences between term and whole life insurance policies to make an informed decision for your family's financial security.",
}

export default function BlogPost() {
  const articles = blogPosts.map(post => ({
    title: post.title,
    slug: post.slug,
    href: `/blog/${post.slug}`,
    image: post.image
  }))

  const currentPost = blogPosts.find(p => p.slug === "term-vs-whole-life-insurance")
  const postImage = currentPost?.image || "/placeholder.svg"

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-6">
              <Button variant="ghost" asChild>
                <Link href="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </div>

            {/* Article Header */}
            <header className="mb-8">
              <Badge className="mb-4">Term Insurance</Badge>
              <h1 className="text-4xl font-bold mb-4 text-balance">
                Term Insurance vs. Whole Life: Which is Right for You?
              </h1>

              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>InsureWise Team</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  <span>term insurance, whole life, comparison</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Understanding the key differences between term and whole life insurance policies to make the best choice for your family. We break down costs, benefits, and ideal scenarios.
              </p>

              {/* Hero Image */}
              <div className="relative w-full aspect-video mt-8 mb-8 rounded-xl overflow-hidden shadow-lg border">
                <Image
                  src={postImage}
                  alt="Term Insurance vs. Whole Life: Which is Right for You?"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2>What is Term Insurance?</h2>
                <p>
                  Term insurance is the simplest form of life insurance. You pay a fixed premium for a specific term (usually 10-30 years), and if you pass away during that term, your beneficiaries receive the death benefit. If you outlive the term, the policy expires and you get nothing back.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Key Features of Term Insurance:
                  </h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Pure protection - no investment component</li>
                    <li>• Lowest premiums for maximum coverage</li>
                    <li>• Fixed premiums throughout the term</li>
                    <li>• Simple and transparent</li>
                    <li>• Tax benefits under Section 80C</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2>What is Whole Life Insurance?</h2>
                <p>
                  Whole life insurance provides coverage for your entire lifetime, as long as you pay the premiums. It combines a death benefit with a cash value component that grows over time. You can borrow against this cash value or surrender the policy for its accumulated value.
                </p>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 my-6">
                  <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Key Features of Whole Life Insurance:
                  </h3>
                  <ul className="space-y-2 text-purple-800">
                    <li>• Lifetime coverage</li>
                    <li>• Cash value accumulation</li>
                    <li>• Higher premiums than term insurance</li>
                    <li>• Investment component</li>
                    <li>• Policy loans available</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2>Head-to-Head Comparison</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Term Insurance</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Whole Life Insurance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Coverage Period</td>
                        <td className="border border-gray-300 px-4 py-2">Fixed term (10-30 years)</td>
                        <td className="border border-gray-300 px-4 py-2">Lifetime</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Premium Cost</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">Low (70-80% cheaper)</td>
                        <td className="border border-gray-300 px-4 py-2 text-red-600 font-semibold">High</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Cash Value</td>
                        <td className="border border-gray-300 px-4 py-2">None</td>
                        <td className="border border-gray-300 px-4 py-2">Yes, grows over time</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Investment Returns</td>
                        <td className="border border-gray-300 px-4 py-2">None (pure protection)</td>
                        <td className="border border-gray-300 px-4 py-2">Low (4-6% typically)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Complexity</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600">Simple</td>
                        <td className="border border-gray-300 px-4 py-2 text-red-600">Complex</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2>Which One Should You Choose?</h2>
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Choose Term Insurance If:
                    </h3>
                    <ul className="space-y-2 text-green-800">
                      <li>• You want maximum coverage at minimum cost</li>
                      <li>• You have dependents who rely on your income</li>
                      <li>• You're comfortable investing separately for better returns</li>
                      <li>• You need coverage only until retirement</li>
                      <li>• You prefer simplicity and transparency</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Choose Whole Life Insurance If:
                    </h3>
                    <ul className="space-y-2 text-orange-800">
                      <li>• You need lifelong coverage (estate planning)</li>
                      <li>• You want forced savings discipline</li>
                      <li>• You prefer an all-in-one solution</li>
                      <li>• You don't want to manage separate investments</li>
                      <li>• Estate tax planning is important for you</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2>The Smart Money Approach</h2>
                <p>
                  For most people, the best strategy is "Buy Term and Invest the Rest." Here's why:
                </p>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 my-6">
                  <h3 className="font-semibold text-yellow-900 mb-3">Example Calculation:</h3>
                  <div className="space-y-3 text-yellow-800">
                    <p><strong>Scenario:</strong> 30-year-old male, ₹1 crore coverage</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Term Insurance Premium: ₹8,000 per year</li>
                      <li>• Whole Life Premium: ₹35,000 per year</li>
                      <li>• Savings: ₹27,000 per year</li>
                    </ul>
                    <p className="mt-3 font-semibold">If you invest the ₹27,000 savings annually at 10% returns:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• After 20 years: ₹15.4 lakhs</li>
                      <li>• After 30 years: ₹44.4 lakhs</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2>Final Recommendation</h2>
                <p>
                  For 95% of Indian families, <strong>term insurance is the better choice</strong>. It provides the protection you need at a fraction of the cost, leaving you with more money to invest for your other financial goals.
                </p>

                <p>
                  Only consider whole life insurance if you have specific needs like estate planning or if you absolutely cannot discipline yourself to invest separately.
                </p>
              </section>
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-semibold mb-4">Need Help Deciding?</h3>
              <p className="text-muted-foreground mb-6">
                Our insurance experts can help you choose the right policy based on your specific needs, budget, and financial goals.
              </p>
              <div className="flex gap-4">
                <WhatsAppButton />
                <ScheduleCallButton defaultInterest="Life Insurance Comparison" />
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/how-much-life-insurance-cover-do-you-really-need">
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-semibold mb-2">How Much Life Insurance Cover Do You Really Need?</h4>
                    <p className="text-sm text-muted-foreground">Use our proven calculation method to determine the exact coverage your family needs.</p>
                  </div>
                </Link>
                <Link href="/blog/critical-illness-riders">
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-semibold mb-2">Critical Illness Riders: Are They Worth It?</h4>
                    <p className="text-sm text-muted-foreground">Detailed analysis of critical illness riders and whether you need them.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Article Navigation */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleNavigation currentSlug="term-vs-whole-life-insurance" articles={articles} />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get Expert Guidance</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't leave your family's protection to chance. Talk to our experts and get personalized recommendations.
            </p>
            <div className="flex gap-4 justify-center">
              <WhatsAppButton size="lg" />
              <ScheduleCallButton size="lg" defaultInterest="Life Insurance Advice" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
