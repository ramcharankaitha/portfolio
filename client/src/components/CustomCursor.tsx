/* Dark Cinematic Luxury: Custom cursor with glow dot */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  if (window.matchMedia?.("(pointer: coarse)").matches) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[10000] mix-blend-screen"
      animate={{
        x: pos.x - 8,
        y: pos.y - 8,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <div className="w-4 h-4 rounded-full bg-[#7C3AED] shadow-[0_0_15px_rgba(124,58,237,0.6),0_0_30px_rgba(124,58,237,0.3)]" />
    </motion.div>
  );
}
