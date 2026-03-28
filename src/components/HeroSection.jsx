import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";
import "./HeroSection.css";

export default function HeroSection() {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [isWordGlitchActive, setIsWordGlitchActive] = useState(false);
  const animatedWords = useMemo(
    () => ["S/W Engineer", "ML Engineer", "Web Developer", "Problem Solver", "CS Student"],
    []
  );
  const [currentAnimatedWord, setCurrentAnimatedWord] = useState(animatedWords[0]);
  const [isIdleGlitchActive, setIsIdleGlitchActive] = useState(false);
  const wordGlitchTimeoutRef = useRef(null);
  const idleGlitchTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (wordGlitchTimeoutRef.current) {
        clearTimeout(wordGlitchTimeoutRef.current);
      }

      if (idleGlitchTimeoutRef.current) {
        clearTimeout(idleGlitchTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsIdleGlitchActive(false);
      return;
    }

    const scheduleIdleGlitch = () => {
      const delay = 4000 + Math.floor(Math.random() * 2000);
      idleGlitchTimeoutRef.current = setTimeout(() => {
        setIsIdleGlitchActive(true);
        const pulseTimeout = setTimeout(() => {
          setIsIdleGlitchActive(false);
          scheduleIdleGlitch();
        }, 200);
        idleGlitchTimeoutRef.current = pulseTimeout;
      }, delay);
    };

    scheduleIdleGlitch();

    return () => {
      if (idleGlitchTimeoutRef.current) {
        clearTimeout(idleGlitchTimeoutRef.current);
      }
    };
  }, [prefersReducedMotion]);

  const triggerWordGlitch = useCallback(() => {
    if (prefersReducedMotion) return;

    if (wordGlitchTimeoutRef.current) {
      clearTimeout(wordGlitchTimeoutRef.current);
    }

    setIsWordGlitchActive(false);
    requestAnimationFrame(() => {
      setIsWordGlitchActive(true);
    });

    wordGlitchTimeoutRef.current = setTimeout(() => {
      setIsWordGlitchActive(false);
    }, 600);
  }, [prefersReducedMotion]);

  const article = useMemo(
    () => (/^[aeiou]/i.test(currentAnimatedWord.trim()) ? "an" : "a"),
    [currentAnimatedWord]
  );

  const handleWordTransition = useCallback(
    (word) => {
      setCurrentAnimatedWord(word);
      triggerWordGlitch();
    },
    [triggerWordGlitch]
  );

  const animatedWordSequence = useMemo(
    () => animatedWords.flatMap((word) => [() => handleWordTransition(word), word, 2000]),
    [animatedWords, handleWordTransition]
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const cutoutY = useTransform(scrollYProgress, [0, 1], [0, 42]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <motion.section
      id="home"
      ref={containerRef}
      aria-label="Hero"
      className="hero-3d relative isolate min-h-screen overflow-hidden"
      style={{ perspective: "1200px", backgroundColor: "#1a0e06" }}
    >
      {/* ── Layer 1: Background banner ── */}
      <motion.div
        className="absolute -inset-[15%] w-[130%] h-[130%]"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={prefersReducedMotion ? {} : { opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        style={{
          y: prefersReducedMotion ? 0 : backgroundY,
          willChange: "transform",
        }}
      >
        <img
          src="/bg.jpeg?v=20260317"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ 
            objectPosition: "center 22%", 
            opacity: 0.24, 
            filter: "grayscale(100%) blur(1px) brightness(1.35)",
          }}
        />
        <div className="absolute inset-0 bg-white/40" />
        <div className="hero-ambient absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/24 via-white/10 to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/16 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/52 via-black/8 to-transparent" />
      </motion.div>

      {/* ── Layer 2: Text content ── */}
      <motion.div
        className="absolute inset-0 z-[14]"
        style={{
          y: prefersReducedMotion ? 0 : textY,
          willChange: "transform",
        }}
      >
        <div className="hero-text-wrap h-full w-full px-4 md:px-8 lg:px-10 flex flex-col pt-6 lg:pt-8">
          <div className="hero-grid mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start flex-1">
            {/* Left side texts - getting partially covered by cutout */}
            <div
              className="max-w-[460px] z-0 relative text-left self-start"
              style={{ paddingLeft: "clamp(3rem, 6vw, 7rem)", marginTop: "18vh", color: "#000000" }}
            >
              <motion.p
                className="hero-kicker mb-[0.3rem] text-[clamp(1.1rem,2.2vw,1.5rem)] font-normal"
                style={{ color: "#000000" }}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.1, ease: "easeOut" }}
              >
                Hey There,
              </motion.p>

              <motion.h2
                className="hero-mid mt-0 tracking-tighter leading-[0.95] whitespace-nowrap"
                style={{ color: "#000000" }}
                initial={false}
                animate={false}
              >
                <motion.span
                  className="mb-[0.2rem] block text-[clamp(2.8rem,5.4vw,4.3rem)] font-bold"
                  style={{ color: "#000000" }}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.25, ease: "easeOut" }}
                >
                  {"I'm Sadat"}
                </motion.span>
                <motion.span
                  className="mb-0 block text-[clamp(1.7rem,3.3vw,2.8rem)] font-medium"
                  style={{ color: "#000000" }}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.4, ease: "easeOut" }}
                >
                  {"I'm a"}
                  <AnimatePresence initial={false} mode="wait">
                    {article === "an" && (
                      <motion.span
                        key="article-n"
                        className="inline-block hero-article-n"
                        initial={prefersReducedMotion ? false : { opacity: 0, x: -2, filter: "blur(1.5px)" }}
                        animate={prefersReducedMotion ? {} : { opacity: [0.45, 0.9, 1], x: [-1, 1, 0], filter: "blur(0px)" }}
                        exit={prefersReducedMotion ? {} : { opacity: [1, 0.75, 0], x: [0, -1, 1], filter: "blur(1.5px)" }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                      >
                        n
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.span>
              </motion.h2>
            </div>


          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-0 right-0 top-[66%] md:top-[68%] lg:top-[70%] -translate-y-1/2 z-[1] pointer-events-none flex justify-center"
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.1 }}
        animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.8, ease: "easeOut" }}
      >
        <h1
          className="hero-big text-[clamp(3.8rem,8.8vw,8.2rem)] font-black tracking-tighter leading-[0.9] whitespace-nowrap"
          style={{ color: "rgba(26,26,26,0.14)", WebkitTextStroke: "0 transparent" }}
        >
          <span className={`hero-word-glitch ${isWordGlitchActive ? "glitch-active" : ""} ${isIdleGlitchActive ? "idle-glitch-active" : ""}`}>
            {prefersReducedMotion ? (
              "Developer"
            ) : (
              <TypeAnimation sequence={animatedWordSequence} speed={50} repeat={Infinity} wrapper="span" />
            )}
          </span>
        </h1>
      </motion.div>

      {/* ── Layer 3: Cutout ── */}
      <motion.div
        className="hero-cutout-layer absolute inset-0 w-full h-full z-[10] pointer-events-none flex items-end justify-center"
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.85, z: -100 }}
        animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1, z: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          y: prefersReducedMotion ? 0 : cutoutY,
          willChange: "transform",
        }}
      >
        <img
          src="/cuted.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-contain object-[center_bottom] scale-[0.9] md:scale-[0.95] origin-bottom"
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
          className="text-[#1a1a1a] hover:text-black"
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiArrowDown className="text-2xl" />
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
