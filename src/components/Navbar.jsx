import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { name: "Home",           href: "#home" },
  { name: "About",          href: "#about" },
  { name: "Projects",       href: "#projects" },
  { name: "Skills",         href: "#skills" },
  { name: "Services",       href: "#services" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements",   href: "#achievements" },
  { name: "Contact",        href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
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
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-5 flex items-center justify-between">
        {/* Logo */}
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
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <div key={link.name} className="flex flex-col items-center relative">
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  className={`relative text-[12px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                    isActive ? "!text-white" : "!text-white/70 hover:!text-white"
                  }`}
                >
                  {link.name}
                </a>
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
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
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
