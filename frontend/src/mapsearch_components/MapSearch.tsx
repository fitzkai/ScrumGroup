import 'bootstrap/dist/css/bootstrap.min.css';
import './MapSearch.css';
import StatusBar from './StatusBar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Location } from '../types/Location';

function MapSearch() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [locations, setLocations] = useState<Location[]>([]); // Stores fetched data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedReligion, setSelectedReligion] = useState<string>('');

  // Initialize navigate book
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://localhost:5000/Religion/AllLocations') // Ensure the correct backend URL
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data: Location[]) => {
        console.log('Fetched data:', data); //Debugging
        setLocations(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // List of unique locations from our JSON /AllLocations route
  const locationNames = Array.from(
    new Set(locations.map((loc) => loc.locationName))
  );

  // Handle location change
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLoc = e.target.value;
    setSelectedLocation(selectedLoc);

    // Find the selected location object and get the religion name
    const selectedLocData = locations.find(
      (loc) => loc.locationName === selectedLoc
    );
    if (selectedLocData && selectedLocData.religion) {
      setSelectedReligion(selectedLocData.religion.religionName);
    } else {
      setSelectedReligion('No religion data available');
    }
  };

  // Function to navigate to ReligionPage
  const goToReligionPage = () => {
    navigate('/religions');
  };

  return (
    <main className="container py-5" style={{ paddingTop: '80px' }}>
      <StatusBar />
      <div className="text-center my-4">
        <h1 className="display-4 fw-bold">Search by Country</h1>
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
          value={selectedLocation}
          onChange={handleLocationChange}
        >
          <option value="" disabled>
            Select a Country
          </option>
          {locationNames.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        <section className="mt-4 text-center">
          <h2 className="h4 text-success fw-bold">
            Top Religion in {selectedLocation || 'The World'}
          </h2>
          {loading && <p>Loading...</p>}
          {error && <p className="text-danger">{error}</p>}
          {!loading && !error && (
            <button className="btn btn-primary mt-4" onClick={goToReligionPage}>
              {selectedLocation
                ? selectedReligion || 'No religion data available'
                : 'Christianity'}
            </button>
          )}
        </section>
      </div>
    </main>
  );
}

export default MapSearch;
