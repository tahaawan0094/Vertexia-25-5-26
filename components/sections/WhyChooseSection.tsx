"use client";
import FadeIn from "@/components/animations/FadeIn";

const benefits = [
  { label: "Reach new customers", icon: "spark" },
  { label: "Sell everywhere", icon: "cart" },
  { label: "Accept bookings", icon: "calendar" },
  { label: "Build your brand", icon: "badge" },
  { label: "Accelerate growth", icon: "rocket" },
  { label: "Meet your one-stop-shop", icon: "grid" }
];

type IconProps = { className?: string };

const SparkIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path
      d="M12 3l2.2 4.6L19 10l-4.8 2.4L12 17l-2.2-4.6L5 10l4.8-2.4L12 3z"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const CartIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path
      d="M3 5h2l2.4 9.5a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.7L21 8H7"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="19" r="1.5" strokeWidth="1.6" />
    <circle cx="17" cy="19" r="1.5" strokeWidth="1.6" />
  </svg>
);

const CalendarIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <rect x="4" y="5" width="16" height="15" rx="2" strokeWidth="1.6" />
    <path d="M8 3v4M16 3v4M4 9h16" strokeWidth="1.6" />
  </svg>
);

const BadgeIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path
      d="M12 3l2.5 4.4 5 .7-3.6 3.6.9 5-4.8-2.5-4.8 2.5.9-5L4.5 8l5-.7L12 3z"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const RocketIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path
      d="M14 3c-3.5.6-6.4 3.5-7 7l4 4c3.5-.6 6.4-3.5 7-7 0 0-2-4-4-4z"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M5 19l4-1-3-3-1 4zM13 7l4 4" strokeWidth="1.6" />
  </svg>
);

const GridIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <rect x="4" y="4" width="7" height="7" rx="1.5" strokeWidth="1.6" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" strokeWidth="1.6" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" strokeWidth="1.6" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" strokeWidth="1.6" />
  </svg>
);

const iconMap: Record<string, (props: IconProps) => JSX.Element> = {
  spark: SparkIcon,
  cart: CartIcon,
  calendar: CalendarIcon,
  badge: BadgeIcon,
  rocket: RocketIcon,
  grid: GridIcon
};

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[#040404] px-6 pb-32 pt-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_70%_45%,rgba(16,78,140,0.35)_0%,rgba(5,5,5,0)_70%)]" />
      <FadeIn>
      <div className="relative mx-auto max-w-[1200px]">
        <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-white/50">
          WHY CHOOSE Vertexia?
        </p>
        <h2 className="mt-4 text-center text-[clamp(2.4rem,4.8vw,4.2rem)] font-medium max-[420px]:text-[2.2rem]">
          We help you grow your business
        </h2>
        <p className="mx-auto mt-4 max-w-[720px] text-center text-lg text-white/60 max-[420px]:max-w-[320px] max-[420px]:text-[14px] max-[420px]:leading-[20px]">
          Your one-stop-shop to attract and convert customers
        </p>

        <div className="mt-14 flex flex-col-reverse lg:grid lg:grid-cols-[1fr_1.05fr] lg:gap-10 md:gap-8 max-[640px]:gap-8">
          <div className="max-[640px]:mt-10">
            <div className="max-[640px]:flex max-[640px]:flex-col">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2d6bff] text-[#2d6bff]">
                  <img
                    src="/images%207/65bc71e376363be364dfb0b6_icon-money-blue.svg"
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </span>
                <h3 className="text-lg font-semibold text-white">
                  Save time &amp; money
                </h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/60 max-[640px]:mx-auto max-[640px]:max-w-[420px]">
                Skip the hassle of DIY and the high costs of agency-built
                websites. Choose Vertexia, the most affordable way to launch and
                grow your online presence successfully.
              </p>
            </div>

            <div className="mt-6 space-y-5 text-white/45 max-[640px]:hidden">
              {benefits.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={item.label} className="flex items-center gap-3 text-base">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative max-[960px]:mx-auto max-[960px]:w-full">
            <div className="overflow-hidden rounded-[20px] bg-[#0b0b0b] shadow-[0_30px_60px_rgba(0,0,0,0.55)]">
              <img
                src="/images 7/advanced-web-design-seo-platform.webp"
                alt="Vertexia editor preview"
                className="h-full w-full object-cover max-[960px]:min-h-[320px]"
              />
            </div>
          </div>
        </div>
      </div>
      </FadeIn>
    </section>
  );
}

