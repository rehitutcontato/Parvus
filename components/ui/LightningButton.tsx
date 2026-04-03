"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "@/components/framer/motion-elements"
import { cn } from "@/lib/utils"

interface LightningButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "primary" | "inverse" | "dark"
  href?: string
}

export function LightningButton({
  children,
  onClick,
  className,
  variant = "inverse",
  href,
}: LightningButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [bolts, setBolts] = useState<Array<{ id: number; angle: number; delay: number }>>([])

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (href) {
        e.preventDefault()
      }

      // Gerar raios em múltiplas direções
      const newBolts = Array.from({ length: 12 }, (_, i) => ({
        id: Date.now() + i,
        angle: (i * 30) + (Math.random() * 20 - 10),
        delay: i * 0.05,
      }))
      setBolts(newBolts)
      setIsAnimating(true)

      // Limpar raios após animação
      setTimeout(() => {
        setBolts([])
      }, 800)

      // Chamar onClick original
      setTimeout(() => {
        onClick?.()
      }, 400)
    },
    [onClick, href]
  )

  const baseStyles = {
    primary: "bg-[#F5F5F5] text-[#080808] hover:bg-white",
    inverse: "bg-[#080808] text-[#F5F5F5] hover:bg-[#1a1a1a]",
    dark: "bg-[#0a0a0a] text-[#F5F5F5] hover:bg-[#141414] border border-[#333]",
  }

  const ButtonContent = () => (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {/* Efeito de brilho no botão */}
      <motion.div
        className="absolute inset-0 rounded-[4px]"
        animate={isAnimating ? {
          boxShadow: [
            "0 0 0px rgba(245,245,245,0)",
            "0 0 30px rgba(245,245,245,0.5)",
            "0 0 60px rgba(245,245,245,0.3)",
            "0 0 0px rgba(245,245,245,0)",
          ]
        } : {}}
        transition={{ duration: 0.6 }}
      />

      {/* Raios elétricos */}
      <AnimatePresence>
        {bolts.map((bolt) => (
          <motion.div
            key={bolt.id}
            className="absolute left-1/2 top-1/2 pointer-events-none"
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1.5, 2, 2.5],
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.6,
              delay: bolt.delay,
              ease: "easeOut",
            }}
            style={{
              transform: `rotate(${bolt.angle}deg)`,
            }}
          >
            {/* Raio principal */}
            <svg
              width="120"
              height="40"
              viewBox="0 0 120 40"
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.path
                d="M10,20 L30,15 L50,25 L70,10 L90,20 L110,18"
                stroke="url(#lightning-gradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{ 
                  duration: 0.4,
                  delay: bolt.delay,
                  ease: "easeInOut",
                }}
              />
              <defs>
                <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F5F5F5" stopOpacity="0" />
                  <stop offset="50%" stopColor="#F5F5F5" stopOpacity="1" />
                  <stop offset="100%" stopColor="#F5F5F5" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Raio secundário (mais fino) */}
            <svg
              width="100"
              height="30"
              viewBox="0 0 100 30"
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%) rotate(5deg)",
              }}
            >
              <motion.path
                d="M5,15 L25,20 L45,12 L65,22 L85,15 L95,18"
                stroke="url(#lightning-gradient-2)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 0.7, 0.7, 0],
                }}
                transition={{ 
                  duration: 0.35,
                  delay: bolt.delay + 0.05,
                  ease: "easeInOut",
                }}
              />
              <defs>
                <linearGradient id="lightning-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#888" stopOpacity="0" />
                  <stop offset="50%" stopColor="#F5F5F5" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#888" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Flash de luz no centro */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className="absolute inset-0 rounded-[4px] bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={() => setIsAnimating(false)}
          />
        )}
      </AnimatePresence>
    </>
  )

  const buttonClasses = cn(
    "relative inline-flex items-center justify-center rounded-[4px] px-10 py-4 text-base font-medium transition-all overflow-visible",
    baseStyles[variant],
    className
  )

  if (href) {
    return (
      <a href={href} onClick={handleClick} className={buttonClasses}>
        <ButtonContent />
      </a>
    )
  }

  return (
    <button onClick={handleClick} className={buttonClasses}>
      <ButtonContent />
    </button>
  )
}
