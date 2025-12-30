"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Plus, X } from "lucide-react"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button" // Import WhatsAppButton component
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const ALL_TERM_PLANS = [
  {
    id: "hdfc-click2protect",
    provider: "HDFC Life",
    plan: "Click 2 Protect 3D Plus",
    premium: "₹8,456/year",
    coverage: "₹1 Crore",
    claimSettlement: "99.1%",
    features: [
      "Life Cover + Death Benefit",
      "Return of Premium Option",
      "Critical Illness Rider",
      "Accidental Death Benefit",
    ],
  },
  {
    id: "icici-iprotect",
    provider: "ICICI Prudential",
    plan: "iProtect Smart",
    premium: "₹7,812/year",
    coverage: "₹1 Crore",
    claimSettlement: "98.5%",
    features: ["Flexible Payout Options", "Waiver of Premium", "Income Benefit Option", "Terminal Illness Cover"],
  },
  {
    id: "max-smart",
    provider: "Max Life",
    plan: "Smart Secure Plus",
    premium: "₹8,203/year",
    coverage: "₹1 Crore",
    claimSettlement: "99.3%",
    features: ["Monthly Income Option", "Terminal Illness Benefit", "Accidental TPD", "Critical Illness Rider"],
  },
  {
    id: "lic-techterm",
    provider: "LIC",
    plan: "Tech Term",
    premium: "₹9,125/year",
    coverage: "₹1 Crore",
    claimSettlement: "97.8%",
    features: ["100% Online Process", "Accidental Death Benefit", "Low Premium", "Trusted Brand"],
  },
  {
    id: "sbi-eShield",
    provider: "SBI Life",
    plan: "eShield",
    premium: "₹8,650/year",
    coverage: "₹1 Crore",
    claimSettlement: "98.2%",
    features: ["Income Benefit Option", "Critical Illness Rider", "Accidental Death Benefit", "Flexible Premium"],
  },
  {
    id: "bajaj-smartprotect",
    provider: "Bajaj Allianz",
    plan: "Smart Protect Goal",
    premium: "₹8,980/year",
    coverage: "₹1 Crore",
    claimSettlement: "97.5%",
    features: ["Return of Premium", "Life Stage Benefit", "Terminal Illness", "Accidental Rider"],
  },
]

const ALL_ULIP_PLANS = [
  {
    id: "hdfc-click2wealth",
    provider: "HDFC Life",
    plan: "Click 2 Wealth",
    premium: "₹50,000/year",
    coverage: "₹10 Lakhs",
    fundReturns: "12-15% (5yr avg)",
    features: ["7 Fund Options", "Free Switches", "Top-up Facility", "Partial Withdrawals"],
  },
  {
    id: "icici-signature",
    provider: "ICICI Prudential",
    plan: "Signature",
    premium: "₹50,000/year",
    coverage: "₹10 Lakhs",
    fundReturns: "11-14% (5yr avg)",
    features: ["9 Fund Options", "Auto Portfolio Rebalancing", "Premium Holiday", "Loyalty Additions"],
  },
  {
    id: "sbi-smartwealth",
    provider: "SBI Life",
    plan: "Smart Wealth Assure",
    premium: "₹50,000/year",
    coverage: "₹10 Lakhs",
    fundReturns: "10-13% (5yr avg)",
    features: ["Guaranteed Maturity Benefit", "6 Fund Options", "Premium Waiver", "Life Cover"],
  },
  {
    id: "max-smartwealth",
    provider: "Max Life",
    plan: "Smart Wealth Plan",
    premium: "₹50,000/year",
    coverage: "₹10 Lakhs",
    fundReturns: "11-14% (5yr avg)",
    features: ["8 Fund Options", "Fund Switch", "Partial Withdrawal", "Loyalty Bonus"],
  },
]

