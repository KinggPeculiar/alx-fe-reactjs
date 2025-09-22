import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { fetchGitHubUser } from "./services/githubApi"
import Header from './components/Header'

import './App.css'

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchGitHubUser("your-github-username")
    .then(data => setRepos(data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>
        My GitHub Repos
      </h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );

}

export default App
