import React from 'react';

interface RecipeTagListProps {
  tags: string[];
  onTagClick: (tag: string) => void;
}

const RecipeTagList: React.FC<RecipeTagListProps> = ({ tags, onTagClick }) => {
  return (
    <div>
      {tags.map((tag) => (
        <button key={tag} onClick={() => onTagClick(tag)}>
          {tag}
        </button>
      ))}
    </div>
  );
};

export default RecipeTagList;