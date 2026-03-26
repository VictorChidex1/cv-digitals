import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function WorksHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Staggered letters
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

    // Cinematic WebGL Parallax Physics interpolating absolute matrix translations
    if(imageRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 25, 
        scale: 1.1, 
        filter: "blur(20px) grayscale(100%)", 
        opacity: 0.15, 
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top", 
          scrub: true
        }
      });
    }

    // Mathematical Infinite Marquee Strip Physics
    gsap.to(".marquee-inner", {
      xPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-[90vh] md:h-screen flex flex-col items-center justify-center bg-slate-950 overflow-hidden">
      
      {/* Absolute Cinematic Image Container mapped strictly to GPU operations tracking User Request image */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-[120%] -top-[10%] left-0 overflow-hidden bg-slate-950">
         <img 
           ref={imageRef}
           src="/assets/works-hero.jpeg" 
           alt="Elite Corporate Architecture"
           className="w-full h-full object-cover object-center transform will-change-transform mix-blend-luminosity opacity-[0.35]"
         />
      </div>
      
      {/* Heavy Black Fade Overlay simulating natural gradient masking into standard DOM backgrounds */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80 pointer-events-none"></div>

      <div className="container relative z-20 px-4 mx-auto text-center flex flex-col items-center mt-12 md:mt-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border rounded-full border-blue-500/20 bg-blue-500/10 text-blue-400 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.1)]">
           <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
           <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase">System Deployments</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-[9rem] lg:text-[11rem] font-black text-white tracking-tighter flex overflow-hidden perspective-[1000px] leading-[0.9] drop-shadow-2xl mix-blend-plus-lighter">
          {"DOMINANCE.".split("").map((char, i) => (
             <span key={i} className="hero-char inline-block transform-origin-bottom will-change-transform">{char}</span>
          ))}
        </h1>

        <p className="hero-sub mt-6 md:mt-8 max-w-xl text-base md:text-2xl font-light text-slate-300 drop-shadow-lg mix-blend-plus-lighter px-4">
          Browse the absolute production environments generating millions in global capital execution.
        </p>
      </div>

      {/* Global Scrolling Metrics Strip Native Injector */}
      <div className="absolute bottom-0 left-0 w-full border-y border-white/5 bg-slate-950/80 backdrop-blur-md overflow-hidden z-30 py-3 md:py-4">
        <div className="marquee-inner flex whitespace-nowrap opacity-50 min-w-max">
           <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] md:tracking-[0.3em] font-bold text-emerald-500 uppercase flex-shrink-0">
             // OVER 500 MILLION GLOBAL AUDIO STREAMS // 30+ ENTERPRISE SOFTWARE PLATFORMS DEPLOYED // ZERO DOWN TIME // $50M+ ARR DRIVEN //
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             // OVER 500 MILLION GLOBAL AUDIO STREAMS // 30+ ENTERPRISE SOFTWARE PLATFORMS DEPLOYED // ZERO DOWN TIME // $50M+ ARR DRIVEN //
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             // OVER 500 MILLION GLOBAL AUDIO STREAMS // 30+ ENTERPRISE SOFTWARE PLATFORMS DEPLOYED // ZERO DOWN TIME // $50M+ ARR DRIVEN //
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             // OVER 500 MILLION GLOBAL AUDIO STREAMS // 30+ ENTERPRISE SOFTWARE PLATFORMS DEPLOYED // ZERO DOWN TIME // $50M+ ARR DRIVEN //
           </span>
        </div>
      </div>
    </section>
  )
}
