"use client"

import type React from "react"

import { motion, AnimatePresence, useSpring, type Variants } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Irini S.",
    role: "Local Bar Owner",
    quote: "Once you go InnerPath, there is no other Path.",
  },
  {
    id: 2,
    name: "Jonathan D.",
    role: "E-commerce founder",
    quote: "InnerPath completely rebuilt our website, and within weeks we saw a 42% increase in conversions. What stood out wasn't just the design - it was how fast and intentional everything felt. They don't waste time.",
  },
  {
    id: 3,
    name: "Adam A.",
    role: "Hotel Manager",
    quote: "Before InnerPath, our site looked like a potato.",
  },
]

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.9,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  }),
}

export function FlavorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [[page, direction], setPage] = useState([0, 0])
  const currentTestimonial = testimonials[currentIndex]

  const rotateX = useSpring(0, { stiffness: 150, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)
    rotateY.set(x * 5)
    rotateX.set(-y * 5)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  const paginate = (newDirection: number) => {
    const newIndex = (currentIndex + newDirection + testimonials.length) % testimonials.length
    setCurrentIndex(newIndex)
    setPage([page + newDirection, newDirection])
  }

  const nextTestimonial = () => paginate(1)
  const prevTestimonial = () => paginate(-1)

  return (
    <section id="testimonials" className="relative py-16 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-black/50 text-xs tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            CLIENT STORIES
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter mt-2 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              What clients say.
            </motion.span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-6">
            <motion.button
              onClick={prevTestimonial}
              className="hidden md:flex w-12 h-12 rounded-full border-2 border-black items-center justify-center hover:bg-black hover:text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative w-full max-w-3xl"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className="bg-black rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl"
                  style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex flex-col items-center text-center space-y-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Quote className="w-10 h-10 text-white/30" />
                    </motion.div>

                    <motion.p
                      className="text-xl md:text-2xl font-medium text-white leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {currentTestimonial.quote}
                    </motion.p>

                    <motion.div
                      className="pt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="font-bold text-white">{currentTestimonial.name}</p>
                      <p className="text-sm text-white/50 font-mono">{currentTestimonial.role}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <motion.button
              onClick={nextTestimonial}
              className="hidden md:flex w-12 h-12 rounded-full border-2 border-black items-center justify-center hover:bg-black hover:text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="flex md:hidden justify-center gap-4 mt-6">
            <motion.button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => {
                  const newDirection = index > currentIndex ? 1 : -1
                  setCurrentIndex(index)
                  setPage([index, newDirection])
                }}
                className="h-2 rounded-full transition-all"
                style={{
                  backgroundColor: index === currentIndex ? "#000000" : "#00000020",
                }}
                animate={{
                  width: index === currentIndex ? 28 : 10,
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
