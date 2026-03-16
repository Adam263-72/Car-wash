import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="https://storage.googleapis.com/aistudio-chat-prod-user-content/0000000000000000/image_20260316_105156_5a3.jpeg" 
              alt="Extreme Detailing Logo" 
              className="h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent',
                  location.pathname === link.path ? 'text-accent' : 'text-text-main'
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+96103865618"
              className="flex items-center gap-2 bg-accent-red text-white px-5 py-2.5 rounded-sm font-semibold uppercase text-sm tracking-wider hover:bg-accent-red-hover transition-colors"
            >
              <Phone size={16} />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-main hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-md border-t border-white/10 transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 py-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-base font-medium uppercase tracking-wider transition-colors hover:text-accent',
                location.pathname === link.path ? 'text-accent' : 'text-text-main'
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+96103865618"
            className="flex items-center justify-center gap-2 bg-accent-red text-white px-5 py-3 rounded-sm font-semibold uppercase text-sm tracking-wider hover:bg-accent-red-hover transition-colors w-full mt-4"
          >
            <Phone size={16} />
            <span>Call to Book</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
