import styles from './MapSearch.module.css';
import StatusBar from './StatusBar';

function MapSearch() {
  return (
    <main className={styles.mapSearch}>
      <StatusBar />
      <div className={styles.contentContainer}>
        <section>
          <h1 className={styles.searchTitle}>Search by Region</h1>
        </section>
        <figure className={styles.mapContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d3ff85f1bce6bc5e04a7f2629f56631cfe74d161b93b24e4300b64ec6f0d62b?placeholderIfAbsent=true&apiKey=fcbc18c0ae9f445a9c83d7acaf1eb233"
            alt="World map"
            className={styles.mapImage}
          />
        </figure>
        <p className={styles.instructionText}>
          Select a country to see which religions are most common in that
          region!
        </p>
        <section>
          <h2 className={styles.resultsTitle}>Top 5 in this Region:</h2>
          <p>Catholicism</p>
          <p>Protestant</p>
          <p>Hinduism</p>
          <p>Buddhism</p>
          <p>Judaism</p>
        </section>
        <div className={styles.homeIndicator} role="presentation" />
      </div>
    </main>
  );
}

export default MapSearch;
