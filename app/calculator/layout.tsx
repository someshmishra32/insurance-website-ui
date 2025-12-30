import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Smart Insurance Needs Calculator | Calculate Your Ideal Coverage",
  description:
    "Calculate your ideal term life insurance and health insurance coverage based on income, liabilities, dependents, and location.",
}

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return children
}
