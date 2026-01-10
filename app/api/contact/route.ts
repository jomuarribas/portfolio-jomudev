import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.securemail.pro",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `${subject}`,
      text: message,
      html: `<p><strong>Mensaje de:</strong> ${name}</p>
             <p>${message}</p>`,
    });

    return new Response(
      JSON.stringify({ message: "Correo enviado con éxito" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return new Response(
      JSON.stringify({ message: "Error al enviar el correo" }),
      {
        status: 500,
      }
    );
  }
};
