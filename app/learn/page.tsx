import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { ArrowRight, Shield, Heart, Building2, Users } from "lucide-react"

export const metadata = {
  title: "Learn Insurance - Complete Guide to Life & Health Insurance | InsureWise",
  description:
    "Understand term insurance, savings plans, health insurance, corporate insurance & keyman insurance. Expert guidance on choosing the right insurance coverage for your needs.",
}

export default function LearnInsurancePage() {
  const insuranceTypes = [
    {
      id: "term-vs-savings",
      icon: Shield,
      title: "Term Plan vs Saving Plan",
      shortDesc: "Understand the fundamental difference between pure protection and investment-linked insurance",
      color: "blue",
    },
    {
      id: "health-insurance",
      icon: Heart,
      title: "Health Insurance Explained",
      shortDesc: "Complete guide to medical coverage, family floater, critical illness and more",
      color: "green",
    },
    {
      id: "keyman-insurance",
      icon: Users,
      title: "KeyMan Insurance",
      shortDesc: "Protect your business from financial loss due to key employee death or disability",
      color: "purple",
    },
    {
      id: "corporate-insurance",
      icon: Building2,
      title: "Corporate Insurance",
      shortDesc: "Group health, life, and liability insurance solutions for businesses",
      color: "orange",
    },
  ]


  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-in fade-in slide-in-from-left duration-700">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                Insurance Made Simple: <span className="text-primary">Learn What You Actually Need</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                No jargon, no sales pitch. Just honest explanations to help you understand different types of insurance
                and make informed decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <WhatsAppButton size="lg" />
                <ExpertAdviceButton size="lg" variant="outline" />
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-1000">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/insurance _made_simple.png"
                  alt="Insurance Made Simple Illustration"
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

      {/* Quick Navigation Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {insuranceTypes.map((type) => {
              const Icon = type.icon
              return (
                <Card
                  key={type.id}
                  className="hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-primary"
                >
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-${type.color}-100 flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 text-${type.color}-600`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{type.shortDesc}</p>
                    <Button variant="link" className="px-0 group-hover:gap-2 transition-all" asChild>
                      <a href={`#${type.id}`}>
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Term vs Savings Plans Section */}
      <section id="term-vs-savings" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4">Life Insurance Basics</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Term Plan vs Saving Plan: What's the Difference?</h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  This is one of the most confusing decisions in insurance. Let's break it down in simple terms so you can
                  choose what's right for your family.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/term_vs_savings.png.png"
                  alt="Term Insurance vs Savings Plan Comparison"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Term Insurance Card */}
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Term Insurance (Pure Protection)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900 mb-2">What It Is:</p>
                    <p className="text-sm text-blue-800">
                      Pure life cover with no investment component. Your family gets a lump sum if you die during the
                      policy term.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Advantages:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>
                          <strong>Very Low Premium:</strong> ₹8,000-12,000/year for ₹1 crore cover
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>
                          <strong>Maximum Protection:</strong> Get 10-15x more coverage for same premium
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>
                          <strong>Simple & Transparent:</strong> No complex calculations or hidden charges
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>
                          <strong>Tax Benefits:</strong> Premium deduction under Section 80C
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Disadvantages:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 font-bold">✗</span>
                        <span>
                          <strong>No Maturity Benefit:</strong> If you survive the term, you get nothing back
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 font-bold">✗</span>
                        <span>
                          <strong>No Investment Returns:</strong> Purely for protection, not wealth creation
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-sm font-semibold text-green-900 mb-1">Best For:</p>
                    <p className="text-sm text-green-800">
                      Young families who need maximum protection at lowest cost. Ideal if you have home loans,
                      dependents, or limited income.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Savings Plans Card */}
              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-purple-600" />
                    Savings/Endowment Plans
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-purple-900 mb-2">What It Is:</p>
                    <p className="text-sm text-purple-800">
                      Combines life insurance with savings. Part of premium goes to insurance, part to investment. You
                      get money back at maturity.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Advantages:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>
                          <strong>Maturity Benefit:</strong> Get guaranteed returns even if you survive
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>
                          <strong>Forced Savings:</strong> Disciplined way to save for long term goals
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>
                          <strong>Tax Benefits:</strong> Premium deduction + tax-free maturity (under 80C & 10(10D))
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Disadvantages:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 font-bold">✗</span>
                        <span>
                          <strong>Very High Premium:</strong> 5-8x more expensive than term insurance
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 font-bold">✗</span>
                        <span>
                          <strong>Low Coverage:</strong> ₹50,000-80,000/year for only ₹10-20 lakhs cover
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 font-bold">✗</span>
                        <span>
                          <strong>Poor Returns:</strong> 4-6% annual returns, lower than mutual funds or FD
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 font-bold">✗</span>
                        <span>
                          <strong>Lock-in Period:</strong> Heavy penalties if you surrender early
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <p className="text-sm font-semibold text-orange-900 mb-1">Best For:</p>
                    <p className="text-sm text-orange-800">
                      People who struggle to save regularly and want guaranteed returns. Not ideal if you need high
                      coverage or better investment returns.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Comparison Table */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Quick Comparison: Same Budget Example</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted">
                      <tr>
                        <th className="p-3 text-left">Feature</th>
                        <th className="p-3 text-left">Term Insurance</th>
                        <th className="p-3 text-left">Savings Plan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-3 font-medium">Annual Premium</td>
                        <td className="p-3">₹10,000/year</td>
                        <td className="p-3">₹10,000/year</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Coverage Amount</td>
                        <td className="p-3 font-bold text-green-600">₹1 Crore</td>
                        <td className="p-3 font-bold text-orange-600">₹10-12 Lakhs</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Policy Term</td>
                        <td className="p-3">30 years</td>
                        <td className="p-3">20-25 years</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Maturity Benefit (if survive)</td>
                        <td className="p-3">₹0 (some plans offer premium return)</td>
                        <td className="p-3">₹2.5-3 Lakhs (guaranteed)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Investment Returns</td>
                        <td className="p-3">N/A - Pure protection</td>
                        <td className="p-3">4-6% per year</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Best Use Case</td>
                        <td className="p-3">Maximum family protection</td>
                        <td className="p-3">Forced savings + moderate cover</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Expert Recommendation */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Expert Recommendation</h3>
                <p className="mb-4 leading-relaxed opacity-90">
                  For 90% of people, <strong>Term Insurance + Separate Investments</strong> (mutual funds, PPF, FD) is
                  far better than savings plans. You get maximum protection + better returns.
                </p>
                <p className="text-sm opacity-75 leading-relaxed">
                  Example: Buy ₹1 crore term for ₹10,000/year + invest remaining ₹40,000 in mutual funds (8-12% returns)
                  instead of paying ₹50,000/year for a ₹15 lakh endowment plan.
                </p>
                <div className="mt-4">
                  <ExpertAdviceButton variant="secondary" size="lg">
                    Get Personalized Recommendation
                  </ExpertAdviceButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Health Insurance Section */}
      <section id="health-insurance" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4">Health Insurance</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Understanding Health Insurance in India</h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Health insurance covers your medical expenses during hospitalization. With rising healthcare costs
                  (10-15% annually), it's no longer optional – it's essential for every family.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/health_insurance_guide.png"
                  alt="Health Insurance Guide"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="space-y-6 mb-12">
              {/* Individual vs Family Floater */}
              <Card>
                <CardHeader>
                  <CardTitle>Individual Plan vs Family Floater</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Individual Health Plan</h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• Separate policy for each person</li>
                        <li>• Each member has their own sum insured</li>
                        <li>• Higher total premium</li>
                        <li>• Better for families with elderly members</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg bg-green-50">
                      <h4 className="font-semibold mb-2">Family Floater (Recommended)</h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• One policy covers entire family</li>
                        <li>• Shared sum insured across all members</li>
                        <li>• 30-40% cheaper than individual plans</li>
                        <li>• Best for young families (no senior citizens)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm font-semibold text-blue-900 mb-2">Example:</p>
                    <p className="text-sm text-blue-800">
                      Family of 4 (Self, Spouse, 2 Kids) – Individual plans: ₹45,000/year | Family Floater ₹5L:
                      ₹15,000/year (Save ₹30,000!)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Critical Illness Coverage */}
              <Card>
                <CardHeader>
                  <CardTitle>Critical Illness Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Provides lump sum payout on diagnosis of serious diseases like cancer, heart attack, stroke, kidney
                    failure, etc.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Why You Need It:</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Covers treatment costs not covered by regular insurance</li>
                        <li>• Replaces lost income during recovery</li>
                        <li>• Typically covers 30-40 critical illnesses</li>
                        <li>• Can be added as rider to term insurance</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2 text-orange-900">Cost Example:</h4>
                      <p className="text-sm text-orange-800">
                        ₹50 lakh critical illness cover costs ₹8,000-12,000/year for a 30-year-old. Worth it if there's
                        family history of serious diseases.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Important Terms with Image */}
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <Card>
                  <CardHeader>
                    <CardTitle>Important Terms You Must Understand</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="p-4 border-l-4 border-blue-500 bg-blue-50/50">
                        <h4 className="font-semibold text-sm mb-1">Room Rent Limit</h4>
                        <p className="text-sm text-muted-foreground">
                          Maximum daily room charges covered. If limit is ₹2,000/day but you take ₹4,000 room, your{" "}
                          <strong>entire claim reduces by 50%</strong> (proportionate deduction). Always choose "No
                          Capping" if affordable.
                        </p>
                      </div>
                      <div className="p-4 border-l-4 border-green-500 bg-green-50/50">
                        <h4 className="font-semibold text-sm mb-1">Co-Payment / Deductibles</h4>
                        <p className="text-sm text-muted-foreground">
                          Percentage you pay from your pocket on every claim. Example: 20% co-pay means if bill is ₹1
                          lakh, you pay ₹20,000, insurance pays ₹80,000.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/copayment-deductibles.png"
                    alt="Co-payment and Deductibles Explained"
                    className="w-full h-auto"
                  />
                  <div className="p-4 bg-muted/50">
                    <p className="text-sm text-muted-foreground font-medium">
                      Wait! Check for "Wait periods" and "Daycare Procedures" as well.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">How Much Health Coverage Do You Need?</h3>
                <div className="space-y-3 text-sm opacity-90 leading-relaxed">
                  <p>
                    <strong>Minimum:</strong> ₹5 lakhs per person (₹10L family floater for 4 members)
                  </p>
                  <p>
                    <strong>Recommended:</strong> ₹10-15 lakhs per person in metro cities
                  </p>
                  <p>
                    <strong>Super Top-Up:</strong> Buy base policy of ₹5L + super top-up of ₹20L for comprehensive
                    coverage at lower premium
                  </p>
                </div>
                <div className="mt-4">
                  <ExpertAdviceButton variant="secondary" size="lg">
                    Calculate Your Health Insurance Needs
                  </ExpertAdviceButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* KeyMan Insurance Section */}
      <section id="keyman-insurance" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4">Business Insurance</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">KeyMan Insurance: Protecting Your Business</h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  KeyMan Insurance protects your business from financial loss due to death or disability of key employees
                  whose skills, knowledge, or leadership are critical to company success.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/keyman_insurance.png"
                  alt="KeyMan Insurance for Businesses"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What Is KeyMan Insurance?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>
                    The company buys life insurance on a key employee. If that person dies or becomes disabled, the
                    company receives the payout to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Recruit and train a replacement</li>
                    <li>• Cover loss of revenue during transition</li>
                    <li>• Pay off debts or operating expenses</li>
                    <li>• Reassure investors and lenders</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Who Needs KeyMan Insurance?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>
                        <strong>Startups:</strong> Founders are irreplaceable in early stages
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>
                        <strong>Small Businesses:</strong> Heavy dependence on 1-2 key people
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>
                        <strong>Professional Firms:</strong> Partners, senior consultants, rainmakers
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>
                        <strong>Family Businesses:</strong> Key family members running operations
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>How Much KeyMan Coverage Do You Need?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 space-y-4">
                  <p className="text-sm font-semibold text-blue-900">Calculation Formula:</p>
                  <div className="space-y-3 text-sm text-blue-800">
                    <p>
                      <strong>Method 1 (Income-Based):</strong> 5-10x the key person's annual salary + benefits
                    </p>
                    <p>
                      <strong>Method 2 (Profit Contribution):</strong> Estimated profit contribution of the key person
                      over next 3-5 years
                    </p>
                    <p>
                      <strong>Method 3 (Replacement Cost):</strong> Cost to recruit + train replacement + business loss
                      during transition
                    </p>
                  </div>
                  <div className="pt-4 border-t border-blue-300">
                    <p className="text-sm font-semibold text-blue-900 mb-2">Example:</p>
                    <p className="text-sm text-blue-800">
                      CTO earning ₹30 lakhs/year who drives product development: Recommended coverage ₹1.5-3 crores
                      (5-10x salary) to cover recruitment, training, and lost productivity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tax Benefits of KeyMan Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Premium Payment:</strong> Deductible as business expense under
                    Section 37(1) of Income Tax Act
                  </p>
                  <p>
                    <strong className="text-foreground">Claim Payout:</strong> Received by company is taxable as
                    business income
                  </p>
                  <p className="text-orange-600 font-medium">
                    Note: Tax treatment can vary. Consult a tax advisor before purchasing KeyMan insurance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Insurance Section */}
      <section id="corporate-insurance" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4">Business Insurance</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Corporate Insurance Solutions</h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Group insurance policies for businesses to protect employees and the company. Essential for attracting
                  talent and complying with labor laws.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/corporate_insurance.png"
                  alt="Corporate Insurance Solutions"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="space-y-6 mb-12">
              {/* Group Health Insurance */}
              <Card>
                <CardHeader>
                  <CardTitle>Group Health Insurance (GMC)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Medical insurance for all employees under one master policy. Required by many state labor laws and a
                    key employee benefit.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-sm mb-3 text-green-900">Benefits for Company:</h4>
                      <ul className="space-y-2 text-sm text-green-800">
                        <li>• Premium 40-60% cheaper than individual plans</li>
                        <li>• No medical check-ups required for employees</li>
                        <li>• Tax deductible as business expense</li>
                        <li>• Improves employee satisfaction and retention</li>
                        <li>• Pre-existing diseases covered from day 1</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-sm mb-3 text-blue-900">Coverage Options:</h4>
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li>• Employees only vs Employees + Family</li>
                        <li>• Sum insured: ₹2L to ₹10L per person</li>
                        <li>• Top-up coverage for senior management</li>
                        <li>• Maternity, dental, vision add-ons</li>
                        <li>• Annual health check-ups included</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <p className="text-sm font-semibold text-orange-900 mb-2">Typical Cost:</p>
                    <p className="text-sm text-orange-800">
                      ₹5,000-8,000 per employee per year for ₹3 lakh sum insured (employees only). ₹8,000-12,000 for
                      employee + spouse + 2 children.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Group Term Life Insurance */}
              <Card>
                <CardHeader>
                  <CardTitle>Group Term Life Insurance (GTL)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Life cover for all employees. Provides financial security to employee families and demonstrates
                    company's commitment to welfare.
                  </p>

                  <div className="grid gap-4">
                    <div className="p-4 border-l-4 border-purple-500 bg-purple-50/50">
                      <h4 className="font-semibold text-sm mb-2">Standard Coverage Formula:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Junior staff: 1-2x annual salary</li>
                        <li>• Mid-level: 2-3x annual salary</li>
                        <li>• Senior management: 3-5x annual salary</li>
                      </ul>
                    </div>

                    <div className="p-4 border-l-4 border-green-500 bg-green-50/50">
                      <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• No medical exams for groups of 50+ employees</li>
                        <li>• Accidental death and disability riders available</li>
                        <li>• Coverage active while employed, ceases on exit</li>
                        <li>• Premium as low as ₹200-500 per lakh per year</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Directors & Officers Liability */}
              <Card>
                <CardHeader>
                  <CardTitle>Directors & Officers (D&O) Liability Insurance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Protects company directors and officers from personal financial liability for alleged wrongful acts
                    in managing the company.
                  </p>

                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-sm mb-2 text-red-900">What It Covers:</h4>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• Shareholder lawsuits</li>
                      <li>• Employment disputes and discrimination claims</li>
                      <li>• Regulatory investigations (SEBI, RBI, etc.)</li>
                      <li>• Breach of fiduciary duty claims</li>
                      <li>• Defense costs and legal fees</li>
                    </ul>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    <strong>Recommended for:</strong> Startups raising funding, companies with external investors,
                    publicly listed companies, and businesses in highly regulated industries.
                  </p>
                </CardContent>
              </Card>

              {/* Professional Indemnity */}
              <Card>
                <CardHeader>
                  <CardTitle>Professional Indemnity Insurance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Covers legal liability arising from professional services, errors, omissions, or negligence. Also
                    called Errors & Omissions (E&O) insurance.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Who Needs This:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• IT/Software companies</li>
                        <li>• Consultants and advisors</li>
                        <li>• Architects and engineers</li>
                        <li>• Healthcare providers</li>
                        <li>• Financial advisors</li>
                        <li>• Legal firms</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2 text-blue-900">Example Scenarios:</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Software bug causes client financial loss</li>
                        <li>• Design error leads to project failure</li>
                        <li>• Incorrect advice results in client loss</li>
                        <li>• Data breach due to security lapse</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Need Corporate Insurance for Your Business?</h3>
                <p className="mb-4 leading-relaxed opacity-90">
                  We help businesses of all sizes design comprehensive insurance programs tailored to their industry,
                  team size, and budget. Get expert guidance on compliance, coverage, and cost optimization.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <ExpertAdviceButton variant="secondary" size="lg">
                    Get Corporate Insurance Quote
                  </ExpertAdviceButton>
                  <WhatsAppButton variant="secondary" size="lg" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every family's insurance needs are unique. Talk to our experts to get personalized advice on what's right
              for you – completely free, no obligations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ExpertAdviceButton size="lg">Schedule Free Consultation</ExpertAdviceButton>
              <WhatsAppButton size="lg" variant="outline" />
            </div>
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
