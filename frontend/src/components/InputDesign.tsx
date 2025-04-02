import React, { useState, useEffect } from 'react';
import { fetchReligions } from '../api/ReligionApi';
import { Religion } from '../types/religion';
import StatusBar from './StatusBar';
import { PageHeader } from './PageHeader';
import { ReligionCard } from './ReligionCard';
import { BottomNavIndicator } from './BottomNavIndicator';
import styles from './InputDesign.module.css';

const InputDesign: React.FC = () => {
  const [religions, setReligions] = useState<Religion[]>([]);

  useEffect(() => {
    const loadReligions = async () => {
      try {
        const data = await fetchReligions();
        setReligions(data);
      } catch (error) {
        console.error('Error fetching religions:', error);
      }
    };

    loadReligions();
  }, []);

  return (
    <main className={styles.div}>
      <StatusBar />
      <section className={styles.div5}>
        <PageHeader title="Religion Information" />
      </section>
      <BottomNavIndicator />
    </main>
  );
};
export default InputDesign;
