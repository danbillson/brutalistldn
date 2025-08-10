"use client";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { motion } from "framer-motion";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-wrap">
      <SiteHeader />
      <motion.main
        id="content"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        {children}
      </motion.main>
      <SiteFooter />
    </div>
  );
}