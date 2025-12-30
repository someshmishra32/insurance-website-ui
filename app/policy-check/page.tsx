import type { Metadata } from "next"
import PolicyCheckClientPage from "./PolicyCheckClientPage"

export const metadata: Metadata = {
  title: "Policy Health Check | Free Policy Audit Tool",
  description:
    "Get a free audit of your existing insurance policies. Identify coverage gaps, outdated features, and red flags.",
}

export default function PolicyCheckPage() {
  return <PolicyCheckClientPage />
}
