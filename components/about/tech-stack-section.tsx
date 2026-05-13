"use client"

import { motion } from "framer-motion"

const stack = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Vercel", "Framer Motion", "Supabase", "Shopify",
]

export function TechStackSection() {
  return (
    <section className="py-16 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-10"
        >
          <span className="font-mono text-white/60 text-[10px] tracking-[0.3em] uppercase">TECH STACK</span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mt-2">Tools we trust.</h2>
        </motion.div>
        <div className="flex flex-wrap gap-3">
          {stack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-mono text-sm text-white border border-white/20 rounded-full px-4 py-2"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
