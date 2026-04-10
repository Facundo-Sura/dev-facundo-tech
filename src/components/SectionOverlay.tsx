"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaDocker,
  FaAws,
  FaJava,
  FaSass,
  FaVuejs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiVite,
  SiNextdotjs,
  SiPostgresql,
  SiVercel,
  SiSupabase,
  SiGooglecloud,
  SiMysql,
  SiSpring,
  SiExpress,
  SiBulma,
  SiRender,
} from "react-icons/si";

interface SectionOverlayProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const sectionColors: Record<string, string> = {
  home: "from-blue-600/20 to-purple-600/20",
  about: "from-red-600/20 to-blue-600/20",
  skills: "from-green-600/20 to-blue-600/20",
  projects: "from-purple-600/20 to-blue-600/20",
  contact: "from-blue-600/20 to-purple-600/20",
};

const borderColors: Record<string, string> = {
  home: "border-blue-500",
  about: "border-red-500",
  skills: "border-green-500",
  projects: "border-purple-500",
  contact: "border-blue-500",
};

const glowColors: Record<string, string> = {
  home: "shadow-blue-500/50",
  about: "shadow-red-500/50",
  skills: "shadow-green-500/50",
  projects: "shadow-purple-500/50",
  contact: "shadow-blue-500/50",
};

function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto p-8"
    >
      <div className={`bg-black/80 backdrop-blur-md rounded-2xl border ${borderColors.about} p-8 ${glowColors.about} shadow-lg`}>
        <h2 className="text-4xl font-bold mb-8 text-red-400">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-red-500/50 shadow-xl">
              <Image
                src="/profile.png"
                alt="Facundo Sura"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-200 leading-relaxed">
              I am a passionate web developer with experience in building
              dynamic and responsive web applications. My journey in web
              development started with a fascination for creating interactive
              user experiences and has evolved into a commitment to delivering
              high-quality code and innovative solutions.
            </p>
            <Link
              href="https://wa.me/549354715587915?text=Hola%20quiero%20saber%20más%20sobre%20tus%20servicios"
              target="_blank"
              className="inline-block mt-4 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow transition-all hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SkillsSection() {
  const skills = [
    {
      title: "Frontend",
      color: "green",
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind", icon: <FaSass /> },
        { name: "Vue.js", icon: <FaVuejs /> },
        { name: "Bulma", icon: <SiBulma /> },
      ],
    },
    {
      title: "Backend",
      color: "green",
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Spring", icon: <SiSpring /> },
      ],
    },
    {
      title: "Database",
      color: "green",
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Neon", icon: <FaDatabase /> },
        { name: "Supabase", icon: <SiSupabase /> },
      ],
    },
    {
      title: "DevOps & Tools",
      color: "green",
      items: [
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Render", icon: <SiRender /> },
        { name: "Google Cloud", icon: <SiGooglecloud /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto p-8"
    >
      <div className={`bg-black/80 backdrop-blur-md rounded-2xl border ${borderColors.skills} p-8 ${glowColors.skills} shadow-lg`}>
        <h2 className="text-4xl font-bold mb-8 text-green-400 text-center">My Tech Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => (
            <div key={group.title}>
              <h3 className={`text-xl font-bold mb-4 text-${group.color}-400`}>{group.title}</h3>
              <div className="space-y-2">
                {group.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-2 bg-gray-900/80 rounded-lg text-gray-200"
                  >
                    <span className="text-2xl text-green-400">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const projects = [
  {
    title: "edulingua",
    description: "Professional website about real estate or construction companies.",
    image: "/edulingua.webp",
    link: "https://app-clases-idiomas.vercel.app/",
  },
  {
    title: "cleanswift",
    description: "Professional website about full contact combat school.",
    image: "/cleanswift.webp",
    link: "https://app-limpieza-nine.vercel.app/",
  }
];

function ProjectsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto p-8"
    >
      <div className={`bg-black/80 backdrop-blur-md rounded-2xl border ${borderColors.projects} p-8 ${glowColors.projects} shadow-lg`}>
        <h2 className="text-4xl font-bold mb-8 text-purple-400 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/80 rounded-lg overflow-hidden border border-purple-500/30 hover:border-purple-500 transition-colors"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto p-8"
    >
      <div className={`bg-black/80 backdrop-blur-md rounded-2xl border ${borderColors.contact} p-8 ${glowColors.contact} shadow-lg text-center`}>
        <h2 className="text-4xl font-bold mb-6 text-blue-400">Get In Touch</h2>
        <p className="text-lg text-gray-300 mb-8">
          I&apos;m currently available for freelance work and full-time opportunities.
          Let&apos;s build something amazing together!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://wa.me/549354715587915?text=Hola%20quiero%20saber%20más%20sobre%20tus%20servicios"
            target="_blank"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-all hover:scale-105"
          >
            WhatsApp
          </Link>
          <a
            href="mailto:facundosura@example.com"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow transition-all hover:scale-105"
          >
            Email
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function HomeContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4">
          FACUNDO SURA
        </h1>
        <p className="text-2xl md:text-3xl text-blue-300 mb-2">
          Full Stack Web Developer
        </p>
        <p className="text-lg text-purple-300">
          Cutting-edge solutions
        </p>
      </div>
    </motion.div>
  );
}

export default function SectionOverlay({ currentSection, onNavigate }: SectionOverlayProps) {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      <div className={`absolute inset-0 bg-gradient-to-br ${sectionColors[currentSection]} pointer-events-none`} />
      
      <nav className="absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
        <div className="flex gap-2 bg-black/60 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                currentSection === item.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="absolute inset-0 overflow-auto py-20">
        <AnimatePresence mode="wait">
          {currentSection === "home" && <HomeContent key="home" />}
          {currentSection === "about" && <AboutSection key="about" />}
          {currentSection === "skills" && <SkillsSection key="skills" />}
          {currentSection === "projects" && <ProjectsSection key="projects" />}
          {currentSection === "contact" && <ContactSection key="contact" />}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 text-sm">
        Click on the channels to navigate
      </div>
    </div>
  );
}
