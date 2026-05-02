/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function HowItWorks() {
  const steps = [
    { number: '01', title: 'Choose Membership', desc: 'Select the package that fits your trading goals and technical requirements.' },
    { number: '02', title: 'Get Setup', desc: 'Our team ensures the professional tools are perfectly installed and configured on your device.' },
    { number: '03', title: 'Learn Strategy', desc: 'Go through our educational resources to understand the logic behind the signals.' },
    { number: '04', title: 'Start Trading Smarter', desc: 'Benefit from clear entry points and a structured system designed for consistency.' },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-green tracking-[0.2em] uppercase mb-4">Your Path to Precision</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">How It Works</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-white/10 to-transparent -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-block relative mb-8">
                <div className="w-16 h-16 rounded-2xl bg-brand-green/20 border border-brand-green/30 flex items-center justify-center text-brand-green font-display font-extrabold text-2xl relative z-10 mx-auto">
                  {step.number}
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-brand-green/10 rounded-full blur-xl -z-0" />
              </div>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
