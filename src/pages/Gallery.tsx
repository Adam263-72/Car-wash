import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    category: 'exterior',
    title: 'Maserati',
    service: 'Full Exterior Detailing',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_827.jpeg',
  },
  {
    id: 2,
    category: 'interior',
    title: 'VW Golf R32',
    service: 'Deep Interior Cleaning',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_948.jpeg',
  },
  {
    id: 3,
    category: 'headlights',
    title: 'Porsche',
    service: 'Headlight Restoration',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_899.jpeg',
  },
  {
    id: 4,
    category: 'exterior',
    title: 'Porsche Cayenne',
    service: 'Ceramic Coating',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_966.jpeg',
  },
  {
    id: 5,
    category: 'exterior',
    title: 'Porsche 911',
    service: 'Paint Correction',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_002.jpeg',
  },
  {
    id: 6,
    category: 'engine',
    title: 'VW Golf R32',
    service: 'Engine Bay Detailing',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_876.jpeg',
  },
  {
    id: 7,
    category: 'motorcycle',
    title: 'Harley Davidson',
    service: 'Motorcycle Detailing',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_c73.jpeg',
  },
  {
    id: 8,
    category: 'exterior',
    title: 'Lexus SUV',
    service: 'Paint Correction & Polish',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_ca5.jpeg',
  },
  {
    id: 9,
    category: 'exterior',
    title: 'Toyota Land Cruiser',
    service: 'Full Detailing',
    image: 'https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_1a8.jpeg',
  }
];

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'exterior', label: 'Exterior' },
  { id: 'interior', label: 'Interior' },
  { id: 'headlights', label: 'Headlights' },
  { id: 'engine', label: 'Engine Bay' },
  { id: 'motorcycle', label: 'Motorcycles' },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-heading font-bold mb-6"
        >
          Our <span className="text-accent">Portfolio</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-text-muted max-w-3xl mx-auto"
        >
          Browse through our recent projects and see the Extreme Detailing difference for yourself.
        </motion.p>
      </div>

      {/* Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all ${
              activeCategory === category.id
                ? 'bg-accent-red text-white'
                : 'bg-secondary text-text-muted hover:text-white border border-white/5 hover:border-white/20'
            }`}
          >
            {category.label}
          </button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-heading font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                <p className="text-accent text-sm font-medium uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.service}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

