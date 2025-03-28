import './App.css';
import DiscussionBoard from './components/DiscussionBoard';
import ReligionPage from './components/ReligionPage';
import StudyGuide from './components/StudyGuide';
import MapSearch from './mapsearch_components/MapSearch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MapSearch />} />
          <Route path="/map" element={<MapSearch />} />
          <Route path="/religions" element={<ReligionPage />} />
          <Route path="/studyguide" element={<StudyGuide />} />
          <Route path="discussion" element={<DiscussionBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
