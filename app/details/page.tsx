"use client";

import { useEffect, useRef } from "react";
import { Navbar } from "@/components/layout/navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Calendar, Clock } from "lucide-react";
import Image from "next/image";

const EVENTS = [
  {
    title: "Traditional Marriage",
    date: "Thursday, 14th May 2026",
    time: "12:00 Noon",
    location: "Usang Moses Essang's Compound, Assiga, Old Town, Yakurr LGA",
    description: "Join us as we celebrate our union following the rich cultural heritage and traditions of our people. It will be a day of colors, joy, and family.",
    image: "/hero.jpeg"
  },
  {
    title: "White Wedding",
    date: "Saturday, 16th May 2026",
    time: "10:00 AM",
    location: "Christian Central Chapel International, Faith Mansion World Centre, Ikot Eneobong, 8 Miles, Calabar",
    description: "The exchange of vows before God and our loved ones. We look forward to sharing this sacred and beautiful moment with you.",
    image: "/love.jpeg"
  },
  {
    title: "Grand Reception",
    date: "Saturday, 16th May 2026",
    time: "1:00 PM",
    location: "Kairos Event Centre, Off Parliamentary Extension, Calabar",
    description: "Let's celebrate! Join us for a beautiful afternoon of fine dining, drinks, music, and endless dancing as we toast to our new beginning.",
    image: "/rsvp.jpeg"
  }
];

export default function EventDetailsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".event-header",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out", delay: 0.2 }
      );

      const cards = gsap.utils.toArray('.event-card');
      cards.forEach((card: any, i) => {
        gsap.fromTo(card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
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

      <section className="pt-48 pb-20 px-6 max-w-4xl mx-auto text-center border-b border-ivory/10 mb-20">
        <span className="event-header font-sans text-xs tracking-[0.3em] text-champagne uppercase mb-4 block">
          Itinerary
        </span>
        <h1 className="event-header font-display text-5xl md:text-7xl mb-8 leading-tight">
          Wedding Events
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-champagne-soft/20 transform -translate-x-1/2" />

          {EVENTS.map((event, index) => (
            <div key={event.title} className={`event-card flex flex-col md:flex-row items-center justify-between mb-32 relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-champagne items-center justify-center z-10">
                <div className="w-8 h-8 rounded-full border border-champagne/30 animate-ping absolute" />
              </div>

              <div className={`md:w-[45%] mb-8 md:mb-0 ${index % 2 !== 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                <div className="overflow-hidden rounded-2xl aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-black/20 z-10" />
                  <Image src={event.image} alt={event.title} fill className="object-cover object-top" referrerPolicy="no-referrer" />
                </div>
              </div>

              <div className={`md:w-[45%] flex flex-col ${index % 2 !== 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} text-center md:text-left`}>
                <h2 className="font-display text-4xl text-champagne mb-6">{event.title}</h2>
                <div className="space-y-4 font-sans text-sm tracking-widest text-ivory/80 uppercase mb-8">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <Calendar size={16} className="text-burgundy" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <Clock size={16} className="text-burgundy" />
                    <span>{event.time}</span>
                  </div>
                  <div className={`flex items-start gap-3 justify-center md:justify-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <MapPin size={16} className="text-burgundy shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{event.location}</span>
                  </div>
                </div>
                <p className="font-serif text-lg text-ivory/60 leading-relaxed mb-10 max-w-md">
                  {event.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="px-8 py-3 rounded-full border border-champagne text-champagne hover:bg-champagne hover:text-black-elegant transition-colors font-sans text-xs tracking-widest uppercase">
                    Add to Calendar
                  </button>
                  <button className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors font-sans text-xs tracking-widest uppercase">
                    View Map
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
