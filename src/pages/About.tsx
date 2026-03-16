import { motion } from 'motion/react';
import { Target, Users, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export function About() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-heading font-bold mb-6"
        >
          About <span className="text-accent">Extreme Detailing</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-text-muted max-w-3xl mx-auto"
        >
          At Extreme Detailing, we don't just clean cars — we transform them. Based in the heart of Beirut, our passionate team of experts brings years of experience and an obsessive attention to detail to every vehicle that enters our shop.
        </motion.p>
      </div>

      {/* Story & Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_660.jpeg" 
            alt="Extreme Detailing Team" 
            className="rounded-2xl shadow-2xl border border-white/10 w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-heading font-bold text-accent">Our Story</h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Founded with a singular vision: to provide the highest standard of car care in Lebanon. What started as a passion for automotive perfection has grown into Beirut's top-rated detailing service.
          </p>
          <p className="text-text-muted text-lg leading-relaxed">
            Led by Malik and our dedicated team, we treat every car—from daily drivers to luxury exotics—as if it were our own. Our 5.0-star rating on Google isn't just a number; it's a testament to our unwavering commitment to excellence.
          </p>
          <div className="pt-4">
            <h3 className="text-xl font-heading font-bold mb-4">Our Mission</h3>
            <p className="text-text-muted text-lg leading-relaxed border-l-4 border-accent pl-4 italic">
              "To deliver flawless results and an exceptional customer experience, ensuring every vehicle leaves our shop looking better than the day it was bought."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Values */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold">Our Core <span className="text-accent">Values</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Target, title: 'Precision', desc: 'Obsessive attention to the smallest details.' },
            { icon: Users, title: 'Professionalism', desc: 'Expert techniques and premium products.' },
            { icon: Heart, title: 'Passion', desc: 'A genuine love for cars and restoration.' },
            { icon: ShieldCheck, title: 'Integrity', desc: 'Honest pricing and transparent service.' },
            { icon: Sparkles, title: 'Excellence', desc: 'Consistently exceeding expectations.' },
          ].map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary p-8 rounded-xl border border-white/5 text-center hover:border-accent/30 transition-colors"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
                <p className="text-text-muted">{value.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

