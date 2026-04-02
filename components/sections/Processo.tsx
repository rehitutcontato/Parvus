"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Overline } from "@/components/ui/Overline"
import { EntropyFill } from "@/components/ui/entropy-fill"

const steps = [
  {
    title: "Imersão no negócio",
    when: "Dia 1–2",
    body: `Antes de abrir qualquer editor, estudamos o seu negócio a fundo. Avaliações de clientes, presença digital atual, concorrentes. O site que vamos construir nasce dessa análise — não de um template.`,
    highlight: false,
  },
  {
    title: "Arquitetura e design",
    when: "Dia 3–7",
    body: `Arquitetura de seções, hierarquia de informação, sistema visual completo. Você recebe um preview do design antes de qualquer linha de código ser escrita.`,
    highlight: false,
  },
  {
    title: "Desenvolvimento",
    when: "Dia 8–18",
    body: `Código escrito do zero. Animações, interações, responsividade — tudo construído para ser rápido, confiável e fácil de manter. Nenhum construtor de página.`,
    highlight: false,
  },
  {
    title: "Entrega e ativação",
    when: "Dia 19–21",
    body: `Deploy em produção, domínio configurado, analytics ativo. Você recebe o repositório, as credenciais e um treinamento de como atualizar o conteúdo básico.`,
    highlight: true,
  },
]

export function Processo() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.3"],
  })
  const lineHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 120,
    damping: 32,
  })

  return (
    <section
      id="processo"
      ref={sectionRef}
      className="relative scroll-mt-24 overflow-hidden px-5 py-24 md:px-8"
    >
      <EntropyFill opacity={0.08} />

      <div className="relative z-10 mx-auto max-w-5xl">
        <Overline>Processo</Overline>
        <h2 className="mt-3 font-geist text-[clamp(32px,4vw,48px)] font-bold text-[#F5F5F5]">
          Da primeira conversa ao site no ar.
        </h2>

        <div className="relative mt-20">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-[#1E1E1E] md:left-1/2 md:-translate-x-px">
            <motion.div
              className="w-full bg-[#F5F5F5]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-20">
            {steps.map((s, i) => {
              const titleOnLeft = i % 2 === 0

              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className={`relative grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-16 ${
                    s.highlight ? "rounded-lg border border-[#F5F5F5] p-6 md:p-8" : ""
                  }`}
                >
                  <div
                    className={`pl-10 md:pl-0 ${titleOnLeft ? "md:text-right" : "md:order-2 md:text-left"}`}
                  >
                    <span className="absolute left-0 top-1 flex h-2 w-2 -translate-x-[5px] rounded-full bg-[#F5F5F5] md:left-1/2 md:-translate-x-1/2" />
                    <p className="text-xs uppercase tracking-wider text-[#444444]">
                      {s.when}
                    </p>
                    <h3 className="mt-2 font-geist text-xl font-semibold text-[#F5F5F5]">
                      {s.title}
                    </h3>
                  </div>

                  <div
                    className={`pl-10 md:pl-0 ${titleOnLeft ? "" : "md:order-1"}`}
                  >
                    <p className="text-sm leading-relaxed text-[#888888]">{s.body}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
