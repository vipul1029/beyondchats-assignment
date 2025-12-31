import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav className="navbar" initial={{ y: -30 }} animate={{ y: 0 }}>
      <h1>BeyondChats</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/about">About</Link>
      </div>
    </motion.nav>
  );
}
