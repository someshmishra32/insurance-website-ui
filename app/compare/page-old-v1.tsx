"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Plus, X, Download, Info, Filter, TrendingUp } from "lucide-react"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Enhanced Term Insurance Plans Data
const TERM_INSURANCE_COMPANIES = [
  {
    id: "hdfc-click2protect",
    company: "HDFC Life",
    logo: "🏢",
    established: 2000,
    claimSettlement: 99.1,
    plans: [
      {
        id: "hdfc-click2protect",
        name: "Click 2 Protect 3D Plus",
        premium: "₹8,456/year",
        coverage: "₹1 Crore",
        features: ["Life Cover + Death Benefit", "Return of Premium Option", "Critical Illness Rider", "Accidental Death Benefit"],
        advantages: ["No medical exam up to ₹50L", "Online approval in 15 mins", "Highest claim settlement in industry"],
        brochure: "https://example.com/brochures/hdfc-click2protect.pdf",
        rating: 4.5,
      },
    ],
  },
  {
    id: "icici-iprotect",
    company: "ICICI Prudential",
    logo: "🏦",
    established: 1999,
    claimSettlement: 98.5,
    plans: [
      {
        id: "icici-iprotect",
        name: "iProtect Smart",
        premium: "₹7,812/year",
        coverage: "₹1 Crore",
        features: ["Flexible Payout Options", "Waiver of Premium", "Income Benefit Option", "Terminal Illness Cover"],
        advantages: ["Family protection rider", "28-day waiting waiver", "Highest transparency"],
        brochure: "https://example.com/brochures/icici-iprotect.pdf",
        rating: 4.6,
      },
    ],
  },
  {
    id: "max-smart",
    company: "Max Life",
    logo: "📊",
    established: 2000,
    claimSettlement: 99.3,
    plans: [
      {
        id: "max-smart",
        name: "Smart Secure Plus",
        premium: "₹8,203/year",
        coverage: "₹1 Crore",
        features: ["Monthly Income Option", "Terminal Illness Benefit", "Accidental TPD", "Critical Illness Rider"],
        advantages: ["Best for young professionals", "AI underwriting", "Fastest approval"],
        brochure: "https://example.com/brochures/max-smart.pdf",
        rating: 4.7,
      },
    ],
  },
  {
    id: "lic-techterm",
    company: "LIC",
    logo: "🇮🇳",
    established: 1956,
    claimSettlement: 97.8,
    plans: [
      {
        id: "lic-techterm",
        name: "Tech Term",
        premium: "₹9,125/year",
        coverage: "₹1 Crore",
        features: ["100% Online Process", "Accidental Death Benefit", "Low Premium", "Trusted Brand"],
        advantages: ["Government-backed", "Lowest interest rates", "Widest reach in rural areas"],
        brochure: "https://example.com/brochures/lic-techterm.pdf",
        rating: 4.3,
      },
    ],
  },
  {
    id: "sbi-eshield",
    company: "SBI Life",
    logo: "🏛️",
    established: 2001,
    claimSettlement: 98.2,
    plans: [
      {
        id: "sbi-eshield",
        name: "eShield",
        premium: "₹8,650/year",
        coverage: "₹1 Crore",
        features: ["Income Benefit Option", "Critical Illness Rider", "Accidental Death Benefit", "Flexible Premium"],
        advantages: ["SBI customer discounts", "Tie-up with banks", "Quick claims"],
        brochure: "https://example.com/brochures/sbi-eshield.pdf",
        rating: 4.4,
      },
    ],
  },
  {
    id: "bajaj-smartprotect",
    company: "Bajaj Allianz",
    logo: "🌟",
    established: 2001,
    claimSettlement: 97.5,
    plans: [
      {
        id: "bajaj-smartprotect",
        name: "Smart Protect Goal",
        premium: "₹8,980/year",
        coverage: "₹1 Crore",
        features: ["Return of Premium", "Life Stage Benefit", "Terminal Illness", "Accidental Rider"],
        advantages: ["Affordable premiums", "Hybrid protection", "Easy claim process"],
        brochure: "https://example.com/brochures/bajaj-smartprotect.pdf",
        rating: 4.2,
      },
    ],
  },
  {
    id: "aditya-birla-click",
    company: "Aditya Birla Sun Life",
    logo: "☀️",
    established: 2000,
    claimSettlement: 98.9,
    plans: [
      {
        id: "aditya-birla-click",
        name: "Online Term Plan",
        premium: "₹7,500/year",
        coverage: "₹1 Crore",
        features: ["100% Online", "No waiting period", "Cash benefit on diagnosis", "Full transparency"],
        advantages: ["Cheapest premium", "Instant approval", "Digital-first approach"],
        brochure: "https://example.com/brochures/aditya-birla-click.pdf",
        rating: 4.5,
      },
    ],
  },
]

