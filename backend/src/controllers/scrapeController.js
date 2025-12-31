import axios from "axios";
import * as cheerio from "cheerio";

import Article from "../models/Article.js";
import { scrapeOldestArticles } from "../services/scraper.js";

export const scrapeAndStoreArticles = async (req, res) => {
  try {
    const articles = await scrapeOldestArticles();

    for (const item of articles) {
      const { data } = await axios.get(item.link);
      const $ = cheerio.load(data);

      const content = $("article").text().trim();

      await Article.create({
        title: item.title,
        originalContent: content,
      });
    }

    res.json({ message: "Articles scraped & stored successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Scraping failed" });
  }
};
