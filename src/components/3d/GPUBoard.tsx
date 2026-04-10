"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function CopperTrace({ points, width = 0.02 }: { points: [number, number, number][]; width?: number }) {
  if (points.length < 2) return null;
  
  const midPoints = points.slice(1, -1);
  
  return (
    <group>
      {points.map((point, i) => (
        <mesh key={i} position={point} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[width, width]} />
          <meshStandardMaterial color="#b87333" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}
      {midPoints.map((point, i) => (
        <mesh key={`mid-${i}`} position={[point[0], -0.16, point[2]]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[width, width]} />
          <meshStandardMaterial color="#b87333" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function Capacitor({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.06, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.12, 8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.13, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.02, 8]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.12, 0.06]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  );
}

function ICChip({ position, size = [0.15, 0.03, 0.1] }: { position: [number, number, number]; size?: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={size} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[size[0] / 2 + 0.005, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[size[1], size[2], 0.01]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function GPUBoard() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.01;
    }
  });

  const copperTraces: { points: [number, number, number][] }[] = [
    { points: [[-2.5, -0.16, 0], [-2, -0.16, 0], [-2, -0.16, -1.5], [-1.5, -0.16, -1.5]] },
    { points: [[-2.5, -0.16, 0.3], [-2, -0.16, 0.3], [-2, -0.16, 1.5], [-1.5, -0.16, 1.5]] },
    { points: [[2.5, -0.16, 0], [2, -0.16, 0], [2, -0.16, -1.5], [1.5, -0.16, -1.5]] },
    { points: [[2.5, -0.16, 0.3], [2, -0.16, 0.3], [2, -0.16, 1.5], [1.5, -0.16, 1.5]] },
    { points: [[-1, -0.16, -2], [-1, -0.16, -1.5], [1, -0.16, -1.5], [1, -0.16, -2]] },
    { points: [[-1, -0.16, 2], [-1, -0.16, 1.5], [1, -0.16, 1.5], [1, -0.16, 2]] },
  ];

  const capacitors: [number, number, number][] = [
    [-2.8, -0.1, -1.8],
    [-2.6, -0.1, -1.5],
    [-2.8, -0.1, 1.8],
    [-2.6, -0.1, 1.5],
    [2.8, -0.1, -1.8],
    [2.6, -0.1, -1.5],
    [2.8, -0.1, 1.8],
    [2.6, -0.1, 1.5],
    [-1.8, -0.1, -2.2],
    [1.8, -0.1, -2.2],
    [-1.8, -0.1, 2.2],
    [1.8, -0.1, 2.2],
  ];

  const icChips: { position: [number, number, number]; size: [number, number, number] }[] = [
    { position: [-2.5, -0.1, 0], size: [0.2, 0.04, 0.3] },
    { position: [2.5, -0.1, 0], size: [0.2, 0.04, 0.3] },
    { position: [-2.5, -0.1, 1], size: [0.15, 0.03, 0.2] },
    { position: [2.5, -0.1, -1], size: [0.15, 0.03, 0.2] },
    { position: [0, -0.1, -2.2], size: [0.4, 0.04, 0.15] },
    { position: [0, -0.1, 2.2], size: [0.4, 0.04, 0.15] },
  ];

  return (
    <group>
      <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.2, 0]} receiveShadow>
        <planeGeometry args={[7, 5]} />
        <meshStandardMaterial 
          color="#0d2818" 
          metalness={0.3} 
          roughness={0.7}
        />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.19, 0]}>
        <planeGeometry args={[6.8, 4.8]} />
        <meshStandardMaterial 
          color="#0a3d20"
          metalness={0.4}
          roughness={0.6}
        />
      </mesh>

      {copperTraces.map((trace, i) => (
        <CopperTrace key={i} points={trace.points} width={0.025} />
      ))}

      {[...Array(40)].map((_, i) => (
        <mesh 
          key={i} 
          position={[
            -3 + Math.random() * 6, 
            -0.18, 
            -2 + Math.random() * 4
          ]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[0.1 + Math.random() * 0.2, 0.015]} />
          <meshStandardMaterial color="#1a5c30" metalness={0.8} roughness={0.3} />
        </mesh>
      ))}

      {capacitors.map((pos, i) => (
        <Capacitor key={`cap-${i}`} position={pos} />
      ))}

      {icChips.map((chip, i) => (
        <ICChip key={`ic-${i}`} position={chip.position} size={chip.size} />
      ))}

      <mesh position={[0, -0.18, -2.3]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3, 0.4]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.17, -2.3]}>
        <boxGeometry args={[0.03, 0.02, 0.3]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.17, 2.3]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3, 0.4]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.17, 2.3]}>
        <boxGeometry args={[0.03, 0.02, 0.3]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>

      <mesh position={[-3.3, -0.18, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.4, 2]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[3.3, -0.18, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.4, 2]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  );
}
