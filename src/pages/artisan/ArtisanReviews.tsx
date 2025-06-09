import React, { useState } from 'react';
import { 
  Star, 
  Search, 
  Filter, 
  MessageCircle, 
  ThumbsUp, 
  ThumbsDown,
  Flag,
  Reply,
  MoreHorizontal,
  TrendingUp,
  Award,
  Users,
  Calendar,
  Download,
  Eye,
  Heart,
  Share2
} from 'lucide-react';

const ArtisanReviews: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRating, setFilterRating] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedReview, setSelectedReview] = useState<string | null>(null);

  const reviews = [
    {
      id: '1',
      customer: {
        name: 'Priya Sharma',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
        verified: true,
        location: 'Mumbai, Maharashtra'
      },
      product: {
        name: 'Blue Pottery Decorative Vase',
        image: 'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=100',
        sku: 'BPV-001'
      },
      rating: 5,
      title: 'Absolutely Beautiful Craftsmanship!',
      comment: 'This vase exceeded my expectations! The intricate blue pottery work is stunning, and the quality is exceptional. It\'s become the centerpiece of my living room. The packaging was also very secure. Highly recommend this artisan\'s work!',
      date: '2024-01-15',
      helpful: 12,
      images: [
        'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=200',
        'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=200'
      ],
      response: {
        message: 'Thank you so much for your kind words, Priya! I\'m delighted that the vase has found a special place in your home. Your appreciation means the world to me.',
        date: '2024-01-16'
      },
      tags: ['quality', 'packaging', 'beautiful']
    },
    {
      id: '2',
      customer: {
        name: 'Rahul Kumar',
        avatar: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=100',
        verified: true,
        location: 'Delhi, India'
      },
      product: {
        name: 'Handwoven Silk Saree',
        image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=100',
        sku: 'HSS-002'
      },
      rating: 4,
      title: 'Beautiful saree, minor delivery delay',
      comment: 'The saree is gorgeous and the silk quality is excellent. My wife loves it! The only issue was a slight delay in delivery, but the product quality makes up for it. The traditional patterns are authentic and well-crafted.',
      date: '2024-01-12',
      helpful: 8,
      images: [],
      response: {
        message: 'Thank you for your feedback, Rahul! I apologize for the delivery delay and will work with our logistics partner to improve this. I\'m glad your wife loves the saree!',
        date: '2024-01-13'
      },
      tags: ['quality', 'authentic', 'delivery']
    },
    {
      id: '3',
      customer: {
        name: 'Anita Patel',
        avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100',
        verified: false,
        location: 'Ahmedabad, Gujarat'
      },
      product: {
        name: 'Carved Wooden Elephant',
        image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=100',
        sku: 'CWE-003'
      },
      rating: 5,
      title: 'Perfect gift for my mother',
      comment: 'Bought this as a gift for my mother and she absolutely loves it! The carving details are incredible and you can see the craftsmanship in every curve. Fast shipping and excellent customer service.',
      date: '2024-01-10',
      helpful: 15,
      images: [
        'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=200'
      ],
      response: null,
      tags: ['gift', 'craftsmanship', 'service']
    },
    {
      id: '4',
      customer: {
        name: 'Vikram Singh',
        avatar: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=100',
        verified: true,
        location: 'Jaipur, Rajasthan'
      },
      product: {
        name: 'Brass Oil Lamp Set',
        image: 'https://images.pexels.com/photos/1813124/pexels-photo-1813124.jpeg?auto=compress&cs=tinysrgb&w=100',
        sku: 'BOL-004'
      },
      rating: 3,
      title: 'Good quality but smaller than expected',
      comment: 'The brass work is good and the lamps are well-made. However, they are smaller than I expected from the photos. The description could be more detailed about dimensions. Overall satisfied with the purchase.',
      date: '2024-01-08',
      helpful: 5,
      images: [],
      response: {
        message: 'Thank you for your honest feedback, Vikram. I\'ll update the product description with more detailed dimensions to help future customers. I appreciate your understanding!',
        date: '2024-01-09'
      },
      tags: ['quality', 'size', 'description']
    },
    {
      id: '5',
      customer: {
        name: 'Meera Devi',
        avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100',
        verified: true,
        location: 'Chennai, Tamil Nadu'
      },
      product: {
        name: 'Gond Art Canvas Painting',
        image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=100',
        sku: 'GAP-005'
      },
      rating: 5,
      title: 'Stunning artwork!',
      comment: 'This Gond painting is absolutely stunning! The colors are vibrant and the traditional motifs are beautifully executed. It\'s now the highlight of our art collection. Excellent work!',
      date: '2024-01-05',
      helpful: 20,
      images: [
        'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=200'
      ],
      response: {
        message: 'Thank you so much, Meera! It brings me great joy to know that the painting has found a special place in your collection. Your support means everything!',
        date: '2024-01-06'
      },
      tags: ['artwork', 'colors', 'traditional']
    }
  ];

  const reviewStats = {
    totalReviews: reviews.length,
    averageRating: 4.4,
    ratingDistribution: {
      5: 60,
      4: 20,
      3: 15,
      2: 3,
      1: 2
    },
    responseRate: 80,
    helpfulVotes: reviews.reduce((sum, review) => sum + review.helpful, 0)
  };

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = 
      review.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRating = filterRating === 'all' || review.rating.toString() === filterRating;
    return matchesSearch && matchesRating;
  });

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'text-green-600';
    if (rating >= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Customer Reviews
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Manage and respond to customer feedback
              </p>
            </div>
            <button className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
              <Download className="w-5 h-5 mr-2" />
              Export Reviews
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Total Reviews</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {reviewStats.totalReviews}
                </p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Average Rating</p>
                <div className="flex items-center space-x-2">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {reviewStats.averageRating}
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(reviewStats.averageRating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Response Rate</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {reviewStats.responseRate}%
                </p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <Reply className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Helpful Votes</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {reviewStats.helpfulVotes}
                </p>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                <ThumbsUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Rating Distribution */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Rating Distribution
            </h3>
            <div className="space-y-3">
              {Object.entries(reviewStats.ratingDistribution)
                .reverse()
                .map(([rating, percentage]) => (
                  <div key={rating} className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm font-medium text-gray-900 dark:text-white w-2">
                        {rating}
                      </span>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-primary-500 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 w-8">
                      {percentage}%
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filters */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search reviews..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 w-64"
                    />
                  </div>
                  
                  <select
                    value={filterRating}
                    onChange={(e) => setFilterRating(e.target.value)}
                    className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">All Ratings</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="highest">Highest Rating</option>
                    <option value="lowest">Lowest Rating</option>
                    <option value="helpful">Most Helpful</option>
                  </select>
                </div>

                <p className="text-gray-600 dark:text-gray-400">
                  {filteredReviews.length} reviews found
                </p>
              </div>
            </div>

            {/* Reviews */}
            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
                >
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={review.customer.avatar}
                        alt={review.customer.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {review.customer.name}
                          </h4>
                          {review.customer.verified && (
                            <span className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 text-xs font-medium px-2 py-1 rounded-full">
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {review.customer.location}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
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
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="flex items-center space-x-3 mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <img
                      src={review.product.image}
                      alt={review.product.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white text-sm">
                        {review.product.name}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        SKU: {review.product.sku}
                      </p>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {review.title}
                    </h5>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {review.comment}
                    </p>
                  </div>

                  {/* Review Images */}
                  {review.images.length > 0 && (
                    <div className="flex space-x-2 mb-4">
                      {review.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Review image ${index + 1}`}
                          className="w-20 h-20 rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200"
                        />
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {review.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-400 text-xs font-medium rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Review Actions */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors duration-200">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">{review.helpful}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors duration-200">
                        <Flag className="w-4 h-4" />
                        <span className="text-sm">Report</span>
                      </button>
                    </div>
                    {!review.response && (
                      <button className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors duration-200">
                        <Reply className="w-4 h-4 mr-2" />
                        Respond
                      </button>
                    )}
                  </div>

                  {/* Artisan Response */}
                  {review.response && (
                    <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-500 p-4 rounded-r-xl">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">R</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-medium text-primary-800 dark:text-primary-200">
                              Rajesh Kumar (Artisan)
                            </span>
                            <span className="text-sm text-primary-600 dark:text-primary-400">
                              {new Date(review.response.date).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-primary-700 dark:text-primary-300">
                            {review.response.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Load More */}
            {filteredReviews.length > 0 && (
              <div className="text-center">
                <button className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-200 shadow-sm">
                  Load More Reviews
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanReviews;