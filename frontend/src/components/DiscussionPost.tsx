'use client';
import React from 'react';
import styles from './DiscussionBoard.module.css';

interface DiscussionPostProps {
  username: string;
  content: string;
  timePosted: string; // Assuming this is an ISO string
}

const DiscussionPost: React.FC<DiscussionPostProps> = ({
  username,
  content,
  timePosted,
}) => {
  // Format the time manually
  const date = new Date(timePosted);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

  return (
    <article className={styles.postCard}>
      <header className={styles.postHeader}>
        <h2 className={styles.postUsername}>{username}</h2>
      </header>
      <p className={styles.postContent}>{content}</p>
      <footer className={styles.postFooter}>
        <p className={styles.postTime}>{formattedTime}</p>{' '}
        {/* Show formatted time */}
      </footer>
    </article>
  );
};

export default DiscussionPost;
