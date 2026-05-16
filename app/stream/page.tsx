"use client";

import { useEffect, useRef } from "react";
import { Navbar } from "@/components/layout/navbar";
import gsap from "gsap";
import { PlayCircle } from "lucide-react";

export default function LiveStreamPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stream-anim",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-black-elegant text-ivory relative" ref={containerRef}>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-luminosity z-0" />
      <Navbar />

      <section className="relative z-10 pt-40 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center min-h-[80vh] justify-center">
        <span className="stream-anim font-sans text-xs tracking-[0.3em] text-champagne uppercase mb-4 block">
          Join Virtually
        </span>
        <h1 className="stream-anim font-display text-4xl md:text-6xl mb-12 text-center leading-tight">
          Live Wedding <span className="font-serif italic text-white/70">Broadcast</span>
        </h1>

        <div className="stream-anim w-full aspect-video bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center p-6 shadow-2xl relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-burgundy/10 group-hover:bg-burgundy/20 transition-colors duration-500" />
          
          <PlayCircle size={80} strokeWidth={1} className="text-champagne mb-6 opacity-80 group-hover:transform group-hover:scale-110 transition-all duration-500" />
          <h3 className="font-display text-2xl md:text-3xl mb-2">Stream will begin shortly</h3>
          <p className="font-sans text-xs uppercase tracking-widest text-white/50 text-center">
            Broadcasting on May 16th, 2026 at 10:00 AM (WAT)
          </p>
        </div>

        <p className="stream-anim font-serif text-lg text-white/60 mt-12 text-center max-w-xl">
          Even if miles apart, we are honored to have you witness our special day. The live stream will be available here when the event begins.
        </p>
      </section>
    </main>
  );
}
