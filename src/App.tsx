import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import PersonalitySelect from './pages/PersonalitySelect';
import PersonalityResult from './pages/PersonalityResult';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/select" element={<PersonalitySelect />} />
        <Route path="/result" element={<PersonalityResult />} />
      </Routes>
    </Router>
  );
}

export default App;