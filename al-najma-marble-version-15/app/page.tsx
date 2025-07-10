"use client"

import { useEffect, useRef, useState } from "react"
import Navbar from "@/components/navbar"
import ContactHeader from "@/components/contact-header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import AboutUs from "@/components/about-us"
import Testimonials from "@/components/testimonials"
import Location from "@/components/location"
import Stats from "@/components/stats"
import Footer from "@/components/footer"
import FloatingAction from "@/components/floating-action"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Refs for sections
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const testimonialsRef = useRef(null)
  const locationRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f7f7f7] via-[#eae0d5] to-[#c59d5f]/20">
      <div className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar
          scrollTargets={{
            hero: heroRef,
            services: servicesRef,
            about: aboutRef,
            testimonials: testimonialsRef,
            location: locationRef,
          }}
        />
        <ContactHeader />
        <div ref={heroRef}><Hero /></div>
        <div ref={servicesRef}><Services /></div>
        <div ref={aboutRef}><AboutUs /></div>
        <Stats />
        <div ref={testimonialsRef}><Testimonials /></div>
        <div ref={locationRef}><Location /></div>
        <Footer
  scrollTargets={{
    hero: heroRef,
    services: servicesRef,
    about: aboutRef,
    testimonials: testimonialsRef,
    location: locationRef,
  }}
/>
        <FloatingAction />
      </div>
    </main>
  )
}
