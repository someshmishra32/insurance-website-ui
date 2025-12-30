"use client"

import { useState } from "react"
import { Shield, Heart, Users, MapPin, Calculator, TrendingUp, AlertCircle, PiggyBank, Target, Activity } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScheduleCallButton } from "@/components/schedule-call-button"

export function CalculatorPageClient() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Calculator className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance">Smart Insurance Needs Calculator</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Get personalized recommendations for term life insurance and health insurance coverage based on your
              unique situation
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Tabs defaultValue="insurance" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="insurance">Life Insurance</TabsTrigger>
                <TabsTrigger value="health">Health Insurance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="insurance">
                <InsuranceCalculator />
              </TabsContent>
              
              <TabsContent value="health">
                <InsuranceCalculator />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold">Why Use Our Calculator?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <TrendingUp className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Personalized Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Get coverage recommendations tailored to your income, family size, and financial obligations
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Compliance-Safe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Provides a recommended range, not exact policy amounts. Always consult an expert before deciding
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Expert Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Talk to our independent advisor to refine your coverage and find the best policies
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function InsuranceCalculator() {
  return (
    <div className="space-y-8">
      {/* Term Insurance Calculator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Term Life Insurance Calculator
          </CardTitle>
          <CardDescription>Calculate your ideal term life insurance coverage</CardDescription>
        </CardHeader>
        <CardContent>
          <TermInsuranceForm />
        </CardContent>
      </Card>

      {/* Health Insurance Calculator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Health Insurance Calculator
          </CardTitle>
          <CardDescription>Calculate your recommended health insurance coverage</CardDescription>
        </CardHeader>
        <CardContent>
          <HealthInsuranceForm />
        </CardContent>
      </Card>
    </div>
  )
}

function TermInsuranceForm() {
  const [formData, setFormData] = useState({
    annualIncome: "",
    age: "",
    dependents: "",
    liabilities: "",
    existingCover: "",
    spouseIncome: "",
  })
  const [result, setResult] = useState<{ min: number; max: number } | null>(null)

  const calculateCoverage = () => {
    const income = Number.parseFloat(formData.annualIncome) || 0
    const liabilities = Number.parseFloat(formData.liabilities) || 0
    const existing = Number.parseFloat(formData.existingCover) || 0
    const spouse = Number.parseFloat(formData.spouseIncome) || 0
    const deps = Number.parseInt(formData.dependents) || 0

    // Formula: 10-15x annual income + liabilities - existing cover
    // Adjust for spouse income (reduce if spouse earns)
    const incomeMultiplier = spouse > income * 0.5 ? 12 : 15
    const minCoverage = Math.max(income * 10 + liabilities - existing, 0)
    const maxCoverage = Math.max(income * incomeMultiplier + liabilities - existing, 0)

    setResult({
      min: Math.round(minCoverage / 100000) * 100000, // Round to lakhs
      max: Math.round(maxCoverage / 100000) * 100000,
    })
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault()
        calculateCoverage()
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="annual-income">Annual Income (₹)</Label>
          <Input
            type="number"
            id="annual-income"
            placeholder="1500000"
            value={formData.annualIncome}
            onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="age">Your Age</Label>
          <Input
            type="number"
            id="age"
            placeholder="35"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dependents">Number of Dependents</Label>
          <Select value={formData.dependents} onValueChange={(val) => setFormData({ ...formData, dependents: val })}>
            <SelectTrigger id="dependents">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">0</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="liabilities">Total Liabilities (₹)</Label>
          <Input
            type="number"
            id="liabilities"
            placeholder="5000000"
            value={formData.liabilities}
            onChange={(e) => setFormData({ ...formData, liabilities: e.target.value })}
          />
          <p className="text-xs text-muted-foreground">Home loan, car loan, etc.</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="existing-cover">Existing Life Cover (₹)</Label>
          <Input
            type="number"
            id="existing-cover"
            placeholder="0"
            value={formData.existingCover}
            onChange={(e) => setFormData({ ...formData, existingCover: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="spouse-income">Spouse Annual Income (₹)</Label>
          <Input
            type="number"
            id="spouse-income"
            placeholder="0"
            value={formData.spouseIncome}
            onChange={(e) => setFormData({ ...formData, spouseIncome: e.target.value })}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <Button type="submit" className="flex-1">
          Calculate Coverage
        </Button>
        <ScheduleCallButton />
      </div>

      {result && (
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="mb-2 text-sm text-muted-foreground">Your Recommended Coverage Range</p>
              <p className="text-3xl font-bold text-primary">
                ₹{(result.min / 10000000).toFixed(1)} Cr - ₹{(result.max / 10000000).toFixed(1)} Cr
              </p>
              <div className="mt-4 space-y-2 text-left text-sm">
                <p className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Based on 10-15x annual income + liabilities - existing cover</span>
                </p>
                <p className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>This is a guideline. Consult an expert for personalized advice</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </form>
  )
}

function HealthInsuranceForm() {
  const [formData, setFormData] = useState({
    familySize: "",
    city: "",
    oldestAge: "",
    preExisting: "",
    existingHealth: "",
  })
  const [result, setResult] = useState<{ min: number; max: number } | null>(null)

  const calculateCoverage = () => {
    const familyCount = Number.parseInt(formData.familySize) || 1
    const age = Number.parseInt(formData.oldestAge) || 35
    const existing = Number.parseFloat(formData.existingHealth) || 0

    // Base coverage by city tier
    let baseCoverage = 500000 // Tier 2/3
    if (formData.city === "metro") baseCoverage = 1000000
    else if (formData.city === "tier1") baseCoverage = 750000

    // Adjust for family size
    const familyMultiplier = familyCount <= 2 ? 1 : 1.5

    // Adjust for age
    const ageMultiplier = age > 60 ? 1.5 : age > 45 ? 1.3 : 1

    const minCoverage = Math.max(baseCoverage * familyMultiplier * ageMultiplier - existing, 0)
    const maxCoverage = Math.max(baseCoverage * 1.5 * familyMultiplier * ageMultiplier - existing, 0)

    setResult({
      min: Math.round(minCoverage / 100000) * 100000,
      max: Math.round(maxCoverage / 100000) * 100000,
    })
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault()
        calculateCoverage()
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="family-size">Family Size</Label>
          <Select value={formData.familySize} onValueChange={(val) => setFormData({ ...formData, familySize: val })}>
            <SelectTrigger id="family-size">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Individual</SelectItem>
              <SelectItem value="2">Self + Spouse</SelectItem>
              <SelectItem value="3">Self + Spouse + 1 Child</SelectItem>
              <SelectItem value="4">Self + Spouse + 2 Children</SelectItem>
              <SelectItem value="5">Family Floater (5+)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">City Tier</Label>
          <Select value={formData.city} onValueChange={(val) => setFormData({ ...formData, city: val })}>
            <SelectTrigger id="city">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="metro">Metro (Mumbai, Delhi, Bangalore)</SelectItem>
              <SelectItem value="tier1">Tier 1 Cities</SelectItem>
              <SelectItem value="tier2">Tier 2/3 Cities</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="oldest-age">Oldest Member Age</Label>
          <Input
            type="number"
            id="oldest-age"
            placeholder="60"
            value={formData.oldestAge}
            onChange={(e) => setFormData({ ...formData, oldestAge: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pre-existing">Pre-existing Conditions?</Label>
          <Select value={formData.preExisting} onValueChange={(val) => setFormData({ ...formData, preExisting: val })}>
            <SelectTrigger id="pre-existing">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="no">No</SelectItem>
              <SelectItem value="yes">Yes</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="existing-health">Existing Health Cover (₹)</Label>
          <Input
            type="number"
            id="existing-health"
            placeholder="0"
            value={formData.existingHealth}
            onChange={(e) => setFormData({ ...formData, existingHealth: e.target.value })}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <Button type="submit" className="flex-1">
          Calculate Coverage
        </Button>
        <ScheduleCallButton />
      </div>

      {result && (
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="mb-2 text-sm text-muted-foreground">Your Recommended Coverage Range</p>
              <p className="text-3xl font-bold text-primary">
                ₹{(result.min / 100000).toFixed(0)} L - ₹{(result.max / 100000).toFixed(0)} L
              </p>
              <div className="mt-4 space-y-2 text-left text-sm">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Based on city tier, family size, and age profile</span>
                </p>
                <p className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Metro cities need higher cover due to hospital costs</span>
                </p>
                <p className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Consider super top-up for cost-effective high coverage</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </form>
  )
}
