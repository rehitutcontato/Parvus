"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { Overline } from "@/components/ui/Overline"
import { useCounter } from "@/hooks/useCounter"

function Metric({
  valueDisplay,
  target,
  duration,
  decimals,
  label,
}: {
  valueDisplay: "percent" | "seconds" | "money" | "agents"
  target: number
  duration: number
  decimals?: number
  label: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-20%" })
  const n = useCounter(target, duration, inView, decimals ?? 0)

  let text = ""
  if (valueDisplay === "percent") text = `${Math.round(n)}%`
  else if (valueDisplay === "seconds") text = `${Math.round(n)}s`
  else if (valueDisplay === "money") text = `R$${n.toFixed(0)}k`
  else if (valueDisplay === "agents") text = `${Math.round(n)} agentes`

  return (
    <div ref={ref}>
      <p className="metric-value font-geist text-[clamp(40px,5vw,64px)] font-bold text-[#F5F5F5]">
        {text}
      </p>
      <p className="metric-label mt-2 max-w-[180px] text-sm leading-snug text-[#888888]">
        {label}
      </p>
    </div>
  )
}

export function Numeros() {
  return (
    <section className="scroll-mt-24 border-y border-[#1E1E1E] bg-[#111111] px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Overline>Em números</Overline>
        <div className="mt-12 grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-6">
          <Metric
            valueDisplay="percent"
            target={100}
            duration={1400}
            label="dos clientes mantêm o site no ar após 6 meses"
          />
          <Metric
            valueDisplay="seconds"
            target={8}
            duration={1200}
            label="é o tempo que o visitante leva para decidir se fica ou sai"
          />
          <Metric
            valueDisplay="money"
            target={6}
            duration={1300}
            label="ponto de entrada para um site que trabalha por você"
          />
          <Metric
            valueDisplay="agents"
            target={3}
            duration={1100}
            label="de inteligência artificial trabalhando em cada projeto"
          />
        </div>
      </div>
    </section>
  )
}
