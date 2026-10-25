import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Share2, MessageCircle } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    explore: [
      { name: 'Home', href: '#' },
      { name: 'Our Mithai', href: '#' },
      { name: 'Gift Hampers', href: '#' },
      { name: 'About Us', href: '#' },
    ],
    services: [
      { name: 'Catering', href: '#' },
      { name: 'Corporate Gifting', href: '#' },
      { name: 'Wedding Orders', href: '#' },
      { name: 'Custom Hampers', href: '#' },
    ],
    help: [
      { name: 'Contact', href: '#' },
      { name: 'Shipping', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'FAQs', href: '#' },
    ],
  };

  return (
    <footer className="bg-primary-deep text-secondary-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col">
              <h2 className="text-3xl font-serif font-bold text-primary-gold">MITHAAS MAHAL</h2>
              <p className="text-sm italic text-secondary-cream/70 mt-2">"A Taste of Tradition, Made Fresh."</p>
            </div>
            <p className="text-secondary-cream/60 text-sm leading-relaxed">
              Handcrafting authentic North Indian delicacies for over 30 years. We blend generation-old recipes with modern quality standards.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary-gold hover:text-primary-deep transition-all">
                <Globe size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary-gold hover:text-primary-deep transition-all">
                <Share2 size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary-gold hover:text-primary-deep transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col space-y-6">
              <h3 className="text-lg font-serif font-bold uppercase tracking-wider text-primary-gold">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-secondary-cream/70 hover:text-primary-gold transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-sm text-secondary-cream/50">
            © 2026 Mithaas Mahal. All Rights Reserved.
          </p>
          <p className="text-sm italic text-secondary-cream/50">
            Made with ❤️ and Mithaas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
