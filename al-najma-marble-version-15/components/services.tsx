"use client"

import { useEffect, useState, useRef } from "react"
import { Sparkles, Droplets, Shield, X, Wrench, Brush, Zap, Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Full service data with images, video, and bullet points
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
    videoPoster: "/images/s1.jpg",
    videoDescription:
      "Watch our expert team restore damaged marble to its original pristine condition using advanced restoration techniques.",
    serviceImages: [
      "/images/s2.jpg",
      "/images/s3.jpg",
      "/images/s4.jpg",
    ],
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
    videoPoster: "/images/s5.jpg",
    videoDescription:
      "See the incredible transformation as we bring back the mirror-like shine to dull marble surfaces.",
    serviceImages: ["/images/s6.jpg", "/images/s7.jpg", "/images/s8.jpg"],
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
    videoPoster: "/images/s9.jpg",
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
    videoPoster: "/images/s13.jpg",
    videoDescription:
      "Watch our skilled craftsmen install marble with precision, ensuring perfect alignment and lasting beauty.",
    serviceImages: [
      "/images/s14.jpg",
      "/images/s15.jpg",
      "/images/s16.jpg",
    ],
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
    videoPoster: "/images/s17.jpg",
    videoDescription:
      "Experience our multi-stage diamond polishing process that creates stunning mirror-like finishes.",
    serviceImages: [
      "/images/s18.jpg",
      "/images/s19.jpg",
      "/images/s20.jpg",
    ],
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
]

// Video Player Modal with Image Carousel and Bullet Points
const ServiceModal = ({ service, onClose }) => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoading(false)
      setDuration(video.duration)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime)
      setProgress((video.currentTime / video.duration) * 100)
    }

    const handleEnded = () => {
      setIsPlaying(false)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("ended", handleEnded)

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  // Auto-rotate service images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % service.serviceImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [service.serviceImages.length])

  const togglePlay = () => {
    const video = videoRef.current
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  const handleProgressClick = (e) => {
    const video = videoRef.current
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const newTime = (clickX / rect.width) * duration
    video.currentTime = newTime
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden shadow-2xl border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with gradient and icon */}
        <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#c59d5f] to-[#e7c992] flex items-center justify-center">
          <service.icon className="h-20 w-20 text-white animate-pulse" />
          {/* Floating particles in header */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
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
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-sm"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Modal Content */}
        <div className="flex flex-col md:flex-row max-h-[calc(95vh-80px)] overflow-hidden">
          {/* Video Section */}
          <div className="md:w-2/3 relative bg-black">
            <video
              ref={videoRef}
              className="w-full aspect-video"
              poster={service.videoPoster || "/placeholder.svg?height=400&width=800"}
              muted={isMuted}
              playsInline
            >
              <source src={service.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Loading Overlay */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <p className="text-white text-sm">Loading video...</p>
                </div>
              </div>
            )}

            {/* Play Button Overlay */}
            {!isLoading && !isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-white/90 hover:bg-white text-[#495057] shadow-lg"
                >
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
            )}

            {/* Video Controls */}
            {!isLoading && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                {/* Progress Bar */}
                <div className="w-full h-2 bg-white/30 rounded-full cursor-pointer mb-3" onClick={handleProgressClick}>
                  <div
                    className="h-full bg-white rounded-full transition-all duration-200"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={togglePlay}
                      className="text-white hover:bg-white/20 rounded-full"
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleMute}
                      className="text-white hover:bg-white/20 rounded-full"
                    >
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </Button>
                    <span className="text-white text-sm">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="md:w-1/3 p-6 overflow-y-auto bg-white">
            {/* Service Images Carousel */}
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
                        index === currentImageIndex ? "bg-[#c59d5f]" : "bg-[#c59d5f]/40",
                      )}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Video Description */}
            <p className="text-[#495057] mb-4 font-['DM_Sans']">{service.videoDescription}</p>

            <div className="space-y-4">
              <h4 className="font-bold text-[#2c2c2c]">Service Details:</h4>
              <p className="text-[#6c757d] text-sm">{service.details}</p>

              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-[#2c2c2c] mb-2">Process Highlights:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-[#6c757d] text-sm">
                    {service.processHighlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-[#2c2c2c] mb-2">Key Benefits:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-[#6c757d] text-sm">
                    {service.keyBenefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
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
            if (cardIndex !== -1) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, cardIndex])
              }, cardIndex * 150)
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
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
              )}
              onClick={() => setActiveService(service)}
            >
              {/* Card with hover effect */}
              <div className={cn(
                "h-full p-6 rounded-2xl border border-gray-300/30 bg-white/90 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-gray-300/30",
                service.hoverBg
              )}>
                {/* Icon */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-[#c59d5f] to-[#e7c992] group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-[#2c2c2c] group-hover:text-white transition-colors duration-300 font-['Sora']">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#6c757d] group-hover:text-white/90 mb-6 font-['DM_Sans'] leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>

                {/* Watch video button */}
                <div className="flex items-center text-[#c59d5f] group-hover:text-white/90 transition-colors duration-300">
                  <Play className="mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">Watch Demo</span>
                  <svg
                    className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal with video, images, and bullet points */}
      {activeService && (
        <ServiceModal
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      )}
    </section>
  )
}
