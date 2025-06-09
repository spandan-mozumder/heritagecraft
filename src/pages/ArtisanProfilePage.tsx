import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Star, 
  Package, 
  Calendar, 
  Award, 
  Heart,
  Share2,
  MessageCircle,
  ArrowLeft,
  Filter,
  Grid,
  List,
  Phone,
  Mail,
  Globe,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { mockArtisans, mockProducts } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const ArtisanProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('products');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  // Find the artisan by ID (in a real app, this would be an API call)
  const artisan = mockArtisans.find(a => a.id === id) || mockArtisans[0];
  
  // Get products by this artisan
  const artisanProducts = mockProducts.filter(product => product.artisan.id === artisan.id);

  const stats = [
    { label: 'Products', value: artisan.products, icon: Package },
    { label: 'Rating', value: artisan.rating, icon: Star },
    { label: 'Years Active', value: '15+', icon: Calendar },
    { label: 'Orders', value: '1,200+', icon: Award },
  ];

  const reviews = [
    {
      id: '1',
      customer: 'Priya Sharma',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      comment: 'Absolutely beautiful craftsmanship! The attention to detail is incredible.',
      date: '2024-01-15',
      product: 'Blue Pottery Vase'
    },
    {
      id: '2',
      customer: 'Rahul Kumar',
      avatar: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      comment: 'Excellent quality and fast delivery. Highly recommend this artisan!',
      date: '2024-01-12',
      product: 'Decorative Plate'
    },
    {
      id: '3',
      customer: 'Anita Patel',
      avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4,
      comment: 'Beautiful work, though delivery took a bit longer than expected.',
      date: '2024-01-10',
      product: 'Traditional Bowl'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white py-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              to="/artisans"
              className="inline-flex items-center text-primary-100 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Artisans
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Artisan Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="relative">
                  <img
                    src={artisan.avatar}
                    alt={artisan.name}
                    className="w-32 h-32 rounded-2xl object-cover border-4 border-white/20 shadow-2xl"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="flex-1">
                  <h1 className="text-4xl font-bold mb-4">{artisan.name}</h1>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-primary-200" />
                      <span className="text-primary-100">{artisan.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Package className="w-5 h-5 text-primary-200" />
                      <span className="text-primary-100">{artisan.speciality}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-primary-100">{artisan.rating} Rating</span>
                    </div>
                  </div>
                  <p className="text-primary-100 text-lg leading-relaxed mb-6">
                    {artisan.description}
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <button className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg">
                      <MessageCircle className="w-5 h-5 inline mr-2" />
                      Contact Artisan
                    </button>
                    <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors duration-200">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors duration-200">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-primary-200 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'products', label: 'Products', count: artisanProducts.length },
                { id: 'about', label: 'About' },
                { id: 'reviews', label: 'Reviews', count: reviews.length },
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
            {/* Products Tab */}
            {activeTab === 'products' && (
              <div>
                {/* Products Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Products by {artisan.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {artisanProducts.length} products available
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
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

                {/* Products Grid */}
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {artisanProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}

            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    About {artisan.name}
                  </h3>
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {artisan.description} With over 15 years of experience in traditional {artisan.speciality.toLowerCase()}, 
                      {artisan.name} has mastered the ancient techniques passed down through generations. Based in {artisan.location}, 
                      they continue to preserve and innovate within their craft, creating pieces that blend traditional artistry 
                      with contemporary appeal.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                      Their work has been recognized nationally and internationally, with pieces featured in museums and 
                      private collections around the world. They are committed to sustainable practices and supporting 
                      their local artisan community through knowledge sharing and collaborative projects.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Specializations
                    </h4>
                    <div className="space-y-2">
                      {['Traditional Blue Pottery', 'Decorative Ceramics', 'Custom Designs', 'Restoration Work'].map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-400">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Contact Information
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">+91 98765 43210</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">rajesh@example.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">www.rajeshpottery.com</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                        Follow on Social Media
                      </h5>
                      <div className="flex space-x-3">
                        <button className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors duration-200">
                          <Facebook className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-pink-100 dark:bg-pink-900/20 text-pink-600 rounded-xl hover:bg-pink-200 dark:hover:bg-pink-900/40 transition-colors duration-200">
                          <Instagram className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-500 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors duration-200">
                          <Twitter className="w-5 h-5" />
                        </button>
                      </div>
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
                          {artisan.rating}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          ({reviews.length} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
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
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">
                                {review.customer}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Purchased: {review.product}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center">
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
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {new Date(review.date).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfilePage;