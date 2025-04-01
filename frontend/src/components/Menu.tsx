'use client';
import * as React from 'react';
import styles from './Menu.module.css';
import { useNavigate } from "react-router-dom";

// StatusBar component for the top section
const StatusBar = () => {
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

// CircularIcon component for the blue circular section
const CircularIcon = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.div2}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/88d6defdbcd41d7fd88a9ce8b38eb31f4513a12630504acfbb9d950719836a1a?placeholderIfAbsent=true&apiKey=401ab768922c453b98ebcf2dec4c4d64"
        className={styles.img3}
        alt="Menu icon"
        onClick={() => navigate(-1)}
      />
    </div>
  );
};

// Define the props type
interface MenuItemProps {
  iconSrc: string;
  text: string;
  className?: string; // Optional prop
  imgClassName?: string; // Optional prop
}

// MenuItem component for each menu option
const MenuItem: React.FC<MenuItemProps> = ({ iconSrc, text, className, imgClassName }) => {
  const navigate = useNavigate();

  return (
    <nav className={className}>
      <img src={iconSrc} className={imgClassName} alt={`${text} icon`}/>
      <button className={styles[text.toLowerCase() as keyof typeof styles]} onClick={() => navigate(`/${text.toLowerCase()}`)}>{text}</button>
    </nav>
  );
};


// Define the props type
interface DividerProps {
  className?: string; // Optional className prop
}

// Divider component for the horizontal lines
const Divider: React.FC<DividerProps> = ({ className }) => {
  return <hr className={className} />;
};

// Main Menu component
function Menu() {
  return (
    <section className={styles.menu}>
      <StatusBar />

      <div className={styles.div}>
        <CircularIcon />

<br />
<br />
        <main className={styles.div3}>
          <MenuItem
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b134e21fac10a709e12dd07d4f07694299d5ca5c3b53940aa0469fc6dd2198c0?placeholderIfAbsent=true&apiKey=401ab768922c453b98ebcf2dec4c4d64"
            text="SEARCH"
            className={styles.div4}
            imgClassName={styles.img4}
          />

          <Divider className={styles.img5} />

          <MenuItem
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/cd6f4d53b50312308e95c838cbd5083d740eff2040e4efc2a0ec39a401f20ccc?placeholderIfAbsent=true&apiKey=401ab768922c453b98ebcf2dec4c4d64"
            text="MAP"
            className={styles.div5}
            imgClassName={styles.img6}
          />

          <Divider className={styles.img7} />

          <MenuItem
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/153e23238f9840133cd8013501ca44096f73cd7e89189831a1c810324a69892d?placeholderIfAbsent=true&apiKey=401ab768922c453b98ebcf2dec4c4d64"
            text="RELIGIONS"
            className={styles.div6}
            imgClassName={styles.img8}
          />

          <div className={styles.homeIndicator} />
        </main>
      </div>
    </section>
  );
}

export default Menu;