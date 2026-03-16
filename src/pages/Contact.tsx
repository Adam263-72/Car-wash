import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    carModel: '',
    service: '',
    date: '',
    notes: ''
  });

  // Pre-select service if coming from Services page
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a backend or email service
    console.log('Form submitted:', formData);
    alert('Thank you for your booking request! We will contact you shortly to confirm.');
    setFormData({
      name: '',
      phone: '',
      whatsapp: '',
      carModel: '',
      service: '',
      date: '',
      notes: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-heading font-bold mb-6"
        >
          Book Your <span className="text-accent">Appointment</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-text-muted max-w-3xl mx-auto"
        >
          Ready to transform your vehicle? Fill out the form below or contact us directly to schedule your detailing service.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-secondary p-8 rounded-xl border border-white/5">
            <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-text-muted">VFVG+W6 Beirut, Lebanon</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone / WhatsApp</h4>
                  <a href="tel:+96103865618" className="text-text-muted hover:text-accent transition-colors block">03 865 618</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a href="mailto:info@extremedetailing.com" className="text-text-muted hover:text-accent transition-colors block">info@extremedetailing.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Working Hours</h4>
                  <p className="text-text-muted">Mon - Sat: 8:30 AM - 6:00 PM</p>
                  <p className="text-text-muted">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-white/5 h-64 bg-secondary relative">
            {/* Placeholder for actual Google Maps iframe */}
            <div className="absolute inset-0 flex items-center justify-center flex-col text-text-muted">
              <MapPin size={48} className="text-accent mb-4 opacity-50" />
              <p>Google Maps Integration</p>
              <p className="text-sm">VFVG+W6 Beirut, Lebanon</p>
            </div>
          </div>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-xl border border-white/5 space-y-6">
            <h3 className="text-2xl font-heading font-bold mb-6">Request a Booking</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-text-muted">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-primary border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-text-muted">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-primary border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="e.g., 03 123 456"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="carModel" className="text-sm font-medium text-text-muted">Car Make & Model *</label>
              <input
                type="text"
                id="carModel"
                name="carModel"
                required
                value={formData.carModel}
                onChange={handleChange}
                className="w-full bg-primary border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="e.g., BMW X5 2020"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-text-muted">Service Required *</label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-primary border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="full-detailing">Full Exterior Detailing</option>
                  <option value="interior">Full Interior Detailing</option>
                  <option value="headlights">Headlight Restoration</option>
                  <option value="leather">Leather Restoration & Paint</option>
                  <option value="wash-wax">Wash & Wax</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium text-text-muted">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-primary border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="notes" className="text-sm font-medium text-text-muted">Additional Notes</label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                className="w-full bg-primary border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell us more about your car's condition or specific requests..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-accent-red text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-accent-red-hover transition-all"
            >
              <Send size={20} />
              Send Request
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

