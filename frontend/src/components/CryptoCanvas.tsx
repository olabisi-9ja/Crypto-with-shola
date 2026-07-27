import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function CoinMesh() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Steady rotate around the Y axis
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.7;
    }
  });

  return (
    // Tilt the coin slightly towards the camera so the face detail is visible
    <group ref={meshRef} rotation={[0.4, 0, 0]}>
      {/* Main Coin Cylinder */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[2, 2, 0.16, 64, 1]} />
        <meshStandardMaterial 
          color="#d4af37" // Metallic Gold
          roughness={0.15}
          metalness={0.9}
        />
      </mesh>

      {/* Front Outer Rim Ring */}
      <mesh position={[0, 0.081, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.82, 0.06, 16, 100]} />
        <meshStandardMaterial 
          color="#f3cd44" 
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Back Outer Rim Ring */}
      <mesh position={[0, -0.081, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.82, 0.06, 16, 100]} />
        <meshStandardMaterial 
          color="#f3cd44" 
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Center "C" Symbol details (constructed out of boxes) */}
      <group position={[0, 0.082, 0]}>
        {/* Back vertical bar of C */}
        <mesh position={[-0.4, 0, 0]}>
          <boxGeometry args={[0.3, 0.04, 1.2]} />
          <meshStandardMaterial color="#b8860b" metalness={0.95} roughness={0.1} />
        </mesh>
        {/* Top bar of C */}
        <mesh position={[0.1, 0, -0.45]}>
          <boxGeometry args={[1.0, 0.04, 0.3]} />
          <meshStandardMaterial color="#b8860b" metalness={0.95} roughness={0.1} />
        </mesh>
        {/* Bottom bar of C */}
        <mesh position={[0.1, 0, 0.45]}>
          <boxGeometry args={[1.0, 0.04, 0.3]} />
          <meshStandardMaterial color="#b8860b" metalness={0.95} roughness={0.1} />
        </mesh>
      </group>

      {/* Backside "C" Symbol details */}
      <group position={[0, -0.082, 0]} rotation={[Math.PI, 0, 0]}>
        {/* Back vertical bar of C */}
        <mesh position={[-0.4, 0, 0]}>
          <boxGeometry args={[0.3, 0.04, 1.2]} />
          <meshStandardMaterial color="#b8860b" metalness={0.95} roughness={0.1} />
        </mesh>
        {/* Top bar of C */}
        <mesh position={[0.1, 0, -0.45]}>
          <boxGeometry args={[1.0, 0.04, 0.3]} />
          <meshStandardMaterial color="#b8860b" metalness={0.95} roughness={0.1} />
        </mesh>
        {/* Bottom bar of C */}
        <mesh position={[0.1, 0, 0.45]}>
          <boxGeometry args={[1.0, 0.04, 0.3]} />
          <meshStandardMaterial color="#b8860b" metalness={0.95} roughness={0.1} />
        </mesh>
      </group>
    </group>
  );
}

export function CryptoCanvas() {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[450px] relative">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.65} />
        <directionalLight position={[5, 10, 5]} intensity={1.8} castShadow />
        <directionalLight position={[-5, -5, -2]} intensity={0.4} />
        <pointLight position={[0, 4, 3]} intensity={1.3} color="#ffffff" />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.6}>
          <CoinMesh />
        </Float>
      </Canvas>
    </div>
  );
}
