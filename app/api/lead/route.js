import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const form = await req.formData();
  // Basic server-side validation
  const name = String(form.get('name') || '');
  const phone = String(form.get('phone') || '');
  const email = String(form.get('email') || '');
  const plate = String(form.get('plate') || '');
  const makeModel = String(form.get('makeModel') || '');
  const concern = String(form.get('concern') || '');

  const text = [
    `New service lead from website:`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Plate: ${plate}`,
    `Make & Model: ${makeModel}`,
    `Concern: ${concern}`
  ].join('\n');

  try {
    if (process.env.SMTP_HOST && process.env.LEAD_TO) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth,
      });
      await transporter.sendMail({
        from: process.env.LEAD_FROM || process.env.SMTP_USER,
        to: process.env.LEAD_TO,
        subject: 'New service lead — Christine’s Automotive',
        text,
      });
    } else {
      console.log('[lead:dev]', text);
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
