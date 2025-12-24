
import React from 'react';
import { Cloud, Globe, ShieldCheck, RefreshCw, Zap } from 'lucide-react';
import { ServiceItem } from '../types';

const features: ServiceItem[] = [
  {
    id: 'hosting',
    title: 'Managed Cloud Hosting',
    description: 'Lightning-fast, secure hosting on Canadian edge servers. Optimized for peak performance and 99.9% uptime reliability without you lifting a finger.',
    icon: Cloud
  },
  {
    id: 'domain',
    title: 'Domain Management',
    description: 'We handle your DNS, renewals, and professional configurations. Your brand identity is fully managed while you maintain 100% ownership.',
    icon: Globe
  },
  {
    id: 'security',
    title: 'Security & Maintenance',
    description: 'Malware removal guarantee, professional plugin management, and daily automated backups. We keep your Growth site secure 24/7.',
    icon: ShieldCheck,
    highlight: true
  },
  {
    id: 'updates',
    title: 'Flexible Updates',
    description: '30 mins of monthly updates for Launch plans or Unlimited Minor Content Updates for Growth plans. We grow as you grow.',
    icon: RefreshCw,
    highlight: true
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="services-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Scalable Web Solutions
          </h2>
          <p className="text-lg text-slate-600">
            Stop worrying about tech debt and security vulnerabilities. SiteEase provides the infrastructure for your digital Growth with simple, predictable tiers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <article 
              key={feature.id}
              className={`group relative bg-white rounded-xl p-8 shadow-sm border transition-all duration-300 flex flex-col items-start ${
                feature.highlight 
                  ? 'border-blue-200 ring-1 ring-blue-100 shadow-md hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2' 
                  : 'border-slate-100 hover:shadow-xl hover:border-slate-200 hover:-translate-y-1'
              }`}
            >
              {feature.highlight && (
                <div className="absolute -top-3 left-8 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Growth Tier Included
                </div>
              )}
              
              <div className={`p-4 rounded-xl mb-6 transition-colors duration-300 ${
                feature.highlight 
                  ? 'bg-blue-600 text-white group-hover:bg-blue-700' 
                  : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
              }`}>
                <feature.icon className="w-8 h-8" aria-hidden="true" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
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
