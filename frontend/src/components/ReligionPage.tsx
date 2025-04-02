import { FeatureLink } from './FeatureLink';
import InputDesign from './InputDesign';
import { ReligionCard } from './ReligionCard';
import { Religion } from '../types/religion';
import { useState, useEffect } from 'react';
import { fetchReligions } from '../api/ReligionApi';
import styles from './InputDesign.module.css'; // Ensure you import styles
import StatusBar from './StatusBar';
import { PageHeader } from './PageHeader';
import { BottomNavIndicator } from './BottomNavIndicator';

function ReligionPage() {
  const [religions, setReligions] = useState<Religion[]>([]);

  useEffect(() => {
    const loadReligions = async () => {
      try {
        const data = await fetchReligions();
        console.log('Fetched Religions:', data); // Debug
        setReligions(data);
      } catch (error) {
        console.error('Failed to load religions:', error);
      }
    };

    loadReligions();
  }, []);

  return (
    <>
      <main className={styles.div}>
        <StatusBar />
        <section className={styles.div5}>
          <PageHeader title="Religion Information" />
        </section>
        {religions.map((r) => (
          <div key={r.religionId}>
            {/* Render ReligionCard */}
            <ReligionCard name={r.religionName} overview={r.overview} />
            <br />
          </div>
        ))}
        <BottomNavIndicator />
      </main>
    </>
  );
}

export default ReligionPage;
