import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/portfolio";
import { SectionWrapper, SectionHeading, fadeInUp, scaleIn } from "../utils/animations";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.featured);

  return (
    <SectionWrapper id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-radial-purple pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading title="Featured Projects" subtitle="What I've built" />

        {/* Filter */}
        <motion.div variants={fadeInUp} className="flex justify-center gap-3 mb-12">
          {["all", "featured"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                filter === f
                  ? "bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-neon-cyan border border-neon-cyan/30"
                  : "glass text-gray-400 hover:text-white"
              }`}
            >
              {f === "all" ? "All Projects" : "Featured"}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.title}
                layout
                variants={scaleIn}
                custom={i}
                initial="hidden"
                whileInView="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                className="group glass rounded-2xl overflow-hidden hover:border-neon-cyan/20
                  hover:shadow-[0_0_30px_rgba(0,245,255,0.08)] transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />

                  {/* Overlay links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4
                    opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-full glass-strong flex items-center justify-center
                          text-white hover:text-neon-cyan hover:border-neon-cyan/40 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub className="text-xl" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-full glass-strong flex items-center justify-center
                          text-white hover:text-neon-cyan hover:border-neon-cyan/40 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </motion.a>
                    )}
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                      bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-poppins text-white mb-2 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-[11px] font-medium
                          bg-white/5 text-gray-400 border border-white/5
                          group-hover:border-neon-cyan/20 group-hover:text-neon-cyan/80
                          transition-all duration-300"
                      >
                        {t}
                      </span>
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
