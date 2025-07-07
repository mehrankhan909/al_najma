"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Phone } from "lucide-react"

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

  return (
    <section id="about-us" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      {/* Background with warm orange tones */}
      <div className="absolute inset-0
bg-gradient-to-br from-[#fdfof2]
via-[#fefae8] to-[#e8f5f2]">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center font-['Unbounded']">
  Meet Our{" "}
  <span className="bg-gradient-to-r from-[#7da7d1] to-[#6b9b8a] bg-clip-text text-transparent">
    Founder
  </span>{" "}
  <span className="bg-gradient-to-r from-[#7a9a7e] to-[#bfbca7] bg-clip-text text-transparent">
    &
  </span>{" "}
  <span className="bg-gradient-to-r from-[#c79a85] to-[#e8b4a0] bg-clip-text text-transparent">
    CEO
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
              {/* Owner Image Container with transparent margins */}
              <div className="relative inline-block mb-8 group">
                {/* Outer container with transparent padding for boxed effect */}
                <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-white/30">
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border-3 border-white/50 relative transform transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl">
                    <img
                      src="/images/IMG-20250706-WA0045.jpg"
                      alt="Hazrat Ali - Founder & CEO"
                      className="w-full h-full object-cover transition-all duration-700 filter grayscale-[15%] contrast-110 brightness-105 saturate-110 group-hover:grayscale-0 group-hover:contrast-115 group-hover:brightness-108 group-hover:saturate-120 group-hover:scale-110"
                    />

                    {/* Overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/15 via-transparent to-transparent opacity-50 group-hover:opacity-25 transition-opacity duration-700"></div>

                    {/* Professional glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f0f8f6]/8 via-transparent to-[#fdf6f3]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    {/* Animated border glow - only on hover */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#7da7d1] via-[#e8b4a0] to-[#6b9b8a] rounded-2xl opacity-0 group-hover:opacity-25 blur-sm transition-all duration-700"></div>
                  </div>
                </div>

                {/* Enhanced decorative elements with white-yellowish colors */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#fffef7] to-[#fff8dc] rounded-full opacity-70 transform transition-all duration-700 group-hover:scale-125 group-hover:rotate-45 group-hover:opacity-90 shadow-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-[#fff8dc] to-[#fffef7] rounded-full opacity-60 transform transition-all duration-700 group-hover:scale-110 group-hover:-rotate-45 group-hover:opacity-80 shadow-md"></div>

                {/* Floating particles effect - only on hover with white-yellowish colors */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#fffef7] rounded-full group-hover:animate-ping shadow-sm"></div>
                  <div
                    className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#fff8dc] rounded-full group-hover:animate-ping shadow-sm"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[#fffef7] rounded-full group-hover:animate-ping shadow-sm"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>

                {/* Professional title overlay that appears on hover */}
                <div className="absolute bottom-12 left-12 right-12 bg-gradient-to-r from-[#2c2c2c]/90 to-[#495057]/90 backdrop-blur-sm rounded-lg p-3 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-sm font-semibold text-center">Founder & CEO</p>
                  <p className="text-white/80 text-xs text-center">Leading Excellence Since 2011</p>
                </div>
              </div>

              {/* Owner Details */}
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] font-['Cinzel']">Hazrat Ali</h3>
                <p className="text-xl text-[#6c757d] font-medium">Founder & CEO</p>
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-[#495057]">
                  <MapPin className="h-5 w-5" />
                  <span className="font-['DM_Sans']">Dubai, United Arab Emirates</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-[#495057]">
                  <Phone className="h-5 w-5" />
                  <span className="font-['DM_Sans']">Available on Request</span>
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
                    Founded in 2011 by Hazrat Ali, Al-Najma Al-Hadetha Marble began as a vision to bring world-class marble
                    restoration services to Dubai's luxury market. With over 14 years of dedicated service, we have
                    established ourselves as the premier choice for high-end residential and commercial marble care.
                  </p>
                  <p>
                    Hazrat Ali's passion for perfection and commitment to using only the finest materials and techniques
                    has earned Al-Najma Al-Hadetha Marble a reputation for excellence throughout the UAE. Our team of skilled
                    craftsmen combines traditional expertise with cutting-edge technology to deliver results that exceed
                    expectations.
                  </p>
                  <p>
                    From luxury villas in Palm Jumeirah to prestigious commercial spaces in Al Garhoud Dubai, we have
                    transformed thousands of marble surfaces, creating lasting beauty and value for our discerning
                    clientele.
                  </p>
                </div>
              </div>

              {/* Single Achievement - Since 2011 */}
              <div className="flex justify-center lg:justify-start">
                <div
                  className={`bg-white/60 backdrop-blur-sm rounded-xl p-8 text-center shadow-md border border-gray-200/30 hover:shadow-lg transition-all duration-300 max-w-xs ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  }`}
                  style={{
                    animation: isVisible ? "fadeInUp 0.8s ease-out forwards" : "none",
                  }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] flex items-center justify-center shadow-md">
                    <Calendar className="h-8 w-8 text-[#495057]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2c2c2c] mb-2">Since 2011</div>
                  <div className="text-lg font-semibold text-[#6c757d] mb-3">Years of Excellence</div>
                  <div className="text-sm text-[#6c757d] leading-relaxed">
                    Over a decade of premium marble services in Dubai
                  </div>
                </div>
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
            <div className="bg-gradient-to-br from-white to-[#fef4e8] rounded-2x1 p-8 shadow-1g border border-[#f4a261]/20">
              <h5 className="text-xl font-bold text-[#2c2c2c] mb-4 font-['Sora']">Our Mission</h5>
              <p className="text-[#495057] font-['DM_Sans'] leading-relaxed">
                To preserve and enhance the natural beauty of marble through expert craftsmanship, innovative
                techniques, and unwavering commitment to quality. We strive to exceed our clients' expectations while
                building lasting relationships based on trust and excellence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#fef4e8] to-white rounded-2x1 p-8 shadow-1g border border-[#e8b4a0]/20">
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
