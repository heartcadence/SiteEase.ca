
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Anchor, FolderCheck, ShieldAlert, HardHat, Zap } from 'lucide-react';
import { ServiceItem } from '../types';

const features: ServiceItem[] = [
  {
    id: 'hosting',
    title: 'Rock-Solid Reliability',
    description: "We keep your site online 24/7 on fast, secure Canadian servers. Your customers will never see a 'Site Down' page, and you won't have to lift a finger.",
    icon: Anchor
  },
  {
    id: 'domain',
    title: 'We Handle the Paperwork',
    description: 'We take care of your web address, renewals, and setup. You keep 100% ownership of your brand name while we handle the technical registration.',
    icon: FolderCheck
  },
  {
    id: 'security',
    title: 'Total Digital Protection',
    description: "We act as your site's security guard with daily backups and safety checks to keep hackers out and your business safe 24/7.",
    icon: ShieldAlert,
    highlight: true
  },
  {
    id: 'updates',
    title: 'Updates on Your Schedule',
    description: 'Need to change a price or add a service? Just let us know. We handle the updates quickly so your site stays as current as your business.',
    icon: HardHat,
    highlight: true
  }
];

// Hoisted to module scope — these are pure constants, no need to recreate per render
const SENTENCE = "Stop stressing over broken links and website hackers. SiteEase keeps your site safe and running smoothly with simple monthly plans that never surprise you.";
const WORDS = SENTENCE.split(" ");

const containerVars: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const wordVars: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Services: React.FC = () => {

  return (
    <section id="services" className="py-24 bg-slate-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="services-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
            Scalable Web Solutions
          </h2>
          <motion.p
            variants={containerVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            {WORDS.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVars}
                className="inline-block mr-[0.25em] last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.article
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group relative bg-white rounded-xl p-8 shadow-sm border transition-all duration-300 flex flex-col items-start ${feature.highlight
                  ? 'border-blue-200 ring-1 ring-blue-100 shadow-md hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2'
                  : 'border-slate-100 hover:shadow-xl hover:border-slate-200 hover:-translate-y-1'
                }`}
            >
              {feature.highlight && (
                <div className="absolute -top-3 left-8 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Growth Tier Included
                </div>
              )}

              <div className={`p-4 rounded-xl mb-6 transition-colors duration-300 ${feature.highlight
                  ? 'bg-blue-600 text-white group-hover:bg-blue-700'
                  : 'bg-blue-50 text-blue-500 group-hover:bg-blue-600 group-hover:text-white'
                }`}>
                <feature.icon className="w-8 h-8" aria-hidden="true" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
