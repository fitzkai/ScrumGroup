import React from 'react';
import styles from './MapSearch.module.css';

const StatusBar: React.FC = () => {
  return (
    <header className={styles.statusBarIPhone}>
      <div className={styles.frame}>
        <time className={styles.time}>9:41</time>
        <div className={styles.dynamicIslandspacer} />
        <div className={styles.levels}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d234d95093f9e6123b5c30b8c11fcea5f03b44ae1d5bfa04562329ef7857e01d?placeholderIfAbsent=true&apiKey=fcbc18c0ae9f445a9c83d7acaf1eb233"
            alt="Signal strength"
            className={styles.img}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f876cd50a3e484ad8eff7cabd9b659c8e64d7f90c3bb84f2b35e5ed56aed14a?placeholderIfAbsent=true&apiKey=fcbc18c0ae9f445a9c83d7acaf1eb233"
            alt="Battery level"
            className={styles.img2}
          />
        </div>
      </div>
    </header>
  );
};

export default StatusBar;
