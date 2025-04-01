import './App.css';
import DiscussionBoard from './components/DiscussionBoard';
import HomeContent from './components/HomeContent';
import InputDesign from './components/InputDesign';
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
          <Route path="/" element={<HomeContent />} />
          <Route path="/map" element={<MapSearch />} />
          <Route path="/religions" element={<ReligionPage />} />
          <Route path="/studyguide/:GuideId" element={<StudyGuide />} />
          <Route path="discussion" element={<DiscussionBoard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/search" element={<InputDesign />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
