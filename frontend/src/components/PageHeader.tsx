import React from 'react';
import styles from './InputDesign.module.css';
// import { useNavigate } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  // const navigate = useNavigate();
  return (
    <header className={styles.div6}>
      <button aria-label="Menu">
        <svg
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 23.25V20.6667H26.25V23.25H3.75ZM3.75 16.7917V14.2083H26.25V16.7917H3.75ZM3.75 10.3333V7.75H26.25V10.3333H3.75Z"
            fill="#1D1B20"
          />
        </svg>
      </button>
      <h1 className={styles.div7}>{title}</h1>
    </header>
  );
};
