"use client"

import { motion } from "@/components/framer/motion-elements"
import { ParvusButton } from "@/components/ui/ParvusButton"
import { whatsappHref } from "@/lib/site"

export function CTAFinal() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-[#F5F5F5] px-5 py-24 text-center text-[#080808]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl"
      >
        <h2 className="font-geist text-[clamp(36px,5vw,72px)] font-bold leading-[1.1] text-[#080808]">
          Seu concorrente já tem o site que você deveria ter.
        </h2>

        <p className="mx-auto mt-8 max-w-[480px] text-lg leading-relaxed text-[#555]">
          Cada dia sem um site que converte é um cliente que foi para outra porta.
          Vamos mudar isso.
        </p>

        <div className="mt-12">
          <ParvusButton
            href={whatsappHref()}
            variant="inverse"
            className="!bg-[#080808] !text-[#F5F5F5] !px-10 !py-4 !text-base"
          >
            Solicitar proposta gratuita →
          </ParvusButton>
        </div>

        <p className="mt-6 text-sm text-[#888]">
          Resposta em até 24 horas. Sem compromisso.
        </p>
      </motion.div>
    </section>
  )
}
