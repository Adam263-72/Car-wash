import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_d56.jpeg"
          alt="Luxury car detailing"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent"></span>
            <span className="text-xs font-medium tracking-wider uppercase text-text-muted">Beirut's #1 Rated Car Detailing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6"
          >
            Where Perfection <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-red-hover">Meets Every Detail</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl leading-relaxed"
          >
            Experience the ultimate transformation for your vehicle. We combine passion, precision, and premium products to deliver results that exceed expectations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent-red text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-accent-red-hover transition-all hover:scale-105 active:scale-95"
            >
              Book Now
              <ChevronRight size={20} />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex flex-wrap items-center gap-6 text-sm text-text-muted font-medium"
          >
            <div className="flex items-center gap-2">
              <span className="text-accent text-lg">★</span>
              <span>5.0 Google Rating</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <span className="text-accent text-lg">🏆</span>
              <span>27+ Happy Clients</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <span className="text-accent text-lg">📍</span>
              <span>Beirut, Lebanon</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
