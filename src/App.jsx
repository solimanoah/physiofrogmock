import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MusclePage from './components/MusclePage/MusclePage';
import VideoPage from './components/VideoPage/VideoPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<HomePage />} />
        {/* MUSCLE SELECTION PAGE */}
        <Route path="/muscle" element={<MusclePage />} />
        {/* VIDEO PAGE */}
        <Route path="/video/:muscle" element={<VideoPage />} />
      </Routes>
    </Router>
  );
}

export default App;