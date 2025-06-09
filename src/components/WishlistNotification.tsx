import React, { useEffect } from 'react';
import { Heart, X } from 'lucide-react';

interface WishlistNotificationProps {
  isVisible: boolean;
  action: { type: 'added' | 'removed'; productName: string } | null;
  onClose: () => void;
}

const WishlistNotification: React.FC<WishlistNotificationProps> = ({ isVisible, action, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto-hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible || !action) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-4 max-w-sm">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              action.type === 'added' 
                ? 'bg-red-100 dark:bg-red-900/20' 
                : 'bg-gray-100 dark:bg-gray-700'
            }`}>
              <Heart className={`w-5 h-5 ${
                action.type === 'added' 
                  ? 'text-red-600 dark:text-red-400 fill-current' 
                  : 'text-gray-600 dark:text-gray-400'
              }`} />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {action.type === 'added' ? 'Added to wishlist!' : 'Removed from wishlist'}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
              {action.productName}
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistNotification;