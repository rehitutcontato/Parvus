"use client"

import { useState } from "react"
import { motion } from "@/components/framer/motion-elements"
import { LightningButton } from "@/components/ui/LightningButton"
import { SuccessTransition } from "@/components/ui/SuccessTransition"

export function CTAFinal() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleClick = () => {
    setShowSuccess(true)
  }

  return (
    <>
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
            <LightningButton
              onClick={handleClick}
              variant="dark"
              className="!px-10 !py-4 !text-base"
            >
              Solicitar proposta gratuita →
            </LightningButton>
          </div>

          <p className="mt-6 text-sm text-[#888]">
            Resposta em até 24 horas. Sem compromisso.
          </p>
        </motion.div>
      </section>

      <SuccessTransition 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)}
      />
    </>
  )
}
