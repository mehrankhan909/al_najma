"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (mobileMenuOpen && !target?.closest(".mobile-menu-container")) {
        setMobileMenuOpen(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: "Home", href: "#hero-section" },
    { name: "Services", href: "#our-services" },
    { name: "Testimonials", href: "#client-reviews" },
    { name: "Contact", href: "#book-consultation" },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
          scrolled || mobileMenuOpen ? "bg-white/95 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4",
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="#hero-section"
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#c59d5f] to-[#00675b] bg-clip-text text-transparent"
            >
              AL_<span className="font-light">NAJMA</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#c59d5f] hover:text-[#c59d5f] transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-[#c59d5f] to-[#00675b] hover:from-[#d5ad6f] hover:to-[#00776b] text-white rounded-full px-6">
              Book Now
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#1b1b1b] hover:bg-[#c59d5f]/10"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobile && mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

          {/* Mobile Menu */}
          <div className="fixed inset-0 z-50 mobile-menu-container">
            <div className="absolute top-0 right-0 w-full h-full bg-white shadow-2xl">
              {/* Header with Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="text-xl font-bold bg-gradient-to-r from-[#c59d5f] to-[#00675b] bg-clip-text text-transparent">
                  Al_<span className="font-light">NAJMA</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#1b1b1b] hover:bg-[#c59d5f]/10 rounded-full"
                  aria-label="Close mobile menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="pt-8 px-6 flex flex-col h-full">
                <nav className="flex flex-col space-y-6 text-center">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl text-green-800 hover:text-[#c59d5f] transition-colors font-medium py-3 border-b border-gray-100 last:border-b-0"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>

                <div className="mt-auto mb-10 space-y-4">
                  <Button
                    variant="outline"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full border-[#c59d5f] text-[#c59d5f] hover:bg-[#c59d5f] hover:text-white rounded-full py-6 text-lg"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                  <Button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full bg-gradient-to-r from-[#c59d5f] to-[#00675b] hover:from-[#d5ad6f] hover:to-[#00776b] text-white rounded-full py-6 text-lg"
                  >
                    Book Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
