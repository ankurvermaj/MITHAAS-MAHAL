import React from 'react';
import { motion } from 'framer-motion';
import { Gift, CheckCircle } from 'lucide-react';

const HampersSection = () => {
  const hampers = [
    { name: 'Royal Mithaas Box', desc: '12 assorted premium sweets', price: 1299, image: '/sweets_2.jpg' },
    { name: 'Maharaja Collection', desc: '24 assorted sweets + dry fruits', price: 2499, image: '/sweets_2.jpg' },
    { name: 'Festive Celebration Box', desc: 'Traditional mithai + namkeen', price: 1799, image: '/sweets_2.jpg' },
    { name: 'Corporate Signature Box', desc: 'Custom branding + assortment', price: 999, image: '/sweets_2.jpg' },
  ];

  return (
    <section id="hampers" className="py-24 bg-primary-deep text-secondary-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Premium Gifting</h2>
          <p className="text-secondary-cream/60 text-lg max-w-2xl mx-auto">The art of giving, perfected. Our curated hampers are designed for the most special moments.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {hampers.map((hamper, idx) => (
            <motion.div 
              key={hamper.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all flex flex-col h-full"
            >
              <div className="h-48 rounded-2xl overflow-hidden mb-6">
                <img src={hamper.image} alt={hamper.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">{hamper.name}</h3>
              <p className="text-sm text-secondary-cream/60 mb-6 flex-1">{hamper.desc}</p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-primary-gold">₹{hamper.price}</p>
                <button className="p-3 rounded-full bg-primary-gold text-primary-deep hover:scale-110 transition-transform">
                  <Gift size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-primary-gold/10 border border-primary-gold/20 text-center space-y-6">
          <h3 className="text-2xl font-serif font-bold">Need something unique?</h3>
          <p className="text-secondary-cream/70">We specialize in personalized packaging and customized assortments for weddings and corporate events.</p>
          <button className="btn-premium bg-primary-gold text-primary-deep px-8 py-3 font-bold">
            Customize Your Box
          </button>
        </div>
      </div>
    </section>
  );
};

export default HampersSection;
