"use client";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[url(/footer.jpg)] bg-origin-border bg-no-repeat bg-center bg-cover border-t border-gray-200 py-12 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Sección de contacto */}
        <div>
          <h3 className="text-xl font-semibold text-gray-200 mb-4">
            Connect with Me
          </h3>
          <p className="text-gray-200 mb-6 max-w-md">
            I’m always open to discussing new projects, opportunities, or just
            having a chat about tech.
          </p>

          <div className="space-y-3">
            <p className="flex items-center text-gray-100">
              <SiGmail size={25} />{" "}
              <a
                href="mailto:facundomesura@gmail.com?subject=Consulta%20desde%20tu%20portafolio&body=Hola%20Facu,%20quiero%20saber%20más%20sobre%20tus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 hover:underline"
              >
                facundomesura@gmail.com
              </a>
            </p>
            <p className="flex items-center text-gray-100">
              <FaGithub size={25} />{" "}
              <a
                href="https://github.com/Facundo-Sura"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 hover:underline"
              >
                facundo sura
              </a>
            </p>
            <p className="flex items-center text-gray-100">
              <FaLinkedin size={25} />{" "}
              <a
                href="https://www.linkedin.com/in/dev-facundo-sura/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 hover:underline"
              >
                dev facundo sura
              </a>
            </p>
            <p className="flex items-center text-gray-100">
              <FaFacebook size={25} />{" "}
              <a
                href="https://www.facebook.com/facundo.sura"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 hover:underline"
              >
                facundo sura
              </a>
            </p>
          </div>
        </div>

        {/* Nombre y redes */}
        <div className="flex flex-col items-start md:items-end">
          <h2 className="text-4xl font-bold text-gray-200 mb-6 border-b-2 ">
            Facundo Sura.
          </h2>
          <p className="text-gray-200 text-sm text-right mb-4">
            Building clean, fast, and user-friendly web experiences.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/Facundo-Sura"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-100 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dev-facundo-sura/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-100 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:facundomesura@gmail.com"
              className="text-gray-400 hover:text-gray-100 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Copyright corregido */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-100 text-center text-gray-400 text-sm">
        {"\u00A9"} {new Date().getFullYear()} Facundo Sura. All rights reserved.
      </div>
    </footer>
  );
}
