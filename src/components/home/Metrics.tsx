import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { id: 1, label: "Global Streams Amplified", target: 50, suffix: "M+", float: false },
  { id: 2, label: "Frameworks Architected", target: 100, suffix: "+", float: false },
  { id: 3, label: "Ecosystem Reliability", target: 99.9, suffix: "%", float: true },
];

export function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    // Wrapping GSAP logic in a specific React Context to ensure safe unmounting garbage collection
    const ctx = gsap.context(() => {
      numberRefs.current.forEach((el, index) => {
        if (!el) return;
        
        const target = metrics[index].target;
        const suffix = metrics[index].suffix;
        const isFloat = metrics[index].float;
        
        // 1. Kinetic Counter Animation Physics utilizing isolated Proxy mapping
        const counter = { val: 0 };
        
        gsap.to(counter, {
          val: target,
          duration: 3.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current, // Start animating all blocks when container reaches 80% view
            start: "top 80%",
            once: true
          },
          onUpdate: function() {
            // Safely assemble numerical formats with arbitrary strings (M+, %, +) without corrupting GSAP
            const displayVal = isFloat ? counter.val.toFixed(1) : Math.floor(counter.val);
            el.innerHTML = displayVal + suffix;
          }
        });
        
        // 2. Structural Reveal Fade Animation Physics
        gsap.fromTo(el.parentElement, 
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              once: true
            },
            delay: index * 0.15 // Mechanical symmetrical stagger deployment
          }
        );
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative z-10 w-full overflow-hidden bg-slate-950 py-32 md:py-56"
    >
      {/* Absolute Geometric Ghost Texting Background */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 select-none items-center justify-center pointer-events-none">
        <h2 className="text-[12rem] sm:text-[18rem] md:text-[25rem] font-black tracking-tighter text-slate-100/5 whitespace-nowrap mix-blend-overlay">
          AUTHORITY
        </h2>
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={metric.id} 
              className="group flex flex-col items-center justify-center text-center transition-all duration-700 hover:scale-105"
            >
              {/* Massive Typographical Node */}
              <h3 
                ref={(el) => { numberRefs.current[index] = el; }}
                className="bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter text-transparent drop-shadow-xl transition-transform duration-500 group-hover:drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]"
              >
                0{metric.suffix}
              </h3>
              
              {/* Data Descriptor Map */}
              <div className="mt-8 flex flex-col items-center justify-center space-y-2">
                <div className="h-1 w-12 rounded-full bg-emerald-500/50 transition-all duration-500 group-hover:w-20 group-hover:bg-emerald-400"></div>
                <p className="text-sm md:text-base font-semibold tracking-[0.2em] text-emerald-400/90 uppercase drop-shadow-md">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
