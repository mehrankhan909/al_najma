"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react"

export default function Location() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="location" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Warm Color Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7fbfa] via-[#fffef7] to-[#fef9f7]">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(123, 167, 209, 0.08) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-['Unbounded'] text-[#2c2c2c]">
            Our{" "}
            <span className="bg-gradient-to-r from-[#7ba7d1] via-[#6b9b8a] to-[#e8b4a0] bg-clip-text text-transparent">
              Location
            </span>
          </h2>
          <p className="text-lg text-[#6c757d] max-w-2xl mx-auto font-['DM_Sans']">
            Visit us at our Dubai location for premium marble restoration services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Location Card */}
          <div
            className={`bg-white/85 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-[#f7f4f0]/40 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <div className="text-center">
              {/* Update location icon gradient */}
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#f4a261] via-[#e85a4f] to-[#7ba7dl] flex items-center justify-center shadow-1g9">
              <MapPin className="h-10 w-10 text-white" />
              </div>

              {/* Location Details */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2c2c2c] font-['Sora']">Al-Najma Al Hadetha Marble</h3>
                <div className="space-y-2 text-[#495057] font-['DM_Sans']">
                  <p className="text-lg md:text-xl">NASER AHMED SAEED MOHAMED ALAWADHI building</p>
                  <p className="text-lg md:text-xl">Al Garhoud, Dubai</p>
                  <p className="text-lg md:text-xl">Dubai, United Arab Emirates</p>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-12">
  <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
    <iframe
      // Zoomed in more with z=17
      src="https://maps.google.com/maps?q=25.252077,55.337635&z=17&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-2xl filter grayscale-[20%] contrast-110"
    />
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
