import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, CreditCard, Truck, ShieldCheck } from 'lucide-react';

const CheckoutModal = ({ isOpen, onClose, cart, total }: { 
  isOpen: boolean, 
  onClose: () => void, 
  cart: any[], 
  total: number 
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', city: '', pincode: '', date: '', instructions: ''
  });

  const isFormValid = () => {
    return formData.name && formData.email && formData.phone && formData.address && formData.pincode;
  };

  const handlePayment = () => {
    setStep(3);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] bg-secondary-offwhite z-[90] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left: Order Summary */}
            <div className="w-full md:w-1/3 bg-primary-deep text-secondary-cream p-8">
              <h3 className="text-2xl font-serif font-bold mb-6">Order Summary</h3>
              <div className="space-y-4 mb-8 overflow-y-auto max-h-[40vh]">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm border-b border-white/10 pb-2">
                    <span>{item.quantity}x {item.name}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2 border-t border-white/20 pt-4">
                <div className="flex justify-between text-sm opacity-70">
                  <span>Delivery Charge</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-primary-gold">
                  <span>Total</span>
                  <span>₹{Math.round(total)}</span>
                </div>
              </div>
            </div>

            {/* Right: Checkout Process */}
            <div className="flex-1 p-8 overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`w-8 h-2 rounded-full transition-colors ${step >= i ? 'bg-primary-gold' : 'bg-gray-200'}`} />
                  ))}
                </div>
                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X size={24} className="text-primary-deep" />
                </button>
              </div>

              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h2 className="text-3xl font-serif font-bold text-primary-deep">Delivery Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      placeholder="Full Name" 
                      className="p-3 rounded-xl border border-primary-deep/10 outline-none focus:border-primary-gold"
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      placeholder="Email Address" 
                      className="p-3 rounded-xl border border-primary-deep/10 outline-none focus:border-primary-gold"
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                    <input 
                      placeholder="Mobile Number" 
                      className="p-3 rounded-xl border border-primary-deep/10 outline-none focus:border-primary-gold"
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                    <input 
                      placeholder="Pincode" 
                      className="p-3 rounded-xl border border-primary-deep/10 outline-none focus:border-primary-gold"
                      onChange={e => setFormData({...formData, pincode: e.target.value})}
                    />
                    <input 
                      placeholder="Delivery Address" 
                      className="p-3 rounded-xl border border-primary-deep/10 outline-none focus:border-primary-gold md:col-span-2"
                      onChange={e => setFormData({...formData, address: e.target.value})}
                    />
                    <input 
                      type="date" 
                      className="p-3 rounded-xl border border-primary-deep/10 outline-none focus:border-primary-gold"
                      onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                    <input 
                      placeholder="City" 
                      className="p-3 rounded-xl border border-primary-deep/10 outline-none focus:border-primary-gold"
                      onChange={e => setFormData({...formData, city: e.target.value})}
                    />
                  </div>
                  <button 
                    disabled={!isFormValid()}
                    onClick={() => setStep(2)}
                    className="btn-premium bg-primary-deep text-secondary-cream w-full py-4 font-bold disabled:opacity-50"
                  >
                    Continue to Payment
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h2 className="text-3xl font-serif font-bold text-primary-deep">Payment Method</h2>
                  <div className="space-y-4">
                    {[
                      { id: 'upi', name: 'UPI / QR Code', icon: <ShieldCheck size={20} />, desc: 'Fast and secure' },
                      { id: 'card', name: 'Credit / Debit Card', icon: <CreditCard size={20} />, desc: 'All major cards accepted' },
                      { id: 'cod', name: 'Cash on Delivery', icon: <Truck size={20} />, desc: 'Pay when you receive' },
                    ].map(method => (
                      <label key={method.id} className="flex items-center gap-4 p-4 rounded-2xl border-2 border-primary-deep/5 cursor-pointer hover:border-primary-gold transition-all bg-white">
                        <input type="radio" name="payment" className="w-4 h-4 text-primary-gold" />
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-secondary-beige rounded-lg text-primary-deep">{method.icon}</div>
                          <div>
                            <p className="font-bold text-primary-deep">{method.name}</p>
                            <p className="text-xs text-gray-500">{method.desc}</p>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="btn-premium border-2 border-primary-deep text-primary-deep flex-1">Back</button>
                    <button onClick={handlePayment} className="btn-premium bg-primary-deep text-secondary-cream flex-1 font-bold">Place Order</button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-primary-deep">Your Mithaas Is On Its Way!</h2>
                  <p className="text-primary-deep/60">Order #MM-{Math.floor(Math.random() * 1000000)} has been placed successfully.</p>
                  <button onClick={onClose} className="btn-premium bg-primary-deep text-secondary-cream px-8 py-3 font-bold">Return to Shop</button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
