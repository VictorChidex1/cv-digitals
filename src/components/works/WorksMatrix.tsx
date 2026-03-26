import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Star,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

// Web Project Architecture Array
const projects = [
  {
    id: 1,
    title: "Oxygen Health",
    type: "Lead Generation",
    client: "Healthcare",
    image: "/assets/oxygen-health.webp",
    link: "https://oxygen-health-11.web.app/",
    tech: ["React", "Firebase", "Tailwind"],
  },
  {
    id: 2,
    title: "Novluma AI",
    type: "Content Orchestration SaaS",
    client: "B2B AI",
    image: "/assets/novluma.webp",
    link: "#",
    tech: ["React", "Firebase", "Gemini API"],
  },
  {
    id: 3,
    title: "FoodFlow",
    type: "Delivery Logistics SaaS",
    client: "Enterprise",
    image: "/assets/foodflow.webp",
    link: "#",
    tech: ["React", "Tailwind", "Vercel"],
  },
  {
    id: 4,
    title: "KudiFlow",
    type: "Offline-First Smart Vendors",
    client: "B2B SaaS",
    image: "/assets/kudiflow.webp",
    link: "https://kudiflow.vercel.app/",
    tech: ["React", "Firebase", "Resend API"],
  },
  {
    id: 5,
    title: "The CanMan",
    type: "Operations & Recruitment",
    client: "Service",
    image: "/assets/canman-hero.webp",
    link: "https://canmancan.com/careers/",
    tech: ["React", "Firebase", "Framer"],
  },
  {
    id: 6,
    title: "EventFlow",
    type: "Event Booking Platform",
    client: "Ticketing",
    image: "/assets/eventflow.webp",
    link: "#",
    tech: ["React", "Tailwind", "Zustand"],
  },
  {
    id: 7,
    title: "HealthPoint",
    type: "Hospital Management",
    client: "Healthcare",
    image: "/assets/healthpoint.webp",
    link: "#",
    tech: ["React", "Tailwind", "Context API"],
  },
  {
    id: 8,
    title: "VeraVox AI",
    type: "Automated Reputation Engine",
    client: "Micro-SaaS",
    image: "/assets/veravox.webp",
    link: "https://vevavox-ai.vercel.app/",
    tech: ["React", "Firebase", "Gemini API"],
  },
  {
    id: 9,
    title: "Raploard",
    type: "Artist Portfolio",
    client: "Music",
    image: "/assets/raploard.webp",
    link: "#",
    tech: ["React", "Firebase", "Framer"],
  },
  {
    id: 10,
    title: "Kelvin's Grid",
    type: "Solar Utility Platform",
    client: "Energy",
    image: "/assets/kelvins-grid.webp",
    link: "#",
    tech: ["React", "Firebase", "Zustand"],
  },
];

// Audio Networking Artist Array
const artists = [
  {
    id: 1,
    name: "Sky D",
    image: "/assets/skyd.jpg",
    milestone: "50M+ Algorithmic Streams",
    desc: "Comprehensive Spotify Algorithmic Mapping & Viral Seed Campaign Execution resulting in massive global demographic captures.",
    metrics: [
      "Spotify Viral 50",
      "Algorithmic Triggering",
      "TikTok Domination",
    ],
  },
  {
    id: 2,
    name: "Graceboy Micl",
    image: "/assets/graceboymicl.jpg",
    milestone: "#1 Regional Apple Music",
    desc: "Digital Portfolio Architecture & DSP Networking strategies executing strict organic fan acquisition funnels.",
    metrics: ["Apple Music", "Fan Funnels", "Conversion Mapping"],
  },
  {
    id: 3,
    name: "Raploard",
    image: "/assets/raploard.jpg",
    milestone: "Sold-Out EU Tour Operations",
    desc: "End-to-end routing of Event Architectures mapping strict automated ticketing ledgers resolving 100% capacity.",
    metrics: ["Tour Physics", "Ticketing Ledgers", "Sold-Out Scale"],
  },
  {
    id: 4,
    name: "De Kingz",
    image: "/assets/dekingz.jpg",
    milestone: "20M+ YouTube Views",
    desc: "High-Frequency Asset Deployment tracking pure visual optimization translating explicit click-through-rate dominance.",
    metrics: ["CTR Optimization", "YouTube Algorithms", "Asset Deployment"],
  },
  {
    id: 5,
    name: "eminla",
    image: "/assets/eminla.jpeg",
    milestone: "15M+ TikTok Creations",
    desc: "Advanced Algorithmic For-You-Page indexing linking flawless audio mapping vectors across the short-form ecosystem.",
    metrics: ["Algorithm Hooks", "FYP Tracking", "Short-Form Scale"],
  },
];

