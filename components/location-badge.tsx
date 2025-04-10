"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"

export default function LocationBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-neutral-900/90 px-4 py-3 text-white shadow-lg backdrop-blur-sm">
      <div className="flex flex-col">
        <span className="text-xs font-light opacity-70">Located</span>
        <span className="text-sm font-medium">in Boston</span>
      </div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="flex items-center justify-center"
      >
        <Globe size={20} className="text-white" />
      </motion.div>
    </div>
  )
}
