
import React, { useEffect, useState, lazy, Suspense } from 'react';

// Statically Import: Protect LCP and initial paint
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CookieConsent } from './components/CookieConsent';

// Lazy Load: Below-the-fold sections for main thread performance
const Services = lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const Process = lazy(() => import('./components/Process').then(module => ({ default: module.Process })));
const Pricing = lazy(() => import('./components/Pricing').then(module => ({ default: module.Pricing })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

// Route Splitting: Page-level lazy loading
const LandingPageBrantford = lazy(() => import('./components/LandingPageBrantford').then(module => ({ default: module.LandingPageBrantford })));
const ThankYou = lazy(() => import('./components/ThankYou').then(module => ({ default: module.ThankYou })));

type PageRoute = 'home' | 'offer' | 'thank-you';

function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  useEffect(() => {
    const checkRoute = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      
      if (hash === '#offer' || hash === '#/offer' || path === '/offer' || path.endsWith('/offer')) {
        setCurrentPage('offer');
      } else if (hash === '#thank-you' || hash === '#/thank-you' || path === '/thank-you' || path.endsWith('/thank-you')) {
        setCurrentPage('thank-you');
      } else {
        setCurrentPage('home');
      }
    };

    checkRoute();
    window.addEventListener('hashchange', checkRoute);
    window.addEventListener('popstate', checkRoute);

    return () => {
      window.removeEventListener('hashchange', checkRoute);
      window.removeEventListener('popstate', checkRoute);
    };
  }, []);

  // Handle Route-level rendering with Suspense
  if (currentPage === 'offer') {
    return (
      <Suspense fallback={null}>
        <LandingPageBrantford />
      </Suspense>
    );
  }

  if (currentPage === 'thank-you') {
    return (
      <Suspense fallback={null}>
        <ThankYou />
      </Suspense>
    );
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
        
        {/* Suspense boundary for below-the-fold components reduces main thread blocking during hydration */}
        <Suspense fallback={null}>
          <Services />
          <Process />
          <Pricing />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      
      <CookieConsent />
    </div>
  );
}

export default App;
