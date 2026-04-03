"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "@/components/framer/motion-elements"
import { WHATSAPP_NUMBER } from "@/lib/site"

interface SuccessTransitionProps {
  isOpen: boolean
  onClose?: () => void
}

export function SuccessTransition({ isOpen, onClose }: SuccessTransitionProps) {
  const [countdown, setCountdown] = useState(5)
  const [progress, setProgress] = useState(100)

  const redirectToWhatsApp = useCallback(() => {
    const text = encodeURIComponent("Olá! Vi no site e quero uma proposta gratuita para minha landing page.")
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setCountdown(5)
      setProgress(100)
      return
    }

    // Animação do progresso
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) return 0
        return prev - (100 / 50) // 5 segundos = 50 intervalos de 100ms
      })
    }, 100)

    // Countdown
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          redirectToWhatsApp()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      clearInterval(progressInterval)
      clearInterval(countdownInterval)
    }
  }, [isOpen, redirectToWhatsApp])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Fundo com gradiente animado */}
          <motion.div
            className="absolute inset-0 bg-[#080808]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Efeito de brilho radial */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 80% 50% at 50% 50%, rgba(30,30,30,0.5) 0%, transparent 60%),
                  radial-gradient(circle at 30% 70%, rgba(40,40,40,0.3) 0%, transparent 40%),
                  radial-gradient(circle at 70% 30%, rgba(40,40,40,0.3) 0%, transparent 40%)
                `,
              }}
            />

            {/* Linhas de energia sutis */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              <defs>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#F5F5F5" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              {[...Array(5)].map((_, i) => (
                <motion.line
                  key={i}
                  x1="0"
                  y1={`${20 + i * 15}%`}
                  x2="100%"
                  y2={`${20 + i * 15}%`}
                  stroke="url(#line-grad)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 1, 0],
                    opacity: [0, 0.5, 0.5, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    delay: i * 0.3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              ))}
            </svg>
          </motion.div>

          {/* Conteúdo central */}
          <div className="relative z-10 text-center px-6 max-w-2xl">
            {/* Ícone de check animado */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
            >
              <div className="relative">
                <motion.div
                  className="w-24 h-24 rounded-full border-2 border-[#F5F5F5] flex items-center justify-center"
                  initial={{ boxShadow: "0 0 0px rgba(245,245,245,0)" }}
                  animate={{ 
                    boxShadow: [
                      "0 0 0px rgba(245,245,245,0)",
                      "0 0 40px rgba(245,245,245,0.3)",
                      "0 0 0px rgba(245,245,245,0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F5F5F5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <motion.path
                      d="M20 6L9 17l-5-5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    />
                  </motion.svg>
                </motion.div>

                {/* Raios saindo do check */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1 h-8 bg-gradient-to-t from-transparent via-[#F5F5F5] to-transparent"
                    style={{
                      transformOrigin: "center bottom",
                      transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                    }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ 
                      scaleY: [0, 1.5, 0],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{ 
                      duration: 0.6,
                      delay: 0.8 + i * 0.05,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Título */}
            <motion.h2
              className="font-geist text-[clamp(32px,6vw,56px)] font-bold leading-[1.1] text-[#F5F5F5] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Você escolheu o certo
            </motion.h2>

            {/* Subtítulo */}
            <motion.p
              className="text-[clamp(18px,3vw,28px)] text-[#888] mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Seus negócios estão para decolar
            </motion.p>

            {/* Mensagem secundária */}
            <motion.p
              className="text-[15px] text-[#555] mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Redirecionando para o WhatsApp em...
            </motion.p>

            {/* Contador circular */}
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="relative w-20 h-20">
                {/* Círculo de progresso */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Círculo de fundo */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="3"
                  />
                  {/* Círculo de progresso */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#F5F5F5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 45}
                    strokeDashoffset={(2 * Math.PI * 45 * (100 - progress)) / 100}
                    style={{ transition: "stroke-dashoffset 0.1s linear" }}
                  />
                </svg>

                {/* Número do countdown */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="text-3xl font-bold text-[#F5F5F5] font-geist"
                    key={countdown}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {countdown}
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Botão de redirecionamento imediato */}
            <motion.button
              onClick={redirectToWhatsApp}
              className="mt-8 px-6 py-3 text-sm text-[#888] hover:text-[#F5F5F5] transition-colors underline underline-offset-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ir agora para o WhatsApp →
            </motion.button>
          </div>

          {/* Botão de fechar (opcional) */}
          {onClose && (
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 text-[#555] hover:text-[#F5F5F5] transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
