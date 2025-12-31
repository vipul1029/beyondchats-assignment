import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="footer"
    >
      <p>
        Built by <strong>Vipul Kumar</strong> • Full Stack Developer
      </p>
      <div className="footer-links">
        <a href="https://github.com/vipul1029" target="_blank">GitHub</a>
        <a href="https://portfolio-vipul1007s-projects.vercel.app/" target="_blank">
          Portfolio
        </a>
      </div>
    </motion.footer>
  );
}
