import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  interest?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  website?: string; // honeypot
}

interface ContactEnv {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  // ---------------------------------------------------------------
  // 1. Parse body
  // ---------------------------------------------------------------
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, phone, interest, budget, timeline, message, website } = body;

  // Honeypot — pretend success so bots don't learn to avoid it.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid name and email address." },
      { status: 400 }
    );
  }

  // ---------------------------------------------------------------
  // 2. Read Worker secrets/bindings (NOT process.env — this is a
  //    Cloudflare Worker, so secrets set via `wrangler secret put`
  //    or the dashboard show up on context.env, not process.env).
  // ---------------------------------------------------------------
  let env: ContactEnv;
  try {
    const context = await getCloudflareContext({ async: true });
    env = context.env as ContactEnv;
  } catch (err) {
    console.error("Contact form: failed to read Cloudflare context.", err);
    return NextResponse.json({ error: "Email service configuration error." }, { status: 500 });
  }

  const RESEND_API_KEY = env.RESEND_API_KEY?.trim();
  const CONTACT_TO_EMAIL = env.CONTACT_TO_EMAIL?.trim() || "info@odestasoft.com";
  const CONTACT_FROM_EMAIL = env.CONTACT_FROM_EMAIL?.trim() || "OdestaSoft <onboarding@resend.dev>";

  if (!RESEND_API_KEY) {
    console.error("Contact form: RESEND_API_KEY secret is missing or empty.");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  // Sanity-check the key shape without ever logging the key itself.
  console.log("Contact form: RESEND_API_KEY present, length:", RESEND_API_KEY.length);
  console.log("Contact form: sending from", CONTACT_FROM_EMAIL, "to", CONTACT_TO_EMAIL);

  // ---------------------------------------------------------------
  // 3. Build the email
  // ---------------------------------------------------------------
  const subject = `New project inquiry from ${name}${company ? ` (${company})` : ""}`;

  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    phone ? `Phone: ${phone}` : null,
    interest ? `Interested in: ${interest}` : null,
    budget ? `Budget: ${budget}` : null,
    timeline ? `Timeline: ${timeline}` : null,
    "",
    "Project details:",
    message || "(none provided)",
  ]
    .filter(Boolean)
    .join("\n");

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; font-size: 14px; color: #0F172A; line-height: 1.6;">
      <h2 style="color:#10B981;">New project inquiry</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        ${company ? `<tr><td><strong>Company</strong></td><td>${escapeHtml(company)}</td></tr>` : ""}
        ${phone ? `<tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>` : ""}
        ${interest ? `<tr><td><strong>Interested in</strong></td><td>${escapeHtml(interest)}</td></tr>` : ""}
        ${budget ? `<tr><td><strong>Budget</strong></td><td>${escapeHtml(budget)}</td></tr>` : ""}
        ${timeline ? `<tr><td><strong>Timeline</strong></td><td>${escapeHtml(timeline)}</td></tr>` : ""}
      </table>
      <p><strong>Project details:</strong></p>
      <div style="white-space: pre-wrap; padding: 12px; background: #f8fafc; border-radius: 6px;">${escapeHtml(
        message || "(none provided)"
      )}</div>
    </div>
  `;

  // ---------------------------------------------------------------
  // 4. Call Resend's HTTP API directly with plain fetch — no SDK.
  //    Read the response body exactly ONCE, as text, then try to
  //    parse it as JSON. This avoids the classic "body already
  //    consumed" bug that was hiding Resend's real error message.
  // ---------------------------------------------------------------
  let resendRes: Response;
  try {
    resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject,
        text: textBody,
        html: htmlBody,
      }),
    });
  } catch (err) {
    console.error("Contact form: network error calling Resend.", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again or email us directly." },
      { status: 502 }
    );
  }

  // Read the body ONCE, as text, regardless of success or failure.
  const rawBody = await resendRes.text();

  if (!resendRes.ok) {
    console.error("Contact form: Resend rejected the request.", {
      status: resendRes.status,
      statusText: resendRes.statusText,
      body: rawBody, // <-- this is the actual reason, now visible in your logs
    });
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again or email us directly." },
      { status: 502 }
    );
  }

  let parsed: { id?: string } = {};
  try {
    parsed = rawBody ? JSON.parse(rawBody) : {};
  } catch {
    // Non-JSON success body is unexpected but not fatal — email likely sent.
    console.warn("Contact form: Resend returned a non-JSON success body:", rawBody);
  }

  console.log("Contact form: email sent successfully.", parsed.id);
  return NextResponse.json({ ok: true });
}
