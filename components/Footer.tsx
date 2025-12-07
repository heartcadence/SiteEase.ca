import React from 'react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content: Contact & Form */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16 items-start">
          
          {/* Left Column: value prop & Contact Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Ready to simplify your web presence?
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
              Get started with SiteEase today. Fill out the form, and our onboarding specialist will contact you within 24 hours to begin your hassle-free journey.
            </p>
            
            <div className="space-y-4 text-slate-300">
              <p>
                <span className="font-semibold text-white block mb-1">Email:</span> 
                <a href="mailto:support@siteease.ca" className="hover:text-blue-400 transition-colors">support@siteease.ca</a>
              </p>
              <p>
                <span className="font-semibold text-white block mb-1">Hours:</span> 
                Mon-Fri, 9am - 5pm EST
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-slate-900">
            <form className="space-y-6" action="mailto:info@heartcadence.com" method="post" encType="text/plain">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
                  placeholder="jane@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Tell us about your needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all resize-none"
                  placeholder="I need a new website for my..."
                  required
                ></textarea>
              </div>

              <Button type="submit" fullWidth className="h-12 text-base">
                Request Consultation
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} SiteEase.ca. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};