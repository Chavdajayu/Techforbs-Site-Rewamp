import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import "@/styles/webflow.css";
import "@/styles/swiper.css";
import "@/styles/techforbs-theme.css";
import "@/styles/embedded-styles.css";

// Display face for the hero headline.
const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechForbs | Shopify Experts & Enterprise Web Development",
  description: "Powering Shopify stores to grow with scalable IT solutions, custom development, and full-stack engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${sora.variable}`}>
      <body suppressHydrationWarning className="bg-[#101010] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
