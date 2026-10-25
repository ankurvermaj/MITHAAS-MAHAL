import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingBag } from 'lucide-react';
import { products } from '../data/mockData';
import { useCart } from '../store/CartContext';

const Mithai = () => {
  const { addToCart, wishlist, toggleWishlist } = useCart();

  return (
    <div className="pt-24 min-h-screen">
      {/* Signature Mithai Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold text-primary-deep mb-4"
          >
            Our Signature Mithai
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary-deep/60 text-lg max-w-2xl mx-auto"
          >
            Made fresh. Crafted with care. Loved for generations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-primary-deep/5"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <button 
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all ${wishlist.includes(product.id) ? 'bg-red-500 text-white' : 'bg-white/80 text-primary-deep hover:bg-white'}`}
                >
                  <Heart size={18} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                </button>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-primary-deep">{product.name}</h3>
                  <div className="flex items-center gap-1 text-primary-gold">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold">4.9</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-tighter">Price</p>
                    <p className="text-lg font-bold text-primary-deep">₹{product.price} <span className="text-xs font-normal text-gray-500">/ {product.weight}</span></p>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="btn-premium bg-primary-deep text-secondary-cream px-5 py-2 rounded-xl flex items-center gap-2 hover:bg-primary-burgundy"
                  >
                    <ShoppingBag size={16} /> Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Mithai;
