"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RadialShader } from "@/components/ui/radial-shader";
import { ArrowUp } from "lucide-react";

// Fonte Inter Light para as letras
const interLightStyle = {
  fontFamily: "'Inter', 'Inter Light', system-ui, sans-serif",
  fontWeight: 300,
  letterSpacing: "0.2em",
};

export function ParvusFinale() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const letters = ["P", "A", "R", "V", "U", "S"];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Fundo Celestial Shader */}
      <div className="absolute inset-0 z-0">
        <RadialShader className="w-full h-full" />
        {/* Overlay escuro para garantir contraste do texto */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        {/* P A R V U S - Letras flutuantes */}
        <motion.div
          className="flex items-center gap-2 md:gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              className="text-5xl md:text-7xl lg:text-8xl text-white/95"
              style={{
                ...interLightStyle,
                textShadow: "0 0 60px rgba(6,182,212,0.6), 0 0 120px rgba(6,182,212,0.4)",
              }}
              initial={{ 
                opacity: 0, 
                y: 100,
                rotateX: -90,
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                rotateX: 0,
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 80px rgba(6,182,212,0.9), 0 0 160px rgba(6,182,212,0.6)",
                transition: { duration: 0.2 },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mt-8 text-lg md:text-2xl text-white/60 tracking-[0.3em] uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Design que transcende
        </motion.p>

        {/* Linha decorativa */}
        <motion.div
          className="mt-8 w-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={isInView ? { width: "200px" } : { width: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        />

        {/* Botão Voltar ao Topo */}
        <motion.button
          onClick={scrollToTop}
          className="mt-16 group flex flex-col items-center gap-3 text-white/40 hover:text-cyan-400 transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          whileHover={{ y: -5 }}
        >
          <span className="text-sm tracking-widest uppercase">Voltar ao topo</span>
          <motion.div
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-all"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>

      {/* Borda inferior glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10 pointer-events-none" />
    </section>
  );
}

export default ParvusFinale;
