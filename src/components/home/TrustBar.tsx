const logos = [
  { name: 'CanMan', src: '/assets/logos/canman-logo.png' },
  { name: 'FoodFlow', src: '/assets/logos/foodflow-logo.svg' },
  { name: 'KudiFlow', src: '/assets/logos/kudiflow-logo.webp' },
  { name: 'Novluma', src: '/assets/logos/novluma-logo.webp' },
  { name: 'Oxygen Health', src: '/assets/logos/oxygen-health-logo.png' },
  { name: 'Veravox', src: '/assets/logos/veravox-logo.webp' },
];

export function TrustBar() {
  return (
    <section className="relative z-20 bg-slate-950 py-20 border-t border-white/5 overflow-hidden">
      
      {/* Typography Signature */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
        <h3 className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium text-slate-500 transition-colors drop-shadow-md">
          Trusted By Industry Leaders
        </h3>
      </div>
      
      {/* The Abyss Masking Container */}
      <div 
        className="relative flex overflow-hidden w-full max-w-[100vw]"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        
        {/* Infinite CSS Hardware-Accelerated Marquee Track */}
        <div className="flex w-max animate-marquee items-center group/marquee hover:[animation-play-state:paused]">
          
          {/* We spread the logos array TWICE sequentially to perfectly stitch the infinite scroll seam */}
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`} 
              className="relative mx-8 md:mx-16 flex w-32 md:w-44 flex-shrink-0 items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:drop-shadow-[0_0_20px_rgba(5,150,105,0.7)] cursor-pointer hover:-translate-y-1 transform-gpu"
              aria-label={logo.name}
            >
              <img 
                src={logo.src} 
                alt={`${logo.name} Client Logo`} 
                className="max-h-12 md:max-h-16 w-auto object-contain transition-transform duration-500 ease-out" 
              />
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
