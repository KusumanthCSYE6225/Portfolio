"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"

export default function LocationBadgeMobile() {
  return (
    <div className="fixed bottom-10 left-4 z-40 block sm:hidden">
      <div className="flex items-center gap-2 rounded-full bg-[#b0a9b0] px-3 py-2 text-white shadow-lg backdrop-blur-sm">
        <div className="flex flex-col">
          <span className="text-[10px] font-light opacity-70">Located</span>
          <span className="text-xs font-medium">in Boston</span>
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 600, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="flex items-center justify-center"
        >
          <Globe size={16} className="text-white" />
        </motion.div>
      </div>
    </div>
  )
}
