"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpeg"];

export default function Landing() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relatve h-screen w-full overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={images[currentImage]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImage]}
            alt="Hero Image"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl">Welcome to My Portfolio</h1>
        <p className="text-2xl">Web Developer, Designer, and Creator</p>
        <a href="#projects" className="bg-blue-900 hover:bg-blue-600 px-6 py-3 rounded text-lg transition">See projects</a>
      </div>
    </section>
  );
}
