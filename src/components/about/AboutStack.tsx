import gsap from "gsap";
import { useEffect, useRef } from "react";

const stack = [
  "REACT 19", "FIREBASE", "TYPESCRIPT", "GSAP SCROLLTRIGGER", 
  "TAILWIND CSS", "NODE.JS", "VITE", "RADIX UI", "ZUSTAND", "FRAMER MOTION"
];

export function AboutStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".stack-marquee", {
        xPercent: -50,
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-slate-900 overflow-hidden py-16 border-y border-white/5 z-20">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10 pointer-events-none"></div>
      
      <div className="flex whitespace-nowrap opacity-60">
        <div className="stack-marquee flex items-center gap-12 md:gap-24 pr-12 md:pr-24 min-w-max">
          {[...stack, ...stack, ...stack].map((item, i) => (
            <div key={i} className="flex items-center gap-12 group">
               <span className="w-4 h-4 bg-blue-500/20 border border-blue-500 rounded-full group-hover:bg-blue-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-300"></span>
               <span className="font-mono text-5xl md:text-8xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] uppercase tracking-tighter hover:[-webkit-text-stroke:2px_rgba(59,130,246,0.8)] hover:text-blue-500/10 transition-all duration-300 cursor-crosshair">
                 {item}
               </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
