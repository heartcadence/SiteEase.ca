import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="pricing-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600">
            Choose the level of service that fits your business. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {/* Essential Plan */}
          <div className="relative rounded-2xl p-8 border border-slate-200 shadow-sm bg-white flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900">Essential</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight text-slate-900">$49</span>
                <span className="ml-1 text-xl font-semibold text-slate-500">/mo</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {[
                'Secure Cloud Hosting',
                'Domain Management',
                'Daily Backups',
                'Quarterly Content Updates',
                'Standard Support'
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mr-3" />
                  <span className="text-sm text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="secondary" fullWidth>
              Start Essential
            </Button>
          </div>

          {/* Hassle-Free Pro Plan */}
          <div className="relative rounded-2xl p-8 border-2 border-blue-600 shadow-xl bg-white flex flex-col h-full scale-100 md:scale-105 z-10">
            <div className="absolute -top-4 right-8 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
              Most Popular
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900">Hassle-Free Pro</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight text-slate-900">$99</span>
                <span className="ml-1 text-xl font-semibold text-slate-500">/mo</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {[
                'Everything in Essential',
                'Priority Hosting Tier',
                'Real-time Security Monitoring',
                'Monthly Content Updates',
                'Priority Email & Phone Support'
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mr-3" />
                  <span className="text-sm text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="primary" fullWidth>
              Go Hassle-Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};