import React, { useState } from 'react';
import { Check, ShieldCheck, Zap, Sparkles, Building2, HelpCircle } from 'lucide-react';

export default function Pricing() {
  const [annualBilling, setAnnualBilling] = useState(true);

  const tiers = [
    {
      name: "Community Health",
      tagline: "For standalone regional hospitals, specialty clinics & infusion centers.",
      monthlyPrice: 2499,
      annualPrice: 1999,
      takeRate: "14%",
      takeRateDesc: "Salvage fee on successfully redistributed batches",
      popular: false,
      badge: "Standard Access",
      features: [
        "Up to 250 licensed hospital beds",
        "GNN Predictive Expiration Graph (30-day window)",
        "Mobile Computer Vision / OCR verification app",
        "Regional courier micro-dispatch access",
        "FDA DSCSA electronic T3 documentation",
        "Standard HL7 FHIR connector",
        "Business hours pharmacy support"
      ]
    },
    {
      name: "Regional Network",
      tagline: "For multi-hospital integrated delivery networks (IDNs) & cancer centers.",
      monthlyPrice: 6999,
      annualPrice: 5599,
      takeRate: "10%",
      takeRateDesc: "Salvage fee on successfully redistributed batches",
      popular: true,
      badge: "Most Selected by IDNs",
      features: [
        "250 to 800 licensed beds (multi-site)",
        "Extended 60-day predictive GNN decay horizon",
        "Unlimited clinical staff CV inspection seats",
        "Priority dedicated cold-chain courier dispatch",
        "Bi-directional Epic, Cerner & SAP EHR integration",
        "Automated inter-facility financial clearinghouse",
        "24/7/365 On-call clinical pharmacologist liaison",
        "Full ESG Scope-3 waste & carbon audit dashboard"
      ]
    },
    {
      name: "Enterprise Consortium",
      tagline: "For academic medical centers, statewide health systems & state consortia.",
      monthlyPrice: 14999,
      annualPrice: 11999,
      takeRate: "8%",
      takeRateDesc: "Lowest salvage fee for high-volume networks",
      popular: false,
      badge: "Maximum Tier Volume",
      features: [
        "Unlimited hospital beds & regional facilities",
        "Custom GNN fine-tuning with local trial registries",
        "Automated reverse logistics routing for entire state",
        "Dedicated cold-chain fleet SLA guarantee (<45 min)",
        "Custom ERP & automated EDI 856 / EPCIS bridge",
        "Direct legal & state pharmacy board compliance counsel",
        "Custom SLA with 99.99% system uptime",
        "Executive Quarterly Business & ROI Reviews"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Transparent Enterprise Health Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Predictable Platform SaaS + Performance-Aligned Salvage
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Our hybrid model combines a fixed monthly software fee for real-time tracking with an 
            incentive-aligned take-rate only paid when high-ticket medication is successfully rescued.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 inline-flex items-center p-1 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-4 py-2 rounded-xl transition-all ${
                !annualBilling 
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all ${
                annualBilling 
                  ? 'bg-gradient-to-r from-cyan-600 to-emerald-600 text-white shadow-md' 
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Annual Contract</span>
              <span className="px-1.5 py-0.5 rounded-full bg-white/20 text-[10px] font-mono">Save 20%</span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {tiers.map((tier) => {
            const price = annualBilling ? tier.annualPrice : tier.monthlyPrice;
            return (
              <div
                key={tier.name}
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  tier.popular
                    ? 'bg-white dark:bg-[#0b1322] border-2 border-cyan-500 shadow-2xl shadow-cyan-950/30 dark:shadow-cyan-950/50 scale-100 lg:-translate-y-2'
                    : 'bg-white dark:bg-[#09111e] border border-slate-200 dark:border-slate-800 shadow-lg'
                }`}
              >
                {/* Popular Highlight Badge */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {tier.name}
                    </h3>
                    {!tier.popular && (
                      <span className="text-[11px] font-mono text-slate-400">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 min-h-[36px]">
                    {tier.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold font-mono text-slate-900 dark:text-white">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">/ month</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {annualBilling ? "Billed annually" : "Billed monthly"}
                    </div>

                    {/* Take-Rate Badge */}
                    <div className="mt-4 p-3 rounded-xl bg-cyan-500/10 dark:bg-cyan-950/30 border border-cyan-500/20">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-600 dark:text-slate-300 font-medium">Salvage Take-Rate:</span>
                        <span className="font-extrabold text-cyan-700 dark:text-cyan-300">{tier.takeRate}</span>
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {tier.takeRateDesc}
                      </div>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Included Capabilities:
                    </div>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href="#contact-us"
                    className={`w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white shadow-lg shadow-cyan-600/30'
                        : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    Select {tier.name}
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Enterprise Compliance Notice */}
        <div className="rounded-2xl bg-slate-50 dark:bg-[#0a101d] border border-slate-200 dark:border-slate-800 p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-cyan-500 shrink-0" />
            <div>
              <span className="font-bold text-slate-900 dark:text-white">Institutional Procurement & Security Standard:</span>
              <p className="mt-0.5">SOC2 Type II Certified • HIPAA Compliant • FDA DSCSA Section 582 Compliant Architecture</p>
            </div>
          </div>
          <a href="#contact-us" className="shrink-0 font-semibold text-cyan-600 dark:text-cyan-400 hover:underline">
            Request Business Associate Agreement (BAA) →
          </a>
        </div>

      </div>
    </section>
  );
}
