import axios from "axios";
//import cheerio from "cheerio";
import * as cheerio from "cheerio";

/**
 * Scrapes 5 oldest articles from BeyondChats blog
 */
export const scrapeOldestArticles = async () => {
  const BASE_URL = "https://beyondchats.com/blogs/";

  const { data } = await axios.get(BASE_URL);
  const $ = cheerio.load(data);

  const articles = [];

  // Select blog cards (structure-based, may slightly vary)
  const blogCards = $(".blog-card");

  // Take last 5 (oldest)
  blogCards.slice(-5).each((i, el) => {
    const title = $(el).find("h2").text().trim();
    const link = $(el).find("a").attr("href");

    if (title && link) {
      articles.push({
        title,
        link: link.startsWith("http")
          ? link
          : `https://beyondchats.com${link}`,
      });
    }
  });

  return articles;
};
