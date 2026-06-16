import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

function validateForm(data: Partial<ContactFormData>): string | null {
  if (!data.name?.trim())  return "Вкажіть ваше ім'я";
  if (!data.phone?.trim()) return "Вкажіть номер телефону";
  if (!data.email?.trim()) return "Вкажіть email";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Некоректний email";
  return null;
}

export async function POST(req: NextRequest) {
  let body: Partial<ContactFormData>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Некоректний запит" }, { status: 400 });
  }

  const validationError = validateForm(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 422 });
  }

  const { name, phone, email, service, message } = body as ContactFormData;

  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px;">
      <h2 style="color: #005BBB; border-bottom: 2px solid #005BBB; padding-bottom: 8px;">
        Нова заявка з сайту — Служба Безпеки
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 8px 0; color: #6b7280; width: 140px; vertical-align: top;">Ім'я:</td>
          <td style="padding: 8px 0; font-weight: 600;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Телефон:</td>
          <td style="padding: 8px 0; font-weight: 600;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Email:</td>
          <td style="padding: 8px 0; font-weight: 600;">${email}</td>
        </tr>
        ${service ? `
        <tr>
          <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Послуга:</td>
          <td style="padding: 8px 0; font-weight: 600;">${service}</td>
        </tr>` : ""}
        ${message ? `
        <tr>
          <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Повідомлення:</td>
          <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
        </tr>` : ""}
      </table>
    </div>
  `;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from:    `"Служба Безпеки — Сайт" <${process.env.SMTP_USER}>`,
      to:      process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Служба Безпеки] Заявка від ${name}${service ? ` — ${service}` : ""}`,
      html:    htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail send error:", err);
    return NextResponse.json(
      { error: "Не вдалося надіслати заявку. Спробуйте зателефонувати нам напряму." },
      { status: 500 }
    );
  }
}
