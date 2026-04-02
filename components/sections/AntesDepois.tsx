"use client"

import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import { whatsappHref } from "@/lib/site"

const SiteGenerico = () => (
  <div className="w-full overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] font-sans">
    <div className="flex items-center gap-1.5 border-b border-[#2a2a2a] bg-[#1a1a1a] px-3 py-2">
      <div className="h-2.5 w-2.5 rounded-full bg-[#333]" />
      <div className="h-2.5 w-2.5 rounded-full bg-[#333]" />
      <div className="h-2.5 w-2.5 rounded-full bg-[#333]" />
      <div className="mx-auto flex h-4 w-48 items-center justify-center rounded bg-[#222] text-[9px] text-[#444]">
        meusite.wix.com/inicio
      </div>
    </div>
    <div className="space-y-3 p-4">
      <div className="flex flex-wrap gap-2">
        {["HOME", "SOBRE NÓS", "SERVIÇOS", "GALERIA", "CONTATO", "BLOG", "NOVIDADES"].map(
          (i) => (
            <span key={i} className="px-1 text-[8px] text-[#555]">
              {i}
            </span>
          )
        )}
      </div>
      <div className="space-y-2 rounded bg-[#1a1a1a] p-3">
        <div className="text-[11px] font-bold uppercase tracking-widest text-[#666]">
          BEM VINDO AO NOSSO SITE!!!
        </div>
        <div className="text-[8px] leading-relaxed text-[#444]">
          Somos uma empresa com mais de 10 anos no mercado oferecendo os melhores serviços
          com qualidade e preço justo. Entre em contato conosco!
        </div>
        <div className="flex gap-2">
          <div className="rounded bg-blue-700 px-3 py-1 text-[8px] text-white">CLIQUE AQUI</div>
          <div className="rounded bg-green-700 px-3 py-1 text-[8px] text-white">WHATSAPP</div>
          <div className="rounded bg-red-700 px-3 py-1 text-[8px] text-white">PROMOÇÃO</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex h-10 items-center justify-center rounded bg-[#222]"
          >
            <span className="text-[7px] text-[#444]">imagem{i + 1}.jpg</span>
          </div>
        ))}
      </div>
      <div className="border-t border-[#1a1a1a] pt-2 text-center text-[7px] text-[#333]">
        © 2019 Todos direitos reservados | Desenvolvido por WebMaster Pro
      </div>
    </div>
  </div>
)

const SiteParvus = () => (
  <div className="w-full overflow-hidden rounded-xl border border-[#333] bg-[#080808] font-sans">
    <div className="flex items-center gap-1.5 border-b border-[#1E1E1E] bg-[#111] px-3 py-2">
      <div className="h-2.5 w-2.5 rounded-full bg-[#333]" />
      <div className="h-2.5 w-2.5 rounded-full bg-[#333]" />
      <div className="h-2.5 w-2.5 rounded-full bg-[#333]" />
      <div className="mx-auto flex h-4 w-48 items-center justify-center rounded bg-[#1a1a1a] text-[9px] text-[#555]">
        seunegocio.com.br
      </div>
    </div>
    <div className="space-y-3 p-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-wide text-[#F5F5F5]">MARCA</span>
        <div className="flex gap-3">
          {["Sobre", "Serviços", "Contato"].map((i) => (
            <span key={i} className="text-[8px] text-[#888]">
              {i}
            </span>
          ))}
        </div>
        <div className="rounded border border-[#333] px-2 py-1 text-[8px] text-[#F5F5F5]">
          Falar →
        </div>
      </div>
      <div className="space-y-2 py-4">
        <div className="text-[8px] uppercase tracking-widest text-[#555]">Especialista em ___</div>
        <div className="text-[13px] font-bold leading-tight text-[#F5F5F5]">
          Sua solução para
          <br />
          resultados reais.
        </div>
        <div className="max-w-[70%] text-[8px] leading-relaxed text-[#888]">
          Descrição clara do valor entregue. Sem enrolação.
        </div>
        <div className="inline-block rounded bg-[#F5F5F5] px-3 py-1.5 text-[8px] font-medium text-[#080808]">
          Ver como funciona →
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 border-t border-[#1E1E1E] pt-1">
        {[
          ["98%", "satisfação"],
          ["21d", "entrega"],
          ["3x", "retorno"],
        ].map(([val, label]) => (
          <div key={label} className="text-center">
            <div className="text-[11px] font-bold text-[#F5F5F5]">{val}</div>
            <div className="text-[7px] text-[#555]">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export function AntesDepois() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="antes-depois"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 lg:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 max-w-2xl"
      >
        <span className="mb-4 block text-[11px] uppercase tracking-[0.15em] text-[#444]">
          Padrão de entrega
        </span>
        <h2
          className="mb-4 font-geist font-bold leading-tight text-[#F5F5F5]"
          style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
        >
          Duvida da nossa
          <br />
          capacidade?
        </h2>
        <p className="text-base leading-relaxed text-[#888888]">
          Você já está dentro de um site Parvus agora mesmo. Veja o que construímos — e o que
          substituímos.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="mb-3 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <span className="text-[11px] uppercase tracking-widest text-[#555]">
              O que a maioria dos negócios tem
            </span>
          </div>
          <SiteGenerico />
          <div className="mt-4 space-y-1.5">
            {[
              "Sem hierarquia visual",
              "Nenhuma estratégia de conversão",
              "Construtor de página (lento)",
              "Você não tem o código",
              "Nenhuma métrica configurada",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-xs text-red-500">✕</span>
                <span className="text-[12px] text-[#555]">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <div className="mb-3 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-[11px] uppercase tracking-widest text-[#888888]">
              Padrão Parvus
            </span>
          </div>
          <SiteParvus />
          <div className="mt-4 space-y-1.5">
            {[
              "Hierarquia que guia a leitura",
              "CTA estratégico em cada seção",
              "Código próprio — rápido e limpo",
              "Repositório entregue no seu nome",
              "Analytics configurado desde o dia 1",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-xs text-green-500">✦</span>
                <span className="text-[12px] text-[#888888]">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
        className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-[#1E1E1E] pt-12 md:flex-row md:items-center"
      >
        <p
          className="font-geist font-light italic leading-snug text-[#F5F5F5]"
          style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
        >
          &ldquo;O site que você tem agora está
          <br />
          trabalhando <em>contra</em> você ou <em>por</em> você?&rdquo;
        </p>
        <Link
          href={whatsappHref("Quero o padrão Parvus")}
          className="shrink-0 rounded border border-[#333333] bg-transparent px-6 py-3 text-sm text-[#F5F5F5] transition-colors duration-200 hover:bg-[#141414]"
          data-hover
        >
          Quero o padrão Parvus →
        </Link>
      </motion.div>
    </section>
  )
}
