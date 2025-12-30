"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { LeadCaptureForm } from "@/components/lead-capture-form"
import { MessageCircle } from "lucide-react"

interface ExpertAdviceButtonProps {
  variant?: "default" | "secondary" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
  children?: React.ReactNode
}

export function ExpertAdviceButton({
  variant = "default",
  size = "default",
  className,
  children = "Get Expert Advice",
}: ExpertAdviceButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={() => setIsOpen(true)}>
        <MessageCircle className="w-4 h-4 mr-2" />
        {children}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Get Expert Insurance Advice</DialogTitle>
            <DialogDescription className="text-base">
              Tell us about your insurance needs and our expert will provide personalized recommendations – completely
              free and with no pressure to buy.
            </DialogDescription>
          </DialogHeader>
          <LeadCaptureForm defaultInterest="expert-advice" onSuccess={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  )
}
