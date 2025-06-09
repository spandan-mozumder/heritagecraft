import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  Heart, 
  Share2, 
  ShoppingBag, 
  MapPin, 
  Shield, 
  Truck, 
  RotateCcw, 
  Award,
  Plus,
  Minus,
  MessageCircle,
  Eye,
  ThumbsUp,
  ChevronLeft,
  ChevronRight,
  Palette,
  Package,
  Calendar
} from 'lucide-react';
import { mockProducts } from '../data/mockData';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Find the product by ID (in a real app, this would be an API call)
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];
  
  // Get related products (same category, different artisan)
  const relatedProducts = mockProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Mock additional product images
  const productImages = [
    product.image,
    product.image, // In real app, these would be different angles
    product.image,
    product.image
  ];

  // Mock product reviews
  const reviews = [
    {
      id: '1',
      customer: 'Priya Sharma',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      comment: 'Absolutely beautiful craftsmanship! The quality exceeded my expectations. The colors are vibrant and the finish is perfect.',
      date: '2024-01-15',
      verified: true,
      helpful: 12
    },
    {
      id: '2',
      customer: 'Rahul Kumar',
      avatar: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4,
      comment: 'Great product! Delivery was fast and packaging was excellent. Slightly smaller than expected but still very happy with the purchase.',
      date: '2024-01-12',
      verified: true,
      helpful: 8
    },
    {
      id: '3',
      customer: 'Anita Patel',
      avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      comment: 'This is my second purchase from this artisan. Consistently excellent quality and authentic traditional work.',
      date: '2024-01-10',
      verified: true,
      helpful: 15
    }
  ];

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <Link to={`/categories/${product.category}`} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              {product.category}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 dark:text-white">{product.name}</span>
          </nav>
          
          <Link
            to="/products"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium mt-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images - Increased Size */}
          <div className="space-y-4">
            {/* Main Image Carousel - Increased Size */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 max-w-lg mx-auto">
              <div className="aspect-square relative w-full h-96">
                <img
                  src={productImages[selectedImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Navigation */}
                {productImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 shadow-lg"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 shadow-lg"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Sale Badge */}
                {product.originalPrice && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                )}

                {/* Wishlist & Share */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                  <button
                    onClick={handleWishlistToggle}
                    className={`p-2 rounded-full transition-colors duration-200 shadow-lg ${
                      isInWishlist(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/90 dark:bg-gray-800/90 text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 bg-white/90 dark:bg-gray-800/90 text-gray-600 dark:text-gray-400 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 shadow-lg">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Image Indicators */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        selectedImageIndex === index
                          ? 'bg-white'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Thumbnail Images - Increased Size */}
            <div className="grid grid-cols-4 gap-3 max-w-lg mx-auto">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                    selectedImageIndex === index
                      ? 'border-primary-500'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                  {product.category}
                </span>
                {product.inStock ? (
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                    In Stock
                  </span>
                ) : (
                  <span className="text-sm text-red-600 dark:text-red-400 font-medium">
                    Out of Stock
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-400">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 dark:text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    Save ₹{(product.originalPrice - product.price).toLocaleString()}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Artisan Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Meet the Artisan
              </h3>
              <div className="flex items-center space-x-4">
                <img
                  src={product.artisan.avatar}
                  alt={product.artisan.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {product.artisan.name}
                  </h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{product.artisan.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Palette className="w-4 h-4" />
                      <span>{product.artisan.speciality}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {product.artisan.rating} • {product.artisan.products} products
                    </span>
                  </div>
                </div>
                <Link
                  to={`/artisan/${product.artisan.id}`}
                  className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors duration-200"
                >
                  View Profile
                </Link>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Quantity:</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-colors duration-200"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium text-gray-900 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 py-4 px-6 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
                <button className="px-6 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-200">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <Shield className="w-6 h-6 text-green-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">Authentic</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Handcrafted</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <Truck className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">Free Shipping</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">On orders ₹999+</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <RotateCcw className="w-6 h-6 text-orange-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">Easy Returns</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">7-day return</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <Award className="w-6 h-6 text-purple-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">Quality</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 mb-16">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'description', label: 'Description' },
                { id: 'specifications', label: 'Specifications' },
                { id: 'reviews', label: 'Reviews', count: reviews.length },
                { id: 'shipping', label: 'Shipping & Returns' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <span>{tab.label}</span>
                  {tab.count && (
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Description Tab */}
            {activeTab === 'description' && (
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Product Description
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {product.description} This exquisite piece represents the finest in traditional Indian craftsmanship, 
                  meticulously created by skilled artisans using time-honored techniques passed down through generations.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Each item is unique and may have slight variations that add to its authentic, handcrafted character. 
                  The materials used are carefully selected for their quality and sustainability, ensuring that your 
                  purchase supports both traditional craftsmanship and environmental responsibility.
                </p>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Craftsmanship Details
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Handcrafted using traditional techniques</li>
                  <li>Made with premium quality materials</li>
                  <li>Each piece is unique with natural variations</li>
                  <li>Supports local artisan communities</li>
                  <li>Eco-friendly and sustainable production</li>
                </ul>
              </div>
            )}

            {/* Specifications Tab */}
            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Product Specifications
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-900 dark:text-white">Category</span>
                      <span className="text-gray-600 dark:text-gray-400">{product.category}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-900 dark:text-white">Material</span>
                      <span className="text-gray-600 dark:text-gray-400">Traditional Clay/Ceramic</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-900 dark:text-white">Dimensions</span>
                      <span className="text-gray-600 dark:text-gray-400">15cm x 15cm x 20cm</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-900 dark:text-white">Weight</span>
                      <span className="text-gray-600 dark:text-gray-400">800g</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-900 dark:text-white">Origin</span>
                      <span className="text-gray-600 dark:text-gray-400">{product.artisan.location}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-900 dark:text-white">Technique</span>
                      <span className="text-gray-600 dark:text-gray-400">{product.artisan.speciality}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-900 dark:text-white">Care Instructions</span>
                      <span className="text-gray-600 dark:text-gray-400">Hand wash only</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-900 dark:text-white">Warranty</span>
                      <span className="text-gray-600 dark:text-gray-400">1 year</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Customer Reviews
                    </h3>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">
                          {product.rating}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          ({product.reviewCount} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors duration-200">
                    Write a Review
                  </button>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={review.avatar}
                          alt={review.customer}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <h4 className="font-semibold text-gray-900 dark:text-white">
                                {review.customer}
                              </h4>
                              {review.verified && (
                                <span className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 text-xs font-medium px-2 py-1 rounded-full">
                                  Verified Purchase
                                </span>
                              )}
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300 dark:text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                          
                          <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {review.comment}
                          </p>
                          
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                              <ThumbsUp className="w-4 h-4" />
                              <span className="text-sm">Helpful ({review.helpful})</span>
                            </button>
                            <button className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Shipping Tab */}
            {activeTab === 'shipping' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    Shipping Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Truck className="w-6 h-6 text-blue-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Standard Delivery
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Free shipping on orders over ₹999. Delivery within 5-7 business days.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Package className="w-6 h-6 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Express Delivery
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            ₹99 shipping charge. Delivery within 2-3 business days.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Shield className="w-6 h-6 text-purple-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Secure Packaging
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            All items are carefully packaged to ensure safe delivery.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Eye className="w-6 h-6 text-orange-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Order Tracking
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Track your order status with real-time updates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    Returns & Exchanges
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <RotateCcw className="w-6 h-6 text-blue-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            7-Day Return Policy
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Return items within 7 days of delivery for a full refund. Items must be in original condition.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Calendar className="w-6 h-6 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Easy Return Process
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Contact our customer service team to initiate a return. We'll arrange pickup at no extra cost.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Related Products
              </h2>
              <Link
                to={`/products?category=${product.category}`}
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;