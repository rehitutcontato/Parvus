"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-3xl">
        <Overline>Dúvidas frequentes</Overline>
        <h2 className="mt-3 font-geist text-[clamp(32px,4vw,48px)] font-bold text-[#F5F5F5]">
          Se você está pensando — alguém já perguntou.
        </h2>

        <div className="mt-12 space-y-2">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className="border-b border-[#1E1E1E] py-2"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  data-hover
                  aria-expanded={isOpen}
                >
                  <span className="font-geist text-lg font-medium text-[#F5F5F5]">
                    {item.q}
                  </span>
                  <span
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-2xl leading-none text-[#888888] transition-transform duration-200"
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
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-sm leading-relaxed text-[#888888]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
