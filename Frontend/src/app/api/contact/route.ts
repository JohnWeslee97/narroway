import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/content/site";
import { ContactValues, validateContact } from "@/lib/contact-validation";

type ContactPayload = ContactValues & {
  service?: string;
  hasService?: boolean;
  botcheck?: boolean;
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  if (body.botcheck) {
    return NextResponse.json({ ok: true });
  }

  const values: ContactValues = {
    name: String(body.name ?? ""),
    company: String(body.company ?? ""),
    email: String(body.email ?? ""),
    phone: String(body.phone ?? ""),
    description: String(body.description ?? ""),
  };

  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();
  if (!smtpUser || !smtpPass) {
    return NextResponse.json({ ok: false, configured: false });
  }

  const name = values.name.trim();
  const company = values.company.trim() || "—";
  const email = values.email.trim();
  const phone = values.phone.trim();
  const description = values.description.trim();
  const serviceLabel = body.hasService ? String(body.service ?? "").trim() || "Not sure yet" : "";

  const subject = serviceLabel
    ? `Free Consultation (${serviceLabel}) — ${name}`
    : `New Enquiry — ${name}`;

  const textLines = [
    ...(serviceLabel ? [`Service: ${serviceLabel}`] : []),
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    "",
    "Message:",
    description,
  ];

  const html = `
    <div style="font-family: Arial, sans-serif; color: #101010; line-height: 1.5; max-width: 600px;">
      <h2 style="margin: 0 0 16px; color: #2a7bb8;">${escapeHtml(subject)}</h2>
      <table style="border-collapse: collapse; width: 100%; margin-bottom: 16px;">
        ${serviceLabel ? `<tr><td style="padding: 6px 0; font-weight: bold; width: 120px;">Service</td><td style="padding: 6px 0;">${escapeHtml(serviceLabel)}</td></tr>` : ""}
        <tr><td style="padding: 6px 0; font-weight: bold; width: 120px;">Name</td><td style="padding: 6px 0;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold;">Company</td><td style="padding: 6px 0;">${escapeHtml(company)}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold;">Email</td><td style="padding: 6px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold;">Phone</td><td style="padding: 6px 0;">${escapeHtml(phone)}</td></tr>
      </table>
      <p style="margin: 0 0 6px; font-weight: bold;">Message</p>
      <p style="margin: 0; white-space: pre-wrap; background: #f5f5f3; padding: 12px; border-radius: 6px;">${escapeHtml(description)}</p>
    </div>
  `.trim();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"Narroway Website" <${smtpUser}>`,
      to: process.env.CONTACT_TO_EMAIL?.trim() || site.email,
      replyTo: email,
      subject,
      text: textLines.join("\n"),
      html,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 502 });
  }
}
