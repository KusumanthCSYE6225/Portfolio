"use client"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import IntroScreen from "@/components/intro-screen"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import LocationBadge from "@/components/location-badge"
import Footer from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function Home() {
  // Default to showing intro
  const [showIntro, setShowIntro] = useState(true)
  // Track whether page has initially loaded
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    // Mark the component as loaded
    setHasLoaded(true)
    
    // Check if we should skip intro based on previous visits
    const hasVisited = localStorage.getItem("hasVisited")
    if (hasVisited === "true") {
      setShowIntro(false)
    }
  }, [])

  // Function to handle intro completion
  const handleIntroComplete = () => {
    setShowIntro(false)
    localStorage.setItem("hasVisited", "true")
  }

  return (
    <>
      {/* Background layer */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Content layer */}
      <div className="relative min-h-screen z-10">
        {hasLoaded && (
          <AnimatePresence mode="wait">
            {showIntro ? (
              <IntroScreen key="intro" onComplete={handleIntroComplete} />
            ) : (
              <motion.div
                key="main-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="min-h-screen text-white"
              >
                <main className="container mx-auto px-6 py-8">
                  <Navbar />
                  <section className="mt-32 mb-16 flex flex-col items-center justify-center text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                      Transform Data into Insight – Explore My Work
                    </h1>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-none px-6 py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <Link href="/work" className="flex items-center gap-2">
                        View My Projects
                        <ArrowRight size={18} />
                      </Link>
                    </Button>
                  </section>
                  <LocationBadge />
                  <Footer />
                </main>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </>
  )
}
