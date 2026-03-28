// Animated floating orbs — pure CSS animations (no JS thread, GPU composited)
export default function ParticleBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Orbs — CSS-only, no Framer Motion, no blur filter */}
      <div className="particle-orb orb-1" />
      <div className="particle-orb orb-2" />
      <div className="particle-orb orb-3" />
      <div className="particle-orb orb-4" />
      <div className="particle-orb orb-5" />
    </div>
  );
}
