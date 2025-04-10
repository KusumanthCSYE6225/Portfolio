"use client"

import Navbar from "@/components/navbar"
import InformationSection from "@/components/information-section"
import { motion } from "framer-motion"

export default function InformationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white"
    >
      <main className="container mx-auto px-6 py-8">
        <Navbar />
        <section className="mt-32 mb-16">
          <InformationSection />
        </section>
      </main>
    </motion.div>
  )
}
