import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import InstallCTA from './components/InstallCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white antialiased">
      <Hero />
      <Features />
      <DashboardPreview />
      <InstallCTA />
      <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Emerald — Crafted for stellar soundscapes.
      </footer>
    </div>
  );
}

export default App;
