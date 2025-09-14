import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  // Get current recommendations and the action to generate them
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  return (
    <div>
      <h2>Recommended for You</h2>
      {/* Button triggers generating new recommendations */}
      <button onClick={generateRecommendations}>Get Recommendations</button>

      {/* Show message if no recommendations */}
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
