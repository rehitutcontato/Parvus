"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "@/components/framer/motion-elements"
import { Overline } from "@/components/ui/Overline"
import { RadialOrbitalTimeline } from "@/components/ui/radial-orbital-timeline"
import { Target, Search, Palette, Code, Rocket, BarChart3 } from "lucide-react"

// Pipeline de 30 dias - Processo da Parvus
const timelineData = [
  {
    id: 1,
    title: "Planejamento",
    date: "Dias 1-3",
    content: "Definimos objetivos, métricas de sucesso e arquitetura da landing page. Estudo de palavras-chave e personas.",
    icon: Target,
    relatedIds: [2, 6],
    status: "completed" as const,
    energy: 100,
    color: "#3B82F6",
  },
  {
    id: 2,
    title: "Imersão",
    date: "Dias 4-7",
    content: "Análise profunda do negócio: avaliações, concorrência, diferenciais. Entrevistas com stakeholders.",
    icon: Search,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95,
    color: "#8B5CF6",
  },
  {
    id: 3,
    title: "Design",
    date: "Dias 8-14",
    content: "Wireframes, protótipos interativos e sistema visual completo. Aprovação antes de codificar.",
    icon: Palette,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 80,
    color: "#EC4899",
  },
  {
    id: 4,
    title: "Desenvolvimento",
    date: "Dias 15-24",
    content: "Código do zero com Next.js, animações Framer Motion, integrações e otimização de performance.",
    icon: Code,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 60,
    color: "#10B981",
  },
  {
    id: 5,
    title: "Lançamento",
    date: "Dias 25-27",
    content: "Deploy, configuração de domínio, SSL, analytics e testes finais em todos os dispositivos.",
    icon: Rocket,
    relatedIds: [4, 6],
    status: "pending" as const,
    energy: 40,
    color: "#F59E0B",
  },
  {
    id: 6,
    title: "Otimização",
    date: "Dias 28-30",
    content: "A/B testing, ajustes de conversão, SEO técnico e relatório de performance inicial.",
    icon: BarChart3,
    relatedIds: [1, 5],
    status: "pending" as const,
    energy: 25,
    color: "#14B8A6",
  },
]

// 3D Card with hover effects
function StepCard({
  item,
  isActive,
  onHover,
}: {
  item: typeof timelineData[0]
  isActive: boolean
  onHover: (id: number) => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: item.id * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(-1)}
      className="group relative perspective-1000"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative h-full rounded-2xl border p-6 md:p-8 transition-all duration-500 backdrop-blur-sm overflow-hidden"
        style={{
          borderColor: isActive ? item.color : "#1E1E1E",
          background: isActive
            ? `linear-gradient(135deg, ${item.color}08 0%, #0a0a0a 50%, ${item.color}05 100%)`
            : "linear-gradient(135deg, #0f0f0f 0%, #0a0a0a 100%)",
          boxShadow: isActive
            ? `0 0 40px ${item.color}30, 0 0 80px ${item.color}10, inset 0 1px 0 ${item.color}30`
            : "none",
          transform: isActive ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
        }}
      >
        {/* Animated gradient border */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, transparent 40%, ${item.color}20 50%, transparent 60%)`,
            backgroundSize: "200% 200%",
            animation: isActive ? "shimmer 3s linear infinite" : "none",
          }}
        />

        {/* Step indicator */}
        <div className="flex items-center justify-between mb-6">
          <motion.div
            className="flex items-center gap-3"
            animate={isActive ? { scale: 1.05 } : { scale: 1 }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
              style={{
                background: isActive ? `${item.color}20` : "#1E1E1E",
                boxShadow: isActive ? `0 0 20px ${item.color}40` : "none",
              }}
            >
              <item.icon size={20} />
            </div>
            <span
              className="font-geist text-sm font-bold"
              style={{ color: isActive ? item.color : "#555" }}
            >
              {item.id.toString().padStart(2, "0")}
            </span>
          </motion.div>

          <span
            className="text-[11px] uppercase tracking-widest px-3 py-1 rounded-full"
            style={{
              background: isActive ? `${item.color}15` : "#1E1E1E",
              color: isActive ? item.color : "#666",
            }}
          >
            {item.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-geist text-xl md:text-2xl font-bold text-[#F5F5F5] mb-4 group-hover:text-white transition-colors">
          {item.title}
        </h3>

        {/* Body */}
        <p className="text-sm leading-relaxed text-[#888] group-hover:text-[#aaa] transition-colors">
          {item.content}
        </p>

        {/* Progress indicator */}
        <div className="mt-6 flex items-center gap-2">
          <div className="flex-1 h-1 bg-[#1E1E1E] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: item.color }}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${item.energy}%` } : { width: 0 }}
              transition={{ duration: 1.5, delay: item.id * 0.1 + 0.5, ease: "easeOut" }}
            />
          </div>
          <span className="text-xs text-[#555] font-mono">{item.energy}%</span>
        </div>

        {/* Floating particles */}
        {isActive && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full pointer-events-none"
                style={{
                  background: item.color,
                  left: `${15 + i * 15}%`,
                  top: "-10px",
                }}
                animate={{
                  y: [-10, -30, -10],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

export function Processo() {
  const [activeStep, setActiveStep] = useState(-1)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section
      id="processo"
      ref={sectionRef}
      className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0a0a0a] to-[#080808]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, ${timelineData[0].color}10 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, ${timelineData[3].color}10 0%, transparent 40%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 px-5 md:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 text-center"
          >
            <Overline>Processo</Overline>
            <h2 className="mt-4 font-geist text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#F5F5F5]">
              Pipeline de
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}30 dias
              </span>
            </h2>
            <p className="mt-4 text-lg text-[#888] max-w-2xl mx-auto">
              Orbitando entre planejamento e execução. Clique nos nós para explorar cada fase.
            </p>
          </motion.div>

          {/* Orbital Timeline */}
          <div className="hidden lg:block">
            <RadialOrbitalTimeline timelineData={timelineData} />
          </div>

          {/* Grid para mobile e fallback */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:hidden">
            {timelineData.map((item) => (
              <StepCard
                key={item.id}
                item={item}
                isActive={activeStep === item.id}
                onHover={setActiveStep}
              />
            ))}
          </div>

          {/* Legend - Desktop only */}
          <div className="hidden lg:flex justify-center gap-8 mt-8 text-sm">
            {timelineData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveStep(activeStep === item.id ? -1 : item.id)}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: item.color }}
                />
                <span className="text-xs">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: 200% 200%; }
          100% { background-position: -200% -200%; }
        }
      `}</style>
    </section>
  )
}
