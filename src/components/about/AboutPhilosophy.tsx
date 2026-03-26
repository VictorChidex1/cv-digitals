import { Cpu, Music4, Zap } from "lucide-react";

const pillars = [
  {
    id: 1,
    icon: <Cpu className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />,
    title: "Radical Performance",
    desc: "Every line of code I deploy operates under strict React and TypeScript typed environments. Paired natively with Firebase architectures, the result is zero-latency, heavily cached execution rendering thousands of DOM nodes without dropping a single frame."
  },
  {
    id: 2,
    icon: <Music4 className="w-8 h-8 md:w-12 md:h-12 text-emerald-500" />,
    title: "Algorithmic Dominance",
    desc: "I don't just build software, I orchestrate massive digital communities. By mapping raw data into Spotify, Apple Music, and TikTok algorithms, I funnel millions of organic clicks directly into high-ROI conversion pipelines for absolute domination."
  },
  {
    id: 3,
    icon: <Zap className="w-8 h-8 md:w-12 md:h-12 text-amber-500" />,
    title: "Uncompromising Aesthetics",
    desc: "A product must look incredibly expensive to scale globally. By coupling deeply optimized WebGL Parallax physics, GSAP ScrollTriggers, and brutalist Tailwind architectures, I force your users to experience absolute premium conditioning."
  }
];

export function AboutPhilosophy() {
  return (
    <section className="relative w-full bg-slate-950 py-32 border-t border-white/5 z-20">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-24">
             <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">The Engineering <br/> Philosophy.</h2>
             <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
               I refuse to output minimum viable products. My stack strictly mandates deploying maximum viable architecture guaranteeing instant dominance in whatever market we enter.
             </p>
          </div>

          <div className="flex flex-col gap-12 lg:gap-24 relative">
             <div className="absolute left-8 md:left-[3.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-emerald-500 to-amber-500 opacity-20 hidden md:block"></div>

             {pillars.map((pillar, i) => (
               <div key={pillar.id} className="flex flex-col md:flex-row items-start gap-8 md:gap-16 group relative z-10 w-full pl-0 md:pl-12">
                  
                  {/* Brutalist Watermark Numerics executing Native Negative Space limits */}
                  <div className="absolute -left-4 -top-16 md:-left-24 md:-top-24 text-[8rem] md:text-[15rem] font-black text-white/[0.02] pointer-events-none z-0 select-none tracking-tighter group-hover:text-blue-500/[0.03] transition-colors duration-1000">
                     0{i + 1}
                  </div>

                  <div className="w-16 h-16 md:w-28 md:h-28 rounded-3xl bg-slate-900 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] group-hover:border-white/20 relative z-10">
                     {pillar.icon}
                  </div>
                  <div className="flex flex-col pt-2 relative z-10">
                     <span className="text-sm font-mono font-bold text-slate-600 mb-2">0{i + 1} / MATRIX</span>
                     <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                        {pillar.title}
                     </h3>
                     <p className="text-slate-400 font-light leading-relaxed md:text-lg max-w-3xl">
                        {pillar.desc}
                     </p>
                  </div>
               </div>
             ))}
          </div>

       </div>
    </section>
  )
}
