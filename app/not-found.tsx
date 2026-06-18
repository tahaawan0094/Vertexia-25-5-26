import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040404]">
      <div
        className="absolute inset-0 bg-[radial-gradient(65%_55%_at_50%_0%,rgba(37,82,255,0.18)_0%,rgba(37,82,255,0)_58%),radial-gradient(50%_40%_at_50%_100%,rgba(255,90,78,0.1)_0%,rgba(255,90,78,0)_60%)]"
        aria-hidden="true"
      />
      <div className="relative flex min-h-screen items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-[#7d8cff]">Error 404</p>
          <h1 className="mt-4 text-7xl font-semibold tracking-tight text-white sm:text-8xl">
            404
          </h1>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Page not found
          </h2>
          <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">
            The page you’re looking for may have moved, been deleted, or never existed. Let’s get you back on track.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-[#FF5A4E] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ff6d5f]"
            >
              Go to Homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
