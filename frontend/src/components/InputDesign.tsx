'use client';
import React from 'react';
import styles from './InputDesign.module.css';
import StatusBar from './StatusBar';
import { PageHeader } from './PageHeader';
import { ReligionCard } from './ReligionCard';
import { BottomNavIndicator } from './BottomNavIndicator';

const InputDesign: React.FC = () => {
  // Religion data
  const religions = [
    {
      name: 'Catholicism',
      overview:
        "Catholicism is the largest branch of Christianity, led by the Pope and centered on Jesus Christ's teachings. It emphasizes the sacraments, Church tradition, and faith combined with good works for salvation. Key beliefs include the Trinity, veneration of saints, and Mary's intercession, with a strong focus on moral teachings and global influence.",
    },
    {
      name: 'Protestant',
      overview:
        'Protestantism is a major branch of Christianity that originated from the Reformation in the 16th century. It emphasizes salvation by faith alone, the authority of Scripture, and the priesthood of all believers. Protestants reject the authority of the Pope and many Catholic traditions, focusing on direct access to God.',
    },
    {
      name: 'Hinduism',
      overview:
        'Hinduism is one of the oldest religions, focusing on a variety of beliefs and practices. It includes concepts like karma, reincarnation, and moksha (liberation). Hindus worship many gods, with Brahman as the supreme cosmic force, and follow sacred texts like the Vedas and Bhagavad Gita.',
    },
  ];

  return (
    <main className={styles.div}>
      <StatusBar />
      <section className={styles.div5}>
        <PageHeader title="Religion Information" />
        <div className={styles.div8}>
          {religions.map((religion, index) => (
            <ReligionCard
              key={index}
              name={religion.name}
              overview={religion.overview}
            />
          ))}
        </div>
      </section>
      <BottomNavIndicator />
    </main>
  );
};

export default InputDesign;
