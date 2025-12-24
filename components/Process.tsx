
import React from 'react';
import { ClipboardList, PenTool, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Choose Your Tier',
    description: 'Select Launch for a strong start or Growth for unlimited updates and priority support. Transparent pricing, always.',
    icon: ClipboardList
  },
  {
    number: '02',
    title: 'We Build & Scale',
    description: 'Our team builds your fresh site structure or migrates existing assets, fully optimizing for speed and modern SEO.',
    icon: PenTool
  },
  {
    number: '03',
    title: 'Launch & Grow',
    description: 'Your site goes live. We handle the security, maintenance, and updates while you focus on scaling your business.',
    icon: Rocket
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="process-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            From Static to Dynamic in 3 Steps
          </h2>
          <p className="text-lg text-slate-600">
            We've removed the friction from high-end web management. Getting a professional, Growth-ready website is now as simple as a subscription.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10" aria-hidden="true" />

            {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center group">
                    <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center mb-6 shadow-sm relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:border-blue-100">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md">
                             <step.icon className="w-8 h-8" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white">
                            {step.number}
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
