import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { feature, description } = await req.json();

  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: `New Feature Request: ${feature}`,
      text: `
Feature: ${feature}

Description:
${description}
      `,
    });

    return NextResponse.json(
      { message: "Feature request sent." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Email failed:", err);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}
