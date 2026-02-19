import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#020617] overflow-hidden pt-20 pb-12" aria-label="Hero Section">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-black uppercase tracking-widest mb-8 border border-blue-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Built for Canadian Businesses
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
              Focus on your business, we'll handle your{' '}
              <span className="text-blue-500">growth.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              We manage the tech so the right customers find you.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a href="#contact">
                <Button variant="accent" className="h-16 px-10 text-xl font-black rounded-xl bg-blue-500 hover:bg-blue-600 shadow-2xl shadow-blue-500/20">
                  Start My Site
                </Button>
              </a>
              <a href="#process">
                <Button variant="outline" className="h-16 px-10 text-xl font-bold border-white/20 text-white hover:bg-white/5 rounded-xl">
                  How It Works
                </Button>
              </a>
            </div>

            {/* Social Proof Mini */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-slate-400 text-sm font-bold uppercase tracking-widest"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#020617] overflow-hidden">
                    <img
                      src={`/images/avatar${i}.webp`}
                      alt="Canadian business owner"
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
              </div>
              <span>Trusted by Canadian businesses</span>
            </motion.div>
          </div>

          {/* Claymorphic Asset (Desktop Only) */}
          <div className="hidden lg:flex justify-center items-center relative">
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10 w-[450px] h-[450px]"
            >
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_35px_35px_rgba(59,130,246,0.3)]">
                <rect x="40" y="60" width="120" height="100" rx="20" fill="#3b82f6" />
                <rect x="40" y="60" width="120" height="100" rx="20" fill="url(#clayGradient)" />
                <ellipse cx="70" cy="85" rx="15" ry="8" fill="white" fillOpacity="0.2" />
                <path d="M70 60V45C70 36.7157 76.7157 30 85 30H115C123.284 30 130 36.7157 130 45V60" stroke="#3b82f6" strokeWidth="12" strokeLinecap="round" />
                <rect x="60" y="100" width="15" height="25" rx="4" fill="#1d4ed8" />
                <rect x="125" y="100" width="15" height="25" rx="4" fill="#1d4ed8" />
                <motion.path 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  d="M90 70L90 40M110 70L110 40" stroke="white" strokeWidth="8" strokeLinecap="round" />
                <defs>
                  <linearGradient id="clayGradient" x1="40" y1="60" x2="160" y2="160" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0.1" />
                    <stop offset="1" stopColor="black" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-blue-500/10 rounded-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)]"></div>
              </motion.div>
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[80px] -z-10"></div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
};