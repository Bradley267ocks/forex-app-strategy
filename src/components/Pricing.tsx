/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Check, Star, Zap, Crown } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Setup Only',
      price: '7,500',
      description: 'Professional tool installation and optimization on your device.',
      features: [
        'Complete Tool Installation',
        'Parameter Optimization',
        'Device Compatibility Check',
        'Installation Guide',
        'Basic Technical Support',
      ],
      cta: 'Get Setup',
      icon: Zap,
      popular: false,
      color: 'white',
    },
    {
      name: 'Setup + Full Explanation',
      price: '15,000',
      description: 'The complete education and setup package for the active trader.',
      features: [
        'Everything in Setup Only',
        '1-on-1 Strategy Walkthrough',
        'Market Structure Education',
        'Entry & Exit Rules Explained',
        '30 Days Mentorship Support',
        'Member Video Vault Access',
      ],
      cta: 'Start Learning',
      icon: Star,
      popular: true,
      color: 'brand-green',
    },
    {
      name: 'Automated Call Trades',
      price: '25,000',
      description: 'The ultimate VIP experience with automated execution support.',
      features: [
        'Everything in Setup + Explain',
        'Full Automation Setup',
        'Direct Signal Integration',
        'VIP Weekly Webinars',
        'Priority Technical Support',
        'Early Tech Update Access',
      ],
      cta: 'Join VIP',
      icon: Crown,
      popular: false,
      color: 'brand-yellow',
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-green tracking-[0.2em] uppercase mb-4">Membership Access</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Choose Your Level of <span className="text-gradient">Precision.</span></h3>
          <p className="text-gray-400">Invest in tools and education that scale with your trading journey. No hidden fees, just value.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass-card p-10 flex flex-col h-full transition-transform hover:scale-[1.02] ${
                plan.popular ? 'border-brand-green/50 shadow-[0_0_40px_rgba(0,255,136,0.15)] ring-1 ring-brand-green/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-green text-black text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              {plan.name === 'Automated Call Trades' && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-yellow text-black text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                   Premium VIP
                </div>
              )}

              <div className="mb-10">
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${
                    plan.color === 'brand-green' ? 'bg-brand-green/10 text-brand-green' : 
                    plan.color === 'brand-yellow' ? 'bg-brand-yellow/10 text-brand-yellow' : 'bg-white/5 text-white'
                }`}>
                  <plan.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-gray-400 text-lg">R</span>
                  <span className="text-4xl font-display font-extrabold">{plan.price}</span>
                  <span className="text-gray-500 text-xs ml-1 uppercase letter-spacing-widest">Once-off</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-brand-green" size={12} />
                    </div>
                    <span className="text-sm text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full ${
                plan.color === 'brand-green' ? 'premium-btn-primary' : 
                plan.color === 'brand-yellow' ? 'premium-btn-yellow' : 'premium-btn-secondary'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
