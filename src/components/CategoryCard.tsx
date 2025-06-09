import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
      <div className="aspect-w-16 aspect-h-12">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white font-bold text-xl mb-2">{category.name}</h3>
        <p className="text-white/90 text-sm mb-2">{category.description}</p>
        <p className="text-white/80 text-sm">
          {category.productCount} products available
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;