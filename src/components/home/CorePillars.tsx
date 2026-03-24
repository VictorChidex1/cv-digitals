import { Code2, AudioWaveform, CalendarDays, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CorePillars() {
  return (
    <section className="core-pillars-trigger relative z-20 w-full bg-transparent py-24 md:py-32 overflow-hidden">
      
      {/* Structural Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 drop-shadow-sm">
              The Architecture of Influence
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl">
            We don't build generic websites. We engineer high-performance digital ecosystems. By synthesizing cutting-edge web development with algorithmic music promotion and luxury event curation, we manufacture digital authority.
          </p>
        </div>
      </div>

      {/* The Apple-Style Bento Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Web Development (Full Vector Span) */}
          <div className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-white p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.03)] ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] flex flex-col md:flex-row items-start md:items-center justify-between gap-12 isolate">
            
            {/* Ambient Interaction Bezel */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>

            <div className="flex-1 relative z-10 w-full">
              <div className="relative mb-8 inline-flex items-center justify-center p-5 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:shadow-md">
                <Code2 className="w-10 h-10 text-emerald-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Elite Web Development</h3>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-lg text-lg">
                We craft hyper-optimized, visually stunning single-page applications and e-commerce matrixes that dominate SEO rankings and convert traffic at unprecedented metrics.
              </p>
              
              <Link to="/services" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                Explore Tech Stack <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Abstract Graphic Node Assembly via DOM */}
            <div className="relative flex-1 w-full flex items-center justify-center p-8 bg-slate-50 rounded-[2rem] border border-slate-100/50 shadow-inner">
              <div className="relative w-full shadow-2xl aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center border border-slate-200/20 transform-gpu group-hover:scale-[1.02] transition-transform duration-700">
                {/* Simulated IDE / Server matrix aesthetic explicitly avoiding stock imagery */}
                <div className="absolute inset-0 bg-slate-900 rounded-xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-10 bg-slate-800/80 backdrop-blur-md flex items-center px-4 space-x-2 border-b border-slate-700/50">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="pt-16 px-6 pb-6">
                    <div className="w-3/4 h-4 bg-emerald-500/20 rounded-md mb-4 shadow-[0_0_15px_rgba(16,185,129,0.1)]"></div>
                    <div className="w-1/2 h-4 bg-slate-700/50 rounded-md mb-4"></div>
                    <div className="w-5/6 h-4 bg-slate-700/50 rounded-md mb-4"></div>
                    <div className="w-full h-4 bg-emerald-500/10 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Music Promotion Node */}
          <div className="col-span-1 group relative overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] isolate">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-amber-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>

            <div className="relative mb-8 inline-flex items-center justify-center p-5 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:shadow-md">
              <AudioWaveform className="w-10 h-10 text-amber-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Powerful Music Promo</h3>
            <p className="text-slate-500 leading-relaxed mb-8">
              Algorithmic playlist placements and organic viral campaigns strategically structured to catapult independent artists into the core of mainstream cultural relevance.
            </p>
            
            <Link to="/services" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors">
              Amplify Your Sound <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Card 3: Event Management Node */}
          <div className="col-span-1 group relative overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] isolate">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-slate-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>

            <div className="relative mb-8 inline-flex items-center justify-center p-5 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:shadow-md">
              <CalendarDays className="w-10 h-10 text-slate-800" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Premier Event Curation</h3>
            <p className="text-slate-500 leading-relaxed mb-8">
              End-to-end luxury architectural event planning. We manufacture immersive live physical environments that define brand authority and drive elite engagement metrics.
            </p>
            
            <Link to="/services" className="inline-flex items-center text-slate-900 font-semibold hover:text-slate-700 transition-colors">
              Launch an Event <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
