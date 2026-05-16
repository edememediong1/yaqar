import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { Countdown } from "@/components/home/countdown";
import { OurStorySnippet } from "@/components/home/story-snippet";
import { CtaSection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-black-elegant relative">
      <Navbar />
      <Hero />
      <Countdown />
      <OurStorySnippet />
      <CtaSection />
    </main>
  );
}