const ALL_INVESTMENT_PLANS = [
  {
    id: "lic-jeevan",
    provider: "LIC",
    plan: "Jeevan Anand",
    premium: "₹55,850/year",
    coverage: "₹10 Lakhs",
    maturityBenefit: "₹17.2 Lakhs",
    features: ["Whole Life Cover", "Guaranteed Returns", "Bonus Additions", "Loan Facility"],
  },
  {
    id: "hdfc-sanchay",
    provider: "HDFC Life",
    plan: "Sanchay Plus",
    premium: "₹58,200/year",
    coverage: "₹10 Lakhs",
    maturityBenefit: "₹18.5 Lakhs",
    features: ["Guaranteed Returns", "Flexible Premium", "Life Cover", "Tax Benefits"],
  },
  {
    id: "icici-guaranteed",
    provider: "ICICI Prudential",
    plan: "Guaranteed Savings",
    premium: "₹60,000/year",
    coverage: "₹10 Lakhs",
    maturityBenefit: "₹19.2 Lakhs",
    features: ["Guaranteed Maturity", "Life Cover", "Premium Waiver", "Multiple Payout Options"],
  },
  {
    id: "sbi-shubhlabh",
    provider: "SBI Life",
    plan: "Shubh Labh",
    premium: "₹56,500/year",
    coverage: "₹10 Lakhs",
    maturityBenefit: "₹17.8 Lakhs",
    features: ["Guaranteed Additions", "Death Benefit", "Maturity Benefit", "Tax Benefits"],
  },
]

const ALL_HEALTH_PLANS = [
  {
    id: "star-comprehensive",
    provider: "Star Health",
    plan: "Comprehensive Plan",
    premium: "₹14,825/year",
    coverage: "₹5 Lakhs",
    roomRent: "Single Private AC",
    waitingPeriod: "2 years",
    daycare: true,
    prePostHospital: "60/90 days",
    network: "14,000+ hospitals",
  },
  {
    id: "care-supreme",
    provider: "Care Health",
    plan: "Care Supreme",
    premium: "₹14,150/year",
    coverage: "₹5 Lakhs",
    roomRent: "No Capping",
    waitingPeriod: "2 years",
    daycare: true,
    prePostHospital: "60/180 days",
    network: "18,000+ hospitals",
  },
  {
    id: "niva-reassure",
    provider: "Niva Bupa",
    plan: "ReAssure 2.0",
    premium: "₹16,420/year",
    coverage: "₹5 Lakhs",
    roomRent: "Single Private AC",
    waitingPeriod: "3 years",
    daycare: true,
    prePostHospital: "30/60 days",
    network: "10,000+ hospitals",
  },
  {
    id: "hdfc-optima",
    provider: "HDFC Ergo",
    plan: "Optima Secure",
    premium: "₹15,890/year",
    coverage: "₹5 Lakhs",
    roomRent: "No Capping",
    waitingPeriod: "2 years",
    daycare: true,
    prePostHospital: "60/90 days",
    network: "13,000+ hospitals",
  },
  {
    id: "bajaj-health",
    provider: "Bajaj Allianz",
    plan: "Health Guard",
    premium: "₹15,200/year",
    coverage: "₹5 Lakhs",
    roomRent: "Single Private AC",
    waitingPeriod: "2 years",
    daycare: true,
    prePostHospital: "60/90 days",
    network: "12,000+ hospitals",
  },
]

