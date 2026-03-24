import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const textColumnRef = useRef<HTMLDivElement>(null);
  const imageColumnRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textColumnRef.current || !imageColumnRef.current || !imageWrapperRef.current) return;

    // --- 1. Initial Mount Animation Sequence ---
    const tl = gsap.timeline();
    
    // Slide up and fade in the headline and buttons sequentially
    tl.fromTo(
      textColumnRef.current.children,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" }
    );

    // Subtle, continuous floating breathing effect for the entire right column
    gsap.to(imageColumnRef.current, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // --- 2. Cinematic ScrollTrigger Choreography ---
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",     // Pin exactly when section hits the top of the viewport
        end: "+=150%",        // Stay pinned for 1.5x the height of the screen
        scrub: 1,             // Smoothly tie animation to user scroll delta
        pin: true,            // Lock the container in place
      }
    });

    // Mask text backwards as the user scrolls
    scrollTl.to(textColumnRef.current, {
      opacity: 0,
      x: -50,
      ease: "power1.inOut",
      duration: 1
    }, 0);

    // Explode the image container out of its rounded box to essentially swallow the viewport
    scrollTl.to(imageWrapperRef.current, {
      scale: 25,
      borderRadius: 0,
      ease: "power2.inOut",
      duration: 2
    }, 0);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen bg-slate-900 text-slate-50 overflow-hidden flex items-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Establish our clean Two-Column Desktop layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center justify-between min-h-[75vh]">
          
          {/* Left Column: Typography & CTAs */}
          <div ref={textColumnRef} className="flex flex-col space-y-6 z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Building High-Performance <span className="text-emerald-500">Digital</span> Experiences & Amplifying <span className="text-amber-500">Brands</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-xl font-light">
              We operate at the precise intersection of elite web development, powerful music promotion, and premier event management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/services" 
                className="inline-flex flex-shrink-0 items-center justify-center rounded-md bg-emerald-600 px-8 py-3 text-base font-bold text-white shadow-lg transition-all hover:bg-emerald-700 hover:-translate-y-1"
              >
                View Our Services
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex flex-shrink-0 items-center justify-center rounded-md border-2 border-amber-500 bg-transparent px-8 py-3 text-base font-bold text-amber-500 shadow-sm transition-all hover:bg-amber-500/10 hover:-translate-y-1"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Glassmorphism Concept */}
          <div ref={imageColumnRef} className="relative flex items-center justify-center mt-12 md:mt-0 lg:ml-auto w-full max-w-lg mx-auto">
            
            {/* Ambient Background Glow (Mix-blend screen generates high-end cinematic bleeding) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/30 to-amber-500/30 rounded-full blur-[80px] -z-10 mix-blend-screen scale-125"></div>
            
            {/* The primary image scaling target housing the asset */}
            <div 
              ref={imageWrapperRef} 
              className="relative w-full aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(5,150,105,0.3)] ring-1 ring-white/10 origin-center transform-gpu"
            >
              <img 
                src="/assets/cv-digital-hero.jpeg" 
                alt="CV Digitals Brand Hero" 
                className="w-full h-full object-cover scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
