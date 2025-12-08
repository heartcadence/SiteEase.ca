import React from 'react';
import { Button } from './Button';
import { CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28" aria-label="Introduction">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-6 border border-green-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              Now accepting new clients
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Focus on Your Business, <br/>
              <span className="text-blue-600">We'll Handle Your Website.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              The premier <strong className="text-slate-900 font-semibold">Hassle-Free Website as a Service</strong> for Canadian SMBs. We design, host, and maintain your online presence so you don't have to.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button className="h-12 px-8 text-lg">
                View Our Plans
              </Button>
              <a href="#process" tabIndex={-1}>
                <Button variant="secondary" className="h-12 px-8 text-lg w-full sm:w-auto">
                  How it Works
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Visual Content - Semantic Image */}
          <div className="relative lg:h-[600px] w-full flex items-center justify-center">
            {/* Abstract Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-teal-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              alt="A business owner happily using a tablet while SiteEase manages their technical website needs in the background" 
              className="relative rounded-2xl shadow-2xl border-4 border-white object-cover w-full max-w-md lg:max-w-full h-auto z-10 aspect-square"
              width="600"
              height="600"
              loading="eager"
              // @ts-ignore - fetchPriority is supported in React 18+ / browsers but types may vary
              fetchPriority="high"
            />
          </div>

        </div>
      </div>
    </section>
  );
};