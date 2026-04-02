"use client"

import { useEffect, useRef, useState } from "react"
import { Entropy } from "@/components/ui/entropy"

type EntropyFillProps = {
  className?: string
  opacity?: number
}

export function EntropyFill({ className = "", opacity = 0.15 }: EntropyFillProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState(800)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth
      const h = el.clientHeight
      const s = Math.max(320, Math.ceil(Math.max(w, h)))
      setSize(s)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Entropy size={size} className="!bg-transparent" />
      </div>
    </div>
  )
}
