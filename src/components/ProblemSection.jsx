import React from 'react';
import { 
  AlertOctagon, Flame, DollarSign, TrendingDown, 
  ArrowRight, Check, X, ShieldAlert, Sparkles, Building2,
  Database, RefreshCcw
} from 'lucide-react';

export default function ProblemSection() {
  const comparisonData = [
    {
      feature: "Cross-Institution Drug Redistribution",
      pharmloop: "Automated GNN matching across regional hospital clusters 30–60d in advance",
      incinerators: "None (Medication is incinerated at facility expense)",
      rfidCabinets: "Isolated to single hospital cabinet; no inter-health system transfers"
    },
    {
      feature: "Chain of Custody & Verification",
      pharmloop: "Mobile CV & OCR scans lot, tamper seal & thermal log under FDA DSCSA",
      incinerators: "Hazardous waste manifests (RCRA/EPA compliance only)",
      rfidCabinets: "Internal RFID tags only; not validated for off-site transit"
    },
    {
      feature: "Financial Impact",
      pharmloop: "Recovers 85%+ net value of surplus biologics + eliminates disposal fees",
      incinerators: "Pure loss ($5,000+ vial write-off + $2–$5/kg hazardous waste fee)",
      rfidCabinets: "Tracks internal shrinkage, but does not stop expiration decay"
    },
    {
      feature: "Drug Shortage Mitigation",
      pharmloop: "Directly solves regional pediatric & oncology stock-outs in 4–24 hours",
      incinerators: "Zero impact (worsens critical drug scarcity)",
      rfidCabinets: "No awareness of neighboring hospital demand"
    }
  ];

  return (
    <section id="problem" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-[#070b13]/60 border-y border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 mb-3">
            <AlertOctagon className="w-3.5 h-3.5" />
            The $5B+ Biopharma Expiration Dilemma
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why High-Value Medicine Incineration Is An Obsolete Failure of Coordination.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            When an oncology infusion center over-orders a \$12,000 biologic vial with a 60-day buffer, 
            legacy hospital software isolates the data. While one clinic watches it expire, a cancer center 
            twelve miles away faces an urgent patient shortage.
          </p>
        </div>

        {/* 3 Core Drivers of the Crisis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0b1220] border border-slate-200 dark:border-slate-800 shadow-sm relative group hover:border-rose-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              $5B+ High-Ticket Write-Offs
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Biologics and immunotherapies carry massive unit costs ($3k–$30k/vial). 
              A single batch of expired oncology medication represents a catastrophic operational loss for pharmacy budgets.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs font-mono text-rose-600 dark:text-rose-400 font-semibold">
              CRITICAL BUDGET BLEED
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0b1220] border border-slate-200 dark:border-slate-800 shadow-sm relative group hover:border-amber-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              $2–$5/kg Hazardous Waste Tax
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Incinerating pharmaceuticals is heavily regulated under RCRA, ecologically toxic, and requires specialized waste manifests. 
              Hospitals pay punitive disposal penalties on drugs that could have saved lives.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
              ECOLOGICAL & COMPLIANCE TOLL
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0b1220] border border-slate-200 dark:border-slate-800 shadow-sm relative group hover:border-cyan-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <TrendingDown className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Localized Demand Blind Spots
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Hospital ERPs (Epic, Cerner, SAP) only look inward. They have no visibility into neighboring cluster consumption velocity, 
              clinical trials, or patient treatment schedules within a 50-mile radius.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
              INFORMATION SILOS
            </div>
          </div>

        </div>

        {/* The White Space: Architectural Comparison Table */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09111e] shadow-xl overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
                Industry White Space Analysis
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                How PharmLoop Solves What Existing Players Cannot
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              FDA DSCSA Section 582 Architecture
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-900/80 text-xs uppercase font-mono text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="py-4 px-6 font-semibold">Operational Dimension</th>
                  <th className="py-4 px-6 font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/5">
                    PharmLoop Closed-Loop Network
                  </th>
                  <th className="py-4 px-6 font-semibold text-slate-500">Traditional Waste Haulers (Sharps)</th>
                  <th className="py-4 px-6 font-semibold text-slate-500">Static RFID Cabinets (Kit Check / Terso)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-slate-200">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 bg-cyan-500/5 dark:bg-cyan-950/20 text-slate-800 dark:text-cyan-200 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{row.pharmloop}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500 dark:text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.incinerators}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500 dark:text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{row.rfidCabinets}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50/80 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-between gap-3">
            <span>Seamless Bi-Directional Integration with: Epic Systems, Oracle Cerner, SAP Health, and Omnicell</span>
            <a href="#how-it-works" className="font-semibold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1">
              Explore the GNN Engine <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
