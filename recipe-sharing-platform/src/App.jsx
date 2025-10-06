import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Recipe Details Page */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />

          {/* Add New Recipe Page */}
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
