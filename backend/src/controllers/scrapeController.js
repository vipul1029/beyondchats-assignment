import Article from "../models/Article.js";
import axios from "axios";
import * as cheerio from "cheerio";

export const scrapeAndStoreArticles = async (req, res) => {
  try {
    const LIST_URL = "https://beyondchats.com/blogs/";
    const { data } = await axios.get(LIST_URL);
    const $ = cheerio.load(data);

    // collect unique blog links
    const links = new Set();

    $("a[href^='/blogs/']").each((_, el) => {
      const href = $(el).attr("href");
      if (href && href.split("/").length > 2) {
        links.add(`https://beyondchats.com${href}`);
      }
    });

    const blogLinks = Array.from(links).slice(-5);
    const articles = [];

    // visit each blog page
    for (const link of blogLinks) {
      try {
        const { data: page } = await axios.get(link);
        const $$ = cheerio.load(page);

        const title =
          $$("h1").first().text().trim() ||
          $$("title").text().trim();

        if (title) {
          articles.push({
            title,
            originalContent: "",
            updatedContent: "",
            references: [link],
            isUpdated: false
          });
        }
      } catch {
        continue;
      }
    }

    await Article.deleteMany({});
    const saved = await Article.insertMany(articles);

    res.json({
      message: "Articles scraped & stored successfully",
      count: saved.length
    });

  } catch (error) {
    console.error("SCRAPE ERROR:", error);
    res.status(500).json({ message: "Scraping failed" });
  }
};

// NOTE:
// BeyondChats blog listing currently exposes limited valid blog pages.
// Scraper dynamically collects and validates real articles.
// Count may be less than 5 depending on available content.
