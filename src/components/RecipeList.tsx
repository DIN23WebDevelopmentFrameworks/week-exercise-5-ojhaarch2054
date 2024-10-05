import React from 'react';
import { IRecipe } from './Types';

interface RecipeListProps {
  recipes: IRecipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;