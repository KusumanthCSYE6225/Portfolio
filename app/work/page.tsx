"use client"

import Navbar from "@/components/navbar"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function WorkPage() {
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
        <main className="container mx-auto px-6 py-8 flex-grow">
          <Navbar />
          <section className="mt-32 mb-16">
            <ProjectsSection />
          </section>
        </main>

        <Footer />
      </motion.div>
    </div>
  )
}
