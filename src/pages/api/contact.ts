import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Todos los campos son requeridos.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { error } = await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to: 'agustintarico9@gmail.com',
    replyTo: email,
    subject: `Nuevo mensaje de ${name}`,
    html: `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong><br>${message}</p>
    `,
  });

  if (error) {
    return new Response(JSON.stringify({ error: 'Error al enviar el mensaje.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
