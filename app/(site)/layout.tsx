import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(70%_120%_at_50%_-10%,rgba(31,56,255,0.35)_0%,rgba(31,56,255,0)_62%),radial-gradient(68%_58%_at_50%_62%,rgba(31,56,255,0.55)_0%,rgba(31,56,255,0)_72%),linear-gradient(180deg,#020a4b_0%,#031057_42%,#0a25e8_62%,#050a54_82%,#01030b_100%)]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
