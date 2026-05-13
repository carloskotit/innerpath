"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CtaBandProps {
  heading?: string
  subheading?: string
  ctaLabel?: string
  ctaHref?: string
}

export function CtaBand({
  heading = "Ready to build?",
  subheading,
  ctaLabel = "Start a project →",
  ctaHref = "/contact",
}: CtaBandProps) {
  return (
    <section className="relative py-16 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
            {heading}
          </h2>
          {subheading && (
            <p className="font-mono text-white/50 text-sm mb-8 max-w-xl mx-auto">{subheading}</p>
          )}
          <Link href={ctaHref}>
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
              <span className="relative z-10">{ctaLabel}</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
