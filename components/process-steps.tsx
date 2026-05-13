"use client"

import { motion } from "framer-motion"

interface Step {
  step: number
  title: string
  body: string
}

interface ProcessStepsProps {
  steps: Step[]
  eyebrow?: string
  heading?: string
}

export function ProcessSteps({ steps, eyebrow = "HOW IT WORKS", heading = "Our process." }: ProcessStepsProps) {
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
          <span className="font-mono text-white/60 text-[10px] tracking-[0.3em] uppercase">{eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mt-2">{heading}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative"
            >
              <div className="bg-[#111111] rounded-2xl p-5 border border-white/10 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-2xl font-black"
                    style={{
                      background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    0{step.step}
                  </span>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-sm text-white/50 font-mono">{step.body}</p>
                <motion.div
                  className="h-[2px] rounded-full mt-4 bg-white"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                />
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-white/20 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
