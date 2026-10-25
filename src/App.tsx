import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import { CartProvider, useCart } from './store/CartContext';

import Home from './pages/Home';
import Mithai from './pages/Mithai';
import About from './pages/About';
import Hampers from './pages/Hampers';
import Catering from './pages/Catering';

const AppContent = () => {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeItem, isCheckoutOpen, setIsCheckoutOpen, subtotal } = useCart();

  return (
    <div className="min-h-screen bg-secondary-offwhite selection:bg-primary-gold selection:text-primary-deep flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mithai" element={<Mithai />} />
          <Route path="/about" element={<About />} />
          <Route path="/hampers" element={<Hampers />} />
          <Route path="/catering" element={<Catering />} />
        </Routes>
      </main>

      <Footer />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        updateQuantity={updateQuantity} 
        removeItem={removeItem} 
      />

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        cart={cart} 
        total={subtotal} 
      />
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
