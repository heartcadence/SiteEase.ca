
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { LandingPageBrantford } from './components/LandingPageBrantford';
import { ThankYou } from './components/ThankYou';

type PageRoute = 'home' | 'offer' | 'thank-you';

function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  useEffect(() => {
    const checkRoute = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      
      // Determine current page based on hash or path
      if (hash === '#offer' || hash === '#/offer' || path === '/offer' || path.endsWith('/offer')) {
        setCurrentPage('offer');
      } else if (hash === '#thank-you' || hash === '#/thank-you' || path === '/thank-you' || path.endsWith('/thank-you')) {
        setCurrentPage('thank-you');
      } else {
        setCurrentPage('home');
      }
    };

    // Check on initial load
    checkRoute();

    // Listen for hash changes (internal navigation)
    window.addEventListener('hashchange', checkRoute);
    
    // Listen for history changes (if using pushState in the future)
    window.addEventListener('popstate', checkRoute);

    return () => {
      window.removeEventListener('hashchange', checkRoute);
      window.removeEventListener('popstate', checkRoute);
    };
  }, []);

  if (currentPage === 'offer') {
    return <LandingPageBrantford />;
  }

  if (currentPage === 'thank-you') {
    return <ThankYou />;
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
