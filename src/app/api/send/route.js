import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL; // Ваш Gmail
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    
    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail, 
      replyTo: email, 
      subject: `Новое сообщение от ${email}: ${subject}`,
      html: `
        <h2>Новое сообщение с портфолио</h2>
        <p><strong>От:</strong> ${email}</p>
        <p><strong>Тема:</strong> ${subject}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Ошибка отправки:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}