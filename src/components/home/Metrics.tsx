import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Highly Structural Premium Data Variables
const metrics = [
  { 
    id: 1, 
    sys: "SYS.01",
    label: "Global Streams Amplified", 
    desc: "Organic & algorithmic playlisting across 14 global timezones.",
    target: 50, 
    suffix: "M+", 
    float: false 
  },
  { 
    id: 2, 
    sys: "SYS.02",
    label: "Frameworks Architected", 
    desc: "High-performance enterprise ecosystems built for extreme scale.",
    target: 100, 
    suffix: "+", 
    float: false 
  },
  { 
    id: 3, 
    sys: "SYS.03",
    label: "Ecosystem Reliability", 
    desc: "Guaranteed absolute zero downtime operations across all verticals.",
    target: 99.9, 
    suffix: "%", 
    float: true 
  },
];

export function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Wrapping GSAP logic in a specific React Context to ensure safe unmounting garbage collection
    const ctx = gsap.context(() => {
      numberRefs.current.forEach((el, index) => {
        if (!el) return;
        
        const target = metrics[index].target;
        const suffix = metrics[index].suffix;
        const isFloat = metrics[index].float;
        
        // 1. Kinetic Counter Animation Physics utilizing isolated Proxy mapping
        const counter = { val: 0 };
        
        gsap.to(counter, {
          val: target,
          duration: 3.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current, // Start animating all blocks when container reaches 80% view
            start: "top 80%",
            once: true
          },
          onUpdate: function() {
            // Safely assemble numerical formats with arbitrary strings (M+, %, +) without corrupting GSAP
            const displayVal = isFloat ? counter.val.toFixed(1) : Math.floor(counter.val);
            el.innerHTML = displayVal + suffix;
          }
        });
        
        // 2. Structural Reveal Fade Animation Physics for the Glass Cards
        gsap.fromTo(cardRefs.current[index], 
          { y: 100, opacity: 0, rotateX: 10 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              once: true
            },
            delay: index * 0.15 // Mechanical symmetrical stagger deployment
          }
        );
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative z-10 w-full overflow-hidden bg-slate-950 py-32 md:py-48"
    >
      {/* 1. Architectural Blueprint Grid Overlay (2% Opacity precision lines) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* 2. Quantum Glow Orbs (Deep Volumetric Lighting) */}
      <div className="absolute top-0 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none"></div>

      {/* 3. Absolute Geometric Ghost Texting Background */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 select-none items-center justify-center pointer-events-none">
        <h2 className="text-[12rem] sm:text-[18rem] md:text-[25rem] font-black tracking-tighter text-slate-100/5 whitespace-nowrap mix-blend-overlay">
          AUTHORITY
        </h2>
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={metric.id} 
              ref={(el) => { cardRefs.current[index] = el; }}
              className="group relative flex flex-col items-start justify-center overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:p-12 backdrop-blur-3xl transition-all duration-700 hover:-translate-y-2 hover:border-emerald-500/30 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              {/* Corner SVG Crosshairs (Engineering Blueprint Aesthetic) */}
              <svg className="absolute top-4 left-4 h-3 w-3 text-slate-600 transition-colors duration-500 group-hover:text-emerald-500/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
              <svg className="absolute top-4 right-4 h-3 w-3 text-slate-600 transition-colors duration-500 group-hover:text-emerald-500/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
              <svg className="absolute bottom-4 left-4 h-3 w-3 text-slate-600 opacity-50 transition-colors duration-500 group-hover:text-emerald-500/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
              <svg className="absolute bottom-4 right-4 h-3 w-3 text-slate-600 opacity-50 transition-colors duration-500 group-hover:text-emerald-500/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>

              {/* Localized Hover Flare Mesh */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 mix-blend-overlay"></div>

              <div className="relative z-10 w-full">
                {/* 4. Micro-Telemetry Command Dashboard Format */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></div>
                  <span className="font-mono text-xs font-medium tracking-widest text-slate-500">
                    // {metric.sys}
                  </span>
                </div>

                {/* Massive Typographical Node */}
                <h3 
                  ref={(el) => { numberRefs.current[index] = el; }}
                  className="bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-6xl sm:text-7xl xl:text-8xl font-black tracking-tighter text-transparent drop-shadow-xl transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(52,211,153,0.2)]"
                >
                  0{metric.suffix}
                </h3>
                
                {/* Data Descriptor Map & Sub-Telemetry */}
                <div className="mt-8 flex flex-col items-start space-y-4">
                  <p className="text-sm md:text-base font-semibold tracking-[0.15em] text-emerald-400/90 uppercase drop-shadow-md">
                    {metric.label}
                  </p>
                  
                  {/* Neon Reactor Divider */}
                  <div className="h-px w-full bg-white/5 transition-all duration-500 group-hover:bg-emerald-500/20"></div>
                  
                  {/* Grounded Description Layer */}
                  <p className="text-sm leading-relaxed text-slate-500 transition-colors duration-500 group-hover:text-slate-400">
                    {metric.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
