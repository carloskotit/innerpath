import { ImageResponse } from "next/og"
import { readFileSync } from "fs"
import { join } from "path"

export const runtime = "nodejs"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  const logoData = readFileSync(join(process.cwd(), "public/logo-og.png"))
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "60px",
          padding: "60px",
          fontFamily: "monospace",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={260} height={260} alt="InnerPath logo" style={{ objectFit: "contain" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: 16,
            }}
          >
            WEB DEVELOPMENT AGENCY
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.0,
              marginBottom: 16,
            }}
          >
            InnerPath
          </div>
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.5)",
              maxWidth: 520,
            }}
          >
            High-performance websites for ambitious brands.
          </div>
          <div
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.15em",
              marginTop: 32,
            }}
          >
            innerpathagency.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
