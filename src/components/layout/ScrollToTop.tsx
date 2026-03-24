import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only render the secondary Scroll-To-Top node once deep into the layout
      setIsScrollVisible(window.scrollY > 400);
    };

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
    <div className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[100] flex flex-col gap-4 items-center">
      
      {/* Dynamic Scroll to Top Action Node */}
      <button
        onClick={executeScroll}
        aria-label="Scroll to Top"
        className={`flex h-11 w-11 items-center justify-center rounded-full bg-slate-800/90 backdrop-blur-md text-white shadow-lg transition-all duration-500 hover:scale-110 hover:bg-slate-700 ring-1 ring-white/10 focus:outline-none overflow-hidden group ${
          isScrollVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none hidden'
        }`}
      >
        <ArrowUp className="w-5 h-5 stroke-white transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={2.5} />
      </button>

      {/* Static Always-Visible WhatsApp Core Connect Node */}
      <a
        href="https://wa.me/2348063807769"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_20px_rgba(37,211,102,0.3)] transition-all duration-500 hover:scale-110 hover:shadow-[0_15px_30px_rgba(37,211,102,0.4)] focus:outline-none group relative overflow-hidden border border-[#1ebd5a]"
      >
        {/* Ambient overlay glow for structural interaction */}
        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* High-Resolution WhatsApp DOM SVG */}
        <svg className="relative z-10 w-8 h-8 fill-white drop-shadow-md" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.052 0C5.462 0 .104 5.334.101 11.895c-.002 2.105.548 4.16 1.594 5.975L0 24l6.305-1.654a11.882 11.882 0 005.74 1.485h.004c6.588 0 11.942-5.334 11.945-11.896a11.812 11.812 0 00-3.534-8.43" />
        </svg>
      </a>

    </div>
  );
}
