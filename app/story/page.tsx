"use client";

import { useEffect, useRef } from "react";
import { Navbar } from "@/components/layout/navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const STORY_STEPS = [
  {
    year: "2022",
    title: "How We Met",
    description: "Emediong met Anne for the first time on 1st October 2022, Nigeria's Independence Day, through a picture someone shared on a WhatsApp status.",
    image: "https://images.unsplash.com/photo-1522529599102-1b714c6474b5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    year: "2023",
    title: "Official Beginning",
    description: "We started our relationship officially on October 12, 2023. We received a word that day: \"I know the thoughts that I think towards you, thoughts of peace and not of evil, to give you an expected end.\"",
    image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    year: "2026",
    title: "The Proposal",
    description: "On April 11th, 2026, at Jabi, Abuja, Emediong got down on one knee. Through tears of joy, Anne said yes to forever. It was intimate, perfect, and deeply ours.",
    image: "/ring.jpeg"
  },
  {
    year: "2026",
    title: "Forever Begins",
    description: "Now, we gather our families and friends to witness as we step into our new life together. The journey of a lifetime begins now.",
    image: "https://images.unsplash.com/photo-1538332155829-d5ba9fbea1f7?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function StoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".story-title-anim",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out", delay: 0.2 }
      );

      // Timeline nodes pinning and revealing
      const rows = gsap.utils.toArray('.timeline-row');
      rows.forEach((row: any) => {
        const img = row.querySelector('.timeline-img');
        const text = row.querySelector('.timeline-text');
        
        gsap.fromTo(img, 
          { filter: "grayscale(100%)", scale: 0.9, opacity: 0 },
          { 
            filter: "grayscale(0%)", 
            scale: 1, 
            opacity: 1, 
            duration: 1.5, 
            scrollTrigger: {
              trigger: row,
              start: "top 70%",
            }
          }
        );

        gsap.fromTo(text,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.3,
            scrollTrigger: {
              trigger: row,
              start: "top 70%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-ivory text-black-elegant pb-32 overflow-hidden" ref={containerRef}>
      <Navbar />

      <section className="pt-48 pb-20 px-6 max-w-4xl mx-auto text-center border-b border-black-elegant/10 mb-24">
        <span className="story-title-anim font-sans text-xs tracking-[0.3em] text-burgundy uppercase mb-4 block">
          The Journey
        </span>
        <h1 className="story-title-anim font-display text-5xl md:text-7xl mb-8 leading-tight">
          How Our Story <br />
          <span className="font-serif italic text-black-elegant/60">Unfolded</span>
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-black-elegant/10 md:-translate-x-1/2 z-0" />

        {STORY_STEPS.map((step, idx) => (
          <div key={idx} className="timeline-row relative flex flex-col md:flex-row items-center justify-between mb-32 z-10">
            <div className={`w-full md:w-[45%] flex flex-col ${idx % 2 === 0 ? "md:items-end md:text-right" : "md:order-last md:items-start md:text-left"} mb-8 md:mb-0 pl-10 md:pl-0`}>
              <div className="timeline-img w-full overflow-hidden rounded-2xl aspect-[4/3] relative">
                 <Image src={step.image} alt={step.title} fill className="object-cover object-top" referrerPolicy="no-referrer" />
              </div>
            </div>

            <div className="absolute left-[-21px] md:left-1/2 top-0 md:top-1/2 transform md:-translate-y-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-ivory border-2 border-burgundy flex items-center justify-center font-display text-xs tracking-widest text-burgundy z-20 shadow-md">
              {step.year}
            </div>

            <div className={`timeline-text w-full md:w-[45%] flex flex-col pl-10 md:pl-0 ${idx % 2 === 0 ? "md:items-start md:text-left md:pl-16" : "md:items-end md:text-right md:pr-16"}`}>
              <h2 className="font-display text-4xl mb-6 text-black-elegant">{step.title}</h2>
              <p className="font-serif text-xl leading-relaxed text-black-elegant/70 max-w-md">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
