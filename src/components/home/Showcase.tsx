import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    client: "Oxygen Health Systems",
    category: "Health-Tech Infrastructure",
    description:
      "Engineered a high-conversion, hyper-fast digital landing experience optimized for patient acquisition and performance metrics.",
    image: "/assets/oxygen-health.webp",
    gradient: "from-blue-900/60",
    glow: "group-hover:shadow-[0_0_60px_rgba(59,130,246,0.3)]",
    textColor: "text-blue-400",
    link: "https://oxygen-health-11.web.app/"
  },
  {
    id: 2,
    client: "VeraVox AI",
    category: "Machine Learning Portal",
    description:
      "Designing the unified auditory intelligence framework for next-generation neural networking.",
    image: "/assets/veravox.webp",
    gradient: "from-emerald-900/60",
    glow: "group-hover:shadow-[0_0_60px_rgba(16,185,129,0.3)]",
    textColor: "text-emerald-400",
    link: "https://vevavox-ai.vercel.app/"
  },
  {
    id: 3,
    client: "The Can Man",
    category: "Enterprise Headless Commerce",
    description:
      "Executing a complex, large-scale headless CMS architecture designed for infinite scalability and high-volume nationwide distribution.",
    image: "/assets/canman-hero.webp",
    gradient: "from-amber-900/60",
    glow: "group-hover:shadow-[0_0_60px_rgba(245,158,11,0.3)]",
    textColor: "text-amber-400",
    link: "https://canmancan.com/careers/"
  },
  {
    id: 4,
    client: "Raploard",
    category: "Digital Streaming Architecture",
    description:
      "Engineering viral data paths and global streaming automation modules for sovereign artists.",
    image: "/assets/raploard.webp",
    gradient: "from-rose-900/60",
    glow: "group-hover:shadow-[0_0_60px_rgba(243,24,113,0.3)]",
    textColor: "text-rose-400",
    link: "https://raploard.com"
  },
  {
    id: 5,
    client: "KudiFlow",
    category: "FinTech & Offline-First PWA",
    description:
      "Developed a blazing-fast, offline-first Progressive Web App operating as a complete digital ledger and business OS for emerging markets.",
    image: "/assets/kudiflow.webp",
    gradient: "from-emerald-800/60",
    glow: "group-hover:shadow-[0_0_60px_rgba(5,150,105,0.3)]",
    textColor: "text-emerald-500",
    link: "https://kudiflow.vercel.app/"
  },
];

export function Showcase() {
  const containerRef = useRef<HTMLElement>(null);
  const trackWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

      // 3. High-End Mouse Interactions (Magnetic Cursors)
      const wrap = trackWrapRef.current;
      if (!wrap) return;

      const xTo = gsap.quickTo(".magnetic-cursor", "x", { duration: 0.3, ease: "power3" });
      const yTo = gsap.quickTo(".magnetic-cursor", "y", { duration: 0.3, ease: "power3" });

      const handleMouseMove = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      const handleMouseEnter = () => {
        gsap.to(".magnetic-cursor", { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" });
        infiniteScroller.pause();
      };

      const handleMouseLeave = () => {
        gsap.to(".magnetic-cursor", { scale: 0, opacity: 0, duration: 0.3 });
        infiniteScroller.play();
      };

      wrap.addEventListener("mousemove", handleMouseMove);
      wrap.addEventListener("mouseenter", handleMouseEnter);
      wrap.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        wrap.removeEventListener("mousemove", handleMouseMove);
        wrap.removeEventListener("mouseenter", handleMouseEnter);
        wrap.removeEventListener("mouseleave", handleMouseLeave);
      };

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-10 w-full overflow-hidden bg-slate-950 py-24 md:py-40 text-white"
    >
      {/* Absolute Cinematic Magnetic Pointer Layer */}
      <div className="magnetic-cursor pointer-events-none fixed left-0 top-0 z-[100] flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 scale-0 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
        <span className="text-[10px] font-bold tracking-[0.2em] text-white">INTERACT</span>
      </div>

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
        className="relative flex w-full overflow-hidden pb-12 cursor-none"
      >
        {/* We map exactly two duplicated arrays. Array 2 identically replaces Array 1 mathematically. */}
        {[1, 2].map((sequenceId) => (
          <div
            key={sequenceId}
            className="marquee-track flex w-max shrink-0 gap-6 md:gap-12 px-3 md:px-6"
          >
            {projects.map((project, index) => {
              return (
                <div
                  key={`${sequenceId}-${project.id}`}
                  className={`group relative flex h-[60vh] md:h-[65vh] w-[85vw] md:w-[60vw] lg:w-[45vw] xl:w-[40vw] max-w-4xl flex-col justify-end overflow-hidden rounded-[2rem] border border-white/5 bg-slate-950 p-8 md:p-12 transition-all duration-700 hover:border-white/10 ${project.glow} shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]`}
                >
                  {/* High-End Cinematic Image Plate */}
                  <img
                    src={project.image}
                    alt={project.client}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 z-0 opacity-40 group-hover:opacity-50 grayscale-[20%]"
                  />
                  
                  {/* Structural Dark Gradients ensuring text readability */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} to-transparent mix-blend-multiply z-10 transition-opacity duration-700 opacity-60 group-hover:opacity-80`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10 block"></div>

                  {/* Sub-Interface Number Identifier */}
                  <div className="absolute top-8 left-8 z-20 font-mono text-xl md:text-2xl font-bold tracking-tighter text-white/30 transition-colors duration-500 group-hover:text-white/60">
                    /0{index + 1}
                  </div>

                  {/* Futuristic Absolute Glassmorphism Status Map */}
                  <div className="absolute top-8 right-8 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md opacity-0 -translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></div>
                    <span className="font-mono text-[10px] font-bold tracking-widest text-emerald-400">LIVE</span>
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

                      {/* Magnetic Anchor Network Node mapped to dynamic _blank endpoints */}
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-950 group-hover:border-white/30 w-full md:w-max z-30 cursor-pointer"
                      >
                        Access Matrix
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
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
