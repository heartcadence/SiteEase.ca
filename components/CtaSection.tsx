import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section className="bg-blue-600 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
          Ready to simplify your digital presence?
        </h2>
        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
          Join hundreds of Canadian SMBs who have switched to SiteEase. 
          Get a professional, managed website without the headache.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" className="h-14 px-8 text-lg text-blue-700 hover:text-blue-800 font-bold border-none shadow-xl">
            Get Your Free Consultation
          </Button>
          <Button variant="outline" className="h-14 px-8 text-lg text-white border-white hover:bg-blue-700 active:bg-blue-800">
            View Pricing <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};