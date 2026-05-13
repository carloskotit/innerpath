"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group"
    >
      <Link href="/contact" aria-label={`Start a project like ${project.name}`}>
      <div className="bg-[#111111] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors duration-300 cursor-pointer">
        {/* Gradient image placeholder */}
        <div
          className="h-48 flex items-center justify-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
          }}
        >
          <span className="text-5xl font-black text-white/20 select-none">{project.monogram}</span>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-white">{project.name}</h3>
            <span className="font-mono text-white/30 text-[10px] tracking-widest uppercase shrink-0">
              {project.category}
            </span>
          </div>
          <p className="text-sm text-white/50 font-mono mb-4">{project.oneLiner}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono text-white/40 border border-white/10 rounded-full px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <motion.div
            className="h-[2px] rounded-full mt-4 bg-white"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.05, ease: [0.25, 0.4, 0.25, 1] }}
          />
        </div>
      </div>
      </Link>
    </motion.div>
  )
}
