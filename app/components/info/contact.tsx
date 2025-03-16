import { useState } from "react";
import TypingText from "../TypingText";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setLoading(false);
        setStatus("¡Mensaje enviado con éxito!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setLoading(false);
        setStatus("Error al enviar el mensaje. Intenta nuevamente.");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      setStatus("Hubo un problema al enviar el mensaje.");
    }
  };

  return (
    <div className="flex flex-col w-full items-center gap-4 p-2 text-gray-700">
      <div className="flex justify-center items-center">
        <TypingText text="Contáctame" />
      </div>
      <div className="flex flex-col gap-3 mb-3">
        <p className="text-justify">
          ¿Tienes un proyecto emocionante en mente, una idea innovadora o
          simplemente quieres charlar sobre desarrollo web y creatividad? Estoy
          aquí para escucharte y ayudarte a convertir tus ideas en realidad. Mi
          pasión por resolver problemas y crear soluciones eficientes está al
          servicio de quienes buscan marcar la diferencia.
        </p>
        <p className="text-justify">
          No importa si tienes una duda puntual, necesitas colaboración para un
          proyecto o simplemente quieres conectar, estaré encantado de saber de
          ti. ¡Hagamos que suceda algo increíble juntos! 🚀
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-lg w-full"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 border-[0.6px] rounded outline-none bg-white"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 border-[0.6px] rounded outline-none bg-white"
          />
        </div>
        {/* Nuevo campo para el asunto */}
        <div className="flex flex-col">
          <label htmlFor="subject" className="font-semibold">
            Asunto:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="p-2 border-[0.6px] rounded outline-none bg-white"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="font-semibold">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="p-2 border-[0.6px] rounded outline-none bg-white"
          ></textarea>
        </div>
        {status && <p className="text-center">{status}</p>}
        <button
          type="submit"
          className={`p-2 mb-6 bg-[var(--primary-color)] text-white rounded hover:scale-98 transition cursor-pointer ${
            loading ? "opacity-60 pointer-events-none" : ""
          }`}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}
