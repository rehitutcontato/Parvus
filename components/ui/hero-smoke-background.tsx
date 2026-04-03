"use client"

import { useEffect, useRef } from "react"
import { motion } from "@/components/framer/motion-elements"

export function HeroSmokeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      life: number
      maxLife: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + Math.random() * 100
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = -(Math.random() * 0.5 + 0.2)
        this.opacity = Math.random() * 0.3 + 0.1
        this.life = 0
        this.maxLife = Math.random() * 200 + 100
      }

      update() {
        // Movimento base
        this.x += this.speedX
        this.y += this.speedY
        this.life++

        // Interação com mouse
        const dx = mouseRef.current.x - this.x
        const dy = mouseRef.current.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          const force = (150 - distance) / 150
          this.x -= dx * force * 0.02
          this.y -= dy * force * 0.02
        }

        // Reset quando sai da tela ou morre
        if (this.y < -50 || this.life > this.maxLife) {
          this.x = Math.random() * canvas.width
          this.y = canvas.height + Math.random() * 100
          this.life = 0
          this.opacity = Math.random() * 0.3 + 0.1
        }
      }

      draw() {
        if (!ctx) return
        
        const lifeRatio = 1 - this.life / this.maxLife
        const currentOpacity = this.opacity * lifeRatio

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245, 245, 245, ${currentOpacity})`
        ctx.fill()

        // Glow suave
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245, 245, 245, ${currentOpacity * 0.1})`
        ctx.fill()
      }
    }

    // Criar partículas iniciais
    for (let i = 0; i < 150; i++) {
      const p = new Particle()
      p.y = Math.random() * canvas.height
      particles.push(p)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Desenhar gradiente de fundo suave
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.7, canvas.height * 0.5, 0,
        canvas.width * 0.7, canvas.height * 0.5, canvas.width * 0.6
      )
      gradient.addColorStop(0, "rgba(30, 30, 30, 0.3)")
      gradient.addColorStop(1, "rgba(8, 8, 8, 0)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Atualizar e desenhar partículas
      particles.forEach(p => {
        p.update()
        p.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.8 }}
      />
      
      {/* Logo difusa atrás */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none select-none"
      >
        <div 
          className="font-inter text-[20vw] font-thin tracking-[0.2em] text-[#1a1a1a] whitespace-nowrap"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
          }}
        >
          P A R V U S
        </div>
      </motion.div>

      {/* Neblina animada via CSS */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 70% 50%, rgba(30,30,30,0.4) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 30% 60%, rgba(20,20,20,0.3) 0%, transparent 50%)
            `,
          }}
        />
      </div>
    </>
  )
}
