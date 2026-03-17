import { useEffect, useRef, useState } from "react";

export default function GlowCursor() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let animId;
    const move = (e) => {
      if (!visible) setVisible(true);
      // Update positions directly via refs — no React re-render, zero lag
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [visible]);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Outer glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          left: 0,
          top: 0,
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(0,245,255,0.06) 0%, rgba(187,0,255,0.03) 40%, transparent 70%)",
          opacity: visible ? 1 : 0,
          willChange: "transform",
          transition: "opacity 0.3s",
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          left: 0,
          top: 0,
          width: 12,
          height: 12,
          background: "rgba(0,245,255,0.8)",
          boxShadow: "0 0 20px rgba(0,245,255,0.5), 0 0 60px rgba(0,245,255,0.2)",
          opacity: visible ? 1 : 0,
          willChange: "transform",
          transition: "opacity 0.3s",
        }}
      />
    </>
  );
}
