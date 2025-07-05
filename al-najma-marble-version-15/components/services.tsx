"use client"

import { useEffect, useState, useRef } from "react"
import { Sparkles, Droplets, Shield, X, Wrench, Brush, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "marble-restoration",
    title: "Marble Restoration",
    description:
      "Complete restoration of damaged marble surfaces, bringing them back to their original beauty with professional techniques and premium materials.",
    icon: Sparkles,
    hoverBg: "group-hover:bg-gradient-to-br group-hover:from-[#c59d5f] group-hover:to-[#e7c992]",
    details:
      "Our marble restoration process includes crack repair, stain removal, surface leveling, and complete refinishing to restore your marble's natural elegance.",
    videoUrl: "/videos/s21.mp4",
    videoDescription:
      "Watch our expert team restore damaged marble to its original pristine condition using advanced restoration techniques.",
    serviceImages: ["/images/s2.jpg", "/images/s3.jpg", "/images/s4.jpg"],
    processHighlights: [
      "Comprehensive damage assessment and analysis",
      "Specialized crack filling with color-matched compounds",
      "Surface grinding and leveling techniques",
      "Multi-stage restoration with premium materials",
    ],
    keyBenefits: [
      "Restores marble to original condition",
      "Eliminates cracks, chips, and surface damage",
      "Extends marble lifespan by decades",
      "Cost-effective alternative to replacement",
    ],
  },
  // ... (other services remain unchanged, omitted here for brevity)
]

const ServiceModal = ({ service, onClose }) => {
  const videoRef = useRef(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % service.serviceImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [service.serviceImages.length])

  // Play video on modal open and prevent background scroll
  useEffect(() => {
    // Lock background scroll
    document.body.style.overflow = "hidden"

    const video = videoRef.current
    if (video) {
      video.muted = true
      video.loop = true
      video.autoplay = true
      video.playsInline = true
      video.preload = "auto"
      video.play().catch(() => {
        // Autoplay might be blocked but muted usually allows it
      })
    }

    return () => {
      document.body.style.overflow = ""
      if (video) video.pause()
    }
  }, [service])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/80 hover:bg-white/90 text-[#2c2c2c] rounded-full backdrop-blur-sm z-10"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Video container with 1:1 aspect ratio */}
        <div className="relative w-full" style={{ paddingTop: "100%" }}>
          <video
            ref={videoRef}
            src={service.videoUrl}
            poster={service.serviceImages[0]}
            muted
            loop
            autoPlay
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-t-2xl filter brightness-95 contrast-105 saturate-110"
          />
        </div>

        {/* Content below video */}
        <div className="p-6 bg-white max-h-[calc(90vh-100vw)] overflow-y-auto">
          {/* Image carousel */}
          <div className="mb-6">
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <img
                src={service.serviceImages[currentImageIndex] || "/placeholder.svg?height=200&width=400"}
                alt={`${service.title} process ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute bottom-2 left-2 right-2 flex justify-center space-x-2">
                {service.serviceImages.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      index === currentImageIndex ? "bg-[#c59d5f]" : "bg-[#c59d5f]/40"
                    )}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Show image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <p className="text-[#495057] mb-4 font-['DM_Sans']">{service.videoDescription}</p>

          <div className="space-y-4">
            <h4 className="font-bold text-[#2c2c2c]">Service Details:</h4>
            <p className="text-[#6c757d] text-sm">{service.details}</p>

            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-[#2c2c2c] mb-2">Process Highlights:</h5>
                <ul className="list-disc pl-5 space-y-1 text-[#6c757d] text-sm">
                  {service.processHighlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-[#2c2c2c] mb-2">Key Benefits:</h5>
                <ul className="list-disc pl-5 space-y-1 text-[#6c757d] text-sm">
                  {service.keyBenefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col space-y-3">
            <Button
              onClick={() => {
                onClose()
                document.getElementById("book-consultation")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="w-full bg-gradient-to-r from-[#c59d5f] to-[#00675b] hover:from-[#d5ad6f] hover:to-[#00776b] text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book This Service
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full border-gray-300 text-[#6c757d] hover:bg-gray-100 rounded-full px-6 bg-transparent"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#c59d5f]/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  )
}

const AnimatedBlobs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#c59d5f]/10 to-[#00675b]/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-[#00675b]/10 to-[#c59d5f]/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#c59d5f]/5 to-[#00675b]/10 rounded-full blur-2xl animate-blob animation-delay-4000" />
    </div>
  )
}

export default function Services() {
  const [activeService, setActiveService] = useState(null)
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = cardRefs.current.indexOf(entry.target)
            if (cardIndex !== -1 && !visibleCards.includes(cardIndex)) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, cardIndex])
              }, cardIndex * 150)
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [visibleCards])

  return (
    <section id="our-services" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f0f0] via-[#e5e5e5] to-[#f0f0f0]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c59d5f]/5 via-transparent to-[#00675b]/5 animate-gradient-x" />
        <FloatingParticles />
        <AnimatedBlobs />
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.1) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-['Unbounded'] text-[#2c2c2c]">
            Our Premium{" "}
            <span className="bg-gradient-to-r from-[#c59d5f] to-[#00675b] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-[#6c757d] max-w-2xl mx-auto font-['DM_Sans']">
            Comprehensive marble care solutions using advanced techniques and premium materials for exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={cn(
                "relative group cursor-pointer transition-all duration-700 ease-out",
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              )}
              onClick={() => setActiveService(service)}
            >
              {/* Card */}
              <div
                className={cn(
                  "h-full p-6 rounded-2xl border border-gray-300/30 bg-white/90 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-gray-300/30",
                  service.hoverBg
                )}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-[#c59d5f] to-[#e7c992] group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#2c2c2c] group-hover:text-white transition-colors duration-300 font-['Sora']">
                  {service.title}
                </h3>

                <p className="text-[#6c757d] group-hover:text-white/90 mb-6 font-['DM_Sans'] leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>

                <div className="flex items-center text-[#c59d5f] group-hover:text-white/90 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                  <span className="text-sm font-medium">Watch Demo</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeService && <ServiceModal service={activeService} onClose={() => setActiveService(null)} />}
    </section>
  )
}
