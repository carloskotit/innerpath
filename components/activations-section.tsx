"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"

const benefits = [
  "Performance-first development focused on speed and conversions",
  "Senior engineers only - no outsourcing, no handoffs",
  "Transparent, fast communication throughout the entire process",
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

export function ActivationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-black/50 text-xs tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            ABOUT US
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter mt-2 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              High-Performance Web Development,
            </motion.span>
            <br />
            <motion.span
              className="text-black/60 inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
            >
              Built to Scale
            </motion.span>
          </h2>
          <motion.p
            className="text-sm text-black/60 font-mono mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            InnerPath is a web development agency delivering fast, scalable, and conversion-driven websites. You work directly with senior engineers - no layers, no delays, just execution.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit}
              variants={itemVariants}
              className="flex items-start gap-4 py-4 border-b border-black/10 last:border-0"
            >
              <motion.div
                className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Check className="w-3 h-3 text-white" />
              </motion.div>
              <p className="text-black font-medium">{benefit}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
