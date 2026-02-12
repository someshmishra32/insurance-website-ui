"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/compare", label: "Compare Plans" },
    { href: "/learn", label: "Learn Insurance" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "Get Expert Advice" },
  ]

  const toolsLinks = [
    { href: "/calculator", label: "Coverage Calculator" },
    { href: "/policy-check", label: "Policy Health Check" },
    { href: "/ai-assistant", label: "AI Assistant" },
    { href: "/claims", label: "Claims Guide" },
    { href: "/faq", label: "FAQ" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/transparency", label: "Trust & Transparency" },
    { href: "/whatsapp-us", label: "WhatsApp Us" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname?.startsWith(href)
  }

  return (
    <>
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>

      <nav className="border-b bg-background sticky top-0 z-50 backdrop-blur-sm bg-background/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-primary">
              InsureWise
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${isActive(link.href) ? "text-primary" : "hover:text-primary"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors outline-hidden">
                  Tools
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {toolsLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link href={link.href} className="cursor-pointer transition-colors hover:bg-accent">
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <WhatsAppButton />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pt-4 pb-4 border-t mt-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base font-medium transition-colors py-3 px-4 rounded-md min-h-[44px] flex items-center ${isActive(link.href) ? "text-primary bg-primary/5" : "hover:text-primary hover:bg-muted"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Tools Section */}
                <div className="border-t pt-4">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">TOOLS</p>
                  {toolsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-3 px-4 text-base hover:text-primary transition-colors min-h-[44px] flex items-center rounded-md hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <WhatsAppButton />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navigation
