import { Terminal, Globe2 } from "lucide-react";

export function AboutBio() {
  return (
    <section className="relative w-full bg-slate-950 py-24 border-t border-white/5 z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {/* The Narrative Box */}
          <div className="col-span-1 lg:col-span-2 bg-slate-900 border border-white/10 hover:border-blue-500/50 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-colors duration-700"></div>
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-6 relative z-10">
              The Duality of Scale.
            </h2>
            <div className="space-y-6 text-slate-400 font-light leading-relaxed md:text-lg relative z-10">
              <p>
                For over a decade, I have operated at the intersection of raw
                computational logic and viral entertainment distribution. My
                role isn't restricted to isolated software engineering; it is
                about building full-stack ecosystems that capture, scale, and
                monetize human attention.
              </p>
              <p>
                On the Enterprise side, I architect high-frequency React and
                Firebase platforms capable of handling global logistics, AI
                orchestration, and automated reputation markets. On the
                Entertainment side, I deploy strict algorithmic funnels
                guaranteeing millions of impressions for elite artists.
              </p>
              <p className="text-white font-medium border-l-2 border-blue-500 pl-4">
                I am the singular node connecting World-Class Execution with
                Uncompromising Aesthetics.
              </p>
            </div>
          </div>

          {/* The Ledger Node */}
          <div className="col-span-1 bg-slate-950 border border-emerald-500/20 hover:border-emerald-500/80 hover:bg-emerald-500/5 rounded-[2rem] p-8 md:p-12 shadow-[0_0_50px_rgba(16,185,129,0.05)] relative overflow-hidden flex flex-col justify-center transition-all duration-500 group">
            <Terminal className="text-emerald-500 w-8 h-8 opacity-50 mb-8 group-hover:scale-125 transition-transform duration-500" />

            <div className="space-y-8 relative z-10">
              <div>
                <div className="text-4xl font-black text-white font-mono tracking-tighter">
                  10<span className="text-emerald-500">+</span>
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mt-2">
                  Years Architecture
                </div>
              </div>
              <div className="w-full h-px bg-white/5"></div>
              <div>
                <div className="text-4xl font-black text-white font-mono tracking-tighter">
                  30<span className="text-emerald-500">+</span>
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mt-2">
                  Platforms Deployed
                </div>
              </div>
              <div className="w-full h-px bg-white/5"></div>
              <div>
                <div className="text-4xl font-black text-white font-mono tracking-tighter">
                  100M<span className="text-emerald-500">+</span>
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mt-2">
                  Networked Streams
                </div>
              </div>
            </div>
          </div>

          {/* Geographic Nodes */}
          <div className="col-span-1 lg:col-span-3 bg-slate-900 border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Globe2 className="w-10 h-10 text-blue-500" />
              <div>
                <h3 className="text-white font-bold tracking-tight text-xl">
                  Global Capabilities
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Deployed universally across timezones.
                </p>
              </div>
            </div>

            <div className="flex gap-8 md:gap-16 w-full md:w-auto overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
              <div className="flex flex-col items-center flex-shrink-0">
                <span className="text-2xl md:text-3xl font-mono font-black text-slate-300">
                  LOS
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-2">
                  Lagos
                </span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block"></div>
              <div className="flex flex-col items-center flex-shrink-0">
                <span className="text-2xl md:text-3xl font-mono font-black text-slate-300">
                  LDN
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-2">
                  London
                </span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block"></div>
              <div className="flex flex-col items-center flex-shrink-0">
                <span className="text-2xl md:text-3xl font-mono font-black text-slate-300">
                  NYC
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-2">
                  New York
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
