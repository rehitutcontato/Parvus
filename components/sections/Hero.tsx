"use client"

import { motion } from "@/components/framer/motion-elements"
import Link from "next/link"
import { EpicHeroBackground } from "@/components/ui/epic-hero-background"
import { ParvusButton } from "@/components/ui/ParvusButton"

const EASE = [0.16, 1, 0.3, 1] as const

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 md:px-8 lg:px-12">

      {/* ═══════════════════════════════════════
          CAMADA 1 — Background interativo com fumaça/partículas
          z-index: 0 — fica atrás de tudo
      ═══════════════════════════════════════ */}
      <EpicHeroBackground
        aria-hidden="true"
        className="absolute inset-0"
        style={{ zIndex: 0 }}
      />

      {/* ═══════════════════════════════════════
          CAMADA 2 — Gradiente escurece a esquerda
          Garante legibilidade do texto
      ═══════════════════════════════════════ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(8,8,8,1) 0%, rgba(8,8,8,0.85) 40%, rgba(8,8,8,0.4) 70%, rgba(8,8,8,0.1) 100%)",
          zIndex: 1,
        }}
      />

      {/* ═══════════════════════════════════════
          CAMADA 3 — Conteúdo do Hero
          z-index: 10 — acima de tudo
      ═══════════════════════════════════════ */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-[580px]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="mb-6 block text-[11px] font-medium uppercase tracking-[0.15em] text-[#888888]"
          >
            Agência de Landing Pages
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
            className="font-geist font-bold leading-[1] text-[#F5F5F5]"
            style={{ fontSize: "clamp(52px, 6.5vw, 88px)" }}
          >
            Seu site não é arte.
            <br />
            É a sua melhor
            <br />
            ferramenta de vendas.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
            className="font-inter mt-6 max-w-[460px] text-[18px] leading-[1.6] text-[#888888]"
          >
            Construímos landing pages que transformam visitantes em clientes reais.
            Design extraordinário. Conversão mensurável. Resultado garantido.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.9 }}
            className="mb-16 mt-10 flex flex-wrap items-center gap-6"
          >
            <ParvusButton
              href="#antes-depois"
              variant="primary"
              className="!px-7 !py-3.5 !text-sm !font-medium"
            >
              Ver antes e depois →
            </ParvusButton>
            <Link
              href="#processo"
              className="text-sm text-[#888888] underline-offset-4 transition-colors hover:text-[#F5F5F5] hover:underline"
              data-hover
            >
              Como trabalhamos
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 1.1 }}
            className="flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-[13px] text-[#444444]">
              Projetos ativos em Americana, Campinas e região
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
