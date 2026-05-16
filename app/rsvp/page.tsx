"use client";

import { useEffect, useRef } from "react";
import { Navbar } from "@/components/layout/navbar";
import gsap from "gsap";
import Image from "next/image";

export default function RsvpPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".anim-item",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-ivory text-black-elegant relative" ref={containerRef}>
      <Navbar />

      {/* Split layout: Image Left, Form Right */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 relative h-[40vh] lg:h-screen w-full">
          <div className="absolute inset-0 bg-black/20 z-10" />
          <Image 
            src="/rsvp.jpeg" 
            alt="RSVP Background" 
            fill
            className="object-cover object-top" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-12 lg:p-20 z-20 text-ivory">
            <h2 className="anim-item font-display text-5xl md:text-7xl leading-tight mb-4 text-white drop-shadow-lg">
              Will you <br /> join us?
            </h2>
            <p className="anim-item font-serif text-xl md:text-2xl italic text-white/90 drop-shadow">
              Please let us know before the day of the wedding.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 flex items-center justify-center p-6 lg:p-20 bg-ivory">
          <div className="w-full max-w-xl space-y-12">
            <div className="anim-item">
              <h3 className="font-display text-4xl text-burgundy mb-4">How do I RSVP?</h3>
              <p className="font-serif text-lg text-black-elegant/70 leading-relaxed">
                We are handling RSVPs directly. If you are reading this, please kindly reach out to either of us directly to confirm your attendance before the day of the wedding.
              </p>
            </div>

            <div className="anim-item">
              <h3 className="font-display text-4xl text-burgundy mb-4">Can I bring a plus one?</h3>
              <p className="font-serif text-lg text-black-elegant/70 leading-relaxed">
                As much as we would love to accommodate everyone, our venue capacity is limited. We kindly ask that you only bring the number of guests specified in your direct invitation.
              </p>
            </div>

            <div className="anim-item">
              <h3 className="font-display text-4xl text-burgundy mb-4">What time should I arrive?</h3>
              <p className="font-serif text-lg text-black-elegant/70 leading-relaxed">
                Please refer to the schedule on our website for specific timing details on each day&apos;s events to ensure you don&apos;t miss any special moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
