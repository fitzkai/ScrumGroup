'use client';
import React from 'react';
import styles from './Menu.module.css';

const StatusBar: React.FC = () => {
  return (
    <header className={styles.statusBarIPhone}>
      <div className={styles.frame}>
        <time className={styles.time}>9:41</time>
        <div className={styles.dynamicIslandspacer} />
        <div className={styles.levels}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bc1b8749f6f4f87731baf95df9da06dd4fe4b2aecbd48ea53d6b53caafa4548?placeholderIfAbsent=true&apiKey=401ab768922c453b98ebcf2dec4c4d64"
            className={styles.img}
            alt="Signal strength"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/17c5a8a0af848f8f6cb6fbc6cfce43f418ac8c72f6669d5fe34176e189101d48?placeholderIfAbsent=true&apiKey=401ab768922c453b98ebcf2dec4c4d64"
            className={styles.img2}
            alt="Battery level"
          />
        </div>
      </div>
    </header>
  );
};

export default StatusBar;
