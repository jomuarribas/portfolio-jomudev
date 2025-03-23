"use client";
import { useState } from "react";
import TypingText from "../TypingText";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  link_code: string;
  tech: string;
  type: string;
  more_link: string;
};

const projects: Project[] = [
  {
    title: "Nubadesk",
    description: `Plataforma SaaS diseñada para la gestión empresarial y de empleados, optimizando tareas administrativas y mejorando la comunicación interna entre empresa y empleados. Producto en espera de ser lanzado al mercado.`,
    image: "/screenshots/nubadesk.png",
    link: "https://www.nubadesk.com",
    link_code: "",
    tech: "Next.js, TypeScript, Tailwind CSS, Supabase",
    type: "Full Stack",
    more_link: "",
  },
  {
    title: "Altour",
    description: `MVP que permite visualizar qué zonas están saturadas basándose en datos de tráfico y movilidad. Además, a través de algoritmos de filtrado permite ofrecer recomendaciones personalizadas en función de la afluencia de personas.`,
    image: "/screenshots/altour.png",
    link: "",
    link_code: "https://github.com/IgrowkerTraining/i003-altour-front",
    tech: "Next.js, TypeScript, Tailwind CSS, Java, Spring, PostgreSQL",
    type: "Front-End. Trabajo colaborativo con un equipo de desarrolladores",
    more_link: "",
  },
  {
    title: "Ghost Player (con IA)",
    description: `Un pequeño proyecto experimental con el cual se puede controlar con las manos el reproductor a través del reconocimiento de las mismas con inteligencia artificial.`,
    image: "/screenshots/ghostplayer.png",
    link: "",
    link_code: "",
    tech: "React, JavaScript, Handtrack.js",
    type: "Front-End",
    more_link:
      "https://www.linkedin.com/posts/jomuarribas_reproductorinteligente-ia-inteligenciaartificial-activity-7266726070790365185-UmzK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA5HMbkBUfKU7Oj60216oHk76p7gN2nDCSY",
  },
  {
    title: "Stage Roster",
    description: `Sistema de organización y coordinación de eventos para bandas de música, diseñado específicamente para músicos que pertenecen a múltiples grupos. La herramienta permite evitar conflictos de fechas en las actuaciones al crear una red colaborativa, donde los miembros pueden sincronizar agendas y gestionar la disponibilidad en los eventos programados por todas sus bandas.`,
    image: "/screenshots/stageroster.png",
    link: "https://www.stageroster.com",
    link_code: "https://github.com/jomuarribas/stageroster_front",
    tech: "Next, JavaScript, CCS3, NodeJs, Express, MongoDB",
    type: "Full Stack",
    more_link: "",
  },
  {
    title: "Fuzztopía (Web Oficial)",
    description: `Landing Page del grupo musical "Fuzztopía".`,
    image: "/screenshots/fuzztopiaweb.png",
    link: "https://www.fuzztopiarock.com",
    link_code: "https://github.com/jomuarribas/fuzztopia",
    tech: "React, TypeScript, CCS3, NodeJs",
    type: "Full Stack",
    more_link: "",
  },
  {
    title: "ChonijAPP",
    description: `Aplicación para realizar peticiones de canciones en directo y en tiempo real. Se pide un tema, le llega la petición al DJ y cuando él quiera lanza la petición a otra pantalla para que se pueda proyectar la imagen realizada por el usuario.`,
    image: "/screenshots/chonijapp.png",
    link: "https://www.chonija.com",
    link_code: "https://github.com/jomuarribas/chonijadj_front",
    tech: "React, JavaScript, CCS3, NodeJs, Express, MongoDB, Websockets",
    type: "Full Stack",
    more_link:
      "https://www.linkedin.com/posts/jomuarribas_que-divertido-me-parece-hacer-este-tipo-de-activity-7222144800106422274-13lp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA5HMbkBUfKU7Oj60216oHk76p7gN2nDCSY",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="flex flex-col items-center w-full gap-6 px-2 text-[var(--primary-color)]">
      <div className="flex justify-center items-center">
        <TypingText text="Mis Proyectos" />
      </div>
      <p className="mb-3 text-gray-700 text-justify max-w-2xl">
        Cada uno de estos proyectos refleja mi pasión por el desarrollo web, la
        creatividad y mi constante deseo de aprender. ¡Explóralos y descubre
        cómo he transformado ideas en soluciones reales!
      </p>
      <motion.div
        className="flex flex-wrap gap-5 justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`h-[620px] bg-gradient-to-t from-white to-yellow-100 relative flex flex-col max-w-[340px] items-center border border-gray-300 rounded-lg ${
              hoveredIndex === index ? "shadow-2xl" : "shadow-lg"
            } hover:scale-105 transform transition-all`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <div className="w-full h-[220px]">
              <Image
                src={project.image}
                alt={`Screenshot de ${project.title}`}
                width={400}
                height={200}
                className="rounded-t-md object-cover w-full h-full object-top"
              />
            </div>

            <div className="flex flex-col gap-4 p-4 w-full">
              <h3 className="text-xl text-center font-bold">{project.title}</h3>
              <p className="text-sm text-gray-700 text-justify">
                {project.description}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Tecnologías:</strong> {project.tech}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Mi trabajo:</strong> {project.type}
              </p>
              {project.more_link && (
                <a
                  href={project.more_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[var(--primary-color)] text-sm"
                >
                  Más información
                </a>
              )}
            </div>
            <div className="absolute flex items-center justify-center bottom-4 gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  !project.link ? "opacity-30 pointer-events-none" : ""
                } text-sm text-white bg-[var(--primary-color)] px-4 py-2 rounded-lg`}
              >
                Ver Proyecto
              </a>
              <a
                href={project.link_code}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  !project.link_code ? "opacity-30 pointer-events-none" : ""
                } text-sm text-white bg-[var(--primary-color)] px-4 py-2 rounded-lg`}
              >
                Ver Código
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <p className="pb-6">Próximamente mas...</p>
    </section>
  );
}
