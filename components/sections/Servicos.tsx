"use client"

import { motion } from "@/components/framer/motion-elements"
import { Overline } from "@/components/ui/Overline"
import { ParvusButton } from "@/components/ui/ParvusButton"
import { whatsappHref } from "@/lib/site"

const services = [
  {
    badge: "Setup único",
    title: "Landing Page Premium",
    price: "A partir de R$ 6.000",
    description: `Do zero ao ar. Pesquisa do negócio, arquitetura de conversão, design de alto impacto, desenvolvimento em código limpo, deploy em produção. Otimizado para Google Maps, bio do Instagram e qualquer canal onde seu cliente te encontra.`,
    features: [
      "Análise completa do negócio",
      "Design system exclusivo",
      "Código próprio (sem construtores)",
      "Domínio e hospedagem configurados",
      "Analytics instalado",
      "Treinamento de uso",
    ],
    cta: "Solicitar proposta",
    highlighted: true,
  },
  {
    badge: "Recorrente",
    title: "Manutenção Mensal",
    price: "R$ 500/mês",
    description: `Seu site precisa evoluir junto com seu negócio. A manutenção garante que o instrumento continue funcionando no pico.`,
    features: [
      "Atualizações de conteúdo",
      "Monitoramento de performance",
      "Relatório mensal de métricas",
      "Suporte via WhatsApp",
      "Banners para redes sociais",
      "Backups semanais",
    ],
    cta: null,
    highlighted: false,
  },
  {
    badge: "Incluso em todos",
    title: "Identidade Digital",
    price: "Sem custo adicional",
    description: `Presença coerente em todos os canais. O site é o centro — mas o Google Maps, o Instagram e o WhatsApp Business precisam reforçar a mesma mensagem.`,
    features: [
      "Otimização no Google Maps",
      "Bio do Instagram configurada",
      "Padronização visual dos canais",
      "WhatsApp Business ativo",
    ],
    cta: null,
    highlighted: false,
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: typeof services[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative ${service.highlighted ? "lg:-mt-4 lg:mb-4" : ""}`}
    >
      <div
        className={`h-full rounded-lg border p-6 transition-all duration-300 md:p-8 ${
          service.highlighted
            ? "border-[#333] bg-[#0f0f0f]"
            : "border-[#1E1E1E] bg-transparent hover:border-[#333]"
        }`}
      >
        {/* Badge */}
        <span
          className={`mb-4 inline-block text-[11px] uppercase tracking-widest ${
            service.highlighted ? "text-[#F5F5F5]" : "text-[#555]"
          }`}
        >
          {service.badge}
        </span>

        {/* Title */}
        <h3 className="font-geist text-lg font-semibold text-[#F5F5F5] md:text-xl">
          {service.title}
        </h3>

        {/* Price */}
        <p
          className={`mt-3 font-geist text-2xl font-bold md:text-3xl ${
            service.highlighted ? "text-[#F5F5F5]" : "text-[#888]"
          }`}
        >
          {service.price}
        </p>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-[#888]">
          {service.description}
        </p>

        {/* Features */}
        <ul className="mt-6 space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-[#888]">
              <span className="mt-1 text-[#555]">—</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {service.cta && (
          <div className="mt-8">
            <ParvusButton href={whatsappHref(service.cta)} variant="primary">
              {service.cta}
            </ParvusButton>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function Servicos() {
  return (
    <section id="servicos" className="scroll-mt-24 px-5 py-24 md:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <Overline>Serviços</Overline>
          <h2 className="mt-3 font-geist text-[clamp(32px,4vw,48px)] font-bold leading-tight text-[#F5F5F5]">
            Uma oferta. Três camadas.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#888]">
            Cada camada pode ser contratada separadamente. Ou você pode ter todas — 
            a Landing Page como núcleo, a Manutenção como evolução contínua, e a 
            Identidade Digital como alinhamento de todos os canais.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center text-sm text-[#555]"
        >
          Todos os projetos incluem reunião de briefing, pesquisa de mercado e 
          suporte pós-entrega.
        </motion.p>
      </div>
    </section>
  )
}
