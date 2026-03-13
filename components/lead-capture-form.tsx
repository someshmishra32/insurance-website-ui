"use client"

import type React from "react"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { trackConversionEvent, getUTMParams } from "@/lib/analytics"
import { WhatsAppButton } from "./whatsapp-button"

interface LeadCaptureFormProps {
  defaultInterest?: string
  onSuccess?: () => void
}

export function LeadCaptureForm({ defaultInterest, onSuccess }: LeadCaptureFormProps = {}) {
  const pathname = usePathname()
  const [step, setStep] = useState<"select" | "form">(defaultInterest ? "form" : "select")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: defaultInterest || "",
    preferredDateTime: "",
    specificNeeds: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const handleInsuranceTypeSelect = (type: string) => {
    setFormData({ ...formData, insuranceType: type })
    setStep("form")
    trackConversionEvent("form_started", type)
  }

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {}

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required"
    } else if (formData.name.trim().length < 3) {
      errors.name = "Name must be at least 3 characters long"
    } else if (!/^[a-zA-Z\s.]+$/.test(formData.name.trim())) {
      errors.name = "Name can only contain letters, spaces, and dots"
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address"
    }

    // Mobile number validation (Indian format)
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '')
    if (!formData.phone.trim()) {
      errors.phone = "Mobile number is required"
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      errors.phone = "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9"
    }

    // Preferred date and time validation
    if (!formData.preferredDateTime.trim()) {
      errors.preferredDateTime = "Preferred date and time is required"
    } else {
      const selectedDateTime = new Date(formData.preferredDateTime)
      const now = new Date()
      if (selectedDateTime <= now) {
        errors.preferredDateTime = "Please select a future date and time"
      }
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          insuranceType: formData.insuranceType,
          preferredDateTime: formData.preferredDateTime,
          specificNeeds: formData.specificNeeds,
          sourcePage: pathname,
          utm: getUTMParams(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 400 && data.fieldErrors) {
          // Handle field-specific validation errors
          setFieldErrors(data.fieldErrors)
          throw new Error(data.error || "Please check the form for errors")
        }

        throw new Error(data.error || "Failed to submit form")
      }

      trackConversionEvent("form_submitted", formData.insuranceType, 1, data.leadId)

      setSuccess(true)
      if (onSuccess) {
        setTimeout(() => {
          onSuccess()
        }, 2000)
      }
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          insuranceType: "",
          preferredDateTime: "",
          specificNeeds: "",
        })
        setStep("select")
        setSuccess(false)
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
      console.error("[v0] Form submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBack = () => {
    setStep("select")
  }

  if (success) {
    return (
      <Card className="max-w-2xl mx-auto bg-background shadow-lg">
        <CardContent className="p-6 md:p-8 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h3 className="text-2xl font-bold mb-2 text-foreground">Thank You!</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Our expert will contact you within 24 hours to discuss your insurance needs.
          </p>
          <div className="flex flex-col items-center gap-3">
            <p className="text-xs text-muted-foreground">Need answers faster?</p>
            <WhatsAppButton variant="outline" />
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto bg-background shadow-lg">
      <CardContent className="p-6 md:p-8">
        {step === "select" ? (
          <>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Get Your Free Insurance Consultation</h3>
              <p className="text-sm text-muted-foreground">What type of insurance are you looking for?</p>
            </div>

            <div className="space-y-3">
              {[
                { value: "term_life", label: "Life Insurance / Term Insurance", icon: "🛡️" },
                { value: "health", label: "Health Insurance", icon: "❤️" },
                { value: "family_floater", label: "Family Floater Plan", icon: "👨‍👩‍👧‍👦" },
                { value: "senior_citizen", label: "Senior Citizen Insurance", icon: "👴" },
                { value: "not_sure", label: "Not Sure / Need Guidance", icon: "❓" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleInsuranceTypeSelect(option.value)}
                  className="w-full p-4 border-2 rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left flex items-center gap-3 group"
                >
                  <span className="text-2xl">{option.icon}</span>
                  <span className="font-medium group-hover:text-primary transition-colors">{option.label}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Almost There!</h3>
              <p className="text-sm text-muted-foreground">
                Fill in your details and we'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                    if (fieldErrors.name) {
                      setFieldErrors({ ...fieldErrors, name: "" })
                    }
                  }}
                  required
                  disabled={isSubmitting}
                  className={fieldErrors.name ? "border-destructive" : ""}
                />
                {fieldErrors.name && (
                  <p className="text-sm text-destructive">{fieldErrors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value })
                    if (fieldErrors.email) {
                      setFieldErrors({ ...fieldErrors, email: "" })
                    }
                  }}
                  required
                  disabled={isSubmitting}
                  className={fieldErrors.email ? "border-destructive" : ""}
                />
                {fieldErrors.email && (
                  <p className="text-sm text-destructive">{fieldErrors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Mobile Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="70211 55995 or +91 70211 55995"
                  value={formData.phone}
                  onChange={(e) => {
                    // Allow only numbers, spaces, +, and -
                    const value = e.target.value.replace(/[^0-9+\s-]/g, '')
                    setFormData({ ...formData, phone: value })
                    if (fieldErrors.phone) {
                      setFieldErrors({ ...fieldErrors, phone: "" })
                    }
                  }}
                  required
                  disabled={isSubmitting}
                  className={fieldErrors.phone ? "border-destructive" : ""}
                  maxLength={15}
                />
                {fieldErrors.phone && (
                  <p className="text-sm text-destructive">{fieldErrors.phone}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  Enter 10-digit Indian mobile number (e.g., 70211 55995)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredDateTime">Preferred Date and Time *</Label>
                <Input
                  id="preferredDateTime"
                  type="datetime-local"
                  value={formData.preferredDateTime}
                  onChange={(e) => {
                    setFormData({ ...formData, preferredDateTime: e.target.value })
                    if (fieldErrors.preferredDateTime) {
                      setFieldErrors({ ...fieldErrors, preferredDateTime: "" })
                    }
                  }}
                  required
                  disabled={isSubmitting}
                  className={fieldErrors.preferredDateTime ? "border-destructive" : ""}
                />
                {fieldErrors.preferredDateTime && (
                  <p className="text-sm text-destructive">{fieldErrors.preferredDateTime}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="specificNeeds">Specific Questions or Concerns (Optional)</Label>
                <Input
                  id="specificNeeds"
                  placeholder="Tell us what you'd like to discuss"
                  value={formData.specificNeeds}
                  onChange={(e) => setFormData({ ...formData, specificNeeds: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>

              {error && (
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                  {error}
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1 bg-transparent"
                  disabled={isSubmitting}
                >
                  Back
                </Button>
                <Button type="submit" className="flex-1" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Get My Policy Reviewed"}
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground leading-relaxed pt-2">
                By submitting, you agree to be contacted regarding insurance advisory services. We respect your privacy
                and will never share your information with third parties.
              </p>
            </form>
          </>
        )}
      </CardContent>
    </Card>
  )
}
