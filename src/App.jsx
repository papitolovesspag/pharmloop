import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import RoiCalculator from './components/RoiCalculator';
import Pricing from './components/Pricing';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('pharmloop-theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // Default to deep clinical dark mode
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('pharmloop-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('pharmloop-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#060a10] dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-600 dark:selection:text-cyan-200">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <RoiCalculator />
        <Pricing />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
