"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  { id: "polishing", name: "Diamond Polishing" },
  { id: "cleaning", name: "Deep Cleaning" },
  { id: "sealing", name: "Nano Sealing" },
  { id: "repair", name: "Crack Repair" },
]

export default function BookingWidget() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1000)
  }

  return (
    <section id="book-consultation" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-['Unbounded'] text-[#1b1b1b]">
            Book a{" "}
            <span className="bg-gradient-to-r from-[#c59d5f] to-[#00675b] bg-clip-text text-transparent">
              Consultation
            </span>
          </h2>
          <p className="text-lg text-[#1b1b1b]/70 max-w-2xl mx-auto font-['DM_Sans']">
            Schedule a free consultation with our marble restoration experts
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-[#c59d5f]/10">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#c59d5f] to-[#00675b] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1b1b1b]">Thank You!</h3>
                <p className="text-[#1b1b1b]/70 mb-6">
                  Your consultation request has been received. One of our experts will contact you shortly to confirm
                  your appointment.
                </p>
                <Button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-gradient-to-r from-[#c59d5f] to-[#00675b] hover:from-[#d5ad6f] hover:to-[#00776b] text-white rounded-full px-6"
                >
                  Book Another Consultation
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#1b1b1b]/70">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="border-[#c59d5f]/20 focus:border-[#c59d5f] focus:ring-[#c59d5f]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#1b1b1b]/70">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      required
                      className="border-[#c59d5f]/20 focus:border-[#c59d5f] focus:ring-[#c59d5f]"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#1b1b1b]/70">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      placeholder="Your phone number"
                      required
                      className="border-[#c59d5f]/20 focus:border-[#c59d5f] focus:ring-[#c59d5f]"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2 text-[#1b1b1b]/70">
                      Service Interested In
                    </label>
                    <Select>
                      <SelectTrigger className="border-[#c59d5f]/20 focus:border-[#c59d5f] focus:ring-[#c59d5f]">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-2 text-[#1b1b1b]/70">
                      Preferred Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal border-[#c59d5f]/20 focus:border-[#c59d5f] focus:ring-[#c59d5f]",
                            !date && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Select a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <label htmlFor="property" className="block text-sm font-medium mb-2 text-[#1b1b1b]/70">
                      Property Type
                    </label>
                    <Select>
                      <SelectTrigger className="border-[#c59d5f]/20 focus:border-[#c59d5f] focus:ring-[#c59d5f]">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="hotel">Hotel</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#1b1b1b]/70">
                    Additional Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your project..."
                    className="border-[#c59d5f]/20 focus:border-[#c59d5f] focus:ring-[#c59d5f] min-h-[120px]"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#c59d5f] to-[#00675b] hover:from-[#d5ad6f] hover:to-[#00776b] text-white rounded-full py-6 text-lg"
                  >
                    Book Consultation
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
