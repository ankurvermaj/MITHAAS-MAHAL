import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../store/CartContext';

const Navbar = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Mithai', href: '/mithai' },
    { name: 'About Us', href: '/about' },
    { name: 'Gift Hampers', href: '/hampers' },
    { name: 'Catering', href: '/catering' },
    { name: 'Contact', href: '/catering' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-primary-deep/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className={`text-2xl md:text-3xl font-serif font-bold tracking-tighter ${isScrolled ? 'text-secondary-cream' : 'text-primary-deep'}`}
          >
            MITHAAS MAHAL
          </motion.div>
          <span className={`text-[10px] uppercase tracking-widest font-semibold ${isScrolled ? 'text-secondary-cream/80' : 'text-primary-deep/70'}`}>
            Authentic Indian Mithai
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.href}
                className={`text-sm font-medium uppercase tracking-widest hover:text-primary-gold transition-colors ${isScrolled ? 'text-secondary-cream' : 'text-primary-deep'}`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Icons & CTA */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => alert('Search feature coming soon!')}
            className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-secondary-cream hover:bg-white/10' : 'text-primary-deep hover:bg-black/5'}`}
          >
            <Search size={20} />
          </button>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className={`p-2 rounded-full relative transition-colors ${isScrolled ? 'text-secondary-cream hover:bg-white/10' : 'text-primary-deep hover:bg-black/5'}`}
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-primary-gold text-primary-deep text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full"
              >
                {cartCount}
              </motion.span>
            )}
          </button>

          <button className={`hidden md:block btn-premium ${isScrolled ? 'bg-primary-gold text-primary-deep' : 'bg-primary-deep text-secondary-cream'}`}>
            Order Now
          </button>

          <button 
            className={`lg:hidden p-2 rounded-full ${isScrolled ? 'text-secondary-cream' : 'text-primary-deep'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary-deep text-secondary-cream overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} className="text-lg font-medium py-2 border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <button className="btn-premium bg-primary-gold text-primary-deep w-full mt-4">
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
