"use client";

import { VideoShowcase } from "@/components/ui/video-showcase";
import { motion } from "@/components/framer/motion-elements";
import { Overline } from "@/components/ui/Overline";

export function VideoHero() {
  return (
    <VideoShowcase
      mediaSrc="/videos/hero-main.mp4"
      posterSrc="/images/hero-poster.jpg"
      bgImageSrc="/images/hero-bg.jpg"
      title="Resultados Reais"
      subtitle="Veja como transformamos negócios com sites que convertem visitantes em clientes"
    >
      {/* Conteúdo adicional abaixo do vídeo principal */}
      <div className="max-w-5xl mx-auto">
        <Overline>Cases de Sucesso</Overline>
        
        <motion.h2 
          className="mt-6 text-3xl md:text-4xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Cada projeto é uma história de crescimento.
        </motion.h2>

        <motion.p 
          className="mt-6 text-lg text-gray-400 leading-relaxed max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Não criamos apenas sites. Criamos máquinas de conversão que trabalham 
          24 horas por dia para trazer clientes reais para o seu negócio.
        </motion.p>

        {/* Cases Grid com hover effects */}
        <motion.div 
          className="mt-12 grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Case 1 */}
          <motion.div 
            className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="relative h-64 overflow-hidden">
              <video
                src="/videos/case-floricultura.mp4"
                poster="/images/case-floricultura-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs text-cyan-400 font-medium uppercase tracking-wider">E-commerce</span>
                <h3 className="text-xl font-semibold text-white mt-1">Marina Floricultura</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-400 text-sm">
                Aumento de 300% em vendas online após implementação de checkout otimizado e SEO local.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <span className="text-green-400">+300% vendas</span>
                <span className="text-gray-600">|</span>
                <span className="text-cyan-400">12 dias</span>
              </div>
            </div>
          </motion.div>

          {/* Case 2 */}
          <motion.div 
            className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="relative h-64 overflow-hidden">
              <video
                src="/videos/case-3d.mp4"
                poster="/images/case-3d-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs text-cyan-400 font-medium uppercase tracking-wider">Sistema Web</span>
                <h3 className="text-xl font-semibold text-white mt-1">SEP Impressões 3D</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-400 text-sm">
                Sistema de orçamento automático com integração WhatsApp reduziu trabalho manual em 70%.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <span className="text-green-400">-70% trabalho</span>
                <span className="text-gray-600">|</span>
                <span className="text-cyan-400">18 dias</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </VideoShowcase>
  );
}
