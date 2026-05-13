"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { PostMeta } from "@/lib/mdx"

interface BlogCardProps {
  post: PostMeta
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <Link href={`/blog/${post.slug}`} className="block group">
        <div className="bg-[#111111] rounded-2xl p-6 border border-white/10 h-full hover:border-white/20 transition-colors duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-white/30 text-[10px] tracking-widest uppercase">{post.date}</span>
            {post.readingTime && (
              <>
                <span className="text-white/20">·</span>
                <span className="font-mono text-white/30 text-[10px] tracking-widest uppercase">{post.readingTime}</span>
              </>
            )}
          </div>
          <h2 className="text-xl font-black text-white tracking-tight mb-2 group-hover:text-white/80 transition-colors">
            {post.title}
          </h2>
          <p className="text-sm text-white/50 font-mono leading-relaxed mb-4">{post.description}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag) => (
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
            transition={{ duration: 0.8, delay: 0.3 + index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
          />
        </div>
      </Link>
    </motion.div>
  )
}
