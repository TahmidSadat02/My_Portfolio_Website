import { motion } from "framer-motion";
import {
  SiReact, SiJavascript, SiPython, SiTailwindcss,
  SiFlutter, SiHtml5, SiCss3, SiFramer, SiGit,
} from "react-icons/si";
import { TbBrain } from "react-icons/tb";
import { SectionWrapper, fadeInUp, scaleIn } from "../utils/animations";
import "./Skills.css";

const skills = [
  { name: "React",           Icon: SiReact,       level: 85 },
  { name: "JavaScript",      Icon: SiJavascript,  level: 82 },
  { name: "Python",          Icon: SiPython,       level: 78 },
  { name: "Tailwind CSS",    Icon: SiTailwindcss, level: 88 },
  { name: "Flutter",         Icon: SiFlutter,     level: 70 },
  { name: "Machine Learning",Icon: TbBrain,       level: 65 },
  { name: "HTML / CSS",      Icon: SiHtml5,       level: 90 },
  { name: "Framer Motion",   Icon: SiFramer,      level: 75 },
  { name: "Git / GitHub",    Icon: SiGit,         level: 80 },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="section-padding pt-0 -mt-12 md:-mt-20 relative">
      <div className="relative z-10 max-w-6xl mx-auto">

        <motion.h2 variants={fadeInUp} className="skills-heading">
          Skills
        </motion.h2>

        <motion.div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              variants={scaleIn}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="skill-card"
            >
              <skill.Icon className="skill-icon" />
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar-bg">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.05, ease: "easeOut" }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
