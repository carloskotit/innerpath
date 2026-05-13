import { ImageResponse } from "next/og"
import { getPostBySlug } from "@/lib/mdx"

export const runtime = "nodejs"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function BlogOGImage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const title = post?.title ?? "InnerPath Blog"
  const description = post?.description ?? "High-performance web development insights."

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            fontSize: 12,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            marginBottom: 20,
          }}
        >
          INNERPATH BLOG
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.05,
            marginBottom: 20,
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.5)",
            fontFamily: "monospace",
            maxWidth: 800,
          }}
        >
          {description}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 60,
            fontSize: 14,
            color: "rgba(255,255,255,0.3)",
            fontFamily: "monospace",
            letterSpacing: "0.15em",
          }}
        >
          innerpathagency.com
        </div>
      </div>
    ),
    { ...size }
  )
}
