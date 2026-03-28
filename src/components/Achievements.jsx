import { motion } from "framer-motion";
import { SectionWrapper, fadeInUp } from "../utils/animations";
import "./Achievements.css";

const achievements = [
  {
    icon: "🎓",
    text: "Completed 3 professional certifications in AI and Python (2026)",
  },
  {
    icon: "💻",
    text: "Built a full portfolio website from scratch using React, Vite and Framer Motion",
  },
  {
    icon: "🤖",
    text: "Developed an AI-based heart attack risk prediction platform",
  },
  {
    icon: "📱",
    text: "Built cross-platform mobile applications using Flutter",
  },
  {
    icon: "🌐",
    text: "Learned and applied modern web technologies including React, Tailwind CSS and Framer Motion",
  },
];

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="section-padding relative">
      <div className="relative z-10 max-w-6xl mx-auto">

        <motion.h2 variants={fadeInUp} className="achievements-heading">
          Achievements
        </motion.h2>

        <div className="achievements-list">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="achievement-item"
            >
              <span className="achievement-icon">{item.icon}</span>
              <p className="achievement-text">{item.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
