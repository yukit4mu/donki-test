import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { personalities } from '../data/personalities';
import PersonalityBlock from './PersonalityBlock';
import PersonalityLabel from './PersonalityLabel';
import { useUserStore } from '../store/userStore';
import { MAX_SELECTIONS } from '../types/personality';

export default function PersonalityGrid() {
  const { selectedPersonalities, addPersonality, removePersonality } = useUserStore();

  const handlePersonalityClick = (personality) => {
    const isSelected = selectedPersonalities.some(p => p.id === personality.id);
    
    if (isSelected) {
      removePersonality(personality.id);
    } else if (selectedPersonalities.length < MAX_SELECTIONS) {
      addPersonality(personality);
    }
  };

  return (
    <div className="w-full h-[700px] bg-gradient-to-b from-blue-900 to-slate-900 rounded-xl shadow-2xl">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 25]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, -10, -10]} angle={0.3} intensity={1.2} />
        <OrbitControls 
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
        
        {personalities.map((personality, index) => {
          const row = Math.floor(index / 3);
          const col = index % 3;
          const x = (col - 1) * 6;
          const y = -(row - 1.5) * 6;
          const position: [number, number, number] = [x, y, 0];
          
          return (
            <group key={personality.id}>
              <PersonalityBlock
                personality={personality}
                position={position}
                isSelected={selectedPersonalities.some(p => p.id === personality.id)}
                onClick={() => handlePersonalityClick(personality)}
              />
              <PersonalityLabel
                personality={personality}
                position={position}
              />
            </group>
          );
        })}
      </Canvas>
    </div>
  );
}