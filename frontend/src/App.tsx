import './App.css';
import StudyGuide from './components/StudyGuide';
import Menu from './Menu'; // update the path if needed
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <Link to="/study-guide"><button className="study-guide-button">Open Protestant Study Guide</button></Link>
            </>
          }
        />
        <Route path="/study-guide" element={<StudyGuide />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;