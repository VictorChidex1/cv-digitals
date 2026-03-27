import { useEffect } from "react";
import { TermsHero } from "../components/terms/TermsHero";
import { TermsContent } from "../components/terms/TermsContent";
import { CTA } from "../components/home/CTA";

export default function Terms() {
  useEffect(() => {
    // Ensure accurate physics by forcefully wrapping user viewport to top edge 
    // replacing any lingering router-anchor artifacts instantly.
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-slate-950 min-h-screen selection:bg-blue-500/30">
      <TermsHero />
      <TermsContent />
      <div className="relative z-10 bg-slate-900 rounded-t-[3rem] -mt-10 overflow-hidden">
         <CTA />
      </div>
    </main>
  );
}
