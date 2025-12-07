import React, { useState } from 'react';
import { Button } from './Button';
import { CheckCircle, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Convert FormData to a plain JavaScript object
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      // GOOGLE APPS SCRIPT INTEGRATION:
      // Configured with the live Web App URL provided.
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxdmPMg8DwlU85AShuMMPtxHflLem7gHJm0iJdvArnkkXEJsnii0l0FujM1XbVeON_S/exec';

      // Note: We use "text/plain" to avoid CORS preflight checks which Google Apps Script
      // does not handle well. The script must parse the body using JSON.parse(e.postData.contents).
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError("Unable to connect to the server. Please ensure the Google Script is deployed correctly.");
      }
    } catch (err) {
      // In 'no-cors' scenarios or opaque responses, we might not get specific error details,
      // but catching fetch errors helps handle network down states.
      console.error(err);
      setError("A network error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {!isSubmitted ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Jane Doe"
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
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="jane@company.com"
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
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="I need a new website for my..."
                  ></textarea>
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3 text-red-200 text-sm">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <Button type="submit" fullWidth className="h-12 text-base" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Request Consultation'
                  )}
                </Button>
              </form>
            ) : (
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 text-center animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 mb-8">
                  Thanks for reaching out. We've received your message and will get back to you shortly at the email provided.
                </p>
                <Button 
                  variant="secondary" 
                  onClick={() => setIsSubmitted(false)}
                  className="mx-auto"
                >
                  Send Another Message <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}
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