export function WorksMatrix() {
  const [activeTab, setActiveTab] = useState<"web" | "audio">("web");
  const [webPage, setWebPage] = useState(1);
  const [audioPage, setAudioPage] = useState(1);

  const WEB_PER_PAGE = 9;
  const AUDIO_PER_PAGE = 6;

  const maxWebPages = Math.ceil(projects.length / WEB_PER_PAGE);
  const maxAudioPages = Math.ceil(artists.length / AUDIO_PER_PAGE);

  const displayedWeb = projects.slice((webPage - 1) * WEB_PER_PAGE, webPage * WEB_PER_PAGE);
  const displayedAudio = artists.slice((audioPage - 1) * AUDIO_PER_PAGE, audioPage * AUDIO_PER_PAGE);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const imageRevealRef = useRef<HTMLDivElement>(null);
  const [activeImg, setActiveImg] = useState<string>("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reveal = imageRevealRef.current;
      if (!reveal) return;

      const xTo = gsap.quickTo(reveal, "x", {
        duration: 0.4,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(reveal, "y", {
        duration: 0.4,
        ease: "power3.out",
      });

      const handleMouseMove = (e: MouseEvent) => {
        xTo(e.clientX - 200);
        yTo(e.clientY - 250);
      };

      if (activeTab === "web") {
        window.addEventListener("mousemove", handleMouseMove);
      } else {
        window.removeEventListener("mousemove", handleMouseMove);
        gsap.to(imageRevealRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.3,
        });
      }

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, containerRef);
    return () => ctx.revert();
  }, [activeTab]);

  const handleTabSwitch = (tab: "web" | "audio") => {
    if (tab === activeTab) return;
    gsap.to(wrapperRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: "instant" });
        gsap.to(wrapperRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      },
    });
  };

  const handleMouseEnter = (imgSrc: string) => {
    if (activeTab !== "web") return;
    setActiveImg(imgSrc);
    gsap.to(imageRevealRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (activeTab !== "web") return;
    gsap.to(imageRevealRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: "power3.in",
    });
  };

  return (
    <section ref={containerRef} className="relative w-full bg-slate-950 pb-32">
      {/* High-End Dual Matrix Toggle Controls */}
      <div className="w-full flex justify-center border-b border-white/5 bg-slate-950/80 backdrop-blur-xl z-[90] sticky top-0 py-6 px-4">
        <div className="flex gap-2 p-1 bg-slate-900 border border-white/10 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <button
            onClick={() => handleTabSwitch("web")}
            className={`px-6 py-3 rounded-full font-mono text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              activeTab === "web"
                ? "bg-white text-slate-950"
                : "text-slate-500 hover:text-white"
            }`}
          >
            System Architecture
          </button>
          <button
            onClick={() => handleTabSwitch("audio")}
            className={`px-6 py-3 rounded-full font-mono text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              activeTab === "audio"
                ? "bg-emerald-500 text-slate-950"
                : "text-slate-500 hover:text-white"
            }`}
          >
            Audio Networking
          </button>
        </div>
      </div>

      {/* Global Magnetic Trailing Image Node executing WebGL boundaries strictly on Web Tab */}
      <div
        ref={imageRevealRef}
        className="fixed top-0 left-0 w-[400px] h-[500px] z-[100] pointer-events-none opacity-0 scale-75 overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/10 bg-slate-900 hidden lg:block will-change-transform"
      >
        <img
          src={activeImg}
          alt="Project Reveal"
          className="w-full h-full object-cover object-top scale-105"
          loading="eager"
        />
      </div>

      {/* Native React Transition Wrapper interpolating Z-Index rendering states */}
      <div ref={wrapperRef} className="w-full pt-10">
        {/* STATE 01: SYSTEM ARCHITECTURE (WEB) */}
        {activeTab === "web" && (
          <div className="w-full flex flex-col relative z-10">
            {displayedWeb.map((proj, i) => (
              <a
                key={proj.id}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => handleMouseEnter(proj.image)}
                onMouseLeave={handleMouseLeave}
                className="group relative w-full flex flex-col lg:flex-row items-start lg:items-center justify-between py-10 md:py-16 px-4 md:px-12 border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-crosshair overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out z-0 hidden lg:block"></div>

                <div className="flex flex-col lg:flex-row items-baseline gap-4 md:gap-16 z-10 w-full lg:w-auto">
                  <span className="font-mono text-sm md:text-lg font-bold text-slate-700 transition-colors group-hover:text-blue-500">
                    {((webPage - 1) * WEB_PER_PAGE) + i < 9 ? `0${((webPage - 1) * WEB_PER_PAGE) + i + 1}` : ((webPage - 1) * WEB_PER_PAGE) + i + 1}
                  </span>
                  <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-slate-300 tracking-tighter transition-all duration-500 lg:group-hover:text-white lg:group-hover:translate-x-6 z-10">
                    {proj.title}
                  </h2>
                </div>

                <div className="flex flex-col items-start lg:items-end z-10 mt-6 lg:mt-0 ml-0 lg:ml-0 opacity-100 lg:opacity-40 transition-opacity duration-300 lg:group-hover:opacity-100">
                  <span className="text-[10px] md:text-xs font-mono tracking-widest text-white/50 uppercase mb-2">
                    {proj.client}
                  </span>
                  <span className="text-base md:text-2xl font-medium text-slate-400 max-w-xs lg:text-right">
                    {proj.type}
                  </span>
                  <div className="flex flex-wrap lg:justify-end gap-2 mt-4 max-w-sm">
                    {proj.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 md:py-1 border border-white/10 rounded-full text-[10px] uppercase font-mono text-slate-500 bg-white/5 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full mt-8 rounded-xl overflow-hidden block lg:hidden border border-white/10 shadow-2xl relative">
                  <div className="aspect-video w-full">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-16 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 z-10 hidden lg:block">
                  <ArrowUpRight className="w-16 h-16 text-white" />
                </div>
              </a>
            ))}

            {/* Strict Pagination Mechanics for System Architecture */}
            {maxWebPages > 1 && (
              <div className="w-full flex items-center justify-between px-4 md:px-12 py-12 border-t border-white/5">
                <button 
                  onClick={() => {
                    setWebPage(p => Math.max(1, p - 1));
                    window.scrollTo({ top: containerRef.current?.offsetTop || 0, behavior: "smooth" });
                  }}
                  disabled={webPage === 1}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-white uppercase text-xs font-bold tracking-widest disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/5 transition-all"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  Previous
                </button>
                
                <span className="font-mono text-sm text-slate-500 font-bold">
                  {webPage} <span className="text-slate-700">/</span> {maxWebPages}
                </span>

                <button 
                  onClick={() => {
                    setWebPage(p => Math.min(maxWebPages, p + 1));
                    window.scrollTo({ top: containerRef.current?.offsetTop || 0, behavior: "smooth" });
                  }}
                  disabled={webPage === maxWebPages}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-white uppercase text-xs font-bold tracking-widest disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/5 transition-all"
                >
                  Next
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* STATE 02: AUDIO NETWORKING (ARTISTS) */}
        {activeTab === "audio" && (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedAudio.map((artist) => (
                <div
                  key={artist.id}
                  className="relative flex flex-col w-full rounded-[2rem] bg-slate-900 border border-white/10 overflow-hidden shadow-2xl group hover:border-emerald-500/50 transition-colors duration-500"
                >
                  {/* Native High-Resolution Artist Graphic Engine mapping absolute physics */}
                  <div className="w-full h-64 md:h-72 bg-slate-950 relative overflow-hidden flex items-center justify-center will-change-transform">
                     <img 
                       src={artist.image} 
                       alt={artist.name} 
                       className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-out select-none pointer-events-none mix-blend-luminosity opacity-[0.55] scale-100 group-hover:scale-110 group-hover:opacity-100 group-hover:mix-blend-normal"
                       loading="lazy"
                     />
                     {/* Subtracted Gradient Engine preserving dark-mode UX rules */}
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70 pointer-events-none"></div>
                     
                     <span className="absolute bottom-4 left-6 z-20 flex items-center gap-2 text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 drop-shadow-md">
                       <CheckCircle2 className="w-4 h-4" /> High-Value Node
                     </span>
                  </div>

                  {/* Milestone Matrix execution blocks */}
                  <div className="p-8 md:p-10 flex flex-col flex-grow z-20">
                    <h2 className="text-4xl font-black text-white tracking-tighter mb-4 inline-flex items-center gap-3">
                      {artist.name}
                      <Star className="w-6 h-6 text-amber-400 fill-amber-400 hidden group-hover:block transition-all" />
                    </h2>

                    <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 mb-6">
                      <TrendingUp className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <span className="font-mono text-sm font-bold text-emerald-300">
                        {artist.milestone}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                      {artist.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {artist.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-mono tracking-widest text-slate-400"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Strict Pagination Mechanics for Audio Networking */}
            {maxAudioPages > 1 && (
              <div className="w-full flex items-center justify-between py-12 border-t border-white/5 mt-12">
                <button 
                  onClick={() => {
                    setAudioPage(p => Math.max(1, p - 1));
                    window.scrollTo({ top: containerRef.current?.offsetTop || 0, behavior: "smooth" });
                  }}
                  disabled={audioPage === 1}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-white uppercase text-xs font-bold tracking-widest disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/5 transition-all"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  Prev
                </button>
                
                <span className="font-mono text-sm text-slate-500 font-bold">
                  {audioPage} <span className="text-slate-700">/</span> {maxAudioPages}
                </span>

                <button 
                  onClick={() => {
                    setAudioPage(p => Math.min(maxAudioPages, p + 1));
                    window.scrollTo({ top: containerRef.current?.offsetTop || 0, behavior: "smooth" });
                  }}
                  disabled={audioPage === maxAudioPages}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-white uppercase text-xs font-bold tracking-widest disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/5 transition-all"
                >
                  Next
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
