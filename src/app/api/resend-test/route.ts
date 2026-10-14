import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        success: false,
        error: "RESEND_API_KEY is missing",
      },
      { status: 500 }
    );
  }

  try {
    const payload = {
      from: "OdestaSoft <info@odestasoft.com>",
      to: ["imtiazbaloch3322@gmail.com"],
      subject: "OdestaSoft Cloudflare Worker Test",
      html: "<p>Cloudflare Worker → Resend test successful.</p>",
    };

    console.log("Resend diagnostic: sending request.");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const body = await response.text();

    console.log("Resend diagnostic response:", {
      status: response.status,
      statusText: response.statusText,
      body,
      contentType: response.headers.get("content-type"),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      statusText: response.statusText,
      body,
      contentType: response.headers.get("content-type"),
    });
  } catch (error) {
    console.error("Resend diagnostic exception:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 }
    );
  }
}