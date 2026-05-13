"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"

const categories = ["All", "Web Design", "Development", "SEO"] as const

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
}

export function WorkPageClient() {
  const [active, setActive] = useState<string>("All")
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <section className="relative pt-40 pb-12 px-6 max-w-7xl mx-auto">
        <motion.span
          custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-mono text-white/60 text-[10px] tracking-[0.3em] uppercase block mb-4"
        >
          OUR WORK
        </motion.span>
        <div className="overflow-hidden mb-4">
          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="text-[2.6rem] sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white"
          >
            Recent projects.
          </motion.h1>
        </div>
        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-mono text-base text-white/50 max-w-2xl"
        >
          Real work for real clients. Fast sites, clean code, measurable results.
        </motion.p>
      </section>

      <section className="px-6 pb-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-xs tracking-widest uppercase px-4 py-2.5 rounded-full border transition-colors duration-200 ${
                active === cat
                  ? "bg-white text-black border-white"
                  : "text-white/50 border-white/20 hover:border-white/40 hover:text-white"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
