"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Calendar, Users, Star, MapPin, Phone } from "lucide-react"

export default function AboutUs() {
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

  const achievements = [
    {
      icon: Calendar,
      value: "Since 2011",
      label: "Years of Excellence",
      description: "Over a decade of premium marble services",
    },
  ]

  return (
    <section id="about-us" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] via-white to-[#f1f3f4]">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.15) 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-['Unbounded'] text-[#2c2c2c]">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#6c757d] to-[#495057] bg-clip-text text-transparent">
              Founder & CEO
            </span>
          </h2>
          <p className="text-lg text-[#6c757d] max-w-2xl mx-auto font-['DM_Sans']">
            Leading Dubai's marble industry with passion, expertise, and unwavering commitment to excellence
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Owner Image and Basic Info */}
            <div
              className={`text-center lg:text-left transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}
            >
              {/* Owner Image */}
              <div className="relative inline-block mb-8">
                <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/images/IMG-20250706-WA0045.jpg"
                    alt="Ahmed Al-Najma - Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#dee2e6] to-[#f8f9fa] rounded-full opacity-60"></div>
              </div>

              {/* Owner Details */}
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] font-['Cinzel']">Ahmed Al-Najma</h3>
                <p className="text-xl text-[#6c757d] font-medium">Founder & CEO</p>
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-[#495057]">
                  <MapPin className="h-5 w-5" />
                  <span className="font-['DM_Sans']">Dubai, United Arab Emirates</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-[#495057]">
                  <Phone className="h-5 w-5" />
                  <span className="font-['DM_Sans']">+971 50 123 4567</span>
                </div>
              </div>
            </div>

            {/* Company Story and Details */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              }`}
            >
              {/* Company Story */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50">
                <h4 className="text-2xl font-bold text-[#2c2c2c] mb-6 font-['Sora']">Our Story Since 2011</h4>
                <div className="space-y-4 text-[#495057] font-['DM_Sans'] leading-relaxed">
                  <p>
                    Founded in 2011 by Ahmed Al-Najma, Al-Najma Marble began as a vision to bring world-class marble
                    restoration services to Dubai's luxury market. With over 13 years of dedicated service, we have
                    established ourselves as the premier choice for high-end residential and commercial marble care.
                  </p>
                  <p>
                    Ahmed's passion for perfection and commitment to using only the finest materials and techniques has
                    earned Al-Najma Marble a reputation for excellence throughout the UAE. Our team of skilled craftsmen
                    combines traditional expertise with cutting-edge technology to deliver results that exceed
                    expectations.
                  </p>
                  <p>
                    From luxury villas in Palm Jumeirah to prestigious commercial spaces in Downtown Dubai, we have
                    transformed thousands of marble surfaces, creating lasting beauty and value for our discerning
                    clientele.
                  </p>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center shadow-md border border-gray-200/30 hover:shadow-lg transition-all duration-300"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animation: isVisible ? "fadeInUp 0.8s ease-out forwards" : "none",
                    }}
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] flex items-center justify-center shadow-md">
                      <achievement.icon className="h-6 w-6 text-[#495057]" />
                    </div>
                    <div className="text-2xl font-bold text-[#2c2c2c] mb-1">{achievement.value}</div>
                    <div className="text-sm font-semibold text-[#6c757d] mb-2">{achievement.label}</div>
                    <div className="text-xs text-[#6c757d] leading-tight">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div
            className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            {/* Mission */}
            <div className="bg-gradient-to-br from-white to-[#f8f9fa] rounded-2xl p-8 shadow-lg border border-gray-200/50">
              <h5 className="text-xl font-bold text-[#2c2c2c] mb-4 font-['Sora']">Our Mission</h5>
              <p className="text-[#495057] font-['DM_Sans'] leading-relaxed">
                To preserve and enhance the natural beauty of marble through expert craftsmanship, innovative
                techniques, and unwavering commitment to quality. We strive to exceed our clients' expectations while
                building lasting relationships based on trust and excellence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-2xl p-8 shadow-lg border border-gray-200/50">
              <h5 className="text-xl font-bold text-[#2c2c2c] mb-4 font-['Sora']">Our Vision</h5>
              <p className="text-[#495057] font-['DM_Sans'] leading-relaxed">
                To be the leading marble restoration company in the Middle East, recognized for our innovation,
                sustainability, and exceptional service. We envision a future where every marble surface reflects the
                pinnacle of beauty and craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
              }
