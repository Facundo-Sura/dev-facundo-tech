"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // 👈 Importamos Image

const projects = [
  {
    title: "inmobiliaria Scotto",
    description: "Professional website about real estate or construction companies.",
    image: "/project0.jpg",
    link: "https://inmobiliariascotto.com.ar",
  },
  {
    title: "Titanium Team",
    description: "Professional website about full contact combat school.",
    image: "/project1.jpg",
    link: "https://titanium-team.vercel.app",
  },
  {
    title: "Estudio juridico Sura",
    description: "Professional website about law firms.",
    image: "/project2.jpg",
    link: "https://estudio-juridico-sura.vercel.app",
  },
  {
    title: "Inmobiliaria Prefab",
    description: "Sample landing page 1 about real estate or construction companies.",
    image: "/project3.jpg",
    link: "https://inmobiliaria-gules.vercel.app/",
  },
  {
    title: "Landing Page Peugeot",
    description: "Sample landing page 2 about Peugeot vehicles.",
    image: "/project4.jpg",
    link: "https://peugeotlanding.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <Image // 👈 Cambiado a Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 relative transition-all duration-300 ease-in-out before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-500 before:scale-x-0 hover:before:scale-100 before:origin-left before:transition-transform before:duration-300 hover:text-blue-500"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}