/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Layers, Layout, Zap, Award, Gem, BarChart3 } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { 
      icon: Layers, 
      title: 'Proven Structured Systems', 
      desc: 'Our strategies aren\'t guesses; they\'re built on years of market structural analysis and institutional patterns.' 
    },
    { 
      icon: Layout, 
      title: 'Beginner Friendly Guidance', 
      desc: 'We break down high-level institutional concepts into simple, actionable steps for traders of all experience levels.' 
    },
    { 
      icon: Zap, 
      title: 'Advanced Automation Options', 
      desc: 'Reduce screen time and emotional fatigue with our automated signal and setup tools.' 
    },
    { 
      icon: Award, 
      title: 'Professional Support', 
      desc: 'You aren\'t just buying a tool; you\'re gaining a partner. Our team is here to ensure your technical setup is flawless.' 
    },
    { 
      icon: Gem, 
      title: 'Premium Membership Access', 
      desc: 'Join an exclusive community of focused traders who value quality analysis over quantity of trades.' 
    },
    { 
      icon: BarChart3, 
      title: 'Results Focused Strategy Tools', 
      desc: 'Everything we offer is designed with one goal: increasing the probability and clarity of your trading decisions.' 
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-green tracking-[0.2em] uppercase mb-4"
          >
            Why Forex App Strategy?
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Built for Precision. <br />
            Designed for <span className="text-gradient">Performance.</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover:border-brand-green/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-black transition-colors duration-500">
                <item.icon size={28} />
              </div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
