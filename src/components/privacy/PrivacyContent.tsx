import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Lock,
  Server,
  Terminal,
  Database,
  Shield,
  Globe,
  Binary,
  Scale,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function PrivacyContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const blocks = gsap.utils.toArray(".prose-block") as HTMLElement[];
      blocks.forEach((block) => {
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-slate-950 py-16 md:py-24 z-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: The Sticky Index Ledger */}
          <div className="col-span-1 lg:col-span-4 lg:sticky top-32 flex flex-col gap-6">
            <div className="p-8 rounded-[2rem] bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px]"></div>
              <h3 className="text-xl font-black text-white tracking-tight mb-8">
                Protocol Index
              </h3>

              <nav className="flex flex-col gap-5">
                <a
                  href="#data-collection"
                  className="flex items-center gap-4 group"
                >
                  <span className="text-[10px] font-mono font-black text-slate-600 group-hover:text-blue-500 transition-colors">
                    01
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">
                    Information We Collect
                  </span>
                </a>
                <div className="w-full h-px bg-white/5"></div>
                <a
                  href="#algorithmic-processing"
                  className="flex items-center gap-4 group"
                >
                  <span className="text-[10px] font-mono font-black text-slate-600 group-hover:text-blue-500 transition-colors">
                    02
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">
                    How We Use It
                  </span>
                </a>
                <div className="w-full h-px bg-white/5"></div>
                <a
                  href="#third-party-nodes"
                  className="flex items-center gap-4 group"
                >
                  <span className="text-[10px] font-mono font-black text-slate-600 group-hover:text-blue-500 transition-colors">
                    03
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">
                    Where Your Data Lives
                  </span>
                </a>
                <div className="w-full h-px bg-white/5"></div>
                <a
                  href="#security-architecture"
                  className="flex items-center gap-4 group"
                >
                  <span className="text-[10px] font-mono font-black text-slate-600 group-hover:text-blue-500 transition-colors">
                    04
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">
                    Keeping You Safe
                  </span>
                </a>
                <div className="w-full h-px bg-white/5"></div>
                <a
                  href="#cookies-state"
                  className="flex items-center gap-4 group"
                >
                  <span className="text-[10px] font-mono font-black text-slate-600 group-hover:text-blue-500 transition-colors">
                    05
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">
                    Cookies And Tracking
                  </span>
                </a>
                <div className="w-full h-px bg-white/5"></div>
                <a
                  href="#global-compliance"
                  className="flex items-center gap-4 group"
                >
                  <span className="text-[10px] font-mono font-black text-slate-600 group-hover:text-blue-500 transition-colors">
                    06
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">
                    Your Global Privacy Rights
                  </span>
                </a>
                <div className="w-full h-px bg-white/5"></div>
                <a
                  href="#retention-cycles"
                  className="flex items-center gap-4 group"
                >
                  <span className="text-[10px] font-mono font-black text-slate-600 group-hover:text-blue-500 transition-colors">
                    07
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">
                    How Long We Keep It
                  </span>
                </a>
                <div className="w-full h-px bg-white/5"></div>
                <a
                  href="#legal-jurisdiction"
                  className="flex items-center gap-4 group"
                >
                  <span className="text-[10px] font-mono font-black text-slate-600 group-hover:text-blue-500 transition-colors">
                    08
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">
                    Legal Agreements
                  </span>
                </a>
              </nav>
            </div>

            <div className="p-6 rounded-[1.5rem] bg-emerald-500/5 border border-emerald-500/20 flex gap-4 items-start">
              <Shield className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <p className="text-[10px] font-mono text-emerald-500/80 leading-relaxed uppercase tracking-widest">
                Live Terminal. Last verified:{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
                . Global cryptographic rules apply.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: The Massive Legal Payload */}
          <div className="col-span-1 lg:col-span-8 bg-slate-900/80 border border-white/5 rounded-[2rem] p-6 sm:p-10 md:p-16 shadow-2xl space-y-24">
            {/* SECTION 01 */}
            <div
              id="data-collection"
              className="relative scroll-mt-32 prose-block"
            >
              <div className="absolute -left-4 md:-left-10 -top-8 md:-top-16 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none">
                01
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-blue-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    Information We Collect
                  </h2>
                </div>
                <div className="text-slate-300 leading-relaxed font-light md:text-lg space-y-6">
                  <p>
                    At CV Digitals, we believe in keeping things simple and
                    transparent. We are not a data mining company; we are an
                    elite web development and creative agency. Because of this,
                    we only collect the exact information we need to get your
                    project off the ground.
                  </p>
                  <p>
                    When you reach out to us using the Contact form, we ask for
                    your name, your email address, your budget expectations, and
                    the specific details of what you want to build (like music
                    promotion campaigns, event architectures, or software
                    systems). We do not secretly scrape your phone, track your
                    personal activities, or pull unconsented information from
                    your browser.
                  </p>
                </div>
                <div className="mt-8 p-6 bg-blue-500/5 border border-blue-500/20 rounded-xl flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-2">
                      The Bottom Line
                    </h4>
                    <p className="text-sm font-light text-slate-300 leading-relaxed">
                      We only ask for what you explicitly type into our forms.
                      We respect your privacy completely and strongly reject
                      hidden tracking algorithms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* SECTION 02 */}
            <div
              id="algorithmic-processing"
              className="relative scroll-mt-32 prose-block"
            >
              <div className="absolute -left-4 md:-left-10 -top-8 md:-top-16 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none">
                02
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                    <Binary className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    How We Use Your Information
                  </h2>
                </div>
                <div className="text-slate-300 leading-relaxed font-light md:text-lg space-y-6">
                  <p>
                    The information you provide to us is used for one primary
                    reason: to communicate with you and build your project. If
                    you are an artist needing promotion, or a business owner
                    needing a $100k application, our core team reads your
                    submission to understand your goals before we reply with a
                    strategy and a proposal.
                  </p>
                  <p>
                    We want to be absolutely clear:{" "}
                    <strong>
                      Under no circumstances do we sell your personal
                      information.
                    </strong>{" "}
                    We will never take your email address, phone number, or
                    project ideas and sell them to third-party marketers, shadow
                    brokers, or advertising networks. Your business ideas stay
                    safely between you and the CV Digitals team.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* SECTION 03 */}
            <div
              id="third-party-nodes"
              className="relative scroll-mt-32 prose-block"
            >
              <div className="absolute -left-4 md:-left-10 -top-8 md:-top-16 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none">
                03
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                    <Server className="w-5 h-5 text-amber-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    Where Your Data Lives
                  </h2>
                </div>
                <div className="text-slate-300 leading-relaxed font-light md:text-lg space-y-6">
                  <p>
                    To make sure our website never crashes and is always
                    lightning-fast whether you're in New York or Lagos, we host
                    our website on world-class servers provided by Google Cloud.
                    When you hit "Submit" on our Contact page, your message goes
                    straight into a highly secure database protected by Google.
                  </p>
                  <p>
                    Even though these massive tech companies provide the
                    physical servers, they are completely locked out of reading
                    your messages. Only the authorized lead engineers and
                    administrators at CV Digitals hold the digital keys to
                    unlock and read your project submissions.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* SECTION 04 */}
            <div
              id="security-architecture"
              className="relative scroll-mt-32 prose-block"
            >
              <div className="absolute -left-4 md:-left-10 -top-8 md:-top-16 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none">
                04
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    Keeping Your Information Safe
                  </h2>
                </div>
                <div className="text-slate-300 leading-relaxed font-light md:text-lg space-y-6">
                  <p>
                    We treat your project ideas and contact details with extreme
                    care. We utilize what the industry terms "Bank-Level
                    Security." Because we are elite software engineers, our
                    website runs automated screening checks to instantly block
                    hackers, malicious spam, or bad actors from accessing the CV
                    Digitals network.
                  </p>
                </div>

                {/* High-End SVG Flow Diagram */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 p-8 border border-emerald-500/20 bg-emerald-500/5 rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>

                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      <Terminal className="w-6 h-6 text-slate-300" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400">
                      YOU (CLIENT)
                    </span>
                  </div>

                  <div className="flex-1 h-px w-full md:w-auto bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent relative z-10 hidden md:block">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 bg-slate-950 text-[10px] font-mono text-emerald-400 border py-1 rounded-full border-emerald-500/30">
                      100% SECURE CONNECTION
                    </div>
                  </div>

                  <div className="flex-1 w-px h-16 bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent relative z-10 block md:hidden"></div>

                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-slate-950 border border-emerald-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      <Server className="w-6 h-6 text-emerald-500" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-500 shadow-emerald-500/50 drop-shadow-md">
                      CV DIGITALS VAULT
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* SECTION 05 */}
            <div
              id="cookies-state"
              className="relative scroll-mt-32 prose-block"
            >
              <div className="absolute -left-4 md:-left-10 -top-8 md:-top-16 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none">
                05
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-blue-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    Cookies and Tracking
                  </h2>
                </div>
                <div className="text-slate-300 leading-relaxed font-light md:text-lg space-y-6">
                  <p>
                    A "cookie" is just a small piece of memory your web browser
                    uses to remember things. We only use strictly essential
                    cookies. For example, our website uses cookies to remember
                    your device screen-size so the website looks perfect on your
                    specific phone, or to ensure our animations run smoothly
                    without crashing your browser.
                  </p>
                  <p>
                    That is it. We absolutely do not use invasive tracking
                    cookies that follow you to Facebook, Instagram, or any other
                    websites. As soon as you close our website, any temporary
                    working memory we used gets cleared automatically.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* SECTION 06 */}
            <div
              id="global-compliance"
              className="relative scroll-mt-32 prose-block"
            >
              <div className="absolute -left-4 md:-left-10 -top-8 md:-top-16 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none">
                06
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    Your Global Privacy Rights
                  </h2>
                </div>
                <div className="text-slate-300 leading-relaxed font-light md:text-lg space-y-6">
                  <p>
                    Because our clients exist globally, from Africa to Europe to
                    the United States, we voluntarily adhere to the strictest
                    data protection laws in the world (such as Europe's GDPR and
                    California's CCPA).
                  </p>
                  <p>
                    In plain English, this means{" "}
                    <strong>you own your data at all times.</strong> If you ever
                    want to know exactly what information we have on file for
                    you, change it, or demand that we permanently delete your
                    files from our agency records, all you have to do is email
                    us at <code>contact@cvdigitals.com</code>. We will
                    immediately honor your request.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* SECTION 07 */}
            <div
              id="retention-cycles"
              className="relative scroll-mt-32 prose-block"
            >
              <div className="absolute -left-4 md:-left-10 -top-8 md:-top-16 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none">
                07
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-rose-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    How Long We Keep Your Data
                  </h2>
                </div>
                <div className="text-slate-300 leading-relaxed font-light md:text-lg space-y-6">
                  <p>
                    We do not keep your information floating around our servers
                    forever. Our policy is straightforward and designed to
                    protect you:
                  </p>
                  <ul className="space-y-4 my-8 pl-4 border-l-2 border-emerald-500/30 list-none text-slate-300">
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                      <span>
                        <strong>If we work together:</strong> We keep your
                        contact and project files secure for as long as you are
                        our client, so we can continuously provide you with
                        support or future upgrades.
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full border border-rose-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                      </div>
                      <span>
                        <strong>If we don't work together:</strong> If you reach
                        out but we decide the project isn't a good fit, we will
                        automatically and securely permanently delete your
                        contact request from our systems after 90 days.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* SECTION 08 */}
            <div
              id="legal-jurisdiction"
              className="relative scroll-mt-32 prose-block"
            >
              <div className="absolute -left-4 md:-left-10 -top-8 md:-top-16 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none">
                08
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-amber-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    Legal Agreements
                  </h2>
                </div>
                <div className="text-slate-300 leading-relaxed font-light md:text-lg space-y-6">
                  <p>
                    By using our website or submitting a project request, you
                    are agreeing to the simple, friendly terms listed on this
                    page. CV Digitals operates fundamentally out of Lagos State,
                    Nigeria. While we cater to clients globally, any rare
                    official legal disputes that arise would be handled under
                    the primary jurisdiction of Nigerian state law, combined
                    with standard global internet compliance.
                  </p>
                  <p>
                    If you ever have any questions—or if anything on this page
                    is confusing—we are always happy to speak with you directly.
                    Elite service means treating our clients like family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
