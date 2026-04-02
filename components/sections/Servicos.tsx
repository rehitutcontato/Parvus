"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Overline } from "@/components/ui/Overline"
import { ParvusBadge } from "@/components/ui/ParvusBadge"
import { ParvusButton } from "@/components/ui/ParvusButton"
import { whatsappHref } from "@/lib/site"

function ServiceCard({
  children,
  index,
}: {
  children: React.ReactNode
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty("--sx", `${e.clientX - r.left}px`)
    el.style.setProperty("--sy", `${e.clientY - r.top}px`)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onMouseMove={onMove}
      className="group relative overflow-hidden rounded-xl border border-[#1E1E1E] bg-[#141414] p-8 transition-[border-color,box-shadow] duration-300 hover:border-[#333333] hover:shadow-[0_0_40px_rgba(255,255,255,0.03)]"
      style={{
        backgroundImage: `radial-gradient(500px circle at var(--sx, 50%) var(--sy, 50%), rgba(255,255,255,0.05), transparent 45%)`,
      }}
    >
      {children}
    </motion.div>
  )
}

const listClass = "mt-6 space-y-3 text-sm text-[#888888]"

export function Servicos() {
  return (
    <section id="servicos" className="scroll-mt-24 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Overline>Serviços</Overline>
        <h2 className="mt-3 font-geist text-[clamp(32px,4vw,48px)] font-bold text-[#F5F5F5]">
          Uma oferta. Três camadas.
        </h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <ServiceCard index={0}>
            <ParvusBadge className="mb-4">Setup único</ParvusBadge>
            <h3 className="font-geist text-xl font-semibold text-[#F5F5F5]">
              Landing Page Premium
            </h3>
            <p className="mt-4 font-geist text-[28px] font-bold text-[#F5F5F5]">
              A partir de R$ 6.000
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#888888]">
              Do zero ao ar. Pesquisa do negócio, arquitetura de conversão, design de alto
              impacto, desenvolvimento em código limpo, deploy em produção. Otimizado para
              Google Maps, bio do Instagram e qualquer canal onde seu cliente te encontra.
            </p>
            <ul className={listClass}>
              <li>✦ Análise completa do negócio</li>
              <li>✦ Design system exclusivo</li>
              <li>✦ Código próprio (sem construtores)</li>
              <li>✦ Domínio e hospedagem configurados</li>
              <li>✦ Analytics instalado</li>
              <li>✦ Treinamento de uso</li>
            </ul>
            <div className="mt-8">
              <ParvusButton href={whatsappHref("Solicitar proposta")} variant="primary">
                Solicitar proposta
              </ParvusButton>
            </div>
          </ServiceCard>

          <ServiceCard index={1}>
            <ParvusBadge className="mb-4">Recorrente</ParvusBadge>
            <h3 className="font-geist text-xl font-semibold text-[#F5F5F5]">
              Manutenção Mensal
            </h3>
            <p className="mt-4 font-geist text-[28px] font-bold text-[#F5F5F5]">
              R$ 500/mês
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#888888]">
              Seu site precisa evoluir junto com seu negócio. A manutenção garante que o
              instrumento continue funcionando no pico.
            </p>
            <ul className={listClass}>
              <li>✦ Atualizações de conteúdo</li>
              <li>✦ Monitoramento de performance</li>
              <li>✦ Relatório mensal de métricas</li>
              <li>✦ Suporte via WhatsApp</li>
              <li>✦ Banners para redes sociais</li>
              <li>✦ Backups semanais</li>
            </ul>
          </ServiceCard>

          <ServiceCard index={2}>
            <ParvusBadge className="mb-4">Incluso em todos</ParvusBadge>
            <h3 className="font-geist text-xl font-semibold text-[#F5F5F5]">
              Identidade Digital
            </h3>
            <p className="mt-4 text-lg text-[#888888]">Sem custo adicional</p>
            <p className="mt-4 text-sm leading-relaxed text-[#888888]">
              Presença coerente em todos os canais. O site é o centro — mas o Google Maps,
              o Instagram e o WhatsApp Business precisam reforçar a mesma mensagem.
            </p>
            <ul className={listClass}>
              <li>✦ Otimização no Google Maps</li>
              <li>✦ Bio do Instagram configurada</li>
              <li>✦ Padronização visual dos canais</li>
              <li>✦ WhatsApp Business ativo</li>
            </ul>
          </ServiceCard>
        </div>
      </div>
    </section>
  )
}
