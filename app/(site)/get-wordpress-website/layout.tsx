import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function WordPressLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(70%_120%_at_50%_-10%,rgba(0,255,255,0.25)_0%,rgba(0,255,255,0)_62%),radial-gradient(68%_58%_at_50%_62%,rgba(0,255,255,0.35)_0%,rgba(0,255,255,0)_72%),linear-gradient(180deg,#000a15_0%,#001a25_42%,#0a2540_62%,#001520_82%,#00030b_100%)]">
      <main className="flex-1">{children}</main>
    </div>
  );
}
