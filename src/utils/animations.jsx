import { motion } from "framer-motion";

// ── Fade-in on scroll wrapper ──
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// ── Section wrapper with scroll trigger ──
export function SectionWrapper({ children, className = "", id }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
    >
      {children}
    </motion.section>
  );
}

// ── Section heading component ──
export function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <motion.p
        variants={fadeInUp}
        className="text-neon-cyan font-medium text-sm tracking-[0.2em] uppercase mb-3 font-poppins"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        variants={fadeInUp}
        className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins"
      >
        <span className="gradient-text">{title}</span>
      </motion.h2>
      <motion.div
        variants={fadeInUp}
        className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mt-6 rounded-full"
      />
    </div>
  );
}
