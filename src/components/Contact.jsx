import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { SectionWrapper, fadeInUp, fadeInLeft, fadeInRight } from "../utils/animations";
import "./Contact.css";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="section-padding relative">
      <div className="relative z-10 max-w-6xl mx-auto">

        <motion.h2 variants={fadeInUp} className="contact-heading">
          Get In Touch
        </motion.h2>

        <div className="contact-layout">
          {/* Left — info */}
          <motion.div variants={fadeInLeft} className="contact-info">
            <h3 className="contact-sub-heading">Let's Connect</h3>
            <p className="contact-blurb">
              I'm currently open to internship opportunities and collaborations.
              Feel free to reach out.
            </p>

            <div className="contact-links">
              <a href="mailto:tahmidsadat02@gmail.com" className="contact-link-row">
                <FaEnvelope className="contact-link-icon" />
                <span>tahmidsadat02@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/tahmidsadat"
                target="_blank"
                rel="noreferrer"
                className="contact-link-row"
              >
                <FaLinkedin className="contact-link-icon" />
                <span>linkedin.com/in/tahmidsadat</span>
              </a>
              <a
                href="https://github.com/TahmidSadat02"
                target="_blank"
                rel="noreferrer"
                className="contact-link-row"
              >
                <FaGithub className="contact-link-icon" />
                <span>github.com/TahmidSadat02</span>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            variants={fadeInRight}
            onSubmit={(e) => e.preventDefault()}
            className="contact-form"
          >
            <div className="contact-form-field">
              <label className="contact-label">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="contact-input"
              />
            </div>
            <div className="contact-form-field">
              <label className="contact-label">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="contact-input"
              />
            </div>
            <div className="contact-form-field">
              <label className="contact-label">Message</label>
              <textarea
                rows={5}
                placeholder="Your message..."
                className="contact-input contact-textarea"
              />
            </div>
            <motion.button
              type="submit"
              className="contact-submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane />
              Send Message
            </motion.button>
          </motion.form>
        </div>

      </div>
    </SectionWrapper>
  );
}
