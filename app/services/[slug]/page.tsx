import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceDetailHero } from "@/components/service-detail-hero"
import { TrustStrip } from "@/components/trust-strip"
import { ProcessSteps } from "@/components/process-steps"
import { FaqAccordion } from "@/components/faq-accordion"
import { CtaBand } from "@/components/cta-band"
import { FeaturedTestimonial } from "@/components/featured-testimonial"
import { services, getServiceBySlug } from "@/data/services"
import { testimonials } from "@/data/testimonials"
import { Check } from "lucide-react"
import Link from "next/link"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.heroDescription,
    alternates: { canonical: `/services/${slug}` },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const testimonial = testimonials.find((t) => t.id === service.featuredTestimonialId) ?? testimonials[0]

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.heroDescription,
    provider: { "@type": "Organization", name: "InnerPath", url: "https://innerpathagency.com" },
    url: `https://innerpathagency.com/services/${slug}`,
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://innerpathagency.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://innerpathagency.com/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://innerpathagency.com/services/${slug}` },
    ],
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navigation />

      <ServiceDetailHero
        eyebrow={service.eyebrow}
        title={service.title}
        valueProp={service.valueProp}
        description={service.heroDescription}
      />

      <TrustStrip stats={service.stats} />

      {/* Deliverables */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-white/60 text-[10px] tracking-[0.3em] uppercase block mb-4">WHAT YOU GET</span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-10">Included in every project.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl">
            {service.deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-black" />
                </div>
                <p className="text-white/80 font-mono text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps steps={service.process} />

      {/* Objections */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-white/60 text-[10px] tracking-[0.3em] uppercase block mb-4">COMMON CONCERNS</span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-10">Honest answers.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.objections.map((obj, i) => (
              <div key={i} className="bg-[#111111] rounded-2xl p-6 border border-white/10">
                <h3 className="text-base font-bold text-white mb-3">{obj.q}</h3>
                <p className="font-mono text-sm text-white/50">{obj.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="pricing" className="py-16 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-white/60 text-[10px] tracking-[0.3em] uppercase block mb-4">PRICING</span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
            Starting from{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {service.pricingFrom}
            </span>
          </h2>
          <p className="font-mono text-sm text-white/50 mb-6">
            Every project is scoped individually. No hidden fees, no surprise invoices.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-white/90 transition-colors"
          >
            Get a custom quote →
          </Link>
        </div>
      </section>

      <FeaturedTestimonial testimonial={testimonial} />
      <FaqAccordion items={service.faq} />
      <CtaBand heading="Ready to build?" />
      <Footer />
    </div>
  )
}
