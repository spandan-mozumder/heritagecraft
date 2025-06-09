import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Tag, Clock, Eye, Heart, Share2, Filter } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'All Posts',
    'Craft Techniques',
    'Artisan Stories',
    'Cultural Heritage',
    'Sustainability',
    'Behind the Scenes',
    'Product Spotlights'
  ];

  const blogPosts = [
    {
      id: '1',
      title: 'The Ancient Art of Blue Pottery: A Journey Through Rajasthan',
      excerpt: 'Discover the fascinating history and intricate techniques behind Rajasthan\'s famous blue pottery, a craft that has been passed down through generations.',
      content: 'Blue pottery is a traditional craft of Rajasthan that dates back to the Mughal era...',
      author: 'Priya Sharma',
      authorImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Craft Techniques',
      image: 'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['pottery', 'rajasthan', 'traditional-crafts'],
      views: 1250,
      likes: 89,
      featured: true
    },
    {
      id: '2',
      title: 'Meet Rajesh Kumar: Master Potter Preserving Ancient Traditions',
      excerpt: 'An inspiring story of how Rajesh Kumar is keeping the art of blue pottery alive while adapting to modern market demands.',
      content: 'In the heart of Jaipur, Rajesh Kumar continues a family tradition that spans five generations...',
      author: 'Anita Patel',
      authorImage: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Artisan Stories',
      image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['artisan-profile', 'pottery', 'tradition'],
      views: 980,
      likes: 67,
      featured: false
    },
    {
      id: '3',
      title: 'Sustainable Crafting: How Traditional Methods Support Environmental Conservation',
      excerpt: 'Explore how traditional Indian crafts naturally incorporate sustainable practices and support environmental conservation.',
      content: 'Traditional Indian crafts have always been inherently sustainable...',
      author: 'Vikram Singh',
      authorImage: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['sustainability', 'environment', 'traditional-methods'],
      views: 1450,
      likes: 112,
      featured: true
    },
    {
      id: '4',
      title: 'The Intricate World of Kashmiri Pashmina Weaving',
      excerpt: 'Delve into the meticulous process of creating the world\'s finest pashmina shawls in the valleys of Kashmir.',
      content: 'High in the mountains of Kashmir, artisans create some of the world\'s finest textiles...',
      author: 'Meera Devi',
      authorImage: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Craft Techniques',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['pashmina', 'kashmir', 'weaving'],
      views: 890,
      likes: 54,
      featured: false
    },
    {
      id: '5',
      title: 'From Clay to Art: Behind the Scenes at Our Pottery Workshop',
      excerpt: 'Take a virtual tour of our pottery workshop and see how raw clay transforms into beautiful, functional art pieces.',
      content: 'Step into our pottery workshop where magic happens every day...',
      author: 'Rajesh Kumar',
      authorImage: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2024-01-05',
      readTime: '5 min read',
      category: 'Behind the Scenes',
      image: 'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['pottery', 'workshop', 'process'],
      views: 720,
      likes: 43,
      featured: false
    },
    {
      id: '6',
      title: 'The Cultural Significance of Gond Art in Modern India',
      excerpt: 'Understanding how Gond art continues to play a vital role in preserving tribal culture and storytelling traditions.',
      content: 'Gond art is more than just beautiful paintings; it\'s a window into tribal culture...',
      author: 'Priya Sharma',
      authorImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Cultural Heritage',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['gond-art', 'tribal-culture', 'heritage'],
      views: 1100,
      likes: 78,
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-500 via-accent-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Craft Stories &
              <span className="block text-accent-200">Cultural Insights</span>
            </h1>
            <p className="text-xl text-accent-100 max-w-3xl mx-auto mb-8">
              Dive deep into the world of Indian handicrafts. Discover artisan stories, 
              learn traditional techniques, and explore the rich cultural heritage behind every craft.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search articles, techniques, or artisan stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {searchQuery === '' && selectedCategory === 'all' && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Featured Stories
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredPosts.map((post) => (
                    <article key={post.id} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <img
                              src={post.authorImage}
                              alt={post.author}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">
                                {post.author}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {new Date(post.date).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <button className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Filters */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category === 'All Posts' ? 'all' : category)}
                      className={`px-4 py-2 rounded-xl font-medium transition-colors duration-200 ${
                        (selectedCategory === 'all' && category === 'All Posts') || selectedCategory === category
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {filteredPosts.length} articles found
                </p>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.views}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-lg"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {post.author}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(post.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors duration-200">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200">
                            <Share2 className="w-4 h-4" />
                          </button>
                          <button className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-200 shadow-sm">
                  Load More Articles
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Posts */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex space-x-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">
                Stay Updated
              </h3>
              <p className="text-primary-100 mb-4 text-sm">
                Get the latest stories about crafts, artisans, and cultural heritage delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
                />
                <button className="w-full py-2 bg-white text-primary-600 font-medium rounded-xl hover:bg-gray-50 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {['pottery', 'weaving', 'traditional-crafts', 'artisan-stories', 'sustainability', 'heritage', 'techniques', 'culture'].map((tag) => (
                  <button
                    key={tag}
                    className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900/20 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium rounded-lg transition-colors duration-200"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;