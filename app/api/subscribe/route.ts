import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()
  const email = body?.email?.trim()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 })
  }

  // TODO: integrate with ConvertKit / Resend / Beehiiv
  console.log("[subscribe]", email)

  return NextResponse.json({ ok: true })
}
