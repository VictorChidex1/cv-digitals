import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export function TermsHero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" })
      .from(".hero-title", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
      .from(".hero-desc", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from(".hero-scroll", { y: -20, opacity: 0, duration: 0.6, ease: "bounce.out" }, "-=0.4");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-slate-950 pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden z-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl z-10 flex flex-col items-center justify-center text-center">
        <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
           <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
           <span className="text-xs font-mono font-medium text-blue-400 tracking-wider">LEGAL MATRIX</span>
        </div>
        
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 max-w-5xl">
          TERMS OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">SERVICE.</span>
        </h1>
        
        <p className="hero-desc text-lg md:text-xl text-slate-400 font-light max-w-2xl leading-relaxed mb-16">
          The absolute rules of engagement. By initiating contact or rendering payment to CV Digitals, you legally bind yourself to the physical and digital boundaries listed below.
        </p>
        
        <div className="hero-scroll flex p-4 rounded-full border border-white/10 bg-slate-900/50 backdrop-blur-md">
           <ArrowDown className="w-6 h-6 text-slate-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
