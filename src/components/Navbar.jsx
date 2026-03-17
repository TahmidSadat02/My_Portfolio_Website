import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import { navLinks } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const prefersReducedMotion = useReducedMotion();

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
      initial={prefersReducedMotion ? false : { y: "-100%", opacity: 0 }}
      animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
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
          <span className="!text-white">Sadat</span>
          <span className="!text-white">.</span>
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
                      ? "!text-white"
                      : "!text-white/80 hover:!text-white"
                  }`}
                >
                  {name}
                </a>
                {/* Active Dot */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-dot"
                    className="absolute -bottom-3 w-1.5 h-1.5 rounded-full bg-white"
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
          className="hidden md:inline-flex relative overflow-hidden items-center gap-2 pl-5 pr-1.5 py-1.5 text-[14px] font-semibold rounded-full
            !text-white border border-white/35 bg-gradient-to-b from-white/12 via-black/80 to-black/95
            shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.45)]
            hover:border-white/60 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_10px_28px_rgba(0,0,0,0.55)]
            transition-all duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="pointer-events-none absolute inset-x-2 top-0 h-[45%] rounded-full bg-gradient-to-b from-white/35 to-transparent" />
          Get in touch
          <span className="w-7 h-7 rounded-full bg-white/95 !text-black flex items-center justify-center ml-1 border border-black/15 shadow-inner shadow-black/20">
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
