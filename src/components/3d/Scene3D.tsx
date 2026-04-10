"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { 
  OrbitControls, 
  PerspectiveCamera,
  Stars,
} from "@react-three/drei";
import { 
  EffectComposer, 
  Bloom, 
  ChromaticAberration,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import GPUBoard from "./GPUBoard";
import CPUChip from "./CPUChip";
import PowerChannels from "./PowerChannels";

interface CameraControllerProps {
  targetSection: string;
}

function CameraController({ targetSection }: CameraControllerProps) {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 2.5, 5));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    const positions: Record<string, { pos: [number, number, number]; lookAt: [number, number, number] }> = {
      home: { pos: [0, 2.5, 5], lookAt: [0, 0, 0] },
      about: { pos: [2.5, 1.2, -1.8], lookAt: [2, 0, -1.3] },
      skills: { pos: [2.5, 1.2, 0], lookAt: [2, 0, 0] },
      projects: { pos: [2.5, 1.2, 1.8], lookAt: [2, 0, 1.3] },
      contact: { pos: [-2.5, 1.2, 0], lookAt: [-2, 0, 0] },
    };

    const target = positions[targetSection] || positions.home;
    targetPos.current.set(...target.pos);
    targetLookAt.current.set(...target.lookAt);
  }, [targetSection]);

  useFrame((state, delta) => {
    camera.position.lerp(targetPos.current, delta * 2);
    
    const currentLookAt = new THREE.Vector3();
    camera.getWorldDirection(currentLookAt);
    const targetDir = targetLookAt.current.clone().sub(camera.position).normalize();
    currentLookAt.lerp(targetDir, delta * 2);
    camera.lookAt(targetLookAt.current);
  });

  return null;
}

interface Scene3DProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

function Scene({ currentSection, onNavigate }: Scene3DProps) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2.5, 5]} fov={55} />
      <CameraController targetSection={currentSection} />
      
      <OrbitControls 
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
      />

      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} castShadow />
      <pointLight position={[-5, 5, -5]} color="#00d4ff" intensity={0.5} />
      <pointLight position={[5, 5, 5]} color="#9d4edd" intensity={0.3} />

      <GPUBoard />
      <CPUChip />
      <PowerChannels currentSection={currentSection} onNavigate={onNavigate} />

      <Stars radius={100} depth={50} count={2000} factor={4} fade speed={1} />

      <EffectComposer>
        <Bloom 
          intensity={0.8}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0005, 0.0005]}
        />
        <Vignette darkness={0.5} offset={0.3} />
      </EffectComposer>
    </>
  );
}

export default function Scene3D({ currentSection, onNavigate }: Scene3DProps) {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <color attach="background" args={["#000008"]} />
        <fog attach="fog" args={["#000008", 10, 30]} />
        <Scene currentSection={currentSection} onNavigate={onNavigate} />
      </Canvas>
    </div>
  );
}
