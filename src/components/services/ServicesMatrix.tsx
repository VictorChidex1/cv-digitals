import { useEffect, useRef } from 'react';
import { Code, Music, CalendarDays } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "web",
    title: "Web Architecture",
    num: "01",
    desc: "We construct blisteringly fast, perfectly optimized digital platforms that dominate search engines and convert raw traffic into absolute capital.",
    stack: ["Firebase (Core Backend)", "React 19", "Node.js", "GSAP / WebGL", "Tailwind CSS"],
    icon: Code,
    gradient: "from-blue-600/20 via-slate-900 to-slate-950"
  },
  {
    id: "music",
    title: "Audio Networking",
    num: "02",
    desc: "Spotify algorithmic manipulation, viral TikTok mapping, and sovereign streaming automation ensuring your catalog dominates global playlists.",
    stack: ["Data Mining", "Algorithmic Placement", "DSP Networking", "Viral Seeding"],
    icon: Music,
    gradient: "from-emerald-600/20 via-slate-900 to-slate-950"
  },
  {
    id: "events",
    title: "Event Systems",
    num: "03",
    desc: "From physical stage architectures to high-volume digital ticketing ledgers, we construct flawless, sold-out physical experiences.",
    stack: ["Logistics Matrix", "Ticketing Ledgers", "Stage Architecture", "Crowd Physics"],
    icon: CalendarDays,
    gradient: "from-amber-600/20 via-slate-900 to-slate-950"
  }
];

export function ServicesMatrix() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
       // ScrollTrigger logic to explicitly highlight active sidebar menu items intercepting viewport centers
       services.forEach((srv) => {
         ScrollTrigger.create({
           trigger: `#section-${srv.id}`,
           start: "top center",
           end: "bottom center",
           toggleClass: { targets: `#nav-${srv.id}`, className: "text-white scale-105 ml-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" },
         });
       });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-slate-950 pb-24 md:pb-40">
       
       {/* Cinematic Metrics of Scale Banner */}
       <div className="w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md py-8 md:py-10 mb-16 lg:mb-24 flex justify-center z-40 relative px-4 text-center sticky top-0 md:relative">
         <div className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-10 md:gap-4 font-mono text-sm md:text-base font-bold text-slate-400 tracking-widest uppercase">
           <div className="flex flex-col items-center">
             <span className="text-emerald-500 text-3xl md:text-4xl font-black mb-1 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">$50M+</span>
             Client Revenue Scaled
           </div>
           <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-800"></div>
           <div className="flex flex-col items-center">
             <span className="text-blue-500 text-3xl md:text-4xl font-black mb-1 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">500M+</span>
             Global Audio Streams
           </div>
           <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-800"></div>
           <div className="flex flex-col items-center">
             <span className="text-amber-500 text-3xl md:text-4xl font-black mb-1 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">1.2M+</span>
             Live Event Tickets
           </div>
         </div>
       </div>

       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 relative items-start">
             
             {/* Sticky Sidebar Matrix Protocol */}
             <div className="lg:w-1/3 hidden lg:block sticky top-32 z-30">
               <div className="flex flex-col gap-6 lg:gap-8 border-l border-white/10 pl-8">
                  {services.map((srv) => (
                    <a 
                      key={srv.id} 
                      href={`#section-${srv.id}`}
                      id={`nav-${srv.id}`}
                      className="text-2xl font-black tracking-tighter text-slate-600 transition-all duration-500 hover:text-white"
                    >
                      <span className="text-sm font-mono text-emerald-500 mr-4">/{srv.num}</span> 
                      {srv.title}
                    </a>
                  ))}
               </div>
             </div>

             {/* Sticky Sub-Card Deck Arrays */}
             <div className="lg:w-2/3 flex flex-col relative w-full gap-4 md:gap-4 pb-20">
                {services.map((srv, index) => {
                  const Icon = srv.icon;
                  // Incremental explicit pinning bounds forcing structural overlapping
                  const stickyTop = `calc(6rem + ${index * 2}rem)`;
                  
                  return (
                    <div 
                      key={srv.id} 
                      id={`section-${srv.id}`} 
                      className="flex flex-col w-full sticky mb-10 sm:mb-20 lg:mb-40"
                      style={{ top: stickyTop }}
                    >
                       <div className="flex items-center gap-4 mb-6 lg:hidden">
                         <span className="text-sm font-mono text-emerald-500">/{srv.num}</span>
                         <h2 className="text-3xl font-black text-white">{srv.title}</h2>
                       </div>
                       
                       <div className={`relative w-full min-h-[50vh] md:min-h-[55vh] rounded-[2rem] border border-white/10 bg-gradient-to-br ${srv.gradient} p-8 md:p-12 overflow-hidden group shadow-[0_-15px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl`}>
                         
                         {/* Massive 3D Parallax Graphic Layer */}
                         <div className="absolute -top-10 -right-10 opacity-[0.03] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 group-hover:opacity-[0.05]">
                           <Icon className="w-80 h-80 md:w-[35rem] md:h-[35rem] text-white" strokeWidth={1} />
                         </div>
                         
                         <div className="relative z-10 flex flex-col h-full">
                           <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 hidden lg:block drop-shadow-lg">{srv.title}</h3>
                           <p className="text-base md:text-xl text-slate-400 mb-12 max-w-xl leading-relaxed">{srv.desc}</p>
                           
                           <div className="mt-auto">
                              <h4 className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-emerald-500 mb-4 uppercase">Technology & Execution Stack</h4>
                              <div className="flex flex-wrap gap-2 md:gap-3">
                                {srv.stack.map(tech => (
                                  <span key={tech} className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white hover:text-slate-950 cursor-default">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                           </div>
                         </div>
                       </div>
                    </div>
                  )
                })}
             </div>

          </div>
       </div>
    </section>
  )
}
