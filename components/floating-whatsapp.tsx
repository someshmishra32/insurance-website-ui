"use client"

import { MessageCircle } from "lucide-react"
import { trackConversionEvent } from "@/lib/analytics"
import { useEffect, useState } from "react"

export function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleClick = () => {
        trackConversionEvent("whatsapp_clicked", "Floating WhatsApp button clicked")
        const phoneNumber = "917021155995"
        const message = encodeURIComponent("Hi, I'm on your website and would like to talk to an advisor.")
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
    }

    return (
        <button
            onClick={handleClick}
            className={`fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
                }`}
            aria-label="Chat on WhatsApp"
        >
            <div className="flex items-center gap-2">
                <MessageCircle className="w-6 h-6 fill-current" />
                <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-medium">
                    Chat with us
                </span>
            </div>

            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></span>
        </button>
    )
}
