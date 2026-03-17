import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlowCursor from "./components/GlowCursor";
import ParticleBackground from "./components/ParticleBackground";

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-dark-900">
      <GlowCursor />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
