"use client";

import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import TechIcon from "@/components/TechIcon";

import { useThree } from "@react-three/fiber";

const technologies = [
  "react",
  "next.js",
  "tailwind",
  "node.js",
  "mongodb",
  "typescript",
  "express.js",
  "websockets",
  "css",
  "html",
  "javascript",
  "framer motion"
];

function FloatingIcon({ name, position, rotation, floatIntensity, speed }: any) {
  return (
    <Float
      position={position}
      rotation={rotation}
      speed={speed} // Animation speed
      rotationIntensity={1.5} // XYZ rotation intensity
      floatIntensity={floatIntensity} // Up/down float intensity
      floatingRange={[-0.5, 0.5]} // Range of y-axis values the object will float within
    >
      <Html transform center scale={0.5} zIndexRange={[100, 0]}>
        <div 
          className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-xl opacity-40 hover:opacity-100 transition-opacity duration-300"
          style={{ willChange: 'transform, opacity' }}
        >
          <TechIcon name={name} className="w-10 h-10 md:w-14 md:h-14" />
        </div>
      </Html>
    </Float>
  );
}

function Scene() {
  const { viewport } = useThree();

  // Generate random positions, rotations, and speeds for the icons only once
  const icons = useMemo(() => {
    return technologies.map((tech, index) => {
      // Use viewport dimensions to ensure icons stay within screen bounds
      // viewport.width and viewport.height give the frustum size at z=0
      const padding = 2; // Keep them slightly away from the absolute edges
      const x = (Math.random() - 0.5) * (viewport.width - padding);
      const y = (Math.random() - 0.5) * (viewport.height - padding);
      const z = (Math.random() - 0.5) * 5 - 2; // Z between -2 and -7
      
      const rotX = Math.random() * Math.PI;
      const rotY = Math.random() * Math.PI;
      const rotZ = Math.random() * Math.PI;

      const floatIntensity = 1 + Math.random() * 2;
      const speed = 1 + Math.random();

      return {
        tech,
        position: [x, y, z],
        rotation: [rotX, rotY, rotZ],
        floatIntensity,
        speed,
      };
    });
  }, [viewport.width, viewport.height]);

  return (
    <>
      <ambientLight intensity={0.5} />
      {icons.map((item, i) => (
        <FloatingIcon 
          key={i}
          name={item.tech}
          position={item.position}
          rotation={item.rotation}
          floatIntensity={item.floatIntensity}
          speed={item.speed}
        />
      ))}
    </>
  );
}

export default function FloatingTechBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>

        <Scene />
      </Canvas>
    </div>
  );
}
