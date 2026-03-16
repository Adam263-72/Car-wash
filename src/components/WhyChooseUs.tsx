import { motion } from 'motion/react';
import { Target, Users, Sparkles, Heart } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: 'Extreme Precision',
    description: 'Attention to every detail, no matter how small. We leave no corner untouched.',
  },
  {
    icon: Users,
    title: 'Professional Team',
    description: 'Years of experience and passion for cars drive our exceptional results.',
  },
  {
    icon: Sparkles,
    title: 'Flawless Results',
    description: 'Your car returns to you looking better than the day it left the dealership.',
  },
  {
    icon: Heart,
    title: 'Friendly Service',
    description: 'We treat every vehicle as if it were our own, ensuring complete satisfaction.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4"
          >
            Why Choose <span className="text-accent">Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text-muted max-w-2xl mx-auto text-lg"
          >
            We don't just clean cars; we restore, protect, and elevate them.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary/50 border border-white/5 p-8 rounded-xl hover:border-accent/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{reason.title}</h3>
                <p className="text-text-muted leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
