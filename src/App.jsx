import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlowCursor from "./components/GlowCursor";
import ParticleBackground from "./components/ParticleBackground";

export default function App() {
  return (
    <div className="relative min-h-screen w-full" style={{ backgroundColor: "#1a0e06" }}>
      <GlowCursor />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />

        <div className="section-divider" />

        <div className="content-background">
          <div className="content-ambient" />
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <Achievements />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
