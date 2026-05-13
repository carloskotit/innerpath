import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const CONTENT_DIR = path.join(process.cwd(), "content/blog")

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  cover?: string
  readingTime?: string
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"))

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8")
      const { data, content } = matter(raw)
      const stats = readingTime(content)

      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title ?? "",
        description: data.description ?? "",
        date: data.date ?? "",
        author: data.author ?? "InnerPath",
        tags: data.tags ?? [],
        cover: data.cover,
        readingTime: stats.text,
      } satisfies PostMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    author: data.author ?? "InnerPath",
    tags: data.tags ?? [],
    cover: data.cover,
    readingTime: stats.text,
    content,
  }
}
