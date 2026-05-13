"use client"

import { SocialSection } from "@/components/social-section"

export function ContactPageClient() {
  return (
    <div className="pb-0">
      <SocialSection />
      <div className="py-8 px-6">
        <div className="max-w-xl mx-auto bg-[#111111] rounded-2xl p-6 border border-white/10">
          <span className="font-mono text-white/60 text-[10px] tracking-[0.3em] uppercase block mb-3">BOOK A CALL</span>
          <h3 className="text-xl font-black text-white mb-2">Prefer to talk first?</h3>
          <p className="font-mono text-sm text-white/50 mb-4">Book a 30-minute intro call. No pressure, no sales pitch.</p>
          {/* TODO: replace "your-username" with real cal.com username */}
          <a
            href="https://cal.com/inner-path-a55lvt/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold text-sm tracking-wide hover:bg-white/90 transition-colors"
          >
            Book on Cal.com →
          </a>
          <p className="font-mono text-xs text-white/30 mt-3">We reply to all emails within 24 hours.</p>
        </div>
      </div>
    </div>
  )
}
