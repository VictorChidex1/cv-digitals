import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-950/95 relative z-20 w-full overflow-hidden border-none text-slate-400">
      
      {/* Massive Upper Breathing Room (pt-32 / py-16 mobile) */}
      <div className="container mx-auto px-4 pt-20 pb-12 md:pt-32 md:pb-16 sm:px-6 lg:px-8">
        
        {/* Core Links & Branding Container */}
        <div className="flex flex-col items-start justify-between gap-16 md:flex-row md:gap-0">
          
          {/* 1. Left Graphic & Digital Synopsis */}
          <div className="flex w-full max-w-sm flex-col items-start text-left">
            <Link to="/" className="block cursor-pointer mb-8 py-4 pr-16 md:pr-24">
              <img 
                src="/assets/cv-digital-logo.png" 
                alt="CV Digitals Logo" 
                className="h-12 w-auto md:h-16 object-contain scale-[2.5] origin-left md:scale-[3.5] drop-shadow-lg" 
              />
            </Link>
            <p className="text-base md:text-lg font-light leading-relaxed text-slate-400 drop-shadow-sm group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 font-medium tracking-wide">A premium digital agency</span> architecting <span className="text-slate-300 transition-colors duration-300 hover:text-white cursor-default">high-performance structural ecosystems</span> for <span className="text-emerald-400/90 font-medium tracking-wide">elite tech frameworks</span> and <span className="text-amber-400/90 font-medium tracking-wide">entertainment authorities.</span>
            </p>
          </div>
          
          {/* 2. Right Anchor Navigation Matrix */}
          <div className="flex w-full flex-col items-start justify-center gap-6 md:w-auto md:items-end">
            <div className="flex flex-wrap items-start justify-start md:justify-end gap-6 text-sm font-medium tracking-wide text-slate-300 md:gap-10">
              <Link to="/services" className="transition-all duration-300 hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">Services</Link>
              <Link to="/work"     className="transition-all duration-300 hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">Work</Link>
              <Link to="/about"    className="transition-all duration-300 hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">About</Link>
              <Link to="/contact"  className="transition-all duration-300 hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">Contact</Link>
            </div>
            
            {/* Social Media Link / External References Block */}
            <div className="mt-4 flex items-start gap-6 text-slate-500">
              <a href="https://github.com/VictorChidex1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
              </a>
              <a href="https://x.com/Iamkingchidex" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition-colors hover:text-blue-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/victor-chidera-255526b9" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-blue-500">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
              </a>
              <a href="mailto:donchid.online@gmail.com" aria-label="Email" className="transition-colors hover:text-rose-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Massive Space Legal Footer Handoff */}
        <div className="mt-20 md:mt-28 flex flex-col items-start justify-between gap-6 text-xs text-slate-500 md:flex-row md:items-center border-t border-slate-900 pt-8">
          <p>&copy; {new Date().getFullYear()} CV Digitals. All rights reserved.</p>
          <ul className="flex space-x-6 font-medium">
            <li>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Protocol</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
}
