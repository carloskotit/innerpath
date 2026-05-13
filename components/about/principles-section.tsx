"use client"

import { motion } from "framer-motion"
import { Zap, Users, MessageSquare, RotateCcw } from "lucide-react"

const principles = [
  {
    icon: Zap,
    title: "Performance-first",
    body: "Speed is not optional. Every build targets sub-1s LCP. We run Lighthouse before shipping.",
  },
  {
    icon: Users,
    title: "Senior engineers only",
    body: "No outsourcing. No juniors shipping your production code. You get the person you talked to.",
  },
  {
    icon: MessageSquare,
    title: "Transparent communication",
    body: "Daily updates during active builds. No surprises on timelines or invoices.",
  },
  {
    icon: RotateCcw,
    title: "Fast iteration",
    body: "Decisions made quickly, changes shipped fast. We don't hide behind process.",
  },
]

export function PrinciplesSection() {
  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-12"
        >
          <span className="font-mono text-white/60 text-[10px] tracking-[0.3em] uppercase">HOW WE WORK</span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mt-2">Four principles.</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="bg-[#111111] rounded-2xl p-6 border border-white/10"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="font-mono text-sm text-white/50">{p.body}</p>
              <motion.div
                className="h-[2px] rounded-full mt-4 bg-white"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
