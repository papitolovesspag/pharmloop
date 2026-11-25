import React, { useState, useEffect } from 'react';
import { 
  Activity, Shield, ShieldCheck, Thermometer, Clock, ArrowUpRight, 
  RefreshCw, CheckCircle2, AlertTriangle, Truck, Zap,
  Cpu, Building2, ChevronRight
} from 'lucide-react';

export default function Hero() {
  // Live simulated metric counters
  const [rescuedValue, setRescuedValue] = useState(14820490);
  const [wasteDiverted, setWasteDiverted] = useState(18420);
  const [activeCouriers, setActiveCouriers] = useState(38);
  const [selectedNode, setSelectedNode] = useState(1);

  // Periodic subtle ticker increments to reflect live autonomous enterprise activity
  useEffect(() => {
    const interval = setInterval(() => {
      setRescuedValue(prev => prev + Math.floor(Math.random() * 450) + 120);
      setWasteDiverted(prev => prev + (Math.random() > 0.4 ? 1 : 0));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const clusterNodes = [
    {
      id: 1,
      name: "Metro Oncology Center",
      location: "Cambridge, MA",
      status: "Surplus Forecast Triggered",
      statusType: "warning",
      drug: "Pembrolizumab (Keytruda) 100mg",
      units: "14 Vials",
      expiryDays: 34,
      temp: "3.4°C",
      target: "St. Jude Regional Infusion Hub",
      distance: "14.2 miles",
      compliance: "DSCSA Verified #982-A",
      riskMitigated: "$48,200",
      x: 32,
      y: 38
    },
    {
      id: 2,
      name: "St. Jude Regional Infusion Hub",
      location: "Boston, MA",
      status: "Stock-Out Imminent (72h)",
      statusType: "alert",
      drug: "Awaiting Inbound Transfer",
      units: "12 Vials Needed",
      expiryDays: 0,
      temp: "3.8°C",
      target: "Direct Inbound Match",
      distance: "En Route (Courier #04)",
      compliance: "Chain of Custody Signed",
      riskMitigated: "$41,000",
      x: 68,
      y: 52
    },
    {
      id: 3,
      name: "Valley Health Research Pharmacy",
      location: "Worcester, MA",
      status: "Zero Surplus Equilibrium",
      statusType: "success",
      drug: "Nivolumab (Opdivo) 240mg",
      units: "Optimal Buffer (28 Vials)",
      expiryDays: 142,
      temp: "4.1°C",
      target: "Monitoring Local Trials",
      distance: "32.0 miles",
      compliance: "FDA DSCSA Verified",
      riskMitigated: "$0 (Balanced)",
      x: 48,
      y: 78
    }
  ];

  const activeNodeData = clusterNodes.find(n => n.id === selectedNode) || clusterNodes[0];

  return (
    <section id="overview" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Dynamic Background Tech Grids & Radial Glows */}
      <div className="absolute inset-0 tech-grid dark:tech-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Enterprise Healthcare Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Enterprise Biopharma Closed-Loop Logistics
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 text-xs">
            <Shield className="w-3.5 h-3.5 text-cyan-500" />
            <span>FDA DSCSA & State Pharmacy Board Compliant</span>
          </div>
        </div>

        {/* Hero Main Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Intercepting High-Value <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-500 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
              Biopharma Decay
            </span> Before It Becomes Waste.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Hospitals discard over $5B annually in biologics and immunotherapies due to localized demand shocks. 
            PharmLoop's Graph Neural Network continuously monitors shelf-life decay, verifies physical chain-of-custody, 
            and dispatches regulatory-compliant cold-chain redistribution before expiration.
          </p>

          {/* Primary Call to Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white shadow-xl shadow-cyan-600/25 hover:shadow-cyan-500/35 transition-all duration-200"
            >
              <span>Explore Interactive Pipeline</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#roi-calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 transition-all duration-200"
            >
              <span>Calculate Hospital ROI</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-500" />
            </a>
          </div>
        </div>

        {/* Real-Time Live Telemetry Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-14">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-[#0a111e]/90 border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-cyan-950/20 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
              <span>SALVAGED BIOPHARMA</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
              ${rescuedValue.toLocaleString()}
            </div>
            <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 inline" /> Intercepted from incinerators
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-[#0a111e]/90 border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-cyan-950/20 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
              <span>HAZARDOUS WASTE AVOIDED</span>
              <Activity className="w-3.5 h-3.5 text-cyan-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
              {wasteDiverted.toLocaleString()} <span className="text-sm font-sans font-medium text-slate-500">KG</span>
            </div>
            <p className="mt-1 text-xs text-cyan-600 dark:text-cyan-400">
              Zero EPA manifest penalties
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-[#0a111e]/90 border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-cyan-950/20 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
              <span>ACTIVE COLD-CHAIN RUNS</span>
              <Truck className="w-3.5 h-3.5 text-teal-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
              {activeCouriers} <span className="text-sm font-sans font-medium text-slate-500">Live</span>
            </div>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Avg dispatch: 41 mins
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-[#0a111e]/90 border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-cyan-950/20 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
              <span>CHAIN OF CUSTODY INTEGRITY</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
              99.98%
            </div>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Electronic DSCSA T3 Handshake
            </p>
          </div>
        </div>

        {/* Interactive Live Cold-Chain Radar Preview HUD */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#09111e]/90 shadow-2xl dark:shadow-cyan-950/30 overflow-hidden backdrop-blur-xl">
          {/* HUD Header Bar */}
          <div className="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-50/70 dark:bg-slate-900/60">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                Live Regional Cluster Telemetry (New England Cluster #04)
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="hidden sm:inline">PROTOCOL: DSCSA-T3-REST</span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-medium">GNN ACTIVE</span>
            </div>
          </div>

          {/* Interactive HUD Content */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Visual Cluster Map with Simulated Radar Grid (7 Columns) */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl bg-slate-950 border border-cyan-900/30 overflow-hidden p-4 flex flex-col justify-between">
              
              {/* Radar Rings & Grid Lines */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-cyan-500/30 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-cyan-500/20 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-cyan-500/10 rounded-full" />
              </div>

              {/* Sweeping Radar Beam */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none overflow-hidden animate-radar opacity-30">
                <div className="w-1/2 h-1/2 bg-gradient-to-br from-cyan-400/40 via-transparent to-transparent origin-bottom-right" />
              </div>

              {/* Micro-Route Connecting Line between Node 1 & Node 2 */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line 
                  x1="32%" y1="38%" x2="68%" y2="52%" 
                  stroke="#06b6d4" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  strokeOpacity="0.8"
                  className="animate-pulse"
                />
                <circle cx="50%" cy="45%" r="4" fill="#10B981">
                  <animate attributeName="cx" values="32%;68%" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="38%;52%" dur="5s" repeatCount="indefinite" />
                </circle>
              </svg>

              {/* Node Hotspots */}
              {clusterNodes.map((node) => {
                const isSelected = selectedNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 focus:outline-none`}
                  >
                    <div className="relative">
                      {isSelected && (
                        <div className="absolute -inset-3 rounded-full bg-cyan-500/30 animate-ping opacity-75" />
                      )}
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all shadow-lg ${
                        isSelected 
                          ? 'bg-cyan-500 text-slate-950 border-white ring-4 ring-cyan-500/20 scale-110' 
                          : node.statusType === 'warning' 
                            ? 'bg-amber-950/80 text-amber-300 border-amber-500/60 hover:scale-105'
                            : node.statusType === 'alert'
                              ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/60 hover:scale-105'
                              : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/60 hover:scale-105'
                      }`}>
                        <Building2 className="w-4 h-4" />
                      </div>

                      {/* Floating Tooltip Label */}
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700 text-[10px] font-mono text-slate-200 pointer-events-none">
                        {node.name.split(' ')[0]}
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* Map Footer status */}
              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-cyan-300/80">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  GNN Predictive Mesh: 3 Connected Nodes
                </span>
                <span>Click a node to inspect telemetry</span>
              </div>
            </div>

            {/* Selected Node Telemetry Inspector Panel (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400">
                    NODE TELEMETRY #{activeNodeData.id.toString().padStart(2, '0')}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold uppercase ${
                    activeNodeData.statusType === 'warning' 
                      ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                      : activeNodeData.statusType === 'alert'
                        ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20'
                        : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                  }`}>
                    {activeNodeData.status}
                  </span>
                </div>

                <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                  {activeNodeData.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  {activeNodeData.location}
                </p>
              </div>

              {/* Real-time telemetry items */}
              <div className="grid grid-cols-2 gap-3 py-2 border-y border-slate-200 dark:border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                    <Thermometer className="w-3 h-3 text-cyan-500" /> Cold-Chain Temp
                  </div>
                  <div className="mt-1 text-base font-bold text-slate-900 dark:text-slate-100 font-mono">
                    {activeNodeData.temp}
                  </div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400">Standard 2°C–8°C Range</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-500" /> Expiry Buffer
                  </div>
                  <div className="mt-1 text-base font-bold text-slate-900 dark:text-slate-100 font-mono">
                    {activeNodeData.expiryDays > 0 ? `${activeNodeData.expiryDays} Days` : 'Action Imminent'}
                  </div>
                  <div className="text-[10px] text-cyan-600 dark:text-cyan-400">GNN Forecast Window</div>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">Biologic Compound:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{activeNodeData.drug}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">Matched Recipient:</span>
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">{activeNodeData.target}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">Estimated Salvage Value:</span>
                  <span className="font-bold font-mono text-emerald-600 dark:text-emerald-400">{activeNodeData.riskMitigated}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  ID: <span className="text-slate-700 dark:text-slate-300">{activeNodeData.compliance}</span>
                </span>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500"
                >
                  <span>See How Redistribution Works</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
