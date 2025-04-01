import './App.css';
import DiscussionBoard from './components/DiscussionBoard';
import Homepage from './components/Homepage';
import Menu from './components/Menu';
import ReligionPage from './components/ReligionPage';
import StudyGuide from './components/StudyGuide';
import MapSearch from './mapsearch_components/MapSearch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/map" element={<MapSearch />} />
          <Route path="/religions" element={<ReligionPage />} />
          <Route path="/studyguide/:ReligionId" element={<StudyGuide />} />
          <Route path="discussion" element={<DiscussionBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
