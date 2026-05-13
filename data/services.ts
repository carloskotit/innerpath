import type { FAQ } from "./faqs"

export interface ServiceProcess {
  step: number
  title: string
  body: string
}

export interface ServiceObjection {
  q: string
  a: string
}

export interface ServiceData {
  slug: string
  title: string
  eyebrow: string
  valueProp: string
  heroDescription: string
  stats: { value: string; label: string }[]
  deliverables: string[]
  process: ServiceProcess[]
  objections: ServiceObjection[]
  pricingFrom: string
  featuredTestimonialId: number
  faq: FAQ[]
}

export const services: ServiceData[] = [
  {
    slug: "web-design",
    title: "Web Design",
    eyebrow: "SERVICE",
    valueProp: "Websites that convert — not just look good.",
    heroDescription:
      "We design clean, fast, conversion-focused interfaces. Every pixel has a reason. No templates, no bloat, no stock-photo vibes.",
    stats: [
      { value: "50+", label: "projects shipped" },
      { value: "<1s", label: "avg load time" },
      { value: "100%", label: "senior engineers" },
    ],
    deliverables: [
      "Custom design — no templates",
      "Figma prototype before any code",
      "Mobile-first, responsive at every breakpoint",
      "WCAG 2.1 AA accessibility",
      "Framer Motion micro-interactions",
      "Final handoff with design tokens documented",
    ],
    process: [
      { step: 1, title: "Discovery", body: "We learn your goals, audience, and competitors. 1-hour call, then a written brief." },
      { step: 2, title: "Design", body: "High-fidelity Figma mockups. You get two rounds of revisions before we touch code." },
      { step: 3, title: "Build", body: "Next.js + Tailwind. Pixel-perfect implementation with animations and performance baked in." },
      { step: 4, title: "Launch", body: "Deploy to Vercel, DNS transfer, performance audit. Site is live in under 10 minutes." },
    ],
    objections: [
      { q: "Will it be fast?", a: "Yes. We target sub-1s LCP by default — next/image, code splitting, edge caching on Vercel, preloaded fonts. Performance isn't optional." },
      { q: "How long does it take?", a: "Design phase: 1 week. Build: 1–2 weeks. Full project typically ships in 3–4 weeks from kickoff call." },
      { q: "What if I need changes later?", a: "We hand over full ownership of the code. You can edit it yourself or get a maintenance retainer and let us handle updates." },
    ],
    pricingFrom: "$3,000",
    featuredTestimonialId: 2,
    faq: [
      { q: "Do you work with existing brand guidelines?", a: "Yes. If you have a brand guide, we follow it exactly. If not, we can help define one." },
      { q: "Can I see the Figma before you build?", a: "Always. We don't write a line of code until you've approved the design." },
      { q: "Do you design for mobile first?", a: "Every time. We test on real devices, not just browser dev tools." },
      { q: "Will the site be editable by my team?", a: "We can set up a headless CMS (Sanity, Contentful) so non-developers can edit content without touching code." },
      { q: "What if I hate the design?", a: "You get two full rounds of revisions on the mockup before we build. If it's still not right, we'll figure it out — we've never had a client walk away unhappy." },
    ],
  },
  {
    slug: "development",
    title: "Development",
    eyebrow: "SERVICE",
    valueProp: "Fast, scalable code. Zero legacy debt.",
    heroDescription:
      "We build on Next.js, TypeScript, and Vercel. Apps that load fast, scale to traffic spikes, and don't need a DevOps team to keep running.",
    stats: [
      { value: "98+", label: "avg Lighthouse score" },
      { value: "<1s", label: "LCP on Vercel Edge" },
      { value: "0", label: "vendor lock-in" },
    ],
    deliverables: [
      "Next.js App Router architecture",
      "TypeScript throughout — no `any`",
      "Vercel deployment with preview URLs",
      "Image optimization via next/image",
      "Edge caching + ISR where appropriate",
      "CI/CD pipeline via GitHub Actions",
    ],
    process: [
      { step: 1, title: "Discovery", body: "Scope, integrations, performance targets. We spec the API surface before touching a keyboard." },
      { step: 2, title: "Architecture", body: "Data flow diagram, component tree, caching strategy. Decisions made on paper first." },
      { step: 3, title: "Build", body: "TypeScript-first, test-friendly, no magic. PR reviews, staging environment, preview URLs." },
      { step: 4, title: "Launch", body: "Production deploy, Lighthouse audit, monitoring setup. You get a recorded walkthrough of the codebase." },
    ],
    objections: [
      { q: "Will it be fast?", a: "We treat performance as a feature, not an afterthought. Sub-1s LCP is our baseline target, not a stretch goal." },
      { q: "What if I need changes later?", a: "Clean, typed code means your future self (or your next developer) can work without fear. No spaghetti." },
      { q: "Do you build backends too?", a: "Yes — Next.js API routes, serverless functions, database integrations (Postgres, Supabase, PlanetScale)." },
    ],
    pricingFrom: "$4,000",
    featuredTestimonialId: 2,
    faq: [
      { q: "What databases do you work with?", a: "Postgres (Supabase, Neon), SQLite for small projects, Redis for caching. We don't do MongoDB." },
      { q: "Do you write tests?", a: "Yes. Unit tests for critical business logic, integration tests for API routes. We use Vitest and Playwright." },
      { q: "Can you take over an existing codebase?", a: "Yes. We'll audit it first and give you an honest assessment before committing." },
      { q: "Do you do React Native or mobile?", a: "Not currently. We're web-only and prefer to stay excellent at one thing." },
      { q: "What about auth?", a: "We implement Auth.js, Clerk, or custom JWT depending on your requirements and budget." },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    eyebrow: "SERVICE",
    valueProp: "Organic traffic that compounds. No black hat.",
    heroDescription:
      "Technical SEO, content structure, and Core Web Vitals — done right. We've helped clients 3× organic traffic in 90 days without paying for a single ad.",
    stats: [
      { value: "3×", label: "avg traffic increase" },
      { value: "90", label: "days to measurable lift" },
      { value: "100", label: "Core Web Vitals score" },
    ],
    deliverables: [
      "Full technical SEO audit",
      "Core Web Vitals optimization",
      "Semantic HTML and heading structure",
      "Schema.org structured data",
      "XML sitemap + robots.txt",
      "Internal link architecture review",
    ],
    process: [
      { step: 1, title: "Audit", body: "Crawl, Core Web Vitals, indexation, structured data, content gaps. Full written report." },
      { step: 2, title: "Fix", body: "Technical fixes first — speed, crawlability, structured data. The foundation before the content strategy." },
      { step: 3, title: "Content", body: "Keyword mapping, internal linking, content brief for each priority page." },
      { step: 4, title: "Monitor", body: "Google Search Console, rank tracking. Monthly report with what moved and what's next." },
    ],
    objections: [
      { q: "How long until I see results?", a: "Technical fixes can show movement in 30 days. Content-driven growth compounds over 3–6 months. Anyone promising faster is lying." },
      { q: "Do I need to write content?", a: "We'll give you briefs and can write for you. But the best-performing content comes from founders who know their space." },
      { q: "Will you do anything that could hurt my rankings?", a: "Never. No link farms, no keyword stuffing, no cloaking. We'd rather do nothing than risk a penalty." },
    ],
    pricingFrom: "$1,500",
    featuredTestimonialId: 3,
    faq: [
      { q: "Do you guarantee first-page rankings?", a: "No one can guarantee that. Anyone who does is selling you something. We guarantee improvements in the metrics that matter." },
      { q: "What about local SEO?", a: "Yes — Google Business Profile optimization, NAP consistency, local schema, citation building." },
      { q: "Do you do Google Ads too?", a: "No. We focus on organic. For paid, we can refer you to specialists." },
      { q: "What tools do you use?", a: "Google Search Console, Ahrefs, Screaming Frog, PageSpeed Insights. No proprietary mystery tools." },
      { q: "Can you fix my site speed?", a: "Yes. Core Web Vitals optimization is included in every SEO engagement." },
    ],
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    eyebrow: "SERVICE",
    valueProp: "Your site, always running. Never your problem.",
    heroDescription:
      "Monthly retainer covering updates, monitoring, performance, and priority support. You ship product. We keep the lights on.",
    stats: [
      { value: "99.9%", label: "uptime guarantee" },
      { value: "<4hr", label: "response time" },
      { value: "0", label: "surprises on your bill" },
    ],
    deliverables: [
      "Monthly dependency updates",
      "Uptime + error monitoring (Sentry)",
      "Performance regressions caught before users see them",
      "Priority support on Slack or email",
      "Unlimited small content edits",
      "Monthly written report",
    ],
    process: [
      { step: 1, title: "Onboarding", body: "We audit your current setup, set up monitoring, document the codebase, get access to everything we need." },
      { step: 2, title: "Baseline", body: "Lighthouse score locked in. Alerts configured. Error tracking live. Dependency audit complete." },
      { step: 3, title: "Ongoing", body: "Monthly updates pushed to staging → reviewed → deployed. You approve, we ship." },
      { step: 4, title: "Reporting", body: "Every month: what we did, what we found, performance numbers, anything you should know." },
    ],
    objections: [
      { q: "Do I really need this?", a: "If your site makes you money, yes. Dependencies go stale, CVEs drop, traffic spikes happen. You want someone watching." },
      { q: "What's the minimum commitment?", a: "3 months. After that, month-to-month. Cancel any time with 30 days notice." },
      { q: "What if something breaks urgently?", a: "<4 hour response time on critical issues, guaranteed." },
    ],
    pricingFrom: "$500/mo",
    featuredTestimonialId: 1,
    faq: [
      { q: "Can you maintain a site you didn't build?", a: "Yes. We'll do an onboarding audit first (one-time fee) to understand the codebase." },
      { q: "What counts as a 'small content edit'?", a: "Text changes, image swaps, adding a team member. Anything under 30 minutes. New features are scoped separately." },
      { q: "Do you handle hosting?", a: "We manage Vercel deployments. If you're on a different host, we'll recommend migrating to Vercel for better performance and developer experience." },
      { q: "How do I request changes?", a: "Slack or email. We use a shared doc to track open items so nothing falls through the cracks." },
      { q: "What if I want to cancel?", a: "30 days notice. We hand over full documentation, access, and a written summary of everything we've done." },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}
