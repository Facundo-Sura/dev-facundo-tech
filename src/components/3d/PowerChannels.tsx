"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface PowerChannelProps {
  startPos: [number, number, number];
  endPos: [number, number, number];
  color: string;
  section: string;
  onNavigate: (section: string) => void;
  isActive: boolean;
}

function CircuitNode({ position, color, size = 0.08, glow = false }: { 
  position: [number, number, number]; 
  color: string; 
  size?: number;
  glow?: boolean;
}) {
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[size, size, 0.02, 16]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>
      <mesh position={[0, 0.015, 0]}>
        <cylinderGeometry args={[size * 0.7, size * 0.7, 0.01, 16]} />
        <meshStandardMaterial 
          color={color}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      {glow && (
        <pointLight position={[0, 0.1, 0]} color={color} intensity={0.5} distance={1} />
      )}
    </group>
  );
}

function CircuitTrace({ 
  startPos, 
  endPos, 
  color, 
  onClick, 
  onPointerOver, 
  onPointerOut,
  isActive,
  hovered 
}: { 
  startPos: [number, number, number]; 
  endPos: [number, number, number];
  color: string;
  onClick?: () => void;
  onPointerOver?: () => void;
  onPointerOut?: () => void;
  isActive?: boolean;
  hovered?: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const midX = (startPos[0] + endPos[0]) / 2;
  const midZ = (startPos[2] + endPos[2]) / 2;
  const length = Math.sqrt(
    Math.pow(endPos[0] - startPos[0], 2) + 
    Math.pow(endPos[2] - startPos[2], 2)
  );
  const angle = Math.atan2(endPos[0] - startPos[0], endPos[2] - startPos[2]);

  const baseColor = new THREE.Color(color);
  const blueColor = new THREE.Color("#00d4ff");
  const finalColor = baseColor.clone().lerp(blueColor, 0.25);

  return (
    <mesh
      ref={meshRef}
      position={[midX, -0.1, midZ]}
      rotation={[0, -angle, 0]}
      onClick={onClick}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
    >
      <boxGeometry args={[0.06, 0.04, length]} />
      <meshStandardMaterial
        color={finalColor.getStyle()}
        metalness={0.6}
        roughness={0.3}
      />
    </mesh>
  );
}

function PowerParticle({ startPos, endPos, color, delay = 0 }: { 
  startPos: [number, number, number]; 
  endPos: [number, number, number];
  color: string;
  delay?: number;
}) {
  const particleRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (particleRef.current) {
      const time = (state.clock.elapsedTime + delay) % 1.5;
      const t = time / 1.5;
      
      particleRef.current.position.x = startPos[0] + (endPos[0] - startPos[0]) * t;
      particleRef.current.position.z = startPos[2] + (endPos[2] - startPos[2]) * t;
      particleRef.current.position.y = -0.08 + Math.sin(t * Math.PI * 4) * 0.02;
      
      const scale = Math.sin(t * Math.PI) * 0.8 + 0.4;
      particleRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={particleRef} position={startPos}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.9} />
    </mesh>
  );
}

function PowerChannel({ startPos, endPos, color, section, onNavigate, isActive }: PowerChannelProps) {
  const [hovered, setHovered] = useState(false);
  
  const baseColor = new THREE.Color(color);
  const blueColor = new THREE.Color("#00d4ff");
  const finalColor = baseColor.clone().lerp(blueColor, 0.25);

  const midX = (startPos[0] + endPos[0]) / 2;
  const midZ = (startPos[2] + endPos[2]) / 2;

  return (
    <group>
      <CircuitTrace
        startPos={startPos}
        endPos={endPos}
        color={color}
        onClick={() => onNavigate(section)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        isActive={isActive}
        hovered={hovered}
      />

      <CircuitNode position={startPos} color={finalColor.getStyle()} size={0.1} glow={true} />
      <CircuitNode position={endPos} color={finalColor.getStyle()} size={0.12} glow={isActive} />
      
      <CircuitNode 
        position={[midX, -0.1, midZ]} 
        color={finalColor.getStyle()} 
        size={0.06} 
        glow={hovered || isActive} 
      />

      <PowerParticle startPos={startPos} endPos={endPos} color={finalColor.getStyle()} delay={0} />
      <PowerParticle startPos={startPos} endPos={endPos} color={finalColor.getStyle()} delay={0.5} />
      <PowerParticle startPos={startPos} endPos={endPos} color={finalColor.getStyle()} delay={1} />

      <mesh position={[endPos[0], -0.1, endPos[2]]}>
        <ringGeometry args={[0.15, 0.2, 6]} />
        <meshStandardMaterial 
          color={finalColor.getStyle()}
          transparent
          opacity={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

interface PowerChannelsProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export default function PowerChannels({ currentSection, onNavigate }: PowerChannelsProps) {
  const channels: Array<{
    startPos: [number, number, number];
    endPos: [number, number, number];
    color: string;
    section: string;
  }> = [
    {
      startPos: [0.7, 0, 0.7],
      endPos: [2.2, 0, -1.3],
      color: "#ff4d4d",
      section: "about",
    },
    {
      startPos: [0.7, 0, 0],
      endPos: [2.2, 0, 0],
      color: "#00ff88",
      section: "skills",
    },
    {
      startPos: [0.7, 0, -0.7],
      endPos: [2.2, 0, 1.3],
      color: "#9d4edd",
      section: "projects",
    },
    {
      startPos: [-0.7, 0, 0.7],
      endPos: [-2.2, 0, 0],
      color: "#00d4ff",
      section: "contact",
    },
  ];

  return (
    <group>
      {channels.map((channel, index) => (
        <PowerChannel
          key={index}
          startPos={channel.startPos}
          endPos={channel.endPos}
          color={channel.color}
          section={channel.section}
          onNavigate={onNavigate}
          isActive={currentSection === channel.section}
        />
      ))}
    </group>
  );
}
