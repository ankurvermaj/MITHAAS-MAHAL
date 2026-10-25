import React from 'react';
import Hero from '../components/Hero';
import FestivalSection from '../components/FestivalSection';
import TraditionSection from '../components/TraditionSection';
import { categories } from '../data/mockData';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Hero onExplore={() => {
        // Scroll to categories or use router navigation to Mithai
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }} />

      {/* Categories Section */}
      <section className="py-24 bg-primary-deep text-secondary-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" alt="motif" className="w-full h-full object-contain" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Explore Our World</h2>
            <p className="text-secondary-cream/60 text-lg max-w-2xl mx-auto">From festive hampers to corporate gifts, we have something for every celebration.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer"
              >
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-primary-deep via-transparent to-transparent">
                  <div className="text-3xl mb-2">{cat.icon}</div>
                  <h3 className="text-2xl font-serif font-bold mb-1">{cat.name}</h3>
                  <p className="text-sm text-secondary-cream/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{cat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TraditionSection />
      <FestivalSection />
    </>
  );
};

export default Home;
