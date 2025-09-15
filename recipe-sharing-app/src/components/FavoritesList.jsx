import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const FavoritesList = () => {
  // grab favorites (ids) and recipes separately
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);

  // map IDs to full recipe objects
  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter((recipe) => recipe); // filter out any undefined

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet. Add some from the recipe list!</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{ borderBottom: "1px solid #ccc", marginBottom: "1rem" }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            <button
              onClick={() => toggleFavorite(recipe.id)}
              style={{ marginLeft: "1rem" }}
            >
              ★ Remove Favorite
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;