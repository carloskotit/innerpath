import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "This page doesn't exist.",
}

export default function NotFound() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <span className="font-mono text-white/60 text-[10px] tracking-[0.3em] uppercase block mb-4">404</span>
          <h1 className="text-[2.6rem] sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white mb-6">
            Page not found.
          </h1>
          <p className="font-mono text-base text-white/50 max-w-md mx-auto mb-8">
            This page doesn&apos;t exist. Maybe the URL changed, or it never existed.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-white/90 transition-colors"
          >
            Back to home →
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
