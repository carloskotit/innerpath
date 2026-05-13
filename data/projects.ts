export interface Project {
  slug: string
  name: string
  oneLiner: string
  tags: string[]
  category: "Web Design" | "Development" | "SEO"
  gradientFrom: string
  gradientTo: string
  monogram: string
}

export const projects: Project[] = [
  {
    slug: "lumen",
    name: "Lumen",
    oneLiner: "DTC skincare brand — Shopify rebuild drove +42% conversion lift.",
    tags: ["Shopify", "E-commerce", "Performance"],
    category: "Development",
    gradientFrom: "#7c3aed",
    gradientTo: "#2563eb",
    monogram: "L",
  },
  {
    slug: "northbound-labs",
    name: "Northbound Labs",
    oneLiner: "B2B SaaS landing page with sub-1s LCP on mobile and desktop.",
    tags: ["Next.js", "Framer Motion", "Vercel"],
    category: "Web Design",
    gradientFrom: "#0f172a",
    gradientTo: "#1e3a5f",
    monogram: "N",
  },
  {
    slug: "atlas-studio",
    name: "Atlas Studio",
    oneLiner: "Photography portfolio with custom CMS — zero-dependency admin panel.",
    tags: ["Next.js", "CMS", "Portfolio"],
    category: "Web Design",
    gradientFrom: "#1c1917",
    gradientTo: "#44403c",
    monogram: "A",
  },
  {
    slug: "groundwork",
    name: "Groundwork",
    oneLiner: "Local landscaping company — SEO overhaul, 3× organic traffic in 90 days.",
    tags: ["SEO", "Local", "Content"],
    category: "SEO",
    gradientFrom: "#14532d",
    gradientTo: "#166534",
    monogram: "G",
  },
  {
    slug: "vestry",
    name: "Vestry",
    oneLiner: "Men's fashion brand — headless Shopify storefront, 98 Lighthouse score.",
    tags: ["Shopify", "Headless", "E-commerce"],
    category: "Development",
    gradientFrom: "#1e1b4b",
    gradientTo: "#312e81",
    monogram: "V",
  },
  {
    slug: "forma-clinic",
    name: "Forma Clinic",
    oneLiner: "Med-spa booking site — full redesign and Google Ads landing page.",
    tags: ["Web Design", "Booking", "Conversion"],
    category: "Web Design",
    gradientFrom: "#1f2937",
    gradientTo: "#374151",
    monogram: "F",
  },
]
