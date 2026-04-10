"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
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
  SiTypescript,
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

type TechGroupProps = {
  title: string;
  color: "blue" | "violet" | "emerald" | "amber";
  items: { name: string; icon: React.ReactNode }[];
};

function TechGroup({ title, color, items }: TechGroupProps) {
  const colors = {
    blue: "bg-blue-100 text-blue-800 border-blue-200",
    violet: "bg-violet-100 text-violet-800 border-violet-200",
    emerald: "bg-emerald-100 text-emerald-800 border-emerald-200",
    amber: "bg-amber-100 text-amber-800 border-amber-200",
  };

  return (
    <div className="inline-block w-80 md:w-96 align-top">
      <h4 className={`text-xl font-bold mb-4 text-${color}-700`}>{title}</h4>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-5 py-3 ${
              colors[color as keyof typeof colors]
            } rounded-xl shadow-sm font-medium text-sm md:text-base border`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-20">
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          My Tech Stack
        </h3>
        <div className="flex gap-8 md:gap-16 flex-wrap justify-center">
          <TechGroup
            title="Frontend"
            color="blue"
            items={[
              { name: "HTML", icon: <FaHtml5 /> },
              { name: "CSS", icon: <FaCss3Alt /> },
              { name: "JavaScript", icon: <FaJs /> },
              { name: "TypeScript", icon: <SiTypescript /> },
              { name: "React", icon: <FaReact /> },
              { name: "Vite", icon: <SiVite /> },
              { name: "Bootstrap", icon: <FaBootstrap /> },
              { name: "Next.js", icon: <SiNextdotjs /> },
              { name: "Tailwind", icon: <FaSass /> },
              { name: "Vue.js", icon: <FaVuejs /> },
              { name: "Bulma", icon: <SiBulma /> },
            ]}
          />
          <TechGroup
            title="Backend"
            color="violet"
            items={[
              { name: "Node.js", icon: <FaNodeJs /> },
              { name: "Express", icon: <SiExpress /> },
              { name: "Python", icon: <FaPython /> },
              { name: "Java", icon: <FaJava /> },
              { name: "Spring", icon: <SiSpring /> },
            ]}
          />
          <TechGroup
            title="Database"
            color="emerald"
            items={[
              { name: "PostgreSQL", icon: <SiPostgresql /> },
              { name: "MySQL", icon: <SiMysql /> },
              { name: "Neon", icon: <FaDatabase /> },
              { name: "Supabase", icon: <SiSupabase /> },
            ]}
          />
          <TechGroup
            title="DevOps & Tools"
            color="amber"
            items={[
              { name: "Vercel", icon: <SiVercel /> },
              { name: "Render", icon: <SiRender /> },
              { name: "Google Cloud", icon: <SiGooglecloud /> },
              { name: "AWS", icon: <FaAws /> },
              { name: "Docker", icon: <FaDocker /> },
            ]}
          />
        </div>
      </div>
    </section>
  );
}