import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Render the button actively onto the DOM only when the user descends past the Hero layout
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Passive listener ensures the main thread isn't blocked during high-velocity Lenis scrolling
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const executeScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={executeScroll}
      aria-label="Scroll to Top"
      className={`fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_10px_20px_rgba(16,185,129,0.3)] transition-all duration-500 hover:scale-110 hover:shadow-[0_15px_30px_rgba(16,185,129,0.4)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 overflow-hidden group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      {/* Absolute ambient glow specifically rendering over the button border to mimic expensive 3D SaaS buttons */}
      <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <ArrowUp className="relative z-10 w-6 h-6 stroke-white transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={2.5} />
    </button>
  );
}
