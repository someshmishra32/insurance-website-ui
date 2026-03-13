"use client"

import { ReactNode } from "react"
import { AnimatePresence } from "framer-motion"
import { PageTransition } from "@/components/page-transition"

export function RootLayoutClient({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <PageTransition direction="up">
        {children}
      </PageTransition>
    </AnimatePresence>
  )
}
