import { NextResponse } from "next/server";

// Sends contact-form submissions to CONTACT_TO_EMAIL (defaults to
// ticket@marutour.com) via Resend. Requires RESEND_API_KEY to be set in
// Vercel → Project → Settings → Environment Variables. Without it, the
// submission is validated and logged but not emailed — see README.md.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, country, inquiryType, message } =
      body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "ticket@marutour.com";
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Not configured yet — log so the submission isn't silently lost,
      // but don't fail the request for the person filling out the form.
      console.warn(
        "RESEND_API_KEY is not set — contact form submission was not emailed.",
        body
      );
      return NextResponse.json({ ok: true });
    }

    const emailBody = [
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      country ? `Country: ${country}` : null,
      inquiryType ? `Inquiry Type: ${inquiryType}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "MARU Tour Website <noreply@marutour.com>",
        to: [toEmail],
        reply_to: email,
        subject: `New inquiry (${inquiryType || "General"}) — ${name}`,
        text: emailBody,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend API error:", res.status, errText);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
