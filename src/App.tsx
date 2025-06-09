import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import CartNotification from './components/CartNotification';
import WishlistNotification from './components/WishlistNotification';
import { useCart } from './contexts/CartContext';
import { useWishlist } from './contexts/WishlistContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ArtisansPage from './pages/ArtisansPage';
import ArtisanProfilePage from './pages/ArtisanProfilePage';
import CategoriesPage from './pages/CategoriesPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ArtisanRegisterPage from './pages/ArtisanRegisterPage';
import AccountOptionsPage from './pages/AccountOptionsPage';
import ArtisanDashboard from './pages/artisan/ArtisanDashboard';
import ArtisanProducts from './pages/artisan/ArtisanProducts';
import AddProductPage from './pages/artisan/AddProductPage';
import EditProductPage from './pages/artisan/EditProductPage';
import ArtisanOrders from './pages/artisan/ArtisanOrders';
import ArtisanProfile from './pages/artisan/ArtisanProfile';
import ArtisanPayments from './pages/artisan/ArtisanPayments';
import ArtisanInventory from './pages/artisan/ArtisanInventory';
import ArtisanAnalytics from './pages/artisan/ArtisanAnalytics';
import ArtisanReviews from './pages/artisan/ArtisanReviews';

const AppContent: React.FC = () => {
  const { showNotification, lastAddedProduct, hideNotification } = useCart();
  const { showWishlistNotification, lastWishlistAction, hideWishlistNotification } = useWishlist();

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/artisans" element={<ArtisansPage />} />
            <Route path="/artisan/:id" element={<ArtisanProfilePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/account" element={<AccountOptionsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/artisan/register" element={<ArtisanRegisterPage />} />
            
            {/* Protected Artisan Routes */}
            <Route 
              path="/artisan/dashboard" 
              element={
                <ProtectedRoute requireArtisan={true}>
                  <ArtisanDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/artisan/products" 
              element={
                <ProtectedRoute requireArtisan={true}>
                  <ArtisanProducts />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/artisan/products/add" 
              element={
                <ProtectedRoute requireArtisan={true}>
                  <AddProductPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/artisan/products/edit/:id" 
              element={
                <ProtectedRoute requireArtisan={true}>
                  <EditProductPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/artisan/orders" 
              element={
                <ProtectedRoute requireArtisan={true}>
                  <ArtisanOrders />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/artisan/inventory" 
              element={
                <ProtectedRoute requireArtisan={true}>
                  <ArtisanInventory />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/artisan/analytics" 
              element={
                <ProtectedRoute requireArtisan={true}>
                  <ArtisanAnalytics />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/artisan/reviews" 
              element={
                <ProtectedRoute requireArtisan={true}>
                  <ArtisanReviews />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/artisan/profile" 
              element={
                <ProtectedRoute requireArtisan={true}>
                  <ArtisanProfile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/artisan/payments" 
              element={
                <ProtectedRoute requireArtisan={true}>
                  <ArtisanPayments />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
      
      {/* Notifications */}
      <CartNotification
        isVisible={showNotification}
        productName={lastAddedProduct}
        onClose={hideNotification}
      />
      <WishlistNotification
        isVisible={showWishlistNotification}
        action={lastWishlistAction}
        onClose={hideWishlistNotification}
      />
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <AuthProvider>
            <Router>
              <AppContent />
            </Router>
          </AuthProvider>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;