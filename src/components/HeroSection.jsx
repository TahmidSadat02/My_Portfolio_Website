import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";
import "./HeroSection.css";

export default function HeroSection() {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const cutoutY = useTransform(scrollYProgress, [0, 1], [0, 42]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      id="home"
      ref={containerRef}
      aria-label="Hero"
      className="hero-3d relative isolate min-h-screen overflow-hidden"
      style={{ perspective: "1200px", backgroundColor: "#1a0e06" }}
    >
      {/* ── Layer 1: Background banner ── */}
      <motion.div
        className="absolute -inset-[15%] w-[130%] h-[130%]"
        style={{
          y: prefersReducedMotion ? 0 : backgroundY,
          willChange: "transform",
        }}
      >
        <img
          src="/banner.jpeg"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="hero-ambient absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060608]/70 via-[#060608]/25 to-[#060608]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/65 via-transparent to-transparent" />
      </motion.div>

      {/* ── Layer 2: Text content ── */}
      <motion.div
        className="absolute inset-0 z-[14]"
        style={{
          y: prefersReducedMotion ? 0 : textY,
          willChange: "transform",
        }}
      >
        <div className="hero-text-wrap h-full w-full px-4 md:px-8 lg:px-10 flex flex-col pt-24 lg:pt-24">
          <div className="hero-grid mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start flex-1">
            {/* Left side texts - getting partially covered by cutout */}
            <div className="max-w-[800px] z-0 text-white relative text-left">
              <motion.p
                className="hero-kicker text-[clamp(1rem,1.8vw,1.4rem)] font-bold text-white/90"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Hey There,
              </motion.p>

              <motion.h2
                className="hero-mid mt-1 text-[clamp(3rem,5.6vw,5.2rem)] font-black tracking-tighter leading-[0.95] text-white whitespace-nowrap"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              >
                I&apos;m Sadat<br />
                I&apos;m a
              </motion.h2>
            </div>


          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-center"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" }}
      >
        <h1
          className="hero-big text-[clamp(6rem,15vw,14rem)] font-black tracking-tighter leading-[0.9] whitespace-nowrap opacity-55"
          style={{ WebkitTextStroke: "2px white", color: "transparent" }}
        >
          {prefersReducedMotion ? (
            "Developer"
          ) : (
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Designer",
                2000,
                "Innovator",
                2000,
                "Creator",
                2000,
                "Problem Solver",
                2000,
                "Dreamer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
            />
          )}
        </h1>
      </motion.div>

      {/* ── Layer 3: Cutout ── */}
      <motion.div
        className="hero-cutout-layer absolute inset-0 w-full h-full z-[10] pointer-events-none flex items-end justify-center"
        style={{
          y: prefersReducedMotion ? 0 : cutoutY,
          willChange: "transform",
        }}
      >
        <img
          src="/cutout-banner.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-contain object-[center_bottom] scale-[0.95] md:scale-100 origin-bottom"
        />
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={prefersReducedMotion ? {} : { opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.button
          type="button"
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll to About section"
          className="text-white/80 hover:text-white"
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiArrowDown className="text-2xl" />
        </motion.button>
      </motion.div>
    </section>
  );
}
