"use client"

import { motion } from "framer-motion"
import { Overline } from "@/components/ui/Overline"
import { SpinningSphereBackground } from "@/components/ui/spinning-sphere-background"

const ease = [0.16, 1, 0.3, 1] as const

const blocks = [
  `Todo dono de negócio já ouviu isso: 'vamos fazer um site incrível pra você'. E recebeu algo bonito. Bonito que não toca o telefone. Bonito que não enche a agenda. Bonito que ninguém encontra.`,
  `A Parvus nasceu da necessidade de crescer negócios através dos sites — não é só site bonito, é conversão e é métrica. Ao comprar conosco, o cliente está comprando resultado. Comprando vendas. Não só beleza.`,
  `Não fazemos sites. Fazemos instrumentos de crescimento.`,
]

export function Manifesto() {
  return (
    <section id="manifesto" className="scroll-mt-24 px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[55%_45%] lg:items-start">
        <div className="order-2 lg:order-1">
          <Overline>Nossa visão</Overline>
          <h2 className="mt-3 font-geist text-[clamp(36px,4vw,56px)] font-bold leading-tight text-[#F5F5F5]">
            Nascemos de uma frustração.
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-[#888888]">
            {blocks.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="my-10 border-l-2 border-[#F5F5F5] pl-6 font-geist text-[28px] font-light italic leading-snug text-[#F5F5F5]"
          >
            Ao comprar conosco, você está comprando resultado. Não beleza.
          </motion.blockquote>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="h-[280px] w-[280px] overflow-hidden rounded-xl border border-[#1E1E1E] bg-[#0a0a0a] sm:h-[360px] sm:w-[360px] lg:h-[400px] lg:w-[400px]">
            <SpinningSphereBackground />
          </div>
        </div>
      </div>
    </section>
  )
}
