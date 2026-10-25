import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { products } from '../data/mockData';

type CartItem = typeof products[0] & {
  quantity: number;
  weight: string;
};

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeItem }: { 
  isOpen: boolean, 
  onClose: () => void, 
  cart: CartItem[], 
  updateQuantity: (id: string, delta: number) => void,
  removeItem: (id: string) => void
}) => {
  const [coupon, setCoupon] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = appliedCoupon === 'MITHAAS10' ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-secondary-offwhite z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-primary-deep/10 flex items-center justify-between">
              <h2 className="text-2xl font-serif font-bold text-primary-deep flex items-center gap-3">
                <ShoppingCart size={24} /> Your Mithaas
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-primary-deep/5 rounded-full transition-colors">
                <X size={24} className="text-primary-deep" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                  <ShoppingBag size={64} className="text-primary-deep/20" />
                  <p className="text-lg font-serif italic">Your basket is empty...</p>
                  <button onClick={onClose} className="btn-premium bg-primary-deep text-secondary-cream">Start Shopping</button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-4 p-4 rounded-2xl bg-white border border-primary-deep/5 shadow-sm"
                  >
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif font-bold text-primary-deep">{item.name}</h3>
                        <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{item.weight}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-secondary-beige rounded-lg p-1">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-white rounded-md transition-colors">
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-white rounded-md transition-colors">
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="font-bold text-primary-deep">₹{item.price * item.quantity}</p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            <div className="p-6 bg-white border-t border-primary-deep/10 space-y-4">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Coupon Code" 
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg border border-primary-deep/10 text-sm outline-none focus:border-primary-gold"
                />
                <button 
                  onClick={() => setAppliedCoupon(coupon)}
                  className="px-4 py-2 bg-primary-deep text-secondary-cream rounded-lg text-xs font-bold uppercase"
                >
                  Apply
                </button>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Discount (10%)</span>
                    <span>-₹{Math.round(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold text-primary-deep pt-2 border-t border-primary-deep/10">
                  <span>Total</span>
                  <span>₹{Math.round(total)}</span>
                </div>
              </div>

              <button className="btn-premium bg-primary-gold text-primary-deep w-full py-4 text-lg font-bold hover:bg-primary-gold/90 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
