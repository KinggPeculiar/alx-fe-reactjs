import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams(); // get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe with the matching ID
    const selectedRecipe = recipeData.find(
      (item) => item.id === parseInt(id, 10)
    );
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10 text-xl">Recipe not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
      />

      {/* Title & Summary */}
      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <p className="text-gray-600 mb-6">{recipe.summary}</p>

      {/* Ingredients */}
      {recipe.ingredients && (
        <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Instructions */}
      {recipe.instructions && (
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
