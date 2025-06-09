export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  artisan: Artisan;
  category: string;
  rating: number;
  reviewCount: number;
  description: string;
  inStock: boolean;
}

export interface Artisan {
  id: string;
  name: string;
  location: string;
  avatar: string;
  speciality: string;
  rating: number;
  products: number;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}