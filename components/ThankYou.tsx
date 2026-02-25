
import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';

const CURRENT_YEAR = new Date().getFullYear();

export const ThankYou: React.FC = () => {
  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 10;

    const triggerEvent = () => {
      // Check if gtag is available on the window object
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          currency: "CAD",
          value: 1.00
        });
        console.log('GA4 Success: generate_lead event fired');
      } else {
        // Retry logic
        if (attempts < maxAttempts) {
          attempts++;
          console.warn(`GA4 Retry: gtag not found, attempt ${attempts}/${maxAttempts}`);
          setTimeout(triggerEvent, 500);
        } else {
          console.error('GA4 Failed: gtag not found after maximum attempts');
        }
      }
    };

    triggerEvent();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-100 selection:bg-blue-500/30 flex flex-col">

      {/* 1. Header (Consistent with Landing Page) */}
      <nav className="h-16 flex items-center justify-center bg-[#020617]/80 backdrop-blur-md sticky top-0 z-50">
        <a href="/" className="hover:opacity-80 transition-opacity" aria-label="Back to Homepage">
          <Logo iconSize="w-5 h-5" textSize="text-xl" />
        </a>
      </nav>

      {/* 2. Main Content */}
      <main className="flex-grow flex items-center justify-center relative overflow-hidden p-4">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-[20%] right-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[20%] left-[20%] w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-lg w-full text-center animate-in fade-in zoom-in duration-700 slide-in-from-bottom-8">
          <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">
            Submission Received!
          </h1>

          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Thank you for your interest in the Brantford Launch Program. Our local team has received your details and will text you shortly to confirm eligibility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" tabIndex={-1}>
              <Button fullWidth className="h-14 px-8 text-lg font-bold bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-500/20">
                Return to Home
              </Button>
            </a>
          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-sm text-slate-500 bg-[#020617]">
        <p>&copy; {CURRENT_YEAR} SiteEase.ca. Made in Ontario.</p>
      </footer>
    </div>
  );
};
