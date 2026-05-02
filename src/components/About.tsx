/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Shield, BookOpen, Cpu, HeadphonesIcon } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Target, title: 'Market Structure', text: 'Master the fundamental layers of market movement and price action patterns.' },
    { icon: Shield, title: 'Strategy Systems', text: 'Proven rule-based systems designed to filter out noise and capture high-probability setups.' },
    { icon: BookOpen, title: 'Education', text: 'Comprehensive learning resources from basics to advanced institutional trading concepts.' },
    { icon: Cpu, title: 'Automation Options', text: 'Smart tools and automated signal support to assist your decision-making process.' },
    { icon: HeadphonesIcon, title: 'Professional Support', text: 'Direct access to experienced guidance to help you navigate the markets effectively.' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-brand-green tracking-[0.2em] uppercase mb-4">The Evolution of Trading</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Empowering Traders with <br />
              <span className="text-gradient">Intelligent Systems</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At <strong className="text-white">Forex App Strategy</strong>, we strip away the complexity of the markets. We don't believe in gambling or "get-rich-quick" schemes. We believe in tools, systems, and education.
            </p>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Our mission is to provide serious traders with a professional-grade setup that combines human insight with technical precision. Whether you are starting out or scaling your portfolio, our strategies are built on sound market principles.
            </p>
            
            <button className="premium-btn-secondary">Learn More About Our Methodology</button>
          </motion.div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 flex gap-6 hover:bg-white/10 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
