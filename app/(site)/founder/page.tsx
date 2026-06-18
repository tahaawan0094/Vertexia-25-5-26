import type { Metadata } from "next";
import Link from "next/link";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import PageTransition from "@/components/animations/PageTransition";

export const metadata: Metadata = {
  title: "Meet the Founder of Vertexia | Web Development Agency",
  description:
    "Meet the founder of Vertexia, a Karachi-based web development agency specializing in custom websites, WordPress development, ecommerce solutions, and SEO services.",
  alternates: {
    canonical: "https://vertexiaio.vercel.app/founder",
  },
  openGraph: {
    title: "Meet the Founder of Vertexia | Web Development Agency",
    description:
      "Meet the founder of Vertexia, a Karachi-based web development agency specializing in custom websites, WordPress development, ecommerce solutions, and SEO services.",
    url: "https://vertexiaio.vercel.app/founder",
    type: "website",
    siteName: "Vertexia",
  },
};

export default function FounderPage() {
  const founderSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://vertexiaio.vercel.app/#taha-awan",
    name: "Taha Awan",
    jobTitle: "CEO & Founder",
    worksFor: {
      "@id": "https://vertexiaio.vercel.app/#organization",
    },
    url: "https://vertexiaio.vercel.app/founder",
    image: "https://vertexiaio.vercel.app/About-Us/founder-taha-awan.webp",
    sameAs: [
      "https://www.linkedin.com/in/vertexia-io-b03923410/",
      "https://www.facebook.com/profile.php?id=61589778596884",
      "https://www.instagram.com/vertexia.io/",
      "https://x.com/vertexiadev",
    ],
  };

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(founderSchema),
        }}
      />
      <main className="site bg-black text-white font-body">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-32 md:py-48 bg-[radial-gradient(70%_120%_at_50%_-10%,rgba(46,204,113,0.35)_0%,rgba(46,204,113,0)_62%),radial-gradient(68%_58%_at_50%_62%,rgba(46,204,113,0.55)_0%,rgba(46,204,113,0)_72%),linear-gradient(180deg,#022e0b_0%,#033b1a_42%,#2ecc71_62%,#0d2b0f_82%,#01030b_100%)]">
          <div className="relative mx-auto max-w-[1200px] text-center">
            <h1 className="text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-tight mb-6 tracking-tight font-display">
              Meet the Founder of Vertexia
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-[700px] mx-auto leading-relaxed font-accent">
              Learn about Taha Awan's journey building a web development agency focused on helping businesses succeed online.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-[900px]">
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display">Hi, I'm Taha Awan</h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p className="text-lg">
                  I'm the founder of Vertexia. I started Vertexia with a simple goal: helping businesses build modern, high-performing websites that not only look great but also drive real business growth.
                </p>
                <p className="text-lg">
                  Based in Karachi, Pakistan, Vertexia specializes in custom website development, WordPress websites, ecommerce solutions, and SEO-focused web experiences. Our mission is to make professional web development accessible to startups, local businesses, and growing companies worldwide.
                </p>
              </div>
            </div>

            {/* Why I Started Vertexia */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display">Why I Started Vertexia</h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p className="text-lg">
                  Many businesses struggle with slow websites, outdated designs, and solutions that limit their growth. I founded Vertexia to provide businesses with websites that are:
                </p>
                <ul className="space-y-4 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF5A4E] font-bold text-xl mt-1">•</span>
                    <span>Fast and optimized for performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF5A4E] font-bold text-xl mt-1">•</span>
                    <span>Mobile-friendly across all devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF5A4E] font-bold text-xl mt-1">•</span>
                    <span>Built with modern technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF5A4E] font-bold text-xl mt-1">•</span>
                    <span>SEO-ready from day one</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF5A4E] font-bold text-xl mt-1">•</span>
                    <span>Designed to support long-term growth</span>
                  </li>
                </ul>
                <p className="text-lg">
                  Our focus is not just creating websites but building digital assets that help businesses attract customers and generate opportunities online.
                </p>
              </div>
            </div>

            {/* My Expertise */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display">My Expertise</h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p className="text-lg">
                  Over the years, I have focused on:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF5A4E]">✓</span>
                        <span>Custom Website Development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF5A4E]">✓</span>
                        <span>React Development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF5A4E]">✓</span>
                        <span>Next.js Development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF5A4E]">✓</span>
                        <span>WordPress Development</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF5A4E]">✓</span>
                        <span>Ecommerce Development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF5A4E]">✓</span>
                        <span>Technical SEO</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF5A4E]">✓</span>
                        <span>Performance Optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF5A4E]">✓</span>
                        <span>Responsive Web Design</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-lg">
                  These skills allow Vertexia to deliver websites that combine modern design, strong performance, and search engine visibility.
                </p>
              </div>
            </div>

            {/* About Vertexia */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display">About Vertexia</h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p className="text-lg">
                  Vertexia is a web development agency that helps businesses establish and grow their online presence.
                </p>
                <p className="text-lg">Our services include:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF5A4E]">✓</span>
                    <span>Custom Website Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF5A4E]">✓</span>
                    <span>WordPress Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF5A4E]">✓</span>
                    <span>Ecommerce Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF5A4E]">✓</span>
                    <span>Landing Page Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF5A4E]">✓</span>
                    <span>Website Redesign</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF5A4E]">✓</span>
                    <span>SEO Optimization</span>
                  </div>
                </div>
                <p className="text-lg">
                  We work with businesses that want professional websites built for performance, user experience, and growth.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display">Our Vision</h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p className="text-lg">
                  The vision behind Vertexia is to become a trusted digital partner for businesses looking to succeed online.
                </p>
                <p className="text-lg">
                  By combining modern web technologies with SEO best practices, we aim to create websites that deliver measurable results and long-term value.
                </p>
              </div>
            </div>

            {/* Connect Section */}
            <div className="mb-16 bg-gradient-to-r from-[#FF5A4E]/10 to-transparent rounded-2xl p-8 md:p-12 border border-[#FF5A4E]/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Connect With Me</h2>
              <p className="text-white/80 text-lg mb-8">
                If you're looking to build a website, improve your online presence, or discuss a project, feel free to get in touch.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#FF5A4E] font-bold">Email:</span>
                  <a href="mailto:reach.vertexia@gmail.com" className="hover:text-[#FF5A4E] transition-colors">
                    reach.vertexia@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#FF5A4E] font-bold">Website:</span>
                  <a href="https://vertexiaio.vercel.app/" className="hover:text-[#FF5A4E] transition-colors">
                    https://vertexiaio.vercel.app/
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <button className="bg-[#FF5A4E] hover:bg-[#ff4438] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>

            {/* Author Box */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4 font-display">About the Author</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                <span className="font-semibold text-white">Taha Awan</span> is the Founder of Vertexia, a web development agency based in Karachi, Pakistan. He specializes in custom website development, WordPress development, ecommerce solutions, and SEO-focused web experiences. With a focus on delivering high-performance websites that drive business growth, Taha is committed to helping businesses establish and succeed in the digital world.
              </p>
            </div>
          </div>
        </section>

        <FooterLinksSection />
      </main>
    </PageTransition>
  );
}
