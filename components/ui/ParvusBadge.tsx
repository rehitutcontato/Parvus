import { cn } from "@/lib/utils"

type ParvusBadgeProps = {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "price"
}

export function ParvusBadge({
  children,
  className,
  variant = "default",
}: ParvusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border border-[#333333] px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-[#888888]",
        variant === "price" && "text-[11px]",
        className
      )}
    >
      {children}
    </span>
  )
}
