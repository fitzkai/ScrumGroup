import 'bootstrap/dist/css/bootstrap.min.css';
import './MapSearch.css';
import StatusBar from './StatusBar';

function MapSearch() {
  return (
    <main className="container py-5" style={{ paddingTop: '80px' }}>
      {/* Add padding-top to account for fixed status bar */}
      <StatusBar />
      <div className="text-center my-4">
        <h1 className="display-4 fw-bold">Search by Region</h1>
      </div>
      <div className="d-flex flex-column align-items-center">
        {/* Map Image */}
        <figure className="border rounded-3 shadow-lg mb-4">
          <img
            src="/WorldMap.jpg"
            alt="World map"
            className="img-fluid rounded-3"
          />
        </figure>

        <p className="lead text-center mb-4">
          Select a country to see which religions are most common in that
          region!
        </p>

        {/* Results Section */}
        <section className="mt-4 text-center">
          <h2 className="h4 text-success fw-bold">Top 5 in this Region:</h2>
          <ul className="list-group list-group-flush mx-auto w-75">
            <li className="list-group-item">Christianity ~ 2.3 billion</li>
            <li className="list-group-item">Islam ~ 1.9 billion</li>
            <li className="list-group-item">Hinduism ~ 1.2 billion</li>
            <li className="list-group-item">Buddhism ~ 520 million</li>
            <li className="list-group-item">
              Chinese Trad. Religions (Confucianism, Taoism, etc.) ~ 400 million
            </li>
          </ul>
        </section>

        {/* Home Indicator */}
        <div className="mt-4 border-top w-50 pt-2 text-center text-muted">
          <small>Swipe up to go back</small>
        </div>
      </div>
    </main>
  );
}

export default MapSearch;
