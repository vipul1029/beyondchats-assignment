import axios from "axios";
import * as cheerio from "cheerio";

/**
 * Scrapes main article text from a given URL
 */
export const scrapeArticleContent = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const $ = cheerio.load(data);

    // remove junk
    $("script, style, nav, footer, header").remove();

    // try common article containers
    const content =
      $("article").text() ||
      $("main").text() ||
      $("body").text();

    return content
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 4000); // limit size

  } catch (error) {
    console.error(" Content scrape failed:", url);
    return "";
  }
};
