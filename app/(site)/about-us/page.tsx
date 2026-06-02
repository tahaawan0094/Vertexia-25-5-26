export const metadata = {
  title: "About Vertexia | Building Websites That Drive Growth",
  description:
    "Learn about Vertexia, our mission, and how we build fast, SEO-friendly websites that help businesses grow online.",
};

export default function AboutUsPage() {
  return (
    <main className="site bg-black text-white font-body">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#FF5A4E] font-accent">
              About Vertexia
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl font-display">
              Let’s Get Every Small Business Online
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 font-accent">
              That’s been our mission from the start.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 font-accent">
              Vertexia is a web development partner for companies who want a stronger online presence, faster performance, and measurable growth.
              We design, build, and launch custom websites that are built for conversions, search visibility, and long-term scale.
            </p>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#050505] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
            <img
              src="/About-Us/about-vertexia-building-websites-that-drive-growth.webp"
              alt="About Vertexia - building websites that drive growth"
              className="w-full rounded-[28px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-[#0028c8] via-[#0038f0] to-[#4b8dff] px-4 py-28 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_35%)] opacity-70" />
        <div className="relative mx-auto max-w-[1180px]">
          <h2 className="text-left text-[56px] font-body font-medium leading-[73px] tracking-[-0.03em] text-white sm:text-[56px] md:text-[56px]">
            Every day we are asked simple but important questions about VERTEXIA. So what better way to tell you about us than to answer them.
          </h2>
        </div>
      </section>
    </main>
  );
}
