import type React from "react"
import type { Metadata } from "next"
import { Poppins, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/custom-cursor"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Kusumanth Reddy Gali - Data Engineer & ML Enthusiast",
  description: "Portfolio of Kusumanth Reddy Gali, Data Engineer and Machine Learning Enthusiast",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/background.jpeg" as="image" />
      </head>
      <body className={`${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased cursor-none`}>
        {children}
        <CustomCursor />
      </body>
    </html>
  )
}


import './globals.css'