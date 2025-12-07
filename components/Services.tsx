import React from 'react';
import { Cloud, Globe, ShieldCheck, RefreshCw } from 'lucide-react';
import { ServiceItem } from '../types';

const features: ServiceItem[] = [
  {
    id: 'hosting',
    title: 'Managed Cloud Hosting',
    description: 'Lightning-fast, secure hosting on Canadian edge servers. Optimized for performance and 99.9% uptime reliability without you lifting a finger.',
    icon: Cloud
  },
  {
    id: 'domain',
    title: 'Domain Registration',
    description: 'We handle the DNS, renewals, and configurations. Your brand identity is safe with us, and you maintain full ownership rights.',
    icon: Globe
  },
  {
    id: 'backup',
    title: 'Daily Automated Backups',
    description: 'Sleep soundly knowing your data is safe. We perform redundant off-site backups daily, allowing for instant disaster recovery if needed.',
    icon: ShieldCheck
  },
  {
    id: 'updates',
    title: 'Monthly Content Updates',
    description: 'Need to change a price or add a testimonial? Just email us. Our "Hassle-Free" bundle includes up to 2 hours of content updates every month.',
    icon: RefreshCw
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="services-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            The "Hassle-Free" Bundle
          </h2>
          <p className="text-lg text-slate-600">
            Stop worrying about plugins, servers, and security patches. SiteEase bundles everything you need into one simple, predictable monthly subscription.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <article 
              key={feature.id}
              className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
            >
              <div className="p-3 bg-blue-50 rounded-lg mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};