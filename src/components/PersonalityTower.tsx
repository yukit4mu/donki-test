import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useUserStore } from '../store/userStore';
import PersonalityBlock from './PersonalityBlock';

export default function PersonalityTower() {
  const selectedPersonalities = useUserStore(state => state.selectedPersonalities);
  const spacing = 2.5; // Spacing between blocks

  return (
    <div className="w-full h-screen bg-gradient-to-b from-cyan-800 to-blue-900">
      <Canvas camera={{ position: [8, 12, 16], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight
          position={[-10, 20, -10]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
        />
        
        <fog attach="fog" args={['#0c4a6e', 8, 30]} />
        
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />
        
        {selectedPersonalities.map((personality, index) => (
          <PersonalityBlock
            key={personality.id}
            personality={personality}
            position={[0, index * spacing, 0]}
            isStatic={true}
          />
        ))}
      </Canvas>
    </div>
  );
}