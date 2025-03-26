import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import StudyGuide from './components/StudyGuide';
import Menu from './Menu'; // update the path if needed
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
              <Link to="/study-guide">
                <button className="study-guide-button">Open Protestant Study Guide</button>
              </Link>
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