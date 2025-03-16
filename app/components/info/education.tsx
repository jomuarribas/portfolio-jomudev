import Image from "next/image";
import { motion } from "framer-motion";
import TypingText from "../TypingText";

export default function Education() {
  const icons = [
    {
      src: "/icons/javascript.svg",
      label: "JavaScript",
      bg: "bg-yellow-300",
    },
    { src: "/icons/typescript.svg", label: "TypeScript", bg: "bg-blue-400" },
    { src: "/icons/html5.svg", label: "HTML5", bg: "bg-orange-400" },
    { src: "/icons/css3.svg", label: "CSS3", bg: "bg-sky-400" },
    { src: "/icons/react.svg", label: "React", bg: "bg-blue-400" },
    { src: "/icons/nextjs.svg", label: "NextJs", bg: "bg-black" },
    { src: "/icons/nodejs.svg", label: "NodeJs", bg: "bg-green-500" },
    { src: "/icons/database.svg", label: "SQL", bg: "bg-blue-400" },
    { src: "/icons/mongodb.svg", label: "MongoDB", bg: "bg-green-600" },
  ];

  const educationData = [
    {
      title: "ThePower Business School",
      subtitle: "Full Stack Developer, Desarrollo de aplicaciones web",
      date: "septiembre de 2023 - marzo de 2024",
    },
  ];

  const certificatesData = [
    { title: "Full Stack Developer", subtitle: "RockTheCode" },
    {
      title: "Working in a Digital World: Professional Skills",
      subtitle: "IBM",
    },
    { title: "SQL", subtitle: "IBM - Datahack" },
    {
      title: "Fundamentos profesionales de IA generativa",
      subtitle: "Microsoft y LinkedIn",
    },
    { title: "JavaScript Developer", subtitle: "RockTheCode" },
  ];

  return (
    <section className="flex w-full flex-col items-center gap-6 px-4 bg-[var(--background-color)] text-[var(--primary-color)]">
      <div className="flex justify-center items-center">
        <TypingText text="Formación" />
      </div>
      <div className="flex flex-wrap gap-3">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center p-0.6`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Image
              src={item.src}
              alt={`Logo de ${item.label}`}
              width={55}
              height={55}
              className={`rounded-lg ${item.bg}`}
            />
            <p className="text-[12px]">{item.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col gap-8 w-full">
        {/* Educación */}
        <motion.div
          className="flex flex-col gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delayChildren: 0.2, staggerChildren: 0.2 },
            },
          }}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-2 p-4 border border-dashed border-spacing border-[var(--primary-color)] rounded-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-[var(--primary-color-dark)]">
                {item.subtitle}
              </p>
              <p className="text-sm text-gray-600">{item.date}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificados */}
        <motion.div
          className="flex flex-col gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delayChildren: 0.2, staggerChildren: 0.2 },
            },
          }}
        >
          <h2 className="text-2xl font-bold">Certificados</h2>
          <div className="flex flex-col gap-2">
            {certificatesData.map((item, index) => (
              <motion.div
                key={index}
                className="p-4 border border-dashed border-[var(--primary-color)] rounded-lg"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-[var(--primary-color-dark)]">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <section className="flex flex-wrap items-center gap-6 py-2 bg-[var(--background-color)] text-[var(--primary-color)]">
        <h1 className="text-2xl font-bold">Conocimientos y Aptitudes</h1>

        {/* Herramientas y Tecnologías */}
        <div className="flex flex-col gap-4 w-full max-w-lg">
          <h2 className="text-lg font-bold">Herramientas y Tecnologías</h2>
          <ul className="list-disc pl-6 text-[var(--primary-color-dark)]">
            <li>Microsoft Azure</li>
            <li>
              SQL (IBM Datahack, Microsoft SQL Server, Transact-SQL, SQL Server
              Management Studio)
            </li>
            <li>NoSQL (MongoDB)</li>
            <li>Docker</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Angular & Angular CLI</li>
            <li>Cloudinary</li>
            <li>JSON Web Token (JWT)</li>
            <li>styled-components</li>
            <li>ESLint</li>
            <li>Mongoose</li>
            <li>CSS (Flexbox, Grid, etc.)</li>
            <li>AJAX</li>
            <li>Stack MERN</li>
            <li>React.js</li>
            <li>Figma</li>
            <li>HTML5 & CSS3</li>
            <li>Git & GitHub</li>
            <li>Microsoft Visual Studio Code</li>
            <li>Node.js</li>
          </ul>
        </div>

        {/* Conocimientos y Aptitudes */}
        <div className="flex flex-col gap-4 mb-6 w-full max-w-lg">
          <h2 className="text-lg font-bold">Conocimientos y Aptitudes</h2>
          <ul className="list-disc pl-6 text-[var(--primary-color-dark)]">
            <li>Desarrollo Frontend y Backend con enfoque Full Stack</li>
            <li>Gestión de bases de datos relacionales y no relacionales</li>
            <li>Implementación de soluciones con JavaScript moderno</li>
            <li>Diseño y consumo de APIs RESTful</li>
            <li>Maquetación responsiva con CSS y frameworks modernos</li>
            <li>Colaboración en equipo con metodologías ágiles</li>
            <li>Configuración y despliegue en entornos de nube (Azure)</li>
            <li>Resolución creativa de problemas técnicos</li>
            <li>
              Habilidades de comunicación y liderazgo adquiridas en proyectos
              previos
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
