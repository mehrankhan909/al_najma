"use client"

import { Mail, MapPin, Clock, Phone } from "lucide-react"

export default function ContactHeader() {
  return (
    <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] border-b border-[#c59d5f]/10 py-3 mt-20">
      <div className="container mx-auto px-1">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-4 md:gap-4">
          {/* Mobile Number */}
          <div className="flex items-center gap-2 text-sm text-[#1b1b1b]/80">
            <Phone className="h-4 w-4 text-[#00675b]" />
            <span className="font-medium">Mobile:</span>
            <a href="tel:+971559074262" className="hover:text-[#00675b] transition-colors">
              +971 55 907 4262
            </a>
          </div>
          

          {/* Telephone Number */}
          <div className="flex items-center gap-2 text-sm text-[#1b1b1b]/80">
            <Phone className="h-4 w-4 text-[#00675b]" />
            <span className="font-medium">Office:</span>
            <a href="tel:+971527590125" className="hover:text-[#00675b] transition-colors">
              +971 52 759 0125
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-[#1b1b1b]/80">
            <MapPin className="h-4 w-4 text-[#c59d5f]" />
            <span className="font-medium">Location:</span>
            <span>Al Garhoud, Dubai, UAE</span>
          </div>

          {/* Business Hours */}
          <div className="flex items-center gap-2 text-sm text-[#1b1b1b]/80">
  <Mail className="h-4 w-4 text-[#00675b]" />
            <span className="font-medium">Mail:</span>
  <a
    href="mailto:alnajma-cleaning@hotmail.com?subject=Service%20Inquiry&body=Hello%2C%20I%20am%20interested%20in%20your%20services..."
    className="font-medium hover:text-[#00675b] transition-colors"
  >
    alnajma-cleaning@hotmail.com
  </a>
</div>

          
        </div>
      </div>
    </div>
  )
}
