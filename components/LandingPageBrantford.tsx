
import React, { useState, useCallback } from 'react';
import { Check, Star, MapPin, Lock, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';

const CURRENT_YEAR = new Date().getFullYear();

export const LandingPageBrantford: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting'>('idle');

  const handleFormSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Construct Payload for Google Ads Webhook / Apps Script
    // Mapping inputs to user_column_data array as requested
    const payload = {
      google_key: "SiteEase2026",
      user_column_data: [
        { column_id: "FULL_NAME", string_value: formData.get('name') },
        { column_id: "PHONE_NUMBER", string_value: formData.get('phone') },
        { column_id: "EMAIL", string_value: formData.get('email') },
        { column_id: "COMPANY_NAME", string_value: formData.get('business') }
      ]
    };

    try {
      // Use text/plain to avoid CORS preflight issues with Google Apps Script
      await fetch("https://script.google.com/macros/s/AKfycbwEL4rWHanpxrrvsSvQ07pz2e-cbWqLYhyfPWQxdZWG-4CI_rZzMNso1Q0P98y7AoyQmA/exec", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload)
      });

      // GA4 Tracking: Trigger 'generate_lead' event immediately before redirect
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          'event_category': 'form',
          'event_label': 'brantford_offer_submission'
        });
      }

      // Immediate Redirect to Thank You Page
      // Using href ensures we navigate away from the current path effectively
      window.location.href = '/thank-you';

    } catch (error) {
      console.error("Submission failed", error);
      // Fallback: Ensure redirect happens even if fetch fails/timeouts
      window.location.href = '/thank-you';
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-100 selection:bg-blue-500/30">

      {/* 1. COMPACT HEADER - Distraction Free */}
      <nav className="h-16 flex items-center justify-center bg-[#020617]/80 backdrop-blur-md sticky top-0 z-50">
        <a href="/" className="hover:opacity-80 transition-opacity" aria-label="Back to Homepage">
          <Logo iconSize="w-5 h-5" textSize="text-xl" />
        </a>
      </nav>

      {/* 2. SPLIT-SCREEN HERO (The Conversion Engine) */}
      <section className="relative overflow-hidden pt-6 pb-12 lg:pt-0 lg:pb-0 lg:min-h-[calc(100vh-64px)] flex items-center">

        {/* Background Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* LEFT COLUMN: The Hook (Magnetic Headline) */}
            <div className="text-center lg:text-left order-1 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/20 mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Brantford Business Exclusive
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">$0 Down</span> Website Solution.
              </h1>

              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Stop risking thousands on agencies. We build, host, and manage your professional website for one flat monthly fee.
              </p>

              {/* Trust Bullets - Desktop Only (Hidden on mobile to pull form up) */}
              <div className="hidden lg:flex flex-col gap-4 text-sm text-slate-300 font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  Cancel anytime contract
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  Unlimited design updates included
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  100% Ontario-based support
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: The Filter (High-Intent Form) */}
            <div className="order-2 lg:order-2 w-full max-w-md mx-auto lg:max-w-none">
              <div className="bg-white rounded-2xl shadow-2xl shadow-black/50 p-6 sm:p-8 border border-white/10 relative overflow-hidden">
                {/* Visual Highlight */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>

                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Get Your <span className="text-blue-600">$0 Upfront</span> Quote</h2>
                  <p className="text-slate-500 text-sm">See if your business qualifies for our Brantford launch program.</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Field 1: Name */}
                  <div>
                    <label htmlFor="name" className="sr-only">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      required
                      type="text"
                      className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium"
                      placeholder="Full Name"
                    />
                  </div>

                  {/* Field 2: Phone (Moved Up) */}
                  <div>
                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      type="tel"
                      className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium"
                      placeholder="Phone Number (Best for text)"
                    />
                  </div>

                  {/* Field 3: Email (New) */}
                  <div>
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium"
                      placeholder="Email Address"
                    />
                  </div>

                  {/* Field 4: Business Name (Moved Down) */}
                  <div>
                    <label htmlFor="business" className="sr-only">Business Name</label>
                    <input
                      id="business"
                      name="business"
                      required
                      type="text"
                      className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium"
                      placeholder="Business Name"
                    />
                  </div>

                  <Button
                    fullWidth
                    className="h-14 text-lg font-black bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/30 transform transition-all active:scale-[0.98]"
                  >
                    {formStatus === 'submitting' ? 'Checking Eligibility...' : 'Check My Eligibility Now'}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 mt-4">
                    <Lock className="w-3 h-3" />
                    <span>Secure SSL. No spam guarantee.</span>
                  </div>
                </form>
              </div>

              {/* Mobile Only Trust Signals (Shown below form on mobile) */}
              <div className="lg:hidden mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Cancel anytime
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> $0 Setup Fee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF BAR (Reinforcement) */}
      <section className="py-8 border-y border-white/5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Trusted by Ontario Businesses in:</p>
          <div className="flex flex-wrap justify-center items-center gap-4 opacity-60">
            <span className="text-xl md:text-2xl font-black text-slate-300">Brantford</span>
            <span className="text-slate-600 text-xl md:text-2xl font-light mx-2">|</span>
            <span className="text-xl md:text-2xl font-black text-slate-300">Hamilton</span>
            <span className="text-slate-600 text-xl md:text-2xl font-light mx-2">|</span>
            <span className="text-xl md:text-2xl font-black text-slate-300">Cambridge</span>
            <span className="text-slate-600 text-xl md:text-2xl font-light mx-2">|</span>
            <span className="text-xl md:text-2xl font-black text-slate-300">Paris</span>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON (Logic over Emotion) */}
      <section className="py-20 px-4 bg-white text-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why pay $5,000 for a website?</h2>
            <p className="text-lg text-slate-600">The old agency model is broken. <span className="font-bold text-blue-600">We fixed it.</span></p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-400 mb-6 line-through decoration-red-500 decoration-2">Typical Agency</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-500">
                  <span className="text-red-500 font-bold">×</span> High upfront cost ($3k+)
                </li>
                <li className="flex items-start gap-3 text-slate-500">
                  <span className="text-red-500 font-bold">×</span> Hourly fees for edits
                </li>
                <li className="flex items-start gap-3 text-slate-500">
                  <span className="text-red-500 font-bold">×</span> Takes months to launch
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-blue-50 border-2 border-blue-100 relative shadow-xl">
              <div className="absolute -top-4 right-8 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                The SiteEase Way
              </div>
              <h3 className="text-xl font-black text-blue-900 mb-6">Subscription Model</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-800 font-bold">
                  <Check className="w-5 h-5 text-blue-600 shrink-0" />
                  $0 Upfront Cost
                </li>
                <li className="flex items-start gap-3 text-slate-800 font-medium">
                  <Check className="w-5 h-5 text-blue-600 shrink-0" />
                  Unlimited Updates
                </li>
                <li className="flex items-start gap-3 text-slate-800 font-medium">
                  <Check className="w-5 h-5 text-blue-600 shrink-0" />
                  Launch in 7 Days
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA (Matched to Screenshot) */}
      <section className="py-20 px-4 bg-slate-50 text-center border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Invest in your business, not a website.</h2>
          <p className="text-lg text-slate-600 mb-10">
            Join the smart business owners in Brantford who switched to SiteEase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className="h-14 px-8 text-lg font-bold bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-500/20"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Get My Free Quote
            </Button>

            <a
              href="tel:5195771449"
              className="group flex items-center justify-center h-14 px-8 rounded-lg border border-slate-200 text-slate-900 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              <Phone className="w-5 h-5 mr-3 text-slate-400 group-hover:text-slate-600" />
              (519) 577-1449
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER - Minimal */}
      <footer className="py-8 bg-white border-t border-slate-200 text-center text-sm text-slate-400">
        <p>&copy; {CURRENT_YEAR} SiteEase.ca. <span className="hidden sm:inline">Made in Ontario.</span></p>
      </footer>
    </div>
  );
};
