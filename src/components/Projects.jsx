import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/portfolio";
import { SectionWrapper, fadeInUp, scaleIn } from "../utils/animations";
import "./Projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.featured);

  return (
    <SectionWrapper id="projects" className="section-padding relative">
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading — matches About / Skills style */}
        <motion.h2 variants={fadeInUp} className="projects-heading">
          Projects
        </motion.h2>

        {/* Filter pills */}
        <motion.div variants={fadeInUp} className="projects-filters">
          {["all", "featured"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`projects-filter-btn${filter === f ? " active" : ""}`}
            >
              {f === "all" ? "All Projects" : "Featured"}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.title}
                layout
                variants={scaleIn}
                custom={i}
                initial="hidden"
                whileInView="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                className="project-card"
              >
                {/* Image */}
                <div className="project-card-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-card-image-overlay" />

                  {/* Hover links */}
                  <div className="project-card-links">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card-link-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="View GitHub"
                      >
                        <FaGithub />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card-link-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="View Live"
                      >
                        <FaExternalLinkAlt style={{ fontSize: "0.875rem" }} />
                      </motion.a>
                    )}
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="project-card-badge">Featured</div>
                  )}
                </div>

                {/* Body */}
                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>
                  <div className="project-card-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="project-tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