// Health Insurance Plans Data
const HEALTH_INSURANCE_COMPANIES = [
  {
    id: "star-comprehensive",
    company: "Star Health",
    logo: "⭐",
    established: 2007,
    claimSettlement: 95.2,
    plans: [
      {
        id: "star-comprehensive",
        name: "Comprehensive Plan",
        premium: "₹14,825/year",
        coverage: "₹5 Lakhs",
        roomRent: "Single Private AC",
        network: "14,000+ hospitals",
        features: ["Day-care procedures", "60/90 pre-post hospitalization", "International cover", "No room rent capping up to 5L"],
        advantages: ["Affordable premium", "Wide network", "Quick claim settlement"],
        brochure: "https://example.com/brochures/star-comprehensive.pdf",
        rating: 4.4,
      },
    ],
  },
  {
    id: "care-supreme",
    company: "Care Health",
    logo: "❤️",
    established: 2007,
    claimSettlement: 94.8,
    plans: [
      {
        id: "care-supreme",
        name: "Care Supreme",
        premium: "₹14,150/year",
        coverage: "₹5 Lakhs",
        roomRent: "No Capping",
        network: "18,000+ hospitals",
        features: ["Unlimited room rent", "60/180 pre-post hospitalization", "OPD cover available", "Maternity cover"],
        advantages: ["Best room rent coverage", "Largest network", "Generous pre-post period"],
        brochure: "https://example.com/brochures/care-supreme.pdf",
        rating: 4.6,
      },
    ],
  },
  {
    id: "niva-reassure",
    company: "Niva Bupa",
    logo: "🛡️",
    established: 2014,
    claimSettlement: 96.1,
    plans: [
      {
        id: "niva-reassure",
        name: "ReAssure 2.0",
        premium: "₹16,420/year",
        coverage: "₹5 Lakhs",
        roomRent: "Single Private AC",
        network: "10,000+ hospitals",
        features: ["Wellness benefits included", "30/60 pre-post hospitalization", "AI claims processing", "No waiting period for accidents"],
        advantages: ["Wellness rewards", "Modern claims system", "Preventive care focus"],
        brochure: "https://example.com/brochures/niva-reassure.pdf",
        rating: 4.5,
      },
    ],
  },
  {
    id: "hdfc-optima",
    company: "HDFC Ergo",
    logo: "🏢",
    established: 2002,
    claimSettlement: 94.5,
    plans: [
      {
        id: "hdfc-optima",
        name: "Optima Secure",
        premium: "₹15,890/year",
        coverage: "₹5 Lakhs",
        roomRent: "No Capping",
        network: "13,000+ hospitals",
        features: ["60/90 pre-post hospitalization", "International cover available", "COVID-19 cover", "No co-pay for network hospitals"],
        advantages: ["HDFC Group trust", "Lifetime renewability", "Flexible plans"],
        brochure: "https://example.com/brochures/hdfc-optima.pdf",
        rating: 4.3,
      },
    ],
  },
  {
    id: "bajaj-health",
    company: "Bajaj Allianz",
    logo: "🌟",
    established: 2001,
    claimSettlement: 93.9,
    plans: [
      {
        id: "bajaj-health",
        name: "Health Guard",
        premium: "₹15,200/year",
        coverage: "₹5 Lakhs",
        roomRent: "Single Private AC",
        network: "12,000+ hospitals",
        features: ["Cashless hospitalization", "Accident cover", "30-day co-pay free", "Easy claim settlement"],
        advantages: ["Quick claim approval", "Good network", "Affordable"],
        brochure: "https://example.com/brochures/bajaj-health.pdf",
        rating: 4.2,
      },
    ],
  },
  {
    id: "aetna-health",
    company: "Aetna Health",
    logo: "🏥",
    established: 2008,
    claimSettlement: 95.7,
    plans: [
      {
        id: "aetna-health",
        name: "Complete Family Plan",
        premium: "₹18,500/year",
        coverage: "₹10 Lakhs",
        roomRent: "No Capping",
        network: "15,500+ hospitals",
        features: ["₹10L cover", "Unlimited room rent", "OPD up to ₹5000 per year", "Annual health checkup"],
        advantages: ["Higher coverage", "Full OPD support", "Premium checkup included"],
        brochure: "https://example.com/brochures/aetna-health.pdf",
        rating: 4.7,
      },
    ],
  },
  {
    id: "reliance-health",
    company: "Reliance Health",
    logo: "⚡",
    established: 2003,
    claimSettlement: 92.3,
    plans: [
      {
        id: "reliance-health",
        name: "Smart Health Plus",
        premium: "₹13,900/year",
        coverage: "₹5 Lakhs",
        roomRent: "5% of sum insured",
        network: "11,000+ hospitals",
        features: ["Lowest premium in segment", "No waiting period for accidents", "Fast claim processing", "Online claim filing"],
        advantages: ["Most affordable option", "Digital-first", "Quick settlements"],
        brochure: "https://example.com/brochures/reliance-health.pdf",
        rating: 4.1,
      },
    ],
  },
]

