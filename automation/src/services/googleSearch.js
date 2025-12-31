import axios from "axios";

const SERP_API_URL = "https://serpapi.com/search.json";

/**
 * Search Google and return top 2 non-BeyondChats article links
 */
export const searchCompetingArticles = async (query) => {
  try {
    const response = await axios.get(SERP_API_URL, {
      params: {
        q: query,
        engine: "google",
        api_key: process.env.SERPAPI_KEY,
        num: 5
      }
    });

    const results = response.data.organic_results || [];

    // filter out BeyondChats & pick top 2
    const links = results
      .map(r => r.link)
      .filter(
        link =>
          link &&
          !link.includes("beyondchats.com")
      )
      .slice(0, 2);

    return links;

  } catch (error) {
    console.error("SerpAPI error:", error.message);
    return [];
  }
};
