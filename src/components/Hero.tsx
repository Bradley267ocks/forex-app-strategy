/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background visual effects */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-green rounded-full animate-ping" />
              <span className="text-xs font-semibold text-brand-green tracking-wider uppercase">Live Market Precision</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight mb-6">
              Master Smarter <br />
              <span className="text-brand-green">Forex Trading</span> <br />
              with Precision
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
              Professional forex tools, setup systems, education, and automated trading support designed for serious traders.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#pricing" className="premium-btn-primary group">
                Get Started
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#pricing" className="premium-btn-secondary">
                View Pricing
              </a>
              <a href="#contact" className="premium-btn-secondary">
                Contact Us
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="flex flex-col">
                <span className="text-xl font-bold">10k+</span>
                <span className="text-xs uppercase tracking-widest">Active Members</span>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">94%</span>
                <span className="text-xs uppercase tracking-widest">Success Rate</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="glass-card p-4 overflow-hidden shadow-2xl skew-y-1">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="text-xs font-mono text-gray-500 tracking-tighter uppercase">Market Analysis Terminal v4.2</div>
              </div>
              
              <div className="h-[400px] w-full bg-black/40 rounded-lg flex flex-col items-center justify-center relative">
                {/* Simulated Chart visual */}
                <div className="absolute inset-0 flex items-end justify-around px-4 pb-8">
                  {[40, 70, 45, 90, 65, 80, 50, 95, 75, 40, 60, 85].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                      className={`w-4 rounded-t-sm ${i % 3 === 0 ? 'bg-brand-red' : 'bg-brand-green'}`}
                    />
                  ))}
                </div>
                
                <div className="z-10 flex flex-col items-center text-center p-8 bg-black/60 backdrop-blur-md rounded-2xl border border-white/5">
                  <TrendingUp className="text-brand-green mb-4" size={48} />
                  <div className="text-2xl font-display font-bold">Signal Accuracy</div>
                  <div className="text-4xl font-display font-extrabold text-brand-green tracking-tighter">98.4%</div>
                  <div className="text-xs text-gray-400 mt-2">REAL-TIME DATA FEED ACTIVATED</div>
                </div>
              </div>
            </div>

            {/* Floating floating indicators */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-card p-4 flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green">
                $
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Profit Target</div>
                <div className="text-sm font-bold text-white">+R12,450.00</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 glass-card p-4 flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-brand-red/20 rounded-full flex items-center justify-center text-brand-red">
                !
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Risk Factor</div>
                <div className="text-sm font-bold text-white">LOW (2%)</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
