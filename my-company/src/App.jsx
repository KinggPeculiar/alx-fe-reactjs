import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import './App.css'

function App() {

  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />
      
      {/* Route definitions */}
      <Routes>
        {/* Each path matches a component */}
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Services />} />
        <Route path="/" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App
