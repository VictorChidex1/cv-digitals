import { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { TrustBar } from '../components/home/TrustBar';
import { initSmoothScroll } from '../lib/smooth-scroll';

export default function Home() {
  // Mount the infinite requestAnimationFrame Lenis loop dynamically when the home page renders
  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => {
      // Memory management cleanup unmounts the Hijack sequence when navigating to static pages
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Hero />
      <TrustBar />
      
      {/* Temporary visual spacer to definitively test the pinned ScrollTrigger masking transition */}
      <section className="relative z-20 h-[50vh] bg-slate-900 flex items-center justify-center">
        <h2 className="text-4xl text-slate-400 font-bold opacity-50">Core Pillars Framework</h2>
      </section>
    </div>
  );
}
