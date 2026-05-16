"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/story" },
  { name: "Event Details", href: "/details" },
  { name: "Gallery", href: "/gallery" },
  { name: "Family", href: "/family" },
];

const ctaLinks = [
  { name: "Gift Registry", href: "/registry" },
  { name: "RSVP", href: "/rsvp" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-black-elegant/80 backdrop-blur-md py-4 shadow-lg border-b border-champagne-soft/10 text-ivory"
            : "bg-transparent py-6 text-ivory"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="group">
            <h1 className="font-display text-2xl tracking-widest uppercase relative z-10">
              A <span className="text-champagne font-serif italic">&</span> E
            </h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-sans text-xs tracking-[0.15em] uppercase transition-colors hover:text-champagne",
                  pathname === link.href ? "text-champagne font-medium" : "opacity-80"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            {ctaLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-sans text-xs tracking-[0.1em] uppercase transition-all duration-300",
                  link.name === "RSVP"
                    ? "bg-champagne text-black-elegant px-6 py-2.5 rounded-full hover:bg-ivory hover:scale-105"
                    : "hover:text-champagne"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden flex flex-col space-y-1.5 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span
              className={cn(
                "w-6 h-[1px] transition-all bg-current",
                mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              )}
            />
            <span
              className={cn(
                "w-6 h-[1px] transition-all bg-current",
                mobileMenuOpen ? "opacity-0" : ""
              )}
            />
            <span
              className={cn(
                "w-6 h-[1px] transition-all bg-current",
                mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black-elegant text-ivory flex flex-col items-center justify-center space-y-8"
          >
            {[...navLinks, ...ctaLinks].map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-3xl hover:text-champagne italic transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
