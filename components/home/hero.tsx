"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Basic initial animation
      gsap.fromTo(
        ".hero-text",
        { y: 100, opacity: 0, rotateX: 20 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power4.out",
          delay: 0.5,
        }
      );
      
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black-elegant"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpeg"
          alt="Anne & Emediong Wedding"
          fill
          priority
          className="object-cover object-top opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black-elegant/40 via-transparent to-black-elegant/90" />
      </div>

      <div className="relative z-10 text-center text-ivory flex flex-col items-center justify-center pt-20" ref={textRef}>
        <span className="hero-subtitle font-sans text-sm tracking-[0.3em] uppercase mb-6 text-champagne-soft">
          We Invite You To Celebrate
        </span>
        
        <h1 className="hero-text font-display text-5xl md:text-8xl lg:text-9xl mb-4 leading-tight font-light tracking-tight">
          Anne <span className="font-serif italic text-champagne">&</span> <br className="md:hidden" /> Emediong
        </h1>
        
        <p className="hero-text font-serif text-2xl md:text-4xl italic mb-12 text-champagne-light">
          YAQAR 2026
        </p>

        <div className="hero-subtitle flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="text-center">
            <h3 className="font-sans text-xs tracking-[0.1em] text-champagne/80 uppercase mb-2">Traditional Marriage</h3>
            <p className="font-serif text-xl border-b border-champagne/30 pb-2">14th May 2026</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-champagne/30" />
          <div className="text-center">
            <h3 className="font-sans text-xs tracking-[0.1em] text-champagne/80 uppercase mb-2">White Wedding</h3>
            <p className="font-serif text-xl border-b border-champagne/30 pb-2">16th May 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
