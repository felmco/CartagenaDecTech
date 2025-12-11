import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Portfolio from './components/Portfolio';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Mock Analytics Hook
const useAnalytics = () => {
  useEffect(() => {
    // In a real app, this would initialize GA/GTM
    console.log("Analytics initialized: Cartagena Tech Park");
  }, []);
};

const App: React.FC = () => {
  useAnalytics();

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Portfolio />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;