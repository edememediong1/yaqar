"use client";

import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, QrCode, CreditCard } from "lucide-react";

const GIFTS = [
  {
    id: 1,
    title: "Solar Standing Fan",
    description: "Reliable cooling during power outages and a practical everyday essential.",
    price: "₦105,000",
    image: "https://images.unsplash.com/photo-1565363887754-0ebcc82987fb?q=80&w=2000&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 2,
    title: "Complete Solar/Inverter Setup",
    description: "Includes inverter, batteries, solar panels, and installation for stable electricity.",
    price: "₦800,000",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 3,
    title: "Double Door Refrigerator",
    description: "A modern inverter fridge for preserving food and home comfort.",
    price: "₦350,000",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=2000&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 4,
    title: "55” Smart TV",
    description: "Perfect for entertainment, hosting, and family movie nights.",
    price: "₦350,000",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2000&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 5,
    title: "Automatic Washing Machine",
    description: "A major convenience for a new home.",
    price: "₦420,000",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=2000&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 6,
    title: "Workspace Setup",
    description: "A complete productivity setup including ergonomic chair, desk, monitor, and UPS.",
    price: "₦650,000",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2000&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 7,
    title: "Gas Cooker + Oven Set",
    description: "One of the most useful and timeless wedding gifts.",
    price: "₦350,000",
    image: "https://images.unsplash.com/photo-1585002130383-a9d5d852a420?q=80&w=2000&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 8,
    title: "1.5HP Inverter Air Conditioner",
    description: "Energy-efficient cooling for comfort in Nigeria’s climate.",
    price: "₦480,000",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2000&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 9,
    title: "Dining Table Set (4–6 Seater)",
    description: "A stylish setup for meals, hosting, and family gatherings.",
    price: "₦300,000",
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=2000&auto=format&fit=crop",
    status: "available",
  }
];

export default function RegistryPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedGift, setSelectedGift] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reg-header-anim",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        ".gift-card",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, [headerRef, containerRef]);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-ivory text-black-elegant pb-32">
      <Navbar />

      {/* Header */}
      <section ref={headerRef} className="pt-48 pb-20 px-6 max-w-4xl mx-auto text-center">
        <span className="reg-header-anim font-sans text-xs tracking-[0.2em] uppercase text-champagne mb-4 block">
          Gift Registry
        </span>
        <h1 className="reg-header-anim font-display text-5xl md:text-7xl mb-8 leading-tight">
          A Celebration of <br />
          <span className="font-serif italic text-burgundy">Our Future</span>
        </h1>
        <p className="reg-header-anim font-serif text-lg md:text-xl text-black-elegant/70 max-w-2xl mx-auto leading-relaxed">
          Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have curated a selection of items to help us build our home.
        </p>
      </section>

      {/* Honeymoon Fund Tracker */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="bg-black-elegant text-ivory rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1544415842-db6c0db41216?q=80&w=2000&auto=format&fit=crop')] opacity-20 bg-cover bg-center" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="font-display text-3xl md:text-5xl mb-4">Honeymoon Fund Contribution</h2>
              <p className="font-serif text-ivory/80 text-lg mb-8">
                Guests can contribute any amount toward our honeymoon experience. Help us create unforgettable memories!
              </p>
              
              <div className="w-full h-2 bg-ivory/20 rounded-full overflow-hidden mb-4">
                <motion.div 
                  className="h-full bg-champagne rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
              <div className="flex justify-between font-sans text-xs tracking-widest text-champagne">
                <span>OPEN FUND</span>
                <span>ANY AMOUNT</span>
              </div>
            </div>
            
            <button className="bg-champagne text-black-elegant px-10 py-5 rounded-full font-sans text-xs uppercase tracking-[0.15em] hover:bg-ivory hover:scale-105 transition-all duration-300 shrink-0">
              Contribute
            </button>
          </div>
        </div>
      </section>

      {/* Gifts Grid */}
      <section ref={containerRef} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GIFTS.map((gift) => (
            <div key={gift.id} className="gift-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 relative flex flex-col">
              
              {gift.status === "purchased" && (
                <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-20 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mb-4 text-ivory shadow-lg">
                    <Check size={32} strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-2xl text-burgundy">Purchased</span>
                </div>
              )}

              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={gift.image}
                  alt={gift.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="font-display text-2xl leading-tight">{gift.title}</h3>
                  <span className="font-sans font-medium text-lg text-champagne">{gift.price}</span>
                </div>
                <p className="font-serif text-black-elegant/70 mb-8 flex-1">
                  {gift.description}
                </p>
                <button
                  onClick={() => setSelectedGift(gift.id)}
                  disabled={gift.status === "purchased"}
                  className="w-full py-4 border border-black-elegant rounded-full font-sans text-xs uppercase tracking-[0.1em] hover:bg-black-elegant hover:text-ivory transition-colors duration-300 disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-black-elegant"
                >
                  Contribute
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Payment Modal */}
      <AnimatePresence>
        {selectedGift && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black-elegant/60 backdrop-blur-sm"
              onClick={() => setSelectedGift(null)}
            />
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="bg-ivory w-full max-w-2xl rounded-3xl z-10 overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedGift(null)}
                className="absolute top-6 right-6 text-black-elegant/50 hover:text-black-elegant transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12 flex flex-col justify-center text-center">
                <h3 className="font-display text-3xl mb-4">Support this Gift</h3>
                <p className="font-serif text-black-elegant/70 mb-8 max-w-lg mx-auto">
                  You can make a direct bank transfer to our account to contribute towards this item.
                </p>
                
                <div className="bg-white rounded-2xl p-6 mb-8 border border-black-elegant/10 w-full max-w-md mx-auto space-y-6">
                  <div>
                    <span className="block font-sans text-xs tracking-widest text-black-elegant/50 uppercase mb-1">Bank Name</span>
                    <p className="font-medium text-xl">Guaranty Trust Bank</p>
                  </div>
                  <div>
                    <span className="block font-sans text-xs tracking-widest text-black-elegant/50 uppercase mb-1">Account Number</span>
                    <p className="font-medium text-2xl font-mono tracking-wider text-burgundy">0788088570</p>
                  </div>
                  <div>
                    <span className="block font-sans text-xs tracking-widest text-black-elegant/50 uppercase mb-1">Account Name</span>
                    <p className="font-medium text-xl">Emediong Bassey Edem</p>
                  </div>
                </div>

                <div className="bg-champagne/10 text-burgundy-dark p-6 rounded-2xl max-w-md mx-auto">
                  <p className="font-serif text-lg leading-relaxed">
                    Please send the payment slip to our WhatsApp number <br />
                    <span className="font-semibold font-mono tracking-wider block mt-2 text-xl">08160510205</span> <br />
                    for confirmation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
