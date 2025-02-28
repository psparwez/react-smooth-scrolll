import type { Metadata } from "next";
import "./globals.css";

import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import SmoothScrollProvider from "./lib/SmoothScroll";

// Importing Google Font
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
});


export const metadata: Metadata = {
  title: "React Smooth Scrolll",
  description: "React Smooth Scroll is a smooth scrolling library for React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScrollProvider>
      <html lang="en">
        <body
          className={`${bricolageGrotesque.variable} antialiased`}
        >

          <header className="border-b border-dashed border-zinc-400">
            <div className="py-6  container flex justify-between items-center border-x border-zinc-400">
            </div>
          </header>

          <main className="w-full min-h-screen px-5 md:px-10 py-10 container border-x border-dashed border-zinc-400">
            {children}

            <div className="fixed left-0 bottom-0 top-auto pointer-events-none h-56 w-56 rounded-full bg-yellow-500/50 blur-[150px] " />
          </main>
          <Footer />
        </body>

      </html>
    </SmoothScrollProvider>
  );
}
