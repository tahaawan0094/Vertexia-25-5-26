export default function DoneForYouHeroSection() {
  return (
    <section
      className="relative overflow-visible pb-4 pt-12 text-center px-4 max-[640px]:pb-6 max-[640px]:pt-10 max-[420px]:px-3"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[350px] bg-[linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(8,8,8,0)_100%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center justify-start gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <h1 className="text-balance mx-auto max-w-[960px] text-[110px] leading-[118px] font-medium tracking-[-0.03em] text-white/80 sm:text-[82px] sm:leading-[90px] max-[768px]:text-[64px] max-[768px]:leading-[72px] max-[640px]:text-[42px] max-[640px]:leading-[50px] max-[420px]:text-[32px] max-[420px]:leading-[40px]">
          Get a <span className="box-decoration-clone inline-block border-l-4 border-[#2a27ff] bg-[linear-gradient(-50deg,rgba(58,41,209,0)_22%,rgba(58,41,209,0.6))] px-4 py-2 text-white/90">website built</span>
          <span className="block">for you in 7 days</span>
        </h1>

        <div className="flex flex-col justify-center gap-6 max-[640px]:gap-4">
          {[ 
            { text: "Domain & Email", icon: "check" },
            { text: "Hosting & Security", icon: "check" },
            { text: "Ready in 7 Days", icon: "check" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 text-lg font-semibold text-white/90 sm:text-xl max-[768px]:text-base max-[640px]:text-base max-[420px]:text-sm"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center flex-shrink-0">
                <img
                  src="/Pricing page  images/check icon.svg"
                  alt="Check icon"
                  className="h-6 w-6 max-[640px]:h-5 max-[640px]:w-5"
                />
              </span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <a
          href="/pricing"
          className="inline-flex min-w-[240px] justify-center rounded-[16px] bg-[#ff5a4e] px-20 py-4 text-xl font-semibold text-white shadow-[0_20px_60px_rgba(255,90,78,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ff6f58] max-[640px]:min-w-[200px] max-[640px]:px-16 max-[640px]:py-3 max-[640px]:text-lg max-[420px]:min-w-[160px] max-[420px]:px-12 max-[420px]:py-2.5 max-[420px]:text-base"
        >
          Get 87% off
        </a>
      </div>
    </section>
  );
}
