import React from 'react';

interface CategoryCardProps {
  title: string;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, className }) => {
  return (
    <button className={className} aria-label={title}>
      {title}
    </button>
  );
};

export default CategoryCard;
