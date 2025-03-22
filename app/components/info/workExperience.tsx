import { motion } from "framer-motion";
import TypingText from "../TypingText";

export default function WorkExperience() {
  const experiences = [
    {
      company: "Igrowker - Acelerando Juniors IT",
      position: "Full Stack Developer",
      duration: "Septiembre de 2024 - Octubre de 2024 (2 meses)",
      location: "Madrid, Comunidad de Madrid, España",
      description: `
        Full Stack Developer en el proyecto “Altour” para la realización de un MVP.
        Perfil MERN Stack trabajando con Next.Js y Tailwind en el frontend y realizando tareas de apoyo al backend.
        Entre otros componentes y funciones, realicé un mapa de calor que mostraba en tiempo real la afluencia
        de gente en destinos recomendados según tu ubicación actual.
      `,
    },
    {
      company: "Dial Rock (Estudio de grabación)",
      position: "Productor musical",
      duration: "Enero de 2009 - Presente (16 años 3 meses)",
      location: "San Fernando de Henares, Comunidad de Madrid, España",
      description: `
        Productor musical en Dial Rock. Desempeñando funciones de Grabación, Mezcla y Masterización y
        producciones de música en directo.
      `,
    },
    {
      company: "Indra",
      position: "Ingeniería de producción",
      duration: "Diciembre de 1999 - Marzo de 2011 (11 años 4 meses)",
      location: "Torrejón de Ardoz, Comunidad de Madrid, España",
      description: `
        Administrativo de producción:
        - Desarrollo de funciones en el departamento de producción para diversos proyectos nacionales e internacionales.
        - Asistencia técnica a nivel administrativo y logístico de equipamiento averiado.
        - Toma de decisiones y responsabilidad sobre las mismas, con personal a cargo.
        - Coordinación con el departamento de Compras, de acuerdo con las exigencias de la ingeniería.
      `,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-6 px-2 bg-[var(--background-color)] text-[var(--primary-color)]">
      <div className="flex justify-center items-center">
        <TypingText text="Experiencia laboral" />
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
        className="w-full flex flex-col gap-6"
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-2 p-4 border border-[var(--primary-color)] rounded-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <h2 className="text-xl font-bold">{experience.company}</h2>
            <p className="text-lg font-semibold text-[var(--primary-color-dark)]">
              {experience.position}
            </p>
            <p className="text-sm text-gray-600">{experience.duration}</p>
            <p className="text-sm text-gray-600">{experience.location}</p>
            <p className="text-gray-700 leading-relaxed">
              {experience.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.p
        className="pb-4 text-justify text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Cada una de estas experiencias ha moldeado mis habilidades y mi enfoque
        profesional, permitiéndome aportar soluciones creativas y eficientes.
        Estoy listo para enfrentar nuevos desafíos, seguir aprendiendo y dejar
        mi huella en futuros proyectos.
      </motion.p>
    </section>
  );
}
