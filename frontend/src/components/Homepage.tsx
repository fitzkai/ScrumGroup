'use client';
import React from 'react';
import styles from './Homepage.module.css';
import StatusBar from './StatusBar';
import HomeContent from './HomeContent';

function Homepage() {
  return (
    <main className={styles.homepage}>
      <StatusBar />
      <div className={styles.circleAccent} />
      <HomeContent />
    </main>
  );
}

export default Homepage;
