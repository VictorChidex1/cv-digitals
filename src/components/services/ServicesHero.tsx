import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

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

    // Cinematic Parallax Physics (WebGL tier absolute GPU scrolling)
    if(imageRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 25, // Native GPU matrix translation pushing the image down to simulate infinite window depth
        scale: 1.1, // Extends geometry beyond borders to prevent bounding constraints
        filter: "blur(20px) grayscale(100%)", // Reverts vibrant colors into abstract cinematic blurs perfectly complementing dark backgrounds
        opacity: 0.1, // Rapidly crushes brightness dropping it explicitly entirely into shadow
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top", 
          scrub: true
        }
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center bg-slate-950 overflow-hidden pt-32 pb-48">
      
      {/* Absolute Cinematic Image Container mapped strictly to GPU operations */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-[120%] -top-[10%] left-0 overflow-hidden bg-slate-950">
         <img 
           ref={imageRef}
           src="/assets/services-hero.jpeg" 
           alt="Elite Corporate Architecture"
           className="w-full h-full object-cover object-center transform will-change-transform mix-blend-luminosity opacity-[0.35]"
         />
      </div>
      
      {/* Heavy Black Fade Overlay simulating natural gradient masking into standard DOM backgrounds */}
      <div 
         ref={overlayRef}
         className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none"
      ></div>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80 pointer-events-none"></div>

      <div className="container relative z-20 px-4 mx-auto text-center flex flex-col items-center mt-12 md:mt-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border rounded-full border-emerald-500/20 bg-emerald-500/10 text-emerald-400 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.1)]">
           <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
           <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase">System Capabilities</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-[9rem] lg:text-[11rem] font-black text-white tracking-tighter flex overflow-hidden perspective-[1000px] leading-[0.9] drop-shadow-2xl mix-blend-plus-lighter">
          {"CAPABILITIES.".split("").map((char, i) => (
             <span key={i} className="hero-char inline-block transform-origin-bottom will-change-transform">{char}</span>
          ))}
        </h1>

        <p className="hero-sub mt-6 md:mt-8 max-w-xl text-base md:text-2xl font-light text-slate-300 drop-shadow-lg mix-blend-plus-lighter px-4">
          We do not sell tasks. We engineer dominant market infrastructures.
        </p>
      </div>
    </section>
  )
}
