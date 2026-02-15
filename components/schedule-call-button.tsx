"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { LeadCaptureForm } from "@/components/lead-capture-form"
import { Calendar } from "lucide-react"

interface ScheduleCallButtonProps {
  variant?: "default" | "secondary" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
  defaultInterest?: string
}

export function ScheduleCallButton({
  variant = "default",
  size = "default",
  className,
  defaultInterest = "schedule-call",
}: ScheduleCallButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={() => setIsOpen(true)}>
        <Calendar className="w-4 h-4 mr-2" />
        Schedule a Call
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Schedule Your Free Consultation</DialogTitle>
            <DialogDescription className="text-base">
              Fill in your details and we'll call you at a time convenient for you. No obligation, just honest advice.
            </DialogDescription>
          </DialogHeader>
          <LeadCaptureForm defaultInterest={defaultInterest} onSuccess={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  )
}
