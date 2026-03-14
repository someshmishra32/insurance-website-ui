import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Smart Insurance & Pension Calculator | Calculate Your Ideal Coverage & Retirement Corpus",
  description:
    "Calculate your ideal term life insurance, health insurance coverage, and retirement pension corpus based on income, liabilities, dependents, and financial goals.",
}

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return children
}
