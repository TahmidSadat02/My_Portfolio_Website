import { useEffect, useRef, useState } from "react";

export default function GlowCursor() {
  const dotRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let animId;
    const move = (e) => {
      setVisible((current) => (current ? current : true));
      // Update positions directly via refs — no React re-render, zero lag
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
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
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          left: 0,
          top: 0,
          width: 12,
          height: 12,
          background: "#fff",
          mixBlendMode: "difference",
          boxShadow: "0 0 18px rgba(255,255,255,0.75), 0 0 42px rgba(255,255,255,0.45)",
          opacity: visible ? 1 : 0,
          willChange: "transform",
          transition: "opacity 0.2s ease",
        }}
      />
    </>
  );
}
