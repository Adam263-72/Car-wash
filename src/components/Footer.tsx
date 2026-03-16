import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img 
                src="https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_5a3.jpeg" 
                alt="Extreme Detailing Logo" 
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Beirut's premier car detailing service. We don't just clean cars — we transform them. Experience perfection in every detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-text-main hover:bg-accent hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-text-main hover:bg-accent hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-text-muted hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              {['Full Car Detailing', 'Wash & Wax', 'Headlight Restoration', 'Interior Detailing', 'Leather Restoration'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-text-muted hover:text-accent transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent shrink-0 mt-0.5" />
                <span className="text-text-muted text-sm">VFVG+W6 Beirut, Lebanon</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent shrink-0" />
                <a href="tel:+96103865618" className="text-text-muted hover:text-accent transition-colors text-sm">
                  03 865 618
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent shrink-0" />
                <a href="mailto:info@extremedetailing.com" className="text-text-muted hover:text-accent transition-colors text-sm">
                  info@extremedetailing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Extreme Detailing. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm text-text-muted">
            <Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
