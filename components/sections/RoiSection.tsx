"use client";

import FadeIn from "@/components/animations/FadeIn";
import { useMemo, useState } from "react";

const subscriptionCost = 6873; // 24.99 USD converted to PKR

export default function RoiSection() {
  const [hoursPerWeek, setHoursPerWeek] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(13750);

  const { hoursPerMonth, valueOfTime, totalRoi } = useMemo(() => {
    const hoursPerMonthCalc = hoursPerWeek * 4;
    const value = hoursPerMonthCalc * hourlyRate;
    const roi = Math.round(value - subscriptionCost);
    return {
      hoursPerMonth: hoursPerMonthCalc,
      valueOfTime: value,
      totalRoi: roi
    };
  }, [hoursPerWeek, hourlyRate]);

  return (
    <section className="relative overflow-hidden bg-white px-6 pb-28 pt-24 text-[#0b0b0b]">
      

      <FadeIn>
      <div className="mx-auto max-w-[1200px]">
        <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-black/50">
          THE BOTTOM LINE
        </p>
        <h2 className="mt-4 text-center text-[clamp(2.4rem,4.8vw,4rem)] font-medium">
          How much is your time worth to you?
        </h2>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="max-w-[520px] text-lg text-black/60">
              Hours you lose per week fixing your website, creating content,
              adding products, taking bookings over the phone, adding plugins...
            </p>

            <div className="mt-10">
              <div className="text-2xl font-medium text-black">
                {hoursPerWeek} hours
              </div>
              <div className="mt-4">
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={hoursPerWeek}
                  onChange={(event) => setHoursPerWeek(Number(event.target.value))}
                  className="h-2 w-full accent-[#2d6bff]"
                />
                <div className="mt-2 flex justify-between text-sm text-black/50">
                  <span>1</span>
                  <span>20</span>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-lg text-black/60">
                How much 1 hour of your time is worth to you
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-[8px] bg-[#f2f2f2] px-4 py-3 text-lg font-semibold text-black">
                  <span>Rs.</span>
                  <input
                    type="number"
                    min={1}
                    value={hourlyRate}
                    onChange={(event) => setHourlyRate(Number(event.target.value))}
                    className="w-[90px] bg-transparent text-black outline-none"
                  />
                </div>
                <span className="text-lg text-black/60">/hour</span>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[20px] bg-[#141414] p-8 max-[640px]:p-4 text-white shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
              <p className="text-lg font-medium text-white/80">
                Return on Investment
                <span className="block">Every Month with Vertexia</span>
              </p>
              <div className="mt-6 text-[64px] font-semibold">
                Rs.{totalRoi.toLocaleString()}
              </div>
              <a
                href="/pricing"
                className="mt-6 inline-flex w-full justify-center rounded-[10px] bg-[#FF5A4E] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_26px_rgba(255,90,78,0.35)]"
              >
                Get Vertexia
              </a>

              <div className="mt-6 border-t border-white/10 pt-6 text-sm text-white/70">
                <p className="mb-4 text-base font-semibold text-white">
                  How did we get this number?
                </p>
                <div className="flex items-center justify-between py-1">
                  <span>Hours lost per month</span>
                  <span className="text-white">
                    {hoursPerMonth} hours
                  </span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span>Value of Vertexia for saving {hoursPerMonth} hours of your time</span>
                  <span className="text-white">
                    Rs.{valueOfTime.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span>Cost of Vertexia subscription per month</span>
                  <span className="text-white">Rs.{subscriptionCost}</span>
                </div>
                <div className="mt-4 border-t border-white/10 pt-4 text-base font-semibold text-white">
                  <div className="flex items-center justify-between">
                    <span>Total ROI per month</span>
                    <span>Rs.{totalRoi.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </FadeIn>
    </section>
  );
}

