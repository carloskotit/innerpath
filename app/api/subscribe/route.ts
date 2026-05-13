import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()
  const email = body?.email?.trim()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 })
  }

  const apiKey = process.env.BEEHIIV_API_KEY
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID

  if (!apiKey || !publicationId) {
    console.error("[subscribe] Missing Beehiiv env vars")
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 })
  }

  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
      }),
    }
  )

  if (!res.ok) {
    const err = await res.text()
    console.error("[subscribe] Beehiiv error:", err)
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
