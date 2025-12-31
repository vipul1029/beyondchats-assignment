# BeyondChats – Full Stack Assignment

This repository contains my submission for the **Full Stack Web Developer Intern** assignment at **BeyondChats**.

The project is divided into three phases:
1. Backend (Scraping + CRUD APIs)
2. Automation Script (Google Search + LLM-based content update)
3. Frontend (React-based UI)

---

## 📁 Project Structure

beyondchats-assignment/
├── backend/ # Node.js + Express + MongoDB APIs
├── automation/ # Node.js automation script (SerpAPI + scraping + LLM)
├── README.md
└── .gitignore

---

## ⚙️ Phase 1: Backend (Node.js + MongoDB)

### Features
- Scrapes the **5 oldest articles** from BeyondChats blog
- Stores articles in MongoDB
- Provides full **CRUD APIs** for articles

### Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- Axios
- Cheerio

### API Endpoints
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/articles/scrape` | Scrape & store articles |
| GET | `/api/articles` | Get all articles |
| GET | `/api/articles/:id` | Get article by ID |
| POST | `/api/articles` | Create article |
| PUT | `/api/articles/:id` | Update article |
| DELETE | `/api/articles/:id` | Delete article |

### Backend Setup
```bash
cd backend
npm install
npm run dev
