import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CtaBand } from "@/components/cta-band"
import { WorkPageClient } from "@/components/work-page-client"

export const metadata: Metadata = {
  title: "Our Work",
  description: "Recent projects from InnerPath — fast websites, clean code, measurable results.",
  alternates: { canonical: "/work" },
}

export default function WorkPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navigation />
      <WorkPageClient />
      <CtaBand heading="Want results like these?" subheading="Let's talk about your project." />
      <Footer />
    </div>
  )
}
