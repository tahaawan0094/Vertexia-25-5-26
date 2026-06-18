
import type { Metadata } from "next";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import PageTransition from "@/components/animations/PageTransition";

export const metadata: Metadata = {
    title: "About Vertexia | Building Websites That Drive Growth",
  description:
    "Learn about Vertexia, our mission, and how we build fast, SEO-friendly websites that help businesses grow online.",
  alternates: {
    canonical: "https://vertexiaio.vercel.app/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <PageTransition>
      <main className="site bg-black text-white font-body">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#FF5A4E] font-accent">
              About Vertexia
            </p>
            <h1 className="mt-6 text-2xl md:text-4xl lg:text-5xl font-bold leading-tight font-display max-[640px]:text-xl">
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
              alt="About Vertexia web development company helping businesses grow with custom websites and SEO solutions"
              title="about-vertexia-building-websites-that-drive-growth"
              className="w-full rounded-[28px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-[#0028c8] via-[#0038f0] to-[#4b8dff] px-4 py-28 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_35%)] opacity-70" />
        <div className="relative mx-auto max-w-[1180px]">
          <h2 className="text-left text-[clamp(2rem,5vw,3.5rem)] font-body font-medium leading-tight tracking-[-0.03em] text-white">
            Every day we are asked simple but important questions about VERTEXIA. So what better way to tell you about us than to answer them.
          </h2>
        </div>
      </section>

      <section className="bg-[#eff8ff] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-[clamp(1.75rem,4vw,2.25rem)] font-body font-semibold leading-[1.02] tracking-[-0.03em] text-[#0f172a]">
            Who is VERTEXIA?
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-[32px] bg-white p-8 text-center shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="mx-auto mb-6 h-[180px] w-[180px] overflow-hidden rounded-[32px] bg-[#f8fafc]">
                <img
                  src="/About-Us/who%20is%20section/company-overview-of-vertexia.png"
                  alt="Company overview of Vertexia providing web development, ecommerce, and digital growth services"
                  title="company-overview-of-vertexia"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold text-[#0f172a]">
                A team of 120 professionals
              </p>
            </article>

            <article className="rounded-[32px] bg-white p-8 text-center shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="mx-auto mb-6 h-[180px] w-[180px] overflow-hidden rounded-[32px] bg-[#f8fafc]">
                <img
                  src="/About-Us/who%20is%20section/about-vertexia-and-our-digital-expertise.png"
                  alt="About Vertexia and our expertise in custom website development and organic SEO strategies"
                  title="about-vertexia-and-our-digital-expertise"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold text-[#0f172a]">
                across the Pakistan,United States, United Kingdom and UAE
              </p>
            </article>

            <article className="rounded-[32px] bg-white p-8 text-center shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="mx-auto mb-6 h-[180px] w-[180px] overflow-hidden rounded-[32px] bg-[#f8fafc]">
                <img
                  src="/About-Us/who%20is%20section/small-business-website-solutions-by-vertexia.png"
                  alt="Small business website solutions designed to help companies establish a strong online presence"
                  title="small-business-website-solutions-by-vertexia"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold text-[#0f172a]">
                helping small businesses get online for over a decade.
              </p>
            </article>

            <article className="rounded-[32px] bg-white p-8 text-center shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="mx-auto mb-6 h-[180px] w-[180px] overflow-hidden rounded-[32px] bg-[#f8fafc]">
                <img
                  src="/About-Us/who%20is%20section/about-the-company-behind-vertexia.png"
                  alt="About the company Vertexia and its commitment to creating high-performance business websites"
                  title="about-the-company-behind-vertexia"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold text-[#0f172a]">
                Fully remote company (it works for us!)
              </p>
            </article>

            <article className="rounded-[32px] bg-white p-8 text-center shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="mx-auto mb-6 h-[180px] w-[180px] overflow-hidden rounded-[32px] bg-[#f8fafc]">
                <img
                  src="/About-Us/who%20is%20section/what-we-do-for-businesses-online.png"
                  alt="What we do at Vertexia including website development, SEO optimization, and ecommerce solutions"
                  title="what-we-do-for-businesses-online"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold text-[#0f172a]">
                not corporate, not a startup. Things get done quickly, but it’s not a mess.
              </p>
            </article>

            <article className="rounded-[32px] bg-white p-8 text-center shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="mx-auto mb-6 h-[180px] w-[180px] overflow-hidden rounded-[32px] bg-[#f8fafc]">
                <img
                  src="/About-Us/who%20is%20section/our-mission-and-vision-at-vertexia.png"
                  alt="Our mission and vision focused on helping businesses succeed through modern web solutions"
                  title="our-mission-and-vision-at-vertexia"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold text-[#0f172a]">
                Everyone talks to customers, and this keeps us honest.
              </p>
            </article>
          </div>
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

      <section className="bg-[#eff8ff] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-[2.75rem] font-body font-semibold leading-[1.02] tracking-[-0.03em] text-[#0f172a] sm:text-[3.5rem]">
                Built from a wide mix of cultures, perspectives, and stories.
          </h2>

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            <article className="rounded-[32px] bg-white p-6 text-center shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="mx-auto mb-6 h-[250px] w-full overflow-hidden rounded-[32px] bg-slate-100">
                <img
                  src="/About-Us/founder-taha-awan.webp"
                  alt="Taha Awan portrait"
                  title="Taha Awan"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a]">Taha Awan</h3>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                CEO & Founder – Turning ideas into momentum every single day.
              </p>
            </article>

            <article className="rounded-[32px] bg-white p-6 text-center shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="mx-auto mb-6 h-[250px] w-full overflow-hidden rounded-[32px] bg-slate-100">
                <img
                  src="/About-Us/co-founder-aamar.webp"
                  alt="M.Aamar portrait"
                  title="M.Aamar"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a]">M.Aamar</h3>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                Co-Founder. Speaks 12 languages. Strategic thinker with high standards. Big-hearted.
              </p>
            </article>

            <article className="rounded-[32px] bg-white p-6 text-center shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="mx-auto mb-6 flex h-[250px] w-full items-center justify-center rounded-[32px] bg-[#dbeafe] text-[#1d4ed8]">
                <span className="text-[3rem] font-semibold">?</span>
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a]">And you?</h3>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                Many VERTEXIA lifers have been with us since the beginning and made VERTEXIA what it is today.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#FF5A4E] font-accent">
              Why VERTEXIA?
            </p>
            <h2 className="mt-4 text-4xl font-display font-bold leading-tight text-[#0f172a] sm:text-5xl">
              Why VERTEXIA?
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#334155] font-body">
              VERTEXIA just solves the website problem differently. Most website providers provide the tech and leave you to figure it out. If that doesn’t work for you, you need to find someone to do it for you—but who? For how much? And what happens after it’s built? DIY and expensive web developers just doesn't work for most small business owners.
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#334155] font-body">
              So enter VERTEXIA: the easy, affordable, professional website built for any small business owner in a week.
            </p>
            <ul className="mt-10 space-y-4 text-lg leading-8 text-[#334155] font-body">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#16a34a]" />
                Professional editing anytime if you want it.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#16a34a]" />
                A personal marketing coach if you need it.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#16a34a]" />
                Tech simple enough to use without training.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#16a34a]" />
                Service that fits every business owner’s budget.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#16a34a]" />
                And happiness guaranteed, or your money back.
              </li>
            </ul>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-[#f8fafc] shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <img
                src="/About-Us/company-overview-of-our-web-development-services.webp"
                alt="Company overview showcasing Vertexia's professional web design and development services"
                title="company-overview-of-our-web-development-services"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,rgb(15,67,252)_0%,rgb(14,44,148)_100%)] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#93c5fd] font-accent">
            Pronunciation
          </p>
          <h2 className="mt-4 text-4xl font-display font-bold leading-tight sm:text-5xl">
            How do you pronounce UENI?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-100 font-body">
            It’s you and I. Yeah, no one gets it the first time, but then...
          </p>
          <div className="mt-10 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
            <img
              src="/About-Us/icon-smile.svg"
              alt="Smiling icon for UENI pronunciation"
              className="h-10 w-10"
            />
          </div>
        </div>
      </section>

      <FooterLinksSection />
    </main>
    </PageTransition> 
  );
}
