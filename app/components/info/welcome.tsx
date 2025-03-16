import Image from "next/image";
import TypingText from "../TypingText";

export default function Welcome() {
  return (
    <div className="flex flex-col gap-4 text-[var(--primary-color)]">
      <div className="relative w-full min-h-[150px] sm:min-h-[200px]">
        <Image
          src="/portada.webp"
          alt="Portada de jomudev"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute flex-col items-end right-6 top-1/2 transform -translate-y-1/2 font-semibold text-sky-300">
          <h2 className="text-2xl sm:text-3xl text-right">
            Jonathan Muñoz Arribas
          </h2>
          <h3 className="text-right text-white">Desarrollador Full Stack</h3>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <TypingText text="¡Bienvenid@ a mi Portfolio!" />
      </div>

      <section className="px-2">
        <p className="text-justify text-gray-700">
          ¡Gracias por visitar mi espacio! Soy un apasionado desarrollador web y
          me encanta crear experiencias web interactivas y eficientes. Aquí
          podrás encontrar una selección de mis proyectos más recientes y
          explorar las tecnologías que utilizo para construir aplicaciones web
          modernas.
        </p>
      </section>

      <section className="text-gray-700 px-2">
        <h3 className="text-lg font-semibold text-black">
          Sobre este Portfolio
        </h3>
        <p className="text-justify">
          He incorporado ventanas flotantes (solo para formato de escritorio)
          para brindarte una experiencia más dinámica, similar a un sistema
          operativo. Explora mis proyectos, mis habilidades y no dudes en
          contactar conmigo si así lo deseas.
        </p>
      </section>

      <section className="text-gray-700">
        <h3 className="text-lg font-semibold text-black">
          ¿Qué puedes encontrar aquí?
        </h3>
        <p className="text-justify">
          En el menú inferior podrás ver mas{" "}
          <span className="font-bold">sobre mi</span>,{" "}
          <span className="font-bold">mis proyectos</span>,{" "}
          <span className="font-bold">mi experiencia laboral</span>,{" "}
          <span className="font-bold">mi formación</span>, y por supuesto podrás
          contactar conmigo.
        </p>
        <p className="text-justify">
          En el escritorio dispones de enlaces a mis redes profesionales.
        </p>
      </section>

      <section className="text-gray-700">
        <h3 className="text-lg font-semibold text-black">¿Como funciona?</h3>
        <div className="text-justify">
          <p>
            Esta web es una simulación de un sistema operativo, puedes abrir
            ventanas, moverlas, redimensionarlas (esquina inferior derecha) y
            cerrarlas.
          </p>
          <p className="font-semibold">
            Importante: Estas funciones no estarán disponibles si estás viendo
            la web desde un teléfono movil.
          </p>
        </div>
        <p className="mt-4 pb-4">
          <span className="font-bold">¡Espero que disfrutes tu visita!</span>
        </p>
      </section>
    </div>
  );
}
