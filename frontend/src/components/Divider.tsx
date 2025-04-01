'use client';
import React from 'react';
import styles from './Menu.module.css';

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className = styles.divider }) => {
  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a778d4db1569b0d912557c418a5eb11b2be130d3be78e564f238ec726f4da030?placeholderIfAbsent=true&apiKey=401ab768922c453b98ebcf2dec4c4d64"
      className={className}
      alt="Divider"
    />
  );
};

export default Divider;
