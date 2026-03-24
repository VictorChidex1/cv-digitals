import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center gap-2">
              <img src="/assets/cv-digital-logo.png" alt="CV Digitals Logo" className="h-16 w-auto object-contain scale-[2.5] origin-center md:scale-[3.5] md:origin-left pointer-events-none" />
            </Link>
            <p className="mt-2 text-sm text-slate-400">
              Premium digital agency for tech & entertainment.
            </p>
          </div>
          
          <div className="flex space-x-6 text-sm text-slate-400">
            <Link to="/services" className="transition-colors hover:text-emerald-400">Services</Link>
            <Link to="/work" className="transition-colors hover:text-emerald-400">Work</Link>
            <Link to="/about" className="transition-colors hover:text-emerald-400">About</Link>
            <Link to="/contact" className="transition-colors hover:text-emerald-400">Contact</Link>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col items-center justify-between border-t border-slate-800 pt-8 text-xs text-slate-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} CV Digitals. All rights reserved.</p>
          <div className="mt-4 space-x-4 md:mt-0">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
