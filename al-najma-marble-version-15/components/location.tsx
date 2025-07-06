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
      {/* Light Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fafafa] via-[#f8f9fa] to-[#f1f3f4]">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.1) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-['Unbounded'] text-[#2c2c2c]">
            Our{" "}
            <span className="bg-gradient-to-r from-[#6c757d] to-[#495057] bg-clip-text text-transparent">Location</span>
          </h2>
          <p className="text-lg text-[#6c757d] max-w-2xl mx-auto font-['DM_Sans']">
            Visit us at our Dubai location for premium marble restoration services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Location Card */}
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200/30 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <div className="text-center">
              {/* Location Icon */}
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] flex items-center justify-center shadow-lg">
                <MapPin className="h-10 w-10 text-[#495057]" />
              </div>

              {/* Location Details */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2c2c2c] font-['Sora']">Al-Najma Marble</h3>
                <div className="space-y-2 text-[#495057] font-['DM_Sans']">
                  <p className="text-lg md:text-xl">B312 NASER AHMED SAEED MOHAMED ALAWADHI building</p>
                  <p className="text-lg md:text-xl">al Garhoud Dubai</p>
                  <p className="text-lg md:text-xl">Dubai, United Arab Emirates</p>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-12">
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1739405085973!2d55.27053731501!3d25.197197983896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sDowntown%20Dubai%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl filter grayscale-[20%] contrast-110"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
