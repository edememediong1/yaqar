"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

export function OurStorySnippet() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".story-reveal",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0, filter: "blur(10px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 bg-ivory">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div ref={imageRef} className="relative aspect-[3/4] w-full max-w-md mx-auto md:max-w-none overflow-hidden rounded-t-[40%] rounded-b-md">
          <Image
            src="/love.jpeg"
            alt="Anne & Emediong Couple"
            fill
            className="object-cover object-top"
            referrerPolicy="no-referrer"
          />
        </div>

        <div ref={textRef} className="flex flex-col justify-center">
          <span className="story-reveal font-sans text-xs tracking-[0.2em] uppercase text-burgundy-dark mb-6 block">
            Our Love Story
          </span>
          <h2 className="story-reveal font-display text-4xl md:text-6xl text-black-elegant leading-tight mb-8">
            A Journey of <span className="font-serif italic text-burgundy">Love</span> <br /> & Destiny
          </h2>
          <p className="story-reveal font-serif text-lg md:text-xl leading-relaxed text-black-elegant/80 mb-10 max-w-lg">
            What started as a beautiful friendship blossomed into an extraordinary love. Every laugh, every glance, and every shared dream has led us to this beautiful moment—our forever.
          </p>
          <div className="story-reveal">
            <Link
              href="/story"
              className="inline-block px-10 py-4 border border-black-elegant text-xs uppercase tracking-[0.15em] hover:bg-black-elegant hover:text-ivory transition-colors duration-500 rounded-full"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
