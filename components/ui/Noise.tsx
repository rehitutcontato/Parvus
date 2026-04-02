"use client"

export function Noise() {
  return (
    <>
      {/* SVG de ruído inline — gerado via filter, sem imagem externa */}
      <svg
        style={{ display: "none" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      {/* Camada de aplicação do ruído */}
      <div
        aria-hidden="true"
        className="noise-layer"
        style={{
          position: "fixed",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0.035,
          mixBlendMode: "overlay",
          filter: "url(#noise-filter)",
          background: "transparent",
          animation: "grain 8s steps(10) infinite",
        }}
      />
    </>
  )
}
