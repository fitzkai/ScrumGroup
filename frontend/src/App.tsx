import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import DiscussionBoard from './components/DiscussionBoard';
import ReligionPage from './components/ReligionPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link to="/Religions">
                  <button>Link to Religion Page</button>
                </Link>

                <Link to="/DiscussionBoard">
                  <button>Link to Discussion Board</button>
                </Link>
              </>
            }
          />
          <Route path="/Religions" element={<ReligionPage />} />
          <Route path="/DiscussionBoard" element={<DiscussionBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
