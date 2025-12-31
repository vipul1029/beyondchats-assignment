import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

async function runAutomation() {
  try {
    console.log("🚀 Starting automation...");

    // Fetch articles from backend
    const response = await axios.get(process.env.BACKEND_API);
    const articles = response.data;

    if (!articles || articles.length === 0) {
      console.log("❌ No articles found");
      return;
    }

    console.log(`✅ Fetched ${articles.length} articles`);
    console.log("Sample article title:", articles[0].title);

  } catch (error) {
    console.error("❌ Automation failed:", error.message);
  }
}

runAutomation();
