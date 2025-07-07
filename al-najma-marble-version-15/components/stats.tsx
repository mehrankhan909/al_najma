"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Building, Award, Clock } from "lucide-react"

const stats = [
  {
    id: "clients",
    value: 500,
    label: "Happy Clients",
    icon: Users,
    suffix: "+",
    color: "from-[#f4a261] to-[#e76f51]", // Orange
  },
  {
    id: "projects",
    value: 1200,
    label: "Projects Completed",
    icon: Building,
    suffix: "+",
    color: "from-[#d4c5a9] to-[#f2ede5]", // Beige
  },
  {
    id: "awards",
    value: 15,
    label: "Industry Awards",
    icon: Award,
    suffix: "",
    color: "from-[#e85a4f] to-[#ff9f7a]", // Red
  },
  {
    id: "experience",
    value: 14,
    label: "Years Experience",
    icon: Clock,
    suffix: "+",
    color: "from-[#7ba7d1] to-[#4a90c2]", // Blue
  },
]

export default function Stats() {
  const sectionRef = useRef(null)
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    awards: 0,
    experience: 0,
  })
  const [isVisible, setIsVisible] = useState(false)

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

  // Animate counters when section becomes visible
  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)

    let frame = 0
    const countUp = () => {
      const progress = frame / totalFrames
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

      const newCounters = {}
      stats.forEach((stat) => {
        newCounters[stat.id] = Math.floor(easeProgress * stat.value)
      })

      setCounters(newCounters)

      if (frame < totalFrames) {
        frame++
        requestAnimationFrame(countUp)
      }
    }

    requestAnimationFrame(countUp)
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-[#fdf2f2]/30 via-[#fefae8]/25 via-[#f7f3e9]/30 via-[#fdf0e8]/25 to-[#e8f2f8]/30"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/85 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-[#f7f4f0]/40 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md`}
              >
                <stat.icon className="h-6 w-6 text-white" />
              </div>

              <div className="flex items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold text-[#1b1b1b]">{counters[stat.id]}</span>
                <span className="text-3xl md:text-4xl font-bold text-[#7ba7d1]">{stat.suffix}</span>
              </div>

              <p className="text-sm md:text-base text-[#1b1b1b]/70 mt-2 font-['DM_Sans']">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
