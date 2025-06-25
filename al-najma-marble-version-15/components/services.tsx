"use client"

import { useEffect, useState, useRef } from "react"
import { Sparkles, Droplets, Shield, X, Wrench, Brush, Zap, Hammer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Updated color logic from your second code
const services = [
  {
    id: "marble-restoration",
    title: "Marble Restoration",
    description:
      "Complete restoration of damaged marble surfaces, bringing them back to their original beauty with professional techniques and premium materials.",
    icon: Sparkles,
    color: "from-[#c59d5f] to-[#e7c992]",
    gradient: "bg-gradient-to-br from-[#c59d5f]/20 to-[#e7c992]/10",
    textColor: "text-stone-800",
    details:
      "Our marble restoration process includes crack repair, stain removal, surface leveling, and complete refinishing to restore your marble's natural elegance.",
  },
  {
    id: "marble-shining",
    title: "Marble Shining",
    description:
      "Professional marble shining services that restore the natural luster and brilliance of your marble surfaces with diamond polishing techniques.",
    icon: Zap,
    color: "from-[#c59d5f] to-[#e7c992]",
    gradient: "bg-gradient-to-br from-[#c59d5f]/20 to-[#e7c992]/10",
    textColor: "text-stone-800",
    details:
      "Using advanced diamond polishing compounds and techniques, we restore the mirror-like finish that makes marble surfaces truly spectacular.",
  },
  {
    id: "marble-grouting",
    title: "Marble Grouting",
    description:
      "Expert grouting services for marble installations, ensuring perfect sealing and long-lasting protection against moisture and stains.",
    icon: Brush,
    color: "from-[#00675b] to-[#00a896]",
    gradient: "bg-gradient-to-br from-[#00675b]/20 to-[#00a896]/10",
    textColor: "text-teal-900",
    details:
      "Professional grouting with premium sealants that protect your marble joints from water damage, staining, and deterioration.",
  },
  {
    id: "marble-fixing",
    title: "Marble Fixing",
    description:
      "Professional marble installation and fixing services for floors, walls, countertops, and decorative elements with precision and care.",
    icon: Wrench,
    color: "from-[#c59d5f] to-[#00675b]",
    gradient: "bg-gradient-to-br from-[#c59d5f]/20 to-[#00675b]/10",
    textColor: "text-neutral-800",
    details:
      "Expert installation services ensuring perfect alignment, proper support, and long-lasting durability for all marble applications.",
  },
  {
    id: "marble-polishing",
    title: "Marble Polishing",
    description:
      "Diamond polishing services that bring out the natural shine and beauty of marble surfaces with professional-grade equipment.",
    icon: Sparkles,
    color: "from-[#c59d5f] to-[#e7c992]",
    gradient: "bg-gradient-to-br from-[#c59d5f]/20 to-[#e7c992]/10",
    textColor: "text-stone-800",
    details:
      "Multi-stage polishing process using diamond pads and compounds to achieve the perfect mirror finish on all marble surfaces.",
  },
  {
    id: "marble-cleaning",
    title: "Marble Cleaning",
    description:
      "Specialized cleaning services using marble-safe products and techniques to maintain the beauty and integrity of your surfaces.",
    icon: Droplets,
    color: "from-[#00675b] to-[#00a896]",
    gradient: "bg-gradient-to-br from-[#00675b]/20 to-[#00a896]/10",
    textColor: "text-teal-900",
    details:
      "Safe, effective cleaning methods that remove dirt, grime, and stains without damaging the marble's natural structure.",
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    description:
      "Intensive deep cleaning services that penetrate marble pores to remove embedded dirt, stains, and restore original appearance.",
    icon: Shield,
    color: "from-[#1b1b1b] to-[#4a4a4a]",
    gradient: "bg-gradient-to-br from-[#1b1b1b]/20 to-[#4a4a4a]/10",
    textColor: "text-gray-100",
    details:
      "Comprehensive deep cleaning process that removes years of buildup and prepares surfaces for polishing and sealing treatments.",
  },
]

// Floating particles component with new color
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

// Animated blob shapes with new color
const AnimatedBlobs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large blob */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#c59d5f]/10 to-[#00675b]/5 rounded-full blur-3xl animate-blob" />
      {/* Medium blob */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-[#00675b]/10 to-[#c59d5f]/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
      {/* Small blob */}
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
            if (cardIndex !== -1) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, cardIndex])
              }, cardIndex * 150) // Staggered animation
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="our-services" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Light Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CCD5AE] via-[#FEFAE0] to-[#FAEDCD] text-black">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#c59d5f]/5 via-transparent to-[#00675b]/5 animate-gradient-x" />

        {/* Floating particles */}
        <FloatingParticles />

        {/* Animated blobs */}
        <AnimatedBlobs />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(197, 157, 95, 0.3) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-['Unbounded'] text-white">
            Our Premium{" "}
            <span className="bg-gradient-to-r from-[#c59d5f] to-[#00675b] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-['DM_Sans']">
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
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
              )}
              onClick={() => setActiveService(service)}
            >
              {/* Card container with hover effects */}
              <div className="relative h-full p-6 rounded-2xl backdrop-blur-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#c59d5f]/20">
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#c59d5f]/20 to-[#00675b]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                {/* Service icon with animation */}
                <div
                  className={`relative w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <service.icon className="h-8 w-8 text-white group-hover:animate-pulse" />

                  {/* Icon glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white font-['Sora'] group-hover:text-[#c59d5f] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className={cn(
                  "mb-6 font-['DM_Sans'] leading-relaxed group-hover:text-white transition-colors duration-300",
                  service.textColor
                )}>
                  {service.description}
                </p>

                {/* Learn more button */}
                <div className="flex items-center text-[#c59d5f] group-hover:text-white transition-colors duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg
                    className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for service details */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div
            className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/20 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
              <div
                className={`w-full h-full bg-gradient-to-br ${activeService.color} relative flex items-center justify-center`}
              >
                <activeService.icon className="h-20 w-20 text-white animate-pulse" />

                {/* Animated particles in modal */}
                <div className="absolute inset-0">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm"
                onClick={() => setActiveService(null)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-['Sora']">
                {activeService.title}
              </h3>

              <p className="text-white/80 mb-6 font-['DM_Sans']">{activeService.details}</p>

              <div className="space-y-4">
                <h4 className="font-bold text-white">Process:</h4>
                <ul className="list-disc pl-5 space-y-2 text-white/70">
                  <li>Initial assessment and surface evaluation</li>
                  <li>Professional preparation and cleaning</li>
                  <li>Specialized treatment application</li>
                  <li>Quality inspection and finishing</li>
                </ul>

                <h4 className="font-bold text-white mt-6">Benefits:</h4>
                <ul className="list-disc pl-5 space-y-2 text-white/70">
                  <li>Extends the life of your marble surfaces</li>
                  <li>Enhances natural beauty and elegance</li>
                  <li>Increases property value significantly</li>
                  <li>Easier maintenance and long-term care</li>
                </ul>
              </div>

              <div className="mt-8 flex justify-end">
                <Button
                  onClick={() => {
                    setActiveService(null)
                    document.getElementById("book-consultation")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="bg-gradient-to-r from-[#c59d5f] to-[#00675b] hover:from-[#d5ad6f] hover:to-[#00776b] text-white rounded-full px-6 shadow-lg hover:shadow-[#c59d5f]/25 transition-all duration-300"
                >
                  Book This Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