export default function ComparePageEnhanced() {
  const [selectedTermCompanies, setSelectedTermCompanies] = useState<string[]>(["hdfc-click2protect", "icici-iprotect", "max-smart"])
  const [selectedHealthCompanies, setSelectedHealthCompanies] = useState<string[]>(["star-comprehensive", "care-supreme", "niva-reassure"])
  const [filterRating, setFilterRating] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("company")

  const addTermCompany = (companyId: string) => {
    if (!selectedTermCompanies.includes(companyId) && selectedTermCompanies.length < 5) {
      setSelectedTermCompanies([...selectedTermCompanies, companyId])
    }
  }

  const removeTermCompany = (companyId: string) => {
    setSelectedTermCompanies(selectedTermCompanies.filter((id) => id !== companyId))
  }

  const addHealthCompany = (companyId: string) => {
    if (!selectedHealthCompanies.includes(companyId) && selectedHealthCompanies.length < 5) {
      setSelectedHealthCompanies([...selectedHealthCompanies, companyId])
    }
  }

  const removeHealthCompany = (companyId: string) => {
    setSelectedHealthCompanies(selectedHealthCompanies.filter((id) => id !== companyId))
  }

  // Get filtered and sorted companies
  const termCompanies = TERM_INSURANCE_COMPANIES.filter((c) => selectedTermCompanies.includes(c.id))
  const healthCompanies = HEALTH_INSURANCE_COMPANIES.filter((c) => selectedHealthCompanies.includes(c.id))

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Compare Best Insurance Plans from India's Top Insurers
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Real market data, transparent comparisons, and expert recommendations. Compare 7+ top insurance companies and download detailed brochures.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">7+</p>
                <p className="text-sm text-muted-foreground">Top Companies</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">50K+</p>
                <p className="text-sm text-muted-foreground">Hospital Network</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">95%+</p>
                <p className="text-sm text-muted-foreground">Claim Settlement</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Transparent Data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Comparison Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="term" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="term" className="text-base">Term Insurance</TabsTrigger>
              <TabsTrigger value="health" className="text-base">Health Insurance</TabsTrigger>
            </TabsList>

            {/* Term Insurance Tab */}
            <TabsContent value="term" className="space-y-8">
              {/* Selection Controls */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">Best Term Life Insurance Plans 2025</h3>
                      <p className="text-sm text-muted-foreground">For 30-year-old male, non-smoker, ₹1 Crore coverage, 30-year term</p>
                    </div>
                    <Select onValueChange={addTermCompany} value="">
                      <SelectTrigger className="w-[250px]">
                        <SelectValue placeholder="+ Add company to compare" />
                      </SelectTrigger>
                      <SelectContent>
                        {TERM_INSURANCE_COMPANIES.filter((c) => !selectedTermCompanies.includes(c.id)).map((company) => (
                          <SelectItem key={company.id} value={company.id}>
                            {company.logo} {company.company}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Company Selection Display */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {termCompanies.map((company) => (
                  <Card key={company.id} className="relative border-primary">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-6 w-6"
                      onClick={() => removeTermCompany(company.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <CardContent className="p-4">
                      <div className="text-3xl mb-2">{company.logo}</div>
                      <h3 className="font-bold text-lg mb-2">{company.company}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Est.</span>
                          <span className="font-semibold">{company.established}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Settlement</span>
                          <Badge variant="outline" className="bg-green-50">{company.claimSettlement}%</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Comparison Table */}
              {termCompanies.length > 0 && (
                <div className="overflow-x-auto">
                  <div className="min-w-[900px] space-y-4">
                    {/* Plan Names */}
                    <div className="grid gap-3" style={{ gridTemplateColumns: `250px repeat(${termCompanies.length}, 1fr)` }}>
                      <div className="font-bold p-4 bg-muted rounded-lg sticky left-0 z-10">Company & Plan</div>
                      {termCompanies.map((company) => (
                        <Card key={company.id} className="col-span-1">
                          <CardContent className="p-4">
                            <p className="font-semibold text-sm">{company.plans[0].name}</p>
                            <div className="flex items-center gap-2 mt-3">
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} className={`text-lg ${i < Math.floor(company.plans[0].rating) ? "⭐" : "☆"}`} />
                                ))}
                              </div>
                              <span className="text-xs font-semibold">{company.plans[0].rating}/5</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}

                      {/* Premium */}
                      <div className="font-bold p-4 bg-muted rounded-lg sticky left-0 z-10">Annual Premium</div>
                      {termCompanies.map((company) => (
                        <Card key={company.id} className="col-span-1">
                          <CardContent className="p-4">
                            <p className="text-xl font-bold text-primary">{company.plans[0].premium}</p>
                            <p className="text-xs text-muted-foreground mt-2">For ₹1Cr coverage</p>
                          </CardContent>
                        </Card>
                      ))}

                      {/* Coverage */}
                      <div className="font-bold p-4 bg-muted rounded-lg sticky left-0 z-10">Sum Assured</div>
                      {termCompanies.map((company) => (
                        <Card key={company.id} className="col-span-1">
                          <CardContent className="p-4">
                            <p className="font-semibold">{company.plans[0].coverage}</p>
                          </CardContent>
                        </Card>
                      ))}

                      {/* Claim Settlement */}
                      <div className="font-bold p-4 bg-muted rounded-lg sticky left-0 z-10">Claim Settlement</div>
                      {termCompanies.map((company) => (
                        <Card key={company.id} className="col-span-1">
                          <CardContent className="p-4">
                            <p className="font-bold text-green-600 text-lg">{company.claimSettlement}%</p>
                            <p className="text-xs text-muted-foreground mt-1">Last year average</p>
                          </CardContent>
                        </Card>
                      ))}

                      {/* Key Features */}
                      <div className="font-bold p-4 bg-muted rounded-lg sticky left-0 z-10">Key Features</div>
                      {termCompanies.map((company) => (
                        <Card key={company.id} className="col-span-1">
                          <CardContent className="p-4">
                            <ul className="space-y-2 text-sm">
                              {company.plans[0].features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}

                      {/* Why Choose */}
                      <div className="font-bold p-4 bg-muted rounded-lg sticky left-0 z-10">Why Choose?</div>
                      {termCompanies.map((company) => (
                        <Card key={company.id} className="col-span-1">
                          <CardContent className="p-4">
                            <ul className="space-y-2 text-sm">
                              {company.plans[0].advantages.map((adv, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <TrendingUp className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                  <span>{adv}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}

                      {/* Download Brochure & Get Quote */}
                      <div className="p-4"></div>
                      {termCompanies.map((company) => (
                        <Card key={company.id} className="col-span-1">
                          <CardContent className="p-4 space-y-3">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full"
                              onClick={() => window.open(company.plans[0].brochure)}
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Brochure
                            </Button>
                            <ExpertAdviceButton
                              size="sm"
                              className="w-full"
                              defaultInterest={`${company.company} - ${company.plans[0].name}`}
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

              {/* Education Section */}
              <Card className="bg-blue-50 border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="w-5 h-5 text-blue-600" />
                    How to Choose the Best Term Insurance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">✅ What to Look For</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Claim settlement ratio &gt; 97%</li>
                        <li>• Online approval &lt; 1 day</li>
                        <li>• Critical illness rider available</li>
                        <li>• Accidental death benefit</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">⏰ Quick Tips</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Cover = 10-15x annual income</li>
                        <li>• Term = 30-40 years</li>
                        <li>• Buy young for lower premiums</li>
                        <li>• No waiting period if healthy</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Health Insurance Tab */}
            <TabsContent value="health" className="space-y-8">
              {/* Selection Controls */}
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">Best Health Insurance Plans 2025</h3>
                      <p className="text-sm text-muted-foreground">For family of 4, age 30-60, ₹5-10 Lakh coverage</p>
                    </div>
                    <Select onValueChange={addHealthCompany} value="">
                      <SelectTrigger className="w-[250px]">
                        <SelectValue placeholder="+ Add company to compare" />
                      </SelectTrigger>
                      <SelectContent>
                        {HEALTH_INSURANCE_COMPANIES.filter((c) => !selectedHealthCompanies.includes(c.id)).map((company) => (
                          <SelectItem key={company.id} value={company.id}>
                            {company.logo} {company.company}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Company Selection Display */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {healthCompanies.map((company) => (
                  <Card key={company.id} className="relative border-red-500">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-6 w-6"
                      onClick={() => removeHealthCompany(company.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <CardContent className="p-4">
                      <div className="text-3xl mb-2">{company.logo}</div>
                      <h3 className="font-bold text-lg mb-2">{company.company}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Est.</span>
                          <span className="font-semibold">{company.established}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Settlement</span>
                          <Badge variant="outline" className="bg-red-50">{company.claimSettlement}%</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Comparison Table */}
              {healthCompanies.length > 0 && (
                <div className="overflow-x-auto">
                  <div className="min-w-[900px] space-y-4">
                    {/* Plan Names */}
                    <div className="grid gap-3" style={{ gridTemplateColumns: `250px repeat(${healthCompanies.length}, 1fr)` }}>
                      <div className="font-bold p-4 bg-muted rounded-lg sticky left-0 z-10">Company & Plan</div>
                      {healthCompanies.map((company) => (
                        <Card key={company.id} className="col-span-1">
                          <CardContent className="p-4">
                            <p className="font-semibold text-sm">{company.plans[0].name}</p>
                            <div className="flex items-center gap-2 mt-3">
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} className={`text-lg ${i < Math.floor(company.plans[0].rating) ? "⭐" : "☆"}`} />
                                ))}
                              </div>
                              <span className="text-xs font-semibold">{company.plans[0].rating}/5</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}

                      {/* Premium */}
                      <div className="font-bold p-4 bg-muted rounded-lg sticky left-0 z-10">Annual Premium</div>
                      {healthCompanies.map((company) => (
                        <Card key={company.id} className="col-span-1">
                          <CardContent className="p-4">
                            <p className="text-xl font-bold text-red-600">{company.plans[0].premium}</p>
                            <p className="text-xs text-muted-foreground mt-2">Individual plan</p>
                          </CardContent>
                        </Card>
                      ))}

                      {/* Coverage */}
                      <div className="font-bold p-4 bg-muted rounded-lg sticky left-0 z-10">Sum Insured</div>
                      {healthCompanies.map((company) => (
                        <Card key={company.id} className="col-span-1">
                          <CardContent className="p-4">
                            <p className="font-semibold">{company.plans[0].coverage}</p>
                          </CardContent>
                        </Card>
                      ))}

                      {/* Room Rent */}
                      <div className="font-bold p-4 bg-muted rounded-lg sticky left-0 z-10">Room Rent Limit</div>
                      {healthCompanies.map((company) => (
                        <Card key={company.id} className="col-span-1">
                          <CardContent className="p-4">
                            <p className="font-semibold text-sm">{company.plans[0].roomRent}</p>
                          </CardContent>
                        </Card>
                      ))}

                      {/* Network */}
                      <div className="font-bold p-4 bg-muted rounded-lg sticky left-0 z-10">Hospital Network</div>
                      {healthCompanies.map((company) => (
                        <Card key={company.id} className="col-span-1">
                          <CardContent className="p-4">
                            <p className="font-bold text-sm text-blue-600">{company.plans[0].network}</p>
                          </CardContent>
                        </Card>
                      ))}

                      {/* Key Features */}
                      <div className="font-bold p-4 bg-muted rounded-lg sticky left-0 z-10">Key Features</div>
                      {healthCompanies.map((company) => (
                        <Card key={company.id} className="col-span-1">
                          <CardContent className="p-4">
                            <ul className="space-y-2 text-sm">
                              {company.plans[0].features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}

                      {/* Why Choose */}
                      <div className="font-bold p-4 bg-muted rounded-lg sticky left-0 z-10">Why Choose?</div>
                      {healthCompanies.map((company) => (
                        <Card key={company.id} className="col-span-1">
                          <CardContent className="p-4">
                            <ul className="space-y-2 text-sm">
                              {company.plans[0].advantages.map((adv, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <TrendingUp className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                  <span>{adv}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}

                      {/* Download Brochure & Get Quote */}
                      <div className="p-4"></div>
                      {healthCompanies.map((company) => (
                        <Card key={company.id} className="col-span-1">
                          <CardContent className="p-4 space-y-3">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full"
                              onClick={() => window.open(company.plans[0].brochure)}
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Brochure
                            </Button>
                            <ExpertAdviceButton
                              size="sm"
                              className="w-full"
                              defaultInterest={`${company.company} - ${company.plans[0].name}`}
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

              {/* Education Section */}
              <Card className="bg-red-50 border-red-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="w-5 h-5 text-red-600" />
                    How to Choose the Best Health Insurance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">✅ Critical Features</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• No room rent capping (or unlimited)</li>
                        <li>• Settlement ratio &gt; 94%</li>
                        <li>• Pre-post hospitalization 60+ days</li>
                        <li>• Maternity &amp; OPD optional</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">⏰ Planning Tips</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Family = ₹15-25L coverage</li>
                        <li>• Consider waiting period</li>
                        <li>• Check network hospitals nearby</li>
                        <li>• Add super top-up for extra cover</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get personalized recommendations from our insurance experts. We'll analyze your needs and suggest the best plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ExpertAdviceButton size="lg">Get Free Expert Recommendation</ExpertAdviceButton>
              <Button asChild variant="outline" size="lg">
                <a href="/policy-check">Audit Existing Policies</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
