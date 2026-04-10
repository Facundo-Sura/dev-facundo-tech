"use client";

import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";

function CPUPin({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.025, 0.04, 0.008]} />
      <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.1} />
    </mesh>
  );
}

function generatePins() {
  const pinsPerSide = 12;
  const pinSpacing = 0.09;
  const chipSize = 1.2;
  const pins: [number, number, number][] = [];
  
  for (let i = 0; i < pinsPerSide; i++) {
    const offset = (i - (pinsPerSide - 1) / 2) * pinSpacing;
    pins.push([offset, 0.02, -chipSize / 2 - 0.02]);
    pins.push([offset, 0.02, chipSize / 2 + 0.02]);
    pins.push([-chipSize / 2 - 0.02, 0.02, offset]);
    pins.push([chipSize / 2 + 0.02, 0.02, offset]);
  }
  return pins;
}

export default function CPUChip() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const pins = useMemo(() => generatePins(), []);
  
  const chipSize = 1.2;
  const heatSpreaderSize = 0.95;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.03;
    }
  });

  return (
    <group position={[0, 0.3, 0]}>
      <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.15}>
        <group 
          ref={groupRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <mesh position={[0, 0.06, 0]} castShadow>
            <boxGeometry args={[chipSize, 0.12, chipSize]} />
            <meshStandardMaterial 
              color="#1a1a1a" 
              metalness={0.85} 
              roughness={0.25}
            />
          </mesh>

          <mesh position={[0, 0.13, 0]}>
            <boxGeometry args={[heatSpreaderSize, 0.04, heatSpreaderSize]} />
            <meshStandardMaterial 
              color="#c0c0c0" 
              metalness={0.95} 
              roughness={0.1}
            />
          </mesh>

          <mesh position={[0, 0.16, 0]}>
            <boxGeometry args={[heatSpreaderSize - 0.05, 0.01, heatSpreaderSize - 0.05]} />
            <meshStandardMaterial 
              color="#e8e8e8" 
              metalness={0.9} 
              roughness={0.15}
            />
          </mesh>

          <mesh position={[0, 0.175, 0]}>
            <boxGeometry args={[0.3, 0.005, 0.15]} />
            <meshStandardMaterial 
              color="#1a1a1a" 
              metalness={0.7} 
              roughness={0.3}
            />
          </mesh>
          <mesh position={[-0.2, 0.175, 0.25]}>
            <boxGeometry args={[0.08, 0.005, 0.08]} />
            <meshStandardMaterial 
              color="#1a1a1a" 
              metalness={0.7} 
              roughness={0.3}
            />
          </mesh>
          <mesh position={[0.15, 0.175, 0.25]}>
            <boxGeometry args={[0.08, 0.005, 0.08]} />
            <meshStandardMaterial 
              color="#1a1a1a" 
              metalness={0.7} 
              roughness={0.3}
            />
          </mesh>

          <mesh position={[0, 0.175, 0]}>
            <boxGeometry args={[0.15, 0.002, 0.4]} />
            <meshStandardMaterial 
              color="#8B0000" 
              metalness={0.6} 
              roughness={0.4}
            />
          </mesh>

          {pins.map((pos, i) => (
            <CPUPin key={i} position={pos} />
          ))}

          <Text
            position={[0, 0.26, 0]}
            fontSize={0.14}
            color="#00d4ff"
            anchorX="center"
            anchorY="middle"
          >
            FACUNDO SURA
          </Text>

          <Text
            position={[0, 0.05, 0.7]}
            fontSize={0.07}
            color="#9d4edd"
            anchorX="center"
            anchorY="middle"
          >
            Full Stack Web Developer
          </Text>

          <Text
            position={[0, -0.03, 0.7]}
            fontSize={0.055}
            color="#00d4ff"
            anchorX="center"
            anchorY="middle"
          >
            Cutting-edge solutions
          </Text>
        </group>
      </Float>

      {(hovered || true) && (
        <pointLight 
          position={[0, 0.5, 0]} 
          color="#00d4ff" 
          intensity={1.5} 
          distance={4} 
        />
      )}
    </group>
  );
}
