"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { services } from "@/data/services"
import { Palette, Zap, TrendingUp, Wrench } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
}

const icons = { "web-design": Palette, development: Zap, seo: TrendingUp, maintenance: Wrench }

export function ServicesGrid() {
  return (
    <>
      <section className="relative pt-40 pb-16 px-6 max-w-7xl mx-auto">
        <motion.span
          custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-mono text-white/60 text-[10px] tracking-[0.3em] uppercase block mb-4"
        >
          SERVICES
        </motion.span>
        <div className="overflow-hidden mb-4">
          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="text-[2.6rem] sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white"
          >
            Everything you need to launch and grow online.
          </motion.h1>
        </div>
        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-mono text-base text-white/50 max-w-2xl"
        >
          Four services. One team. No handoffs, no outsourcing. Senior engineers on every project.
        </motion.p>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => {
            const Icon = icons[service.slug as keyof typeof icons] ?? Zap
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="bg-[#111111] rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-colors duration-300 h-full">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <h2 className="text-xl font-black text-white mb-2">{service.title}</h2>
                    <p className="font-mono text-sm text-white/50 mb-2">{service.heroDescription}</p>
                    <p className="font-mono text-xs text-white/30 mt-4">From {service.pricingFrom} →</p>
                    <motion.div
                      className="h-[2px] rounded-full mt-4 bg-white"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                    />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>
    </>
  )
}
