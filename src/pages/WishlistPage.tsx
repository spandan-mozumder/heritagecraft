import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  ShoppingBag, 
  ArrowLeft, 
  Trash2,
  Star,
  Filter,
  Grid,
  List,
  Share2
} from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';

const WishlistPage: React.FC = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist, getWishlistCount } = useWishlist();
  const { addToCart } = useCart();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('recent');

  const sortOptions = [
    { value: 'recent', label: 'Recently Added' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'name', label: 'Name A-Z' },
  ];

  const sortedItems = [...wishlistItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0; // Keep original order for 'recent'
    }
  });

  const handleAddToCart = (productId: string) => {
    const product = wishlistItems.find(item => item.id === productId);
    if (product) {
      addToCart(product);
    }
  };

  const handleAddAllToCart = () => {
    wishlistItems.forEach(product => {
      if (product.inStock) {
        addToCart(product);
      }
    });
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Your wishlist is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Save items you love to your wishlist and shop them later.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                My Wishlist
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {getWishlistCount()} {getWishlistCount() === 1 ? 'item' : 'items'} saved
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleAddAllToCart}
                className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add All to Cart
              </button>
              <button
                onClick={clearWishlist}
                className="inline-flex items-center px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-colors duration-200"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All
              </button>
              <button className="inline-flex items-center px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-colors duration-200">
                <Share2 className="w-4 h-4 mr-2" />
                Share Wishlist
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${
                    viewMode === 'grid'
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${
                    viewMode === 'list'
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Wishlist Items */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedItems.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard product={product} />
                {/* Remove from wishlist button overlay */}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-2 left-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200 shadow-lg z-10"
                >
                  <Heart className="w-4 h-4 fill-current" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {sortedItems.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
              >
                <div className="flex items-start space-x-6">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-32 h-32 rounded-xl object-cover hover:opacity-80 transition-opacity duration-200"
                      />
                    </Link>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">
                          {product.category}
                        </p>
                        <Link to={`/product/${product.id}`}>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                            {product.name}
                          </h3>
                        </Link>
                        
                        <div className="flex items-center space-x-2 mb-3">
                          <img
                            src={product.artisan.avatar}
                            alt={product.artisan.name}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            by {product.artisan.name}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-500">
                            • {product.artisan.location}
                          </span>
                        </div>

                        <div className="flex items-center space-x-1 mb-4">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating)
                                    ? 'text-warning-400 fill-current'
                                    : 'text-gray-300 dark:text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {product.rating} ({product.reviewCount})
                          </span>
                        </div>

                        <div className="flex items-center space-x-2 mb-4">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            ₹{product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>

                        {!product.inStock && (
                          <span className="inline-block bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 text-sm font-medium px-3 py-1 rounded-full">
                            Out of Stock
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col space-y-3 ml-6">
                        <button
                          onClick={() => handleAddToCart(product.id)}
                          disabled={!product.inStock}
                          className="px-6 py-3 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white font-semibold rounded-xl transition-colors duration-200 disabled:cursor-not-allowed flex items-center"
                        >
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                        <button
                          onClick={() => removeFromWishlist(product.id)}
                          className="px-6 py-3 bg-red-100 dark:bg-red-900/20 hover:bg-red-200 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400 font-medium rounded-xl transition-colors duration-200 flex items-center"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Remove
                        </button>
                        <button className="px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-colors duration-200 flex items-center">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recommendations */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            You might also like
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Browse our products to see recommendations based on your wishlist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;