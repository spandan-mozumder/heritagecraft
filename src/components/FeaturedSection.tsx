import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import ArtisanCard from './ArtisanCard';
import CategoryCard from './CategoryCard';
import { mockProducts, mockArtisans, mockCategories } from '../data/mockData';

const FeaturedSection: React.FC = () => {
  const featuredProducts = mockProducts.slice(0, 4);
  const featuredArtisans = mockArtisans.slice(0, 4);
  const featuredCategories = mockCategories.slice(0, 6);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Featured Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Explore Craft Categories
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Discover the rich diversity of Indian handicrafts
              </p>
            </div>
            <button className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors duration-200">
              View All Categories
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Bestselling Products
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Handpicked favorites loved by our customers
              </p>
            </div>
            <button className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors duration-200">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Artisans
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Meet the talented craftspeople behind our beautiful products
              </p>
            </div>
            <button className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors duration-200">
              Meet All Artisans
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredArtisans.map((artisan) => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose HeritageCraft?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              We're committed to preserving India's rich craft traditions while empowering artisans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary-500 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Authentic Craftsmanship
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every product is handcrafted by skilled artisans using traditional techniques passed down through generations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-secondary-500 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Direct Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your purchase directly supports artisan families and helps preserve traditional craft forms.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-accent-500 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Quality Guarantee
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We ensure every product meets our high standards for quality, authenticity, and craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedSection;