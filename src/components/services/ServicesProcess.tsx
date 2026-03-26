import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  { step: "01", title: "Discovery Matrix", desc: "We map your exact vertical, auditing competitors and locating vectors for absolute dominance across web platforms, streaming DSP algorithms, and live event networks." },
  { step: "02", title: "Infrastructure Blueprint", desc: "Constructing the React/Firebase web platforms, mapping Spotify algorithmic scaling clusters, and drafting physical live-event staging blueprints." },
  { step: "03", title: "Execution & Deployment", desc: "Deploying high-performance VITE/Node.js tech stacks, executing viral audio seeding sequences, and launching massive global ticketing ledgers natively." },
  { step: "04", title: "Omnichannel Domination", desc: "Pushing live digital corporate platforms, triggering algorithmic audio playlisting multipliers, and securing flawless, sold-out physical experiences globally." },
]

export function ServicesProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Physically draw the glowing vertical pipeline
      gsap.fromTo(lineRef.current, 
        { height: "0%" },
        { 
          height: "100%", 
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true
          }
        }
      );
      
      // Cascade fade-in the pipeline nodes intersectionally (Eliminated explicit-any TS bindings)
      gsap.utils.toArray(".process-node").forEach((node) => {
        const htmNode = node as HTMLElement;
        gsap.fromTo(htmNode,
          { opacity: 0, x: -30 },
          { 
            opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: {
              trigger: htmNode,
              start: "top 85%"
            }
          }
        );
      });

      // Cinematic Reveal-Text SVG Masking mapping GSAP CSS clips strictly onto GPUs
      gsap.utils.toArray(".reveal-text").forEach((textObj) => {
        const textElement = textObj as HTMLElement;
        gsap.fromTo(textElement,
          { clipPath: "inset(0 100% 0 0)" }, 
          { 
            clipPath: "inset(0 0% 0 0)", 
            duration: 1.5, ease: "expo.inOut",
            scrollTrigger: {
              trigger: textElement,
              start: "top 85%"
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-slate-950 py-24 md:py-40 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter">THE OPERATIONS <br/><span className="text-emerald-500">PIPELINE.</span></h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Static Faint background line defining the path */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-white/5"></div>
          {/* Animated GSAP active glowing line filling identically over layout */}
          <div ref={lineRef} className="absolute left-6 md:left-8 top-0 w-[2px] bg-gradient-to-b from-emerald-500 to-teal-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {phases.map((phase) => (
              <div key={phase.step} className="process-node flex items-start gap-6 md:gap-16 pl-2 md:pl-2">
                 <div className="flex-shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-full bg-slate-950 border-[3px] border-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] z-10">
                    <span className="font-mono text-[10px] md:text-sm font-bold text-emerald-400">{phase.step}</span>
                 </div>
                 <div className="flex flex-col pt-1 md:pt-2">
                    <h3 className="text-xl md:text-4xl font-black text-white tracking-tighter mb-2 md:mb-4">{phase.title}</h3>
                    {/* The `reveal-text` class intercepts absolute clipPath mathematics dropping paragraphs behind vector masks flawlessly */}
                    <p className="reveal-text text-sm md:text-lg text-slate-400 max-w-lg leading-relaxed">{phase.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
