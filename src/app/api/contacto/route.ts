import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(text: string): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function cleanPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  // Si tiene 10 dígitos (formato celular México), añadir prefijo país 52
  if (digits.length === 10) {
    return `52${digits}`;
  }
  return digits;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, servicio, mensaje } = body;

    // Validación básica
    if (!nombre || !email || !telefono) {
      return NextResponse.json(
        { error: "Por favor completa todos los campos requeridos (Nombre, Correo, Teléfono)." },
        { status: 400 }
      );
    }

    const safeNombre = escapeHtml(String(nombre).trim());
    const safeEmail = escapeHtml(String(email).trim());
    const safeTelefono = escapeHtml(String(telefono).trim());
    const safeServicio = escapeHtml(String(servicio || "Contacto General").trim());
    const safeMensaje = escapeHtml(String(mensaje || "Sin mensaje adicional").trim()).replace(/\n/g, "<br/>");

    const waPhone = cleanPhoneNumber(String(telefono).trim());
    const waText = encodeURIComponent(
      `Hola ${safeNombre}, gracias por contactar a Centro Cultural Quinta Soledad respecto a: ${safeServicio}. Con gusto te atendemos.`
    );
    const waUrl = waPhone ? `https://wa.me/${waPhone}?text=${waText}` : null;

    const replySubject = encodeURIComponent(`Re: Solicitud en Quinta Soledad - ${safeServicio}`);
    const mailtoReplyUrl = `mailto:${encodeURIComponent(String(email).trim())}?subject=${replySubject}`;

    // Credenciales SMTP
    const smtpUser = process.env.SMTP_USER || "artes.grupoorganico@gmail.com";
    const rawPass = process.env.SMTP_PASS || "aifq xmkb kmas qtjn";
    // Gmail App Password sin espacios
    const smtpPass = rawPass.replace(/\s+/g, "");
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "artes.grupoorganico@gmail.com";

    // Configuración Nodemailer con Gmail SMTP (Puerto 465, SSL)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const fechaEnvio = new Intl.DateTimeFormat("es-MX", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "America/Mexico_City",
    }).format(new Date());

    // Plantilla HTML de Alta Gama (Dorado, Cantera y Carbón)
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva Solicitud Quinta Soledad</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0D0C0B; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #FDFBF7;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0D0C0B; padding: 30px 10px;">
    <tr>
      <td align="center">
        <!-- Contenedor Principal -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #141312; border: 1px solid #A9895B; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
          
          <!-- Encabezado Editorial -->
          <tr>
            <td style="background: linear-gradient(180deg, #1A1918 0%, #141312 100%); padding: 36px 30px 24px 30px; text-align: center; border-bottom: 1px solid #34312D;">
              <p style="margin: 0 0 8px 0; font-size: 11px; letter-spacing: 0.25em; color: #C5A880; text-transform: uppercase; font-weight: 600;">
                Grupo Orgánico · Hoteles Boutique & Espacios Históricos
              </p>
              <h1 style="margin: 0; font-size: 24px; letter-spacing: 0.08em; color: #FDFBF7; font-family: 'Georgia', 'Playfair Display', serif; font-weight: normal; text-transform: uppercase;">
                Centro Cultural Quinta Soledad
              </h1>
              <div style="height: 1px; width: 60px; background-color: #C5A880; margin: 16px auto 0 auto;"></div>
            </td>
          </tr>

          <!-- Badge de Notificación -->
          <tr>
            <td style="padding: 24px 30px 10px 30px; text-align: center;">
              <span style="display: inline-block; background-color: #242220; border: 1px solid #896D44; border-radius: 999px; padding: 6px 18px; font-size: 11px; letter-spacing: 0.15em; color: #D8BF96; text-transform: uppercase; font-weight: 600;">
                ★ Nueva Solicitud de Información & Concierge
              </span>
            </td>
          </tr>

          <!-- Contenido: Tarjeta de Datos del Prospecto -->
          <tr>
            <td style="padding: 16px 30px 24px 30px;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #1A1918; border: 1px solid #242220; border-radius: 12px; overflow: hidden;">
                
                <!-- Servicio de Interés Destacado -->
                <tr>
                  <td style="padding: 16px 20px; background-color: #242220; border-bottom: 1px solid #34312D;">
                    <p style="margin: 0; font-size: 11px; letter-spacing: 0.15em; color: #C5A880; text-transform: uppercase; font-weight: 600;">
                      Servicio Seleccionado
                    </p>
                    <p style="margin: 4px 0 0 0; font-size: 18px; color: #FDFBF7; font-family: 'Georgia', serif; font-weight: bold;">
                      ${safeServicio}
                    </p>
                  </td>
                </tr>

                <!-- Nombre -->
                <tr>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #242220;">
                    <p style="margin: 0; font-size: 10px; letter-spacing: 0.15em; color: #BEA781; text-transform: uppercase; font-weight: 600;">
                      Nombre del Visitante
                    </p>
                    <p style="margin: 4px 0 0 0; font-size: 15px; color: #FDFBF7; font-weight: 500;">
                      ${safeNombre}
                    </p>
                  </td>
                </tr>

                <!-- Correo -->
                <tr>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #242220;">
                    <p style="margin: 0; font-size: 10px; letter-spacing: 0.15em; color: #BEA781; text-transform: uppercase; font-weight: 600;">
                      Correo Electrónico
                    </p>
                    <p style="margin: 4px 0 0 0; font-size: 15px; color: #FDFBF7;">
                      <a href="mailto:${safeEmail}" style="color: #D8BF96; text-decoration: none; font-weight: 500;">
                        ${safeEmail}
                      </a>
                    </p>
                  </td>
                </tr>

                <!-- Teléfono Celular -->
                <tr>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #242220;">
                    <p style="margin: 0; font-size: 10px; letter-spacing: 0.15em; color: #BEA781; text-transform: uppercase; font-weight: 600;">
                      Teléfono Celular
                    </p>
                    <p style="margin: 4px 0 0 0; font-size: 15px; color: #FDFBF7;">
                      <a href="tel:${safeTelefono}" style="color: #FDFBF7; text-decoration: none; font-weight: 500;">
                        ${safeTelefono}
                      </a>
                      ${
                        waUrl
                          ? `<span style="margin-left: 10px; font-size: 12px; color: #25D366;">(Disponible para WhatsApp)</span>`
                          : ""
                      }
                    </p>
                  </td>
                </tr>

                <!-- Mensaje o Detalles -->
                <tr>
                  <td style="padding: 18px 20px; background-color: #141312;">
                    <p style="margin: 0; font-size: 10px; letter-spacing: 0.15em; color: #BEA781; text-transform: uppercase; font-weight: 600;">
                      Mensaje / Requerimiento Específico
                    </p>
                    <div style="margin: 8px 0 0 0; padding: 14px 16px; background-color: #1A1918; border-left: 3px solid #C5A880; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #E6DBC8; font-style: italic;">
                      ${safeMensaje}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Botones de Acción Inmediata (Reply-To y WhatsApp) -->
          <tr>
            <td style="padding: 8px 30px 28px 30px; text-align: center;">
              <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto; width: 100%;">
                <tr>
                  <td align="center" style="padding-bottom: 12px;">
                    <!-- Botón Principal: Responder por Correo Directo -->
                    <a href="${mailtoReplyUrl}" target="_blank" style="display: block; width: 100%; box-sizing: border-box; background-color: #C5A880; color: #0D0C0B; text-decoration: none; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; padding: 14px 24px; border-radius: 8px; text-align: center; border: 1px solid #D8BF96;">
                      ✉ Responder Directo a ${safeNombre}
                    </a>
                  </td>
                </tr>
                ${
                  waUrl
                    ? `
                <tr>
                  <td align="center">
                    <!-- Botón Secundario: Abrir WhatsApp con el Cliente -->
                    <a href="${waUrl}" target="_blank" style="display: block; width: 100%; box-sizing: border-box; background-color: #1A1918; color: #25D366; text-decoration: none; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 600; padding: 12px 24px; border-radius: 8px; text-align: center; border: 1px solid #25D366;">
                      💬 Escribir al Cliente por WhatsApp
                    </a>
                  </td>
                </tr>
                `
                    : ""
                }
              </table>
              <p style="margin: 14px 0 0 0; font-size: 11px; color: #6B6660;">
                Nota: Al hacer clic en <em>Responder</em> desde tu gestor de correo (Gmail, Outlook, Apple Mail), el destinatario ya está configurado automáticamente como <strong>${safeEmail}</strong> gracias a la cabecera Reply-To.
              </p>
            </td>
          </tr>

          <!-- Pie de Página Institucional -->
          <tr>
            <td style="background-color: #0D0C0B; border-top: 1px solid #242220; padding: 24px 30px; text-align: center;">
              <p style="margin: 0; font-size: 11px; letter-spacing: 0.1em; color: #BEA781; text-transform: uppercase;">
                Centro Cultural Quinta Soledad
              </p>
              <p style="margin: 4px 0; font-size: 10px; color: #6B6660; line-height: 1.5;">
                Calle Moneda 15, Tlalpan Centro I, Alcaldía Tlalpan, 14000 Ciudad de México, CDMX<br/>
                Teléfonos: (55) 9691-0966 · (55) 9696-9073 · (55) 5645-5347
              </p>
              <p style="margin: 10px 0 0 0; font-size: 10px; color: #4D4944;">
                Fecha de recepción: ${fechaEnvio}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Versión en texto plano para clientes antiguos
    const textTemplate = `
==============================================
NUEVA SOLICITUD - CENTRO CULTURAL QUINTA SOLEDAD
==============================================

Servicio de Interés: ${String(servicio || "General")}
Nombre: ${String(nombre)}
Correo: ${String(email)}
Teléfono: ${String(telefono)}
Fecha: ${fechaEnvio}

Mensaje / Requerimiento:
${String(mensaje || "Sin mensaje")}

----------------------------------------------
Responder directamente al cliente: ${String(email)}
==============================================
    `.trim();

    // Enviar el correo mediante Nodemailer
    await transporter.sendMail({
      from: `"Centro Cultural Quinta Soledad" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: String(email).trim(),
      subject: `Nueva Solicitud Quinta Soledad: ${String(servicio || "Contacto")} - ${String(nombre)}`,
      text: textTemplate,
      html: htmlTemplate,
    });

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado exitosamente a Centro Cultural Quinta Soledad.",
    });
  } catch (error: any) {
    console.error("Error al enviar correo con Nodemailer:", error);
    return NextResponse.json(
      {
        error: "Ocurrió un error al enviar el correo.",
        details: error?.message || "Error desconocido",
      },
      { status: 500 }
    );
  }
}
