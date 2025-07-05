"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

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
export const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

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
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6 bg-black/80 backdrop-blur-[2px] transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-br from-white via-[#fcf7ee] to-[#f5f9f6] rounded-3xl w-full max-w-md md:max-w-3xl shadow-2xl border border-gray-100/80 flex flex-col ring-2 ring-[#c59d5f]/5"
        style={{ maxHeight: "92vh" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/90 hover:bg-[#f5f9f6] text-[#2c2c2c] rounded-full backdrop-blur z-10 shadow"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Responsive Media Layout */}
        <div className="w-full flex flex-col md:flex-row gap-5 p-4 pb-0">
          {/* Video (1:1 box, smaller for mobile) */}
          <div className="flex-shrink-0 w-full md:w-[340px] aspect-square rounded-xl overflow-hidden bg-black flex items-center justify-center mx-auto md:mx-0 shadow-2xl border-2 border-[#c59d5f]/10">
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
              style={{ aspectRatio: "1/1" }}
            />
          </div>
          {/* Images */}
          <div className="w-full md:w-32 flex flex-col md:flex-col gap-3 md:gap-4">
            {/* Desktop: column, Mobile: row below video */}
            <div className="hidden md:flex flex-col gap-4 h-full justify-center">
              {service.serviceImages.slice(0, 3).map((img: string, idx: number) => (
                <div
                  key={idx}
                  className="w-full aspect-square rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-[#c59d5f]/10 to-[#e7c992]/10 flex items-center justify-center border border-[#c59d5f]/10"
                >
                  <img
                    src={img}
                    alt={`${service.title} image ${idx + 1}`}
                    className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Mobile: 3 images in row under video */}
            <div className="flex md:hidden flex-row gap-3 w-full justify-center items-center mt-3">
              {service.serviceImages.slice(0, 3).map((img: string, idx: number) => (
                <div
                  key={idx}
                  className="w-1/3 aspect-square rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-[#c59d5f]/10 to-[#e7c992]/10 flex items-center justify-center border border-[#c59d5f]/10"
                >
                  <img
                    src={img}
                    alt={`${service.title} image ${idx + 1}`}
                    className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-white/90 rounded-b-3xl shadow-inner">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#1b1b1b] font-['Sora'] tracking-tight">
            <span className="inline-block bg-gradient-to-r from-[#c59d5f] via-[#e7c992] to-[#00675b] bg-clip-text text-transparent">
              {service.title}
            </span>
          </h3>
          <p className="text-[#495057] mb-4 font-['DM_Sans'] italic">{service.videoDescription}</p>
          <div className="space-y-4">
            <h4 className="font-bold text-[#2c2c2c]">Service Details:</h4>
            <p className="text-[#6c757d] text-sm">{service.details}</p>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-[#2c2c2c] mb-2">Process Highlights:</h5>
                <ul className="list-disc pl-5 space-y-1 text-[#6c757d] text-sm">
                  {service.processHighlights.map((highlight: string, idx: number) => (
                    <li key={idx} className="font-medium">{highlight}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-[#2c2c2c] mb-2">Key Benefits:</h5>
                <ul className="list-disc pl-5 space-y-1 text-[#6c757d] text-sm">
                  {service.keyBenefits.map((benefit: string, idx: number) => (
                    <li key={idx} className="font-medium">{benefit}</li>
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
              className="w-full bg-gradient-to-r from-[#c59d5f] via-[#e7c992] to-[#00675b] hover:from-[#d5ad6f] hover:to-[#00776b] text-white rounded-full px-6 shadow-lg hover:shadow-2xl transition-all duration-300 font-bold tracking-wide"
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
