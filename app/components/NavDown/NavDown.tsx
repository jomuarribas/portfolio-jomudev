"use client";
import { useWindowManager } from "@/app/context/windowManagerContext";
import { motion } from "framer-motion";
import InfoData from "../info/InfoData";
import Image from "next/image";
import { JSX } from "react";
import WorkExperience from "../info/workExperience";
import ContactForm from "../info/contact";
import Education from "../info/education";
import Projects from "../info/projects";

export default function NavDown() {
  const { addWindow } = useWindowManager();
  const { closeAllWindows } = useWindowManager();

  const handleOpenWindow = (title: string, component: JSX.Element) => {
    if (window.innerWidth < 768) {
      addWindow(title, component, "95%", "80%");
    } else {
      addWindow(title, component, "70%", "60%");
    }
  };

  return (
    <motion.section
      className="fixed bottom-1.5 w-full flex justify-center px-2"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute -top-56 flex items-center justify-center"
      >
        <Image
          src="/leyenda.webp"
          alt="Logo de jomuDev"
          width={350}
          height={200}
          className="filter invert"
        />
      </motion.div>
      <div className="flex gap-1.5 items-center px-3 py-1 justify-center rounded-2xl border-[0.8px] border-gray-500 bg-gradient-to-r from-[#1a1a1a] to-[#565656] text-white">
        <div
          onClick={closeAllWindows}
          className="flex items-center justify-center hover:transform hover:scale-110 transition-all cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-finder"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
            <path d="M7 8v1" />
            <path d="M17 8v1" />
            <path d="M12.5 4c-.654 1.486 -1.26 3.443 -1.5 9h2.5c-.19 2.867 .094 5.024 .5 7" />
            <path d="M7 15.5c3.667 2 6.333 2 10 0" />
          </svg>
        </div>
        <div
          onClick={() => handleOpenWindow("Quién soy", <InfoData />)}
          className="flex items-center justify-center hover:transform hover:scale-110 transition-all cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-info-square"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h14zm-7 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
          </svg>
        </div>
        <div
          onClick={() => handleOpenWindow("Mis proyectos", <Projects />)}
          className="flex text-amber-300 items-center justify-center hover:transform hover:scale-110 transition-all cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
          </svg>
        </div>
        <div
          onClick={() =>
            handleOpenWindow("Experiencia laboral", <WorkExperience />)
          }
          className="flex items-center justify-center hover:transform hover:scale-110 transition-all cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-building-store"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l18 0" />
            <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
            <path d="M5 21l0 -10.15" />
            <path d="M19 21l0 -10.15" />
            <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
          </svg>
        </div>
        <div
          onClick={() => handleOpenWindow("Formación", <Education />)}
          className="flex items-center justify-center hover:transform hover:scale-110 transition-all cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-vocabulary"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 19h-6a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2z" />
            <path d="M12 5v16" />
            <path d="M7 7h1" />
            <path d="M7 11h1" />
            <path d="M16 7h1" />
            <path d="M16 11h1" />
            <path d="M16 15h1" />
          </svg>
        </div>
        <div
          onClick={() => handleOpenWindow("Quién soy", <ContactForm />)}
          className="text-sky-300 flex items-center justify-center hover:transform hover:scale-110 transition-all cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-terminal-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 9l3 3l-3 3" />
            <path d="M13 15l3 0" />
            <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
          </svg>
        </div>
      </div>
    </motion.section>
  );
}
