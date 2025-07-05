"use client"

import { useEffect, useState, useRef } from "react"
import { Sparkles, Droplets, Shield, X, Wrench, Brush, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// ----------- SERVICES DATA -----------
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
    serviceImages: ["/images/s2.jpg", "/images/s20.jpg", "/images/s4.jpg"],
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
  {
    id: "marble-shining",
    title: "Marble Shining",
    description:
      "Professional marble shining services that restore the natural luster and brilliance of your marble surfaces with diamond polishing techniques.",
    icon: Zap,
    hoverBg: "group-hover:bg-gradient-to-br group-hover:from-[#00675b] group-hover:to-[#00a896]",
    details:
      "Using advanced diamond polishing compounds and techniques, we restore the mirror-like finish that makes marble surfaces truly spectacular.",
    videoUrl: "/videos/s22.mp4",
    videoDescription:
      "See the incredible transformation as we bring back the mirror-like shine to dull marble surfaces.",
    serviceImages: ["/images/s19.jpg", "/images/s7.jpg", "/images/s8.jpg"],
    processHighlights: [
      "Diamond powder polishing compounds application",
      "Progressive grit sequence for optimal shine",
      "High-speed buffing with professional equipment",
      "Final crystallization for lasting brilliance",
    ],
    keyBenefits: [
      "Achieves mirror-like reflective finish",
      "Enhances natural marble patterns and colors",
      "Creates stunning visual impact",
      "Professional showroom-quality results",
    ],
  },
  {
    id: "marble-grouting",
    title: "Marble Grouting",
    description:
      "Expert grouting services for marble installations, ensuring perfect sealing and long-lasting protection against moisture and stains.",
    icon: Brush,
    hoverBg: "group-hover:bg-gradient-to-br group-hover:from-[#1b1b1b] group-hover:to-[#4a4a4a]",
    details:
      "Professional grouting with premium sealants that protect your marble joints from water damage, staining, and deterioration.",
    videoUrl: "/videos/s23.mp4",
    videoDescription:
      "Learn about our precision grouting techniques that ensure long-lasting protection and perfect finishes.",
    serviceImages: ["/images/s10.jpg", "/images/s11.jpg", "/images/s12.jpg"],
    processHighlights: [
      "Premium epoxy and cement-based grout selection",
      "Precision application with professional tools",
      "Color-matching for seamless integration",
      "Waterproof sealing for maximum protection",
    ],
    keyBenefits: [
      "Prevents water damage and moisture infiltration",
      "Maintains structural integrity of installation",
      "Easy maintenance and cleaning",
      "Long-lasting protection for years",
    ],
  },
  {
    id: "marble-fixing",
    title: "Marble Fixing",
    description:
      "Professional marble installation and fixing services for floors, walls, countertops, and decorative elements with precision and care.",
    icon: Wrench,
    hoverBg: "group-hover:bg-gradient-to-br group-hover:from-[#c59d5f] group-hover:to-[#00675b]",
    details:
      "Expert installation services ensuring perfect alignment, proper support, and long-lasting durability for all marble applications.",
    videoUrl: "/videos/s24.mp4",
    videoDescription:
      "Watch our skilled craftsmen install marble with precision, ensuring perfect alignment and lasting beauty.",
    serviceImages: ["/images/s14.jpg", "/images/s18.jpg", "/images/s16.jpg"],
    processHighlights: [
      "Precise measurement and template creation",
      "Professional cutting and edge finishing",
      "Structural support assessment and reinforcement",
      "Perfect leveling and alignment techniques",
    ],
    keyBenefits: [
      "Flawless installation with perfect joints",
      "Structural integrity and long-term stability",
      "Custom fitting for any space or design",
      "Professional craftsmanship guarantee",
    ],
  },
  {
    id: "marble-polishing",
    title: "Marble Polishing",
    description:
      "Diamond polishing services that bring out the natural shine and beauty of marble surfaces with professional-grade equipment.",
    icon: Sparkles,
    hoverBg: "group-hover:bg-gradient-to-br group-hover:from-[#00675b] group-hover:to-[#00a896]",
    details:
      "Multi-stage polishing process using diamond pads and compounds to achieve the perfect mirror finish on all marble surfaces.",
    videoUrl: "/videos/s25.mp4",
    videoDescription:
      "Experience our multi-stage diamond polishing process that creates stunning mirror-like finishes.",
    serviceImages: ["/images/s6.jpg", "/images/s3.jpg", "/images/s15.jpg"],
    processHighlights: [
      "Multi-stage diamond pad progression (50-3000 grit)",
      "Wet polishing technique for dust-free operation",
      "Professional-grade polishing machines",
      "Final buffing for maximum gloss retention",
    ],
    keyBenefits: [
      "Achieves high-gloss mirror finish",
      "Removes scratches and surface imperfections",
      "Enhances marble's natural beauty",
      "Increases surface durability and longevity",
    ],
  },
  {
    id: "marble-cleaning",
    title: "Marble Cleaning",
    description:
      "Specialized cleaning services using marble-safe products and techniques to maintain the beauty and integrity of your surfaces.",
    icon: Droplets,
    hoverBg: "group-hover:bg-gradient-to-br group-hover:from-[#1b1b1b] group-hover:to-[#4a4a4a]",
    details:
      "Safe, effective cleaning methods that remove dirt, grime, and stains without damaging the marble's natural structure.",
    videoUrl: "/videos/s26.mp4",
    videoDescription:
      "Discover our safe and effective cleaning methods that preserve marble while removing stubborn stains.",
    serviceImages: ["/images/s1.jpg", "/images/s5.jpg", "/images/s9.jpg"],
    processHighlights: [
      "pH-neutral marble-safe cleaning solutions",
      "Specialized stain removal techniques",
      "Gentle scrubbing with soft-bristle brushes",
      "Thorough rinsing and drying procedures",
    ],
    keyBenefits: [
      "Preserves marble's natural composition",
      "Removes stains without surface damage",
      "Maintains original color and patterns",
      "Safe for food preparation areas",
    ],
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    description:
      "Intensive deep cleaning services that penetrate marble pores to remove embedded dirt, stains, and restore original appearance.",
    icon: Shield,
    hoverBg: "group-hover:bg-gradient-to-br group-hover:from-[#c59d5f] group-hover:to-[#e7c992]",
    details:
      "Comprehensive deep cleaning process that removes years of buildup and prepares surfaces for polishing and sealing treatments.",
    videoUrl: "/videos/s27.mp4",
    videoDescription: "See the dramatic before and after results of our intensive deep cleaning process.",
    serviceImages: ["/images/s13.jpg", "/images/s17.jpg", "/images/professional-cleaning.jpg"],
    processHighlights: [
      "High-pressure steam cleaning technology",
      "Specialized extraction of embedded contaminants",
      "Industrial-grade cleaning equipment",
      "Complete sanitization and deodorization",
    ],
    keyBenefits: [
      "Removes years of accumulated dirt and grime",
      "Prepares surface for optimal polishing results",
      "Eliminates bacteria and allergens",
      "Restores marble to near-original condition",
    ],
  },
]
// ----------- MODAL COMPONENT -----------
const ServiceModal = ({ service, onClose }) => {
  const videoRef = useRef(null)

  // Lock background scroll and play video on open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    const video = videoRef.current
    if (video) {
      video.muted = true
      video.loop = true
      video.autoplay = true
      video.playsInline = true
      video.preload = "auto"
      video.play().catch(() => {})
    }
    return () => {
      document.body.style.overflow = ""
      if (video) video.pause()
    }
  }, [service])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-6 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl w-full max-w-md md:max-w-3xl shadow-2xl border border-gray-200 flex flex-col"
        style={{ maxHeight: "90vh" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/80 hover:bg-white/90 text-[#2c2c2c] rounded-full backdrop-blur-sm z-10"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Responsive Media Grid */}
        <div className="flex flex-col md:flex-row gap-4 p-4 pb-0">
          {/* Video 1:1 box */}
          <div className="flex-shrink-0 w-full md:w-[340px] aspect-square rounded-xl overflow-hidden bg-black flex items-center justify-center mx-auto md:mx-0 shadow-lg">
            <video
              ref={videoRef}
              src={service.videoUrl}
              poster={service.serviceImages[0]}
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              className="w-full h-full object-cover rounded-xl filter brightness-95 contrast-110 saturate-110"
            />
          </div>
          {/* Images: row on mobile, column on desktop */}
          <div className="flex md:flex-col flex-row gap-3 md:gap-4 md:w-32 w-full justify-center items-center md:items-stretch">
            {service.serviceImages.slice(0, 3).map((img, idx) => (
              <div key={idx} className="w-1/3 md:w-full aspect-square rounded-lg overflow-hidden shadow-md bg-gray-100 flex items-center justify-center">
                <img
                  src={img}
                  alt={`${service.title} image ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-white rounded-b-2xl">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#2c2c2c] font-['Sora']">{service.title}</h3>
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

// ----------- BACKGROUND ANIMATION COMPONENTS -----------
const FloatingParticles = () => (
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

const AnimatedBlobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#c59d5f]/10 to-[#00675b]/5 rounded-full blur-3xl animate-blob" />
    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-[#00675b]/10 to-[#c59d5f]/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#c59d5f]/5 to-[#00675b]/10 rounded-full blur-2xl animate-blob animation-delay-4000" />
  </div>
)

// ----------- MAIN SERVICES COMPONENT -----------
export default function Services() {
  const [activeService, setActiveService] = useState(null)
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  // Animate cards on scroll
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
