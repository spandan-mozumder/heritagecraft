import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Package } from 'lucide-react';
import { Artisan } from '../types';

interface ArtisanCardProps {
  artisan: Artisan;
}

const ArtisanCard: React.FC<ArtisanCardProps> = ({ artisan }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
      {/* Artisan Avatar */}
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 flex items-center justify-center">
          <img
            src={artisan.avatar}
            alt={artisan.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Artisan Info */}
      <div className="p-6">
        <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-2">
          {artisan.name}
        </h3>

        <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400 mb-2">
          <MapPin className="w-4 h-4" />
          <span>{artisan.location}</span>
        </div>

        <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-3">
          {artisan.speciality}
        </p>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {artisan.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-warning-400" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {artisan.rating}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Package className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {artisan.products} Products
            </span>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={`/artisan/${artisan.id}`}
          className="w-full py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors duration-200 text-center block"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default ArtisanCard;