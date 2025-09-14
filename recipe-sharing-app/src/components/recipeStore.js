// recipeStore.js
import { create } from "zustand";

const useRecipeStore = create((set) => ({
  // ----------------------------
  // Recipes
  // ----------------------------
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // ----------------------------
  // Search
  // ----------------------------
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),

  // ----------------------------
  // Favorites
  // ----------------------------
  favorites: [],
  toggleFavorite: (recipeId) =>
    set((state) =>
      state.favorites.includes(recipeId)
        ? { favorites: state.favorites.filter((id) => id !== recipeId) }
        : { favorites: [...state.favorites, recipeId] }
    ),

  // ----------------------------
  // Recommendations
  // ----------------------------
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
