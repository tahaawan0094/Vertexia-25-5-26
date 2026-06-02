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

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-[2.75rem] font-body font-semibold leading-[1.02] tracking-[-0.03em] text-[#0f172a] sm:text-[3.5rem]">
            What is VERTEXIA?
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[32px] bg-[#f8fafc] p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
              <p className="text-[1.35rem] font-body font-semibold text-[#1d4ed8]">#01</p>
              <p className="mt-6 text-base leading-7 text-[#0f172a]">
                The team that will build your business website in 7 days for under $200.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f8fafc] p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
              <p className="text-[1.35rem] font-body font-semibold text-[#1d4ed8]">#02</p>
              <p className="mt-6 text-base leading-7 text-[#0f172a]">
                The easiest way to get a website and marketing done for your small business.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f8fafc] p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
              <p className="text-[1.35rem] font-body font-semibold text-[#1d4ed8]">#03</p>
              <p className="mt-6 text-base leading-7 text-[#0f172a]">
                The solution to “the website problem”.
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-[2.5rem] font-body font-semibold leading-[1.02] tracking-[-0.03em] text-[#0f172a] sm:text-[3rem]">
              What’s the website problem?
            </h3>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#475569]">
              When business owners don’t launch a website or live with a website that doesn’t work simply because getting a website is just too hard, too expensive or too time consuming.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
