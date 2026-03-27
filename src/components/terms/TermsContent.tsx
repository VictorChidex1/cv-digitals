import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FileText, Layers, Wallet, Copyright, Clock, ShieldAlert, RefreshCcw, Scale, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function TermsContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const blocks = gsap.utils.toArray('.prose-block') as HTMLElement[];
    blocks.forEach((block) => {
      gsap.from(block, {
        scrollTrigger: {
          trigger: block,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-slate-950 py-16 md:py-24 z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: The Sticky Index Ledger */}
          <div className="col-span-1 lg:col-span-4 lg:sticky top-32 flex flex-col gap-6">
            <div className="p-8 rounded-[2rem] bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px]"></div>
               <h3 className="text-xl font-black text-white tracking-tight mb-8">Service Index</h3>
               
               <nav className="flex flex-col gap-5">
                 <a href="#the-agreement" className="flex items-center gap-4 group">
                    <span className="text-[10px] font-mono font-black text-slate-600 group-hover:text-blue-500 transition-colors">01</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">The Agreement</span>
                 </a>
                 <div className="w-full h-px bg-white/5"></div>
                 <a href="#project-scoping" className="flex items-center gap-4 group">
                    <span className="text-[10px] font-mono font-black text-slate-600 group-hover:text-blue-500 transition-colors">02</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">Scoping & Revisions</span>
                 </a>
                 <div className="w-full h-px bg-white/5"></div>
                 <a href="#financial-protocols" className="flex items-center gap-4 group">
                    <span className="text-[10px] font-mono font-black text-slate-600 group-hover:text-blue-500 transition-colors">03</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">Financial Protocols</span>
                 </a>
                 <div className="w-full h-px bg-white/5"></div>
                 <a href="#intellectual-property" className="flex items-center gap-4 group">
                    <span className="text-[10px] font-mono font-black text-slate-600 group-hover:text-blue-500 transition-colors">04</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">Intellectual Property</span>
                 </a>
                 <div className="w-full h-px bg-white/5"></div>
                 <a href="#timeline-adherence" className="flex items-center gap-4 group">
                    <span className="text-[10px] font-mono font-black text-slate-600 group-hover:text-blue-500 transition-colors">05</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">Timeline Adherence</span>
                 </a>
                 <div className="w-full h-px bg-white/5"></div>
                 <a href="#code-of-conduct" className="flex items-center gap-4 group">
                    <span className="text-[10px] font-mono font-black text-slate-600 group-hover:text-blue-500 transition-colors">06</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">Code of Conduct</span>
                 </a>
                 <div className="w-full h-px bg-white/5"></div>
                 <a href="#refund-policy" className="flex items-center gap-4 group">
                    <span className="text-[10px] font-mono font-black text-slate-600 group-hover:text-blue-500 transition-colors">07</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">Refund Policy</span>
                 </a>
                 <div className="w-full h-px bg-white/5"></div>
                 <a href="#legal-jurisdiction" className="flex items-center gap-4 group">
                    <span className="text-[10px] font-mono font-black text-slate-600 group-hover:text-blue-500 transition-colors">08</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">Legal Jurisdiction</span>
                 </a>
               </nav>
            </div>

            <div className="p-6 rounded-[1.5rem] bg-rose-500/5 border border-rose-500/20 flex gap-4 items-start">
               <ShieldAlert className="w-5 h-5 text-rose-500 flex-shrink-0" />
               <p className="text-[10px] font-mono text-rose-500/80 leading-relaxed uppercase tracking-widest">
                 Binding Agreement. By initiating payment, you legally accept these operational boundaries.
               </p>
            </div>
          </div>

          {/* RIGHT COLUMN: The Massive Text Payload */}
          <div className="col-span-1 lg:col-span-8 bg-slate-900/80 border border-white/5 rounded-[2rem] p-6 sm:p-10 md:p-16 shadow-2xl space-y-24">
            
            {/* SECTION 01 */}
            <div id="the-agreement" className="relative scroll-mt-32 prose-block">
               <div className="absolute -left-4 md:-left-10 -top-8 md:-top-16 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none">01</div>
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                       <FileText className="w-5 h-5 text-blue-500" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">The Agreement</h2>
                 </div>
                 <div className="text-slate-300 leading-relaxed font-light md:text-lg space-y-6">
                    <p>
                      Welcome to CV Digitals. We operate at the absolute highest tier of digital architecture, music promotion, and event management. To protect both the elite quality of our work and the investment of our clients, we follow strict, unyielding operational boundaries.
                    </p>
                    <p>
                      By sending an initial deposit, signing a proposal, or actively instructing our team to begin executing on your requested project, you are legally cementing your agreement to everything listed on this page. These rules ensure that your project is delivered flawlessly, on time, and without confusion.
                    </p>
                 </div>
                 <div className="mt-8 p-6 bg-blue-500/5 border border-blue-500/20 rounded-xl flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                       <h4 className="text-white font-bold mb-2">The Bottom Line</h4>
                       <p className="text-sm font-light text-slate-300 leading-relaxed">If you hire us, this page serves as the official rulebook for how we will build, manage, and finalize your project.</p>
                    </div>
                 </div>
               </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* SECTION 02 */}
            <div id="project-scoping" className="relative scroll-mt-32 prose-block">
               <div className="absolute -left-4 md:-left-10 -top-8 md:-top-16 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none">02</div>
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                       <Layers className="w-5 h-5 text-emerald-500" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">Scoping & Revisions</h2>
                 </div>
                 <div className="text-slate-300 leading-relaxed font-light md:text-lg space-y-6">
                    <p>
                      A "Scope of Work" is the exact list of features or marketing goals we agree to build for you before you pay us. We are obsessed with delivering exactly what we promise. 
                    </p>
                    <p>
                      However, if halfway through development you suddenly request massive new features, completely different branding, or entirely new marketing demographics that were not in the original contract, this is considered "Out of Scope." We are happy to build these new requests for you, but they will require an entirely separate invoice and timeline extension.
                    </p>
                    <p>
                      For standard projects, we offer a dedicated "Revision Phase." This is for tweaking colors, moving text, and locking in the final polish. 
                    </p>
                 </div>
               </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* SECTION 03 */}
            <div id="financial-protocols" className="relative scroll-mt-32 prose-block">
               <div className="absolute -left-4 md:-left-10 -top-8 md:-top-16 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none">03</div>
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                       <Wallet className="w-5 h-5 text-amber-500" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">Financial Protocols</h2>
                 </div>
                 <div className="text-slate-300 leading-relaxed font-light md:text-lg space-y-6">
                    <p>
                      Elite work requires dedicated resources. To initiate any project—whether it's web development, artist engineering, or event execution—CV Digitals requires a strictly non-negotiable **upfront deposit** (typically 50% unless otherwise agreed upon in your invoice).
                    </p>
                    <p>
                      We do not begin drafting, designing, or coding until the payment clears the ledger. Once the project hits the agreed-upon checkpoint or final delivery stage, the remaining balance is required before we hand over the master files, source code, or domain ownership.
                    </p>
                 </div>
               </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* SECTION 04 */}
            <div id="intellectual-property" className="relative scroll-mt-32 prose-block">
               <div className="absolute -left-4 md:-left-10 -top-8 md:-top-16 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none">04</div>
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                       <Copyright className="w-5 h-5 text-emerald-500" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">Intellectual Property</h2>
                 </div>
                 <div className="text-slate-300 leading-relaxed font-light md:text-lg space-y-6">
                    <p>
                      <strong>Your Ownership:</strong> Once the final invoice is paid in full, you own 100% of the final deliverables. The graphics, the website visuals, and the campaign parameters are yours to use endlessly. 
                    </p>
                    <p>
                      <strong>Our Ownership:</strong> We retain ownership of the underlying proprietary engineering layers, frameworks, and raw code libraries that we use across multiple clients. Furthermore, CV Digitals retains the permanent, non-exclusive right to display screenshots, links, and case studies of your completed project inside our agency portfolio and social media.
                    </p>
                 </div>
               </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* SECTION 05 */}
            <div id="timeline-adherence" className="relative scroll-mt-32 prose-block">
               <div className="absolute -left-4 md:-left-10 -top-8 md:-top-16 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none">05</div>
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                       <Clock className="w-5 h-5 text-blue-500" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">Timeline Adherence</h2>
                 </div>
                 <div className="text-slate-300 leading-relaxed font-light md:text-lg space-y-6">
                    <p>
                      We move extremely fast, but we rely entirely on your cooperation. If we request photos, audio stems, biographical text, or feedback from you, the project clock is officially paused until you deliver those assets.
                    </p>
                    <p>
                      If a client completely disappears ("ghosts") for more than 30 consecutive days without providing necessary assets or responding to communication, the project is officially considered abandoned. The initial deposit is absorbed to cover dedicated server time and lost labor, and a "Restart Fee" will be required to open the project back up.
                    </p>
                 </div>
               </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* SECTION 06 */}
            <div id="code-of-conduct" className="relative scroll-mt-32 prose-block">
               <div className="absolute -left-4 md:-left-10 -top-8 md:-top-16 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none">06</div>
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                       <ShieldAlert className="w-5 h-5 text-rose-500" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">Code of Conduct</h2>
                 </div>
                 <div className="text-slate-300 leading-relaxed font-light md:text-lg space-y-6">
                    <p>
                      CV Digitals is a luxury agency operating strictly on mutual respect. We treat every single client with extreme professionalism, politeness, and high-end service. We absolutely require the exact same treatment in return.
                    </p>
                    <p>
                      Abusive behavior, aggressive demands, extreme lack of communication, or disrespectful language directed at our developers, designers, or agents will trigger an immediate and irreversible termination of your contract. 
                    </p>
                 </div>
                 <div className="mt-8 p-6 bg-rose-500/5 border border-rose-500/20 rounded-xl flex items-start gap-4">
                    <ShieldAlert className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                    <div>
                       <h4 className="text-white font-bold mb-2">Zero Tolerance</h4>
                       <p className="text-sm font-light text-slate-300 leading-relaxed">If abusive conduct occurs, we hand over everything completed up to that very second and cleanly part ways. Outstanding labor deposits will not be refunded.</p>
                    </div>
                 </div>
               </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* SECTION 07 */}
            <div id="refund-policy" className="relative scroll-mt-32 prose-block">
               <div className="absolute -left-4 md:-left-10 -top-8 md:-top-16 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none">07</div>
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                       <RefreshCcw className="w-5 h-5 text-blue-500" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">Refund Policy</h2>
                 </div>
                 <div className="text-slate-300 leading-relaxed font-light md:text-lg space-y-6">
                    <p>
                      Because our deliverables require highly specialized, unrecoverable hours of intense human labor and server configuration, **all upfront deposits are strictly non-refundable.**
                    </p>
                    <p>
                      If you decide to cancel a project halfway through, you are not punished, but the initial deposit is utilized to cover the time our engineers already spent designing your mockups, building your servers, or drafting your campaign matrices. 
                    </p>
                 </div>
               </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* SECTION 08 */}
            <div id="legal-jurisdiction" className="relative scroll-mt-32 prose-block">
               <div className="absolute -left-4 md:-left-10 -top-8 md:-top-16 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none">08</div>
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                       <Scale className="w-5 h-5 text-amber-500" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">Legal Jurisdiction</h2>
                 </div>
                 <div className="text-slate-300 leading-relaxed font-light md:text-lg space-y-6">
                    <p>
                      Just like our Privacy Policy, these physical Terms of Service are bound and directed by the laws of Lagos State, Nigeria. Should complex disputes occur that cannot be handled via standard dialogue, they will exclusively route through the central legal system operating in our home state.
                    </p>
                    <p>
                      In short: Treat us well, and we will move massive digital mountains for your business. Let's build something impossible.
                    </p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
