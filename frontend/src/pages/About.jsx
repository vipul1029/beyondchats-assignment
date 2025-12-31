import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <section className="page-header">
        <h2>About This Project</h2>
        <p>
          A full-stack assignment built to demonstrate real-world scraping,
          automation, and modern frontend development.
        </p>
      </section>

      {/* Main Content */}
      <section className="about">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3> Project Objective</h3>
          <p>
            The goal of this assignment was to simulate a real content
            optimization workflow starting from scraping articles, enriching
            them using top-ranking references, and finally presenting them in a
            clean, professional dashboard.
          </p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <h3> What Was Built</h3>
          <ul>
            <li>
              <strong>Backend APIs:</strong> Node.js + Express APIs to scrape,
              store, and manage blog articles.
            </li>
            <li>
              <strong>Automation Pipeline:</strong> A script that finds
              competing Google articles, scrapes content, and updates original
              posts using LLM-generated enhancements.
            </li>
            <li>
              <strong>Frontend Dashboard:</strong> A React-based interface to
              view original and updated articles along with references.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3> Tech Stack</h3>
          <p>
            This project was built using modern, production-ready technologies:
          </p>
          <ul>
            <li>Frontend: React, Vite, Framer Motion</li>
            <li>Backend: Node.js, Express, MongoDB</li>
            <li>Scraping: Axios, Cheerio</li>
            <li>Search: SerpAPI (Google Search)</li>
            <li>Deployment: Vercel</li>
          </ul>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65 }}
        >
          <h3> Why This Matters</h3>
          <p>
            This assignment reflects how modern teams automate content
            improvement pipelines combining scraping, search ranking signals,
            AI-assisted writing, and clean UI presentation.
          </p>
          <p>
            Every part of this system was designed with scalability,
            readability, and maintainability in mind.
          </p>
        </motion.div>
      </section>

    
      <motion.section
        className="final-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Built with passion & attention to detail</h2>
        <p>
          Thank you for taking the time to review this submission.
        </p>
      </motion.section>
    </motion.div>
  );
}
