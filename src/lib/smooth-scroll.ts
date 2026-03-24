import Lenis from 'lenis';

export const initSmoothScroll = () => {
  const lenis = new Lenis({
    lerp: 0.1, // Adjust this value to make scroll faster/slower (0.1 is default smoothing)
    wheelMultiplier: 1,
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};
