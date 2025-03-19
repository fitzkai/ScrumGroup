'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './DiscussionBoard.module.css';
import UserAvatar from './UserAvatar';
import { post } from '../types/post';

const DiscussionPost: React.FC<post> = ({ username, content, avatarUrl }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [replies, setReplies] = useState<string[]>([]);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const toggleReply = () => setIsReplying(!isReplying);

  const handleReplyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyText(e.target.value);
  };

useEffect(() => {
  if (textAreaRef.current) {
    const containerWidth = textAreaRef.current.parentElement?.offsetWidth || 0;
    const maxWidth = window.innerWidth * 0.9; // Maximum width as 90% of the viewport width (you can adjust this value)
    const textAreaWidth = Math.min(containerWidth * 0.99, maxWidth); // Use the smaller of 80% of the container width or maxWidth
    textAreaRef.current.style.width = `${textAreaWidth}px`;
  }
}, [replyText]);

  const handleSubmit = () => {
    if (replyText.trim()) {
      setReplies([...replies, replyText]);
      setReplyText('');
      setIsReplying(false);
    }
  };

  return (
    <article className={styles.postCard}>
      <header className={styles.postHeader}>
        <UserAvatar username={username} imageUrl={avatarUrl} />
        <h2 className={styles.postUsername}>{username}</h2>
      </header>
      <p className={styles.postContent}>{content}</p>
      <button className={styles.replyButton} onClick={toggleReply}>
        {isReplying ? 'Cancel' : 'Reply'}
      </button>

      {isReplying && (
        <div className={styles.replyContainer}>
          <textarea
            ref={textAreaRef}
            value={replyText}
            onChange={handleReplyChange}
            className={styles.replyInput}
            placeholder="Write your reply..."
            rows={1}
          ></textarea>
          <br />
          <button onClick={handleSubmit} className={styles.submitButton}>
            Submit
          </button>
        </div>
      )}

      {replies.length > 0 && (
        <div className={styles.repliesSection}>
          <h5>Replies:</h5>
          {replies.map((reply, index) => (
            <p key={index} className={styles.reply}>
              {reply}
            </p>
          ))}
        </div>
      )}
    </article>
  );
};

export default DiscussionPost;
