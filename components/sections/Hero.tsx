"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import AnimatedPath from "@/components/ui/spinning-sphere"
import { EntropyFill } from "@/components/ui/entropy-fill"
import { ParvusButton } from "@/components/ui/ParvusButton"

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
})

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 md:px-8 lg:px-12">
      <EntropyFill className="opacity-[0.15]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-[580px]">
          <motion.span
            {...fadeUp(0.1)}
            className="mb-6 block text-[11px] font-medium uppercase tracking-[0.15em] text-[#888888]"
          >
            Agência de Landing Pages
          </motion.span>

          <motion.h1
            {...fadeUp(0.3)}
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
            {...fadeUp(0.7)}
            className="font-inter mt-6 max-w-[460px] text-[18px] leading-[1.6] text-[#888888]"
          >
            Construímos landing pages que transformam visitantes em clientes reais.
            Design extraordinário. Conversão mensurável. Resultado garantido.
          </motion.p>

          <motion.div
            {...fadeUp(0.9)}
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
            {...fadeUp(1.1)}
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

      <div
        className="pointer-events-none absolute right-0 top-1/2 hidden w-[45%] min-w-[280px] max-w-[520px] -translate-y-1/2 select-none lg:block"
        style={{ opacity: 0.55 }}
      >
        <AnimatedPath width={500} height={600} stroke="#F5F5F5" dur="10s" />
      </div>

      <div
        className="pointer-events-none absolute -right-16 top-24 w-[85%] max-w-[420px] opacity-45 select-none lg:hidden"
      >
        <AnimatedPath width={400} height={480} stroke="#F5F5F5" dur="10s" />
      </div>
    </section>
  )
}
