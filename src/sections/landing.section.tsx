"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export const LandingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const targetDate = new Date("2026-06-12T00:00:00").getTime();

    const updateCountdown = () => {
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
      else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <section
      ref={sectionRef}
      id="#"
      className="bg-gradient-landing pt-20 md:pt-36 pb-8 md:pb-16 flex items-center flex-col overflow-hidden"
    >
      {/* Countdown */}
      <div className={`w-full px-4 flex items-center justify-center gap-[2vw] sm:gap-6 font-mono font-extralight text-[#FDFCEB] tracking-widest transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
        <div className="flex items-center flex-col min-w-0">
          <span className="text-[8vw] sm:text-6xl md:text-8xl tabular-nums leading-none">{timeLeft.days}</span>
          <p className="text-[2.5vw] sm:text-2xl md:text-4xl">jours</p>
        </div>

        <span className="text-[8vw] sm:text-6xl md:text-8xl pb-[2vw] sm:pb-6 md:pb-8 shrink-0">:</span>

        <div className="flex items-center flex-col min-w-0">
          <span className="text-[8vw] sm:text-6xl md:text-8xl tabular-nums leading-none">{formatNumber(timeLeft.hours)}</span>
          <p className="text-[2.5vw] sm:text-2xl md:text-4xl">heures</p>
        </div>

        <span className="text-[8vw] sm:text-6xl md:text-8xl pb-[2vw] sm:pb-6 md:pb-8 shrink-0">:</span>

        <div className="flex items-center flex-col min-w-0">
          <span className="text-[8vw] sm:text-6xl md:text-8xl tabular-nums leading-none">{formatNumber(timeLeft.minutes)}</span>
          <p className="text-[2.5vw] sm:text-2xl md:text-4xl">minutes</p>
        </div>

        <span className="text-[8vw] sm:text-6xl md:text-8xl pb-[2vw] sm:pb-6 md:pb-8 shrink-0">:</span>

        <div className="flex items-center flex-col min-w-0">
          <span className="text-[8vw] sm:text-6xl md:text-8xl tabular-nums leading-none">{formatNumber(timeLeft.seconds)}</span>
          <p className="text-[2.5vw] sm:text-2xl md:text-4xl">secondes</p>
        </div>
      </div>

      <h1 className="sr-only">Les CuicuiteDays | 12 & 13 Juin 2026</h1>

      {/* Illustration area */}
      <div className={`w-full max-w-4xl relative flex items-center justify-center px-4 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="flex items-end flex-col font-salted text-[#FDFCEB] absolute top-[8%] left-[2%] sm:left-[3%] md:left-[5%] -rotate-12 z-10">
          <span className="text-base sm:text-xl md:text-2xl">&quot;THE BEST FESTIVAL IN THE WOLRD&quot;</span>
          <span className="text-sm sm:text-base md:text-lg mr-3">Mick Jäger</span>
        </div>

        <Image
          src="/image/landing.svg"
          alt="Illustration représentant la direction artistique du festival Les CuicuiteDays"
          width={1000}
          height={1000}
          className="w-full h-auto max-w-[700px] object-contain pt-16 sm:pt-12 md:pt-0"
          priority
        />

        <div className="hidden md:flex items-center flex-col gap-4 font-salted text-[#FDFCEB] absolute top-[45%] right-[4%] lg:right-[2%] animate-bounce-slow">
          <span className="text-2xl lg:text-3xl">SCROLL</span>

          <svg width="16" height="80" viewBox="0 0 16 117" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.81929 1C7.81929 1.12657 7.81929 1.25315 7.81929 18.0153C7.81929 34.7775 7.81929 68.1714 7.51465 101.486"
              stroke="#FDFCEB"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M2.06695 100.898L13.5786 101.266C15.0051 101.311 15.9261 102.793 15.3353 104.093L10.2292 115.32C9.54855 116.817 7.45308 116.898 6.65803 115.459L0.25248 103.864C-0.497618 102.506 0.516526 100.849 2.06695 100.898Z"
              fill="#FDFCEB"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
