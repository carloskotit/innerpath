"use client"

import { motion, useInView, type Variants } from "framer-motion"
import type { FormEvent } from "react"
import { useRef, useState } from "react"
import { Send } from "lucide-react"

const CONTACT_EMAIL = "contact@innerpathagency.com"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

type Status = "idle" | "sending" | "success" | "error"

export function SocialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [formData, setFormData] = useState({
    website: "",
    name: "",
    email: "",
    message: "",
    hp_field: "",
  })
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === "sending") return

    setStatus("sending")
    setErrorMsg("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          website: formData.website.trim(),
          message: formData.message.trim(),
          hp_field: formData.hp_field,
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus("error")
        setErrorMsg(json?.error ?? "Something went wrong. Try again.")
        return
      }
      setStatus("success")
      setFormData({ website: "", name: "", email: "", message: "", hp_field: "" })
    } catch {
      setStatus("error")
      setErrorMsg("Network error. Try again.")
    }
  }

  return (
    <section id="contact" className="relative py-16 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-white/50 text-xs tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            GET IN TOUCH
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mt-2 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              Ready to build something great?
            </motion.span>
          </h2>
          <motion.p
            className="text-sm text-white/50 font-mono mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Or email us directly at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-white underline underline-offset-4 hover:text-white/80">
              {CONTACT_EMAIL}
            </a>
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="max-w-xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
              <label>
                Leave this field empty
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.hp_field}
                  onChange={(e) => setFormData({ ...formData, hp_field: e.target.value })}
                />
              </label>
            </div>

            <motion.div variants={itemVariants}>
              <label className="block text-white/70 text-sm font-medium mb-2">
                Website <span className="text-white/40 font-normal">(optional)</span>
              </label>
              <input
                type="url"
                placeholder="https://yoursite.com (optional)"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-mono text-sm focus:outline-none focus:border-white/30 transition-colors"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-white/70 text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-mono text-sm focus:outline-none focus:border-white/30 transition-colors"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-white/70 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-mono text-sm focus:outline-none focus:border-white/30 transition-colors"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-white/70 text-sm font-medium mb-2">Tell us about your project</label>
              <textarea
                required
                placeholder="What are you building? Budget? Timeline?"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-mono text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-white text-black px-6 py-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={status === "sending" ? undefined : { scale: 1.02 }}
                whileTap={status === "sending" ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full"
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">
                  {status === "sending" ? "Sending..." : "Send message"}
                </span>
                <Send className="w-4 h-4 relative z-10" />
              </motion.button>
              {status === "success" && (
                <p className="font-mono text-xs text-emerald-400 mt-3 text-center">
                  Message sent. We'll reply within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="font-mono text-xs text-red-400 mt-3 text-center">{errorMsg}</p>
              )}
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
