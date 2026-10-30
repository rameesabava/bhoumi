// Save as: app/api/contact/route.ts
//
// Setup:
//   npm i nodemailer
//   npm i -D @types/nodemailer
//
// Environment variables (.env.local, and in Vercel → Settings → Environment Variables):
//   SMTP_USER=bhoumiconsultancy@gmail.com
//   SMTP_PASS=<Gmail App Password, 16 characters>
//   CONTACT_TO=bhoumiconsultancy@gmail.com        (optional, defaults to SMTP_USER)
//
// To create a Gmail App Password: Google Account → Security → turn on
// 2-Step Verification → App passwords → create one for "Mail".

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill this hidden field. Pretend success and drop it.
  if (clean(body.company_website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const fullName = clean(body.fullName, 100);
  const phone = clean(body.phone, 30);
  const email = clean(body.email, 120);
  const insuranceOption = clean(body.insuranceOption, 200);
  const contactMethod = clean(body.contactMethod, 30);
  const message = clean(body.message, 2000);
  const consent = body.consent === "on" || body.consent === true;

  if (!fullName) {
    return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
  }
  if (phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ error: "Please tick the acknowledgement box." }, { status: 400 });
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO || user;

  if (!user || !pass || !to) {
    console.error("Contact form: SMTP_USER / SMTP_PASS are not set.");
    return NextResponse.json(
      { error: "Email service is not configured. Please call or WhatsApp us instead." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const rows: [string, string][] = [
    ["Full name", fullName],
    ["Phone", phone],
    ["Email", email || "Not provided"],
    ["Health insurance option", insuranceOption || "Not selected"],
    ["Preferred contact method", contactMethod || "Not selected"],
    ["Message", message || "No message"],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#0f1f45;max-width:600px">
      <h2 style="margin:0 0 16px;color:#1456c1">New Health Insurance Enquiry</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) => `
          <tr>
            <td style="padding:8px 12px;border:1px solid #e2e8f0;background:#f7f8fa;font-weight:bold;width:210px;vertical-align:top">${escapeHtml(k)}</td>
            <td style="padding:8px 12px;border:1px solid #e2e8f0;white-space:pre-wrap">${escapeHtml(v)}</td>
          </tr>`
          )
          .join("")}
      </table>
      <p style="margin-top:16px;color:#64748b;font-size:13px">Customer acknowledged that their information will be used to respond to this enquiry.</p>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"Bhoumi Website" <${user}>`,
      to,
      replyTo: email || undefined,
      subject: `New health insurance enquiry from ${fullName}`,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: sendMail failed", err);
    return NextResponse.json(
      { error: "We couldn't send your enquiry. Please call or WhatsApp us instead." },
      { status: 500 }
    );
  }
}
