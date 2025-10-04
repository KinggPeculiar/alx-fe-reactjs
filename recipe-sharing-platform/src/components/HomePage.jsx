import { useState, useEffect } from "react";
import recipeData from "../data.json"; // relative path

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto flex flex-col items-center justify-center">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold mb-10 text-center text-indigo-600">
          Welcome to Recipe Finder
        </h1>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="bg-white border rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
                >
                    {/* Recipe Image */}
                    <img 
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    {/* Card Content */}
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                            {recipe.title}
                        </h2>
                        <p className="text-gray-600 text-sm">
                            {recipe.summary}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default HomePage;
