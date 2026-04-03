"use client"

import Link from "next/link"
import { motion } from "@/components/framer/motion-elements"
import { EMAIL, INSTAGRAM_URL, whatsappHref } from "@/lib/site"

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#antes-depois", label: "Cases" },
  { href: "#faq", label: "FAQ" },
]

const socials = [
  { href: whatsappHref(), label: "WhatsApp" },
  { href: `mailto:${EMAIL}`, label: "Email" },
  { href: INSTAGRAM_URL, label: "Instagram", external: true },
]

export function Footer() {
  return (
    <footer className="border-t border-[#1E1E1E] px-5 py-12 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-between gap-8 md:flex-row"
        >
          {/* Logo */}
          <div className="text-center md:text-left">
            <p className="font-geist text-lg font-bold text-[#F5F5F5]">Parvus</p>
            <p className="mt-1 text-sm text-[#555]">Landing pages que convertem</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-[#888] transition-colors hover:text-[#F5F5F5]"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                className="text-sm text-[#888] transition-colors hover:text-[#F5F5F5]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center text-xs text-[#444]"
        >
          © 2026 Parvus. Todos os direitos reservados.
        </motion.p>
      </div>
    </footer>
  )
}
