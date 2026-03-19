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
    <SectionWrapper id="skills" className="section-padding pt-0 -mt-12 md:-mt-20 relative">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading — matches About Me style */}
        <motion.h2 variants={fadeInUp} className="skills-heading">
          Skills
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

        {/* Skills Vertical List */}
        <motion.div layout className="skills-list">
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
                className="skills-list-item"
              >
                <div className="skills-item-info">
                  {Icon && <Icon className="skills-item-icon" />}
                  <span className="skills-item-name">{skill.name}</span>
                </div>
                <div className="skills-item-bar-container">
                  <div className="skills-item-bar text-right text-xs text-gray-500 mb-1 font-['Raylig']">
                    {skill.level}%
                  </div>
                  <div className="skills-item-bar-bg">
                    <motion.div
                      className="skills-item-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
