"use client"

import { motion } from "framer-motion"

interface Stat {
  value: string
  label: string
}

interface TrustStripProps {
  stats: Stat[]
}

export function TrustStrip({ stats }: TrustStripProps) {
  return (
    <section className="py-16 border-y border-white/10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-center"
            >
              <p
                className="text-3xl md:text-4xl font-black tracking-tighter"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </p>
              <p className="font-mono text-white/50 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
