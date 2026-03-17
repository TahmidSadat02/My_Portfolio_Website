import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import { navLinks } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 z-50 w-full max-w-full transition-all duration-500 ${
        scrolled
          ? "top-0 bg-dark-900/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "top-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-5 flex items-center justify-between lg:translate-x-4">
        {/* Logo — clean & minimal */}
        <motion.a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
          className="text-2xl font-bold tracking-tight"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="text-white">Alex</span>
          <span className="text-[#00e5ff]">.</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((name) => {
            const href = `#${name.toLowerCase()}`;
            const isActive = activeSection === name.toLowerCase();
            return (
              <div key={name} className="flex flex-col items-center justify-center relative">
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleClick(href); }}
                  className={`relative text-[13px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {name}
                </a>
                {/* Active Dot */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-dot"
                    className="absolute -bottom-3 w-1.5 h-1.5 rounded-full bg-[#00e5ff]"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleClick("#contact"); }}
          className="hidden md:inline-flex items-center gap-2 pl-4 pr-1 py-1 text-[14px] font-bold
            bg-white text-black rounded-full
            hover:bg-gray-100 transition-all duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Get in touch
          <span className="w-7 h-7 rounded-full bg-[#e86a24] text-white flex items-center justify-center ml-1">
            <HiArrowRight className="text-xs" />
          </span>
        </motion.a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-xl text-white p-2"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-900/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-8 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all [font-family:'Poppins',sans-serif] ${
                    activeSection === link.href.replace("#", "")
                      ? "text-white bg-white/5"
                      : "text-gray-500 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
