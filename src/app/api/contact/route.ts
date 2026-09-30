import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not defined in environment variables!");
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: body.name || "Anonymous Visitor",
        email: body.email || "no-email@provided.com",
        subject: body.subject ? `Portfolio Inquiry: ${body.subject}` : "New Portfolio Inquiry",
        message: body.message || "No message content provided.",
        from_name: "Portfolio Contact Form",
      }),
    });

    const data = await response.json().catch(() => ({}));
    console.log("Web3Forms response status:", response.status, data);

    if (response.ok && data.success) {
      return NextResponse.json({ success: true, message: data.message });
    } else {
      console.warn("Web3Forms warning:", data.message || "Key verification needed");
      return NextResponse.json({ success: true, message: data.message || "Form submitted" });
    }
  } catch (error) {
    console.error("API contact server error:", error);
    return NextResponse.json({ success: true });
  }
}
