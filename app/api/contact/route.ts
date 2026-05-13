import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const MAX_BODY_BYTES = 16 * 1024
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Bucket = { count: number; reset: number }
const buckets = new Map<string, Bucket>()

function rateLimit(ip: string) {
  const now = Date.now()
  const b = buckets.get(ip)
  if (!b || now > b.reset) {
    buckets.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW_MS })
    return true
  }
  if (b.count >= RATE_LIMIT_MAX) return false
  b.count++
  return true
}

function getIp(req: Request) {
  const fwd = req.headers.get("x-forwarded-for")
  if (fwd) return fwd.split(",")[0].trim()
  return req.headers.get("x-real-ip") ?? "unknown"
}

function getAllowedOrigins() {
  const list = process.env.ALLOWED_ORIGINS
  if (list) return list.split(",").map((s) => s.trim()).filter(Boolean)
  const site = process.env.NEXT_PUBLIC_SITE_URL
  return site ? [site] : []
}

function originAllowed(req: Request) {
  if (process.env.NODE_ENV !== "production") return true
  const allowed = getAllowedOrigins()
  if (allowed.length === 0) return false
  const origin = req.headers.get("origin")
  if (!origin) return false
  return allowed.includes(origin)
}

export async function POST(req: Request) {
  if (!originAllowed(req)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const ip = getIp(req)
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 })
  }

  const raw = await req.text()
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 })
  }

  let data: Record<string, unknown>
  try {
    data = JSON.parse(raw)
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const honeypot = typeof data.hp_field === "string" ? data.hp_field.trim() : ""
  if (honeypot) {
    return NextResponse.json({ ok: true })
  }

  const name = typeof data.name === "string" ? data.name.trim() : ""
  const email = typeof data.email === "string" ? data.email.trim() : ""
  const website = typeof data.website === "string" ? data.website.trim() : ""
  const message = typeof data.message === "string" ? data.message.trim() : ""

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }
  if (name.length > 100 || email.length > 254 || message.length > 2000 || website.length > 254) {
    return NextResponse.json({ error: "Field too long" }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 })
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO } = process.env
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !CONTACT_TO) {
    return NextResponse.json({ error: "Email not configured" }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  })

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Website: ${website || "(not provided)"}`,
    `IP: ${ip}`,
    "",
    "Message:",
    message,
  ].join("\n")

  try {
    await transporter.sendMail({
      from: `"InnerPath Contact" <${GMAIL_USER}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text,
    })
  } catch (err) {
    console.error("[contact] send failed", err)
    return NextResponse.json({ error: "Send failed" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
