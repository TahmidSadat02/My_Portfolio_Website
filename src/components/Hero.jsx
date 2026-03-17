import { motion } from "framer-motion";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";
import { personalInfo } from "../data/portfolio";

const services = [
  { num: "01", label: "Web Development" },
  { num: "02", label: "UI / UX Design" },
  { num: "03", label: "Cloud & DevOps" },
  { num: "04", label: "Consulting" },
];

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full max-w-full h-screen overflow-hidden"
    >
      {/* ═══════════════════════════════════════════════
          BACKGROUND — Full-bleed portrait as background
          ═══════════════════════════════════════════════ */}
      <div className="absolute inset-0">
        <img
          src="/banner.jpg"
          alt=""
          className="w-full h-full object-cover object-top"
        />
        {/* Dark overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-black/30" />
      </div>

      {/* ═══════════════════════════════════════════════
          CONTENT — All UI overlaid on top of the image
          ═══════════════════════════════════════════════ */}
      <div className="relative z-10 h-full flex flex-col">

        {/* ── Main content area ── */}
        <div className="flex-1 flex items-center px-8 md:px-12 lg:px-20">
          <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

            {/* Left column — Big title text */}
            <div>
              <motion.p
                className="text-base md:text-lg text-gray-300 mb-4 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Hey, I'm a
              </motion.p>

              <motion.h1
                className="text-[clamp(3.5rem,10vw,9rem)] font-poppins font-black leading-[0.9] tracking-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <span className="block text-white/90">Full Stack</span>
                <span className="block text-white/90">Developer</span>
              </motion.h1>
            </div>

            {/* Right column — Tagline + CTA */}
            <motion.div
              className="lg:text-right lg:flex lg:flex-col lg:items-end lg:justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-poppins font-bold text-white/90 mb-3 leading-snug">
                Great code should<br />feel effortless.
              </h2>
              <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed max-w-md">
                From concept to deployment, I build digital products that connect and convert.
              </p>

              {/* Get in touch — pill button matching Folioblox reference */}
              <motion.a
                href="#contact"
                onClick={scrollTo("#contact")}
                className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-sm font-semibold
                  bg-white text-dark-900 hover:bg-neon-cyan
                  hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
                <span className="w-9 h-9 rounded-full bg-neon-cyan flex items-center justify-center text-dark-900">
                  <HiArrowRight className="text-lg" />
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom bar — Services row ── */}
        <motion.div
          className="px-8 md:px-12 lg:px-20 pb-8 md:pb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="max-w-7xl mx-auto flex flex-wrap items-end justify-between gap-6">
            {/* Services list */}
            <div className="flex flex-wrap gap-x-10 lg:gap-x-16 gap-y-3">
              {services.map((s) => (
                <motion.a
                  key={s.num}
                  href="#skills"
                  onClick={scrollTo("#skills")}
                  className="group cursor-pointer"
                  whileHover={{ y: -2 }}
                >
                  <span className="block text-sm font-semibold text-neon-cyan/70 font-mono mb-0.5">
                    #{s.num}
                  </span>
                  <span className="block text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors duration-300 tracking-wide">
                    {s.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Decorative sparkle — matches reference */}
            <motion.div
              className="text-white/20 text-4xl"
              animate={{ rotate: [0, 90, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              ✦
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 hidden lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.a
          href="#about"
          onClick={scrollTo("#about")}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-neon-cyan transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <HiArrowDown className="text-sm" />
        </motion.a>
      </motion.div>
    </section>
  );
}
