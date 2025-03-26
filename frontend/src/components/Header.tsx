import React from 'react';
import styles from './DiscussionBoard.module.css';
interface HeaderProps {
  title: string;
  onBackClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBackClick }) => {
  return (
    <nav className={styles.header}>
      <button onClick={onBackClick} aria-label="Go back">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z"
            fill="#1D1B20"
          />
        </svg>
      </button>
      <h1 className={styles.headerTitle}>{title}</h1>
    </nav>
  );
};

export default Header;
