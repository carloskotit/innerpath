import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import rehypePrettyCode from "rehype-pretty-code"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { getAllPosts, getPostBySlug } from "@/lib/mdx"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const url = `https://innerpathagency.com/blog/${slug}`
  const ogImage = "/innerpath-og-v2.png"
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      siteName: "InnerPath",
      publishedTime: post.date,
      modifiedTime: post.dateModified ?? post.date,
      authors: [post.author],
      tags: post.tags,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
    alternates: { canonical: `/blog/${slug}` },
  }
}

const rehypePrettyCodeOptions = {
  theme: "one-dark-pro",
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const postUrl = `https://innerpathagency.com/blog/${slug}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: "https://innerpathagency.com/innerpath-og-v2.png",
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    author: { "@type": "Organization", name: "InnerPath" },
    publisher: { "@type": "Organization", name: "InnerPath", url: "https://innerpathagency.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://innerpathagency.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://innerpathagency.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://innerpathagency.com/blog/${slug}` },
    ],
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navigation />

      <article className="max-w-3xl mx-auto px-6 pt-40 pb-16">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-white/40 text-xs">{post.date}</span>
            {post.readingTime && (
              <>
                <span className="text-white/20">·</span>
                <span className="font-mono text-white/40 text-xs">{post.readingTime}</span>
              </>
            )}
          </div>
          <h1 className="text-[2rem] sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] text-white mb-4">
            {post.title}
          </h1>
          <p className="font-mono text-base text-white/50">{post.description}</p>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono text-white/40 border border-white/10 rounded-full px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white
          prose-h2:text-2xl prose-h3:text-xl
          prose-p:font-mono prose-p:text-white/80 prose-p:leading-relaxed
          prose-a:text-white prose-a:underline prose-a:underline-offset-4 prose-a:decoration-white/30 hover:prose-a:decoration-white
          prose-strong:text-white
          prose-code:font-mono prose-code:text-white/80 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
          prose-pre:bg-[#111111] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl
          prose-blockquote:border-l-white/20 prose-blockquote:text-white/50
          prose-hr:border-white/10
          prose-li:text-white/80 prose-li:font-mono
        ">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                rehypePlugins: [[rehypePrettyCode as never, rehypePrettyCodeOptions]],
              },
            }}
          />
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <NewsletterSignup />
        </div>
      </article>

      <Footer />
    </div>
  )
}
