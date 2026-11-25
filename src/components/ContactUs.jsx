import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    organization: '',
    email: '',
    facilityType: 'Health System / IDN',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact-us" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            Direct Communication & Clinical Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect With Our Institutional Solutions Team
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Whether you are a pharmacy director evaluating DSCSA compliance or a health system CFO calculating waste salvage, 
            reach out directly to schedule a confidential facility assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Placeholders (Strictly 1 Email & 1 Phone Number as requested) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09111e] p-8 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Official Contact Information
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                Our central coordination desk handles hospital onboarding, EHR integration reviews, and urgent cold-chain partner dispatch.
              </p>

              <div className="space-y-6">
                
                {/* Single Business Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400">Official Executive Email</div>
                    <a 
                      href="mailto:chiamaka@pharmloop.site" 
                      className="text-base font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-mono"
                    >
                      chiamaka@pharmloop.site
                    </a>
                    <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Verified Contact
                    </div>
                  </div>
                </div>

                {/* Single Phone Number */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400">Direct Phone Line</div>
                    <a 
                      href="tel:+2348080754349" 
                      className="text-base font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-mono"
                    >
                      +234 808 075 4349
                    </a>
                    <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active Coordination Line
                    </div>
                  </div>
                </div>

              </div>

              {/* Service Assurance */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <Clock className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Standard Response Time: Under 4 Business Hours</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Mutual NDA Executed Prior to EHR Data Audits</span>
                </div>
              </div>
            </div>

            {/* Regulatory Note */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#070d18] border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-bold text-slate-700 dark:text-slate-300">Note for Pharmacy Directors:</span> All consultations are strictly governed by state board of pharmacy inter-facility transfer standards and federal DSCSA guidance.
            </div>
          </div>

          {/* Right Column: Confidential Assessment & Schedule Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09111e] p-8 sm:p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Request a Health System Feasibility Assessment
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Receive an initial cluster density analysis for your regional facilities within 48 hours.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    Inquiry Received
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you. A PharmLoop clinical coordination officer has received your facility request and will respond within 4 hours to confirm your NDA and schedule the cluster assessment.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:underline pt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-500 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Sarah Jenkins, PharmD"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-500 mb-1">Clinical Title / Role</label>
                      <input
                        type="text"
                        required
                        placeholder="Director of Pharmacy / VP Supply Chain"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-500 mb-1">Health System / Hospital</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Memorial Cancer Institute"
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-500 mb-1">Institutional Work Email</label>
                      <input
                        type="email"
                        required
                        placeholder="s.jenkins@memorialhealth.org"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-500 mb-1">Facility Classification</label>
                    <select
                      value={formData.facilityType}
                      onChange={(e) => setFormData({...formData, facilityType: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option>Integrated Delivery Network (IDN) / Multi-Site System</option>
                      <option>Comprehensive Cancer Center / Oncology Infusion Network</option>
                      <option>Standalone Regional / Community Hospital</option>
                      <option>Specialty Pharmacy / Cold-Chain Logistics Operator</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-500 mb-1">Specific Medication Classes or Inquiries</label>
                    <textarea
                      rows={3}
                      placeholder="Please note your approximate monthly biologics spend or key challenges with expiration buffers..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-semibold text-xs tracking-wider uppercase shadow-xl shadow-cyan-600/25 transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Confidential Feasibility Assessment"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
