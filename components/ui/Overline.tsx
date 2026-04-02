import { cn } from "@/lib/utils"

type OverlineProps = {
  children: React.ReactNode
  className?: string
}

export function Overline({ children, className }: OverlineProps) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium uppercase tracking-[0.15em] text-[#888888]",
        className
      )}
    >
      {children}
    </p>
  )
}
