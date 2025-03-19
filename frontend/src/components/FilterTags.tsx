'use client';

import React from 'react';
import styles from './DiscussionBoard.module.css';

interface FilterTagsProps {
  tags: string[];
  activeTag?: string;
  onTagSelect?: (tag: string) => void;
}

const FilterTags: React.FC<FilterTagsProps> = ({
  tags,
  activeTag,
  onTagSelect,
}) => {
  return (
    <div className={styles.filterContainer}>
      {tags.map((tag, index) => (
        <button
          key={index}
          className={styles.filterTag}
          onClick={() => onTagSelect && onTagSelect(tag)}
          aria-pressed={activeTag === tag}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterTags;
