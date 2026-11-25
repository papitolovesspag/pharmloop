import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';

export default function RoiCalculator() {
  const [monthlySpend, setMonthlySpend] = useState(2500000); // $2.5M / month in biologics
  const [wasteRate, setWasteRate] = useState(3.5); // 3.5% historical expiration rate
  const [hospitalBeds, setHospitalBeds] = useState(450);

  // Calculations
  const annualSpend = monthlySpend * 12;
  const grossAnnualWasteValue = annualSpend * (wasteRate / 100);
  const recoveredValue = grossAnnualWasteValue * 0.82; // 82% successfully intercepted
  const hazardousFeeSaved = (grossAnnualWasteValue / 1800) * 4.5 * 12; // Approx waste weight & hauling fee
  const netFacilitySavings = recoveredValue + hazardousFeeSaved;
  const kgWasteDiverted = Math.round((grossAnnualWasteValue / 1200) * 1.5);

  return (
    <section id="roi-calculator" className="py-20 md:py-28 bg-slate-50/50 dark:bg-[#070c16]/50 border-y border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Executive Value & ESG Modeler
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Quantify Your Health System's Recoverable Capital
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Simulate your annual savings by intercepting expiring biologics and eliminating regulatory hazardous disposal fees.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09111e] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Controls Side (7 Columns) */}
          <div className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 space-y-8">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Monthly Specialty Biologics & Oncology Spend
                </label>
                <span className="text-base font-extrabold font-mono text-cyan-600 dark:text-cyan-400">
                  ${(monthlySpend).toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="500000"
                max="10000000"
                step="250000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1">
                <span>$500K / mo</span>
                <span>$5M / mo</span>
                <span>$10M+ / mo</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Estimated Expiration / Discard Rate
                </label>
                <span className="text-base font-extrabold font-mono text-amber-500">
                  {wasteRate}% <span className="text-xs text-slate-500 font-sans">of stock</span>
                </span>
              </div>
              <input
                type="range"
                min="1.0"
                max="8.0"
                step="0.5"
                value={wasteRate}
                onChange={(e) => setWasteRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1">
                <span>1.0% (Best in Class)</span>
                <span>3.5% (National Average)</span>
                <span>8.0% (High Volatility)</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Active Licensed Bed Count
                </label>
                <span className="text-base font-extrabold font-mono text-emerald-500">
                  {hospitalBeds} Beds
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="1500"
                step="50"
                value={hospitalBeds}
                onChange={(e) => setHospitalBeds(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1">
                <span>100 Beds</span>
                <span>500 Beds</span>
                <span>1,500+ Beds</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                Calculations based on empirical US health system oncology waste metrics and certified FDA DSCSA 503B / inter-hospital transfer compliance guidelines.
              </span>
            </div>
          </div>

          {/* Results Projection Side (5 Columns) */}
          <div className="lg:col-span-5 p-6 sm:p-10 bg-slate-950 text-white flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Projected Annual Impact
              </span>
              <div className="mt-3">
                <div className="text-xs text-slate-400 uppercase font-mono">Net Capital Recovered</div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400 mt-0.5 tracking-tight">
                  ${Math.round(netFacilitySavings).toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Annually redirected back to pharmacy operating budgets
                </div>
              </div>
            </div>

            <div className="space-y-3 py-4 border-y border-slate-800 text-xs font-mono">
              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-cyan-400" /> Gross Expiration Salvage:
                </span>
                <span className="font-bold text-white">${Math.round(recoveredValue).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5 text-emerald-400" /> Hazardous Manifest Fee Avoidance:
                </span>
                <span className="font-bold text-emerald-300">${Math.round(hazardousFeeSaved).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-cyan-400" /> Toxic Biopharma Waste Diverted:
                </span>
                <span className="font-bold text-white">{kgWasteDiverted.toLocaleString()} kg</span>
              </div>
            </div>

            <div>
              <a
                href="#contact-us"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 transition-all shadow-lg shadow-cyan-500/20"
              >
                <span>Request Custom Health System Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="mt-2 text-center text-[10px] text-slate-500 font-mono">
                Integrates within 14 business days via Epic/Cerner FHIR APIs
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
