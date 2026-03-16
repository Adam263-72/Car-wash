import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_0d1.jpeg"
          alt="Luxury car detail"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-heading font-bold mb-6"
        >
          Ready to see your car at its <span className="text-accent">absolute best?</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-text-muted mb-12 max-w-2xl mx-auto"
        >
          Book your appointment today and experience the Extreme difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent-red text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-accent-red-hover transition-all hover:scale-105 active:scale-95"
          >
            Book Now
          </Link>
          
          <a
            href="tel:+96103865618"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
          >
            <Phone size={20} />
            03 865 618
          </a>

          <a
            href="https://wa.me/96103865618"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-[#25D366]/20 transition-all"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
