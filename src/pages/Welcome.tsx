import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';
import { Palette } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export default function Welcome() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const setStoreUsername = useUserStore(state => state.setUsername);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setStoreUsername(username);
      navigate('/select');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
      <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-md w-full">
        <div className="flex items-center justify-center mb-8">
          <Palette className="w-12 h-12 text-blue-500" />
          <h1 className="text-3xl font-bold ml-3 text-gray-800">Palette Town</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="ユーザー名"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="あなたの名前を入力してください"
            required
          />
          
          <Button type="submit" className="w-full">
            始める
          </Button>
        </form>
      </div>
    </div>
  );
}