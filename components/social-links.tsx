"use client"

import { motion, type Variants } from "framer-motion"
import { Instagram, Youtube, Twitter, Linkedin, Github } from "lucide-react"
import { socials } from "@/data/socials"
import { cn } from "@/lib/utils"

interface SocialLinksProps {
  variant: "footer" | "contact"
  className?: string
}

function TikTokIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

function getIcon(name: string, size: number) {
  switch (name) {
    case "Instagram":
      return <Instagram size={size} />
    case "TikTok":
      return <TikTokIcon size={size} />
    case "YouTube":
      return <Youtube size={size} />
    case "X":
      return <Twitter size={size} />
    case "LinkedIn":
      return <Linkedin size={size} />
    case "GitHub":
      return <Github size={size} />
    default:
      return null
  }
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export function SocialLinks({ variant, className }: SocialLinksProps) {
  const isContact = variant === "contact"
  const iconSize = isContact ? 20 : 16

  return (
    <motion.div
      className={cn("flex flex-wrap gap-4", isContact && "flex-col gap-3", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow InnerPath on ${social.name}`}
          variants={itemVariants}
          className={cn(
            "flex items-center gap-2 text-white/40 hover:text-white transition-colors",
            isContact && "group"
          )}
        >
          {getIcon(social.name, iconSize)}
          {isContact && (
            <span className="font-mono text-xs text-white/50 group-hover:text-white transition-colors tracking-widest uppercase">
              {social.name}
            </span>
          )}
        </motion.a>
      ))}
    </motion.div>
  )
}
