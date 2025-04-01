'use client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './InputDesign.module.css';
// StatusBar component for the top status bar
const StatusBar = () => {
  return (
    <header className={styles.statusBar}>
      <div className={styles.statusBarContent}>
        <div className={styles.leftItem}>
          <MenuButton />
        </div>
        <div className={styles.centerItem}>
          <time className={styles.time}>9:41</time>
        </div>
        <div className={styles.rightItem}>
          <svg
            width="135"
            height="14"
            viewBox="0 0 135 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.statusIcon}
          >
            {/* Your full SVG icon remains here */}
          </svg>
        </div>
      </div>
    </header>
  );
};
// MenuButton component for the hamburger menu

const MenuButton = () => {
  const navigate = useNavigate();
  const handleMenuClick = () => {
    navigate('/menu');
  };
  return (
    <button
      aria-label="Menu"
      style={{
        background: 'transparent',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
      }}
      onClick={handleMenuClick}
    >
      <svg
        width="30"
        height="31"
        viewBox="0 0 30 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.75 23.25V20.6667H26.25V23.25H3.75ZM3.75 16.7917V14.2083H26.25V16.7917H3.75ZM3.75 10.3333V7.75H26.25V10.3333H3.75Z"
          fill="black"
        />
      </svg>
    </button>
  );
};
// SearchInput component for the search field
const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className={styles.searchInputContainer}>
      <input
        type="text"
        placeholder="Search"
        className={styles.searchInput}
        value={searchValue}
        onChange={handleSearchChange}
        aria-label="Search input"
      />
      <button
        aria-label="Search"
        style={{
          background: 'transparent',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
      >
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 14.5L11.1 11.6M12.6667 7.83333C12.6667 10.7789 10.2789 13.1667 7.33333 13.1667C4.38781 13.1667 2 10.7789 2 7.83333C2 4.88781 4.38781 2.5 7.33333 2.5C10.2789 2.5 12.6667 4.88781 12.6667 7.83333Z"
            stroke="#1E1E1E"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
// SearchOptions component for the four option buttons
const SearchOptions = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.optionsContainer}>
      <button className={styles.optionButton} onClick={() => navigate('/map')}>
        Location Map
      </button>
      <button
        className={styles.optionButton}
        onClick={() => navigate('/religions')}
      >
        All Religions
      </button>
      <button
        className={styles.optionButton}
        onClick={() => navigate('/studyguide/1')}
      >
        Study Guide
      </button>
      <button
        className={styles.optionButton}
        onClick={() => navigate('/discussion')}
      >
        Discussion Board
      </button>
    </section>
  );
};
// BottomIndicator component for the bottom navigation indicator
const BottomIndicator = () => {
  return (
    <div className={styles.bottomIndicatorContainer}>
      <div className={styles.bottomIndicator} />
    </div>
  );
};
// Main InputDesign component that combines all the smaller components
function InputDesign() {
  return (
    <main className={styles.container}>
      <StatusBar />
      <section className={styles.mainContent}>
        <h1 className={styles.title}>Search</h1>
        <SearchInput />
        <SearchOptions />
      </section>
      <BottomIndicator />
    </main>
  );
}
export default InputDesign;
