# 🚀 BeyondChats – Full Stack Assignment

Hi! 👋  
This repository contains my submission for the **Full Stack Web Developer Intern** assignment at **BeyondChats**.

The objective of this project was to build an **end-to-end content automation system** — starting from scraping blog articles, enhancing them automatically using competitor analysis, and finally presenting everything in a clean, modern frontend dashboard.

To keep the solution organized and easy to understand, the project is divided into **three well-defined phases**.

---

## 🔍 What This Project Does

In simple terms, this system:

- Scrapes blog articles from the BeyondChats website  
- Stores them in a database using structured REST APIs  
- Automatically enhances articles by comparing them with top Google search results  
- Displays both original and AI-enhanced articles in a responsive React dashboard  

---

## 📁 Project Structure

beyondchats-assignment/
├── backend/ # Express + MongoDB APIs
├── automation/ # Article enhancement pipeline
├── frontend/ # React dashboard
├── README.md
└── .gitignore


---

## ⚙️ Phase 1: Backend (Node.js + MongoDB)

This phase handles **data scraping, storage, and API management**.

### ✅ What’s Implemented
- Scrapes the oldest articles from the BeyondChats blog
- Stores article data in MongoDB
- Provides complete CRUD APIs for articles
- Supports updating articles after the automation process runs

### 🛠️ Tech Stack
- Node.js  
- Express.js  
- MongoDB & Mongoose  
- Axios  
- Cheerio  
- dotenv  

### 📡 API Endpoints

| Method | Endpoint | Purpose |
|------|---------|---------|
| POST | `/api/articles/scrape` | Scrape & store articles |
| GET | `/api/articles` | Fetch all articles |
| GET | `/api/articles/:id` | Fetch a single article |
| POST | `/api/articles` | Create an article |
| PUT | `/api/articles/:id` | Update an article |
| DELETE | `/api/articles/:id` | Delete an article |

### ▶️ Run Backend Locally

```bash
cd backend
npm install
npm run dev
