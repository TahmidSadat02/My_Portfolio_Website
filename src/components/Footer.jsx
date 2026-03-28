import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaHeart } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { socialLinks, personalInfo } from "../data/portfolio";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  dribbble: FaDribbble,
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="text-xl font-bold font-poppins">
            <span className="gradient-text">{""}</span>
            <span className="text-white"></span>
            <span className="gradient-text">{""}</span>
          </a>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-neon-cyan transition-all duration-300"
                >
                  <Icon className="text-sm" />
                </a>
              );
            })}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiArrowUp className="text-lg" />
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-6 border-t border-white/5">
          <p className="text-sm text-gray-600">
            © 2026 - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
