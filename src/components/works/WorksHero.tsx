import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function WorksHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".hero-char", {
      y: 100,
      opacity: 0,
      rotateX: -90,
      stagger: 0.05,
      duration: 1.2,
      ease: "power4.out",
    });
    
    gsap.from(".hero-sub", {
      opacity: 0,
      y: 20,
      delay: 0.8,
      duration: 1,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center bg-slate-950 overflow-hidden pt-32 pb-10">
      
      {/* Abstract Background Noise / Grid matrix mapping standard corporate depth */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950"></div>

      <div className="container relative z-20 px-4 mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border rounded-full border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
           <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
           <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase">System Deployments</span>
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-[9rem] lg:text-[11rem] font-black text-white tracking-tighter flex overflow-hidden perspective-[1000px] leading-[0.9] drop-shadow-2xl">
          {"DOMINANCE.".split("").map((char, i) => (
             <span key={i} className="hero-char inline-block transform-origin-bottom">{char}</span>
          ))}
        </h1>

        <p className="hero-sub mt-8 max-w-2xl text-base md:text-2xl font-light text-slate-400 drop-shadow-lg px-4">
          Browse the native production environments generating millions in global capital execution.
        </p>
      </div>
    </section>
  )
}
