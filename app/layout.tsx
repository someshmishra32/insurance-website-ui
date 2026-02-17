import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AnalyticsTracker } from "@/components/analytics-tracker"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { Navigation } from "@/components/navigation"
import "./globals.css"


const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Life Cover Now | Independent Insurance Advisor for Life & Health in India",
  description:
    "Empowering your family's future with transparent insurance. Get independent advice and compare life, term, and health insurance across multiple insurers in India.",
  keywords:
    "insurance advisor India, independent insurance expert, term insurance comparison, health insurance plans, family floater insurance, insurance consultant, best insurance advisor, ULIP plans, investment insurance",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg?v=2",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <AnalyticsTracker />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 z-50"
        >
          Skip to main content
        </a>
        <Navigation />
        {children}
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  )

}
