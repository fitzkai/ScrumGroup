'use client';

import React, { useState } from 'react';
import styles from './DiscussionBoard.module.css';
import StatusBar from './StatusBar';
import Header from './Header';
import SearchBar from './SearchBar';
import FilterTags from './FilterTags';
import DiscussionPost from './DiscussionPost';
import BottomIndicator from './BottomIndicator';
import { useNavigate } from 'react-router-dom';

const DiscussionBoard: React.FC = () => {
  const [activeTag, setActiveTag] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filterTags = ['popular', 'recent', 'trending', 'Catholicism'];

  const handleTagSelect = (tag: string) => {
    setActiveTag(tag);
    // Here you would typically filter posts based on the selected tag
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Here you would typically filter posts based on the search query
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleReply = (username: string) => {
    // Handle reply to a post
    console.log(`Reply to ${username}`);
  };

  return (
    <main className={styles.container}>
      <StatusBar />

      <section className={styles.mainContent}>
        <Header title="Discussion Board" onBackClick={handleBackClick} />

        <SearchBar onSearch={handleSearch} />

        <FilterTags
          tags={filterTags}
          activeTag={activeTag}
          onTagSelect={handleTagSelect}
        />

        <div className={styles.postsContainer}>
          <DiscussionPost
            username="SisterMason22"
            content={`"Hey everyone! I had a conversation with someone about the difference between the Trinity (as understood in Catholicism) and the Godhead (as taught in our faith). I explained that we believe the Father, Son, and Holy Ghost are separate beings, but they referenced the Nicene Creed and some Bible verses that seem to support their view. How would you approach this discussion with respect and clarity?"`}
            onReply={() => handleReply('SisterMason22')}
          />

          <DiscussionPost
            username="ElderParker16"
            content={`I've been learning about Hinduism and how it emphasizes karma, dharma, and reincarnation. Their scriptures, like the Bhagavad Gita, teach devotion and righteousness. What's a good way to respectfully start a conversation with a Hindu friend about their beliefs? -- SisterMiller17: "Asking about their traditions, like Diwali, is a great way to connect!"`}
            onReply={() => handleReply('ElderParker16')}
          />
        </div>
      </section>

      <BottomIndicator />
    </main>
  );
};

export default DiscussionBoard;
