import dotenv from "dotenv";
import axios from "axios";

import { searchCompetingArticles } from "./services/googleSearch.js";
import { scrapeArticleContent } from "./services/contentScraper.js";
import { generateUpdatedArticle } from "./services/llmFormatter.js";

dotenv.config();

async function runAutomation() {
  try {
    console.log(" Starting automation pipeline...");

    // 1. Fetch articles from backend
    const { data: articles } = await axios.get(process.env.BACKEND_API);

    if (!articles.length) {
      console.log(" No articles found");
      return;
    }

    for (const article of articles) {
      console.log(`\n Processing: ${article.title}`);

      // 2. Google search
      const links = await searchCompetingArticles(article.title);

      if (links.length < 2) {
        console.log(" Not enough competing articles, skipping...");
        continue;
      }

      // 3. Scrape competitor content
      const contents = [];
      for (const link of links) {
        const text = await scrapeArticleContent(link);
        contents.push(text);
      }

      // 4. Generate updated article
      const updatedContent = generateUpdatedArticle(
        article.title,
        contents,
        links
      );

      // 5. Update article in backend
      await axios.put(
        `${process.env.BACKEND_API}/${article._id}`,
        {
          updatedContent,
          references: links,
          isUpdated: true
        }
      );

      console.log(" Article updated successfully");
    }

    console.log("\n Automation completed");

  } catch (error) {
    console.error(" Automation failed:", error.message);
  }
}

runAutomation();
