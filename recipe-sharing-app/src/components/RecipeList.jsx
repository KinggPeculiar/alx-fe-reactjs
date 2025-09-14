import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes) || [];
  const searchTerm = useRecipeStore((state) => state.searchTerm) || "";
  const favorites = useRecipeStore((state) => state.favorites) || [];
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);

  // Derived filtered recipes
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>All Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        filteredRecipes.map((recipe) => {
          const isFavorite = favorites.includes(recipe.id);
          return (
            <div key={recipe.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "1rem" }}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipes/${recipe.id}`}>View Details</Link>
              <button onClick={() => toggleFavorite(recipe.id)} style={{ marginLeft: "1rem" }}>
                {isFavorite ? "★ Remove Favorite" : "☆ Add to Favorites"}
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RecipeList;
