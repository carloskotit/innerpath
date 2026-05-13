"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
}

interface ServiceDetailHeroProps {
  eyebrow?: string
  title: string
  valueProp: string
  description: string
}

export function ServiceDetailHero({ eyebrow = "SERVICE", title, valueProp, description }: ServiceDetailHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-40 pb-16 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0a0a0a]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-mono text-white/60 text-[10px] tracking-[0.3em] uppercase block mb-4"
        >
          {eyebrow}
        </motion.span>

        <div className="overflow-hidden mb-4">
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[2.6rem] sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white"
          >
            {title}
          </motion.h1>
        </div>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl font-black text-white/60 tracking-tight mb-4 max-w-2xl"
        >
          {valueProp}
        </motion.p>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-mono text-base text-white/50 max-w-2xl mb-8"
        >
          {description}
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4"
        >
          <Link href="/contact">
            <motion.div
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm tracking-wide relative overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
              />
              <span className="relative z-10">Start a project</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </motion.div>
          </Link>

          <Link href="#pricing">
            <motion.div
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide cursor-pointer hover:border-white/40 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              See pricing
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
