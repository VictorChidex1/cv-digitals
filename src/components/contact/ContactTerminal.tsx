import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Send, MapPin, Mail, Loader2, CheckCircle2, Globe2, ShieldAlert } from "lucide-react";

// Strict TypeScript Zod Matrix validating all lead captures
const formSchema = z.object({
  name: z.string().min(2, "Name matrix is incomplete."),
  email: z.string().email("Invalid secure channel (email)."),
  objective: z.string().min(10, "Objective payload is too small to compute."),
  scope: z.enum(["software", "audio"]),
  budget: z.enum(["startup", "enterprise", "global"])
});

type FormValues = z.infer<typeof formSchema>;

export function ContactTerminal() {
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const watchScope = watch("scope");
  const watchBudget = watch("budget");

  const onSubmit = async (data: FormValues) => {
    setIsTransmitting(true);
    setErrorMsg("");
    try {
      await addDoc(collection(db, "contacts"), {
        ...data,
        timestamp: serverTimestamp(),
        status: "pending_review"
      });
      setIsSuccess(true);
    } catch (error: any) {
      console.error("Firestore Upload Error", error);
      setErrorMsg("Transmission failed. Secure channel compromised or Firebase DB offline.");
    } finally {
      setIsTransmitting(false);
    }
  };

  // SUCCESS STATE Overriding the terminal
  if (isSuccess) {
    return (
      <section className="relative w-full bg-slate-950 py-24 z-20 border-t border-white/5">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="w-full bg-slate-900 border border-emerald-500/50 rounded-[2rem] p-8 md:p-16 text-center flex flex-col items-center justify-center min-h-[50vh] shadow-[0_0_100px_rgba(16,185,129,0.1)]">
               <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-50 rounded-full animate-pulse"></div>
                  <CheckCircle2 className="w-24 h-24 text-emerald-500 mb-8 relative z-10" />
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">Transmission <br className="md:hidden"/>Received.</h2>
               <p className="text-slate-400 font-mono text-base md:text-lg max-w-lg leading-relaxed">Your operational parameters have been logged into our secure ledger. Stand by for architectural contact within 24 hours.</p>
            </div>
         </div>
      </section>
    )
  }

  // ACTIVE CAPTURE TERMINAL
  return (
    <section className="relative w-full bg-slate-950 py-16 md:py-24 z-20 border-t border-white/5">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
             
             {/* LEFT COLUMN: The Ledger & Briefing */}
             <div className="col-span-1 lg:col-span-4 flex flex-col gap-12">
                <div className="space-y-8">
                   <h3 className="text-2xl font-black text-white tracking-tight">Direct Channels</h3>
                   <div className="flex flex-col gap-6">
                      <a href="mailto:victor@cvdigitals.com" className="flex items-center gap-4 group cursor-pointer">
                         <div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                            <Mail className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                         </div>
                         <div className="flex flex-col">
                            <span className="text-xs font-bold font-mono uppercase text-slate-500 tracking-widest">Secure Email</span>
                            <span className="text-white font-medium group-hover:text-blue-400 transition-colors">contact@cvdigitals.com</span>
                         </div>
                      </a>
                      <div className="flex items-center gap-4 group">
                         <div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-500/10 transition-all">
                            <MapPin className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                         </div>
                         <div className="flex flex-col">
                            <span className="text-xs font-bold font-mono uppercase text-slate-500 tracking-widest">Base Operations</span>
                            <span className="text-white font-medium group-hover:text-emerald-400 transition-colors">Remote Global / Lagos, NG</span>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="p-6 md:p-8 rounded-[2rem] bg-slate-900 border border-white/5 shadow-xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[50px]"></div>
                   <ShieldAlert className="w-8 h-8 text-amber-500 mb-6" />
                   <h4 className="text-white font-bold mb-2">Priority Selection</h4>
                   <p className="text-slate-400 text-sm font-light leading-relaxed">
                     Due to intensive computational and creative requirements, CV Digitals operates on a strict queue. High-budget enterprise infrastructure and elite audio networking deployments are prioritized.
                   </p>
                </div>
             </div>

             {/* RIGHT COLUMN: The Glassmorphism Terminal */}
             <div className="col-span-1 lg:col-span-8 bg-slate-900/40 backdrop-blur-3xl border border-white/5 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl relative overflow-hidden">
                
                {/* 100k Agency Dynamic Ambient Mesh Lighting natively expanding behind the Glass */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-40 animate-[pulse_8s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-40"></div>
                
                {/* Visual Glare */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 relative z-10 w-full">
                   
                   {errorMsg && (
                      <div className="w-full bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3">
                         <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                         <p className="text-red-400 font-mono text-sm uppercase font-bold">{errorMsg}</p>
                      </div>
                   )}

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                      {/* Name Matrix - High Visibility Boxed Inputs */}
                      <div className="space-y-2 relative">
                        <label className="text-xs uppercase tracking-widest font-mono font-bold text-slate-300 block">Operational Designation (Name)</label>
                        <input 
                          {...register("name")}
                          type="text" 
                          placeholder="Your Name"
                          className="w-full bg-slate-950/80 border border-white/20 rounded-xl px-5 py-4 text-white md:text-xl focus:outline-none focus:border-blue-500 focus:bg-slate-900 focus:ring-1 focus:ring-blue-500/50 transition-all font-medium placeholder:text-slate-500"
                        />
                        {errors.name && <span className="text-red-400 text-xs font-mono absolute -bottom-6 left-0">{errors.name.message}</span>}
                      </div>

                      {/* Email Matrix - High Visibility Boxed Inputs */}
                      <div className="space-y-2 relative">
                        <label className="text-xs uppercase tracking-widest font-mono font-bold text-slate-300 block">Secure Channel (Email)</label>
                        <input 
                          {...register("email")}
                          type="email" 
                          placeholder="Transmission Address"
                          className="w-full bg-slate-950/80 border border-white/20 rounded-xl px-5 py-4 text-white md:text-xl focus:outline-none focus:border-blue-500 focus:bg-slate-900 focus:ring-1 focus:ring-blue-500/50 transition-all font-medium placeholder:text-slate-500"
                        />
                        {errors.email && <span className="text-red-400 text-xs font-mono absolute -bottom-6 left-0">{errors.email.message}</span>}
                      </div>
                   </div>

                   {/* Scope Logic */}
                   <div className="space-y-3 pt-4">
                     <label className="text-xs uppercase tracking-widest font-mono font-bold text-slate-300 block">Operation Scope</label>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button 
                           type="button"
                           onClick={() => setValue("scope", "software", { shouldValidate: true })}
                           className={`p-4 rounded-xl border flex items-center justify-between transition-all ${watchScope === 'software' ? 'bg-blue-500/10 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'bg-slate-950/80 border-white/20 text-slate-300 hover:border-white/40 hover:bg-slate-900'}`}
                        >
                           <span className="font-bold text-base md:text-lg">System Architecture</span>
                           {watchScope === 'software' && <Globe2 className="w-5 h-5 text-blue-500" />}
                        </button>
                        <button 
                           type="button"
                           onClick={() => setValue("scope", "audio", { shouldValidate: true })}
                           className={`p-4 rounded-xl border flex items-center justify-between transition-all ${watchScope === 'audio' ? 'bg-emerald-500/10 border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.2)]' : 'bg-slate-950/80 border-white/20 text-slate-300 hover:border-white/40 hover:bg-slate-900'}`}
                        >
                           <span className="font-bold text-base md:text-lg">Audio Networking</span>
                           {watchScope === 'audio' && <Globe2 className="w-5 h-5 text-emerald-500" />}
                        </button>
                     </div>
                     {errors.scope && <span className="text-red-400 text-xs font-mono block">{errors.scope.message}</span>}
                   </div>

                   {/* Budget Matrix */}
                   <div className="space-y-3 pt-6">
                     <label className="text-xs uppercase tracking-widest font-mono font-bold text-slate-300 block">Funding Tier</label>
                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <button 
                           type="button"
                           onClick={() => setValue("budget", "startup", { shouldValidate: true })}
                           className={`p-4 rounded-xl border font-mono text-base transition-all text-center ${watchBudget === 'startup' ? 'bg-white/10 border-white text-white font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'bg-slate-950/80 border-white/20 text-slate-300 hover:border-white/40 hover:bg-slate-900'}`}
                        >
                           &lt; $5k
                        </button>
                        <button 
                           type="button"
                           onClick={() => setValue("budget", "enterprise", { shouldValidate: true })}
                           className={`p-4 rounded-xl border font-mono text-base transition-all text-center ${watchBudget === 'enterprise' ? 'bg-white/10 border-white text-white font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'bg-slate-950/80 border-white/20 text-slate-300 hover:border-white/40 hover:bg-slate-900'}`}
                        >
                           $5k - $20k
                        </button>
                        <button 
                           type="button"
                           onClick={() => setValue("budget", "global", { shouldValidate: true })}
                           className={`p-4 rounded-xl border font-mono text-base transition-all text-center ${watchBudget === 'global' ? 'bg-white/10 border-white text-white font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'bg-slate-950/80 border-white/20 text-slate-300 hover:border-white/40 hover:bg-slate-900'}`}
                        >
                           $20k +
                        </button>
                     </div>
                     {errors.budget && <span className="text-red-400 text-xs font-mono block">{errors.budget.message}</span>}
                   </div>

                   {/* Payload Node Textarea Array */}
                   <div className="space-y-2 relative pt-6">
                     <label className="text-xs uppercase tracking-widest font-mono font-bold text-slate-300 block">Project Objective (Payload)</label>
                     <textarea 
                       {...register("objective")}
                       placeholder="Detail the operational limitations we are breaking through..."
                       rows={4}
                       className="w-full bg-slate-950/80 border border-white/20 rounded-xl px-5 py-4 text-white md:text-xl focus:outline-none focus:border-blue-500 focus:bg-slate-900 focus:ring-1 focus:ring-blue-500/50 transition-all font-medium placeholder:text-slate-500 resize-none"
                     ></textarea>
                     {errors.objective && <span className="text-red-400 text-xs font-mono absolute -bottom-5 left-0">{errors.objective.message}</span>}
                   </div>

                   {/* Transmit Button - High End Glassmorphic Trigger */}
                   <button 
                     type="submit" 
                     disabled={isTransmitting}
                     className="w-full mt-6 group relative flex items-center justify-center gap-3 bg-gradient-to-tr from-slate-900 to-slate-800 border border-white/10 text-white font-bold uppercase tracking-widest text-sm py-6 rounded-2xl overflow-hidden active:scale-[0.98] transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
                   >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0"></div>
                      <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
                        {isTransmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" /> Transmitting...
                          </>
                        ) : (
                          <>
                            Transmit Coordinates <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </span>
                   </button>

                </form>
             </div>

          </div>
       </div>
    </section>
  )
}
