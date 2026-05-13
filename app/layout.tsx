import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import ClickSpark from "@/components/click-spark"
import { FloatingCta } from "@/components/floating-cta"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://innerpathagency.com"),
  title: {
    default: "InnerPath | High-Performance Web Development",
    template: "%s | InnerPath",
  },
  description: "We design and build high-performance websites for ambitious brands, from landing pages to full-scale web apps.",
  keywords: ["web development", "web design", "SEO", "Next.js", "React", "high-performance websites"],
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
    shortcut: "/icon-dark-32x32.png",
  },
  openGraph: {
    siteName: "InnerPath",
    locale: "en_US",
    type: "website",
    url: "https://innerpathagency.com",
    title: "InnerPath | High-Performance Web Development",
    description: "We design and build high-performance websites for ambitious brands, from landing pages to full-scale web apps.",
  },
  twitter: {
    card: "summary_large_image",
    title: "InnerPath | High-Performance Web Development",
    description: "We design and build high-performance websites for ambitious brands, from landing pages to full-scale web apps.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-image-preview": "large", "max-snippet": -1 },
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${_inter.variable} ${_jetbrainsMono.variable} font-sans antialiased`}>
        <ClickSpark
          sparkColor="#ffffff"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={400}
          easing="ease-out"
        >
          <LenisProvider>
            {children}
            <FloatingCta />
          </LenisProvider>
        </ClickSpark>
        <Analytics />
      </body>
    </html>
  )
}
