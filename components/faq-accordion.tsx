"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQ {
  q: string
  a: string
}

interface FaqAccordionProps {
  items: FAQ[]
  eyebrow?: string
  heading?: string
}

export function FaqAccordion({ items, eyebrow = "FAQ", heading = "Common questions." }: FaqAccordionProps) {
  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-10"
        >
          <span className="font-mono text-white/60 text-[10px] tracking-[0.3em] uppercase">{eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mt-2">{heading}</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-white/10 rounded-xl px-5 bg-[#111111]"
              >
                <AccordionTrigger className="text-white font-medium text-sm py-4 hover:no-underline hover:text-white/80 [&>svg]:text-white/40">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 font-mono text-sm pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
