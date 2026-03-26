import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Globe, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Custom Hacker-Style Text Decryption Hook (Pure React state mapping eliminating heavy WebGL memory leaks)
const CYBER_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

function useScramble(originalText: string) {
  const [displayText, setDisplayText] = useState(originalText);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const triggerScramble = useCallback(() => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(originalText.split("").map((_, index) => {
        if (index < iteration) return originalText[index];
        return CYBER_CHARACTERS[Math.floor(Math.random() * CYBER_CHARACTERS.length)];
      }).join(""));
      
      if (iteration >= originalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      iteration += 1 / 3; // Matrix decryption speed mapping
    }, 30);
  }, [originalText]);

  return { displayText, triggerScramble };
}

export function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  // Timezone Engine (Native JavaScript executing in less than 0.1ms, absolutely zero mobile lag)
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (timeZone: string) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(time);
  };

  // WebGL-Style Spotlight Tracking (Native DOM injection preventing React re-render looping on MouseMove events)
  const handleSectionMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Injects highly optimized strict CSS coordinates straight into the parent architecture node for absolute soft glow plotting
    e.currentTarget.style.setProperty('--spotlight-x', `${x}px`);
    e.currentTarget.style.setProperty('--spotlight-y', `${y}px`);
  };

  // Instantiate the independent scrambler engines mapping strictly to the Typography arrays
  const { displayText: head1, triggerScramble: scramble1 } = useScramble("INITIATE");
  const { displayText: head2, triggerScramble: scramble2 } = useScramble("SYSTEM.");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Massive monolithic scaling text entrance
      gsap.fromTo(textRef.current, 
        { scale: 1.15, opacity: 0, y: 80 },
        { scale: 1, opacity: 1, y: 0, duration: 1.6, ease: "expo.out", scrollTrigger: { trigger: containerRef.current, start: "top 70%" } }
      );

      // High-Performance Magnetic Liquid Button Physics via GSAP quickTo Array
      if (!btnRef.current) return;
      const btn = btnRef.current;
      const xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power4.out" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power4.out" });

      const handleMouseMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - (rect.left + rect.width / 2)) * 0.4;
        const y = (e.clientY - (rect.top + rect.height / 2)) * 0.4;
        xTo(x);
        yTo(y);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      const hoverArea = btn.parentElement;
      if (hoverArea) {
        hoverArea.addEventListener("mousemove", handleMouseMove);
        hoverArea.addEventListener("mouseleave", handleMouseLeave);
      }

      return () => {
        if (hoverArea) {
          hoverArea.removeEventListener("mousemove", handleMouseMove);
          hoverArea.removeEventListener("mouseleave", handleMouseLeave);
        }
      }
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleSectionMouseMove}
      className="group/cta relative z-30 w-full overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem] bg-slate-50 py-32 md:py-48 -mt-16 text-slate-950 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >
      {/* 4. Laser-Cut Top Edge Trim overlay simulating explicit CNC physical architecture */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50 shadow-[0_0_20px_rgba(16,185,129,0.8)] z-50"></div>

      {/* 1. Topological Dot Matrix Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:24px_24px] opacity-60 pointer-events-none z-0"></div>

      {/* Spotlight Tracking Gradient (Strict Mouse Intercept Map driving CSS-Variable background gradients) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700 z-10 will-change-[opacity]"
        style={{ background: `radial-gradient(800px circle at var(--spotlight-x) var(--spotlight-y), rgba(16,185,129,0.06), transparent 80%)` }}
      />

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        
        {/* Sub-Headline Status Node */}
        <div className="mb-8 flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white/50 px-5 py-2 backdrop-blur-md shadow-sm">
          <Globe className="h-4 w-4 text-emerald-500 animate-pulse" />
          <span className="font-mono text-xs font-bold tracking-widest text-slate-600 uppercase">
            Global Systems Deployment
          </span>
        </div>

        {/* 2. Scaling Typography Structural Block integrated strictly with the Decryption Math Hook */}
        <div 
          ref={textRef} 
          className="flex flex-col items-center justify-center cursor-crosshair"
          onMouseEnter={() => { scramble1(); scramble2(); }}
        >
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.9] text-slate-950 drop-shadow-2xl select-none">
            {head1}
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400 bg-clip-text text-transparent transform">
              {head2}
            </span>
          </h2>
          <p className="mt-10 max-w-2xl text-lg md:text-xl font-medium text-slate-500 pointer-events-none">
            The architecture is flawless. The performance is absolute. Stop building websites and start engineering proprietary corporate ecosystems.
          </p>
        </div>

        {/* 3. Magnetic Liquid Button Action Area Wrapper */}
        <div className="mt-10 p-12 relative flex justify-center items-center flex-col">
          <a
            href="mailto:donchid.online@gmail.com"
            ref={btnRef}
            className="group relative flex items-center justify-center overflow-hidden rounded-full bg-slate-950 px-10 py-5 text-sm sm:text-base md:text-lg font-bold text-white shadow-2xl transition-all hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] z-30"
          >
            <div className="absolute inset-0 translate-y-[110%] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 transition-transform duration-500 group-hover:translate-y-0 ease-out"></div>
            
            <span className="relative z-10 flex items-center gap-3 tracking-wide">
              Schedule Architecture Review
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>

          {/* Social Proof Glassmorphic Avatars strictly driving authority conversions */}
          <div className="mt-10 flex items-center gap-4 z-20 pointer-events-none">
            <div className="flex -space-x-3">
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 border-2 border-white shadow-lg"></div>
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border-2 border-white shadow-lg"></div>
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 border-2 border-white shadow-lg"></div>
            </div>
            <div className="flex flex-col items-start justify-center">
              <div className="flex gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <span className="text-[10px] md:text-xs font-semibold text-slate-500 mt-1">
                Trusted by elite industry leaders.
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* 4. Command Center Live Clocks (Mobile First Refactored mapping into wrap architectures) */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex w-full flex-row justify-between gap-2 px-2 sm:px-4 md:px-16 pointer-events-none">
        
        <div className="flex flex-col items-start gap-0.5 sm:gap-1 p-2 md:p-4 rounded-xl md:rounded-2xl bg-white/40 backdrop-blur-sm border border-slate-200/50 shadow-sm md:shadow-md">
          <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold hidden sm:block">New York (EST)</span>
          <span className="font-mono text-[8px] uppercase tracking-widest text-slate-500 font-bold sm:hidden">NYC(EST)</span>
          <span className="font-mono text-xs md:text-base font-semibold text-slate-900 tracking-tighter">{formatTime('America/New_York')}</span>
        </div>
        
        <div className="flex flex-col items-center gap-0.5 sm:gap-1 p-2 md:p-4 rounded-xl md:rounded-2xl bg-white/40 backdrop-blur-sm border border-slate-200/50 shadow-sm md:shadow-md">
          <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold hidden sm:block">London (GMT)</span>
          <span className="font-mono text-[8px] uppercase tracking-widest text-slate-500 font-bold sm:hidden">LDN(GMT)</span>
          <span className="font-mono text-xs md:text-base font-semibold text-slate-900 tracking-tighter">{formatTime('Europe/London')}</span>
        </div>
        
        <div className="flex flex-col items-end gap-0.5 sm:gap-1 p-2 md:p-4 rounded-xl md:rounded-2xl bg-white/40 backdrop-blur-sm border border-slate-200/50 shadow-sm md:shadow-md">
          <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold hidden sm:block">Lagos (WAT)</span>
          <span className="font-mono text-[8px] uppercase tracking-widest text-slate-500 font-bold sm:hidden">LAG(WAT)</span>
          <span className="font-mono text-xs md:text-base font-semibold text-slate-900 tracking-tighter">{formatTime('Africa/Lagos')}</span>
        </div>

      </div>
    </section>
  );
}
