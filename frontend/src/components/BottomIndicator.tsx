import React from 'react';
import styles from './DiscussionBoard.module.css';

const BottomIndicator: React.FC = () => {
  return (
    <footer className={styles.bottomNav}>
      <div className={styles.bottomIndicator} aria-hidden="true" />
    </footer>
  );
};

export default BottomIndicator;
