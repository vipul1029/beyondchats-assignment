import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2>About This Project</h2>

      <p>
        This project was built as part of the BeyondChats Full Stack Developer
        Intern assignment to demonstrate real-world engineering skills across
        backend systems, automation pipelines, and frontend development.
      </p>

      <h3>Backend</h3>
      <p>
        A Node.js + Express backend scrapes BeyondChats blogs, stores them in
        MongoDB, and exposes secure CRUD APIs.
      </p>

      <h3>Automation</h3>
      <p>
        An automation script searches Google for competing articles, scrapes
        relevant content, and enhances the original article using AI-assisted
        formatting and structuring.
      </p>

      <h3>Frontend</h3>
      <p>
        A modern React application displays original and updated articles with
        animations, clean UI, and a responsive layout.
      </p>

      <p>
        The goal was to simulate a real product workflow rather than a simple
        demo.
      </p>
    </motion.div>
  );
}
