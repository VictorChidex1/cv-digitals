import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const initSmoothScroll = () => {
  const lenis = new Lenis({
    lerp: 0.1, // Adjust this value to make scroll faster/slower (0.1 is default smoothing)
    wheelMultiplier: 1,
    smoothWheel: true,
  });

  // SYNCHRONIZATION: Bind Lenis scroll depth linearly to GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  // Switch from native requestAnimationFrame to GSAP's tightly-controlled internal ticker
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // CRITICAL FIX: The footer cut-off happens because ScrollTrigger "pins" DOM heights dynamically. 
  // We must forcibly trigger a recalculation after initial mount to prevent truncation down the DOM tree.
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);

  return lenis;
};
