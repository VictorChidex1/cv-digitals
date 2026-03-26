import { useEffect } from 'react';
import { ServicesHero } from '../components/services/ServicesHero';
import { ServicesMatrix } from '../components/services/ServicesMatrix';
import { ServicesProcess } from '../components/services/ServicesProcess';
import { CTA } from '../components/home/CTA';
import { initSmoothScroll } from '../lib/smooth-scroll';

export default function Services() {
  useEffect(() => {
    initSmoothScroll();
    // Native enforcement mapping absolute route resets to viewport Zero
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="w-full bg-slate-950 min-h-screen">
      <ServicesHero />
      <ServicesMatrix />
      <ServicesProcess />
      {/* 
        Native mapping of exactly identical Home CTA bridging layout protocols 
        The negative margin overlapping perfectly stacks over the dark Service Process terminal 
      */}
      <CTA />
    </div>
  );
}
