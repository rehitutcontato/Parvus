"use client";

import { useState, useEffect } from "react";
import { motion } from "@/components/framer/motion-elements";

interface TerminalStep {
  text: string;
  status: "pending" | "running" | "complete";
}

export function TerminalAnimation() {
  const [steps, setSteps] = useState<TerminalStep[]>([
    { text: "> Analisando problema...", status: "pending" },
    { text: "> Identificando tecnologias...", status: "pending" },
    { text: "> Arquitetando solução...", status: "pending" },
    { text: "> Gerando código frontend...", status: "pending" },
    { text: "> Gerando código backend...", status: "pending" },
    { text: "> Criando documentação...", status: "pending" },
    { text: "> ✓ Automação pronta!", status: "pending" },
  ]);

  useEffect(() => {
    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setSteps((prev) =>
          prev.map((step, index) => {
            if (index === currentStep) {
              return { ...step, status: "running" as const };
            }
            if (index < currentStep) {
              return { ...step, status: "complete" as const };
            }
            return step;
          })
        );

        setTimeout(() => {
          setSteps((prev) =>
            prev.map((step, index) => {
              if (index === currentStep) {
                return { ...step, status: "complete" as const };
              }
              return step;
            })
          );
          currentStep++;
        }, 800);
      } else {
        // Reset after completion
        setTimeout(() => {
          currentStep = 0;
          setSteps((prev) =>
            prev.map((step) => ({ ...step, status: "pending" as const }))
          );
        }, 3000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0a0a] rounded-lg p-4 font-mono text-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-[#555] text-xs">terminal</span>
      </div>
      <div className="space-y-2">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-2"
          >
            <span className="text-[#00BCD4]">
              {step.status === "complete" && "✓"}
              {step.status === "running" && "▶"}
              {step.status === "pending" && "○"}
            </span>
            <span
              className={
                step.status === "complete"
                  ? "text-green-400"
                  : step.status === "running"
                  ? "text-[#00BCD4]"
                  : "text-[#555]"
              }
            >
              {step.text}
            </span>
            {step.status === "running" && (
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-[#00BCD4]"
              >
                █
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
