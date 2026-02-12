
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { LandingPageBrantford } from './components/LandingPageBrantford';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simple Hash Router Logic
  if (currentPath === '#offer' || currentPath === '#/offer') {
    return <LandingPageBrantford />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#020617]">
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-md font-medium"
      >
        Skip to main content
      </a>

      <Header />
      
      <main id="main-content" className="flex-grow">
        <Hero />
        <Services />
        <Process />
        <Pricing />
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
