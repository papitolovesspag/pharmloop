import React, { useState, useEffect } from 'react';
import { 
  Network, Scan, Truck, CheckCircle2, ArrowRight, 
  RotateCw, Shield, Thermometer, QrCode, Cpu,
  Activity, Play, Pause, AlertCircle, FileCheck, MapPin
} from 'lucide-react';

export default function HowItWorks() {
  const [activeStage, setActiveStage] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [scanProgress, setScanProgress] = useState(100);
  const [isScanning, setIsScanning] = useState(false);
  const [simulatedTemp, setSimulatedTemp] = useState(3.6);
  const [routeProgress, setRouteProgress] = useState(65);

  // Auto-cycle through the 3 stages if user hasn't paused
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStage(prev => (prev === 3 ? 1 : prev + 1));
    }, 9000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Handle triggering a simulated CV scan in Stage 2
  const triggerScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      setScanProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setIsScanning(false);
      }
    }, 120);
  };

  const stages = [
    {
      id: 1,
      name: "Predictive Expiration Graph",
      subtitle: "Stage 01: GNN Cluster Modeling",
      icon: Network,
      tag: "30–60 Day Lead Time",
      description: "Graph Neural Networks synthesize regional patient administration schedules, EHR consumption velocity, and ongoing clinical trials to pinpoint surplus inventory weeks before expiration."
    },
    {
      id: 2,
      name: "Computer Vision & OCR Verification",
      subtitle: "Stage 02: Physical Custody Validation",
      icon: Scan,
      tag: "FDA DSCSA Compliant",
      description: "Clinical staff capture vial lot numbers, cold-chain temperature tags, and tamper seals. Computer vision pipelines verify seal integrity, GS1 2D DataMatrix serialization, and chain-of-custody."
    },
    {
      id: 3,
      name: "Autonomous Cold-Chain Routing",
      subtitle: "Stage 03: Reverse Logistics Engine",
      icon: Truck,
      tag: "Dynamic Micro-Routes",
      description: "Surplus biologics are matched to an authorized regional recipient facing urgent stock-outs. IoT-monitored cold-chain micro-couriers execute transfer with cryptographic EPCIS handshake."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-cyan-500/10 via-emerald-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Autonomous Supply Chain Coordination
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How PharmLoop Intercepts Biopharma Decay
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A three-stage autonomous pipeline designed to protect patient access, satisfy stringent FDA Drug Supply Chain 
            Security Act (DSCSA) mandates, and eliminate hazardous pharmaceutical incineration.
          </p>

          {/* Autoplay & Stage Navigation Controls */}
          <div className="mt-6 inline-flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-mono">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="px-3 py-1.5 rounded-xl flex items-center gap-1.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-700 hover:text-cyan-500"
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-amber-500" /> : <Play className="w-3.5 h-3.5 text-emerald-500" />}
              <span>{isAutoPlaying ? "Auto-Cycling Pipeline" : "Paused"}</span>
            </button>
            <span className="text-slate-400 px-2">Stage {activeStage} of 3</span>
          </div>
        </div>

        {/* Stage Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stages.map((stage) => {
            const Icon = stage.icon;
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => {
                  setActiveStage(stage.id);
                  setIsAutoPlaying(false);
                }}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                  isActive
                    ? 'bg-white dark:bg-[#0b1322] border-cyan-500 shadow-xl shadow-cyan-950/20 dark:shadow-cyan-950/40 ring-1 ring-cyan-500/50'
                    : 'bg-white/60 dark:bg-[#070d17]/60 border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                {/* Active Progress Bar */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isActive 
                      ? 'bg-cyan-500 text-slate-950 font-bold' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-cyan-500'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    isActive 
                      ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}>
                    {stage.tag}
                  </span>
                </div>

                <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                  {stage.subtitle}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  {stage.name}
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {stage.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Interactive Visual Canvas Container */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#080e1a] shadow-2xl p-6 sm:p-8 lg:p-10 relative min-h-[520px] flex flex-col justify-between">
          
          {/* ========================================================= */}
          {/* STAGE 1: GRAPH NEURAL NETWORK DEMAND & DECAY GRAPH */}
          {/* ========================================================= */}
          {activeStage === 1 && (
            <div className="animate-in fade-in duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-xs font-mono uppercase text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider">
                    GNN Predictive Modeling Node Cluster
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Multi-Facility Graph Neural Topology
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
                    By aggregating EHR cancer treatment plans and consumption velocity across regional nodes, 
                    the GNN flags decay 45 days before the clinical hard-stop.
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start lg:self-center">
                  <div className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
                    Confidence: <span className="text-emerald-500 font-bold">99.4%</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-700 dark:text-cyan-300 font-bold">
                    Horizon: 45 Days Out
                  </div>
                </div>
              </div>

              {/* Interactive GNN Canvas */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
                {/* SVG Visual Graph Structure */}
                <div className="lg:col-span-8 relative h-80 sm:h-96 rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden p-6 flex flex-col justify-between">
                  {/* Subtle Grid Matrix */}
                  <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

                  {/* Connected GNN Edges */}
                  <svg className="absolute inset-0 w-full h-full">
                    {/* Node 1 to Center */}
                    <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="#06b6d4" strokeWidth="2" strokeDasharray="3 3" strokeOpacity="0.7">
                      <animate attributeName="stroke-dashoffset" values="0;24" dur="2s" repeatCount="indefinite" />
                    </line>
                    {/* Node 2 to Center */}
                    <line x1="20%" y1="75%" x2="50%" y2="50%" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" strokeOpacity="0.7">
                      <animate attributeName="stroke-dashoffset" values="0;24" dur="2s" repeatCount="indefinite" />
                    </line>
                    {/* Center to Node 3 (Surplus Discovery) */}
                    <line x1="50%" y1="50%" x2="80%" y2="40%" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 4">
                      <animate attributeName="stroke-dashoffset" values="24;0" dur="1.5s" repeatCount="indefinite" />
                    </line>
                    {/* Center to Node 4 */}
                    <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.4" />
                  </svg>

                  {/* Node 1: EHR Patient Intake */}
                  <div className="absolute top-[20%] left-[10%] p-3 rounded-xl bg-slate-900/95 border border-cyan-500/40 text-xs font-mono text-cyan-300 shadow-lg">
                    <div className="font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                      EHR Patient Schedules
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">Epic Systems Stream</div>
                    <div className="text-[10px] text-emerald-400 font-semibold">1,420 Infusions Tracked</div>
                  </div>

                  {/* Node 2: Clinical Trial Protocols */}
                  <div className="absolute bottom-[15%] left-[10%] p-3 rounded-xl bg-slate-900/95 border border-emerald-500/40 text-xs font-mono text-emerald-300 shadow-lg">
                    <div className="font-bold flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-emerald-400" />
                      Consumption Velocity
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">Trial Protocol Adjustments</div>
                    <div className="text-[10px] text-cyan-400 font-semibold">v = -0.42 vials/day</div>
                  </div>

                  {/* Center Node: PharmLoop GNN Brain */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl bg-cyan-950/90 border-2 border-cyan-400 text-center shadow-2xl shadow-cyan-500/30 z-10">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500 text-slate-950 flex items-center justify-center mx-auto mb-2 font-black">
                      <Cpu className="w-6 h-6 animate-pulse" />
                    </div>
                    <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      PharmLoop GNN
                    </div>
                    <div className="text-[10px] font-mono text-cyan-300">Decay Engine v4.2</div>
                  </div>

                  {/* Node 3: Flagged Surplus (Action Trigger) */}
                  <div className="absolute top-[25%] right-[8%] p-3 rounded-xl bg-slate-900/95 border border-amber-500 text-xs font-mono text-amber-300 shadow-xl shadow-amber-950/40">
                    <div className="font-bold flex items-center gap-1.5 text-amber-400">
                      <AlertCircle className="w-4 h-4 text-amber-400 animate-pulse" />
                      SURPLUS FLAGGED: 45d
                    </div>
                    <div className="text-[11px] text-slate-200 mt-1 font-semibold">16 Vials Opdivo (Nivolumab)</div>
                    <div className="text-[10px] text-emerald-400 font-mono">Salvage Value: $38,400</div>
                  </div>

                  {/* Footer Stats inside graph */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2">
                    <span>Edge Weights: Regional Distance & Cold Stability</span>
                    <span className="text-cyan-400">Continuous 15-Minute Re-inference</span>
                  </div>
                </div>

                {/* Explanation Breakdown Card (4 Columns) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-mono text-slate-500 uppercase">1. Patient Schedule Mapping</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">EHR Interoperability</div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Direct HL7 FHIR connectors monitor cancelled appointments, dosage titrations, and clinical regimen changes in real-time.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-mono text-slate-500 uppercase">2. Consumption Velocity vs Expiry</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">Decay Gradient Analysis</div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Calculates whether a hospital will exhaust its current lot before the expiration window closes, accounting for seasonal variance.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-200">
                    <div className="text-xs font-bold uppercase flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      30–60 Day Lead Advantage
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                      Unlike reactive waste haulers who arrive after drugs expire, PharmLoop initiates redistribution while the product retains full potency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* STAGE 2: COMPUTER VISION & OCR MOBILE VERIFICATION HUD */}
          {/* ========================================================= */}
          {activeStage === 2 && (
            <div className="animate-in fade-in duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-xs font-mono uppercase text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider">
                    Edge Verification & Chain-of-Custody
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Computer Vision & OCR Inspection HUD
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
                    Clinical pharmacy staff capture a 5-second video scan. The edge vision pipeline validates physical integrity, 
                    GS1 2D DataMatrix serial codes, and thermal tags prior to release.
                  </p>
                </div>
                <button
                  onClick={triggerScan}
                  disabled={isScanning}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-semibold text-xs tracking-wider uppercase hover:shadow-lg hover:shadow-cyan-500/25 transition-all self-start lg:self-center disabled:opacity-50"
                >
                  <RotateCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                  <span>{isScanning ? "Scanning Vial..." : "Simulate Live CV Scan"}</span>
                </button>
              </div>

              {/* Interactive CV Scanner HUD Canvas */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
                
                {/* Visual Smartphone / Scanner Viewfinder */}
                <div className="lg:col-span-7 relative h-80 sm:h-96 rounded-2xl bg-slate-950 border border-cyan-800/40 overflow-hidden p-6 flex flex-col justify-between shadow-2xl">
                  
                  {/* Camera Grid Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />

                  {/* Viewfinder Target Bracket Corners */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />

                  {/* Animated Laser Scanning Line */}
                  <div 
                    className="absolute left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#06b6d4] pointer-events-none transition-all duration-150"
                    style={{ top: `${scanProgress}%` }}
                  />

                  {/* Simulated Oncology Biologics Vial Representation */}
                  <div className="relative mx-auto my-auto w-48 sm:w-56 h-56 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-700/80 p-3 shadow-2xl flex flex-col justify-between">
                    
                    {/* Vial Cap & Tamper Seal Box */}
                    <div className="relative p-2 rounded-lg bg-emerald-950/50 border border-emerald-500/60 text-[10px] font-mono text-emerald-300">
                      <div className="flex items-center justify-between">
                        <span className="font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          SEAL: INTACT
                        </span>
                        <span className="text-emerald-400">99.8% Conf</span>
                      </div>
                      <div className="text-[9px] text-slate-400">Zero Micro-Fractures</div>
                    </div>

                    {/* Vial Label Body & Barcode Detection Box */}
                    <div className="my-2 p-2.5 rounded-lg bg-slate-950/80 border border-cyan-500/80 relative">
                      <div className="text-[10px] font-mono font-bold text-white flex items-center justify-between">
                        <span>KEYTRUDA® 100mg</span>
                        <QrCode className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="text-[9px] font-mono text-cyan-300 mt-1">
                        GTIN: 00300063000185
                      </div>
                      <div className="text-[9px] font-mono text-slate-400">
                        LOT: 24K819 • EXP: 2027-04-12
                      </div>
                      {/* Bounding box marker */}
                      <span className="absolute -top-2 -right-2 px-1.5 py-0.2 rounded bg-cyan-500 text-slate-950 font-mono text-[8px] font-bold">
                        OCR PASS
                      </span>
                    </div>

                    {/* Thermal Cold-Chain Sensor Tag */}
                    <div className="p-2 rounded-lg bg-slate-900/90 border border-cyan-500/40 flex items-center justify-between text-[10px] font-mono">
                      <div className="flex items-center gap-1 text-cyan-300">
                        <Thermometer className="w-3.5 h-3.5 text-cyan-400" />
                        <span>TEMP TAG: {simulatedTemp}°C</span>
                      </div>
                      <span className="text-emerald-400 font-bold">PASSED (2–8°C)</span>
                    </div>
                  </div>

                  {/* Viewfinder Status Bar */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-cyan-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      FDA DSCSA Barcode Serializer Verified
                    </span>
                    <span>Frame Rate: 60 FPS • Edge Inference</span>
                  </div>
                </div>

                {/* Validation Attributes List (5 Columns) */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      <QrCode className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">GS1 2D DataMatrix Parsing</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        Instantly extracts serialized NDC, unique serial number, lot code, and expiration date matching national DSCSA databases.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Tamper & Seal Verification</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        Edge vision models check crimp ring integrity, stopper punctures, and microscopic hairline vial fractures to reject compromised batches.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
                      <Thermometer className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Continuous Cold-Chain Audit</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        Scans irreversible thermal indicators to ensure the medication never experienced temperature excursions above 8°C.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* STAGE 3: AUTONOMOUS REVERSE LOGISTICS & DYNAMIC ROUTING */}
          {/* ========================================================= */}
          {activeStage === 3 && (
            <div className="animate-in fade-in duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider">
                    Micro-Route Dispatch & EPCIS Handshake
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Regulatory Cold-Chain Redistribution
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
                    Once verified, PharmLoop dispatches certified cold-chain couriers on dynamic micro-routes, 
                    transferring title and regulatory electronic Product Code Information Services (EPCIS) compliance records in real time.
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start lg:self-center">
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold">
                    Transit: 38 Mins Remaining
                  </span>
                </div>
              </div>

              {/* Interactive Dispatch Route Canvas */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
                
                {/* Visual Micro-Route Map */}
                <div className="lg:col-span-7 relative h-80 sm:h-96 rounded-2xl bg-slate-950 border border-emerald-900/40 overflow-hidden p-6 flex flex-col justify-between shadow-2xl">
                  
                  {/* Road Grid and Coordinates */}
                  <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

                  {/* Route Trajectory SVG */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path 
                      d="M 120 220 Q 240 100 420 160 T 640 120" 
                      fill="none" 
                      stroke="#1e293b" 
                      strokeWidth="6" 
                      strokeLinecap="round" 
                    />
                    <path 
                      d="M 120 220 Q 240 100 420 160 T 640 120" 
                      fill="none" 
                      stroke="#10b981" 
                      strokeWidth="4" 
                      strokeLinecap="round" 
                      strokeDasharray="8 8"
                      className="animate-pulse"
                    />
                  </svg>

                  {/* Origin Facility Pin */}
                  <div className="absolute left-[15%] bottom-[20%] p-3 rounded-xl bg-slate-900/95 border border-slate-700 text-xs font-mono text-slate-200 shadow-xl">
                    <div className="text-[9px] text-amber-400 font-bold uppercase flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      ORIGIN (SURPLUS CLINIC)
                    </div>
                    <div className="font-bold text-white mt-0.5">Beth Israel Infusion</div>
                    <div className="text-[10px] text-emerald-400">Outbound: 14 Vials Keytruda</div>
                  </div>

                  {/* Destination Facility Pin */}
                  <div className="absolute right-[10%] top-[15%] p-3 rounded-xl bg-slate-900/95 border border-cyan-500/50 text-xs font-mono text-slate-200 shadow-xl">
                    <div className="text-[9px] text-cyan-400 font-bold uppercase flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      DESTINATION (STOCK-OUT CLINIC)
                    </div>
                    <div className="font-bold text-white mt-0.5">Mass General Cancer Hub</div>
                    <div className="text-[10px] text-cyan-300">Urgent Patient Scheduled 09:00 AM</div>
                  </div>

                  {/* Live Moving Cold-Chain Courier */}
                  <div className="absolute top-[42%] left-[52%] -translate-x-1/2 -translate-y-1/2 p-3 rounded-xl bg-emerald-950 border-2 border-emerald-400 text-xs font-mono shadow-2xl shadow-emerald-500/30 flex items-center gap-2 text-white">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-emerald-300">Courier #04 (Validated)</div>
                      <div className="text-[10px] text-slate-300">Temp: 3.4°C • GPS Lock</div>
                    </div>
                  </div>

                  {/* Route Status bar */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                    <span>DSCSA Electronic T3 Document Generated</span>
                    <span>State Pharmacy Board Inter-facility Pass: VALID</span>
                  </div>
                </div>

                {/* Compliance & Chain of Custody Detail (5 Columns) */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-slate-500">REGULATORY STANDARD</span>
                      <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">FDA DSCSA 2024</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Transaction Information (TI) & Statement (TS)</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Full electronic chain-of-custody documentation is passed automatically to the receiving pharmacy's ERP prior to physical delivery.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-slate-500">FINANCIAL CLEARING</span>
                      <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">8–15% Salvage Fee</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Instant Inter-System Settlement</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Donor hospital recoups capital on inventory that would have been a 100% loss; recipient health system prevents treatment delay.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-800 dark:text-cyan-200">
                    <div className="text-xs font-bold uppercase flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                      Zero Hazardous Disposal Manifest
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                      Eliminates expensive waste incineration manifests, cutting Scope 3 carbon emissions and hazardous biopharma landfill impact.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Bottom Navigation between stages */}
          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
            <button
              onClick={() => {
                setActiveStage(prev => (prev === 1 ? 3 : prev - 1));
                setIsAutoPlaying(false);
              }}
              className="text-xs font-mono font-medium text-slate-500 hover:text-cyan-500 transition-colors"
            >
              ← Previous Stage
            </button>
            <div className="flex gap-2">
              {[1, 2, 3].map((step) => (
                <button
                  key={step}
                  onClick={() => {
                    setActiveStage(step);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeStage === step 
                      ? 'w-8 bg-cyan-500' 
                      : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                  }`}
                  aria-label={`Jump to stage ${step}`}
                />
              ))}
            </div>
            <button
              onClick={() => {
                setActiveStage(prev => (prev === 3 ? 1 : prev + 1));
                setIsAutoPlaying(false);
              }}
              className="text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 flex items-center gap-1"
            >
              <span>Next Stage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
