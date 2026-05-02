/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '0717677476', href: 'tel:0717677476' },
    { icon: Mail, label: 'Email', value: 'qmahloma@gmail.com', href: 'mailto:qmahloma@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Clarens', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-brand-green tracking-[0.2em] uppercase mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Start Your <span className="text-gradient">Professional</span> Setup.</h3>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Have questions about our strategy tools or custom setups? Reach out to our team today. We usually respond within a few hours.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="flex items-center gap-6 group hover:translate-x-1 transition-transform"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-green border border-white/10 group-hover:bg-brand-green group-hover:text-black transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">{item.label}</div>
                    <div className="text-xl font-bold">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-12 p-6 glass-card border-brand-green/20 bg-brand-green/5">
                <div className="flex items-center gap-4 text-brand-green font-bold mb-2">
                    <MessageCircle size={20} />
                    <span>Instant WhatsApp Connect</span>
                </div>
                <p className="text-sm text-gray-400 mb-6">Connect with us on WhatsApp for faster response times and direct strategy queries.</p>
                <a 
                  href="https://wa.me/27717677476" 
                  className="premium-btn-primary block text-center"
                >
                  Open WhatsApp Chat
                </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-green outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-green outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-widest">Selected Package</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-green outline-none transition-colors appearance-none">
                  <option className="bg-brand-dark">Setup Only - R7,500</option>
                  <option className="bg-brand-dark" selected>Setup + Full Explanation - R15,000</option>
                  <option className="bg-brand-dark">Automated Call Trades - R25,000</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-widest">Message / Goals</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your trading journey..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-green outline-none transition-colors"
                ></textarea>
              </div>
              
              <button className="premium-btn-primary w-full flex items-center justify-center gap-2">
                Send Inquiry
                <Send size={18} />
              </button>
            </form>
            
            <p className="mt-8 text-center text-xs text-gray-500">
              By submitting this form, you agree to being contacted regarding our professional trading tools and education.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
