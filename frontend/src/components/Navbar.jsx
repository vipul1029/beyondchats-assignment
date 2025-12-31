import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo / Brand */}
      <motion.div
        className="brand"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        BeyondChats
      </motion.div>

      {/* Navigation Links */}
      <div className="nav-links">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/articles" className="nav-link">
          Articles
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
      </div>
    </motion.nav>
  );
}
