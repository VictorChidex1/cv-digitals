import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routes: Record<string, { title: string }> = {
  "/": { title: "CV Digitals | Premium Tech & Entertainment Agency" },
  "/services": { title: "Our Services | CV Digitals" },
  "/work": { title: "Work & Case Studies | CV Digitals" },
  "/about": { title: "About Us | CV Digitals" },
  "/contact": { title: "Contact Us | CV Digitals" },
  "/privacy": { title: "Privacy Protocol | CV Digitals" },
  "/terms": { title: "Terms of Service | CV Digitals" },
};

export function SeoUpdater() {
  const location = useLocation();

  useEffect(() => {
    // Determine the active title based on the current pathname
    const currentRoute = routes[location.pathname] || routes["/"];
    
    // Sync the browser tab title
    document.title = currentRoute.title;
    
  }, [location.pathname]);

  return null; // This is a headless logic component
}
