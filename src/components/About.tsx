"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // 👈 Importamos Image
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
    >
      {/* Parte 1: Foto + Texto */}
      <div className="py-20 md:py-32 flex items-center">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800"
          >
            About Me
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          >
            {/* Foto */}
            <motion.div
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image // 👈 Cambiado a Image
                  src="/profile.png"
                  alt="Profile picture"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>

            {/* Texto */}
            <div className="space-y-6">
              <motion.p
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                I am a passionate web developer with experience in building
                dynamic and responsive web applications. My journey in web
                development started with a fascination for creating interactive
                user experiences and has evolved into a commitment to delivering
                high-quality code and innovative solutions.
              </motion.p>

              <motion.div
              >
                <Link
                  href="https://wa.me/549354715587915?text=Hola%20quiero%20saber%20más%20sobre%20tus%20servicios"
                  target="_blank"
                  className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
                  rel="noopener noreferrer"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}