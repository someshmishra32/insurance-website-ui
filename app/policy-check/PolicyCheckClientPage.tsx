"use client"

import { AlertTriangle, CheckCircle, XCircle, FileText, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScheduleCallButton } from "@/components/schedule-call-button"
import { useState } from "react"

export default function PolicyCheckClientPage() {
  const [formData, setFormData] = useState({
    policyType: "",
    insurer: "",
    policyName: "",
    sumInsured: "",
    premium: "",
    policyYear: "",
    age: "",
    roomRent: "",
    copay: "",
    restoration: "",
    preExisting: "",
  })
  const [showResults, setShowResults] = useState(false)

  const analyzePolicy = () => {
    setShowResults(true)
    // Scroll to results
    setTimeout(() => {
      document.getElementById("audit-results")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const getGaps = () => {
    const gaps = []
    const sumInsured = Number.parseFloat(formData.sumInsured) || 0

    if (formData.policyType === "health") {
      if (sumInsured < 500000)
        gaps.push({
          text: "Low Sum Insured: Your coverage is insufficient for modern hospital costs",
          severity: "high",
        })
      if (formData.roomRent !== "unlimited")
        gaps.push({ text: "Room Rent Cap: Limited room rent can trigger proportionate deductions", severity: "medium" })
      if (formData.restoration === "no")
        gaps.push({ text: "No Restoration: Once sum insured is exhausted, no additional coverage", severity: "high" })
      if (Number.parseInt(formData.copay) > 0)
        gaps.push({ text: `Co-pay: You pay ${formData.copay}% of every claim out of pocket`, severity: "medium" })
    }

    if (formData.policyType === "term") {
      if (sumInsured < 5000000)
        gaps.push({ text: "Low Coverage: Term insurance should be 10-15x your annual income", severity: "high" })
    }

    if (Number.parseInt(formData.policyYear) > 5) {
      gaps.push({ text: "Outdated Policy: Policies older than 5 years often lack modern benefits", severity: "medium" })
    }

    return gaps
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <FileText className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance">Free Policy Health Check</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Get a comprehensive audit of your existing insurance policies. Identify gaps, red flags, and opportunities
              for better coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Audit Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>Submit Your Policy for Audit</CardTitle>
                <CardDescription>
                  Fill in your policy details and we'll provide a comprehensive health check report
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    analyzePolicy()
                  }}
                >
                  {/* Policy Type */}
                  <div className="space-y-2">
                    <Label htmlFor="policy-type">Policy Type</Label>
                    <Select
                      value={formData.policyType}
                      onValueChange={(val) => setFormData({ ...formData, policyType: val })}
                    >
                      <SelectTrigger id="policy-type">
                        <SelectValue placeholder="Select policy type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="term">Term Life Insurance</SelectItem>
                        <SelectItem value="health">Health Insurance</SelectItem>
                        <SelectItem value="ulip">ULIP</SelectItem>
                        <SelectItem value="endowment">Endowment / Savings Plan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Basic Details */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="insurer">Insurance Company</Label>
                      <Input
                        type="text"
                        id="insurer"
                        placeholder="e.g., HDFC Life"
                        onChange={(e) => setFormData({ ...formData, insurer: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="policy-name">Policy Name</Label>
                      <Input
                        type="text"
                        id="policy-name"
                        placeholder="e.g., Click 2 Protect Plus"
                        onChange={(e) => setFormData({ ...formData, policyName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sum-insured">Sum Insured / Coverage (₹)</Label>
                      <Input
                        type="number"
                        id="sum-insured"
                        placeholder="1000000"
                        onChange={(e) => setFormData({ ...formData, sumInsured: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="premium">Annual Premium (₹)</Label>
                      <Input
                        type="number"
                        id="premium"
                        placeholder="15000"
                        onChange={(e) => setFormData({ ...formData, premium: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="policy-year">Policy Year</Label>
                      <Input
                        type="number"
                        id="policy-year"
                        placeholder="3"
                        onChange={(e) => setFormData({ ...formData, policyYear: e.target.value })}
                      />
                      <p className="text-xs text-muted-foreground">How many years since you bought it?</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="your-age">Your Current Age</Label>
                      <Input
                        type="number"
                        id="your-age"
                        placeholder="35"
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Health Insurance Specific */}
                  <div className="space-y-4 rounded-lg border p-4">
                    <h3 className="font-semibold">Health Insurance Specific (if applicable)</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="room-rent">Room Rent Limit</Label>
                        <Select
                          value={formData.roomRent}
                          onValueChange={(val) => setFormData({ ...formData, roomRent: val })}
                        >
                          <SelectTrigger id="room-rent">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="unlimited">Unlimited</SelectItem>
                            <SelectItem value="1percent">1% of Sum Insured</SelectItem>
                            <SelectItem value="2percent">2% of Sum Insured</SelectItem>
                            <SelectItem value="fixed">Fixed Amount</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="copay">Co-pay Percentage</Label>
                        <Select
                          value={formData.copay}
                          onValueChange={(val) => setFormData({ ...formData, copay: val })}
                        >
                          <SelectTrigger id="copay">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">No Co-pay (0%)</SelectItem>
                            <SelectItem value="10">10%</SelectItem>
                            <SelectItem value="20">20%</SelectItem>
                            <SelectItem value="30">30%</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="restoration">Restoration Benefit</Label>
                        <Select
                          value={formData.restoration}
                          onValueChange={(val) => setFormData({ ...formData, restoration: val })}
                        >
                          <SelectTrigger id="restoration">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes-unlimited">Yes - Unlimited</SelectItem>
                            <SelectItem value="yes-once">Yes - Once</SelectItem>
                            <SelectItem value="no">No Restoration</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pre-existing">Pre-existing Waiting Period</Label>
                        <Select
                          value={formData.preExisting}
                          onValueChange={(val) => setFormData({ ...formData, preExisting: val })}
                        >
                          <SelectTrigger id="pre-existing">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Year</SelectItem>
                            <SelectItem value="2">2 Years</SelectItem>
                            <SelectItem value="3">3 Years</SelectItem>
                            <SelectItem value="4">4 Years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Add-ons */}
                  <div className="space-y-2">
                    <Label>Add-ons / Riders (if any)</Label>
                    <Input
                      type="text"
                      placeholder="e.g., Critical Illness, Maternity Cover"
                      onChange={(e) => setFormData({ ...formData, preExisting: e.target.value })}
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1">
                      Get Free Audit Report
                    </Button>
                    <ScheduleCallButton defaultInterest="Policy Health Check" />
                  </div>
                </form>

                {showResults && (
                  <div
                    id="audit-results"
                    className="mt-8 space-y-4 rounded-lg border-2 border-primary/20 bg-primary/5 p-6"
                  >
                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                      <FileText className="h-5 w-5" />
                      Your Policy Audit Report
                    </h3>

                    {/* Coverage Gaps */}
                    {getGaps().length > 0 && (
                      <div className="space-y-2">
                        <h4 className="flex items-center gap-2 font-semibold text-amber-600">
                          <AlertTriangle className="h-4 w-4" />
                          Coverage Gaps Identified
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {getGaps().map((gap, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                              <span>
                                <strong>{gap.text}</strong>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Outdated Features */}
                    <div className="space-y-2">
                      <h4 className="flex items-center gap-2 font-semibold text-orange-600">
                        <TrendingUp className="h-4 w-4" />
                        Outdated Features
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                          <span>Policy bought in 2018 - lacks modern benefits like unlimited restoration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                          <span>No OPD cover or wellness benefits (now common in newer policies)</span>
                        </li>
                      </ul>
                    </div>

                    {/* Positive Points */}
                    <div className="space-y-2">
                      <h4 className="flex items-center gap-2 font-semibold text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        What's Good
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                          <span>No co-pay - you get 100% claim amount</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                          <span>Lifetime renewability guaranteed</span>
                        </li>
                      </ul>
                    </div>

                    {/* Recommendations */}
                    <div className="rounded-lg bg-background p-4">
                      <h4 className="mb-2 font-semibold text-primary">Recommendations</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Consider upgrading to ₹10L-15L cover for adequate protection</li>
                        <li>• Look for policies with unlimited room rent and restoration benefits</li>
                        <li>• Add super top-up of ₹20L-30L for cost-effective high coverage</li>
                        <li>• Schedule expert consultation to review alternatives</li>
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Use Policy Health Check */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold">Why Check Your Policy Health?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <AlertTriangle className="mb-2 h-8 w-8 text-amber-500" />
                  <CardTitle className="text-lg">Identify Gaps</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Many policies have hidden limitations like co-pay, room rent caps, or low sum insured
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <TrendingUp className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Outdated Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Policies bought 5+ years ago may lack modern benefits like unlimited restoration or OPD cover
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle className="mb-2 h-8 w-8 text-green-600" />
                  <CardTitle className="text-lg">Better Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Get recommendations for upgrades, add-ons, or replacement policies that offer better value
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
