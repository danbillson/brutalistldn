"use client";
import { motion, Variants } from "framer-motion";

export function MotionReveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.05, delayChildren: delay },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.18, ease: "easeOut" } },
  };

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className={className}>
      {childrenArray.map((child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}