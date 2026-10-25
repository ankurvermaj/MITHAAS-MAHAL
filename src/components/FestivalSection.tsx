import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Sparkles, Heart } from 'lucide-react';

const FestivalSection = () => {
  const festivals = [
    { name: 'Diwali', icon: '🪔', color: 'bg-orange-100 text-orange-600' },
    { name: 'Holi', icon: '🎨', color: 'bg-pink-100 text-pink-600' },
    { name: 'Raksha Bandhan', icon: '🎁', color: 'bg-blue-100 text-blue-600' },
    { name: 'Eid', icon: '🌙', color: 'bg-green-100 text-green-600' },
    { name: 'Weddings', icon: '💍', color: 'bg-purple-100 text-purple-600' },
    { name: 'Birthdays', icon: '🎂', color: 'bg-yellow-100 text-yellow-600' },
  ];

  return (
    <section className="py-24 bg-secondary-offwhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold text-primary-deep mb-4"
          >
            Celebrate With Mithaas
          </motion.h2>
          <p className="text-primary-deep/60 text-lg max-w-2xl mx-auto">
            Curated collections for every festive occasion. Make your celebrations unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Feature Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden h-[400px] group"
          >
            <img 
              src="/sweets_2.jpg" 
              alt="Diwali Collection" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/40 to-transparent p-12 flex flex-col justify-end text-secondary-cream">
              <div className="flex items-center gap-2 text-primary-gold mb-4">
                <Sparkles size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">Limited Edition 2026</span>
              </div>
              <h3 className="text-4xl font-serif font-bold mb-4">Diwali Gift Collection</h3>
              <p className="text-secondary-cream/80 mb-8 max-w-md">Make this Diwali unforgettable with handcrafted mithai boxes made for sharing and love.</p>
              <button className="btn-premium bg-primary-gold text-primary-deep w-fit px-8 py-3 font-bold">
                Explore Festival Collection
              </button>
            </div>
          </motion.div>

          {/* Festival Grid */}
          <div className="grid grid-cols-2 gap-4">
            {festivals.map((fest, idx) => (
              <motion.div 
                key={fest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-white border border-primary-deep/5 shadow-sm flex flex-col items-center text-center justify-center gap-3 cursor-pointer hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${fest.color}`}>
                  {fest.icon}
                </div>
                <h4 className="font-serif font-bold text-primary-deep text-sm">{fest.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestivalSection;
