import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { products } from '../data/mockData';

type CartItem = typeof products[0] & {
  quantity: number;
  weight: string;
};

interface CartContextType {
  cart: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  isCheckoutOpen: boolean;
  addToCart: (product: typeof products[0]) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  toggleWishlist: (id: string) => void;
  setIsCartOpen: (isOpen: boolean) => void;
  setIsCheckoutOpen: (isOpen: boolean) => void;
  cartCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('mithaas-cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('mithaas-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: typeof products[0]) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1, weight: product.weight }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const toggleWishlist = (id: string) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const cartCount = cart.reduce((a, b) => a + b.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cart, wishlist, isCartOpen, isCheckoutOpen,
      addToCart, updateQuantity, removeItem, toggleWishlist,
      setIsCartOpen, setIsCheckoutOpen, cartCount, subtotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
