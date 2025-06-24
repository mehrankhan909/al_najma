"use client"

import { useRef } from "react"

const DemoSimulator = () => {
  const sectionRef = useRef(null)

  return <section id="live-demo" ref={sectionRef} className="py-20 md:py-32 bg-[#f7f7f7]/50"></section>
}

export default DemoSimulator
