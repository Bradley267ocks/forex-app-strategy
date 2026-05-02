/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Instagram, Twitter, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-green rounded flex items-center justify-center font-display font-bold text-black text-lg">
                F
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Forex App Strategy
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Professional fintech tools and strategic education for serious traders. Built for precision and market structural clarity.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/qazaizecson-merivahlomyz" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-black transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-400">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="text-gray-500 hover:text-brand-green transition-colors">About Us</a></li>
              <li><a href="#why-us" className="text-gray-500 hover:text-brand-green transition-colors">Why Choose Us</a></li>
              <li><a href="#pricing" className="text-gray-500 hover:text-brand-green transition-colors">Pricing Packages</a></li>
              <li><a href="#how-it-works" className="text-gray-500 hover:text-brand-green transition-colors">How It Works</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-brand-green transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-400">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-brand-green transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-green transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-green transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
              <div className="flex items-center gap-3 text-brand-green mb-3">
                <Shield size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">Risk Disclosure</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed italic">
                Trading forex involves significant risk and can result in the loss of your invested capital. Our tools and education are designed for assisting decision-making and do not guarantee profits.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Forex App Strategy. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">
            <span>Clarens</span>
            <div className="w-1 h-1 bg-gray-800 rounded-full" />
            <span>South Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
