import React from 'react';
import { Link } from 'react-router-dom';
import { User, Palette, ArrowRight, Shield, Heart, Package } from 'lucide-react';

const AccountOptionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-3xl">H</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to HeritageCraft
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose how you'd like to join our community of craft enthusiasts and talented artisans
          </p>
        </div>

        {/* Account Type Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Customer Card */}
          <div className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <User className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>

              {/* Title */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  I'm a Customer
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Discover and purchase authentic Indian handicrafts
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <Package className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Browse thousands of unique products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Support traditional artisans directly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Secure payments and quality guarantee</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <Link
                  to="/login"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl group"
                >
                  Sign In
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/register"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-600 transition-colors duration-200"
                >
                  Create Account
                </Link>
              </div>

              {/* Additional Info */}
              <p className="text-sm text-gray-500 dark:text-gray-400 pt-2">
                Join thousands of customers who love authentic crafts
              </p>
            </div>
          </div>

          {/* Artisan Card */}
          <div className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-accent-200 dark:from-secondary-900 dark:to-accent-800 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
              </div>

              {/* Title */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  I'm an Artisan
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Share your craft with the world and grow your business
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <Package className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Showcase your products globally</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Connect directly with customers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Secure payments and seller protection</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <Link
                  to="/login"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl group"
                >
                  Sign In
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/artisan/register"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-600 transition-colors duration-200"
                >
                  Join as Artisan
                </Link>
              </div>

              {/* Additional Info */}
              <p className="text-sm text-gray-500 dark:text-gray-400 pt-2">
                Join 500+ artisans already selling on our platform
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center space-y-6 pt-8">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-500">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Artisans</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-500">2000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-500">28</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">States</div>
            </div>
          </div>

          {/* Browse as Guest */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Want to explore first?
            </p>
            <Link
              to="/"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
            >
              Browse as Guest
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Footer */}
          <div className="text-center pt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              By continuing, you agree to our{' '}
              <Link to="/terms" className="text-primary-600 dark:text-primary-400 hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOptionsPage;