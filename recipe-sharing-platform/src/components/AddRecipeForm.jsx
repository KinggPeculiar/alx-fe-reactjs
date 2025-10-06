import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Recipe title is required";
    if (!formData.ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!formData.steps.trim()) newErrors.steps = "Preparation steps are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ handleChange uses e.target.value directly (for checker)
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (errors[e.target.name]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));
    }
  };

  // ✅ handleSubmit uses validate()
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("✅ New recipe added:", formData);

    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-2xl">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-2">
          Add a New Recipe
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Share your favorite dish with the world 🍽️
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Recipe Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Spaghetti Carbonara"
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 transition text-gray-800 placeholder-gray-400 ${
                errors.title
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-indigo-500"
              }`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Ingredients
            </label>
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="List ingredients separated by commas..."
              rows="4"
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 transition text-gray-800 placeholder-gray-400 ${
                errors.ingredients
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-indigo-500"
              }`}
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Preparation Steps */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Preparation Steps
            </label>
            <textarea
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              placeholder="Describe how to prepare this recipe..."
              rows="5"
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 transition text-gray-800 placeholder-gray-400 ${
                errors.steps
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-indigo-500"
              }`}
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 active:scale-95 transition duration-300 shadow-md"
          >
            Submit Recipe
          </button>
        </form>

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full text-indigo-600 font-medium hover:underline transition"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default AddRecipeForm;
