import { motion } from "framer-motion";
import { personalInfo, stats } from "../data/portfolio";
import { SectionWrapper, SectionHeading, fadeInUp, fadeInLeft, fadeInRight, scaleIn } from "../utils/animations";

export default function About() {
  return (
    <SectionWrapper id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-radial-purple pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading title="About Me" subtitle="Get to know me" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div variants={fadeInLeft} className="relative group">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 blur-2xl group-hover:blur-3xl transition-all duration-500" />

              {/* Image frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-neon-cyan/30 transition-all duration-500">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-24 h-24 grid grid-cols-4 gap-1.5 opacity-40">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                ))}
              </div>

              {/* Experience badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass-strong rounded-xl px-4 py-3 neon-border"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-2xl font-bold gradient-text font-poppins">5+</p>
                <p className="text-xs text-gray-400">Years Exp.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div variants={fadeInRight}>
            <h3 className="text-2xl font-bold font-poppins text-white mb-4">
              A passionate developer who loves creating{" "}
              <span className="gradient-text-cyan">intelligent & impactful technology</span>
            </h3>

            <p className="text-gray-400 leading-relaxed mb-4">
              I'm Tahmid Sadat, a Computer Science student passionate about building intelligent and impactful technology. I enjoy creating modern web applications, AI-powered systems, and tools that solve real-world problems.
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              My interests lie in Machine Learning, Full-Stack Development, and AI-driven products. I like turning ideas into working systems — from designing clean user interfaces to developing powerful backends.
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              Recently, I've been working on projects such as an AI-based heart attack risk prediction platform, messaging applications, and interactive web tools. I believe technology should not only be innovative but also useful in everyday life.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              I'm always exploring new technologies, improving my skills, and building projects that push me closer to becoming a Machine Learning Engineer and system builder.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                <p className="text-sm text-white font-medium">{personalInfo.location}</p>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                <p className="text-sm text-neon-cyan font-medium truncate">{personalInfo.email}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  custom={i}
                  className="text-center glass rounded-xl p-4 hover:neon-border transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <p className="text-2xl font-bold gradient-text font-poppins">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
