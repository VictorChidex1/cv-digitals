import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function ContactHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".hero-text", {
      y: 100, opacity: 0, stagger: 0.1, duration: 1.2, ease: "power4.out"
    });
    gsap.from(".hero-line", {
      scaleX: 0, opacity: 0, duration: 1.5, ease: "power3.inOut", delay: 0.5
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full min-h-[50vh] lg:min-h-[60vh] flex flex-col items-center justify-center bg-slate-950 overflow-hidden pt-32 pb-16">
      {/* Absolute Ambient Network Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 pointer-events-none z-0"></div>

      <div className="container relative z-20 px-4 mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full border-red-500/20 bg-red-500/10 text-red-500 backdrop-blur-md shadow-[0_0_30px_rgba(239,68,68,0.1)]">
           <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
           <span className="text-[10px] md:text-sm font-mono font-bold tracking-widest uppercase">Restricted Intake Channel</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black text-white tracking-tighter flex overflow-hidden leading-[0.9] drop-shadow-2xl hero-text select-none">
          INITIATE<br className="lg:hidden" /> PROTOCOL.
        </h1>
        
        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8 md:my-12 hero-line origin-center"></div>

        <p className="hero-text mt-4 max-w-3xl text-sm md:text-xl font-mono text-slate-400 leading-relaxed px-4">
          I do not accept every project. Submit your operational coordinates below. If your architecture aligns with my scaling limits, you will receive clearance within 24 hours.
        </p>
      </div>
    </section>
  )
}
