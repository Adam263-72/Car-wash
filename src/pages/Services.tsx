import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const detailedServices = [
  {
    id: 'full-detailing',
    title: 'Full Exterior Detailing',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_b95.jpeg',
    description: 'A comprehensive service that restores your car to its showroom glory. We meticulously clean, polish, and protect every exterior surface.',
    features: [
      'Multi-stage hand wash',
      'Clay bar treatment for decontamination',
      'Paint correction and polishing',
      'Ceramic coating or premium wax application',
      'Wheel and tire deep cleaning & dressing',
      'Glass cleaning and protection'
    ],
    duration: '4-8 hours'
  },
  {
    id: 'interior',
    title: 'Full Interior Detailing',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_948.jpeg',
    description: 'Deep cleaning and sanitization for your entire cabin. We remove stains, odors, and years of buildup from all materials.',
    features: [
      'Deep extraction cleaning for seats (fabric/leather)',
      'Dashboard and console sanitization',
      'A/C vent steam cleaning',
      'Headliner spot cleaning',
      'Carpet and floor mat shampooing',
      'Odor removal and ozone treatment'
    ],
    duration: '3-6 hours'
  },
  {
    id: 'headlights',
    title: 'Headlight Restoration',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_899.jpeg',
    description: 'Restore clarity and brightness to yellowed, hazy headlights, improving both aesthetics and nighttime visibility.',
    features: [
      'Removal of oxidation and yellowing',
      'Multi-stage wet sanding',
      'High-gloss machine polishing',
      'UV protective coating application'
    ],
    duration: '1-2 hours'
  },
  {
    id: 'leather',
    title: 'Leather & Interior Restoration',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_430.jpeg',
    description: 'Bring worn, cracked, or faded interior materials back to life. We can even re-dye or paint leather to factory specifications.',
    features: [
      'Deep leather cleaning and prep',
      'Scratch and scuff repair',
      'Custom color-matched leather paint',
      'Premium leather conditioning and protection'
    ],
    duration: '2-5 hours'
  },
  {
    id: 'wash-wax',
    title: 'Wash & Wax',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_ff4.jpeg',
    description: 'A premium maintenance wash followed by a high-quality wax to protect your paint and keep it shining.',
    features: [
      'Thorough hand wash using two-bucket method',
      'Application of premium carnauba or synthetic wax',
      'Tire dressing',
      'Exterior glass cleaning'
    ],
    duration: '1-2 hours'
  }
];

export function Services() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-heading font-bold mb-6"
        >
          Our <span className="text-accent">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-text-muted max-w-3xl mx-auto"
        >
          Whether your car needs a quick refresh or a complete transformation, our range of professional detailing services will have it looking — and feeling — better than the day you bought it.
        </motion.p>
      </div>

      <div className="space-y-24">
        {detailedServices.map((service, index) => (
          <motion.div 
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
          >
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] group">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">{service.title}</h2>
              <p className="text-lg text-text-muted leading-relaxed">{service.description}</p>
              
              <div className="bg-secondary/50 border border-white/5 rounded-xl p-6">
                <h3 className="font-heading font-bold mb-4 uppercase tracking-wider text-sm text-accent">What's Included</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-success shrink-0 mt-0.5" />
                      <span className="text-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <div className="text-sm font-medium text-text-muted bg-white/5 px-4 py-2 rounded-md border border-white/10">
                  <span className="text-white">Est. Duration:</span> {service.duration}
                </div>
                <Link
                  to={`/contact?service=${service.id}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent-red text-white px-6 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-accent-red-hover transition-all"
                >
                  Book This Service
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

