import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import InputDesign from './components/InputDesign';
import './App.css';

function App() {
  return (
<<<<<<< Updated upstream
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="app-container">
      {/* Hide button when on the InputDesign page */}
      {location.pathname !== '/input-design' && (
        <div className="button-container">
          <Link to="/input-design">
            <button className="navigation-button">Go to Input Design</button>
          </Link>
        </div>
      )}

      <Routes>
        <Route path="/input-design" element={<InputDesign />} />
      </Routes>
    </div>
=======
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
>>>>>>> Stashed changes
  );
}

export default App;
