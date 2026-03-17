import { motion } from "framer-motion";
import { experiences } from "../data/portfolio";
import { SectionWrapper, SectionHeading, fadeInUp, fadeInLeft, fadeInRight } from "../utils/animations";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-radial pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading title="Experience" subtitle="My journey" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/50 via-neon-purple/30 to-transparent" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                variants={isLeft ? fadeInLeft : fadeInRight}
                custom={i}
                className={`relative flex items-start gap-8 mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-neon-cyan border-4 border-dark-900"
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                  />
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-neon-cyan/30 animate-ping" />
                </div>

                {/* Card */}
                <motion.div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] glass rounded-2xl p-6
                    hover:border-neon-cyan/20 hover:shadow-[0_0_25px_rgba(0,245,255,0.08)]
                    transition-all duration-500 group ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  whileHover={{ y: -4 }}
                >
                  {/* Period */}
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium
                    bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 mb-3">
                    {exp.period}
                  </span>

                  <h3 className="text-lg font-bold font-poppins text-white mb-1">
                    {exp.role}
                  </h3>

                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-neon-cyan/70 hover:text-neon-cyan transition-colors mb-3 inline-block"
                  >
                    @{exp.company}
                  </a>

                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[10px] font-medium
                          bg-white/5 text-gray-500 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
