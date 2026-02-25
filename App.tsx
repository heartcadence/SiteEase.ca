
import React, { useEffect, useState, Suspense } from 'react';

// Lazy load ALL components (including Hero) to keep the initial bundle lean
const Hero = React.lazy(() => import('./components/Hero').then(m => ({ default: m.Hero })));
const Header = React.lazy(() => import('./components/Header').then(m => ({ default: m.Header })));
const Services = React.lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const Process = React.lazy(() => import('./components/Process').then(m => ({ default: m.Process })));
const Pricing = React.lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })));
const Footer = React.lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const CookieConsent = React.lazy(() => import('./components/CookieConsent').then(m => ({ default: m.CookieConsent })));
const LandingPageBrantford = React.lazy(() => import('./components/LandingPageBrantford').then(m => ({ default: m.LandingPageBrantford })));
const ThankYou = React.lazy(() => import('./components/ThankYou').then(m => ({ default: m.ThankYou })));

// Reusable Suspense fallback — defined once, used everywhere
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#020617]">
    <div className="text-white">Loading...</div>
  </div>
);

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

  // Ensure page starts at top on initial load (override hash/default scroll)
  useEffect(() => {
    // Run after browser's default handling so we reliably land at the top
    requestAnimationFrame(() => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      } catch (e) {
        // fallback for older browsers
        window.scrollTo(0, 0);
      }
    });
  }, []);

  if (currentPage === 'offer') {
    return (
      <Suspense fallback={<PageLoader />}>
        <LandingPageBrantford />
      </Suspense>
    );
  }

  if (currentPage === 'thank-you') {
    return (
      <Suspense fallback={<PageLoader />}>
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

      <Suspense fallback={<div className="h-16 bg-[#020617]" />}>
        <Header />
      </Suspense>

      <main id="main-content" className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<PageLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<PageLoader />}>
          <Process />
        </Suspense>
        <Suspense fallback={<PageLoader />}>
          <Pricing />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-16 bg-slate-900" />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <CookieConsent />
      </Suspense>
    </div>
  );
}

export default App;
