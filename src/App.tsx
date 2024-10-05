import React, { useState, useEffect } from 'react';
import RecipeTagList from './components/RecipeTagList';
import RecipeList from './components/RecipeList';
import { IRecipe } from './components/Types';

const App: React.FC = () => {
  //for storing recipe tags
  const [tags, setTags] = useState<string[]>([]);
  //for storing recipie
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  //for storing the selected tags
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  //useEffect hook to fetch tags when page start
  useEffect(() => {
    const fetchTags = async () => {
      const response = await fetch('https://dummyjson.com/recipes/tags');
      const data = await response.json();
      setTags(data);
    };

    fetchTags();
  }, []);

  //function to handle tag click
  const handleTagClick = async (tag: string) => {
    setSelectedTag(tag);
    const response = await fetch(`https://dummyjson.com/recipes/tag/${tag}`);
    const data = await response.json();
    setRecipes(Array.isArray(data.recipes) ? data.recipes : []);
  };

  //function to handle back btn
  const handleBackClick = () => {
    setSelectedTag(null);
    setRecipes([]);
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {selectedTag ? (
        <div>
          <button onClick={handleBackClick}>Back to Tags</button>
          <RecipeList recipes={recipes} />
        </div>
      ) : (
        <RecipeTagList tags={tags} onTagClick={handleTagClick} />
      )}
    </div>
  );
};

export default App;