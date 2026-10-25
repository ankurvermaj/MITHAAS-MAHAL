import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Hero = ({ onExplore }: { onExplore: () => void }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary-offwhite">
      {/* Background Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-gold rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-burgundy rounded-full blur-[120px]" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-32 h-32 opacity-20 hidden md:block"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" alt="motif" className="w-full h-full object-contain" />
      </motion.div>
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[10%] w-24 h-24 opacity-20 hidden md:block"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" alt="motif" className="w-full h-full object-contain" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1 rounded-full bg-primary-gold/20 text-primary-deep font-semibold text-xs uppercase tracking-widest mb-6"
          >
            Handcrafted with Love
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-serif font-bold text-primary-deep leading-tight mb-6"
          >
            Where Every <span className="gold-gradient">Sweet Tells a Story.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-primary-deep/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Authentic North Indian mithai, handcrafted with generations of tradition and the finest ingredients. Experience the royal taste of Mithaas Mahal.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button 
              onClick={onExplore}
              className="btn-premium bg-primary-deep text-secondary-cream w-full sm:w-auto flex items-center justify-center gap-2 group"
            >
              Explore Mithai <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-premium border-2 border-primary-deep text-primary-deep w-full sm:w-auto">
              Order Now
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: y1, opacity }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
            <img 
              src="/sweets_1.jpg" 
              alt="Premium Sweets" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center text-primary-deep">
              <ShoppingBag size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-primary-deep uppercase">Pure Ghee</p>
              <p className="text-[10px] text-gray-500">100% Authentic Ingredients</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
