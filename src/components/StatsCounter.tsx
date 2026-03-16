import { motion } from 'motion/react';
import { Car, Star, Calendar, Smile } from 'lucide-react';

const stats = [
  { icon: Car, value: '500+', label: 'Cars Detailed' },
  { icon: Star, value: '5.0', label: 'Google Rating' },
  { icon: Calendar, value: '5+', label: 'Years Experience' },
  { icon: Smile, value: '27+', label: 'Happy Clients' },
];

export function StatsCounter() {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_b95.jpeg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon size={32} className="text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-semibold uppercase tracking-wider text-primary/80">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
