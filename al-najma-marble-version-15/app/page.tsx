"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import ContactHeader from "@/components/contact-header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import AboutUs from "@/components/about-us"
import BookingWidget from "@/components/booking-widget"
import Testimonials from "@/components/testimonials"
import Location from "@/components/location"
import Stats from "@/components/stats"
import Footer from "@/components/footer"
import FloatingAction from "@/components/floating-action"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set loaded state after a small delay to ensure smooth initial animation
    const timer = setTimeout(() => setIsLoaded(true), 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f7f7f7] via-[#eae0d5] to-[#c59d5f]/20">
      <div className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <ContactHeader />
        <Hero />
        <Services />
        <AboutUs />
        <Stats />
        <Testimonials />
        <BookingWidget />
        <Location />
        <Footer />
        <FloatingAction />
      </div>
    </main>
  )
}
