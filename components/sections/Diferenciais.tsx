"use client"

import { useRef, type MouseEvent } from "react"
import { motion } from "framer-motion"
import { Overline } from "@/components/ui/Overline"
import { ParvusBadge } from "@/components/ui/ParvusBadge"

const cards = [
  {
    n: "01",
    title: "Design que converte, não que impressiona",
    body: `Cada decisão visual tem uma razão estratégica. Hierarquia, fluxo de leitura, posicionamento de CTA — tudo calculado para guiar o visitante até a ação que você quer.`,
  },
  {
    n: "02",
    title: "O site é seu. Para sempre.",
    body: (
      <>
        <strong className="font-semibold text-[#F5F5F5]">
          O site é seu. Para sempre.
        </strong>{" "}
        Código entregue, repositório seu, domínio seu. Você não depende de nós para
        existir. Isso é integridade — e é assim que preferimos trabalhar.
      </>
    ),
  },
  {
    n: "03",
    title: "Métricas reais, não vaidade",
    body: `Taxa de conversão. Taxa de rejeição. Tempo na página. Origem do tráfego. Configuramos analytics desde o dia um para que você saiba exatamente o que está funcionando.`,
  },
  {
    n: "04",
    title: "Manutenção que mantém o resultado",
    body: `Seu mercado muda. Seu site precisa acompanhar. A manutenção mensal garante que o instrumento continue afinado — atualização de ofertas, ajustes de copy, monitoramento.`,
    badge: "R$500/mês",
  },
]

function SpotlightCard({
  children,
  index,
}: {
  children: React.ReactNode
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty("--sx", `${x}px`)
    el.style.setProperty("--sy", `${y}px`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      ref={ref}
      onMouseMove={onMove}
      className="group relative overflow-hidden rounded-xl border border-[#1E1E1E] bg-[#141414] p-8 transition-[border-color] duration-300 hover:border-[#333333]"
      style={{
        backgroundImage: `radial-gradient(600px circle at var(--sx, 50%) var(--sy, 50%), rgba(255,255,255,0.06), transparent 40%)`,
      }}
    >
      {children}
    </motion.div>
  )
}

export function Diferenciais() {
  return (
    <section className="scroll-mt-24 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Overline>O que nos separa</Overline>
        <h2 className="mt-3 font-geist text-[clamp(32px,4vw,48px)] font-bold text-[#F5F5F5]">
          Quatro razões que importam.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <SpotlightCard key={c.n} index={i}>
              <span className="pointer-events-none absolute right-4 top-2 font-geist text-[64px] font-bold leading-none text-[#1E1E1E]">
                {c.n}
              </span>
              {c.badge && (
                <ParvusBadge className="absolute right-6 top-6">{c.badge}</ParvusBadge>
              )}
              <h3 className="relative pr-16 font-geist text-xl font-semibold text-[#F5F5F5]">
                {c.title}
              </h3>
              <p className="relative mt-4 text-[15px] leading-relaxed text-[#888888]">
                {c.body}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
