"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Overline } from "@/components/ui/Overline"

export function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-24 px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[40%_60%] lg:items-center lg:gap-20">
        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ clipPath: "inset(0% 0 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-full bg-[#1a1a1a] lg:mx-0 lg:max-w-none"
        >
          <Image
            src="/pablo.jpg"
            alt="Pablo Nunes"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 320px, 40vw"
            loading="lazy"
          />
        </motion.div>

        <div>
          <Overline>Quem está por trás</Overline>
          <h2 className="mt-3 font-geist text-[clamp(32px,4vw,48px)] font-bold text-[#F5F5F5]">
            Pablo Nunes.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#888888]">
            <p>
              Fundador da Parvus. Desenvolvedor, estrategista e obcecado por resultado.
              Comecei a construir soluções digitais aos 15 anos — não porque era tendência,
              mas porque via negócios reais deixando dinheiro na mesa por não ter presença
              digital à altura do que ofereciam.
            </p>
            <p>
              A Parvus é a materialização de uma convicção simples: design premium e
              estratégia de conversão não deveriam ser exclusividade de grandes empresas.
              Todo negócio que trabalha com seriedade merece um site que trabalhe com a
              mesma seriedade.
            </p>
            <p>Cada projeto que entrego é o mesmo que eu construiria se fosse o meu negócio.</p>
          </div>

          <blockquote className="mt-10 border-l-2 border-[#F5F5F5] pl-6 font-geist text-[22px] font-light italic leading-snug text-[#F5F5F5]">
            Não é só site bonito. É conversão e é métrica.
          </blockquote>
        </div>
      </div>
    </section>
  )
}
