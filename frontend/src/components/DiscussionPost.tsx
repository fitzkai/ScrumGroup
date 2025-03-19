'use client';

import React from 'react';
import styles from './DiscussionBoard.module.css';
import UserAvatar from './UserAvatar';

interface DiscussionPostProps {
  username: string;
  content: string;
  avatarUrl?: string;
  onReply?: () => void;
}

const DiscussionPost: React.FC<DiscussionPostProps> = ({
  username,
  content,
  avatarUrl,
  onReply,
}) => {
  return (
    <article className={styles.postCard}>
      <header className={styles.postHeader}>
        <UserAvatar username={username} imageUrl={avatarUrl} />
        <h2 className={styles.postUsername}>{username}</h2>
      </header>
      <p className={styles.postContent}>{content}</p>
      <button
        className={styles.replyButton}
        onClick={onReply}
        aria-label={`Reply to ${username}`}
      >
        reply
      </button>
    </article>
  );
};

export default DiscussionPost;
