'use client';
import styles from './InputDesign.module.css';
import SearchBar from './SearchBar';
import CategoryCard from './CategoryCard';
import BottomNavIndicator from './BottomNavIndicator';

function InputDesign() {
  return (
    <main className={styles.div}>
      <section className={styles.div6}>
        <div className={styles.div7}></div>
        <h1 className={styles.div8}>Search</h1>
        <SearchBar />
        <div className={styles.div17}>
          <CategoryCard title="All religions A-Z" className={styles.div18} />
          <CategoryCard title="Location Map" className={styles.div19} />
          <CategoryCard title="Popularity" className={styles.div20} />
        </div>
        <div>
          <h2>Welcome to the Input Design Page</h2>
          <p>This is the Input Design component.</p>
        </div>
      </section>
      <BottomNavIndicator />
    </main>
  );
}

export default InputDesign;
