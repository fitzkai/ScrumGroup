import 'bootstrap/dist/css/bootstrap.min.css';
import './MapSearch.css';
import StatusBar from './StatusBar';
import { useState, useEffect } from 'react';

function MapSearch() {
  const [selectedContinent, setSelectedContinent] = useState('');
  const [locations, setLocations] = useState([]); // Stores fetched data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/Religion/AllLocations') // Ensure the correct backend URL
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setLocations(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const continents = [
    'Bangladesh',
    'Brazil',
    'Canada',
    'China',
    'India',
    'Indonesia',
    'Iran',
    'Israel',
    'Japan',
    'Myanmar',
    'Nepal',
    'Pakistan',
    'Singapore',
    'South Korea',
    'Sri Lanka',
    'Thailand',
    'The United Kingdom',
    'The United States',
    'Yemen',
  ];

  const filteredLocations = selectedContinent
    ? locations.filter((loc) => loc.country === selectedContinent)
    : locations;

  return (
    <main className="container py-5" style={{ paddingTop: '80px' }}>
      <StatusBar />
      <div className="text-center my-4">
        <h1 className="display-4 fw-bold">Search by Region</h1>
      </div>
      <div className="d-flex flex-column align-items-center">
        <figure className="border rounded-3 shadow-lg mb-4">
          <img
            src="/SimpleWorldMap.jpg"
            alt="World map"
            className="img-fluid rounded-3"
          />
        </figure>

        <select
          className="form-select text-center mb-4 w-50"
          value={selectedContinent}
          onChange={(e) => setSelectedContinent(e.target.value)}
        >
          <option value="" disabled>
            Select a Country
          </option>
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>

        <section className="mt-4 text-center">
          <h2 className="h4 text-success fw-bold">
            Top Religion in {selectedContinent || 'The World'}
          </h2>
          {loading && <p>Loading...</p>}
          {error && <p className="text-danger">{error}</p>}
          {!loading && !error && (
            <ul className="list-group">
              {filteredLocations.map((loc) => (
                <li key={loc.id} className="list-group-item">
                  {loc.religion} - {loc.percentage}%
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default MapSearch;
