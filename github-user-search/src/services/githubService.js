// services/githubService.js
import axios from "axios";

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function searchUsers({ username, location, minRepos, page = 1 }) {
  try {
    // Construct query
    let query = "";
    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos}`;

    const response = await axios.get("https://api.github.com/search/users", {
      headers: {
        Authorization: `token ${GITHUB_API_KEY}`,
      },
      params: {
        q: query.trim(),
        per_page: 10,
        page,
      },
    });

    return response.data; // contains items[], total_count, etc.
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
}
