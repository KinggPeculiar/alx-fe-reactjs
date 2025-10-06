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

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!formData.steps.trim()) newErrors.steps = "Steps are required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear specific error when user starts typing again
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("New recipe added:", formData);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-2xl p-8">
        <h2 className="text-3xl font-extrabold text-indigo-600 text-center mb-6">
          Add a New Recipe
        </h2>

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
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            {errors.title && (
              <p className="text-red-600 text-sm mt-1">{errors.title}</p>
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
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            {errors.ingredients && (
              <p className="text-red-600 text-sm mt-1">{errors.ingredients}</p>
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
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            {errors.steps && (
              <p className="text-red-600 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Submit Recipe
          </button>
        </form>

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-4 w-full text-indigo-600 font-medium hover:underline"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default AddRecipeForm;
