import { motion } from "framer-motion";
import { SectionWrapper, fadeInUp } from "../utils/animations";
import "./Experience.css";

const journey = [
  {
    year: "2022",
    title: "Started My CS Journey",
    desc: "Enrolled in B.Sc. CSE at AIUB. Wrote my first line of code and got completely hooked.",
  },
  {
    year: "2023",
    title: "Built My First Projects",
    desc: "Started learning HTML, CSS and JavaScript. Built my first websites and fell in love with frontend development.",
  },
  {
    year: "2024",
    title: "Leveled Up",
    desc: "Learned React, Tailwind CSS and Flutter. Started building real-world web and mobile applications.",
  },
  {
    year: "2025",
    title: "Diving Into AI & ML",
    desc: "Got serious about Machine Learning and Python. Started exploring AI-powered applications and data science.",
  },
  {
    year: "Mar 2026",
    title: "Certified & Building",
    desc: "Earned Python certification from Kaggle, AI Beginners Guide and Machine Learning Using Python from Simplilearn.",
  },
  {
    year: "Present",
    title: "Aspiring Software Engineer",
    desc: "Building projects, learning every day and pushing commits at 3AM. 🌙",
  },
];

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="section-padding relative">
      <div className="relative z-10 max-w-6xl mx-auto">

        <motion.h2 variants={fadeInUp} className="journey-heading">
          My Journey
        </motion.h2>

        <div className="journey-timeline">
          {/* Vertical line */}
          <div className="journey-line" />

          {journey.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="journey-item"
            >
              {/* Dot */}
              <div className="journey-dot" />

              {/* Year */}
              <span className="journey-year">{item.year}</span>

              {/* Content */}
              <div className="journey-content">
                <h3 className="journey-title">{item.title}</h3>
                <p className="journey-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
