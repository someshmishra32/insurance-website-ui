"use client"

import { useState, useMemo } from "react"
import { PiggyBank, Zap, TrendingUp, AlertCircle, IndianRupee, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { motion } from "framer-motion"
import { ScheduleCallButton } from "@/components/schedule-call-button"

export function EnhancedCalculator() {
  const [formData, setFormData] = useState({
    currentAge: 30,
    retirementAge: 60,
    monthlyIncome: 100000,
    desiredPension: 50000,
    existingSavings: 500000,
    expectedReturn: 10,
    inflationRate: 6,
  })

  // Real-time pension calculation
  const result = useMemo(() => {
    const yearsToRetire = formData.retirementAge - formData.currentAge
    const postRetirementYears = 80 - formData.retirementAge // Life expectancy 80
    const monthlyReturn = formData.expectedReturn / 100 / 12
    const annualReturn = formData.expectedReturn / 100
    const annualInflation = formData.inflationRate / 100

    if (yearsToRetire <= 0 || postRetirementYears <= 0) {
      return null
    }

    // Inflation-adjusted monthly pension at retirement
    const inflationAdjustedPension = formData.desiredPension * Math.pow(1 + annualInflation, yearsToRetire)

    // Required corpus at retirement using annuity formula
    // Corpus = Monthly Pension × 12 × ((1 - (1+realReturn)^-n) / realReturn)
    // where realReturn = (return - inflation) / (1 + inflation) 
    const postRetirementReturn = 0.07 // Conservative 7% during retirement
    const realReturnRate = (postRetirementReturn - annualInflation) / (1 + annualInflation)
    const monthlyRealReturn = realReturnRate / 12

    let requiredCorpus: number
    if (monthlyRealReturn <= 0) {
      // If real return is zero or negative, simple multiplication
      requiredCorpus = inflationAdjustedPension * 12 * postRetirementYears
    } else {
      // Present value of annuity formula
      requiredCorpus = inflationAdjustedPension * 12 *
        ((1 - Math.pow(1 + realReturnRate, -postRetirementYears)) / realReturnRate)
    }

    // Growth of existing savings by retirement
    const existingSavingsGrown = formData.existingSavings * Math.pow(1 + annualReturn, yearsToRetire)

    // Gap to be filled
    const gap = Math.max(requiredCorpus - existingSavingsGrown, 0)

    // Monthly SIP needed using future value of annuity
    // FV = PMT × ((1+r)^n - 1) / r
    // PMT = FV × r / ((1+r)^n - 1)
    let monthlySIP = 0
    if (monthlyReturn > 0 && yearsToRetire > 0) {
      const totalMonths = yearsToRetire * 12
      monthlySIP = gap * monthlyReturn / (Math.pow(1 + monthlyReturn, totalMonths) - 1)
    }

    return {
      requiredCorpus: Math.round(requiredCorpus),
      existingSavingsGrown: Math.round(existingSavingsGrown),
      gap: Math.round(gap),
      monthlySIP: Math.round(monthlySIP),
      inflationAdjustedPension: Math.round(inflationAdjustedPension),
      yearsToRetire,
      postRetirementYears,
    }
  }, [formData])

  // Format currency
  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)} L`
    return `₹${amount.toLocaleString("en-IN")}`
  }

  // Presets
  const presets = [
    {
      label: "Young Starter (25-30)",
      icon: TrendingUp,
      values: { currentAge: 28, retirementAge: 60, monthlyIncome: 60000, desiredPension: 40000, existingSavings: 100000, expectedReturn: 12, inflationRate: 6 },
    },
    {
      label: "Mid-Career (35-45)",
      icon: PiggyBank,
      values: { currentAge: 40, retirementAge: 60, monthlyIncome: 150000, desiredPension: 75000, existingSavings: 2000000, expectedReturn: 10, inflationRate: 6 },
    },
    {
      label: "Pre-Retirement (50+)",
      icon: Calendar,
      values: { currentAge: 52, retirementAge: 60, monthlyIncome: 200000, desiredPension: 100000, existingSavings: 5000000, expectedReturn: 8, inflationRate: 6 },
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PiggyBank className="h-5 w-5" />
          Smart Pension Calculator
        </CardTitle>
        <CardDescription>Calculate how much you need to save for a comfortable retirement</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Presets */}
        <div>
          <Label className="mb-3 block text-sm font-semibold">Quick Presets</Label>
          <div className="grid gap-2 sm:grid-cols-3">
            {presets.map((preset) => {
              const Icon = preset.icon
              return (
                <motion.button
                  key={preset.label}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFormData((prev) => ({ ...prev, ...preset.values }))}
                  className="flex items-center gap-2 rounded-lg border border-muted bg-muted/50 p-3 text-left text-sm hover:bg-muted transition-colors"
                >
                  <Icon className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-xs">{preset.label}</span>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Sliders */}
        <div className="space-y-4">
          {/* Current Age */}
          <div className="space-y-3 rounded-lg border border-muted p-4">
            <div className="flex items-center justify-between">
              <Label className="font-semibold">Current Age</Label>
              <motion.span key={formData.currentAge} initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-lg font-bold text-primary">
                {formData.currentAge} years
              </motion.span>
            </div>
            <Slider value={[formData.currentAge]} onValueChange={(val) => setFormData({ ...formData, currentAge: val[0] })} min={18} max={60} step={1} className="w-full" />
            <div className="flex justify-between text-xs text-muted-foreground"><span>18</span><span>60</span></div>
          </div>

          {/* Retirement Age */}
          <div className="space-y-3 rounded-lg border border-muted p-4">
            <div className="flex items-center justify-between">
              <Label className="font-semibold">Retirement Age</Label>
              <motion.span key={formData.retirementAge} initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-lg font-bold text-primary">
                {formData.retirementAge} years
              </motion.span>
            </div>
            <Slider value={[formData.retirementAge]} onValueChange={(val) => setFormData({ ...formData, retirementAge: val[0] })} min={45} max={75} step={1} className="w-full" />
            <div className="flex justify-between text-xs text-muted-foreground"><span>45</span><span>75</span></div>
          </div>

          {/* Monthly Income */}
          <div className="space-y-3 rounded-lg border border-muted p-4">
            <div className="flex items-center justify-between">
              <Label className="font-semibold">Current Monthly Income</Label>
              <motion.span key={formData.monthlyIncome} initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-lg font-bold text-primary">
                ₹{(formData.monthlyIncome / 1000).toFixed(0)}K
              </motion.span>
            </div>
            <Slider value={[formData.monthlyIncome]} onValueChange={(val) => setFormData({ ...formData, monthlyIncome: val[0] })} min={20000} max={500000} step={5000} className="w-full" />
            <div className="flex justify-between text-xs text-muted-foreground"><span>₹20K</span><span>₹5L</span></div>
          </div>

          {/* Desired Monthly Pension */}
          <div className="space-y-3 rounded-lg border border-muted p-4">
            <div className="flex items-center justify-between">
              <Label className="font-semibold">Desired Monthly Pension (today&apos;s value)</Label>
              <motion.span key={formData.desiredPension} initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-lg font-bold text-primary">
                ₹{(formData.desiredPension / 1000).toFixed(0)}K
              </motion.span>
            </div>
            <Slider value={[formData.desiredPension]} onValueChange={(val) => setFormData({ ...formData, desiredPension: val[0] })} min={10000} max={300000} step={5000} className="w-full" />
            <div className="flex justify-between text-xs text-muted-foreground"><span>₹10K</span><span>₹3L</span></div>
          </div>

          {/* Existing Retirement Savings */}
          <div className="space-y-3 rounded-lg border border-muted p-4">
            <div className="flex items-center justify-between">
              <Label className="font-semibold">Existing Retirement Savings</Label>
              <motion.span key={formData.existingSavings} initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-lg font-bold text-primary">
                {formatCurrency(formData.existingSavings)}
              </motion.span>
            </div>
            <Slider value={[formData.existingSavings]} onValueChange={(val) => setFormData({ ...formData, existingSavings: val[0] })} min={0} max={50000000} step={100000} className="w-full" />
            <div className="flex justify-between text-xs text-muted-foreground"><span>₹0</span><span>₹5Cr</span></div>
            <p className="text-xs text-muted-foreground">EPF, PPF, NPS, FDs, Mutual Funds, etc.</p>
          </div>

          {/* Expected Return Rate */}
          <div className="space-y-3 rounded-lg border border-muted p-4">
            <div className="flex items-center justify-between">
              <Label className="font-semibold">Expected Investment Return</Label>
              <motion.span key={formData.expectedReturn} initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-lg font-bold text-primary">
                {formData.expectedReturn}% p.a.
              </motion.span>
            </div>
            <Slider value={[formData.expectedReturn]} onValueChange={(val) => setFormData({ ...formData, expectedReturn: val[0] })} min={6} max={15} step={0.5} className="w-full" />
            <div className="flex justify-between text-xs text-muted-foreground"><span>6% (Conservative)</span><span>15% (Aggressive)</span></div>
          </div>

          {/* Inflation Rate */}
          <div className="space-y-3 rounded-lg border border-muted p-4">
            <div className="flex items-center justify-between">
              <Label className="font-semibold">Expected Inflation Rate</Label>
              <motion.span key={formData.inflationRate} initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-lg font-bold text-primary">
                {formData.inflationRate}% p.a.
              </motion.span>
            </div>
            <Slider value={[formData.inflationRate]} onValueChange={(val) => setFormData({ ...formData, inflationRate: val[0] })} min={4} max={10} step={0.5} className="w-full" />
            <div className="flex justify-between text-xs text-muted-foreground"><span>4%</span><span>10%</span></div>
          </div>
        </div>

        {/* Results */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={`${result.requiredCorpus}-${result.monthlySIP}`}
            className="space-y-4"
          >
            {/* Main Result - Required Corpus */}
            <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-6">
              <p className="mb-2 text-center text-sm font-semibold text-muted-foreground">Required Retirement Corpus</p>
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center">
                <p className="text-3xl font-bold text-primary md:text-4xl">
                  {formatCurrency(result.requiredCorpus)}
                </p>
              </motion.div>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Zap className="h-4 w-4 text-yellow-500" />
                <span>Real-time calculation</span>
              </div>
            </div>

            {/* Monthly SIP */}
            <div className="rounded-lg border border-green-200 bg-green-50 p-5">
              <div className="flex items-center gap-2 mb-2">
                <IndianRupee className="h-5 w-5 text-green-600" />
                <p className="text-sm font-semibold text-green-800">Monthly SIP Needed</p>
              </div>
              <p className="text-2xl font-bold text-green-700">
                {formatCurrency(result.monthlySIP)}
                <span className="text-sm font-normal text-green-600"> /month</span>
              </p>
              <p className="mt-1 text-xs text-green-600">For {result.yearsToRetire} years until retirement</p>
            </div>

            {/* Details Grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-muted bg-muted/30 p-4">
                <p className="text-xs text-muted-foreground mb-1">Pension at Retirement (inflation-adjusted)</p>
                <p className="text-lg font-bold">{formatCurrency(result.inflationAdjustedPension)}<span className="text-xs font-normal text-muted-foreground">/month</span></p>
              </div>
              <div className="rounded-lg border border-muted bg-muted/30 p-4">
                <p className="text-xs text-muted-foreground mb-1">Existing Savings at Retirement</p>
                <p className="text-lg font-bold">{formatCurrency(result.existingSavingsGrown)}</p>
              </div>
              <div className="rounded-lg border border-muted bg-muted/30 p-4">
                <p className="text-xs text-muted-foreground mb-1">Gap to Fill</p>
                <p className="text-lg font-bold">{formatCurrency(result.gap)}</p>
              </div>
              <div className="rounded-lg border border-muted bg-muted/30 p-4">
                <p className="text-xs text-muted-foreground mb-1">Post-Retirement Income Period</p>
                <p className="text-lg font-bold">{result.postRetirementYears} years</p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="space-y-2 text-sm">
              <p className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Returns during retirement assumed at 7% (conservative). Actual returns may vary.</span>
              </p>
              <p className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>This is an estimate. Consult a financial advisor for personalized retirement planning.</span>
              </p>
            </div>
          </motion.div>
        )}

        {!result && (
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-center text-sm text-yellow-700">
            Please ensure retirement age is greater than current age.
          </div>
        )}

        {/* CTA */}
        <ScheduleCallButton className="w-full" size="lg" />
      </CardContent>
    </Card>
  )
}
