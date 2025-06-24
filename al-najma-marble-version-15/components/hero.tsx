"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"

const serviceImages = [
  {
    id: 1,
    src: "/images/marble-kitchen.jpg",
    alt: "Polished Marble Kitchen Countertops",
    title: "Kitchen Restoration",
    description: "Mirror-finish marble surfaces",
  },
  {
    id: 2,
    src: "/images/luxury-marble-hall.jpg",
    alt: "Luxury Marble Hallway",
    title: "Luxury Flooring",
    description: "Premium marble restoration",
  },
  {
    id: 3,
    src: "/images/grand-marble-interior.jpg",
    alt: "Grand Marble Interior",
    title: "Commercial Spaces",
    description: "Professional marble polishing",
  },
  {
    id: 4,
    src: "/images/professional-cleaning.jpg",
    alt: "Professional Steam Cleaning",
    title: "Deep Cleaning",
    description: "Advanced cleaning techniques",
  },
]

export default function Hero() {
  const sectionRef = useRef(null)

  return (
    <section
      id="hero-section"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/videos/marble-polishing.mp4" type="video/mp4" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#f7f7f7] via-[#eae0d5] to-[#c59d5f]/20" />
        </video>

        {/* Enhanced dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10" />
      </div>

      {/* Desktop/Tablet Service Images - Positioned around content */}
      <div className="hidden md:block absolute inset-0 z-20">
        {/* Top Left Image */}
        <div className="absolute top-28 left-6 lg:left-12">
          <div className="relative w-36 lg:w-44 h-28 lg:h-32 rounded-xl overflow-hidden shadow-2xl border-2 border-white/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <img
              src={serviceImages[0].src || "/placeholder.svg"}
              alt={serviceImages[0].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 text-white">
              <h4 className="font-bold text-xs lg:text-sm mb-1">{serviceImages[0].title}</h4>
              <p className="text-xs text-white/90">{serviceImages[0].description}</p>
            </div>
          </div>
        </div>

        {/* Top Right Image */}
        <div className="absolute top-28 right-6 lg:right-12">
          <div className="relative w-36 lg:w-44 h-28 lg:h-32 rounded-xl overflow-hidden shadow-2xl border-2 border-white/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <img
              src={serviceImages[1].src || "/placeholder.svg"}
              alt={serviceImages[1].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 text-white">
              <h4 className="font-bold text-xs lg:text-sm mb-1">{serviceImages[1].title}</h4>
              <p className="text-xs text-white/90">{serviceImages[1].description}</p>
            </div>
          </div>
        </div>

        {/* Bottom Left Image */}
        <div className="absolute bottom-28 left-6 lg:left-12">
          <div className="relative w-36 lg:w-44 h-28 lg:h-32 rounded-xl overflow-hidden shadow-2xl border-2 border-white/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <img
              src={serviceImages[2].src || "/placeholder.svg"}
              alt={serviceImages[2].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 text-white">
              <h4 className="font-bold text-xs lg:text-sm mb-1">{serviceImages[2].title}</h4>
              <p className="text-xs text-white/90">{serviceImages[2].description}</p>
            </div>
          </div>
        </div>

        {/* Bottom Right Image */}
        <div className="absolute bottom-28 right-6 lg:right-12">
          <div className="relative w-36 lg:w-44 h-28 lg:h-32 rounded-xl overflow-hidden shadow-2xl border-2 border-white/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <img
              src={serviceImages[3].src || "/placeholder.svg"}
              alt={serviceImages[3].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 text-white">
              <h4 className="font-bold text-xs lg:text-sm mb-1">{serviceImages[3].title}</h4>
              <p className="text-xs text-white/90">{serviceImages[3].description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom for smooth transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-60 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-8 tracking-tight leading-none">
            <span className="block bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF6347] bg-clip-text text-transparent drop-shadow-2xl font-['Playfair_Display'] italic">
              Al-Najma
            </span>
            <span className="block bg-gradient-to-r from-[#c59d5f] via-[#d4a76a] to-[#00675b] bg-clip-text text-transparent drop-shadow-2xl font-['Cinzel'] font-bold">
              Marble
            </span>
            <span className="block text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl font-['Poppins'] font-light mt-2">
              Polishing & Restoration
            </span>
          </h1>

          {/* Mobile Service Images Grid - Below the text */}
          <div className="md:hidden mb-10">
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
              {serviceImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative h-24 rounded-lg overflow-hidden shadow-xl border-2 border-white/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animation: "fadeInUp 0.8s ease-out forwards",
                  }}
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-1 left-1 text-white">
                    <p className="text-xs font-bold">{image.title}</p>
                    <p className="text-xs text-white/80 leading-tight">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <Button
              variant="outline"
              onClick={() => document.getElementById("our-services")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full border-2 border-white/90 text-black hover:bg-white/15 hover:text-white px-10 py-7 text-lg lg:text-xl backdrop-blur-sm shadow-lg hover:shadow-white/10 transition-all duration-300 font-semibold"
            >
              View Our Services
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/90 text-sm lg:text-base">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#c59d5f] rounded-full animate-pulse"></div>
              <span className="font-medium">500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#c59d5f] rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <span className="font-medium">12+ Years Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#c59d5f] rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              <span className="font-medium">Premium Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
