"use client";

import Link from "next/link";
import { MoveUp } from "lucide-react";
import gsap from "gsap";

export function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black-elegant text-ivory pt-24 pb-12 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          <div>
            <h2 className="font-display text-4xl tracking-widest uppercase mb-4">
              A <span className="text-champagne font-serif italic">&</span> E
            </h2>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-ivory/50">
              YAQAR 2026
            </p>
          </div>

          <div className="flex gap-12 sm:gap-24">
            <div className="flex flex-col gap-4 font-sans text-xs tracking-widest uppercase">
              <Link href="/story" className="text-ivory/70 hover:text-champagne transition-colors">Our Story</Link>
              <Link href="/details" className="text-ivory/70 hover:text-champagne transition-colors">Events</Link>
              <Link href="/family" className="text-ivory/70 hover:text-champagne transition-colors">Family</Link>
            </div>
            <div className="flex flex-col gap-4 font-sans text-xs tracking-widest uppercase">
              <Link href="/gallery" className="text-ivory/70 hover:text-champagne transition-colors">Gallery</Link>
              <Link href="/registry" className="text-ivory/70 hover:text-champagne transition-colors">Gift Registry</Link>
              <Link href="/stream" className="text-ivory/70 hover:text-champagne transition-colors">Live Stream</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-8">
          <p className="font-serif text-sm text-ivory/40">
            &copy; 2026 Anne & Emediong. All rights reserved.
          </p>
          
          <button 
            onClick={handleScrollTop}
            className="flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-champagne hover:text-ivory transition-colors group"
          >
            Back to top
            <div className="w-8 h-8 rounded-full border border-champagne flex items-center justify-center group-hover:border-ivory transition-colors">
              <MoveUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
