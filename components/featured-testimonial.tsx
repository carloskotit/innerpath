"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import type { Testimonial } from "@/data/testimonials"

interface FeaturedTestimonialProps {
  testimonial: Testimonial
}

export function FeaturedTestimonial({ testimonial }: FeaturedTestimonialProps) {
  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="bg-[#111111] rounded-2xl p-8 md:p-12 border border-white/10 text-center"
        >
          <Quote className="w-8 h-8 text-white/20 mx-auto mb-6" />
          <p className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-6">
            {testimonial.quote}
          </p>
          <p className="font-bold text-white">{testimonial.name}</p>
          <p className="font-mono text-sm text-white/40 mt-1">{testimonial.role}</p>
        </motion.div>
      </div>
    </section>
  )
}
