import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Activity,
  Cpu,
  Hexagon,
  Fingerprint,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    client: "Oxygen Health Systems",
    category: "Health-Tech Infrastructure",
    description:
      "Engineered a high-conversion, hyper-fast digital landing experience optimized for patient acquisition and performance metrics.",
    Icon: Activity,
    gradient: "from-blue-500/20 via-slate-900/50 to-slate-950",
    glow: "group-hover:shadow-[0_0_60px_rgba(59,130,246,0.2)]",
    textColor: "text-blue-400",
  },
  {
    id: 2,
    client: "VeraVox AI",
    category: "Machine Learning Portal",
    description:
      "Designing the unified auditory intelligence framework for next-generation neural networking.",
    Icon: Cpu,
    gradient: "from-emerald-500/20 via-slate-900/50 to-slate-950",
    glow: "group-hover:shadow-[0_0_60px_rgba(16,185,129,0.2)]",
    textColor: "text-emerald-400",
  },
  {
    id: 3,
    client: "The Can Man",
    category: "Enterprise Headless Commerce",
    description:
      "Executing a complex, large-scale headless CMS architecture designed for infinite scalability and high-volume nationwide distribution",
    Icon: Hexagon,
    gradient: "from-amber-500/20 via-slate-900/50 to-slate-950",
    glow: "group-hover:shadow-[0_0_60px_rgba(245,158,11,0.2)]",
    textColor: "text-amber-400",
  },
  {
    id: 4,
    client: "Quantum Sound",
    category: "Algorithmic Music Promo",
    description:
      "Engineering viral data paths and global streaming automation modules for sovereign artists.",
    Icon: Fingerprint,
    gradient: "from-rose-500/20 via-slate-900/50 to-slate-950",
    glow: "group-hover:shadow-[0_0_60px_rgba(243,24,113,0.2)]",
    textColor: "text-rose-400",
  },
  {
    id: 5,
    client: "KudiFlow",
    category: "FinTech & Offline-First PWA",
    description:
      "Developed a blazing-fast, offline-first Progressive Web App operating as a complete digital ledger and business OS for emerging markets.",
    Icon: Activity,
    gradient: "from-emerald-600/20 via-slate-900/50 to-slate-950",
    glow: "group-hover:shadow-[0_0_60px_rgba(5,150,105,0.2)]",
    textColor: "text-emerald-500",
  },
];

export function Showcase() {
  const containerRef = useRef<HTMLElement>(null);
  const trackWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP rendering context to prevent layout contamination
    const ctx = gsap.context(() => {
      // 1. Hardware Accelerated Vertical Fade Entrance
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
        }
      );

      // 2. Pure Infinite Horizontal Marquee Math (Bypassing restrictive window Pinning checks)
      const infiniteScroller = gsap.to(".marquee-track", {
        xPercent: -100, // Explicitly shifts the DOM matrix infinitely left
        repeat: -1,
        duration: 35, // High-end cinematic pacing
        ease: "none",
      });

      // 3. Luxury Interaction Toggles (Pause loop entirely when hovering cards)
      if (trackWrapRef.current) {
        trackWrapRef.current.addEventListener("mouseenter", () =>
          infiniteScroller.pause()
        );
        trackWrapRef.current.addEventListener("mouseleave", () =>
          infiniteScroller.play()
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Structural replacement bypasses sticky `top-0` layout collisions resolving Footer rendering overlap
  return (
    <section
      ref={containerRef}
      className="relative z-10 w-full overflow-hidden bg-slate-950 py-24 md:py-40 text-white"
    >
      {/* Structural Title Component detached from absolute positioning */}
      <div className="container mx-auto px-4 md:px-8 mb-16 md:mb-20 z-20">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">
          FEATURED <br />
          <span className="text-emerald-400/90">MATRICES.</span>
        </h2>
        <p className="mt-6 max-w-sm text-base md:text-lg font-light text-slate-300 md:max-w-xl">
          A continuous archive of execution. We do not construct templates; we
          engineer proprietary authority networks for global market leaders.
        </p>
      </div>

      {/* Extreme Horizontal Auto-Scrolling Frame Engine */}
      <div
        ref={trackWrapRef}
        className="relative flex w-full overflow-hidden pb-12"
      >
        {/* We map exactly two duplicated arrays. Array 2 identically replaces Array 1 mathematically. */}
        {[1, 2].map((sequenceId) => (
          <div
            key={sequenceId}
            className="marquee-track flex w-max shrink-0 gap-6 md:gap-12 px-3 md:px-6"
          >
            {projects.map((project, index) => {
              const Icon = project.Icon;
              return (
                <div
                  key={`${sequenceId}-${project.id}`}
                  className={`group relative flex h-[60vh] md:h-[65vh] w-[85vw] md:w-[60vw] lg:w-[45vw] xl:w-[40vw] max-w-4xl flex-col justify-end overflow-hidden rounded-[2rem] border border-white/5 bg-gradient-to-br ${project.gradient} p-8 md:p-12 transition-all duration-700 hover:border-white/10 ${project.glow}`}
                >
                  {/* Embedded Abstract Geometric Background Icon */}
                  <div className="absolute -top-12 -right-12 z-0 opacity-[0.03] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 group-hover:opacity-[0.05]">
                    <Icon
                      className="h-96 w-96 md:h-[30rem] md:w-[30rem] stroke-white"
                      strokeWidth={1}
                    />
                  </div>

                  {/* Sub-Interface Number Identifier */}
                  <div className="absolute top-8 left-8 z-20 font-mono text-xl md:text-2xl font-bold tracking-tighter text-white/20 transition-colors duration-500 group-hover:text-white/40">
                    /0{index + 1}
                  </div>

                  <div className="relative z-20 mt-auto flex w-full flex-col">
                    {/* Category Data Preamble */}
                    <span
                      className={`mb-3 font-mono text-xs md:text-sm font-semibold tracking-widest uppercase ${project.textColor}`}
                    >
                      {project.category}
                    </span>

                    {/* Main Lexicon */}
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white drop-shadow-lg">
                      {project.client}
                    </h3>

                    {/* Deep Information Layout */}
                    <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                      <p className="max-w-md text-sm md:text-base leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                        {project.description}
                      </p>

                      {/* Magnetic Button Anchor Sequence */}
                      <button className="flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-950 group-hover:border-white/30 w-full md:w-max">
                        Access Matrix
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
