import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { BlogCard } from "@/components/blog-card"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { getAllPosts } from "@/lib/mdx"

export const metadata: Metadata = {
  title: "Blog",
  description: "Performance, SEO, and web development insights from the InnerPath team.",
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navigation />
      <PageHero
        eyebrow="BLOG"
        heading="No-BS insights."
        subheading="Performance, SEO, and engineering — written by the people who build the sites."
      />

      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.length === 0 ? (
            <p className="font-mono text-white/40 text-sm col-span-3">Posts coming soon.</p>
          ) : (
            posts.map((post, i) => <BlogCard key={post.slug} post={post} index={i} />)
          )}
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-md mx-auto">
          <NewsletterSignup />
        </div>
      </section>

      <Footer />
    </div>
  )
}
