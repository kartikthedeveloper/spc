"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function WireNetwork() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[2.1, 1]} />
        <meshBasicMaterial color="#D2AC55" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh scale={1.5}>
        <icosahedronGeometry args={[2.1, 0]} />
        <meshBasicMaterial color="#0E6B5C" wireframe transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      className="!absolute inset-0"
      aria-hidden="true"
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1} />
      <WireNetwork />
    </Canvas>
  );
}
