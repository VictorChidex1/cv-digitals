import { useEffect } from 'react';
import { WorksHero } from '../components/works/WorksHero';
import { WorksMatrix } from '../components/works/WorksMatrix';
import { CTA } from '../components/home/CTA';
import { initSmoothScroll } from '../lib/smooth-scroll';

export default function Work() {
  useEffect(() => {
    initSmoothScroll();
    // Native enforcement mapping absolute route resets to viewport Zero
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="w-full bg-slate-950 min-h-screen">
      <WorksHero />
      <WorksMatrix />
      {/* Absolute bridging overlapping negative margins precisely over the trailing dark mode matrices */}
      <CTA />
    </div>
  );
}
