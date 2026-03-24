import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const textColumnRef = useRef<HTMLDivElement>(null);
  const imageColumnRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textColumnRef.current || !imageColumnRef.current || !imageWrapperRef.current) return;

    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)"
    }, (context) => {
      const { isDesktop } = context.conditions as { isDesktop: boolean };

      // --- 1. Initial Mount Animation Sequence ---
      const tl = gsap.timeline();
      
      tl.fromTo(
        textColumnRef.current!.children[0],
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
      );

      tl.fromTo(
        Array.from(textColumnRef.current!.children).slice(1),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
        "-=0.4"
      );

      // Execute floating drift ONLY on desktop to conserve mobile battery & DOM recalculation bounds
      if (isDesktop && imageColumnRef.current) {
        gsap.to(imageColumnRef.current, {
          y: -12,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }

      // --- 2. Safe Internal Parallax Choreography (NO PINNING) ---
      // We specifically animate the internal <img> tag so it mathematically CANNOT bleed out of its glass border container.
      const imageElement = imageWrapperRef.current!.querySelector('img');
      
      if (imageElement) {
        gsap.to(imageElement, {
          scale: isDesktop ? 1.5 : 1.2, // Smooth, contained cinematic zoom
          y: isDesktop ? 40 : 20,       // Parallax push down tracking the scroll
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            // CRITICAL FIX: Deleted `pin: true` which natively prevents GSAP from mutating the document length and breaking the footer placement entirely.
          }
        });
      }

      // Fade the left text cleanly into the dark background on scroll (Desktop only)
      if (isDesktop && textColumnRef.current) {
        gsap.to(textColumnRef.current, {
          opacity: 0,
          y: -50,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "center top",
            scrub: true,
          }
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen bg-slate-950 text-slate-50 overflow-hidden flex flex-col justify-center pt-32 pb-20 lg:pt-28 lg:pb-24 isolate transform-gpu z-10 w-full">
      
      {/* Deep Cinematic Lighting Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950 z-0"></div>
      
      {/* High-End Subsurface Film Grain */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center justify-between min-h-[75vh]">
          
          {/* Left Column: Typography & CTAs */}
          <div ref={textColumnRef} className="flex flex-col z-10 items-start">
            
            {/* The Authority Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(5,150,105,0.2)]">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                Premier Digital Agency Matrix
              </span>
            </div>

            {/* Headline with Apple-Style Metallic Sheen */}
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.05] mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400">
                Building High-Performance
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 drop-shadow-sm">
                Digital
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400">
                {" "}Experiences & Amplifying{" "}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-amber-400 to-amber-600 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                Brands
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-xl font-light leading-relaxed mb-8">
              We operate at the precise intersection of elite web development, powerful music promotion, and premier event management.
            </p>

            {/* Ultra-Tactile SaaS Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <Link 
                to="/services" 
                className="group relative inline-flex flex-shrink-0 items-center justify-center rounded-xl px-8 py-3.5 text-base font-semibold text-white transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),_0_0_20px_rgba(5,150,105,0.4)] bg-gradient-to-b from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_0_30px_rgba(5,150,105,0.6)] border border-emerald-800"
              >
                View Our Services
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              
              <Link 
                to="/contact" 
                className="inline-flex flex-shrink-0 items-center justify-center rounded-xl border border-amber-500/40 bg-amber-500/5 backdrop-blur-md px-8 py-3.5 text-base font-semibold text-amber-400 shadow-sm transition-all hover:bg-amber-500/15 hover:border-amber-400 hover:text-amber-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          {/* Right Column: Multi-Layered Glassmorphism Bezel */}
          <div ref={imageColumnRef} className="relative flex items-center justify-center mt-16 md:mt-0 lg:ml-auto w-full max-w-lg mx-auto">
            
            {/* Massive Ambient Core Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-emerald-600/40 via-transparent to-amber-500/30 rounded-full blur-[90px] -z-10 mix-blend-screen scale-150 pointer-events-none"></div>
            
            {/* Outer Glass Bezel (Scaling Target for GSAP Mind-Blow) */}
            <div 
              ref={imageWrapperRef} 
              className="relative p-2 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] origin-center transform-gpu"
            >
              {/* Inner Image Mask/Container */}
              <div className="relative w-full aspect-[4/5] md:aspect-[4/4] rounded-[2rem] overflow-hidden ring-1 ring-white/10 bg-slate-900 shadow-inner">
                <img 
                  src="/assets/cv-digital-hero.jpeg" 
                  alt="CV Digitals Elite Asset" 
                  className="w-full h-full object-cover scale-[1.02] opacity-90 transition-all duration-700 hover:scale-105 hover:opacity-100"
                />
                
                {/* Surface Reflection Highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
