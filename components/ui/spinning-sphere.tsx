import React from "react"
import { SPHERE_VALUES } from "@/constants/sphere-values"

export { SPHERE_VALUES }

/** viewBox fixo alinhado à arte original da esfera (evita oval estático por escala errada) */
const VB = { w: 540, h: 600 }

type AnimatedPathProps = {
  width?: number
  height?: number
  values?: string
  dur?: string
  repeatCount?: string | number
  stroke?: string
  fill?: string
  className?: string
}

/**
 * Esfera decorativa: modo morph (values não vazio) ou wireframe animado (default).
 */
export default function AnimatedPath({
  width = 500,
  height = 600,
  values,
  dur = "10s",
  repeatCount = "indefinite",
  stroke = "#F5F5F5",
  fill = "transparent",
  className,
}: AnimatedPathProps) {
  const morphValues = values ?? SPHERE_VALUES
  const useMorph = Boolean(morphValues && morphValues.length > 0)

  if (useMorph) {
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${VB.w} ${VB.h}`}
        preserveAspectRatio="xMidYMid meet"
        className={className}
        aria-hidden
      >
        <path stroke={stroke} fill={fill} strokeWidth={1}>
          <animate
            attributeName="d"
            dur={dur}
            repeatCount={repeatCount}
            values={morphValues}
          />
        </path>
      </svg>
    )
  }

  const cx = VB.w / 2
  const cy = VB.h / 2
  const r = Math.min(VB.w, VB.h) * 0.38
  const durSec = parseFloat(String(dur).replace("s", "")) || 10

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${VB.w} ${VB.h}`}
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={cx}
        cy={cy}
        r={r}
        stroke={stroke}
        fill={fill}
        strokeWidth={0.5}
        opacity={0.55}
      />

      <ellipse
        cx={cx}
        cy={cy}
        rx={r}
        ry={r * 0.08}
        stroke={stroke}
        fill={fill}
        strokeWidth={0.45}
        opacity={0.32}
      />

      <ellipse
        cx={cx}
        cy={cy}
        rx={Math.max(r * 0.04, 1.2)}
        ry={r}
        stroke={stroke}
        fill={fill}
        strokeWidth={0.5}
        opacity={0.42}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`0 ${cx} ${cy}`}
          to={`360 ${cx} ${cy}`}
          dur={dur}
          repeatCount="indefinite"
        />
      </ellipse>

      <ellipse
        cx={cx}
        cy={cy}
        rx={r * 0.82}
        ry={r * 0.38}
        stroke={stroke}
        fill={fill}
        strokeWidth={0.4}
        opacity={0.28}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`0 ${cx} ${cy}`}
          to={`-360 ${cx} ${cy}`}
          dur={`${durSec * 1.25}s`}
          repeatCount="indefinite"
        />
      </ellipse>

      <g transform={`rotate(48 ${cx} ${cy})`}>
        <ellipse
          cx={cx}
          cy={cy}
          rx={r * 0.68}
          ry={r}
          stroke={stroke}
          fill={fill}
          strokeWidth={0.35}
          opacity={0.22}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${cx} ${cy}`}
            to={`360 ${cx} ${cy}`}
            dur={`${durSec * 0.85}s`}
            repeatCount="indefinite"
          />
        </ellipse>
      </g>

      <ellipse
        cx={cx}
        cy={cy - r * 0.48}
        rx={r * 0.88}
        ry={r * 0.07}
        stroke={stroke}
        fill={fill}
        strokeWidth={0.35}
        opacity={0.2}
      />
      <ellipse
        cx={cx}
        cy={cy + r * 0.48}
        rx={r * 0.88}
        ry={r * 0.07}
        stroke={stroke}
        fill={fill}
        strokeWidth={0.35}
        opacity={0.2}
      />
    </svg>
  )
}
