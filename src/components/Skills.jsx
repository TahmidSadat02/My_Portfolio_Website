import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiPython, SiPostgresql, SiMongodb,
  SiDocker, SiGit, SiFigma,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { skills } from "../data/portfolio";
import { SectionWrapper, SectionHeading, fadeInUp, scaleIn } from "../utils/animations";

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
        <SectionHeading title="Skills & Tools" subtitle="What I work with" />

        {/* Category Filters */}
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-neon-cyan border border-neon-cyan/30 shadow-[0_0_15px_rgba(0,245,255,0.15)]"
                  : "glass text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
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
                whileHover={{ y: -8, scale: 1.05 }}
                className="group glass rounded-2xl p-6 flex flex-col items-center gap-3
                  hover:border-neon-cyan/30 hover:shadow-[0_0_25px_rgba(0,245,255,0.1)]
                  transition-all duration-300 cursor-default"
              >
                <div className="relative">
                  {Icon && (
                    <Icon className="text-3xl text-gray-400 group-hover:text-neon-cyan transition-colors duration-300" />
                  )}
                  <div className="absolute inset-0 blur-xl bg-neon-cyan/0 group-hover:bg-neon-cyan/20 transition-all duration-500 rounded-full" />
                </div>
                <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                {/* Skill level bar */}
                <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue"
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
