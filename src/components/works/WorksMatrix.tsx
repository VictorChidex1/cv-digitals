import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

// Explicitly extracted strict native capabilities compiled exactly from the User's Screenshot Maps
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

export function WorksMatrix() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRevealRef = useRef<HTMLDivElement>(null);
  const [activeImg, setActiveImg] = useState<string>("");

  useEffect(() => {
    // Awwwards-Tier GSAP quickTo Matrix compiling absolutely bound absolute mouse coordinates
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
        // Physical geometry translating exactly to viewport center of the Absolute Map (400px x 500px boundaries)
        xTo(e.clientX - 200);
        yTo(e.clientY - 250);
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (imgSrc: string) => {
    setActiveImg(imgSrc);
    // Explicit rotational skew interpolating mouse directions into physical 3D spaces
    gsap.to(imageRevealRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "power3.out",
      rotation: Math.random() * 4 - 2,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRevealRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: "power3.in",
    });
  };

  return (
    <section ref={containerRef} className="relative w-full bg-slate-950 pb-32">
      {/* Global Magnetic Trailing Image Node executing absolute WebGL boundaries */}
      <div
        ref={imageRevealRef}
        className="fixed top-0 left-0 w-[400px] h-[500px] z-[100] pointer-events-none opacity-0 scale-75 overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/10 bg-slate-900 hidden lg:block will-change-transform"
      >
        <img
          src={activeImg}
          alt="Project Reveal"
          className="w-full h-full object-cover object-top scale-105" // Render boundaries expanding slightly scaling up preventing alpha bleeding
          loading="eager"
        />
      </div>

      <div className="w-full flex flex-col border-t border-white/5 relative z-10">
        {projects.map((proj, i) => (
          <a
            key={proj.id}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleMouseEnter(proj.image)}
            onMouseLeave={handleMouseLeave}
            className="group relative w-full flex flex-col lg:flex-row items-start lg:items-center justify-between py-10 md:py-16 px-4 md:px-12 border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-crosshair overflow-hidden"
          >
            {/* Background sliding matrix hover map */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out z-0 hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row items-baseline gap-4 md:gap-16 z-10 w-full lg:w-auto">
              <span className="font-mono text-sm md:text-lg font-bold text-slate-700 transition-colors group-hover:text-blue-500">
                {i < 9 ? `0${i + 1}` : i + 1}
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

            {/* Mobile Fallback Static Image (Hidden on Desktop where Physics run) */}
            <div className="w-full mt-8 rounded-xl overflow-hidden block lg:hidden border border-white/10 shadow-2xl relative">
              <div className="aspect-video w-full">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80 flex items-end p-4">
                <span className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest">
                  Access Architecture <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Arrow Vector (Desktop) */}
            <div className="absolute top-1/2 -translate-y-1/2 right-16 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 z-10 hidden lg:block">
              <ArrowUpRight className="w-16 h-16 text-white" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
