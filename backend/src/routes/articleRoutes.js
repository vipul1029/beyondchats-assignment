import express from "express";

import {
  createArticle,
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle
} from "../controllers/articleController.js";

import { scrapeAndStoreArticles } from "../controllers/scrapeController.js";

const router = express.Router();

router.post("/", createArticle);
router.get("/", getArticles);
router.get("/:id", getArticleById);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);
router.post("/scrape", scrapeAndStoreArticles);

export default router;
