import axios from "axios";

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Create an axios instance with default settings
const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: GITHUB_API_KEY
    ? { Authorization: `token ${GITHUB_API_KEY}` }
    : {},
});

// Function to fetch a GitHub user
export async function fetchGitHubUser(username) {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
}
