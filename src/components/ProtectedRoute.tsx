import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { AlertCircle, Lock, Loader } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireArtisan?: boolean;
  requireAuth?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireArtisan = false, 
  requireAuth = true 
}) => {
  const { isAuthenticated, isArtisan, user, isLoading } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-8 h-8 text-primary-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // If authentication is required but user is not authenticated
  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If artisan access is required but user is not an artisan
  if (requireArtisan && (!isAuthenticated || !isArtisan)) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                <Lock className="w-10 h-10 text-red-600 dark:text-red-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Access Restricted
            </h2>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">
                  Artisan Account Required
                </h3>
              </div>
              <p className="text-red-700 dark:text-red-300 mb-4">
                This page is only accessible to registered artisans. You need to have an artisan account to access the artisan dashboard and management tools.
              </p>
              {!isAuthenticated ? (
                <p className="text-red-600 dark:text-red-400 text-sm">
                  Please sign in with an artisan account to continue.
                </p>
              ) : (
                <p className="text-red-600 dark:text-red-400 text-sm">
                  Your current account ({user?.email}) is registered as a customer. 
                  You need an artisan account to access these features.
                </p>
              )}
            </div>
            
            <div className="space-y-4">
              {!isAuthenticated ? (
                <>
                  <button
                    onClick={() => window.location.href = '/login'}
                    className="w-full py-3 px-6 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Sign In as Artisan
                  </button>
                  <button
                    onClick={() => window.location.href = '/artisan/register'}
                    className="w-full py-3 px-6 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-200"
                  >
                    Register as Artisan
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => window.location.href = '/artisan/register'}
                    className="w-full py-3 px-6 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Register Artisan Account
                  </button>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="w-full py-3 px-6 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-xl transition-colors duration-200"
                  >
                    Back to Home
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;