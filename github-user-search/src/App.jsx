import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { fetchGitHubUser } from "./services/githubApi"
import Search from './components/Search'
import Header from './components/Header'

import './App.css'

function App() {
  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App
