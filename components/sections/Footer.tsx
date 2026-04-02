import Link from "next/link"
import { EMAIL, INSTAGRAM_URL, whatsappHref } from "@/lib/site"

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#antes-depois", label: "Antes e depois" },
  { href: "#faq", label: "FAQ" },
]

export function Footer() {
  return (
    <footer className="border-t border-[#1E1E1E] px-5 py-16 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
        <div>
          <p className="font-geist text-xl font-bold text-[#F5F5F5]">Parvus</p>
          <p className="mt-3 text-sm text-[#888888]">Landing pages que convertem.</p>
          <p className="mt-6 text-sm text-[#444444]">© 2026 Parvus.</p>
        </div>

        <div className="flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[#888888] transition-colors hover:text-[#F5F5F5]"
              data-hover
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="space-y-3 text-sm text-[#888888]">
          <a href={whatsappHref()} className="block hover:text-[#F5F5F5]" data-hover>
            WhatsApp
          </a>
          <a href={`mailto:${EMAIL}`} className="block hover:text-[#F5F5F5]" data-hover>
            {EMAIL}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-[#F5F5F5]"
            data-hover
          >
            Instagram @parvuss
          </a>
          <p className="text-[#444444]">Limeira, SP</p>
        </div>
      </div>
    </footer>
  )
}
