"use client"

import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cursorRef = useRef<{ x: number; y: number; lastX: number; lastY: number; ripples: any[] }>({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    ripples: [],
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    // Get canvas context
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Track cursor position
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = cursorRef.current

      // Calculate movement speed
      const dx = e.clientX - cursor.x
      const dy = e.clientY - cursor.y
      const speed = Math.sqrt(dx * dx + dy * dy)

      // Update cursor position
      cursor.lastX = cursor.x
      cursor.lastY = cursor.y
      cursor.x = e.clientX
      cursor.y = e.clientY

      // Create ripples based on movement speed
      if (speed > 5) {
        const rippleCount = Math.min(Math.floor(speed / 10), 3) // Max 3 ripples at once
        for (let i = 0; i < rippleCount; i++) {
          cursor.ripples.push({
            x: cursor.x,
            y: cursor.y,
            size: 0,
            maxSize: 50 + Math.random() * 50, // Random max size between 50-100
            alpha: 0.5,
            hue: 120 + Math.floor(Math.random() * 60), // Random hue between 120-180 (green to blue)
          })
        }
      }
    }

    document.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const cursor = cursorRef.current

      // Draw ripples
      cursor.ripples.forEach((ripple: any, index: number) => {
        ripple.size += 2
        ripple.alpha *= 0.96 // Fade out

        if (ripple.size > ripple.maxSize || ripple.alpha < 0.01) {
          // Remove faded ripples
          cursor.ripples.splice(index, 1)
          return
        }

        // Draw ripple
        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${ripple.hue}, 80%, 60%, ${ripple.alpha})`
        ctx.fill()
      })

      // Draw cursor
      if (cursor.x && cursor.y) {
        // Outer glow
        const gradient = ctx.createRadialGradient(cursor.x, cursor.y, 0, cursor.x, cursor.y, 16)
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)")
        gradient.addColorStop(0.5, "rgba(100, 200, 255, 0.4)")
        gradient.addColorStop(1, "rgba(0, 200, 180, 0)")

        ctx.beginPath()
        ctx.arc(cursor.x, cursor.y, 16, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Center dot
        ctx.beginPath()
        ctx.arc(cursor.x, cursor.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = "white"
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" style={{ mixBlendMode: "lighten" }} />
  )
}
