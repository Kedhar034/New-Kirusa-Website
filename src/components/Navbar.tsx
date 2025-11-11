import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import kirusawhite from "../res/kirusawhite.png";

export const Navbar: React.FC = () => {
  const navItems = ["Home", "About", "Products", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="backdrop-blur-lg bg-black/95 border-b border-[#1a1a1a] sticky top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        {/* 🟠 Logo */}
        <motion.a
          href="/"
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.img
            src={kirusawhite}
            alt="KirusaAI Logo"
            // 🔥 Enlarged Logo with stronger glow
            className="h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,77,77,0.6)]"
            whileHover={{
              scale: 1.15,
              filter: "drop-shadow(0 0 25px rgba(255,77,77,0.9))",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        {/* 🟠 Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-10 text-white font-medium tracking-wide">
          {navItems.map((item) => (
            <motion.li key={item} className="relative group hover:scale-105 cursor-pointer">
              <motion.a
                href={`/${item.toLowerCase()}`}
                className="transition-colors duration-300 hover:text-[#ff4d4d]"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
              <motion.span
                className="absolute left-0 -bottom-1.5 h-0.5 bg-[#ff4d4d] w-0 group-hover:w-full transition-all duration-300 ease-out"
              ></motion.span>
            </motion.li>
          ))}
        </ul>

        {/* 🟠 CTA Button */}
        {/* <motion.button
          whileHover={{
            scale: 1.08,
            backgroundColor: "#ff4d4d",
            boxShadow: "0 0 20px rgba(255,77,77,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block ml-8 px-5 py-2 rounded-full bg-[#ff4d4d]/90 text-white font-semibold shadow-lg hover:bg-[#ff4d4d] transition-all duration-300"
        >
          Get Started
        </motion.button> */}

        {/* 🟠 Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* 🟠 Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#1a1a1a]"
          >
            <ul className="flex flex-col items-center space-y-6 py-6 text-white text-lg font-medium">
              {navItems.map((item) => (
                <motion.li key={item} onClick={() => setMenuOpen(false)}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-[#ff4d4d] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ff4d4d",
                  boxShadow: "0 0 20px rgba(255,77,77,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 rounded-full bg-[#ff4d4d]/90 text-white font-semibold shadow-lg hover:bg-[#ff4d4d] transition-all duration-300"
              >
                Get Started
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
