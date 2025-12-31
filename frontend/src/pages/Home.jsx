import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1> Blog Enhancement Platform</h1>
          <p>
            Automatically scrape, analyze, and enhance blog content by comparing
            it with top-ranking Google articles using intelligent automation.
          </p>

          <Link to="/articles" className="cta">
            Explore Articles
          </Link>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <motion.div className="feature-card" whileHover={{ y: -6 }}>
          <h3> Smart Scraping</h3>
          <p>
            Automatically extracts the oldest BeyondChats blog articles and
            stores them in a structured database.
          </p>
        </motion.div>

        <motion.div className="feature-card" whileHover={{ y: -6 }}>
          <h3> Google Comparison</h3>
          <p>
            Uses Google Search results to identify competing articles and
            understand ranking patterns.
          </p>
        </motion.div>

        <motion.div className="feature-card" whileHover={{ y: -6 }}>
          <h3> AI Enhancement</h3>
          <p>
            Enhances original content by improving structure, clarity, and
            relevance while preserving intent.
          </p>
        </motion.div>
      </section>

      {/* WORKFLOW */}
      <section className="workflow">
        <h2>How It Works</h2>
        <ol>
          <li>Scrape articles from BeyondChats</li>
          <li>Search competing Google articles</li>
          <li>Extract high-quality content</li>
          <li>Enhance original article using AI</li>
          <li>Publish updated content via APIs</li>
        </ol>
      </section>

   {/* FINAL CTA */}
<section className="final-cta">
  <motion.div
    className="cta-content"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2>Designed as a Real-World Full-Stack System</h2>
    <p>
      This project showcases how modern teams automate content workflows 
     combining scraping, search intelligence, AI-assisted rewriting, and a
      polished frontend experience.
    </p>

    <div className="cta-actions">
      <Link to="/articles" className="cta primary">
        View Articles
      </Link>
      <Link to="/about" className="cta secondary">
        About This Project
      </Link>
    </div>
  </motion.div>
</section>

    </>
  );
}
