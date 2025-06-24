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
  },
  {
    id: "projects",
    value: 1200,
    label: "Projects Completed",
    icon: Building,
    suffix: "+",
  },
  {
    id: "awards",
    value: 15,
    label: "Industry Awards",
    icon: Award,
    suffix: "",
  },
  {
    id: "experience",
    value: 12,
    label: "Years Experience",
    icon: Clock,
    suffix: "+",
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-[#c59d5f]/10 to-[#00675b]/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-[#c59d5f]/10"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#c59d5f] to-[#00675b] flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-white" />
              </div>

              <div className="flex items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold text-[#1b1b1b]">{counters[stat.id]}</span>
                <span className="text-3xl md:text-4xl font-bold text-[#c59d5f]">{stat.suffix}</span>
              </div>

              <p className="text-sm md:text-base text-[#1b1b1b]/70 mt-2 font-['DM_Sans']">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
