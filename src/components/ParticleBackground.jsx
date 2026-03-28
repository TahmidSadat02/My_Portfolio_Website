import { motion } from "framer-motion";

// Animated floating orbs for background decoration
export default function ParticleBackground() {
  const orbs = [
    { size: 300, x: "10%", y: "20%", color: "rgba(0,245,255,0.08)", delay: 0, duration: 20 },
    { size: 400, x: "80%", y: "10%", color: "rgba(187,0,255,0.06)", delay: 2, duration: 25 },
    { size: 250, x: "70%", y: "70%", color: "rgba(0,245,255,0.05)", delay: 4, duration: 22 },
    { size: 350, x: "20%", y: "80%", color: "rgba(255,0,110,0.04)", delay: 1, duration: 28 },
    { size: 200, x: "50%", y: "40%", color: "rgba(58,134,255,0.06)", delay: 3, duration: 24 },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Floating orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
          }}
          animate={{
            y: [0, -25, 15, -10, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
