import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ShieldAlert } from 'lucide-react';

export function PrivacyHero() {
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
    <section ref={containerRef} className="relative w-full min-h-[40vh] flex flex-col items-center justify-center bg-slate-950 overflow-hidden pt-32 pb-16 border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/40 via-slate-950 to-slate-950 pointer-events-none z-0"></div>

      <div className="container relative z-20 px-4 mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full border-slate-700 bg-slate-800/50 text-slate-300 backdrop-blur-md">
           <ShieldAlert className="w-4 h-4 text-emerald-500" />
           <span className="text-[10px] md:text-sm font-mono font-bold tracking-widest uppercase">Global Legal Matrix</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-[6rem] lg:text-[8rem] font-black text-white tracking-tighter flex overflow-hidden leading-[0.9] drop-shadow-2xl hero-text select-none">
          PRIVACY<br className="lg:hidden" /> PROTOCOL.
        </h1>
        
        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8 hero-line origin-center"></div>

        <p className="hero-text mt-4 max-w-2xl text-sm md:text-lg font-mono text-slate-400 leading-relaxed px-4">
          Strict adherence to global data compliance. This ledger defines our algorithmic processing and absolute security architecture.
        </p>
      </div>
    </section>
  )
}
