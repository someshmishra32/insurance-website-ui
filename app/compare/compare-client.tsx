"use client"

import { useState, useMemo, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Plus, X, Download, Filter, TrendingUp, ChevronDown, Star, Clock, Zap, MapPin } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { InsuranceProductFlat } from "@/lib/strapi-api"

interface CompareClientProps {
    initialProducts: InsuranceProductFlat[]
}

// Helper Interface to match existing UI structure
interface UICompany {
    id: string
    company: string
    logo: string
    type: string
    established: number
    claimSettlement: number
    avgApprovalTime: string
    premiumRange: string
    coverage: string
    taxBenefit: string
    hospitalNetwork: number
    plans: any[]
}

export function CompareClient({ initialProducts }: CompareClientProps) {
    const [activeTab, setActiveTab] = useState("term")
    const [selectedCompanies, setSelectedCompanies] = useState<string[]>([])
    const [sortBy, setSortBy] = useState("premium-low")
    const [premiumFilter, setPremiumFilter] = useState("all")
    const [settlementFilter, setSettlementFilter] = useState("all")
    const [showFilters, setShowFilters] = useState(false)

    // Premium Calculator State
    const [showCalculator, setShowCalculator] = useState(false)
    const [calculatorAge, setCalculatorAge] = useState("30")
    const [calculatorCoverage, setCalculatorCoverage] = useState("1000000")
    const [calculatorTerm, setCalculatorTerm] = useState("30")
    const [calculatorHealth, setCalculatorHealth] = useState("true")

    // Transform flat products to UI Company structure
    const insuranceCompanies = useMemo(() => {
        const companiesMap = new Map<string, UICompany>()

        initialProducts.forEach(product => {
            // Use company name as ID for grouping if no explicit ID
            const companyId = product.companyName.toLowerCase().replace(/\s+/g, '-')

            if (!companiesMap.has(companyId)) {
                companiesMap.set(companyId, {
                    id: companyId,
                    company: product.companyName,
                    logo: product.companyLogo,
                    type: product.type, // Assuming 1 type per company for simple grouping, or derived
                    established: product.established,
                    claimSettlement: product.claimSettlement,
                    avgApprovalTime: product.avgApprovalTime,
                    premiumRange: "Varies", // Could calculate min-max
                    coverage: product.coverage,
                    taxBenefit: product.type === 'term' ? "80C - ₹1.5L/year" : "80D - ₹15,000/year",
                    hospitalNetwork: product.hospitalNetwork,
                    plans: []
                })
            }

            const company = companiesMap.get(companyId)!
            // Override company type if we find a product of the current active tab type? 
            // Actually, standard lists often mix. We'll filter by product type later.

            company.plans.push({
                id: product.id,
                name: product.name,
                premium: product.premium, // assumed string w/ currency format
                coverage: product.coverage,
                features: product.features,
                advantages: product.advantages,
                rating: product.rating,
                medicalExam: product.medicalExam,
                waitingPeriod: product.waitingPeriod,
                type: product.type
            })
        })

        return Array.from(companiesMap.values())
    }, [initialProducts])

    // Filter companies by type
    const filteredCompanies = useMemo(() => {
        // We filter companies that HAVE a plan of the active type
        let companies = insuranceCompanies.filter(c => c.plans.some((p: any) => p.type === activeTab))
            .map(c => ({
                ...c,
                // Only show plans of the active type
                plans: c.plans.filter((p: any) => p.type === activeTab)
            }))

        // Apply sorting
        if (sortBy === "premium-low") {
            companies.sort((a, b) => {
                const premA = parseInt(a.plans[0]?.premium.replace(/[^\d]/g, '') || '0')
                const premB = parseInt(b.plans[0]?.premium.replace(/[^\d]/g, '') || '0')
                return premA - premB
            })
        } else if (sortBy === "premium-high") {
            companies.sort((a, b) => {
                const premA = parseInt(a.plans[0]?.premium.replace(/[^\d]/g, '') || '0')
                const premB = parseInt(b.plans[0]?.premium.replace(/[^\d]/g, '') || '0')
                return premB - premA
            })
        } else if (sortBy === "settlement") {
            companies.sort((a, b) => b.claimSettlement - a.claimSettlement)
        } else if (sortBy === "rating") {
            companies.sort((a, b) => (b.plans[0]?.rating || 0) - (a.plans[0]?.rating || 0))
        }

        // Apply filters
        if (premiumFilter !== "all") {
            companies = companies.filter(c => {
                const prem = parseInt(c.plans[0]?.premium.replace(/[^\d]/g, '') || '0')
                if (premiumFilter === "under-10000") return prem < 10000
                if (premiumFilter === "10000-20000") return prem >= 10000 && prem < 20000
                if (premiumFilter === "above-20000") return prem >= 20000
                return true
            })
        }

        if (settlementFilter !== "all") {
            companies = companies.filter(c => {
                if (settlementFilter === "above-98") return c.claimSettlement >= 98
                if (settlementFilter === "above-96") return c.claimSettlement >= 96
                return true
            })
        }

        return companies
    }, [activeTab, sortBy, premiumFilter, settlementFilter, insuranceCompanies])

    const selectedCompanyDetails = useMemo(() => {
        return insuranceCompanies.filter(c => selectedCompanies.includes(c.id))
            // Ensure we include the correct plan subset for display in report
            .map(c => ({
                ...c,
                plans: c.plans.filter((p: any) => p.type === activeTab)
            }))
    }, [selectedCompanies, insuranceCompanies, activeTab])

    const addCompany = (id: string) => {
        if (!selectedCompanies.includes(id)) {
            setSelectedCompanies([...selectedCompanies, id])
        }
    }

    const removeCompany = (id: string) => {
        setSelectedCompanies(selectedCompanies.filter(c => c !== id))
    }

    const clearAll = () => {
        setSelectedCompanies([])
    }

    // Premium Calculator Constants
    const CALCULATOR_CONSTANTS = {
        TERM_BASE_RATE: 0.008,
        HEALTH_BASE_RATE: 0.005,
    }

    // Premium Calculator Logic
    const calculateEstimatedPremium = () => {
        try {
            const age = parseInt(calculatorAge, 10)
            const coverage = parseInt(calculatorCoverage, 10)
            const term = parseInt(calculatorTerm, 10)

            if (isNaN(age) || isNaN(coverage) || isNaN(term)) {
                return 0
            }

            const baseRate = activeTab === "term" ? CALCULATOR_CONSTANTS.TERM_BASE_RATE : CALCULATOR_CONSTANTS.HEALTH_BASE_RATE
            const ageFactor = age < 30 ? 0.8 : age < 40 ? 1 : age < 50 ? 1.3 : 1.8
            const termFactor = term <= 10 ? 0.8 : term <= 20 ? 1 : 1.2

            const estimatedPremium = Math.round(coverage * baseRate * ageFactor * termFactor)
            return Math.max(0, estimatedPremium)
        } catch (error) {
            console.error('Premium calculation error:', error)
            return 0
        }
    }

    const estimatedPremium = calculateEstimatedPremium()

    // Generate Comparison Report
    const generateComparisonReport = () => {
        const companies = selectedCompanyDetails
        if (companies.length === 0) {
            console.warn("Please select at least 2 companies to compare")
            return
        }

        let report = `INSURANCE COMPARISON REPORT\n`
        report += `Generated on: ${new Date().toLocaleDateString()}\n`
        report += `Insurance Type: ${activeTab === "term" ? "Term Insurance" : "Health Insurance"}\n\n`
        report += `SELECTED COMPANIES FOR COMPARISON:\n`
        report += `${"=".repeat(80)}\n\n`

        companies.forEach((company, idx) => {
            const plan = company.plans[0]
            if (!plan) return

            report += `${idx + 1}. ${company.company}\n`
            report += `   Company Details:\n`
            report += `   - Established: ${company.established}\n`
            report += `   - Claim Settlement Ratio: ${company.claimSettlement}%\n`
            report += `   - Average Approval Time: ${company.avgApprovalTime}\n`
            report += `   - Hospital Network: ${company.hospitalNetwork}+\n\n`
            report += `   Plan: ${plan.name}\n`
            report += `   - Annual Premium: ${plan.premium}\n`
            report += `   - Coverage: ${plan.coverage}\n`
            report += `   - Rating: ${plan.rating}/5\n`
            report += `   - Medical Exam: ${plan.medicalExam}\n`
            report += `   - Waiting Period: ${plan.waitingPeriod}\n`
            report += `   - Key Features:\n`
            plan.features?.forEach((f: string) => report += `     • ${f}\n`) || ''
            report += `   - Why Choose:\n`
            plan.advantages?.forEach((a: string) => report += `     • ${a}\n`) || ''
            report += `\n`
        })

        report += `\n${"=".repeat(80)}\n`
        report += `COMPARISON SUMMARY:\n`
        report += `${"=".repeat(80)}\n\n`

        // Sort logic for summary

        report += `\nDISCLAIMER:\n`
        report += `Insurance is subject to terms and conditions. This comparison is for informational purposes only.\n`
        report += `Please consult with an insurance expert before making a purchase decision.\n\n`
        report += `© 2025 Life Cover Now. All rights reserved.\n`

        try {
            const file = new Blob([report], { type: "text/plain" })
            const url = URL.createObjectURL(file)
            const element = document.createElement("a")
            element.href = url
            element.download = `insurance-comparison-report-${new Date().toISOString().split('T')[0]}.txt`
            document.body.appendChild(element)
            element.click()
            document.body.removeChild(element)
            setTimeout(() => {
                URL.revokeObjectURL(url)
            }, 100)
        } catch (error) {
            console.error('Error generating report:', error)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

            {/* Hero Section */}
            <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-3">Smart Insurance Comparison</h1>
                    <p className="text-xl opacity-90">Compare plans from India's top insurers in real-time</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
                            <p className="text-3xl font-bold">14+</p>
                            <p className="text-sm opacity-80">Top Insurers</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
                            <p className="text-3xl font-bold">50K+</p>
                            <p className="text-sm opacity-80">Hospitals</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
                            <p className="text-3xl font-bold">95%+</p>
                            <p className="text-sm opacity-80">Settlement Ratio</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
                            <p className="text-3xl font-bold">100%</p>
                            <p className="text-sm opacity-80">Transparent</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    {/* Premium Calculator */}
                    <div className="mb-12">
                        <button
                            onClick={() => setShowCalculator(!showCalculator)}
                            className="w-full text-left"
                        >
                            <Card className={`cursor-pointer transition-all border-2 ${showCalculator ? 'border-blue-500 bg-blue-50' : 'border-slate-200'}`}>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="text-3xl">🧮</div>
                                            <div>
                                                <CardTitle>Premium Calculator</CardTitle>
                                                <p className="text-sm text-slate-500">Estimate your insurance premium based on your profile</p>
                                            </div>
                                        </div>
                                        <ChevronDown className={`w-6 h-6 transition-transform ${showCalculator ? 'rotate-180' : ''}`} />
                                    </div>
                                </CardHeader>
                            </Card>
                        </button>

                        {showCalculator && (
                            <Card className="mt-4 border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50">
                                <CardContent className="pt-6">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                                        {/* Age Input */}
                                        <div>
                                            <label className="text-sm font-semibold mb-3 block">Your Age</label>
                                            <Input
                                                type="number"
                                                min="18"
                                                max="70"
                                                value={calculatorAge}
                                                onChange={(e) => setCalculatorAge(e.target.value)}
                                                className="w-full"
                                                placeholder="30"
                                            />
                                            <p className="text-xs text-slate-500 mt-2">{calculatorAge} years old</p>
                                        </div>

                                        {/* Coverage Input */}
                                        <div>
                                            <label className="text-sm font-semibold mb-3 block">Coverage Amount</label>
                                            <Select value={calculatorCoverage} onValueChange={setCalculatorCoverage}>
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="500000">₹50 Lakh</SelectItem>
                                                    <SelectItem value="1000000">₹1 Crore</SelectItem>
                                                    <SelectItem value="1500000">₹1.5 Crore</SelectItem>
                                                    <SelectItem value="2000000">₹2 Crore</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* Term Input */}
                                        <div>
                                            <label className="text-sm font-semibold mb-3 block">Policy Term</label>
                                            <Select value={calculatorTerm} onValueChange={setCalculatorTerm}>
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="10">10 Years</SelectItem>
                                                    <SelectItem value="20">20 Years</SelectItem>
                                                    <SelectItem value="30">30 Years</SelectItem>
                                                    <SelectItem value="40">40 Years</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* Smoking Status */}
                                        <div>
                                            <label className="text-sm font-semibold mb-3 block">Health Status</label>
                                            <Select value={calculatorHealth} onValueChange={setCalculatorHealth}>
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="true">Non-Smoker (Good Health)</SelectItem>
                                                    <SelectItem value="false">Smoker / Pre-existing</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    {/* Result */}
                                    <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="text-center">
                                                <p className="text-sm text-slate-600 mb-2">Estimated Annual Premium</p>
                                                <p className="text-4xl font-bold text-blue-600">₹{estimatedPremium.toLocaleString()}</p>
                                            </div>
                                            <div className="text-center border-l">
                                                <p className="text-sm text-slate-600 mb-2">Monthly Cost</p>
                                                <p className="text-3xl font-bold text-green-600">₹{Math.round(estimatedPremium / 12).toLocaleString()}</p>
                                            </div>
                                            <div className="text-center border-l">
                                                <p className="text-sm text-slate-600 mb-2">Total Premium ({calculatorTerm} years)</p>
                                                <p className="text-3xl font-bold text-indigo-600">₹{(estimatedPremium * parseInt(calculatorTerm, 10)).toLocaleString()}</p>
                                            </div>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-4 italic">
                                            ⓘ This is an estimated premium. Actual premium may vary based on medical examination and underwriting.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Tabs */}
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
                        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                            <TabsTrigger value="term" className="text-base">
                                🛡️ Term Insurance
                            </TabsTrigger>
                            <TabsTrigger value="health" className="text-base">
                                ❤️ Health Insurance
                            </TabsTrigger>
                        </TabsList>

                        {/* Filter and Controls */}
                        <div className="mb-8 space-y-4">
                            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                                <div className="flex gap-2">
                                    <Button
                                        variant={showFilters ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setShowFilters(!showFilters)}
                                        className="gap-2"
                                    >
                                        <Filter className="w-4 h-4" />
                                        Filters
                                    </Button>
                                    {selectedCompanies.length > 0 && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={clearAll}
                                            className="gap-2"
                                        >
                                            <X className="w-4 h-4" />
                                            Clear All
                                        </Button>
                                    )}
                                </div>

                                <div className="flex gap-2">
                                    <Select value={sortBy} onValueChange={setSortBy}>
                                        <SelectTrigger className="w-48">
                                            <SelectValue placeholder="Sort by" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="premium-low">Lowest Premium</SelectItem>
                                            <SelectItem value="premium-high">Highest Premium</SelectItem>
                                            <SelectItem value="settlement">Best Settlement</SelectItem>
                                            <SelectItem value="rating">Best Rating</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Advanced Filters */}
                            {showFilters && (
                                <Card className="bg-gradient-to-r from-blue-50 to-slate-50">
                                    <CardContent className="p-6">
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div>
                                                <label className="text-sm font-semibold mb-3 block">Premium Range</label>
                                                <Select value={premiumFilter} onValueChange={setPremiumFilter}>
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="all">All Premiums</SelectItem>
                                                        <SelectItem value="under-10000">Under ₹10,000</SelectItem>
                                                        <SelectItem value="10000-20000">₹10,000 - ₹20,000</SelectItem>
                                                        <SelectItem value="above-20000">Above ₹20,000</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div>
                                                <label className="text-sm font-semibold mb-3 block">Claim Settlement</label>
                                                <Select value={settlementFilter} onValueChange={setSettlementFilter}>
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="all">All Companies</SelectItem>
                                                        <SelectItem value="above-98">Above 98%</SelectItem>
                                                        <SelectItem value="above-96">Above 96%</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="flex items-end">
                                                <Button
                                                    variant="outline"
                                                    className="w-full"
                                                    onClick={() => {
                                                        setPremiumFilter("all")
                                                        setSettlementFilter("all")
                                                    }}
                                                >
                                                    Reset Filters
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>

                        {/* Companies List */}
                        <TabsContent value={activeTab} className="space-y-4">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {filteredCompanies.map((company) => {
                                    const isSelected = selectedCompanies.includes(company.id)
                                    const plan = company.plans[0]

                                    return (
                                        <Card
                                            key={company.id}
                                            className={`cursor-pointer transition-all border-2 ${isSelected
                                                ? "border-blue-500 bg-blue-50"
                                                : "border-slate-200 hover:border-blue-300"
                                                }`}
                                            onClick={() => {
                                                if (isSelected) {
                                                    removeCompany(company.id)
                                                } else {
                                                    addCompany(company.id)
                                                }
                                            }}
                                        >
                                            <CardHeader className="pb-3">
                                                <div className="flex items-start justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="text-4xl">{company.logo}</div>
                                                        <div>
                                                            <CardTitle className="text-lg">{company.company}</CardTitle>
                                                            <p className="text-xs text-slate-500">Est. {company.established}</p>
                                                        </div>
                                                    </div>
                                                    <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${isSelected ? 'bg-blue-500 border-blue-500' : 'border-slate-300'}`}>
                                                        {isSelected && <Check className="w-4 h-4 text-white" />}
                                                    </div>
                                                </div>
                                            </CardHeader>

                                            <CardContent className="space-y-4">
                                                {/* Key Metrics */}
                                                <div className="grid grid-cols-2 gap-2 text-sm">
                                                    <div className="p-2 bg-slate-50 rounded">
                                                        <p className="text-slate-600 text-xs">Settlement</p>
                                                        <p className="font-bold text-green-600">{company.claimSettlement}%</p>
                                                    </div>
                                                    <div className="p-2 bg-slate-50 rounded">
                                                        <p className="text-slate-600 text-xs">Approval Time</p>
                                                        <p className="font-bold text-blue-600">{company.avgApprovalTime}</p>
                                                    </div>
                                                </div>

                                                {/* Premium */}
                                                <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-3 rounded-lg">
                                                    <p className="text-xs text-slate-600 mb-1">Starting Premium</p>
                                                    <p className="text-2xl font-bold text-blue-600">{plan?.premium || 'N/A'}</p>
                                                </div>

                                                {/* Coverage */}
                                                <div>
                                                    <p className="text-xs text-slate-600 mb-1">Coverage</p>
                                                    <p className="font-semibold text-sm">{company.coverage}</p>
                                                </div>

                                                {/* Rating */}
                                                {plan?.rating && (
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex gap-0.5">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    className={`w-3.5 h-3.5 ${i < Math.floor(plan.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-300"
                                                                        }`}
                                                                />
                                                            ))}
                                                        </div>
                                                        <span className="text-sm font-semibold">{plan.rating}/5</span>
                                                    </div>
                                                )}

                                                {/* Quick Features */}
                                                <div className="space-y-1 pt-2 border-t">
                                                    {activeTab === "term" && (
                                                        <>
                                                            <div className="flex items-center gap-2 text-xs">
                                                                <Zap className="w-3.5 h-3.5 text-blue-600" />
                                                                <span>Medical Exam: {plan?.medicalExam || 'Varies'}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-xs">
                                                                <Clock className="w-3.5 h-3.5 text-blue-600" />
                                                                <span>Waiting Period: {plan?.waitingPeriod || 'Varies'}</span>
                                                            </div>
                                                        </>
                                                    )}
                                                    {activeTab === "health" && (
                                                        <>
                                                            <div className="flex items-center gap-2 text-xs">
                                                                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                                                                <span>{company.hospitalNetwork.toLocaleString()} Hospitals</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-xs">
                                                                <Clock className="w-3.5 h-3.5 text-blue-600" />
                                                                <span>Waiting: {plan?.waitingPeriod || 'Varies'}</span>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>

                                                {/* Action Button */}
                                                <Button
                                                    className="w-full mt-2"
                                                    variant={isSelected ? "default" : "outline"}
                                                    size="sm"
                                                >
                                                    {isSelected ? (
                                                        <>
                                                            <Check className="w-4 h-4 mr-2" />
                                                            Selected
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Plus className="w-4 h-4 mr-2" />
                                                            Compare
                                                        </>
                                                    )}
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    )
                                })}
                            </div>

                            {filteredCompanies.length === 0 && (
                                <Card className="border-slate-200">
                                    <CardContent className="p-12 text-center">
                                        <Filter className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                        <h3 className="text-lg font-semibold mb-2">No plans match your filters</h3>
                                        <p className="text-slate-600 mb-4">Try adjusting your filter criteria</p>
                                        <Button
                                            variant="outline"
                                            onClick={() => {
                                                setPremiumFilter("all")
                                                setSettlementFilter("all")
                                                setShowFilters(false)
                                            }}
                                        >
                                            Clear Filters
                                        </Button>
                                    </CardContent>
                                </Card>
                            )}
                        </TabsContent>
                    </Tabs>

                    {/* Comparison Table */}
                    {selectedCompanies.length > 0 && (
                        <div className="mt-12">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-3xl font-bold">Detailed Comparison</h2>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="gap-2"
                                        onClick={generateComparisonReport}
                                    >
                                        <Download className="w-4 h-4" />
                                        Export Report
                                    </Button>
                                    <Button variant="outline" size="sm" className="gap-2">
                                        <TrendingUp className="w-4 h-4" />
                                        Print Comparison
                                    </Button>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-slate-100 to-slate-50">
                                            <th className="sticky left-0 bg-gradient-to-r from-slate-100 to-slate-50 border p-4 text-left font-semibold text-sm z-10">
                                                Feature
                                            </th>
                                            {selectedCompanyDetails.map((company, idx) => (
                                                <th key={idx} className="border p-4 text-left font-semibold text-sm min-w-[200px]">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-2xl">{company.logo}</span>
                                                        {company.company}
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="sticky left-0 bg-slate-50 border p-4 font-medium text-sm">Annual Premium</td>
                                            {selectedCompanyDetails.map((company, idx) => (
                                                <td key={idx} className="border p-4 text-sm font-bold text-blue-600">
                                                    {company.plans[0]?.premium}
                                                </td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td className="sticky left-0 bg-slate-50 border p-4 font-medium text-sm">Claim Settlement</td>
                                            {selectedCompanyDetails.map((company, idx) => (
                                                <td key={idx} className="border p-4 text-sm text-green-600 font-bold">
                                                    {company.claimSettlement}%
                                                </td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td className="sticky left-0 bg-slate-50 border p-4 font-medium text-sm">Coverage</td>
                                            {selectedCompanyDetails.map((company, idx) => (
                                                <td key={idx} className="border p-4 text-sm">
                                                    {company.coverage}
                                                </td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td className="sticky left-0 bg-slate-50 border p-4 font-medium text-sm">Hospital Network</td>
                                            {selectedCompanyDetails.map((company, idx) => (
                                                <td key={idx} className="border p-4 text-sm">
                                                    {company.hospitalNetwork.toLocaleString()}+
                                                </td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td className="sticky left-0 bg-slate-50 border p-4 font-medium text-sm">Key Features</td>
                                            {selectedCompanyDetails.map((company, idx) => (
                                                <td key={idx} className="border p-4 text-sm align-top">
                                                    <ul className="list-disc pl-4 space-y-1">
                                                        {company.plans[0]?.features.map((f: string, i: number) => (
                                                            <li key={i}>{f}</li>
                                                        ))}
                                                    </ul>
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
