import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CtaBand } from "@/components/cta-band"
import { ServicesGrid } from "@/components/services-grid"

export const metadata: Metadata = {
  title: "Services",
  description: "Web design, development, SEO, and maintenance — high-performance websites for ambitious brands.",
  alternates: { canonical: "/services" },
}

export default function ServicesPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navigation />
      <ServicesGrid />
      <CtaBand
        heading="Not sure where to start?"
        subheading="Tell us what you're building and we'll recommend the right service."
      />
      <Footer />
    </div>
  )
}
