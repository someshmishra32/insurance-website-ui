"use client"

import { MessageCircle, Instagram, Facebook } from "lucide-react"
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

    const handleWhatsAppClick = () => {
        trackConversionEvent("whatsapp_clicked", "Floating WhatsApp button clicked")
        const phoneNumber = "917021155995"
        const message = encodeURIComponent("Hi, I'm on your website and would like to talk to an advisor.")
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
    }

    const handleSocialClick = (platform: string, url: string) => {
        trackConversionEvent(`${platform}_clicked`, `Floating ${platform} button clicked`)
        window.open(url, "_blank")
    }

    return (
        <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4 transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"}`}>
            {/* Instagram */}
            <button
                onClick={() => handleSocialClick("instagram", "https://www.instagram.com/lifecovernow")}
                className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
                aria-label="Follow us on Instagram"
                title="Follow us on Instagram"
            >
                <Instagram className="w-6 h-6 fill-current" />
            </button>

            {/* Facebook */}
            <button
                onClick={() => handleSocialClick("facebook", "https://www.facebook.com/profile.php?id=61588049144991")}
                className="p-4 bg-[#1877F2] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
                aria-label="Follow us on Facebook"
                title="Follow us on Facebook"
            >
                <Facebook className="w-6 h-6 fill-current" />
            </button>

            {/* WhatsApp */}
            <button
                onClick={handleWhatsAppClick}
                className="p-4 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
                aria-label="Chat on WhatsApp"
                title="Chat with us on WhatsApp"
            >
                <div className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 fill-current" />
                </div>

                {/* Pulse effect */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></span>
            </button>
        </div>
    )
}
