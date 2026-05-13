import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CtaBand } from "@/components/cta-band"
import { PageHero } from "@/components/page-hero"
import { PrinciplesSection } from "@/components/about/principles-section"
import { TechStackSection } from "@/components/about/tech-stack-section"

export const metadata: Metadata = {
  title: "About",
  description: "InnerPath is a web development agency. Senior engineers only. No layers, no handoffs, no BS.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navigation />
      <PageHero
        eyebrow="ABOUT"
        heading={
          <>
            We build fast websites.
            <br />
            <span className="text-white/40">No fluff.</span>
          </>
        }
        subheading="InnerPath is a web development agency. You work directly with senior engineers — no account managers, no offshore handoffs, no 6-week timelines for a landing page. We ship fast, build clean, and treat performance as a feature."
      />
      <PrinciplesSection />
      <TechStackSection />
      <CtaBand heading="Ready to work together?" subheading="Tell us what you're building." />
      <Footer />
    </div>
  )
}