export default function ComparePage() {
  const [selectedTermPlans, setSelectedTermPlans] = useState<string[]>([
    "hdfc-click2protect",
    "icici-iprotect",
    "max-smart",
  ])
  const [selectedUlipPlans, setSelectedUlipPlans] = useState<string[]>([
    "hdfc-click2wealth",
    "icici-signature",
    "sbi-smartwealth",
  ])
  const [selectedInvestmentPlans, setSelectedInvestmentPlans] = useState<string[]>([
    "lic-jeevan",
    "hdfc-sanchay",
    "icici-guaranteed",
  ])
  const [selectedHealthPlans, setSelectedHealthPlans] = useState<string[]>([
    "star-comprehensive",
    "care-supreme",
    "niva-reassure",
    "hdfc-optima",
  ])

  const addPlanToComparison = (category: "term" | "ulip" | "investment" | "health", planId: string) => {
    switch (category) {
      case "term":
        if (!selectedTermPlans.includes(planId)) {
          setSelectedTermPlans([...selectedTermPlans, planId])
        }
        break
      case "ulip":
        if (!selectedUlipPlans.includes(planId)) {
          setSelectedUlipPlans([...selectedUlipPlans, planId])
        }
        break
      case "investment":
        if (!selectedInvestmentPlans.includes(planId)) {
          setSelectedInvestmentPlans([...selectedInvestmentPlans, planId])
        }
        break
      case "health":
        if (!selectedHealthPlans.includes(planId)) {
          setSelectedHealthPlans([...selectedHealthPlans, planId])
        }
        break
    }
  }

  const removePlanFromComparison = (category: "term" | "ulip" | "investment" | "health", planId: string) => {
    switch (category) {
      case "term":
        setSelectedTermPlans(selectedTermPlans.filter((id) => id !== planId))
        break
      case "ulip":
        setSelectedUlipPlans(selectedUlipPlans.filter((id) => id !== planId))
        break
      case "investment":
        setSelectedInvestmentPlans(selectedInvestmentPlans.filter((id) => id !== planId))
        break
      case "health":
        setSelectedHealthPlans(selectedHealthPlans.filter((id) => id !== planId))
        break
    }
  }

  // Get selected plans for display
  const termInsurancePlans = ALL_TERM_PLANS.filter((p) => selectedTermPlans.includes(p.id))
  const ulipPlans = ALL_ULIP_PLANS.filter((p) => selectedUlipPlans.includes(p.id))
  const investmentPlans = ALL_INVESTMENT_PLANS.filter((p) => selectedInvestmentPlans.includes(p.id))
  const healthInsurancePlans = ALL_HEALTH_PLANS.filter((p) => selectedHealthPlans.includes(p.id))

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Compare Best Insurance Plans from Top Insurers in India
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real market data, unbiased comparisons, and expert guidance. Add or remove companies to create your custom
              comparison
            </p>
          </div>
        </div>
      </section>

      {/* Term Insurance Comparison */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Best Term Life Insurance Plans 2025</h2>
              <p className="text-muted-foreground">For 30-year-old male, non-smoker, 30-year policy term</p>
            </div>
            <div className="flex items-center gap-3">
              <Select onValueChange={(value) => addPlanToComparison("term", value)}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Add company" />
                </SelectTrigger>
                <SelectContent>
                  {ALL_TERM_PLANS.filter((p) => !selectedTermPlans.includes(p.id)).map((plan) => (
                    <SelectItem key={plan.id} value={plan.id}>
                      {plan.provider}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button size="icon" variant="outline" disabled>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {termInsurancePlans.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center text-muted-foreground">
                No plans selected. Add companies using the dropdown above to start comparing.
              </CardContent>
            </Card>
          ) : (
            <div className="overflow-x-auto">
              <div className="min-w-[900px]">
                <div
                  className="grid gap-4"
                  style={{ gridTemplateColumns: `200px repeat(${termInsurancePlans.length}, 1fr)` }}
                >
                  <div className="font-semibold p-4 bg-muted rounded-lg">Provider & Plan</div>
                  {termInsurancePlans.map((plan) => (
                    <Card key={plan.id} className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-6 w-6"
                        onClick={() => removePlanFromComparison("term", plan.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg pr-8">{plan.provider}</CardTitle>
                        <p className="text-sm text-muted-foreground">{plan.plan}</p>
                      </CardHeader>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-muted rounded-lg">Annual Premium</div>
                  {termInsurancePlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <p className="font-bold text-lg text-primary">{plan.premium}</p>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-muted rounded-lg">Sum Assured</div>
                  {termInsurancePlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <p className="font-semibold">{plan.coverage}</p>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-muted rounded-lg">Claim Settlement Ratio</div>
                  {termInsurancePlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <p className="font-semibold text-success">{plan.claimSettlement}</p>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-muted rounded-lg">Key Features</div>
                  {termInsurancePlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <ul className="space-y-2 text-sm">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}

                  <div></div>
                  {termInsurancePlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <ExpertAdviceButton
                          size="sm"
                          className="w-full"
                          defaultInterest={`${plan.provider} - ${plan.plan}`}
                        >
                          Get Quote
                        </ExpertAdviceButton>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm text-foreground leading-relaxed mb-2">
              <strong>What This Means for You:</strong>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Compare premiums and claim settlement ratios across insurers. Higher claim settlement ratio means better
              track record of paying claims. Choose based on your budget and preferred insurer reputation.
            </p>
          </div>
        </div>
      </section>

      {/* ULIP Plans */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Best ULIP (Unit Linked Insurance) Plans 2025</h2>
              <p className="text-muted-foreground">Investment + Insurance combined | Min 5 year lock-in period</p>
            </div>
            <div className="flex items-center gap-3">
              <Select onValueChange={(value) => addPlanToComparison("ulip", value)}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Add company" />
                </SelectTrigger>
                <SelectContent>
                  {ALL_ULIP_PLANS.filter((p) => !selectedUlipPlans.includes(p.id)).map((plan) => (
                    <SelectItem key={plan.id} value={plan.id}>
                      {plan.provider}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button size="icon" variant="outline" disabled>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {ulipPlans.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center text-muted-foreground">
                No plans selected. Add companies using the dropdown above to start comparing.
              </CardContent>
            </Card>
          ) : (
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="grid gap-4" style={{ gridTemplateColumns: `200px repeat(${ulipPlans.length}, 1fr)` }}>
                  <div className="font-semibold p-4 bg-background rounded-lg">Provider & Plan</div>
                  {ulipPlans.map((plan) => (
                    <Card key={plan.id} className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-6 w-6"
                        onClick={() => removePlanFromComparison("ulip", plan.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg pr-8">{plan.provider}</CardTitle>
                        <p className="text-sm text-muted-foreground">{plan.plan}</p>
                      </CardHeader>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-background rounded-lg">Annual Premium</div>
                  {ulipPlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <p className="font-bold text-lg text-primary">{plan.premium}</p>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-background rounded-lg">Life Cover</div>
                  {ulipPlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <p className="font-semibold">{plan.coverage}</p>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-background rounded-lg">Fund Returns (5yr avg)</div>
                  {ulipPlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <p className="font-semibold text-success">{plan.fundReturns}</p>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-background rounded-lg">Key Features</div>
                  {ulipPlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <ul className="space-y-2 text-sm">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}

                  <div></div>
                  {ulipPlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <ExpertAdviceButton
                          size="sm"
                          className="w-full"
                          defaultInterest={`${plan.provider} - ${plan.plan}`}
                        >
                          Get Quote
                        </ExpertAdviceButton>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-sm text-foreground leading-relaxed mb-2">
              <strong>ULIP vs Mutual Funds:</strong>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ULIPs have 5-year lock-in and higher charges (2-3%) but offer tax-free maturity. Mutual funds have better
              flexibility and lower expense ratios (0.5-1.5%). Most experts recommend Term Insurance + Mutual Funds for
              better returns.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Best Guaranteed Savings/Investment Plans 2025</h2>
              <p className="text-muted-foreground">20-year policy term | Traditional endowment plans with life cover</p>
            </div>
            <div className="flex items-center gap-3">
              <Select onValueChange={(value) => addPlanToComparison("investment", value)}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Add company" />
                </SelectTrigger>
                <SelectContent>
                  {ALL_INVESTMENT_PLANS.filter((p) => !selectedInvestmentPlans.includes(p.id)).map((plan) => (
                    <SelectItem key={plan.id} value={plan.id}>
                      {plan.provider}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button size="icon" variant="outline" disabled>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {investmentPlans.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center text-muted-foreground">
                No plans selected. Add companies using the dropdown above to start comparing.
              </CardContent>
            </Card>
          ) : (
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                <div
                  className="grid gap-4"
                  style={{ gridTemplateColumns: `200px repeat(${investmentPlans.length}, 1fr)` }}
                >
                  <div className="font-semibold p-4 bg-muted rounded-lg">Provider & Plan</div>
                  {investmentPlans.map((plan) => (
                    <Card key={plan.id} className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-6 w-6"
                        onClick={() => removePlanFromComparison("investment", plan.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg pr-8">{plan.provider}</CardTitle>
                        <p className="text-sm text-muted-foreground">{plan.plan}</p>
                      </CardHeader>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-muted rounded-lg">Annual Premium (20yrs)</div>
                  {investmentPlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <p className="font-bold text-lg text-primary">{plan.premium}</p>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-muted rounded-lg">Life Cover</div>
                  {investmentPlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <p className="font-semibold">{plan.coverage}</p>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-muted rounded-lg">Maturity Benefit (approx)</div>
                  {investmentPlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <p className="font-semibold text-success">{plan.maturityBenefit}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Total paid: ₹
                          {((Number.parseFloat(plan.premium.replace(/[₹,]/g, "")) * 20) / 100000).toFixed(1)}L
                        </p>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-muted rounded-lg">Key Features</div>
                  {investmentPlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <ul className="space-y-2 text-sm">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}

                  <div></div>
                  {investmentPlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <ExpertAdviceButton
                          size="sm"
                          className="w-full"
                          defaultInterest={`${plan.provider} - ${plan.plan}`}
                        >
                          Get Quote
                        </ExpertAdviceButton>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-sm text-foreground leading-relaxed mb-2">
              <strong>Returns Analysis:</strong>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Average annual return: 5-6% (lower than PPF at 7.1%, mutual funds at 10-12%, or even FD at 6-7%). These
              plans work best as forced savings, not as high-return investments. Consider alternatives for better
              returns.
            </p>
          </div>
        </div>
      </section>

      {/* Health Insurance Comparison */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Best Health Insurance Plans 2025</h2>
              <p className="text-muted-foreground">Individual plan for 30-year-old, ₹5 Lakhs sum insured</p>
            </div>
            <div className="flex items-center gap-3">
              <Select onValueChange={(value) => addPlanToComparison("health", value)}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Add company" />
                </SelectTrigger>
                <SelectContent>
                  {ALL_HEALTH_PLANS.filter((p) => !selectedHealthPlans.includes(p.id)).map((plan) => (
                    <SelectItem key={plan.id} value={plan.id}>
                      {plan.provider}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button size="icon" variant="outline" disabled>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {healthInsurancePlans.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center text-muted-foreground">
                No plans selected. Add companies using the dropdown above to start comparing.
              </CardContent>
            </Card>
          ) : (
            <div className="overflow-x-auto">
              <div className="min-w-[1000px]">
                <div
                  className="grid gap-4"
                  style={{ gridTemplateColumns: `200px repeat(${healthInsurancePlans.length}, 1fr)` }}
                >
                  <div className="font-semibold p-4 bg-background rounded-lg">Provider & Plan</div>
                  {healthInsurancePlans.map((plan) => (
                    <Card key={plan.id} className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-6 w-6"
                        onClick={() => removePlanFromComparison("health", plan.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg pr-8">{plan.provider}</CardTitle>
                        <p className="text-sm text-muted-foreground">{plan.plan}</p>
                      </CardHeader>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-background rounded-lg">Annual Premium</div>
                  {healthInsurancePlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <p className="font-bold text-lg text-primary">{plan.premium}</p>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-background rounded-lg">Sum Insured</div>
                  {healthInsurancePlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <p className="font-semibold">{plan.coverage}</p>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-background rounded-lg">Room Rent Limit</div>
                  {healthInsurancePlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <p className="text-sm font-semibold">{plan.roomRent}</p>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-background rounded-lg">Hospital Network</div>
                  {healthInsurancePlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <p className="text-sm font-semibold">{plan.network}</p>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-background rounded-lg">Pre/Post Hospitalization</div>
                  {healthInsurancePlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <p className="text-sm font-semibold">{plan.prePostHospital}</p>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="font-semibold p-4 bg-background rounded-lg">Waiting Period</div>
                  {healthInsurancePlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <p className="text-sm font-semibold">{plan.waitingPeriod}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm text-foreground leading-relaxed mb-2">
              <strong>Key Comparison Factors:</strong>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Look for "No Room Rent Capping" plans to avoid co-payment. Wider hospital network means more cashless
              options. Pre-post hospitalization of 60/90 days or more is ideal. Consider waiting period for specific
              diseases.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Not Sure Which Plan is Right for You?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Get personalized recommendations based on your age, income, family size, and health history
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ExpertAdviceButton size="lg">Schedule Free Consultation</ExpertAdviceButton>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
