import { useEffect } from 'react';
import { useUserStore } from '../store/userStore';
import PersonalityTower from '../components/PersonalityTower';

export default function PersonalityResult() {
  const { username, selectedPersonalities } = useUserStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-800 to-blue-900 text-white relative">
      <div className="fixed top-8 right-8 z-10 bg-white/10 backdrop-blur-sm p-6 rounded-xl max-w-md">
        <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
          {username}さんのパーソナリティタワー
        </h1>
        <div className="space-y-2">
          {selectedPersonalities.map((personality, index) => (
            <div
              key={personality.id}
              className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm p-2 rounded-lg"
              style={{ borderLeft: `4px solid ${personality.color}` }}
            >
              <span className="text-xl text-cyan-300">{index + 1}.</span>
              <span className="text-lg font-medium" style={{ color: personality.color }}>
                {personality.nameJa}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <PersonalityTower />
    </div>
  );
}