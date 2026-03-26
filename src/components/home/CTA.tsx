import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  // Live Timezone Clock Interpolation Matrix
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // 1-second native interval updating clock formats without GSAP overhead
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (timeZone: string) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(time);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Massive monolithic scaling text entrance triggered upon scrolling
      gsap.fromTo(textRef.current, 
        { scale: 1.15, opacity: 0, y: 80 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.6,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );

      // 2. High-Performance Magnetic Liquid Button Physics via GSAP quickTo Array
      if (!btnRef.current) return;
      const btn = btnRef.current;
      const xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power4.out" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power4.out" });

      const handleMouseMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        // Calculate the physical distance from the exact structural center of the button node
        const x = (e.clientX - (rect.left + rect.width / 2)) * 0.4; // 40% magnetic pulling strength multiplier
        const y = (e.clientY - (rect.top + rect.height / 2)) * 0.4;
        
        xTo(x);
        yTo(y);
      };

      const handleMouseLeave = () => {
        // Snap explicitly back to zero coordinates smoothly
        xTo(0);
        yTo(0);
      };

      // We attach the listeners directly to the parent bounding area to catch the mouse BEFORE it touches the visible button
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
      // Negative margin and extreme z-index physically overlap the previous dark Showcase boundary like a sheet of paper.
      className="relative z-30 w-full overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem] bg-slate-50 py-32 md:py-48 -mt-16 text-slate-950 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >
      {/* 1. Topological Dot Matrix Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:24px_24px] opacity-60 pointer-events-none"></div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        
        {/* Sub-Headline Status Node */}
        <div className="mb-8 flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white/50 px-5 py-2 backdrop-blur-md shadow-sm">
          <Globe className="h-4 w-4 text-emerald-500" />
          <span className="font-mono text-xs font-bold tracking-widest text-slate-600 uppercase">
            Global Systems Deployment
          </span>
        </div>

        {/* 2. Scaling Typography Structural Block */}
        <div ref={textRef} className="flex flex-col items-center justify-center">
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.9] text-slate-950 drop-shadow-2xl">
            INITIATE
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400 bg-clip-text text-transparent transform">
              SYSTEM.
            </span>
          </h2>
          <p className="mt-10 max-w-2xl text-lg md:text-xl font-medium text-slate-500">
            The architecture is flawless. The performance is absolute. Stop building websites and start engineering proprietary corporate ecosystems.
          </p>
        </div>

        {/* 3. Magnetic Liquid Button Action Area */}
        {/* The massive p-12 wrapper intercepts raw mouse data long before standard CSS hover states hit, enabling physical magnetism */}
        <div className="mt-10 p-12 relative flex justify-center items-center">
          <a
            href="mailto:donchid.online@gmail.com"
            ref={btnRef}
            className="group relative flex items-center justify-center overflow-hidden rounded-full bg-slate-950 px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]"
          >
            {/* Liquid Background Gradient Inject directly mapping Y-Axis translation */}
            <div className="absolute inset-0 translate-y-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 transition-transform duration-500 group-hover:translate-y-0"></div>
            
            <span className="relative z-10 flex items-center gap-3 tracking-wide">
              Schedule Architecture Review
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </div>

      </div>

      {/* 4. Command Center Live Clocks (Bottom Anchors mimicking Silicon Valley Server Dashboards) */}
      <div className="absolute bottom-8 left-0 right-0 hidden md:flex w-full justify-between items-center px-16 pointer-events-none">
        
        {/* New York Timestamp Node */}
        <div className="flex flex-col items-start gap-1 p-4 rounded-2xl bg-white/40 backdrop-blur-sm border border-slate-200/50 shadow-sm">
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">New York (EST)</span>
          <span className="font-mono text-base font-semibold text-slate-900 tracking-tighter">{formatTime('America/New_York')}</span>
        </div>
        
        {/* London Timestamp Node */}
        <div className="flex flex-col items-center gap-1 p-4 rounded-2xl bg-white/40 backdrop-blur-sm border border-slate-200/50 shadow-sm">
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">London (GMT)</span>
          <span className="font-mono text-base font-semibold text-slate-900 tracking-tighter">{formatTime('Europe/London')}</span>
        </div>
        
        {/* Lagos Timestamp Node */}
        <div className="flex flex-col items-end gap-1 p-4 rounded-2xl bg-white/40 backdrop-blur-sm border border-slate-200/50 shadow-sm">
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">Lagos (WAT)</span>
          <span className="font-mono text-base font-semibold text-slate-900 tracking-tighter">{formatTime('Africa/Lagos')}</span>
        </div>

      </div>
    </section>
  );
}
