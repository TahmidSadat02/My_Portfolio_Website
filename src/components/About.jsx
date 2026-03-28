import { motion } from "framer-motion";
import { SectionWrapper, fadeInUp } from "../utils/animations";
import "./About.css";

export default function About() {
  return (
    <SectionWrapper id="about" className="section-padding pb-8 md:pb-12 relative">
      <div className="absolute inset-0 bg-radial-purple pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* About Me heading — left-aligned */}
        <motion.h2 variants={fadeInUp} className="about-heading">
          About Me
        </motion.h2>

        <motion.div variants={fadeInUp}>
          <p className="about-bio">
            I'm Tahmid Sadat, a Computer Science student at AIUB with a strong interest in web development, machine learning, and building practical software solutions. I enjoy turning ideas into clean, functional applications and I'm always looking to grow through real-world projects and hands-on learning.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
