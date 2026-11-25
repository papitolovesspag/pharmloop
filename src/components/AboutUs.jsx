import React from 'react';
import { Target, Compass, HeartPulse, Recycle, User, Shield, Building, Award } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about-us" className="py-24 md:py-32 bg-slate-50/50 dark:bg-[#070c16]/50 border-t border-slate-200 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 mb-3">
            <Target className="w-3.5 h-3.5" />
            Our Mission & Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Building An Autonomous Safety Net for Modern Healthcare
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            PharmLoop was established to eliminate the systemic friction between hospital pharmaceutical waste 
            and critical patient drug shortages through rigorous mathematical forecasting and verified logistics.
          </p>
        </div>

        {/* Mission Statement Block */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09111e] p-8 sm:p-12 shadow-xl mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
              Mission Statement & Strategic Objective
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-2 leading-snug">
              "To transform hospital medicine disposal from an isolated financial liability into an interconnected, closed-loop regional safety net."
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Every day, vital cancer therapies and cold-chain biologics are destroyed merely because hospital software cannot see across town. 
              Our objective is to provide a neutral, regulatory-compliant intelligence infrastructure that coordinates shelf-life decay with clinical demand—preserving 
              essential medicines for the patients who need them while protecting healthcare organizations from unnecessary financial loss and hazardous disposal penalties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Alleviating Drug Shortages</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Ensuring vital oncology infusions are routed to patients within hours rather than waiting on backlogged national supply chains.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                <Recycle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Zero Hazardous Incineration</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Diverting hazardous pharmaceutical compounds from high-heat incinerators, drastically lowering institutional Scope 3 environmental impact.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Uncompromising Compliance</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Operating strictly within the boundaries of the FDA Drug Supply Chain Security Act (DSCSA) and state pharmacy transfer statutes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder & Leadership Section (Strictly One Founder: Chiamaka) */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
              Executive Leadership
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Founder & Chief Executive Officer
            </h3>
          </div>

          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1322] shadow-xl overflow-hidden p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8">
            
            {/* Founder Picture */}
            <div className="relative shrink-0 w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-xl group">
              <img
                src="/founder.jpg"
                alt="Chiamaka - Founder & CEO, PharmLoop"
                className="w-full h-full object-cover object-[center_78%] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

              {/* Verified badge */}
              <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-lg">
                <Shield className="w-3.5 h-3.5 text-white" />
              </div>

              <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-center">
                <span className="text-[11px] font-mono font-bold text-white tracking-wide">
                  Chiamaka
                </span>
                <span className="text-[9px] font-mono text-cyan-300 block -mt-0.5">
                  Founder & CEO
                </span>
              </div>
            </div>

            {/* Founder Biography */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-medium mb-2">
                Founder & CEO
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Chiamaka
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                Healthcare Supply Chain Architecture & Biopharma Operations
              </p>

              <div className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-2.5">
                <p>
                  Chiamaka is the Founder and Chief Executive Officer of PharmLoop. Driven by a deep commitment to systemic healthcare equity and supply chain resilience, she recognized the devastating paradox of high-value clinical medicine destruction occurring alongside critical hospital stock-outs.
                </p>
                <p>
                  Combining an acute operational focus on biopharmaceutical cold-chains with graph-driven predictive logistics, Chiamaka architects enterprise solutions that transform rigid expiration buffers into lifesaving regional redistribution networks.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Under her leadership, PharmLoop is building the next-generation coordination infrastructure for oncology centers, specialty pharmacies, and regional health systems—safeguarding patient access while eliminating hazardous chemical waste.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400">
                  <Award className="w-3.5 h-3.5" /> Founder-Led Organization
                </span>
                <span className="text-slate-400">•</span>
                <span>FDA DSCSA Standards Advocate</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
