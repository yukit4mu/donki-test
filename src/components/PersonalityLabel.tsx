import { Html } from '@react-three/drei';
import { Personality } from '../types/personality';

interface PersonalityLabelProps {
  personality: Personality;
  position: [number, number, number];
}

export default function PersonalityLabel({ personality, position }: PersonalityLabelProps) {
  const [x, y, z] = position;
  
  return (
    <Html position={[x, y - 1, z]} center>
      <div className="text-center pointer-events-none">
        <p 
          className="text-lg font-bold whitespace-nowrap px-2 py-1 rounded-lg"
          style={{ 
            color: personality.color,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          {personality.nameJa}
        </p>
      </div>
    </Html>
  );
}