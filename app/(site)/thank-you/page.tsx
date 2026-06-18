"use client";

import PageTransition from "@/components/animations/PageTransition";
import Link from "next/link";

const highlights = [
  {
    title: "Usually responds in",
    value: "1 business day",
  },
  {
    title: "Project kickoff",
    value: "Within 24 hours",
  },
  {
    title: "Best for",
    value: "Startups & brands",
  },
];

export default function ThankYouPage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-[radial-gradient(65%_55%_at_50%_0%,rgba(37,82,255,0.18)_0%,rgba(37,82,255,0)_58%),radial-gradient(50%_40%_at_50%_100%,rgba(255,90,78,0.12)_0%,rgba(255,90,78,0)_60%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-[#0a102d]/85 p-8 text-center shadow-2xl shadow-[#0b0b38]/30 backdrop-blur-xl sm:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FF5A4E]/12 ring-1 ring-[#FF5A4E]/30">
              <svg
                viewBox="0 0 24 24"
                className="h-10 w-10 text-[#FF5A4E]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <p className="mt-6 text-sm uppercase tracking-[0.35em] text-[#7d8cff]">
              Thank You
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              We’ve received your request
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Our team is reviewing your details now. You’ll hear from us soon with the next steps, timeline, and a tailored quote.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-[#FF5A4E] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ff6d5f]"
              >
                Back to Home
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Pricing
              </Link>
            </div>

            <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.32em] text-white/50">
                    {item.title}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
