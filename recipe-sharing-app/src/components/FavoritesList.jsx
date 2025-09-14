import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const FavoritesList = () => {
  // Get the list of favorite recipe objects by mapping favorite IDs to actual recipe data
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((recipe) => recipe.id === id))
  );

  // Access the toggleFavorite action to add/remove recipes from favorites
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        // Show this message if no favorites exist
        <p>No favorites yet. Add some from the recipe list!</p>
      ) : (
        favorites.map((recipe) => (
          <div
            key={recipe.id}
            style={{ borderBottom: "1px solid #ccc", marginBottom: "1rem" }}
          >
            {/* Recipe title and description */}
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>

            {/* Link to recipe details page (handled by react-router-dom) */}
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>

            {/* Button to remove this recipe from favorites using toggleFavorite */}
            <button onClick={() => toggleFavorite(recipe.id)} style={{ marginLeft: "1rem" }}>
              ★ Remove Favorite
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
