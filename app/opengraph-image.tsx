import { ImageResponse } from "next/og"

export const runtime = "nodejs"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
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
          WEB DEVELOPMENT AGENCY
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.0,
            marginBottom: 20,
          }}
        >
          InnerPath
        </div>
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
            fontFamily: "monospace",
            maxWidth: 700,
          }}
        >
          High-performance websites for ambitious brands.
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
