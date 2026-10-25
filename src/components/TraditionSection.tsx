import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Users, Heart } from 'lucide-react';

const TraditionSection = () => {
  const stats = [
    { label: 'of Sweet Making', value: '30+ Years', icon: <Award className="text-primary-gold" /> },
    { label: 'Made Daily', value: '100% Fresh', icon: <Zap className="text-primary-gold" /> },
    { label: 'Traditional Recipes', value: '25+', icon: <Heart className="text-primary-gold" /> },
    { label: 'Happy Customers', value: '10,000+', icon: <Users className="text-primary-gold" /> },
  ];

  return (
    <section id="about" className="py-24 bg-secondary-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform -rotate-2">
              <img 
                src="/sweets_3.jpg" 
                alt="Crafting Mithai" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-gold/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-burgundy/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-deep leading-tight">
                Generations of <span className="italic font-normal">Mithaas.</span>
              </h2>
              <p className="text-lg text-primary-deep/70 leading-relaxed">
                Our recipes are inspired by the timeless kitchens of North India. From slow-roasted besan to hand-shaped ladoos, every piece of mithai is prepared with patience, precision and pride.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-primary-deep/5"
                >
                  <div className="p-3 rounded-xl bg-secondary-offwhite">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-serif font-bold text-primary-deep">{stat.value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TraditionSection;
