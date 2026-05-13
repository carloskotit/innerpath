import type { Metadata } from "next"
import { socials } from "@/data/socials"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BentoGrid } from "@/components/bento-grid"
import { FlavorCarousel } from "@/components/flavor-carousel"
import { ActivationsSection } from "@/components/activations-section"
import { SocialSection } from "@/components/social-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "InnerPath | High-Performance Web Development",
  description: "We design and build high-performance websites for ambitious brands, from landing pages to full-scale web apps.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://innerpathagency.com/#organization",
      name: "InnerPath",
      url: "https://innerpathagency.com",
      email: "contact@innerpathagency.com",
      logo: {
        "@type": "ImageObject",
        url: "https://innerpathagency.com/icon.svg",
      },
      description: "High-performance web development agency. Senior engineers only.",
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@innerpathagency.com",
        contactType: "customer support",
      },
      sameAs: socials.map((s) => s.url),
    },
    {
      "@type": "WebSite",
      "@id": "https://innerpathagency.com/#website",
      url: "https://innerpathagency.com",
      name: "InnerPath",
      publisher: { "@id": "https://innerpathagency.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://innerpathagency.com/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <HeroSection />
      <BentoGrid />
      <FlavorCarousel />
      <ActivationsSection />
      <SocialSection />
      <Footer />
    </main>
  )
}
