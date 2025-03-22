import Image from "next/image";

export default function InfoData() {
  return (
    <section className="flex flex-col gap-6bg-[var(--background-color)] text-[var(--primary-color)]">
      <div className="py-4 bg-[var(--primary-color)] mb-4 rounded-2xl flex flex-wrap gap-4 justify-center">
        <Image
          src="/miniatura.webp"
          alt="Foto de José Muñoz"
          width={200}
          height={200}
          className="rounded-full shadow-[0px_0px_20px_1px_rgba(14,165,233,0.7)]"
        />
        <div className="flex flex-col text-white items-center justify-center sm:items-start px-2">
          <h2 className="text-3xl text-center">Jonathan Muñoz Arribas</h2>
          <p className="text-sky-300 text-lg">Desarrollador Full Stack</p>
          <a href="mailto:info@jomudev.com" className="text-sm mt-4">
            info@jomudev.com
          </a>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed text-justify px-2">
        Estoy en un emocionante proceso de transformación profesional, donde he
        pasado de ser productor musical a convertirme en desarrollador Full
        Stack. Este cambio ha enriquecido mi vida profesional y personal,
        permitiéndome aplicar mi creatividad y habilidades en un campo
        completamente nuevo.
      </p>

      <div className="flex flex-col gap-3 px-2">
        <h2 className="text-2xl mt-4 font-bold">Habilidades Técnicas</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>
            <strong>Frontend:</strong> React, Next.js, HTML5, CSS3, TailwindCSS,
            JavaScript, TypeScript
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express, APIs REST
          </li>
          <li>
            <strong>Bases de Datos:</strong> MongoDB, PostgreSQL, SQL Server
          </li>
          <li>
            <strong>Herramientas:</strong> Git, GitHub, Docker
          </li>
          <li>
            <strong>Otras Tecnologías:</strong> WebSockets, JWT, testing con
            Jest
          </li>
        </ul>
      </div>

      <div className="flex flex-col mt-4 gap-3 px-2">
        <h2 className="text-2xl font-bold">Habilidades Blandas</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>
            Empatía y Comunicación: Comprender y transmitir ideas claramente.
          </li>
          <li>
            Resolución de Problemas: Toma de decisiones, creatividad y enfoque
            para superar desafíos.
          </li>
          <li>
            Adaptabilidad: Aprender y crecer en nuevos entornos y tecnologías.
          </li>
          <li>
            Trabajo en Equipo: Colaborar eficazmente para lograr objetivos
            comunes.
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-3 text-justify px-2">
        <h2 className="text-2xl mt-4 font-bold">Motivación y Filosofía</h2>
        <p className="text-gray-700 leading-relaxed">
          Disfruto construyendo soluciones que mejoren la vida de las personas y
          enfrentando desafíos técnicos que impulsen mi crecimiento. Creo en la
          innovación constante, la atención al detalle y la creación de
          experiencias que conecten con el usuario.
        </p>
      </div>

      <div className="flex flex-col mt-4 gap-3 px-2">
        <h2 className="text-2xl font-bold">Logros Relevantes</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Más de una década de experiencia en producción musical.</li>
          <li>Desarrollo de aplicaciones Full Stack funcionales.</li>
          <li>
            Adaptación y éxito en mi transición profesional hacia la
            programación web.
          </li>
        </ul>
      </div>

      <div className="flex flex-col mt-4 gap-3 text-justify px-2">
        <h2 className="text-2xl font-bold">Inspiración</h2>
        <blockquote className="italic text-gray-700">
          El único límite para nuestro crecimiento es nuestra imaginación y
          voluntad de aprender.
        </blockquote>
      </div>

      <div className="flex flex-col mt-4 gap-3 text-justify px-2">
        <h2 className="text-2xl font-bold">Hobbies Relacionados</h2>
        <p className="text-gray-700 leading-relaxed">
          La música sigue siendo una gran fuente de inspiración para mí. También
          disfruto aprendiendo sobre nuevas herramientas de desarrollo,
          explorando el diseño UI/UX, lo que complementa mi enfoque creativo
          como desarrollador.
        </p>
      </div>

      <div className="flex flex-col mt-4 pb-4 gap-3 text-justify px-2">
        <h2 className="text-2xl font-bold">¡Conecta Conmigo!</h2>
        <p className="text-gray-700 leading-relaxed">
          Estoy buscando nuevas oportunidades emocionantes como Desarrollador
          web. Si tienes un proyecto innovador o simplemente quieres conectar,
          no dudes en contactarme. ¡Estoy listo para marcar la diferencia!
        </p>
      </div>
    </section>
  );
}
