import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { NAV_ITEMS, SERVICES, COMPANY_NAME } from '../constants';
import { Button } from './UI';

// Logo Component
const Logo: React.FC<{ variant?: 'dark' | 'light' }> = ({ variant = 'dark' }) => (
  <Link to="/" className="flex items-center space-x-2 group">
    <div className="relative w-10 h-12">
      <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-sm">
        <path d="M10 10 H90 V80 C90 105 50 120 50 120 C50 120 10 105 10 80 V10 Z" fill="#be222e" />
        <text x="50" y="85" fontSize="60" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Montserrat">B</text>
      </svg>
    </div>
    <div className="flex flex-col">
       <span className={`text-2xl font-bold tracking-tight leading-none ${variant === 'light' ? 'text-white' : 'text-black group-hover:text-belfort-red'} transition-colors`}>Belfort</span>
       <span className={`text-[10px] font-medium tracking-widest uppercase ${variant === 'light' ? 'text-gray-400' : 'text-gray-500'}`}>Integrated Services</span>
    </div>
  </Link>
);

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const headerBgClass = isHome && !isScrolled ? 'bg-transparent' : 'bg-white shadow-md';
  const textColorClass = isHome && !isScrolled ? 'text-white' : 'text-black';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Logo variant={isHome && !isScrolled ? 'light' : 'dark'} />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`text-sm font-semibold tracking-wide uppercase hover:text-belfort-red transition-colors py-2 ${textColorClass}`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-belfort-red transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
                {/* Dropdown for Services */}
                {item.label === 'Services' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white shadow-xl rounded-sm p-4 w-64 border-t-4 border-belfort-red">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-50 hover:text-belfort-red border-b border-gray-100 last:border-0 transition-colors"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button to="/contact" variant={isHome && !isScrolled ? 'white' : 'primary'} className="text-xs px-6 py-2.5">
              Get A Quote
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 ${textColorClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 z-40 md:hidden transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-center px-8 space-y-8">
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 text-white">
                <X size={32} />
            </button>
            {NAV_ITEMS.map((item) => (
                <Link
                key={item.path}
                to={item.path}
                className="text-2xl font-bold text-white uppercase tracking-wider hover:text-belfort-red"
                >
                {item.label}
                </Link>
            ))}
             <div className="pt-8 border-t border-gray-800">
                <Button to="/contact" variant="primary" className="w-full">Get A Quote</Button>
             </div>
        </div>
      </div>
    </header>
  );
};

export const Footer: React.FC = () => (
  <footer className="bg-black text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Col 1: Company Info */}
        <div className="space-y-6">
          <Logo variant="light" />
          <p className="text-gray-400 leading-relaxed text-sm">
            One Team, Total Control. We Optimize Your Assets From Groundwork to Geek-work. Experience the Belfort Standard of excellence.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-gray-400 hover:text-belfort-red transition-colors text-sm">
                  {item.label}
                </Link>
              </li>
            ))}
            <li><Link to="/contact" className="text-gray-400 hover:text-belfort-red transition-colors text-sm">Careers</Link></li>
          </ul>
        </div>

        {/* Col 3: Services */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Our Services</h4>
          <ul className="space-y-3">
            {SERVICES.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link to={`/services/${service.id}`} className="text-gray-400 hover:text-belfort-red transition-colors text-sm">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-gray-400 text-sm">
              <MapPin size={18} className="text-belfort-red mt-1 shrink-0" />
              <span>123 Maitama District,<br />Abuja, Nigeria</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-400 text-sm">
              <Phone size={18} className="text-belfort-red shrink-0" />
              <span>+234 800 BELFORT</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-400 text-sm">
              <Mail size={18} className="text-belfort-red shrink-0" />
              <span>info@belfortintegrated.com</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-8">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-belfort-red transition-colors text-white">
                <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-belfort-red transition-colors text-white">
                <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-belfort-red transition-colors text-white">
                <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Reset scroll on route change
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};