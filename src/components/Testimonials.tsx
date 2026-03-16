import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Pyro FPV',
    text: "I would highly recommend Extreme Detailing to anyone who needs their car looking like it just came out of the dealership. Excellent, quality job and a flawless detail.",
    rating: 5,
  },
  {
    name: 'Jihad Zein',
    text: "The attention to detail was incredible—my car looks brand new. Malik was both professional and extremely kind, even offering extra cleaning services for free.",
    rating: 5,
  },
  {
    name: 'Chef',
    text: "They turned a near 20 year old car looking brand new... hands down the best in the game. Headlights look like they're factory fresh, the seats look like no one ever even sat in them.",
    rating: 5,
  },
  {
    name: 'Sami Makkouk',
    text: "Best detailing service in Beirut by far! Car turned out better than when I took delivery of it from the agency",
    rating: 5,
  },
  {
    name: 'Bassel Baydoun',
    text: "Professional work!! They have turned my car into a space shuttle",
    rating: 5,
  },
  {
    name: 'Elias Bechara',
    text: "Great service — I trust them with my brand new Lexus NX350h Sport. Wow end result",
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-white/5 mb-6"
          >
            <Star className="text-accent fill-accent" size={16} />
            <span className="text-sm font-bold tracking-wider">5.0 RATING ON GOOGLE</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4"
          >
            What Our <span className="text-accent">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted max-w-2xl mx-auto text-lg"
          >
            Don't just take our word for it. Read what our satisfied customers have to say about their experience with Extreme Detailing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-8 rounded-xl border border-white/5 relative group hover:border-accent/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-white/5 w-16 h-16 group-hover:text-accent/10 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-text-muted italic mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
              <div className="font-heading font-bold text-lg">
                {testimonial.name}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://maps.google.com" // Replace with actual Google Maps link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold uppercase tracking-wider transition-colors"
          >
            Read all 27 reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
