"use client"

import { useEffect, useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al Mansouri",
    role: "Villa Owner, Palm Jumeirah",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The transformation of our marble floors was beyond expectations. The team was professional, punctual, and delivered exceptional results. Our floors now have a mirror-like finish that guests always compliment.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Interior Designer",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "As an interior designer, I've worked with many marble restoration companies, but this team stands out. Their attention to detail and commitment to quality is unmatched. I recommend them to all my clients.",
  },
  {
    id: 3,
    name: "Mohammed Al Farsi",
    role: "Hotel Manager, Luxury Resort",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "We needed our lobby floors restored without disrupting our guests. The team worked efficiently during off-hours and delivered stunning results. The marble now enhances the luxury experience of our hotel.",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Apartment Owner, Downtown Dubai",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "I was hesitant about restoring my old marble floors, but I'm so glad I chose this company. They were honest about what could be achieved and delivered exactly what they promised. My floors look almost new again!",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Animation on scroll
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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section id="client-reviews" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-['Unbounded'] text-[#1b1b1b]">
            Client{" "}
            <span className="bg-gradient-to-r from-[#c59d5f] to-[#00675b] bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-lg text-[#1b1b1b]/70 max-w-2xl mx-auto font-['DM_Sans']">
            Hear what our satisfied clients have to say about our marble restoration services
          </p>
        </div>

        <div
          className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {/* Testimonial Cards */}
          <div className="relative overflow-hidden">
            <div className="flex flex-wrap">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={cn("w-full px-4 transition-all duration-500", index === activeIndex ? "block" : "hidden")}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-[#c59d5f]/10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#c59d5f]">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#1b1b1b]">{testimonial.name}</h4>
                        <p className="text-sm text-[#1b1b1b]/70">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "h-4 w-4",
                                i < testimonial.rating ? "text-[#c59d5f] fill-[#c59d5f]" : "text-gray-300",
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-[#1b1b1b]/80 italic font-['DM_Sans']">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-5 w-5 text-[#1b1b1b]" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-5 w-5 text-[#1b1b1b]" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-[#c59d5f] w-6" : "bg-[#c59d5f]/30 hover:bg-[#c59d5f]/50",
                )}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
