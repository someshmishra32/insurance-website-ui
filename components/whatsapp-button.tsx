"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { trackConversionEvent } from "@/lib/analytics"

interface WhatsAppButtonProps {
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function WhatsAppButton({ variant = "default", size = "default", className }: WhatsAppButtonProps) {
  const handleClick = () => {
    trackConversionEvent("whatsapp_clicked", "WhatsApp button clicked")

    // Replace with actual WhatsApp number
    const phoneNumber = "917021155995"
    const message = encodeURIComponent("Hi, I would like to know more about insurance options.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <Button variant={variant} size={size} onClick={handleClick} className={`gap-2 ${className || ""}`}>
      <MessageCircle className="w-4 h-4" />
      WhatsApp Us
    </Button>
  )
}
