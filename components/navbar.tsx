"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavbarProps {
  className?: string
}

export default function Navbar({ className = "" }: NavbarProps) {
  const pathname = usePathname()

  return (
    <header className={`grid grid-cols-2 py-4 ${className}`}>
      <div className="flex flex-col items-start">
        <Link href="/" className="block text-xl font-medium">
          Kusumanth Reddy Gali
        </Link>
        <div className="mt-1 text-sm font-light text-gray-300">
          <div>Data Engineer</div>
          <div>ML Enthusiast</div>
        </div>
      </div>

      <div className="flex items-start justify-end space-x-6">
        <Link
          href="/work"
          className={`text-lg font-normal hover:underline group ${pathname === "/work" ? "underline" : ""}`}
        >
          Work
          <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
        </Link>

        <Link
          href="/about-me"
          className={`text-lg font-normal hover:underline group ${pathname === "/about-me" ? "underline" : ""}`}
        >
          About
          <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
        </Link>

        <Link
          href="/contact"
          className={`text-lg font-normal hover:underline group ${pathname === "/contact" ? "underline" : ""}`}
        >
          Contact
          <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
        </Link>
      </div>
    </header>
  )
}
