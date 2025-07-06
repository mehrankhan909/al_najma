"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, X, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FloatingAction() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Listen for scroll to show/hide scroll to top button
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowScrollTop(window.scrollY > 500)
    })
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-4">
      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToTop}
          className="bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg rounded-full transition-all duration-300 text-[#1b1b1b]"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}

      {/* Action buttons */}
      <div className="flex flex-col items-end space-y-3">
        {isOpen && (
          <>
            <div className="transform transition-all duration-300 scale-100 opacity-100">
              <a href="tel:+971527590125">
                <Button
                  size="icon"
                  className="bg-[#00675b] hover:bg-[#00776b] text-white shadow-lg rounded-full h-12 w-12"
                >
                  <Phone className="h-5 w-5" />
                </Button>
              </a>
            </div>

            <div className="transform transition-all duration-300 scale-100 opacity-100">
              <a href="https://wa.me/971559074262" target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg rounded-full h-12 w-12"
                >
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </>
        )}

        <Button
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "shadow-lg rounded-full h-14 w-14 transition-all duration-300",
            isOpen
              ? "bg-[#1b1b1b] hover:bg-[#2a2a2a] text-white rotate-45"
              : "bg-gradient-to-r from-[#c59d5f] to-[#00675b] hover:from-[#d5ad6f] hover:to-[#00776b] text-white",
          )}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>
    </div>
  )
}
