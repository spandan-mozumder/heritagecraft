import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types';

interface WishlistContextType {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  getWishlistCount: () => number;
  clearWishlist: () => void;
  showWishlistNotification: boolean;
  lastWishlistAction: { type: 'added' | 'removed'; productName: string } | null;
  hideWishlistNotification: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [showWishlistNotification, setShowWishlistNotification] = useState(false);
  const [lastWishlistAction, setLastWishlistAction] = useState<{ type: 'added' | 'removed'; productName: string } | null>(null);

  const addToWishlist = (product: Product) => {
    setWishlistItems(prev => {
      if (prev.find(item => item.id === product.id)) {
        return prev; // Already in wishlist
      }
      const newWishlist = [...prev, product];
      
      // Show notification
      setLastWishlistAction({ type: 'added', productName: product.name });
      setShowWishlistNotification(true);
      
      return newWishlist;
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(prev => {
      const product = prev.find(item => item.id === productId);
      if (product) {
        // Show notification
        setLastWishlistAction({ type: 'removed', productName: product.name });
        setShowWishlistNotification(true);
      }
      return prev.filter(item => item.id !== productId);
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const getWishlistCount = () => {
    return wishlistItems.length;
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const hideWishlistNotification = () => {
    setShowWishlistNotification(false);
  };

  return (
    <WishlistContext.Provider value={{
      wishlistItems,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      getWishlistCount,
      clearWishlist,
      showWishlistNotification,
      lastWishlistAction,
      hideWishlistNotification,
    }}>
      {children}
    </WishlistContext.Provider>
  );
};