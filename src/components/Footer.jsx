import React from 'react';
import { ShieldCheck, HeartPulse, Activity } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white dark:bg-[#05080f] border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info & Mission (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo />
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              PharmLoop is an enterprise coordination network that continuously forecasts biopharma shelf-life decay, 
              verifies chain-of-custody through computer vision, and automates regulatory-compliant cold-chain redistribution.
            </p>
            
            {/* Live System Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-[11px] text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>GNN Cluster Status: <strong>100% Operational</strong></span>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 font-bold">
              Platform Architecture
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#overview" onClick={(e) => handleLinkClick(e, '#overview')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Live Telemetry Ticker
                </a>
              </li>
              <li>
                <a href="#problem" onClick={(e) => handleLinkClick(e, '#problem')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  The Expiration Challenge
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => handleLinkClick(e, '#how-it-works')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  GNN Predictive Graph
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => handleLinkClick(e, '#how-it-works')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Edge CV & OCR Inspection
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => handleLinkClick(e, '#how-it-works')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Micro-Route Reverse Logistics
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions & ROI */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 font-bold">
              Health Economics
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#roi-calculator" onClick={(e) => handleLinkClick(e, '#roi-calculator')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Hospital ROI Calculator
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleLinkClick(e, '#pricing')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Community Health Tier
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleLinkClick(e, '#pricing')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Regional Network Tier
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleLinkClick(e, '#pricing')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Enterprise Consortium
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleLinkClick(e, '#pricing')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Take-Rate Structure
                </a>
              </li>
            </ul>
          </div>

          {/* Corporate & Legal */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 font-bold">
              Organization
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#about-us" onClick={(e) => handleLinkClick(e, '#about-us')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Mission & Values
                </a>
              </li>
              <li>
                <a href="#about-us" onClick={(e) => handleLinkClick(e, '#about-us')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Founder & CEO
                </a>
              </li>
              <li>
                <a href="#contact-us" onClick={(e) => handleLinkClick(e, '#contact-us')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Contact Solutions Team
                </a>
              </li>
              <li>
                <a href="#contact-us" onClick={(e) => handleLinkClick(e, '#contact-us')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Schedule DSCSA Audit
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Mandate Compliance Note */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mb-8 flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
          <div>
            <strong>Regulatory Standard & DSCSA Interoperability:</strong> All pharmaceutical inventory tracking, serialized product verification, and inter-facility transfers facilitated through PharmLoop operate strictly within compliance of the FDA Drug Supply Chain Security Act (DSCSA Section 582), 21 CFR Part 205, and individual State Board of Pharmacy administrative transfer codes. PharmLoop does not alter or re-package manufacturer-sealed primary packaging.
          </div>
        </div>

        {/* Bottom Bar: Copyright & Security Badges */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} PharmLoop Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer">Security & HIPAA BAA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
