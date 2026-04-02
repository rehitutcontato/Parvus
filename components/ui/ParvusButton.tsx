import Link from "next/link"
import { cn } from "@/lib/utils"

type ParvusButtonProps = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "ghost" | "inverse"
  className?: string
  type?: "button" | "submit"
}

export function ParvusButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
}: ParvusButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-[4px] text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#888]"
  const styles = {
    primary: "bg-[#F5F5F5] px-7 py-3.5 text-[#080808] hover:bg-white",
    secondary:
      "bg-transparent px-0 py-2 text-[#888888] underline-offset-4 hover:underline",
    ghost: "border border-[#1E1E1E] bg-transparent px-7 py-3.5 text-[#F5F5F5] hover:border-[#333]",
    inverse: "bg-[#080808] px-10 py-[18px] text-lg text-[#F5F5F5] hover:bg-[#1a1a1a]",
  }

  const cls = cn(base, styles[variant], className)

  if (href) {
    return (
      <Link href={href} className={cls} data-hover onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cls} data-hover>
      {children}
    </button>
  )
}
