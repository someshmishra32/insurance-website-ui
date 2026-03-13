"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function FloatingWhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "917869934408"
    const message = "Hi, I'm interested in insurance consultation"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 p-4 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-colors md:hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse animation ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-green-500"
        animate={{ scale: [1, 1.3], opacity: [1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut" as const,
        }}
      />

      {/* Icon */}
      <MessageCircle className="h-6 w-6 relative z-10" />
    </motion.button>
  )
}
