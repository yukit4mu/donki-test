import { useRef, useEffect } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { Personality } from '../types/personality';

interface PersonalityBlockProps {
  personality: Personality;
  position: [number, number, number];
  isSelected?: boolean;
  onClick?: () => void;
  isStatic?: boolean;
}

export default function PersonalityBlock({ 
  personality, 
  position, 
  isSelected = false,
  onClick,
  isStatic = false
}: PersonalityBlockProps) {
  const meshRef = useRef<Mesh>(null);

  useEffect(() => {
    if (meshRef.current && !isStatic) {
      meshRef.current.rotation.y = Math.random() * Math.PI;
    }
  }, [isStatic]);

  useFrame((state, delta) => {
    if (meshRef.current && !isStatic) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  const blockDimensions: [number, number, number] = [3, 1.5, 1.5];

  return (
    <mesh
      position={position}
      ref={meshRef}
      onClick={onClick}
      scale={isSelected ? 1.2 : 1}
      onPointerOver={(e) => {
        if (!isStatic) {
          document.body.style.cursor = 'pointer';
          if (meshRef.current) {
            meshRef.current.scale.multiplyScalar(1.1);
          }
        }
      }}
      onPointerOut={(e) => {
        if (!isStatic) {
          document.body.style.cursor = 'default';
          if (meshRef.current) {
            meshRef.current.scale.x = isSelected ? 1.2 : 1;
            meshRef.current.scale.y = isSelected ? 1.2 : 1;
            meshRef.current.scale.z = isSelected ? 1.2 : 1;
          }
        }
      }}
    >
      <boxGeometry args={blockDimensions} />
      <meshPhysicalMaterial 
        color={personality.color}
        metalness={0.3}
        roughness={0.2}
        clearcoat={0.8}
        clearcoatRoughness={0.1}
        emissive={isSelected ? personality.color : '#000000'}
        emissiveIntensity={isSelected ? 0.6 : 0}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}