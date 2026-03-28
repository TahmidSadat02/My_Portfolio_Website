import { motion } from "framer-motion";
import { SectionWrapper, fadeInUp, scaleIn } from "../utils/animations";
import "./Services.css";

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Building responsive, modern web applications using React and Tailwind CSS.",
  },
  {
    icon: "🤖",
    title: "AI & ML Solutions",
    desc: "Developing machine learning models and AI-powered tools using Python.",
  },
  {
    icon: "📱",
    title: "Mobile Development",
    desc: "Creating cross-platform mobile apps using Flutter.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Designing clean, user-friendly interfaces with attention to detail.",
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services" className="section-padding relative">
      <div className="relative z-10 max-w-6xl mx-auto">

        <motion.h2 variants={fadeInUp} className="services-heading">
          What I Do
        </motion.h2>

        <motion.div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={scaleIn}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="service-card"
            >
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
