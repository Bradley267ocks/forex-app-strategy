/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Thabo Mosh',
      role: 'Day Trader',
      text: 'The Setup + Explanation package changed my perspective on market structure. I finally understand WHY I am taking a trade.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thabo',
    },
    {
      name: 'Sarah Peterson',
      role: 'Part-time Trader',
      text: 'Technical support was incredible. They helped me install the tools and optimized them for my specific account size.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    },
    {
      name: 'Kevin Ndlovu',
      role: 'VIP Member',
      text: 'Automated call trades have significantly reduced my screen time. The precision of the entries is something I have not seen before.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin',
    },
  ];

  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-green tracking-[0.2em] uppercase mb-4">Client Feedback</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Built on <span className="text-gradient">Trust.</span></h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col h-full"
            >
              <div className="flex gap-1 text-brand-yellow mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              
              <Quote className="text-brand-green/20 mb-4" size={40} />
              
              <p className="text-gray-300 text-lg italic mb-8 flex-grow">"{item.text}"</p>
              
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full bg-white/10" />
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
