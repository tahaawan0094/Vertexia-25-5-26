import type { CSSProperties } from "react";

const withVertexia = [
  "Built-for-you website",
  "Ready in 7 days",
  "Design and copy",
  "0 transaction fees",
  "VIP support",
  "Domain & email included",
  "Easy-to-use editor",
  "30-day refund guarantee"
];

const withoutVertexia = [
  "DIY confusion",
  "Time wasting",
  "Hidden fees",
  "No customer service",
  "Weeks of effort",
  "Risk",
  "Big agency fees",
  "Giving up"
];

type IconProps = {
  className?: string;
};

const CheckIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const CrossIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

export default function ComparisonSection() {
  return (
    <section className="relative bg-[#040404] px-6 pb-32 pt-24 text-white max-[640px]:pb-8 max-[640px]:pt-8">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(28,74,135,0.35)_0%,rgba(5,6,8,0.0)_58%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1200px]">
        <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.45em] text-white/55">
          Say goodbye to faulty DIY websites and expensive agencies
        </p>
        <h2 className="mt-6 text-center text-[clamp(2.4rem,4.6vw,4.1rem)] font-medium leading-tight">
          Yes, you can afford a
          <span className="block">
            website{" "}
            <span className="box-decoration-clone inline-block border-l-4 border-[#FF5A4E] bg-[linear-gradient(-50deg,rgba(255,90,78,0)_22%,rgba(255,90,78,0.65))] px-2 text-white">
              built by pros
            </span>
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-[820px] text-center text-lg text-white/55">
          Websites designed for every purpose, to sell anything &amp; take bookings
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div
            className="animated-border"
            style={{ "--glow": "rgba(46, 204, 140, 0.95)" } as CSSProperties}
          >
            <svg
              className="animated-border__svg"
              aria-hidden="true"
            >
              <rect
                className="animated-border__rect"
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="22"
                ry="22"
                pathLength="1000"
                strokeDasharray="110 890"
                strokeDashoffset="0"
                style={{ animation: "border-travel 3.5s linear infinite" }}
              />
            </svg>
            <div className="relative z-10 rounded-[22px] bg-[#0b0b0b] p-10 shadow-[0_26px_60px_rgba(0,0,0,0.45)]">
              <h3 className="text-center text-2xl font-semibold">
                Websites with Vertexia
              </h3>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {withVertexia.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-400/60 text-emerald-400">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="animated-border"
            style={{ "--glow": "rgba(244, 63, 94, 0.95)" } as CSSProperties}
          >
            <svg
              className="animated-border__svg"
              aria-hidden="true"
            >
              <rect
                className="animated-border__rect"
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="22"
                ry="22"
                pathLength="1000"
                strokeDasharray="110 890"
                strokeDashoffset="0"
                style={{ animation: "border-travel 3.5s linear infinite" }}
              />
            </svg>
            <div className="relative z-10 rounded-[22px] bg-[#0b0b0b] p-10 shadow-[0_26px_60px_rgba(0,0,0,0.45)]">
              <h3 className="text-center text-2xl font-semibold">
                Websites without Vertexia
              </h3>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {withoutVertexia.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-rose-500/60 text-rose-400">
                      <CrossIcon className="h-4 w-4" />
                    </span>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="/pricing"
            className="inline-flex rounded-[12px] bg-[#FF5A4E] px-10 py-4 text-base font-medium text-white shadow-[0_12px_26px_rgba(255,90,78,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(255,90,78,0.45)] max-[640px]:px-12 max-[640px]:py-5 max-[640px]:text-lg max-[640px]:w-full max-[640px]:max-w-[320px]"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

