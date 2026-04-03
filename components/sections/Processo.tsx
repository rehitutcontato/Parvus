"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "@/components/framer/motion-elements"
import { Overline } from "@/components/ui/Overline"

const steps = [
  {
    num: "01",
    title: "Imersão no negócio",
    when: "Dia 1–2",
    body: `Estudamos o seu negócio a fundo: avaliações de clientes, presença digital atual, concorrentes. O site nasce dessa análise, não de um template.`,
  },
  {
    num: "02",
    title: "Arquitetura e design",
    when: "Dia 3–7",
    body: `Arquitetura de seções, hierarquia de informação, sistema visual. Você recebe um preview do design antes de qualquer linha de código.`,
  },
  {
    num: "03",
    title: "Desenvolvimento",
    when: "Dia 8–18",
    body: `Código escrito do zero. Animações, interações, responsividade — tudo para ser rápido, confiável e fácil de manter.`,
  },
  {
    num: "04",
    title: "Entrega e ativação",
    when: "Dia 19–21",
    body: `Deploy em produção, domínio configurado, analytics ativo. Você recebe o repositório, credenciais e treinamento.`,
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      {/* Number */}
      <div className="mb-4 flex items-center gap-4">
        <span className="font-geist text-4xl font-bold text-[#1E1E1E] transition-colors duration-500 group-hover:text-[#333]">
          {step.num}
        </span>
        {index < steps.length - 1 && (
          <div className="hidden lg:block h-px flex-1 bg-[#1E1E1E]" />
        )}
      </div>

      {/* Content */}
      <div className="space-y-3">
        <span className="text-[11px] uppercase tracking-widest text-[#555]">
          {step.when}
        </span>
        <h3 className="font-geist text-lg font-semibold text-[#F5F5F5]">
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#888888]">
          {step.body}
        </p>
      </div>
    </motion.div>
  )
}

export function Processo() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.3"],
  })
  
  const lineWidth = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    { stiffness: 120, damping: 32 }
  )

  return (
    <section
      id="processo"
      ref={sectionRef}
      className="relative scroll-mt-24 overflow-hidden px-5 py-24 md:px-8 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <Overline>Processo</Overline>
          <h2 className="mt-3 font-geist text-[clamp(32px,4vw,48px)] font-bold leading-tight text-[#F5F5F5]">
            Da primeira conversa ao site no ar.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#888888]">
            21 dias. 4 fases. Zero templates. Código do zero para o seu negócio.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <StepCard key={step.num} step={step} index={index} />
          ))}
        </div>

        {/* Horizontal progress line (desktop only) */}
        <div className="relative mt-12 hidden lg:block">
          <div className="absolute left-0 right-0 top-0 h-px bg-[#1E1E1E]">
            <motion.div
              className="h-full bg-[#F5F5F5]"
              style={{ width: lineWidth }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
