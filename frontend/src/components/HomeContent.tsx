import React from 'react';
import styles from './Homepage.module.css';
import { useNavigate } from 'react-router-dom';

function HomeContent() {
  const navigate = useNavigate();
  const handleStudyNowClick = () => {
    navigate('/menu');
  };

  return (
    <section className={styles.div2}>
      <div className={styles.div3}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e942046b4d5a80f0010c0e6fe9798c4c32830a8278bff6d827a5985cce661f61?placeholderIfAbsent=true&apiKey=401ab768922c453b98ebcf2dec4c4d64"
          alt="Interfaith Explorer Logo"
          className={styles.img3}
        />
      </div>
      <h1 className={styles.interfaithExplorer}>Interfaith Explorer</h1>
      <button className={styles.button} onClick={handleStudyNowClick}>
        Study Now
      </button>
      <div className={styles.homeIndicator} />
    </section>
  );
}

export default HomeContent;
