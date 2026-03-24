import { useRef } from 'react';
import type { MouseEvent } from 'react';
import { Code2, AudioWaveform, CalendarDays, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Centralised Titanium Noise Texture for ultra-high-end physical aesthetic overlay
const FilmGrain = () => (
  <div className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none mix-blend-multiply rounded-[2.5rem]" 
       style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
  </div>
);

export function CorePillars() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Interactive Card Refs for 3D Tilt Matrix
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  // Deep Animated Nodes Refs
  const codeBarsRef = useRef<HTMLDivElement>(null);
  const audioWavesRef = useRef<HTMLDivElement>(null);
  const eventNodesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Web Dev: Pulsing Code Bars (Simulating active network/compiler routing)
    if (codeBarsRef.current) {
      gsap.to(codeBarsRef.current.children, {
        opacity: 0.3,
        duration: 0.8,
        stagger: { each: 0.15, yoyo: true, repeat: -1 },
        ease: "power1.inOut"
      });
    }

    // 2. Music Promo: Audio Equalizer Waves (Algorithmic music visualizer simulation)
    if (audioWavesRef.current) {
      gsap.to(audioWavesRef.current.children, {
        scaleY: 0.2,
        duration: 0.4,
        stagger: { each: 0.1, yoyo: true, repeat: -1 },
        ease: "sine.inOut",
        transformOrigin: "bottom center"
      });
    }

    // 3. Event Management: Floating architectural proxy diamonds
    if (eventNodesRef.current) {
      gsap.to(eventNodesRef.current.children, {
        y: -15,
        rotation: "+=5",
        duration: 2.5,
        stagger: { each: 0.4, yoyo: true, repeat: -1 },
        ease: "sine.inOut"
      });
    }
  }, { scope: containerRef });

  // GSAP 3D Magnetic Tilt Interpolation Protocol
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, targetRef: React.RefObject<HTMLDivElement | null>) => {
    if (!targetRef.current) return;
    const { left, top, width, height } = targetRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    gsap.to(targetRef.current, {
      rotationY: x *  8, // Strictly capped 3D transform constraint (prevents extreme distortion)
      rotationX: -y * 8,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center"
    });
  };

  const handleMouseLeave = (targetRef: React.RefObject<HTMLDivElement | null>) => {
    if (!targetRef.current) return;
    gsap.to(targetRef.current, {
      rotationY: 0,
      rotationX: 0,
      ease: "power3.out",
      duration: 0.6
    });
  };

  return (
    <section ref={containerRef} className="core-pillars-trigger relative z-20 w-full bg-transparent py-24 md:py-32 overflow-hidden">
      
      {/* Structural Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="max-w-3xl">
          {/* Executive Tag Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 border border-slate-300/50 mb-6 shadow-sm">
            <span className="flex h-1.5 w-1.5 rounded-full bg-slate-500"></span>
            <span className="text-[10px] font-semibold tracking-widest text-slate-700 uppercase">
              Core Capabilities
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold tracking-tight mb-8 leading-[1.05]">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 drop-shadow-sm">
              The Architecture <br /> of Influence
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl">
            We don't build generic websites. We engineer high-performance digital ecosystems. By synthesizing cutting-edge web development with algorithmic music promotion and luxury event curation, we manufacture digital authority.
          </p>
        </div>
      </div>

      {/* The Ultra-Premium App-Style Bento Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* CSS 3D Perspective injected heavily onto the parent wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 perspective-[2000px]">
          
          {/* Card 1: Web Development (Full Vector Span) */}
          <div 
            ref={card1Ref}
            onMouseMove={(e) => handleMouseMove(e, card1Ref)}
            onMouseLeave={() => handleMouseLeave(card1Ref)}
            className="col-span-1 md:col-span-2 group relative overflow-visible rounded-[2.5rem] bg-white p-10 md:p-14 shadow-[0_20px_40px_rgba(0,0,0,0.04)] ring-1 ring-slate-100 transition-shadow duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] flex flex-col md:flex-row items-start md:items-center justify-between gap-12 isolate transform-gpu origin-center cursor-crosshair"
          >
            <FilmGrain />
            
            {/* Ambient Interaction Bezel Glow */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none -z-10"></div>

            <div className="flex-1 relative z-10 w-full">
              {/* Suspended Glassmorphic Icon Pill */}
              <div className="relative mb-8 inline-flex items-center justify-center p-5 rounded-3xl bg-white/60 backdrop-blur-xl border border-slate-100 shadow-[0_8px_16px_rgba(0,0,0,0.02)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_16px_32px_rgba(16,185,129,0.1)] group-hover:border-emerald-100/50">
                <Code2 className="w-10 h-10 text-emerald-600 drop-shadow-sm" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Elite Web Development</h3>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-lg text-lg">
                We craft hyper-optimized, visually stunning single-page applications and e-commerce matrixes that precisely dominate SEO rankings and convert traffic at unprecedented metrics.
              </p>
              
              <Link to="/services" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                Explore Tech Stack <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Abstract Active Network Graph Box */}
            <div className="relative flex-1 w-full flex items-center justify-center p-8 bg-slate-50/50 rounded-[2rem] border border-slate-100/80 shadow-inner group-hover:bg-transparent transition-colors duration-700 pointer-events-none">
              <div className="relative w-full max-w-md shadow-2xl aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center border border-slate-800/10 transform-gpu group-hover:scale-[1.03] transition-transform duration-700 bg-slate-900">
                
                <div className="absolute top-0 left-0 w-full h-10 bg-slate-800/80 backdrop-blur-md flex items-center px-5 space-x-2.5 border-b border-slate-700/50">
                  <div className="w-3 h-3 rounded-full bg-slate-600/50"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-600/50"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-600/50"></div>
                </div>
                
                {/* Dynamically Pulsing GSAP Code Array */}
                <div ref={codeBarsRef} className="pt-20 px-8 pb-8 w-full h-full flex flex-col gap-5">
                  <div className="w-3/4 h-3.5 bg-emerald-500/80 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)]"></div>
                  <div className="w-1/2 h-3.5 bg-slate-700 rounded-full"></div>
                  <div className="w-5/6 h-3.5 bg-slate-700 rounded-full"></div>
                  <div className="w-full h-3.5 bg-emerald-500/30 rounded-full"></div>
                  <div className="w-2/3 h-3.5 bg-slate-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Music Promotion Node */}
          <div 
            ref={card2Ref}
            onMouseMove={(e) => handleMouseMove(e, card2Ref)}
            onMouseLeave={() => handleMouseLeave(card2Ref)}
            className="col-span-1 group relative overflow-visible rounded-[2.5rem] bg-white p-10 shadow-[0_20px_40px_rgba(0,0,0,0.04)] ring-1 ring-slate-100 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] isolate transform-gpu origin-center cursor-crosshair"
          >
            <FilmGrain />
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>

            <div className="relative mb-8 inline-flex items-center justify-center p-5 rounded-3xl bg-white/60 backdrop-blur-xl border border-slate-100 shadow-[0_8px_16px_rgba(0,0,0,0.02)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_16px_32px_rgba(245,158,11,0.1)] group-hover:border-amber-100/50 z-20">
              <AudioWaveform className="w-10 h-10 text-amber-500" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight relative z-10">Powerful Music Promo</h3>
            <p className="text-slate-500 leading-relaxed mb-8 relative z-10">
              Algorithmic playlist placements and organic viral campaigns strategically structured to catapult independent artists into the core of mainstream cultural relevance.
            </p>
            
            <Link to="/services" className="relative z-10 inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors">
              Amplify Your Sound <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* GSAP Auditory Equalizer Engine Container */}
            <div className="absolute bottom-12 right-12 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 hidden md:flex items-end justify-center gap-1.5" ref={audioWavesRef}>
              <div className="w-2.5 h-12 bg-amber-400/80 rounded-t-full shadow-[0_0_10px_rgba(245,158,11,0.3)]"></div>
              <div className="w-2.5 h-20 bg-amber-400/80 rounded-t-full shadow-[0_0_10px_rgba(245,158,11,0.3)]"></div>
              <div className="w-2.5 h-16 bg-amber-400/80 rounded-t-full shadow-[0_0_10px_rgba(245,158,11,0.3)]"></div>
              <div className="w-2.5 h-24 bg-amber-400/80 rounded-t-full shadow-[0_0_10px_rgba(245,158,11,0.3)]"></div>
              <div className="w-2.5 h-14 bg-amber-400/80 rounded-t-full shadow-[0_0_10px_rgba(245,158,11,0.3)]"></div>
            </div>
          </div>

          {/* Card 3: Event Management Node */}
          <div 
            ref={card3Ref}
            onMouseMove={(e) => handleMouseMove(e, card3Ref)}
            onMouseLeave={() => handleMouseLeave(card3Ref)}
            className="col-span-1 group relative overflow-visible rounded-[2.5rem] bg-white p-10 shadow-[0_20px_40px_rgba(0,0,0,0.04)] ring-1 ring-slate-100 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] isolate transform-gpu origin-center cursor-crosshair"
          >
            <FilmGrain />
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-slate-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>

            <div className="relative mb-8 inline-flex items-center justify-center p-5 rounded-3xl bg-white/60 backdrop-blur-xl border border-slate-100 shadow-[0_8px_16px_rgba(0,0,0,0.02)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_16px_32px_rgba(15,23,42,0.1)] group-hover:border-slate-200 z-20">
              <CalendarDays className="w-10 h-10 text-slate-800" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight relative z-10">Premier Event Curation</h3>
            <p className="text-slate-500 leading-relaxed mb-8 relative z-10">
              End-to-end luxury architectural event planning. We manufacture immersive live physical environments that define brand authority and drive elite engagement metrics.
            </p>
            
            <Link to="/services" className="relative z-10 inline-flex items-center text-slate-900 font-semibold hover:text-slate-700 transition-colors">
              Launch an Event <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* GSAP Architectural Floating Diamonds Tracker */}
            <div className="absolute bottom-24 right-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 hidden md:block" ref={eventNodesRef}>
              <div className="absolute w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 shadow-lg -rotate-12 -left-16 -top-4"></div>
              <div className="absolute w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 shadow-2xl z-10 rotate-6 -left-4 -top-8"></div>
              <div className="absolute w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md rotate-12 left-10 top-0"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
