
import React, { useCallback } from 'react';
import { Check, Info } from 'lucide-react';
import { Button } from './Button';

// Hoisted to module scope — pure data, no need to recreate on each render
const PLANS = {
  launch: { price: 49, yearlyTotal: 588 },
  growth: { price: 99, yearlyTotal: 1188 },
};

const LAUNCH_FEATURES = [
  'Secure Cloud Hosting',
  'Domain Management',
  'Daily Backups',
  '30 Mins of Content Updates/mo',
  'Standard Email Support',
];

const GROWTH_FEATURES = [
  'Everything in Launch',
  'Priority Hosting Tier',
  'Real-time Security Monitoring',
  'Unlimited Minor Content Updates',
  'Malware Removal Guarantee',
  'Monthly SEO & Performance Report',
  'Priority Email & Phone Support',
];

export const Pricing: React.FC = () => {
  // useCallback ensures handlePlanSelect is not recreated on every render
  const handlePlanSelect = useCallback((_planName: string) => {
    // 1. Trigger Google Ads Conversion
    if (typeof window !== 'undefined' && (window as any).trackSubscriptionLead) {
      (window as any).trackSubscriptionLead();
    }

    // 2. Smooth Scroll to Contact Section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="pricing" className="py-24 bg-slate-50" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="pricing-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            One Simple Price. No Hidden Fees.
          </h2>
          <p className="text-lg text-slate-600">
            Get a professional website that works as hard as you do. Choose the plan that fits your business goals—cancel or change anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Launch Plan */}
          <div className="relative rounded-2xl p-8 border border-slate-200 shadow-sm bg-white flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">Launch</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight text-slate-900">
                  ${PLANS.launch.price}
                </span>
                <span className="ml-1 text-xl font-semibold text-slate-500">/mo</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {LAUNCH_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mr-3" />
                  <span className="text-sm text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="secondary"
              fullWidth
              className="mt-auto"
              onClick={() => handlePlanSelect('Launch')}
            >
              Start Launching
            </Button>
          </div>

          {/* Growth Plan */}
          <div className="relative rounded-2xl p-8 border-2 border-blue-600 shadow-xl bg-white flex flex-col h-full scale-100 md:scale-105 z-10">
            <div className="absolute -top-4 right-8 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
              Most Popular
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">Growth</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight text-slate-900">
                  ${PLANS.growth.price}
                </span>
                <span className="ml-1 text-xl font-semibold text-slate-500">/mo</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {GROWTH_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mr-3" />
                  <span className="text-sm text-slate-600 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 mb-3 uppercase tracking-widest font-bold">
                <Info className="w-3 h-3" /> Zero setup fees
              </div>
              <Button
                variant="accent"
                fullWidth
                className="py-4 text-lg"
                onClick={() => handlePlanSelect('Growth')}
              >
                Go Unlimited Growth
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
