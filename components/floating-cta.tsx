"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function FloatingCta() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  const hidden = pathname === "/" || pathname === "/contact"

  useEffect(() => {
    if (hidden) return
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hidden])

  if (hidden) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 z-50 w-max"
        >
          <Link href="/contact">
            <motion.div
              className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm tracking-wide shadow-lg relative overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 4 }}
              />
              <span className="relative z-10">Start a project →</span>
            </motion.div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
