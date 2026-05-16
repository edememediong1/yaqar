"use client";

import { useEffect, useRef } from "react";
import { Navbar } from "@/components/layout/navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FAMILIES = [
  {
    role: "Bride's Family",
    names: "Mr. & Dr. Mrs Usang Moses Essang",
    description: "We are deeply grateful for their endless love, prayers, and guidance that have shaped us into who we are today."
  },
  {
    role: "Groom's Family",
    names: "Mr. & Mrs Bassey Ekpenyong Edem",
    description: "Their unwavering support and blessing have been the foundation upon which our beautiful union is built."
  }
];

export default function FamilyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fam-header",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out", delay: 0.2 }
      );

      gsap.utils.toArray('.fam-card').forEach((card: any) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%"
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-ivory text-black-elegant pb-32" ref={containerRef}>
      <Navbar />

      <section className="pt-48 pb-20 px-6 max-w-4xl mx-auto text-center border-b border-black-elegant/10 mb-20">
        <span className="fam-header font-sans text-xs tracking-[0.3em] text-burgundy uppercase mb-4 block">
          Our Roots
        </span>
        <h1 className="fam-header font-display text-5xl md:text-7xl mb-8 leading-tight">
          Family <span className="font-serif italic text-black-elegant/60">Blessings</span>
        </h1>
        <p className="fam-header font-serif text-lg md:text-xl text-black-elegant/70 max-w-2xl mx-auto leading-relaxed">
          We honor the love and sacrifice of our parents. This union is a coming together of two wonderful families.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {FAMILIES.map((family, idx) => (
            <div key={idx} className="fam-card flex-1 bg-white rounded-3xl p-8 md:p-12 shadow-sm text-center flex flex-col items-center justify-center">
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-champagne mb-4 block">
                {family.role}
              </span>
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-burgundy-dark">
                {family.names}
              </h2>
              <p className="font-serif text-Black-elegant/70 leading-relaxed max-w-sm">
                {family.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
