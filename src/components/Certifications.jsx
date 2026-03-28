import { motion } from "framer-motion";
import { SectionWrapper, fadeInUp } from "../utils/animations";
import "./Certifications.css";

const certs = [
  {
    name: "Python",
    issuer: "Kaggle",
    date: "Mar 2026",
    url: "#",
  },
  {
    name: "Artificial Intelligence Beginners Guide",
    issuer: "Simplilearn",
    date: "Mar 2026",
    url: "#",
  },
  {
    name: "Machine Learning Using Python",
    issuer: "Simplilearn",
    date: "Mar 2026",
    url: "#",
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="section-padding relative">
      <div className="relative z-10 max-w-6xl mx-auto">

        <motion.h2 variants={fadeInUp} className="certs-heading">
          Certifications
        </motion.h2>

        <div className="certs-list">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              custom={i}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="cert-card"
            >
              <div className="cert-badge">🎓</div>
              <div className="cert-info">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-dot">·</span>
                  <span className="cert-date">{cert.date}</span>
                </p>
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="cert-btn"
              >
                View Credential
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
