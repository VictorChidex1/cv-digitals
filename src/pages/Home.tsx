import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from '../components/home/Hero';
import { TrustBar } from '../components/home/TrustBar';
import { CorePillars } from '../components/home/CorePillars';
import { Metrics } from '../components/home/Metrics';
import { initSmoothScroll } from '../lib/smooth-scroll';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  // Mount the infinite requestAnimationFrame Lenis loop dynamically when the home page renders
  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => {
      // Memory management cleanup unmounts the Hijack sequence when navigating to static pages
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
    if (!mainRef.current) return;
    
    // Day/Night Transition: Global background cross-fade from Dark to Light Mode 
    // strictly executed as the Core Pillars grid breaches the viewport centerline.
    gsap.to(mainRef.current, {
      backgroundColor: "#f8fafc", // Tailwind slate-50 HEX mapping
      color: "#0f172a", // Tailwind slate-900 mapping
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".core-pillars-trigger",
        start: "top 65%",
        end: "top 25%",
        scrub: true,
      }
    });

  }, { scope: mainRef });

  return (
    <div ref={mainRef} className="flex flex-col min-h-screen bg-slate-950 transition-colors">
      <Hero />
      <TrustBar />
      <CorePillars />
      <Metrics />
    </div>
  );
}
