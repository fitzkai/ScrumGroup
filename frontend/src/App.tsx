import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import DiscussionBoard from './components/DiscussionBoard';
import HomeContent from './components/HomeContent';
import Homepage from './components/Homepage';
import Menu from './components/Menu';
import ReligionPage from './components/ReligionPage';
import StudyGuide from './components/StudyGuide';
import MapSearch from './mapsearch_components/MapSearch';
import SearchDesign from './components/SearchDesign';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/map" element={<MapSearch />} />
          <Route path="/religions" element={<ReligionPage />} />
          <Route path="/studyguide/:GuideId" element={<StudyGuide />} />
          <Route path="discussion" element={<DiscussionBoard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/search" element={<SearchDesign />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
