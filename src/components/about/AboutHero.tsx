import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Left side typography stagger executing purely down the DOM natively
    gsap.from(".hero-char", {
      y: 100, opacity: 0, rotateX: -90, stagger: 0.05, duration: 1.2, ease: "power4.out", delay: 0.2
    });
    gsap.from(".hero-sub", {
      opacity: 0, x: -50, duration: 1, delay: 0.8, ease: "power3.out"
    });
    gsap.from(".hero-badge", {
      opacity: 0, scale: 0.5, duration: 0.8, ease: "back.out(1.7)"
    });

    // Right side image cinematic reveal avoiding heavy DOM layouts
    gsap.from(rightRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.4
    });
    
    // Continuous subtle breathing animation natively tracking on the portrait
    gsap.to(".portrait-img", {
      scale: 1.05,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center bg-slate-950 overflow-hidden pt-32 pb-16 lg:py-0 border-b border-white/5">
      
      {/* Absolute Ambient Network Lights mapping deep 3D structural volumes */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-50"></div>
      
      <div className="container relative z-20 px-4 mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
           
           {/* LEFT SIDE: The Architecture Concept strictly bound to CSS Grids */}
           <div ref={leftRef} className="col-span-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
              
              <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 mb-8 lg:mb-12 border rounded-full border-blue-500/30 bg-blue-500/10 text-blue-400 backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                 <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                 <span className="text-[10px] md:text-sm font-mono font-bold tracking-widest uppercase">The Founder & Lead Architect</span>
              </div>

              <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black text-white tracking-tighter flex flex-wrap justify-center lg:justify-start overflow-hidden perspective-[1000px] leading-[0.85] drop-shadow-2xl mb-8">
                {"ARCHITECT.".split("").map((char, i) => (
                   <span key={i} className="hero-char inline-block transform-origin-bottom will-change-transform">{char}</span>
                ))}
              </h1>

              <div className="hero-sub space-y-6 max-w-2xl relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-emerald-500 hidden lg:block rounded-full"></div>
                  <p className="text-lg md:text-2xl font-light text-slate-300 drop-shadow-lg leading-relaxed mix-blend-plus-lighter">
                    I do not just write code or build standard websites. I engineer dominant market infrastructures spanning Enterprise Software and Global Audio Networks.
                  </p>
                  <p className="text-base md:text-xl font-mono text-slate-500 max-w-xl lg:text-left text-center">
                    // Bridging the absolute limits of computational logic with high-end aesthetic execution.
                  </p>
              </div>
           </div>

           {/* RIGHT SIDE: The Editorial Portrait operating natively at 100% Opacity */}
           <div ref={rightRef} className="col-span-1 lg:col-span-5 relative w-full h-[60vh] lg:h-[85vh] z-10 flex items-end lg:items-center justify-center lg:justify-end mt-12 lg:mt-0">
              
              {/* Massive Editorial Frame handling the $100k Agency UX boundaries */}
              <div className="relative w-[90%] lg:w-full h-[100%] max-h-[800px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] group">
                 
                 {/* The Actual Portrait - Fully Visible, slightly graded for cinematic tone */}
                 <img 
                   src="/assets/Agbaho-victor.png" 
                   alt="The Architect - Victor"
                   className="portrait-img absolute inset-0 w-full h-full object-cover object-top filter contrast-[1.1] saturate-[0.85] brightness-[0.95] will-change-transform"
                 />
                 
                 {/* Internal Gradient Vignette resolving the bottom metrics perfectly framing the portrait without clipping */}
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10"></div>
                 <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent z-10 lg:hidden"></div>
                 
                 {/* Floating Glassmorphism Metrics tied natively right onto the physical Portrait Matrix */}
                 <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-3">
                    <div className="w-full backdrop-blur-xl bg-slate-950/40 border border-white/10 p-4 md:p-6 rounded-2xl flex items-center justify-between group-hover:border-blue-500/50 transition-colors duration-500 shadow-2xl">
                       <span className="text-xs md:text-sm font-mono text-slate-300 font-bold uppercase tracking-widest drop-shadow-md">Global Reach</span>
                       <span className="text-xl md:text-2xl font-black tracking-tighter drop-shadow-xl text-emerald-400">500M+ Scale</span>
                    </div>
                 </div>

              </div>
              
              {/* Massive Ambient Backlight pushing the portrait forcefully outwards from the 2D Z-Index */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-emerald-500/20 blur-[120px] -z-10 rounded-full"></div>

           </div>
           
        </div>
      </div>
    </section>
  )
}
