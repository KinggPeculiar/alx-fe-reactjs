const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function fetchGitHubUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
            Authorization: `token ${GITHUB_API_KEY}`, //if API key is required
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch rerpos");
    }
    return response.json();
}