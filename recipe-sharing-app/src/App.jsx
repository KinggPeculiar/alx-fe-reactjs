import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import RecipeDetail from "./components/RecipeDetail"; // new component

function App() {
  return (
    <Router>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <h1>Recipe Sharing App</h1>

        <Routes>
          {/* Home Page with search and list */}
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <RecipeList />
                <AddRecipeForm />
              </>
            }
          />

          {/* Dynamic recipe detail page */}
          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
