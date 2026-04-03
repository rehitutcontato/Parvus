"use client"

import { motion, useInView } from "@/components/framer/motion-elements"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { whatsappHref } from "@/lib/site"

const projects = [
  {
    id: 1,
    client: "Clínica Estética",
    before: {
      image: "/images/antes-depois/clinica-antes.jpg",
      label: "Site genérico",
      pain: "Home confusa, 12s de carregamento",
    },
    after: {
      image: "/images/antes-depois/clinica-depois.jpg",
      label: "Pós-Parvus",
      gain: "Agendamentos +340% no primeiro mês",
    },
  },
  {
    id: 2,
    client: "Escritório de Arquitetura",
    before: {
      image: "/images/antes-depois/arquiteto-antes.jpg",
      label: "Template comprado",
      pain: "Zero leads em 6 meses",
    },
    after: {
      image: "/images/antes-depois/arquiteto-depois.jpg",
      label: "Pós-Parvus",
      gain: "15 orçamentos/mês consistentes",
    },
  },
  {
    id: 3,
    client: "Consultório Odontológico",
    before: {
      image: "/images/antes-depois/dentista-antes.jpg",
      label: "Wix/Site pronto",
      pain: "Não aparecia no Google",
    },
    after: {
      image: "/images/antes-depois/dentista-depois.jpg",
      label: "Pós-Parvus",
      gain: "1º no Google Maps, +200% ligações",
    },
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
    >
      {/* Container das imagens */}
      <div className="relative mb-4 overflow-hidden rounded-lg border border-[#1E1E1E] bg-[#0a0a0a]">
        <div className="grid grid-cols-2">
          {/* Antes */}
          <div className="relative aspect-[4/3] overflow-hidden border-r border-[#1E1E1E]">
            <div className="absolute inset-0 bg-[#141414]" />
            {/* Placeholder até ter imagens reais */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[11px] uppercase tracking-widest text-[#333]">
                Antes
              </span>
            </div>
            <div className="absolute left-2 top-2 rounded bg-red-500/20 px-2 py-0.5">
              <span className="text-[10px] font-medium text-red-400">ANTES</span>
            </div>
          </div>

          {/* Depois */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <div className="absolute inset-0 bg-[#0f0f0f]" />
            {/* Placeholder até ter imagens reais */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[11px] uppercase tracking-widest text-[#444]">
                Depois
              </span>
            </div>
            <div className="absolute left-2 top-2 rounded bg-green-500/20 px-2 py-0.5">
              <span className="text-[10px] font-medium text-green-400">DEPOIS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-2">
        <h3 className="font-geist text-base font-medium text-[#F5F5F5]">
          {project.client}
        </h3>
        <div className="flex items-center gap-3 text-[12px]">
          <span className="text-[#555]">{project.before.pain}</span>
          <span className="text-[#333]">→</span>
          <span className="text-green-400">{project.after.gain}</span>
        </div>
      </div>
    </motion.div>
  )
}

export function AntesDepois() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="antes-depois"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 lg:px-12"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 max-w-2xl"
      >
        <span className="mb-4 block text-[11px] uppercase tracking-[0.15em] text-[#444]">
          Resultados reais
        </span>
        <h2
          className="mb-4 font-geist font-bold leading-tight text-[#F5F5F5]"
          style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
        >
          Antes e depois
        </h2>
        <p className="text-base leading-relaxed text-[#888888]">
          O que mudou quando esses negócios deixaram de ter "só um site" e passaram
          a ter uma máquina de conversão.
        </p>
      </motion.div>

      {/* Grid de 3 projetos - sempre visíveis, sem slider */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-[#1E1E1E] pt-12 md:flex-row md:items-center"
      >
        <p
          className="font-geist font-light italic leading-snug text-[#F5F5F5]"
          style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
        >
          &ldquo;O seu site está trabalhando{" "}
          <em className="text-red-400">contra</em> você ou{" "}
          <em className="text-green-400">por</em> você?&rdquo;
        </p>
        <Link
          href={whatsappHref("Quero transformar meu site")}
          className="shrink-0 rounded border border-[#333333] bg-transparent px-6 py-3 text-sm text-[#F5F5F5] transition-colors duration-200 hover:bg-[#141414]"
          data-hover
        >
          Quero meu antes/depois →
        </Link>
      </motion.div>
    </section>
  )
}
