// src/services/githubService.js
import axios from "axios";

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: GITHUB_API_KEY ? { Authorization: `token ${GITHUB_API_KEY}` } : {},
});

export async function fetchUserData(username) {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    // Axios provides status + data under error.response
    console.error(
      "GitHub API error:",
      error.response?.status,
      error.response?.data
    );
    throw error;
  }
}
