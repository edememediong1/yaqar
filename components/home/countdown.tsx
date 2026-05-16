"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set wedding date to May 16, 2026
    const targetDate = new Date("2026-05-16T10:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeEntries = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full bg-burgundy-dark text-champagne-light py-20 flex flex-col items-center justify-center">
      <h2 className="font-serif italic text-3xl md:text-5xl mb-12 text-center">
        The Countdown Begins
      </h2>
      <div className="flex space-x-6 md:space-x-12">
        {timeEntries.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <span className="font-display text-4xl md:text-7xl font-light tabular-nums leading-none mb-2">
              {String(value).padStart(2, "0")}
            </span>
            <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase opacity-80">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
