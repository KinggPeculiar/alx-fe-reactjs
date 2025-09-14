import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <h1>Recipe Sharing App</h1>

        {/* Main page */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          {/* Placeholder for recipe detail page */}
          <Route
            path="/recipes/:id"
            element={<div>Recipe Detail Page (To be implemented)</div>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
