"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    service: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formState.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleServiceChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success message
    setIsSuccess(true)

    // Reset form after delay
    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        organization: "",
        service: "",
        message: "",
      })
      setIsSuccess(false)
    }, 3000)

    setIsSubmitting(false)
  }

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background image with overlay */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/background.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 min-h-screen flex flex-col text-white"
      >
        <main className="container mx-auto px-6 py-8 flex-grow flex items-center">
          <Navbar className="absolute top-0 left-0 right-0 px-6 py-8" />

          <div className="w-full max-w-6xl mx-auto mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
                  Let's start a<br />
                  project
                  <br />
                  together
                </h1>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm text-gray-400">
                      01 — What's your name?
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`bg-transparent border-b ${errors.name ? "border-red-500" : "border-gray-700"} rounded-none px-0 py-2 focus:border-indigo-500 transition-colors`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm text-gray-400">
                      02 — What's your email?
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`bg-transparent border-b ${errors.email ? "border-red-500" : "border-gray-700"} rounded-none px-0 py-2 focus:border-indigo-500 transition-colors`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-sm text-gray-400">
                      03 — What's the name of your organization?
                    </Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formState.organization}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="bg-transparent border-b border-gray-700 rounded-none px-0 py-2 focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm text-gray-400">
                      04 — What services are you looking for?
                    </Label>
                    <Select value={formState.service} onValueChange={handleServiceChange}>
                      <SelectTrigger className="bg-transparent border-b border-gray-700 rounded-none px-0 py-2 focus:border-indigo-500 transition-colors">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="data-engineering">Data Engineering</SelectItem>
                        <SelectItem value="machine-learning">Machine Learning</SelectItem>
                        <SelectItem value="data-visualization">Data Visualization</SelectItem>
                        <SelectItem value="data-analytics">Data Analytics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm text-gray-400">
                      05 — Your message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Hello Kusumanth, I'd like to discuss..."
                      className={`bg-transparent border-b ${errors.message ? "border-red-500" : "border-gray-700"} rounded-none px-0 py-2 min-h-[100px] focus:border-indigo-500 transition-colors`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                </form>

                <div className="flex justify-center mt-16">
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white w-32 h-32 flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? "Sending..." : isSuccess ? "Sent!" : "Send it!"}
                  </Button>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="mb-12">
                  <Image
                    src="/profile.png"
                    alt="Kusumanth Reddy Gali"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm text-gray-400 mb-2">CONTACT DETAILS</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-gray-400" />
                        <span>Gali.k@northeastern.edu</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="text-gray-400" />
                        <span>+1 (857) 425-6737</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm text-gray-400 mb-2">LOCATION</h3>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-gray-400" />
                      <span>Boston, MA</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm text-gray-400 mb-2">SOCIALS</h3>
                    <div className="space-y-1">
                      <div>
                        <a
                          href="https://github.com/kusumanth7329"
                          target="_blank"
                          className="hover:text-indigo-300 transition-colors"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.linkedin.com/in/kusumanth-gali-41736617a/"
                          target="_blank"
                          className="hover:text-indigo-300 transition-colors"
                          rel="noreferrer"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </motion.div>
    </div>
  )
}
