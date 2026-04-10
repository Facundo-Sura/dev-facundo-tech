"use client";

import { useState } from "react";
import Scene3D from "@/components/3d/Scene3D";
import SectionOverlay from "@/components/SectionOverlay";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <Scene3D currentSection={currentSection} onNavigate={handleNavigate} />
      <SectionOverlay currentSection={currentSection} onNavigate={handleNavigate} />
    </main>
  );
}
