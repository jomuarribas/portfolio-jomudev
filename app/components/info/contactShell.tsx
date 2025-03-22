"use client";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useEffect, useState } from "react";

const steps = ["name", "email", "subject", "message"] as const;
const stepTitles: Record<(typeof steps)[number], string> = {
  name: "Nombre",
  email: "Email",
  subject: "Asunto",
  message: "Mensaje",
};

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<
    Record<(typeof steps)[number], string>
  >({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [logs, setLogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [dateTime, setDateTime] = useState("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = format(now, "EEE d 'de' MMMM HH:mm", {
        locale: es,
      });
      setDateTime(formattedDate);
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = async () => {
    const stepKey = steps[currentStep];

    if (formData[stepKey].trim()) {
      if (stepKey === "email" && !isValidEmail(formData.email)) {
        setLogs([
          ...logs,
          `Error: El ${stepTitles[stepKey]} ingresado no es válido.`,
        ]);
        return;
      }

      if (stepKey !== "message") {
        setLogs([...logs, `${stepTitles[stepKey]}: ${formData[stepKey]}`]);
      }

      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        await handleSubmit();
      }
    } else {
      setLogs([
        ...logs,
        `Error: El campo ${stepTitles[stepKey]} no puede estar vacío.`,
      ]);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setLogs((prevLogs) => [
      ...prevLogs,
      `${stepTitles["message"]}: ${formData["message"]}`,
      "Enviando...",
    ]);

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
        setLogs((prevLogs) => [
          ...prevLogs,
          "El mensaje se ha enviado correctamente.",
        ]);
        setSent(true);
      } else {
        setLoading(false);
        setLogs((prevLogs) => [
          ...prevLogs,
          "Error al enviar el mensaje. Intenta nuevamente.",
        ]);
      }
    } catch (error) {
      setLoading(false);
      setLogs((prevLogs) => [
        ...prevLogs,
        "Hubo un problema al enviar el mensaje. Intenta nuevamente.",
      ]);
      console.error(error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNext();
    }
  };

  const renderInputField = () => {
    const stepKey = steps[currentStep];

    if (stepKey === "message") {
      return (
        <textarea
          name={stepKey}
          value={formData[stepKey]}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoFocus
          placeholder={`Escribe tu ${stepTitles[stepKey].toLowerCase()}...`}
          className="text-green-500 border-none outline-none w-full h-20"
        ></textarea>
      );
    }

    return (
      <input
        type={stepKey === "email" ? "email" : "text"}
        name={stepKey}
        value={formData[stepKey]}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoFocus
        placeholder={`Escribe tu ${stepTitles[stepKey].toLowerCase()}...`}
        className="text-green-500 border-none outline-none w-full"
      />
    );
  };

  return (
    <div className="text-green-500 font-mono w-full h-full text-sm">
      <p className="mb-3">{`last login: ${dateTime}`}</p>
      {!sent && !loading && (
        <p className="mb-3 text-green-300">
          {`Introduce tu ${
            stepTitles[steps[currentStep]]
          } y presiona "intro" para continuar...`}
        </p>
      )}

      <div className="whitespace-pre-wrap mb-4">
        {logs.map((log, index) => (
          <div key={index}>{log}</div>
        ))}

        {!sent && !loading && currentStep < steps.length && (
          <div>
            <span>{`${stepTitles[steps[currentStep]]}: `}</span>
            {renderInputField()}
          </div>
        )}
      </div>
    </div>
  );
}
