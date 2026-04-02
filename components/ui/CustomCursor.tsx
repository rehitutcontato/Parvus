"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0
    let dotX = 0,
      dotY = 0
    let ringX = 0,
      ringY = 0
    let isHovering = false

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      const target = e.target as HTMLElement
      isHovering = !!target.closest("a, button, [data-hover]")
    }

    window.addEventListener("mousemove", onMove)

    const animate = () => {
      dotX += (mouseX - dotX) * 0.9
      dotY += (mouseY - dotY) * 0.9
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`
      }
      if (ringRef.current) {
        const size = isHovering ? 40 : 20
        ringRef.current.style.transform = `translate(${ringX - size / 2}px, ${ringY - size / 2}px)`
        ringRef.current.style.width = `${size}px`
        ringRef.current.style.height = `${size}px`
        ringRef.current.style.mixBlendMode = isHovering ? "difference" : "normal"
      }
      requestAnimationFrame(animate)
    }
    animate()

    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <div className="pointer-events-none hidden md:block">
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          background: "#F5F5F5",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.2s, height 0.2s",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 20,
          height: 20,
          border: "1px solid #F5F5F5",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "width 0.2s, height 0.2s, mix-blend-mode 0.2s",
        }}
      />
    </div>
  )
}
