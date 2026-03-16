import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Car, Droplets, Sun, Armchair, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Full Car Detailing',
    description: 'Comprehensive service that restores your car to its showroom glory.',
    link: '/services#full-detailing',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_b95.jpeg'
  },
  {
    icon: Droplets,
    title: 'Wash & Wax',
    description: 'Professional wash with protective wax layers for a lasting shine.',
    link: '/services#wash-wax',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_660.jpeg'
  },
  {
    icon: Sun,
    title: 'Headlight Restoration',
    description: 'Remove yellowing and haze to bring headlights back to factory fresh.',
    link: '/services#headlights',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_899.jpeg'
  },
  {
    icon: Armchair,
    title: 'Interior Detailing',
    description: 'Deep cleaning for seats, carpets, and all interior surfaces.',
    link: '/services#interior',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_948.jpeg'
  }
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-heading font-bold mb-4"
            >
              Our <span className="text-accent">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-text-muted text-lg"
            >
              From a quick refresh to a complete transformation, we offer professional detailing services tailored to your vehicle's needs.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold uppercase tracking-wider transition-colors group"
            >
              View All Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-primary rounded-xl border border-white/5 hover:border-accent/30 transition-all overflow-hidden flex flex-col"
              >
                <div className="h-48 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="relative z-10 p-8 flex-1 flex flex-col">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6 -mt-14 relative z-20 shadow-lg border border-white/10">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{service.title}</h3>
                  <p className="text-text-muted mb-6 leading-relaxed flex-1">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-accent transition-colors mt-auto"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
