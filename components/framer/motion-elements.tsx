"use client"

import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView, useMotionValue } from "framer-motion"
import type { HTMLMotionProps, MotionProps } from "framer-motion"

// Exportar motion components tipados
export const MotionDiv = motion.div
export const MotionSection = motion.section
export const MotionSpan = motion.span
export const MotionP = motion.p
export const MotionH1 = motion.h1
export const MotionH2 = motion.h2
export const MotionH3 = motion.h3
export const MotionArticle = motion.article
export const MotionNav = motion.nav
export const MotionFooter = motion.footer
export const MotionHeader = motion.header
export const MotionUl = motion.ul
export const MotionLi = motion.li
export const MotionButton = motion.button
export const MotionA = motion.a

// Exportar hooks como named exports
export { useScroll, useTransform, useSpring, useInView, useMotionValue }

// Exportar componentes utilitários
export { AnimatePresence }

// Re-exportar motion para casos especiais
export { motion }

// Tipos
export type { HTMLMotionProps, MotionProps }
