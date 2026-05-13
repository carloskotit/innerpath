"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
}

interface PageHeroProps {
  eyebrow: string
  heading: ReactNode
  subheading?: string
  children?: ReactNode
}

export function PageHero({ eyebrow, heading, subheading, children }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-16 px-6 max-w-7xl mx-auto">
      <motion.span
        custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="font-mono text-white/60 text-[10px] tracking-[0.3em] uppercase block mb-4"
      >
        {eyebrow}
      </motion.span>
      <div className="overflow-hidden mb-4">
        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-[2.6rem] sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white"
        >
          {heading}
        </motion.h1>
      </div>
      {subheading && (
        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-mono text-base text-white/50 max-w-2xl"
        >
          {subheading}
        </motion.p>
      )}
      {children && (
        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate="visible"
        >
          {children}
        </motion.div>
      )}
    </section>
  )
}
