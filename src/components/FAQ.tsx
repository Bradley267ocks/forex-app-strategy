/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is this beginner friendly?',
      a: 'Absolutely. We specialize in taking complex concepts and making them simple. Our Setup + Explanation package is specifically designed for those who want to learn while they use professional tools.',
    },
    {
      q: 'Do you offer support?',
      a: 'Yes, we pride ourselves on professional technical and strategic support. Depending on your package, we offer basic technical assistance up to 1-on-1 VIP mentorship.',
    },
    {
      q: 'How do payments work?',
      a: 'We accept secure payments. Once payment is confirmed, our team will contact you via WhatsApp or Email to schedule your technical setup and provide access to resources.',
    },
    {
      q: 'Is automation included?',
      a: 'Basic automation tools are part of all setups. However, full Automated Call Trades are exclusive to our VIP Premium membership which includes more advanced server-side integration.',
    },
    {
      q: 'How fast do I get started?',
      a: 'We aim to have all setups completed within 24-48 hours of payment confirmation. We prioritize speed and technical accuracy during the configuration process.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
            <HelpCircle size={28} />
          </div>
          <h3 className="text-3xl md:text-4xl font-display font-bold">Common Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between gap-4 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold">{faq.q}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-gray-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
