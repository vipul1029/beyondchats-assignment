BeyondChats – Full Stack Assignment 🚀

Hi! This repository contains my submission for the Full Stack Web Developer Intern assignment at BeyondChats.

The goal of this project was to build an end-to-end system that starts from scraping blog content, enhances it automatically using competitor analysis, and finally displays everything in a clean and usable frontend.

I’ve broken the solution into three clear parts to keep things organized and easy to understand.

🔍 What This Project Does

In simple terms, this project:

Scrapes blog articles from the BeyondChats website

Stores them in a database with proper APIs

Automatically improves articles by comparing them with top Google results

Displays both original and updated articles in a React dashboard

📁 Project Structure
beyondchats-assignment/
├── backend/        # Express + MongoDB APIs
├── automation/     # Article enhancement pipeline
├── frontend/       # React dashboard
├── README.md
└── .gitignore

⚙️ Phase 1: Backend (Node.js + MongoDB)

This part handles data collection and storage.

What’s implemented

Scrapes the oldest articles from the BeyondChats blog

Stores article data in MongoDB

Provides complete CRUD APIs

Supports updating articles after automation runs

Tech Used

Node.js

Express.js

MongoDB & Mongoose

Axios

Cheerio

dotenv

API Endpoints
Method	Endpoint	Purpose
POST	/api/articles/scrape	Scrape & store articles
GET	/api/articles	Get all articles
GET	/api/articles/:id	Get a single article
POST	/api/articles	Create an article
PUT	/api/articles/:id	Update an article
DELETE	/api/articles/:id	Delete an article
How to run backend locally
cd backend
npm install
npm run dev


Server runs on:

http://localhost:5000

🤖 Phase 2: Automation Script

This is the most interesting part of the assignment.

What it does

Fetches articles from the backend API

Searches Google for competing top-ranking articles (using SerpAPI)

Scrapes content from competitor blogs

Generates improved article content based on those sources

Updates the article in the database automatically

Adds reference links at the bottom of each updated article

Tech Used

Node.js

Axios

Cheerio

SerpAPI

dotenv

How to run automation
cd automation
npm install
node src/index.js


Note: You’ll need a valid SerpAPI key inside .env

🎨 Phase 3: Frontend (React)

The frontend displays everything in a clean and simple UI.

What you’ll see

List of all articles

Updated vs non-updated articles clearly visible

Article content along with reference links

Responsive layout

Tech Used

React (Vite)

JavaScript

Fetch API

Basic CSS

How to run frontend locally
cd frontend
npm install
npm run dev


Runs on:

http://localhost:5173

🌐 Live Demo & Repository

🔗 Live Frontend (Vercel)
https://beyondchats-assignment-five-liard.vercel.app/

🔗 GitHub Repository
https://github.com/vipul1029/beyondchats-assignment

🔄 Typical Flow

Start the backend server

Trigger article scraping using the API

Run the automation script to enhance articles

Open the frontend to view updated content

👤 About Me

Vipul Kumar
Aspiring Full Stack Developer with interests in MERN, automation, and problem solving.

🔗 Portfolio: https://portfolio-vipul1007s-projects.vercel.app/

🔗 GitHub: https://github.com/vipul1029