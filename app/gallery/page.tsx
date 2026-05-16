"use client";

import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

// 8 beautiful images for the gallery
const IMAGES = [
  "/rsvp.jpeg",
  "/love.jpeg",
  "/igwe.jpeg",
  "/hero.jpeg",
  "/hero.jpeg",
  "/ring.jpeg",
  "/beauty.jpeg",
  "/emediong.jpeg"
];

export default function GalleryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-header",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out", delay: 0.2 }
      );

      gsap.utils.toArray('.gallery-img-container').forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 100, opacity: 0, filter: "blur(10px)" },
          {
            y: 0, 
            opacity: 1, 
            filter: "blur(0px)",
            duration: 1.2, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-black-elegant text-ivory pb-32" ref={containerRef}>
      <Navbar />

      <section className="pt-48 pb-20 px-6 max-w-4xl mx-auto text-center">
        <span className="gallery-header font-sans text-xs tracking-[0.3em] text-champagne uppercase mb-4 block">
          Visual Memories
        </span>
        <h1 className="gallery-header font-display text-5xl md:text-7xl mb-8 leading-tight">
          Our Captured <br /><span className="font-serif italic text-burgundy">Moments</span>
        </h1>
      </section>

      {/* Masonry-like grid using CSS columns for simplicity and smoothness */}
      <section className="max-w-[1400px] mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {IMAGES.map((src, idx) => (
            <div 
              key={idx} 
              className="gallery-img-container relative break-inside-avoid cursor-pointer overflow-hidden group rounded-xl"
              onClick={() => setSelectedImage(src)}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black-elegant/95 backdrop-blur-md p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-12 md:right-12 text-white/50 hover:text-white transition-colors z-50 mix-blend-difference"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
