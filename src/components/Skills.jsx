import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiPython, SiPostgresql, SiMongodb,
  SiDocker, SiGit, SiFigma,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { skills } from "../data/portfolio";
import { SectionWrapper, fadeInUp, scaleIn } from "../utils/animations";
import "./Skills.css";

const iconMap = {
  react: SiReact,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  python: SiPython,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  docker: SiDocker,
  aws: FaAws,
  git: SiGit,
  figma: SiFigma,
};

const categories = ["All", ...new Set(skills.map((s) => s.category))];

export default function Skills() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <SectionWrapper id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-radial pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading — matches About Me style */}
        <motion.h2 variants={fadeInUp} className="skills-heading">
          Skills & Tools
        </motion.h2>

        {/* Category Filters */}
        <motion.div variants={fadeInUp} className="skills-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`skills-filter-btn ${active === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="skills-grid">
          {filtered.map((skill, i) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.name}
                layout
                variants={scaleIn}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="skills-card"
              >
                <div className="relative">
                  {Icon && <Icon className="skills-card-icon" />}
                </div>
                <span className="skills-card-name">{skill.name}</span>
                <div className="skills-card-bar">
                  <motion.div
                    className="skills-card-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
