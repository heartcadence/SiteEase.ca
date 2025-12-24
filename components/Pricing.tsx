
import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = {
    launch: {
      monthly: 59,
      yearly: 49,
    },
    growth: {
      monthly: 119,
      yearly: 99,
    }
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 id="pricing-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            One Simple Monthly Price. No Hidden Fees.
          </h2>
          <p className="text-lg text-slate-600">
            Get a professional website that works as hard as you do. Choose the plan that fits your business goals—cancel or change anytime.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-xl inline-flex relative shadow-sm border border-slate-200">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                !isYearly 
                  ? 'bg-slate-100 text-slate-900' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
              aria-pressed={!isYearly}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                isYearly 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
              aria-pressed={isYearly}
            >
              Yearly
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Launch Plan */}
          <div className="relative rounded-2xl p-8 border border-slate-200 shadow-sm bg-white flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">Launch</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight text-slate-900">
                  ${isYearly ? plans.launch.yearly : plans.launch.monthly}
                </span>
                <span className="ml-1 text-xl font-semibold text-slate-500">/mo</span>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                {isYearly ? 'Billed yearly ($588/yr)' : 'Billed monthly'}
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {[
                'Secure Cloud Hosting',
                'Domain Management',
                'Daily Backups',
                '30 Mins of Content Updates/mo',
                'Standard Email Support'
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mr-3" />
                  <span className="text-sm text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="secondary" fullWidth className="mt-auto">
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
                  ${isYearly ? plans.growth.yearly : plans.growth.monthly}
                </span>
                <span className="ml-1 text-xl font-semibold text-slate-500">/mo</span>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                {isYearly ? 'Billed yearly ($1,188/yr)' : 'Billed monthly'}
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {[
                'Everything in Launch',
                'Priority Hosting Tier',
                'Real-time Security Monitoring',
                'Unlimited Minor Content Updates',
                'Malware Removal Guarantee',
                'Monthly SEO & Performance Report',
                'Priority Email & Phone Support'
              ].map((feature) => (
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
              <Button variant="accent" fullWidth className="py-4 text-lg">
                Go Unlimited Growth
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
