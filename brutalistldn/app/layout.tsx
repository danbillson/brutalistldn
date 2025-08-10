import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { MotionConfig } from "framer-motion";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: {
    default: "brutalistldn",
    template: "%s — brutalistldn",
  },
  description: "Indexing the best Brutalist architecture across London.",
  metadataBase: new URL("https://brutalistldn.vercel.app"),
  twitter: { card: "summary_large_image" },
  openGraph: { type: "website", siteName: "brutalistldn", locale: "en_GB" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:bg-[var(--paper)] focus:text-[var(--ink)] focus:px-3 focus:py-2 focus:rounded-sm">
          Skip to content
        </a>
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
