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
            I'm Tahmid Sadat — a CSE student who actually enjoys debugging at 3AM. I build things for the web that are fast, clean, and don't make people click 47 times to find what they need. Obsessed with turning "this looks broken" into "wait this actually goes hard." When I'm not pushing commits, I'm either overthinking UI decisions or convincing myself I'll sleep early tonight. Spoiler: I never do.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
