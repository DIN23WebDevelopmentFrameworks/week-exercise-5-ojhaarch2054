
import React from 'react';
import { IRecipe } from './Types';

interface IRecipeProps {
  recipeData: IRecipe;
}

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
  return (
    <div className="recipe-box">
      <h2>{recipeData.name}</h2>
      <p><strong>Ingredients:</strong> {recipeData.ingredients.join(', ')}</p>
      <p><strong>Instructions:</strong> {recipeData.instructions.join(' ')}</p>
    </div>
  );
};

export default Recipe;