"use client"

import { motion } from "framer-motion"
import { ParvusButton } from "@/components/ui/ParvusButton"
import { whatsappHref } from "@/lib/site"

const words =
  "Seu concorrente já tem o site que você deveria ter.".split(" ")

export function CTAFinal() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#F5F5F5] px-5 py-24 text-center text-[#080808]">
      <h2 className="max-w-4xl font-geist text-[clamp(44px,6vw,88px)] font-bold leading-[1.05] text-[#080808]">
        {words.map((w, i) => (
          <motion.span
            key={`${w}-${i}`}
            className="inline-block mr-[0.2em]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: i * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {w}
          </motion.span>
        ))}
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="mt-8 max-w-[500px] text-lg text-[#444444]"
      >
        Cada dia sem um site que converte é um cliente que foi para outra porta. Vamos mudar
        isso.
      </motion.p>

      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="mt-12"
      >
        <ParvusButton
          href={whatsappHref()}
          variant="inverse"
          className="!bg-[#080808] !text-[#F5F5F5] !px-10 !py-[18px] !text-lg"
        >
          Solicitar proposta gratuita →
        </ParvusButton>
      </motion.div>

      <p className="mt-6 text-[13px] text-[#888888]">
        Resposta em até 24 horas. Sem compromisso.
      </p>
    </section>
  )
}
