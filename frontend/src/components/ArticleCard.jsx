import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ArticleCard({ article }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="card"
      variants={cardVariants}
      whileHover={{
        scale: 1.015,
        boxShadow: "0px 25px 50px rgba(79,70,229,0.25)",
      }}
      transition={{ duration: 0.35 }}
    >
      <div className="card-header">
        <h3>{article.title}</h3>
        <span className={`badge ${article.isUpdated ? "updated" : "original"}`}>
          {article.isUpdated ? "Updated" : "Original"}
        </span>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="content"
          >
            <p>{article.updatedContent || "No updated content available."}</p>
          </motion.div>
        ) : (
          <motion.p
            key="preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="preview"
          >
            {(article.updatedContent || "").slice(0, 420)}...
          </motion.p>
        )}
      </AnimatePresence>

      {article.updatedContent && (
        <button className="toggle-btn" onClick={() => setOpen(!open)}>
          {open ? "Show less ↑" : "Read full article ↓"}
        </button>
      )}

      {article.references?.length > 0 && (
        <div className="refs">
          <strong>References</strong>
          <ul>
            {article.references.map((ref, i) => (
              <li key={i}>
                <a href={ref} target="_blank" rel="noreferrer">
                  {ref}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
