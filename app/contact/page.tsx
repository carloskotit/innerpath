import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContactPageClient } from "@/components/contact/contact-page-client"
import { FaqAccordion } from "@/components/faq-accordion"
import { contactFaqs } from "@/data/faqs"

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with InnerPath. We reply within 24 hours.",
  alternates: { canonical: "/contact" },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactFaqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
}

export default function ContactPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navigation />
      <PageHero
        eyebrow="GET IN TOUCH"
        heading="Let's build something."
        subheading="Tell us about your project and we'll get back to you within 24 hours."
      >
        <p className="font-mono text-sm text-white/40 mt-2">
          Or email us directly at{" "}
          <a
            href="mailto:contact@innerpathagency.com"
            className="text-white underline underline-offset-4 hover:text-white/70"
          >
            contact@innerpathagency.com
          </a>
        </p>
      </PageHero>
      <ContactPageClient />
      <FaqAccordion items={contactFaqs} eyebrow="COMMON QUESTIONS" heading="Quick answers." />
      <Footer />
    </div>
  )
}
