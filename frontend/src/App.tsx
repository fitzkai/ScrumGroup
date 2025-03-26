import './App.css';
import MapSearch from './mapsearch_components/MapSearch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/map" element={<MapSearch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
