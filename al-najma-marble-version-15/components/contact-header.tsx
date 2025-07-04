"use client"

import { Phone, MapPin, Clock } from "lucide-react"

export default function ContactHeader() {
  return (
    <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] border-b border-[#c59d5f]/10 py-3 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-8">
          {/* Mobile Number */}
          <div className="flex items-center gap-2 text-sm text-[#1b1b1b]/80">
            <Phone className="h-4 w-4 text-[#c59d5f]" />
            <span className="font-medium">Mobile:</span>
            <a href="tel:+971501234567" className="hover:text-[#c59d5f] transition-colors">
              +971 50 123 4567
            </a>
          </div>

          {/* Telephone Number */}
          <div className="flex items-center gap-2 text-sm text-[#1b1b1b]/80">
            <Phone className="h-4 w-4 text-[#00675b]" />
            <span className="font-medium">Office:</span>
            <a href="tel:+97141234567" className="hover:text-[#00675b] transition-colors">
              +971 4 123 4567
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-[#1b1b1b]/80">
            <MapPin className="h-4 w-4 text-[#c59d5f]" />
            <span className="font-medium">Location:</span>
            <span>Downtown Dubai, UAE</span>
          </div>

          {/* Business Hours */}
          <div className="flex items-center gap-2 text-sm text-[#1b1b1b]/80">
            <Clock className="h-4 w-4 text-[#00675b]" />
            <span className="font-medium">Hours:</span>
            <span>24/7 Service</span>
          </div>
        </div>
      </div>
    </div>
  )
}
