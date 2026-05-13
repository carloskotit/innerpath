"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmed)) {
      setErrorMsg("Enter a valid email address.")
      setStatus("error")
      return
    }

    setStatus("loading")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      })
      if (!res.ok) throw new Error("Subscribe failed")
      setStatus("success")
      setEmail("")
    } catch {
      setErrorMsg("Something went wrong. Try again.")
      setStatus("error")
    }
  }

  return (
    <div className="bg-[#111111] rounded-2xl p-6 border border-white/10">
      <span className="font-mono text-white/60 text-[10px] tracking-[0.3em] uppercase block mb-2">
        NEWSLETTER
      </span>
      <h3 className="text-xl font-black text-white tracking-tight mb-1">
        No-BS web dev insights.
      </h3>
      <p className="font-mono text-sm text-white/50 mb-5">
        Tips on performance, SEO, and shipping fast. ~2x/month.
      </p>

      {status === "success" ? (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-sm text-white/70"
        >
          Thanks — we&apos;ll be in touch.
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus("idle") }}
            placeholder="you@company.com"
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-mono text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-colors"
          />
          <motion.button
            type="submit"
            aria-label="Subscribe"
            disabled={status === "loading"}
            className="bg-white text-black px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-1.5 shrink-0 relative overflow-hidden disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Send className="w-4 h-4" aria-hidden="true" />
          </motion.button>
        </form>
      )}

      {status === "error" && (
        <p className="font-mono text-xs text-red-400 mt-2">{errorMsg}</p>
      )}
    </div>
  )
}
