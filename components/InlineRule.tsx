"use client";
import { motion } from "framer-motion";

export function InlineRule({ className = "h-px bg-[var(--hairline)]" }: { className?: string }) {
  return (
    <motion.div
      className={className + " origin-left"}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ type: "spring", stiffness: 240, damping: 30 }}
    />
  );
}