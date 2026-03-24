import { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
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
      
      {/* Temporary visual spacer to definitively test the pinned ScrollTrigger masking transition */}
      <section className="relative z-20 h-screen bg-slate-900 border-t border-slate-800 flex items-center justify-center">
        <h2 className="text-4xl text-slate-400 font-bold opacity-50">Trust Bar / Next Section Framework</h2>
      </section>
    </div>
  );
}
