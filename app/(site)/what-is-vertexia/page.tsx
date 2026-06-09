import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Montserrat, Poppins } from "next/font/google";
import FooterLinksSection from "@/components/sections/FooterLinksSection";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "What is Vertexia? | A Modern Web Development & SEO Growth Partner",
  description: "Discover what Vertexia is, how it helps businesses build high-performance websites, improve online visibility, and create scalable digital growth systems designed for long-term success.",
  alternates: {
    canonical: "https://vertexiaio.vercel.app/what-is-vertexia",
  },
  openGraph: {
    title: "What is Vertexia? | A Modern Web Development & SEO Growth Partner",
    description: "Discover what Vertexia is, how it helps businesses build high-performance websites, improve online visibility, and create scalable digital growth systems designed for long-term success.",
    images: ["/Blog images/modern-web-development-digital-growth-by-vertexia.webp"],
  },
};

// Reusable Image Component with Caption and Description
const BlogImage = ({ src, alt, title, caption, description }: { src: string, alt: string, title: string, caption: string, description: string }) => (
  <div className="space-y-4 group my-12">
    <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 transition-colors group-hover:border-[#ff5a1f]/30">
      <Image 
        src={src} 
        alt={alt} 
        title={title}
        fill 
        className="object-cover transition-transform duration-700 group-hover:scale-105" 
      />
    </div>
    <div className="px-2">
      <p className="text-sm font-bold text-[#FF5A4E] uppercase tracking-wider mb-1">{caption}</p>
      <p className="text-sm text-white/50 leading-relaxed italic">{description}</p>
    </div>
  </div>
);

export default function WhatIsVertexia() {
  return (
    <article className={`min-h-screen bg-[#040404] text-white ${poppins.className}`}>
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-6">
        <div className="max-w-[1000px] mx-auto text-center">
          <h1 className={`${montserrat.className} text-[clamp(1.75rem,7vw,4rem)] font-extrabold leading-[1.1] mb-6 md:mb-8 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent`}>
            What is Vertexia? <br />
            <span className="text-[#FF5A4E]">A Modern Web Development & SEO Growth Partner for Businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-[800px] mx-auto mb-10 md:mb-12">
            Discover what Vertexia is, how it helps businesses build high-performance websites, improve online visibility, and create scalable digital growth systems designed for long-term success.
          </p>
          <div className="space-y-6">
            <div className="relative aspect-video md:aspect-[21/9] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image 
                src="/Blog images/modern-web-development-digital-growth-by-vertexia.webp" 
                alt="Modern custom website development and digital growth system illustration by Vertexia" 
                title="Modern Web Development & Digital Growth by Vertexia"
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
            </div>
            <div className="max-w-[800px] mx-auto text-center px-4">
              <p className="text-sm font-bold text-[#FF5A4E] uppercase tracking-wider mb-2">High-performance custom websites designed for scalability, SEO, and modern business growth.</p>
              <p className="text-sm text-white/50 leading-relaxed italic">A futuristic hero illustration representing modern web development, scalable business websites, SEO-focused digital systems, and performance-driven online growth solutions by Vertexia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-20 md:pb-32">
        <div className="max-w-[850px] mx-auto space-y-12 md:space-y-16">
          
          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-white/80">
              In today’s digital world, having a website is no longer enough. Businesses need fast, scalable, SEO-optimized, and conversion-focused digital systems that help them stand out, rank on Google, and generate real customers.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-white/80">
              That’s where <strong className="text-white">Vertexia</strong> comes in.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-white/80">
              Vertexia is a modern web development and digital growth company that helps businesses build high-performance custom websites using technologies like React and Next.js. Unlike traditional agencies that rely heavily on templates or plugin-based systems, Vertexia focuses on building scalable digital experiences designed for long-term growth.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className={`${montserrat.className} text-3xl font-bold text-white`}>Why Modern Businesses Need More Than Just a Website</h2>
            <BlogImage 
              src="/Blog images/why-many-business-websites-fail-to-generate-results.webp"
              alt="Illustration showing common reasons businesses fail online including slow websites and poor digital strategy"
              title="Why Many Business Websites Fail to Generate Results"
              caption="Modern businesses need more than just a website to succeed online."
              description="A digital illustration highlighting common online business problems such as poor website performance, weak SEO foundations, disconnected marketing, and low conversion rates affecting modern businesses."
            />
            <p className="text-lg leading-relaxed text-white/80">
              Many businesses believe that simply launching a website will automatically generate traffic, leads, and sales. In reality, most websites fail because they are built without strategy, performance optimization, or proper SEO foundations.
            </p>
            <div className="grid md:grid-cols-2 gap-8 bg-white/5 p-8 rounded-3xl border border-white/10">
              <div>
                <h3 className="text-[#FF5A4E] font-bold mb-4">A business website today must:</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Load quickly on all devices</li>
                  <li>• Rank well on search engines</li>
                  <li>• Provide excellent user experience</li>
                  <li>• Build trust instantly</li>
                  <li>• Convert visitors into customers</li>
                  <li>• Scale as the business grows</li>
                </ul>
              </div>
              <div>
                <h3 className="text-red-400 font-bold mb-4">Common Struggles:</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Slow loading speed</li>
                  <li>• Poor mobile optimization</li>
                  <li>• Outdated designs</li>
                  <li>• Weak SEO structure</li>
                  <li>• Plugin dependency</li>
                  <li>• Security vulnerabilities</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className={`${montserrat.className} text-3xl font-bold text-white`}>What Makes Vertexia Different?</h2>
            <BlogImage 
              src="/Blog images/traditional-websites-vs-modern-high-performance-websites.webp"
              alt="Comparison between outdated websites and modern high-performance custom websites"
              title="Traditional Websites vs Modern High-Performance Websites"
              caption="Modern websites outperform outdated systems in speed, SEO, and scalability."
              description="A split-screen comparison illustration showing the difference between outdated template-based websites and modern custom web development focused on speed, SEO, scalability, and user experience."
            />
            <p className="text-lg leading-relaxed text-white/80">
              Vertexia focuses on creating modern, performance-driven websites instead of relying entirely on pre-made templates or heavy plugin systems. Unlike traditional website builders, we use modern technologies like <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-[#FF5A4E] hover:text-white transition">React</a> and <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-[#FF5A4E] hover:text-white transition">Next.js</a> for superior performance.
            </p>
            <div className="bg-gradient-to-br from-[#111] to-black p-6 md:p-8 rounded-3xl border border-white/10">
              <p className="text-white/60 mb-4 font-semibold uppercase tracking-wider text-sm">The Vertexia Combination:</p>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#FF5A4E] rounded-full flex-shrink-0"></span> <span className="text-sm md:text-base text-white/80">Custom web development</span></li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#FF5A4E] rounded-full flex-shrink-0"></span> <span className="text-sm md:text-base text-white/80">SEO-focused architecture</span></li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#FF5A4E] rounded-full flex-shrink-0"></span> <span className="text-sm md:text-base text-white/80">Modern frontend technologies</span></li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#FF5A4E] rounded-full flex-shrink-0"></span> <span className="text-sm md:text-base text-white/80">Conversion-focused design</span></li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#FF5A4E] rounded-full flex-shrink-0"></span> <span className="text-sm md:text-base text-white/80">Scalable website systems</span></li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className={`${montserrat.className} text-3xl font-bold text-white`}>Custom Website Development with React & Next.js</h2>
            <BlogImage 
              src="/Blog images/modern-responsive-website-design-for-businesses.webp"
              alt="Modern responsive business website design mockup with premium UI and UX layout"
              title="Modern Responsive Website Design for Businesses"
              caption="Custom websites built for scalability, responsiveness, and modern user experiences."
              description="A premium website interface mockup displaying responsive web design, modern UI/UX principles, mobile optimization, and clean business-focused layouts designed for digital growth."
            />
            <p className="text-lg leading-relaxed text-white/80">
              One of the biggest advantages of Vertexia is its focus on modern technologies. These frameworks are widely used by leading global platforms like <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer" className="text-[#FF5A4E] hover:text-white transition">Netflix</a>, <a href="https://www.airbnb.com" target="_blank" rel="noopener noreferrer" className="text-[#FF5A4E] hover:text-white transition">Airbnb</a>, and <a href="https://www.uber.com" target="_blank" rel="noopener noreferrer" className="text-[#FF5A4E] hover:text-white transition">Uber</a> because they offer faster performance, better user experience, and higher scalability.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className={`${montserrat.className} text-3xl font-bold text-white`}>Why Website Speed Matters for SEO and Conversions</h2>
            <BlogImage 
              src="/Blog images/why-website-speed-matters-for-seo-and-user-experience.webp"
              alt="Website speed optimization and performance-focused web development visualization"
              title="Why Website Speed Matters for SEO and User Experience"
              caption="Fast-loading websites improve SEO rankings, conversions, and user experience."
              description="A modern website performance illustration showing speed optimization, Core Web Vitals metrics, fast-loading interfaces, and SEO-focused web architecture for improved digital growth."
            />
            <p className="text-lg leading-relaxed text-white/80">
              Website speed has become one of the most important ranking and conversion factors online. <a href="https://www.searchenginejournal.com/google-page-experience-ranking-factor" target="_blank" rel="noopener noreferrer" className="text-[#FF5A4E] hover:text-white transition">Studies consistently show</a> that users leave websites quickly if pages take too long to load. Google's <a href="https://web.dev/vitals" target="_blank" rel="noopener noreferrer" className="text-[#FF5A4E] hover:text-white transition">Core Web Vitals</a> are essential ranking factors. Vertexia builds websites with performance as a core priority.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className={`${montserrat.className} text-3xl font-bold text-white`}>SEO Is More Than Keywords</h2>
            <BlogImage 
              src="/Blog images/seo-optimization-and-website-growth-analytics.webp"
              alt="SEO analytics dashboard showing website traffic growth and search engine optimization metrics"
              title="SEO Optimization and Website Growth Analytics"
              caption="Technical SEO and performance optimization help businesses improve online visibility."
              description="A futuristic SEO analytics visualization featuring keyword rankings, website traffic growth, digital performance tracking, and search engine optimization dashboards for modern businesses."
            />
            <p className="text-lg leading-relaxed text-white/80">
              A properly optimized website should include semantic page structure, optimized metadata, clean URLs, and fast loading speed. According to <a href="https://developers.google.com/search" target="_blank" rel="noopener noreferrer" className="text-[#FF5A4E] hover:text-white transition">Google Search Central</a>, technical SEO is critical for online visibility. Vertexia focuses on building websites with SEO foundations integrated directly into the development process.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className={`${montserrat.className} text-3xl font-bold text-white`}>Services Offered by Vertexia</h2>
            <BlogImage 
              src="/Blog images/modern-website-development-workflow.webp"
              alt="Custom website development workflow showing strategy design SEO optimization and digital growth process"
              title="Modern Website Development Workflow"
              caption="A structured development process helps businesses build scalable digital systems."
              description="A workflow illustration representing the stages of modern web development including strategy, UI/UX design, development, SEO optimization, performance testing, and scalable digital growth."
            />
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Custom Website Development", desc: "Modern websites built using React, Next.js, and scalable frontend technologies." },
                { title: "SEO Optimization", desc: "Technical SEO implementation designed to improve visibility and rankings." },
                { title: "UI/UX Design", desc: "User-focused interfaces designed to improve engagement and conversions." },
                { title: "Responsive Development", desc: "Mobile-friendly websites optimized for all screen sizes and devices." },
                { title: "Performance Optimization", desc: "Fast-loading websites designed to improve user experience and Core Web Vitals." },
                { title: "Business Website Solutions", desc: "Custom websites for startups, agencies, ecommerce brands, and service businesses." }
              ].map((service, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF5A4E]/50 transition-colors">
                  <h4 className="font-bold text-[#FF5A4E] mb-2">{service.title}</h4>
                  <p className="text-white/70 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className={`${montserrat.className} text-3xl font-bold text-white`}>The Importance of a Scalable Digital Presence</h2>
            <BlogImage 
              src="/Blog images/responsive-website-design-across-all-devices.webp"
              alt="Responsive business website displayed across desktop tablet and mobile devices"
              title="Responsive Website Design Across All Devices"
              caption="Modern websites must deliver seamless experiences on every screen size."
              description="A responsive web design illustration showing modern business websites optimized for desktop, tablet, and mobile devices to improve usability and customer engagement."
            />
            <p className="text-lg leading-relaxed text-white/80">
              A website should not just solve today's needs. It should support future growth. <a href="https://www.w3.org/standards" target="_blank" rel="noopener noreferrer" className="text-[#FF5A4E] hover:text-white transition">Modern web standards</a> ensure your website remains relevant and performant. Vertexia focuses on building websites designed for long-term scalability instead of short-term convenience.
            </p>
          </div>

          <div className="pt-12 border-t border-white/10">
            <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8`}>Conclusion</h2>
            <p className="text-lg md:text-xl leading-relaxed text-white/70 italic">
              Modern businesses need more than basic websites. They need fast, scalable, SEO-optimized digital systems that support long-term growth. Vertexia helps businesses build modern web experiences using custom development technologies while focusing on performance, scalability, and SEO.
            </p>
            <div className="mt-12 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#FF5A4E] to-[#ff2d20] text-center shadow-2xl shadow-red-500/10">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Ready to grow your business?</h3>
              <p className="mb-8 opacity-90 text-sm md:text-base">Let's build a high-performance website tailored for your success. Learn more about <a href="https://developers.google.com/web/tools/lighthouse" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 transition">web performance best practices</a>.</p>
              <button className="bg-white text-black px-8 md:px-10 py-3 md:py-4 rounded-lg md:rounded-xl font-bold hover:scale-105 transition-transform shadow-lg text-sm md:text-base">
                Get Started with Vertexia
              </button>
            </div>
          </div>

        </div>
      </section>
      <FooterLinksSection />
    </article>
  );
}
