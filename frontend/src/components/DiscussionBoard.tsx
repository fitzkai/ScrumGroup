'use client';

import React, { useState } from 'react';
import styles from './DiscussionBoard.module.css';
import Header from './Header';
import SearchBar from './SearchBar';
import FilterTags from './FilterTags';
import DiscussionPost from './DiscussionPost';

const DiscussionBoard: React.FC = () => {
  const [activeTag, setActiveTag] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTags = ['popular', 'recent', 'trending', 'Catholicism'];

  const [posts] = useState([
    {
      username: 'SisterMason22',
      content:
        'Hey everyone! I had a conversation with someone about the difference between the Trinity (as understood in Catholicism) and the Godhead (as taught in our faith). I explained that we believe the Father, Son, and Holy Ghost are separate beings, but they referenced the Nicene Creed and some Bible verses that seem to support their view. How would you approach this discussion with respect and clarity?',
      tag: 'Catholicism',
    },
    {
      username: 'ElderParker16',
      content: `I've been learning about Hinduism and how it emphasizes karma, dharma, and reincarnation. Their scriptures, like the Bhagavad Gita, teach devotion and righteousness. What's a good way to respectfully start a conversation with a Hindu friend about their beliefs? -- SisterMiller17: "Asking about their traditions, like Diwali, is a great way to connect!"`,
      tag: 'trending',
    },
  ]);

  const handleTagSelect = (tag: string) => {
    setActiveTag(tag);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredPosts = posts.filter(
    (post) =>
      (post.username.toLowerCase().includes(searchQuery) ||
        post.content.toLowerCase().includes(searchQuery)) &&
      (activeTag === 'popular' || post.tag === activeTag)
  );

  const handleBackClick = () => {
    console.log('Navigate back');
  };

  return (
    <main className={styles.container}>
      <section className={styles.mainContent}>
        <Header title="Discussion Board" onBackClick={handleBackClick} />

        <SearchBar onSearch={handleSearch} />

        <FilterTags
          tags={filterTags}
          activeTag={activeTag}
          onTagSelect={handleTagSelect}
        />

        <div className={styles.postsContainer}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <DiscussionPost
                key={index}
                username={post.username}
                content={post.content}
              />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default DiscussionBoard;
