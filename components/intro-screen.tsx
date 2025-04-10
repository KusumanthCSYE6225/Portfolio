"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface IntroScreenProps {
  onComplete: () => void
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const greetings = [
    ".Hello",
    ".Hola",
    ".Bonjour",
    ".Ciao",
    ".Namaste",
    ".こんにちは",
    ".안녕하세요",
    ".مرحبا",
    ".你好",
    ".Salut",
  ]

  // Handle greeting animation sequence
  useEffect(() => {
    // If we've shown all greetings, complete the intro
    if (currentIndex >= greetings.length) {
      const finalTimer = setTimeout(() => {
        onComplete()
      }, 500)
      return () => clearTimeout(finalTimer)
    }
    
    // Otherwise, show the next greeting after a delay
    const timer = setTimeout(() => {
      setCurrentIndex(currentIndex + 1)
    }, 350)
    
    return () => clearTimeout(timer)
  }, [currentIndex, greetings.length, onComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{
        y: "-100%",
        opacity: 0,
        transition: { duration: 1.2, ease: "easeInOut" },
      }}
    >
      <div className="h-24 flex items-center justify-center">
        {currentIndex < greetings.length && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="font-mono font-bold text-white text-4xl md:text-6xl text-center"
          >
            {greetings[currentIndex]}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
