"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

export function CtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-anim",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-burgundy text-ivory" ref={containerRef}>
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000&auto=format&fit=crop"
          alt="CTA Background"
          fill
          className="object-cover mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center max-w-3xl">
        <span className="cta-anim font-sans text-xs tracking-[0.3em] uppercase text-champagne mb-6">
          Be part of our joy
        </span>
        <h2 className="cta-anim font-display text-5xl md:text-7xl mb-8 leading-tight">
          Will You <span className="font-serif italic text-champagne-soft">Join Us?</span>
        </h2>
        <p className="cta-anim font-serif text-xl mb-12 text-ivory/80 leading-relaxed">
          Please confirm your attendance before the day of the wedding. Your presence means the world to us as we begin our new journey together.
        </p>
        <div className="cta-anim flex flex-col sm:flex-row gap-6">
          <Link
            href="/rsvp"
            className="px-10 py-5 bg-champagne text-burgundy-dark font-sans text-xs tracking-[0.2em] uppercase rounded-full hover:bg-ivory hover:scale-105 transition-all duration-300"
          >
            RSVP Now
          </Link>
          <Link
            href="/registry"
            className="px-10 py-5 border border-champagne text-champagne font-sans text-xs tracking-[0.2em] uppercase rounded-full hover:bg-champagne hover:text-burgundy-dark transition-all duration-300"
          >
            Gift Registry
          </Link>
        </div>
      </div>
    </section>
  );
}
