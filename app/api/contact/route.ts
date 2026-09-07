import { NextResponse } from "next/server";

// Placeholder handler. Wire this up to an email service (e.g. Resend,
// SendGrid) or a CRM webhook before going live.
export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: send email / forward to CRM here.
    console.log("New contact inquiry:", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
