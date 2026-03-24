import "./globals.css";

import { Inter } from "next/font/google";

const interFont = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "LuckySwing : Golf, Rewards & Charity Platform",
  description:
    "A modern subscription platform where golfers track scores, win monthly rewards, and support charities through every game.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${interFont.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
