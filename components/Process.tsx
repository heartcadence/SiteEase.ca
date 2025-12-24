
import React from 'react';
import { MessageSquare, Hammer, Sprout } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'We Chat',
    description: 'We talk about your goals and pick a simple plan that fits your budget. No hidden fees, just clear pricing from day one.',
    icon: MessageSquare
  },
  {
    number: '02',
    title: 'We Build',
    description: 'Our team builds your professional new site or moves your old one over. We make sure it looks great on phones and helps customers find you.',
    icon: Hammer
  },
  {
    number: '03',
    title: 'You Grow',
    description: 'Once your site is live, we handle every update and security check. You stay focused on your customers; we’ll keep your name out there.',
    icon: Sprout
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="process-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            From Outdated to Outstanding in 3 Steps
          </h2>
          <p className="text-lg text-slate-600">
            We’ve taken the complexity out of high-end web design. Getting a professional, customer-ready website is now as simple as a single monthly plan.
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
