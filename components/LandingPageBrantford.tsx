
import React, { useState } from 'react';
import { Check, Star, MapPin, ShieldCheck, ArrowRight, X, Phone, Globe, Lock } from 'lucide-react';
import { Button } from './Button';

export const LandingPageBrantford: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      if ((window as any).trackSubscriptionLead) {
        (window as any).trackSubscriptionLead();
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      {/* 1. HEADER - NO NAVIGATION MENU (Prevents Leaks) */}
      <nav className="flex justify-center py-6 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-white"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
          </div>
          <span className="font-black text-xl tracking-tighter text-slate-900">SiteEase<span className="text-blue-600">.ca</span></span>
        </div>
      </nav>

      {/* 2. HERO SECTION - Direct Response */}
      <section className="bg-[#020617] text-white pt-12 pb-20 px-4 overflow-hidden relative">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Copy Side */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/30">
              <MapPin className="w-3 h-3" /> Proudly Serving Brantford, ON
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
              The <span className="text-blue-500">$0 Down</span> Website For Brantford Businesses.
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Stop risking thousands on web developers who ghost you. We build, host, and manage your professional website for a flat monthly fee. 
            </p>

            <div className="hidden lg:flex flex-col gap-3 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" /> Cancel anytime contract
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" /> Unlimited design updates
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" /> 100% Canadian support
              </div>
            </div>
          </div>

          {/* Form Side - High Contrast Box */}
          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8 border-4 border-blue-600/20">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Check Availability</h3>
              <p className="text-slate-600 text-sm">Get a free demo of what your site could look like.</p>
            </div>

            {formStatus === 'success' ? (
              <div className="bg-green-50 rounded-xl p-8 text-center border border-green-200">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Request Received!</h4>
                <p className="text-slate-600">A Brantford-based specialist will call you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John Smith" />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Business Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Smith & Sons Plumbing" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="(519) 555-0123" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Current Website <span className="font-normal text-slate-500">(Optional)</span></label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="www.example.com" />
                </div>

                <Button fullWidth className="h-14 text-lg bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20">
                  {formStatus === 'submitting' ? 'Processing...' : 'Get My Free Quote'}
                </Button>

                <p className="text-xs text-center text-slate-500 mt-4">
                  <Lock className="w-3 h-3 inline mr-1" /> No credit card required. No spam guarantee.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. PROOF & TRUST */}
      <section className="py-10 border-b border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted by Local Ontario Businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Pseudo Logos for Layout */}
            <div className="font-black text-xl text-slate-800 flex items-center gap-2"><div className="w-6 h-6 bg-slate-800 rounded"></div> GRAND RIVER CONTRACTING</div>
            <div className="font-black text-xl text-slate-800 flex items-center gap-2"><div className="w-6 h-6 bg-slate-800 rounded"></div> BRANT AUTOMOTIVE</div>
            <div className="font-black text-xl text-slate-800 flex items-center gap-2"><div className="w-6 h-6 bg-slate-800 rounded"></div> ELITE LANDSCAPING</div>
          </div>
        </div>
      </section>

      {/* 4. PROBLEM/SOLUTION STORY */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why are websites so expensive?</h2>
            <p className="text-lg text-slate-600">Most agencies charge you for their time. <span className="font-bold text-blue-600">We charge for results.</span></p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Old Way */}
            <div className="p-8 rounded-2xl bg-red-50 border border-red-100">
              <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                <X className="w-6 h-6 text-red-500" /> Typical Agency
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-red-800/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></div>
                  High upfront cost ($3,000 - $10,000)
                </li>
                <li className="flex items-start gap-3 text-red-800/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></div>
                  You pay hourly for every small edit
                </li>
                <li className="flex items-start gap-3 text-red-800/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></div>
                  Slow turnaround times (Months)
                </li>
                <li className="flex items-start gap-3 text-red-800/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></div>
                  Generic, recycled templates
                </li>
              </ul>
            </div>

            {/* The SiteEase Way */}
            <div className="p-8 rounded-2xl bg-white border-2 border-blue-600 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                The Smart Choice
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                SiteEase Model
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700 font-medium">
                  <Check className="w-5 h-5 text-blue-500 shrink-0" />
                  $0 Upfront Cost
                </li>
                <li className="flex items-start gap-3 text-slate-700 font-medium">
                  <Check className="w-5 h-5 text-blue-500 shrink-0" />
                  Unlimited Updates Included
                </li>
                <li className="flex items-start gap-3 text-slate-700 font-medium">
                  <Check className="w-5 h-5 text-blue-500 shrink-0" />
                  Launched in under 7 days
                </li>
                <li className="flex items-start gap-3 text-slate-700 font-medium">
                  <Check className="w-5 h-5 text-blue-500 shrink-0" />
                  Cancel Anytime Agreement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OFFER OVERVIEW (3 Steps) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">How We Build Your Business</h2>
            <p className="text-slate-400">We keep it simple. No tech jargon, just results.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 text-3xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-3">Discovery Call</h3>
              <p className="text-slate-400 leading-relaxed">
                We have a quick 15-minute chat to understand your Brantford business and your goals. No sales pressure.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700 text-3xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-3">We Build (You Relax)</h3>
              <p className="text-slate-400 leading-relaxed">
                Our team designs and writes your professional site. We handle the domain, hosting, and SEO setup.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700 text-3xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-3">Launch & Growth</h3>
              <p className="text-slate-400 leading-relaxed">
                We go live. As your business grows, just text us your updates and we handle them instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS (Problem -> Result) */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-slate-700 mb-6 italic">"I was quoted $6,500 by another local agency. SiteEase built a better site for $0 down and $99/mo. It's a no-brainer for any contractor."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">MK</div>
                <div>
                  <div className="font-bold text-slate-900">Mike K.</div>
                  <div className="text-sm text-slate-500">Owner, Brant Custom Decks</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-slate-700 mb-6 italic">"My old site was embarrassing. SiteEase handled everything. Now I actually get leads from Google, and I didn't have to break the bank."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">SJ</div>
                <div>
                  <div className="font-bold text-slate-900">Sarah J.</div>
                  <div className="text-sm text-slate-500">Director, Harmony Yoga</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA - Simple & Clean */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Invest in your business, not a website.</h2>
          <p className="text-lg text-slate-600 mb-8">
            Join the smart business owners in Brantford who switched to SiteEase.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-700">
              Get My Free Quote
            </Button>
            <a href="tel:519-555-0199">
              <Button variant="secondary" className="h-14 px-8 text-lg">
                <Phone className="w-5 h-5 mr-2" /> (519) 555-0199
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-50 border-t border-slate-200 text-center text-sm text-slate-500">
        <p className="mb-2">&copy; {new Date().getFullYear()} SiteEase.ca. Made with <span className="text-red-500">♥</span> in Ontario.</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-slate-900">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};
