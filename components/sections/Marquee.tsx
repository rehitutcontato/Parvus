const items = [
  "SALETTI BELOTTI",
  "FLORA LUANA",
  "STUDIO FORMA",
  "CLÍNICA ESPAÇO VIDA",
  "RESTAURANTE OITÃO",
  "ACADEMIA CENTRAL",
  "BOUTIQUE MIA",
  "ESPAÇO BELEZA",
]

const row = [...items, ...items].join(" · ")

export function Marquee() {
  return (
    <section className="border-y border-[#1E1E1E] py-5">
      <p className="mb-4 text-center text-[12px] uppercase tracking-wider text-[#444444]">
        Negócios que cresceram com a Parvus
      </p>
      <div className="overflow-hidden">
        <div
          className="animate-marquee flex w-max whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          <span className="px-8 text-sm text-[#888888]">{row}</span>
          <span className="px-8 text-sm text-[#888888]" aria-hidden>
            {row}
          </span>
        </div>
      </div>
    </section>
  )
}
