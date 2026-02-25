import React, { useState, useEffect, useCallback } from 'react';
import { Button } from './Button';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate checking local storage for consent
    const hasConsented = localStorage.getItem('siteease_consent');
    if (!hasConsented) {
      // Small delay for better UX on load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem('siteease_consent', 'true');
    setIsVisible(false);
  }, []);

  const handleDecline = useCallback(() => {
    localStorage.setItem('siteease_consent', 'false');
    setIsVisible(false);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie Consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom-full duration-500"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-slate-900 mb-1">We value your privacy</h3>
          <p className="text-sm text-slate-600 max-w-3xl">
            SiteEase uses cookies to enhance your browsing experience and analyze site traffic in compliance with PIPEDA and GDPR.
            By clicking "Accept", you consent to our use of cookies.
            <a href="#privacy" className="underline text-blue-600 hover:text-blue-800 ml-1">Privacy Policy</a>.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button variant="secondary" onClick={handleDecline} className="flex-1 md:flex-none text-sm py-2">
            Decline
          </Button>
          <Button onClick={handleAccept} className="flex-1 md:flex-none text-sm py-2">
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
};