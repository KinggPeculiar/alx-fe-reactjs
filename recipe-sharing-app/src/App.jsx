import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import './App.css'


function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Recipe Sharing App</h1>
      
      {/* Search Bar at the top */}
      <SearchBar />
      
      {/* Recipe List */}
      <RecipeList />

      {/* Add Recipe Form */}
      <AddRecipeForm />
    </div>
  );
}

export default App;
