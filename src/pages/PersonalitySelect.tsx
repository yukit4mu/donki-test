import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';
import PersonalityGrid from '../components/PersonalityGrid';
import { MAX_SELECTIONS } from '../types/personality';
import { Button } from '../components/ui/Button';

export default function PersonalitySelect() {
  const navigate = useNavigate();
  const { username, selectedPersonalities } = useUserStore();

  const handleComplete = () => {
    if (selectedPersonalities.length === MAX_SELECTIONS) {
      navigate('/result');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
            {username}さんのパーソナリティを選択
          </h1>
          <p className="text-cyan-100 text-lg">
            5つのパーソナリティを選んでください ({selectedPersonalities.length}/{MAX_SELECTIONS})
          </p>
        </div>

        <PersonalityGrid />

        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleComplete}
            disabled={selectedPersonalities.length !== MAX_SELECTIONS}
            className="text-lg px-8 py-4"
          >
            完了
          </Button>
        </div>

        <div className="mt-8 bg-blue-900/50 backdrop-blur-sm rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-cyan-100">選択したパーソナリティ:</h2>
          <div className="flex flex-wrap gap-3">
            {selectedPersonalities.map((personality) => (
              <span
                key={personality.id}
                className="px-4 py-2 rounded-full bg-blue-800/50 backdrop-blur-sm text-base font-medium"
                style={{ color: personality.color }}
              >
                {personality.nameJa}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}