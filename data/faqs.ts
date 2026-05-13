export interface FAQ {
  q: string
  a: string
}

export const contactFaqs: FAQ[] = [
  {
    q: "How much does a project cost?",
    a: "Depends on scope. Landing pages start around $2k. Full builds with custom design, CMS, and SEO start around $5k. We give you a fixed quote upfront — no surprises.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most projects ship in 2–6 weeks. Complex builds with custom integrations can take longer. We'll give you a realistic timeline in our first call.",
  },
  {
    q: "What's your tech stack?",
    a: "Next.js, React, TypeScript, Tailwind CSS, Framer Motion, deployed on Vercel. For e-commerce, we use Shopify or headless Shopify depending on your needs.",
  },
  {
    q: "Do you work with my existing framework?",
    a: "If it's a modern web framework (Astro, Nuxt, Remix, SvelteKit), yes. If it's Wix or Squarespace, we'll probably recommend migrating — you'll be glad you did.",
  },
  {
    q: "Do you do retainers?",
    a: "Yes. We offer monthly maintenance retainers covering updates, performance monitoring, and priority support. Ask us about pricing.",
  },
]
