"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Clock, Phone, Mail, Navigation, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

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

  const serviceAreas = [
    "Downtown Dubai",
    "Dubai Marina",
    "Palm Jumeirah",
    "Jumeirah Beach Residence (JBR)",
    "Business Bay",
    "DIFC (Dubai International Financial Centre)",
    "Dubai Hills Estate",
    "Arabian Ranches",
    "Emirates Hills",
    "Jumeirah Islands",
    "The Springs",
    "The Meadows",
  ]

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Sheikh Mohammed bin Rashid Blvd", "Downtown Dubai, Dubai", "United Arab Emirates"],
      action: "Get Directions",
      actionLink: "https://maps.google.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Office: +971 4 123 4567", "Mobile: +971 50 123 4567", "WhatsApp Available"],
      action: "Call Now",
      actionLink: "tel:+971501234567",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@alnajma.ae", "quotes@alnajma.ae", "support@alnajma.ae"],
      action: "Send Email",
      actionLink: "mailto:info@alnajma.ae",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 8:00 AM - 8:00 PM", "Saturday: 9:00 AM - 6:00 PM", "Sunday: Emergency Only"],
      action: "24/7 Emergency",
      actionLink: "tel:+971501234567",
    },
  ]

  return (
    <section id="location" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2c2c2c] via-[#3a3a3a] to-[#4a4a4a]">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-[#f8f9fa]/5 animate-gradient-x" />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-['Unbounded'] text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] bg-clip-text text-transparent">
              Location & Service Areas
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-['DM_Sans']">
            Serving Dubai's most prestigious neighborhoods with premium marble restoration services
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] flex items-center justify-center">
                  <info.icon className="h-6 w-6 text-[#495057]" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3 text-center">{info.title}</h4>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-white/80 text-sm text-center font-['DM_Sans']">
                      {detail}
                    </p>
                  ))}
                </div>
                <div className="text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white/20 hover:border-white/50 rounded-full text-xs bg-transparent"
                    onClick={() => window.open(info.actionLink, "_blank")}
                  >
                    {info.action}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Section */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 font-['Sora'] flex items-center">
                  <Navigation className="mr-3 h-6 w-6" />
                  Find Us in Dubai
                </h3>

                {/* Map Placeholder */}
                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-[#495057] mx-auto mb-4" />
                      <p className="text-[#495057] font-semibold">Interactive Map</p>
                      <p className="text-[#6c757d] text-sm">Downtown Dubai Location</p>
                    </div>
                  </div>
                  {/* You can replace this with an actual Google Maps embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1739405085973!2d55.27053731501!3d25.197197983896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sDowntown%20Dubai%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </div>

                <div className="flex space-x-4">
                  <Button
                    className="flex-1 bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] hover:from-[#e9ecef] hover:to-[#dee2e6] text-[#495057] rounded-full"
                    onClick={() => window.open("https://maps.google.com", "_blank")}
                  >
                    <Car className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/20 rounded-full bg-transparent"
                    onClick={() => window.open("tel:+971501234567")}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </Button>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 font-['Sora'] flex items-center">
                  <MapPin className="mr-3 h-6 w-6" />
                  Service Areas
                </h3>

                <p className="text-white/80 mb-6 font-['DM_Sans']">
                  We proudly serve Dubai's most prestigious residential and commercial areas with our premium marble
                  restoration services.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animation: isVisible ? "fadeInUp 0.6s ease-out forwards" : "none",
                      }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] rounded-full"></div>
                      <span className="text-white/90 text-sm font-['DM_Sans']">{area}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-2">Emergency Services</h4>
                  <p className="text-white/70 text-sm mb-3 font-['DM_Sans']">
                    24/7 emergency marble restoration services available throughout Dubai for urgent repairs and
                    restoration needs.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-400/50 text-red-300 hover:bg-red-400/20 rounded-full bg-transparent"
                    onClick={() => window.open("tel:+971501234567")}
                  >
                    Emergency Hotline
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
