"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "@/components/framer/motion-elements";
import { ParvusButton } from "@/components/ui/ParvusButton";
import { TerminalAnimation } from "@/components/ui/terminal-animation";
import {
  ArrowRight,
  MessageSquare,
  Brain,
  Zap,
  Download,
  Smartphone,
  LayoutDashboard,
  ShieldAlert,
  Mail,
  Calendar,
  Search,
  CheckCircle2,
  ChevronDown,
  Code2,
  Server,
  Sparkles,
} from "lucide-react";

export function Automate() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState<number | null>(null);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const useCasesRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isHowItWorksInView = useInView(howItWorksRef, { once: true, margin: "-100px" });
  const isUseCasesInView = useInView(useCasesRef, { once: true, margin: "-100px" });
  const isStackInView = useInView(stackRef, { once: true, margin: "-100px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const faqs = [
    {
      q: "Preciso saber programar para usar?",
      a: "Não. Descreva o problema em português. A IA faz o código.",
    },
    {
      q: "Quanto tempo leva para gerar uma automação?",
      a: "5-15 minutos, dependendo da complexidade. Do briefing ao sistema pronto para baixar.",
    },
    {
      q: "Posso usar o código gerado em produção?",
      a: "Sim. O código é profissional, testado e pronto para rodar.",
    },
    {
      q: "E se a IA não entender meu problema?",
      a: "Você recebe perguntas de esclarecimento. Responda brevemente e a IA refina a solução.",
    },
    {
      q: "Posso customizar depois de gerar?",
      a: "Sim. O código é seu — HTML, Node.js, Git repo. Customize livremente.",
    },
    {
      q: "Qual é a diferença entre MVP e Enterprise?",
      a: "MVP: Software, IoT e integrações rápidas. Enterprise: Indústria 4.0, robótica, linhas autônomas. Requer engenharia especializada.",
    },
    {
      q: "Posso integrar com meus sistemas existentes?",
      a: "Sim. Todas as gerações incluem webhooks, APIs REST e documentação de integração.",
    },
    {
      q: "Vocês oferecem suporte técnico?",
      a: "Sim. Suporte por chat (PRO) ou dedicado (ENTERPRISE).",
    },
  ];

  return (
    <section id="parvus-automate" className="relative isolate pt-20 pb-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[#080808]/50" />

      {/* Container */}
      <div className="relative z-10 px-5 md:px-8 pt-20 pb-24">
        <div className="mx-auto max-w-7xl">

          {/* 1. Hero / Introdução */}
          <div ref={heroRef} className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid md:grid-cols-2 items-center gap-12">
                <div className="space-y-6 text-center md:text-left">
                  <h1 className="font-geist text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#F5F5F5]">
                    Descreva o problema.{" "}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      A IA constrói a solução.
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-[#CCCCCC] max-w-md">
                    Parvus Automate transforma uma ideia em automação completa em minutos.
                    Sem código. Sem tempo perdido. Pronto para usar.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <ParvusButton variant="primary">Começar Agora →</ParvusButton>
                    <ParvusButton variant="secondary">Ver Demo</ParvusButton>
                  </div>
                </div>
                <div className="relative h-64 w-full md:h-96">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#080808] rounded-xl overflow-hidden border border-[#1E1E1E]"
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <TerminalAnimation />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                  </motion.div>
                </div>
              </div>

              {/* Visual steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex flex-wrap gap-4 justify-center"
              >
                {[
                  { num: "1", label: "Descrever", icon: MessageSquare },
                  { num: "2", label: "Analisar", icon: Brain },
                  { num: "3", label: "Implementar", icon: Zap },
                ].map((step, index) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 bg-[#1E1E1E]/50 px-6 py-3 rounded-lg border border-[#2A2A2A] hover:border-[#00BCD4]/50 transition-colors"
                  >
                    <span className="w-8 h-8 bg-[#00BCD4]/20 rounded-lg flex items-center justify-center text-[#00BCD4] font-bold">
                      {step.num}
                    </span>
                    <step.icon className="w-5 h-5 text-[#00BCD4]" />
                    <span className="text-[#CCCCCC] font-medium">{step.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* 2. Como Funciona (How It Works) */}
          <div ref={howItWorksRef} className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-10 font-geist text-3xl md:text-4xl font-bold leading-tight text-center text-[#F5F5F5]"
            >
              Como funciona
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: MessageSquare,
                  title: "Descreva em Linguagem Natural",
                  desc: "Cole o problema, o desejo ou a funcionalidade que precisa. Pode ser complexo, técnico ou simples. A IA entende.",
                  visual: "Input com texto descritivo",
                },
                {
                  icon: Brain,
                  title: "Sistema Classifica Automaticamente",
                  desc: "A IA identifica o tipo (software, hardware, híbrido), faz até 3 perguntas essenciais para clarificar, e gera a solução.",
                  visual: "TIPO: HÍBRIDO | COMPLEXIDADE: MÉDIO",
                },
                {
                  icon: Zap,
                  title: "Código Gerado Ao Vivo",
                  desc: "Frontend, backend Node.js, variáveis de ambiente, documentação — tudo é gerado enquanto você assiste.",
                  visual: "Terminal com código aparecendo",
                },
                {
                  icon: Download,
                  title: "Baixe e Use em 5 Minutos",
                  desc: "HTML pronto para o navegador + projeto Node.js completo. Deploy em qualquer servidor (Vercel, Railway, seu próprio servidor).",
                  visual: "Botões de download (HTML / Node.js)",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-[#1E1E1E]/50 rounded-xl p-6 border border-[#2A2A2A] hover:border-[#00BCD4]/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#00BCD4]/20 rounded-xl flex items-center justify-center text-[#00BCD4] group-hover:bg-[#00BCD4]/30 transition-colors">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-geist text-xl font-bold text-[#F5F5F5]">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[#CCCCCC] mb-4 leading-relaxed">{step.desc}</p>
                  <div className="h-20 bg-[#080808]/50 rounded-lg flex items-center justify-center text-[#555] text-sm border border-[#1E1E1E]">
                    {step.visual}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 3. Exemplos de Casos de Uso */}
          <div ref={useCasesRef} className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isUseCasesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-10 font-geist text-3xl md:text-4xl font-bold leading-tight text-center text-[#F5F5F5]"
            >
              Exemplos de casos de uso
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: 1,
                  title: "WhatsApp Automático para Leads",
                  type: "SOFTWARE",
                  complexity: "BÁSICO",
                  desc: "Integre seu formulário com WhatsApp. Cada novo lead recebe mensagem automática em segundos.",
                  icon: Smartphone,
                  color: "#00BCD4",
                },
                {
                  id: 2,
                  title: "Dashboard IoT em Tempo Real",
                  type: "HÍBRIDO",
                  complexity: "MÉDIO",
                  desc: "Monitore sensores de temperatura, umidade, produção. Alertas automáticos quando há anomalia.",
                  icon: LayoutDashboard,
                  color: "#8B5CF6",
                },
                {
                  id: 3,
                  title: "Detecção de EPI com Câmera",
                  type: "HÍBRIDO",
                  complexity: "AVANÇADO",
                  desc: "Câmera com IA identifica se funcionário está sem EPIs. Envia alerta automático ao gestor.",
                  icon: ShieldAlert,
                  color: "#EC4899",
                },
                {
                  id: 4,
                  title: "Automação de E-mails",
                  type: "SOFTWARE",
                  complexity: "BÁSICO",
                  desc: "Lê e-mails de fornecedores, classifica, organiza automaticamente. Nenhuma digitação manual.",
                  icon: Mail,
                  color: "#10B981",
                },
                {
                  id: 5,
                  title: "Sistema de Agendamento Inteligente",
                  type: "SOFTWARE",
                  complexity: "MÉDIO",
                  desc: "Calendario integrado com WhatsApp, SMS, e-mail. Lembretes automáticos 1h antes.",
                  icon: Calendar,
                  color: "#F59E0B",
                },
                {
                  id: 6,
                  title: "Análise de Imagens em Produção",
                  type: "HÍBRIDO",
                  complexity: "AVANÇADO",
                  desc: "Câmera de linha detecta defeitos, classifica, gera relatório. Zero falsos negativos críticos.",
                  icon: Search,
                  color: "#14B8A6",
                },
              ].map((ex, index) => (
                <motion.div
                  key={ex.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isUseCasesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  onClick={() => setActiveUseCase(activeUseCase === ex.id ? null : ex.id)}
                  className={`bg-[#1E1E1E]/50 rounded-xl p-6 flex flex-col h-full border cursor-pointer transition-all duration-300 ${
                    activeUseCase === ex.id
                      ? "border-[#00BCD4] shadow-lg shadow-[#00BCD4]/20"
                      : "border-[#2A2A2A] hover:border-[#00BCD4]/50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: `${ex.color}20` }}
                    >
                      <ex.icon className="w-5 h-5" style={{ color: ex.color }} />
                    </div>
                    <h3 className="font-geist text-lg font-bold text-[#F5F5F5]">{ex.title}</h3>
                  </div>
                  <p className="flex-1 text-[#CCCCCC] mb-4 leading-relaxed">{ex.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="text-xs rounded px-2 py-1"
                      style={{ background: `${ex.color}20`, color: ex.color }}
                    >
                      {ex.type}
                    </span>
                    <span
                      className="text-xs rounded px-2 py-1"
                      style={{ background: `${ex.color}20`, color: ex.color }}
                    >
                      {ex.complexity}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 4. Stack Tecnológico */}
          <div ref={stackRef} className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isStackInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-10 font-geist text-3xl md:text-4xl font-bold leading-tight text-center text-[#F5F5F5]"
            >
              Stack Tecnológico
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isStackInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#1E1E1E]/50 rounded-xl p-8 border border-[#2A2A2A] hover:border-[#00BCD4]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#00BCD4]/20 rounded-xl flex items-center justify-center text-[#00BCD4]">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-geist text-2xl font-bold text-[#F5F5F5]">Frontend</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Next.js 14 + React",
                    "TypeScript strict mode",
                    "Framer Motion + GSAP",
                    "Tailwind CSS",
                    "Supabase Auth",
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isStackInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 text-[#CCCCCC]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00BCD4]" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isStackInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#1E1E1E]/50 rounded-xl p-8 border border-[#2A2A2A] hover:border-[#8B5CF6]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#8B5CF6]/20 rounded-xl flex items-center justify-center text-[#8B5CF6]">
                    <Server className="w-6 h-6" />
                  </div>
                  <h3 className="font-geist text-2xl font-bold text-[#F5F5F5]">Backend</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Node.js + Express",
                    "Anthropic Claude / Groq LLaMA",
                    "PostgreSQL (Supabase)",
                    "WhatsApp / SMS APIs",
                    "GitHub + Vercel APIs",
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 10 }}
                      animate={isStackInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 text-[#CCCCCC]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* 5. Pricing / Planos (or CTA for Demo) */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStackInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <h2 className="font-geist text-3xl md:text-4xl font-bold leading-tight text-[#F5F5F5] mb-6">
                Pronto para automatizar seu negócio?
              </h2>
              <p className="text-lg md:text-xl text-[#CCCCCC] max-w-xl mx-auto mb-8">
                Teste grátis. Sem cartão de crédito.
                Crie sua primeira automação em menos de 15 minutos.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <ParvusButton variant="primary">Acessar Parvus Automate →</ParvusButton>
                <ParvusButton variant="secondary">Solicitar Demo</ParvusButton>
              </div>
              <p className="mt-6 text-xs text-[#666]">
                Sem cartão de crédito. Sem compromisso. Acessível agora.
              </p>
            </motion.div>
          </div>

          {/* 6. FAQ (Perguntas Frequentes) */}
          <div ref={faqRef} className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-10 font-geist text-3xl md:text-4xl font-bold leading-tight text-center text-[#F5F5F5]"
            >
              Perguntas frequentes
            </motion.h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-b border-[#1E1E1E]"
                >
                  <button
                    type="button"
                    className={`group flex w-full items-start justify-between gap-4 px-4 py-5 text-left transition-all ${
                      faqOpen === index ? "bg-[#1E1E1E]/50" : "hover:bg-[#1E1E1E]/20"
                    }`}
                    onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                    aria-expanded={faqOpen === index}
                  >
                    <span className="font-geist text-base font-medium text-[#F5F5F5] transition-colors group-hover:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`mt-0.5 w-5 h-5 text-[#555] transition-all duration-300 group-hover:text-[#888] ${
                        faqOpen === index ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: faqOpen === index ? "auto" : 0,
                      opacity: faqOpen === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-[#1E1E1E]/50">
                      <p className="text-sm leading-relaxed text-[#CCCCCC]">{faq.a}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 7. CTA Final (Call-to-Action) */}
          <div ref={ctaRef} className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#00BCD4]/10 to-[#8B5CF6]/10 border border-[#00BCD4]/20 p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block mb-6"
                >
                  <Sparkles className="w-12 h-12 text-[#00BCD4] mx-auto" />
                </motion.div>
                <h2 className="font-geist text-3xl md:text-4xl font-bold leading-tight text-[#F5F5F5] mb-6">
                  Pronto para automatizar seu negócio?
                </h2>
                <p className="text-lg md:text-xl text-[#CCCCCC] max-w-xl mx-auto mb-8">
                  Teste Parvus Automate gratuitamente.
                  Sua primeira automação sai em menos de 15 minutos.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <ParvusButton variant="primary" className="relative overflow-hidden">
                      <span className="relative z-10">Começar Grátis →</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#00BCD4] to-[#8B5CF6] opacity-0 hover:opacity-20 transition-opacity"
                      />
                    </ParvusButton>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <ParvusButton variant="secondary">Ver Demonstração</ParvusButton>
                  </motion.div>
                </div>
                <p className="mt-6 text-xs text-[#666]">
                  Sem cartão de crédito. Sem compromisso. Acessível agora.
                </p>
              </div>
            </motion.div>
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#00BCD4]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8B5CF6]/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}