"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "@/components/framer/motion-elements"
import { Overline } from "@/components/ui/Overline"

const faqs = [
  {
    q: "Quanto tempo leva para o site ficar pronto?",
    a: "O processo completo leva entre 18 e 21 dias úteis — da primeira reunião ao site no ar. Esse prazo inclui análise do negócio, aprovação do design e desenvolvimento.",
  },
  {
    q: "O site realmente fica sendo meu?",
    a: "Sim. O código é entregue via repositório GitHub no seu nome. O domínio é registrado no seu CPF ou CNPJ. Você não depende da Parvus para existir na internet — e isso é proposital.",
  },
  {
    q: "O que está incluído nos R$ 6.000?",
    a: "Análise do negócio, arquitetura de conversão, design system exclusivo, desenvolvimento completo, integração de analytics, configuração de domínio e hospedagem, e treinamento básico de uso.",
  },
  {
    q: "Vocês trabalham com qualquer tipo de negócio?",
    a: "Temos foco em negócios físicos — clínicas, restaurantes, academias, salões, boutiques, floriculturas, estúdios, prestadores de serviço. Não trabalhamos com e-commerce complexo ou sistemas internos.",
  },
  {
    q: "Como é o processo de aprovação do design?",
    a: "Após a análise, entregamos um preview completo — paleta, tipografia, arquitetura de seções e copy de cada bloco. Você aprova ou solicita ajustes antes de qualquer código.",
  },
  {
    q: "Qual a forma de pagamento?",
    a: "50% na aprovação do projeto, 50% na entrega. Aceitamos PIX e transferência. Emitimos nota fiscal para pessoa física ou jurídica.",
  },
  {
    q: "O site vai aparecer no Google?",
    a: "Configuramos os fundamentos de SEO técnico: metatags, sitemap, robots.txt, velocidade de carregamento e schema markup. O site sai do ar pronto para ser encontrado.",
  },
  {
    q: "E a manutenção, o que cobre exatamente?",
    a: "Atualizações de conteúdo ilimitadas, monitoramento mensal de performance, relatório com métricas reais, suporte prioritário via WhatsApp, banners para redes sociais e backups semanais.",
  },
]

function FAQItem({
  item,
  isOpen,
  onClick,
  index,
}: {
  item: typeof faqs[0]
  isOpen: boolean
  onClick: () => void
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-[#1E1E1E]"
    >
      <button
        type="button"
        className="group flex w-full items-start justify-between gap-4 py-5 text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-geist text-base font-medium text-[#F5F5F5] transition-colors group-hover:text-white">
          {item.q}
        </span>
        <span
          className="mt-0.5 text-xl text-[#555] transition-all duration-200 group-hover:text-[#888]"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-[#888]">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 px-5 py-24 md:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <Overline>Dúvidas frequentes</Overline>
          <h2 className="mt-3 font-geist text-[clamp(32px,4vw,48px)] font-bold leading-tight text-[#F5F5F5]">
            Se você está pensando — alguém já perguntou.
          </h2>
        </motion.div>

        <div>
          {faqs.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={open === i}
              onClick={() => setOpen(open === i ? null : i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
