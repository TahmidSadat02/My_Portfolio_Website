import { motion } from "framer-motion";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaPaperPlane } from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolio";
import { SectionWrapper, SectionHeading, fadeInUp, fadeInLeft, fadeInRight, scaleIn } from "../utils/animations";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  dribbble: FaDribbble,
};

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-radial-purple pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Let's connect" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div variants={fadeInLeft} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-poppins text-white mb-4">
                Let's create something{" "}
                <span className="gradient-text-cyan">amazing</span> together
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 glass rounded-xl p-4 group
                  hover:border-neon-cyan/20 hover:shadow-[0_0_20px_rgba(0,245,255,0.08)]
                  transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center
                  group-hover:bg-neon-cyan/20 transition-all">
                  <HiMail className="text-xl text-neon-cyan" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                  <p className="text-sm text-white font-medium">{personalInfo.email}</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 glass rounded-xl p-4 group"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                  <HiLocationMarker className="text-xl text-neon-purple" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="text-sm text-white font-medium">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map((link, i) => {
                  const Icon = socialIcons[link.icon];
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      variants={scaleIn}
                      custom={i}
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center
                        text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/30
                        hover:shadow-[0_0_15px_rgba(0,245,255,0.15)] transition-all duration-300"
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="text-lg" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            variants={fadeInRight}
            onSubmit={(e) => e.preventDefault()}
            className="glass rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                    placeholder:text-gray-600 focus:border-neon-cyan/40 focus:outline-none
                    focus:shadow-[0_0_15px_rgba(0,245,255,0.1)] transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                    placeholder:text-gray-600 focus:border-neon-cyan/40 focus:outline-none
                    focus:shadow-[0_0_15px_rgba(0,245,255,0.1)] transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Subject</label>
              <input
                type="text"
                placeholder="Project inquiry"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                  placeholder:text-gray-600 focus:border-neon-cyan/40 focus:outline-none
                  focus:shadow-[0_0_15px_rgba(0,245,255,0.1)] transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                  placeholder:text-gray-600 focus:border-neon-cyan/40 focus:outline-none
                  focus:shadow-[0_0_15px_rgba(0,245,255,0.1)] transition-all duration-300 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm
                bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-900
                hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] transition-all duration-300"
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
