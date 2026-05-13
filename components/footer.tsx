"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  const footerRef = useRef(null)

  return (
    <footer ref={footerRef} className="relative bg-black pt-12 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Image
              src="/images/innerpath-logo.png"
              alt="InnerPath"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-lg font-black text-white">InnerPath</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono text-xs text-white/40 hover:text-white transition-colors tracking-widest uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-white/40 font-mono text-xs">&copy; 2026 InnerPath. All rights reserved.</p>
          <a
            href="mailto:contact@innerpathagency.com"
            className="text-white/40 font-mono text-xs hover:text-white transition-colors"
          >
            contact@innerpathagency.com
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15rem] md:text-[25rem] font-black text-white/[0.02] pointer-events-none select-none leading-none"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        aria-hidden="true"
      >
        IP
      </motion.div>
    </footer>
  )
}
