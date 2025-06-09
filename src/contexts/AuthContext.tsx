import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'customer' | 'artisan';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isArtisan: boolean;
  isLoading: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  register: (userData: any, role: UserRole) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on app load
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const savedUser = localStorage.getItem('heritagecraft_user');
        const sessionExpiry = localStorage.getItem('heritagecraft_session_expiry');
        
        if (savedUser && sessionExpiry) {
          const expiryTime = parseInt(sessionExpiry);
          const currentTime = Date.now();
          
          // Check if session is still valid (24 hours)
          if (currentTime < expiryTime) {
            const userData = JSON.parse(savedUser);
            setUser(userData);
          } else {
            // Session expired, clear storage
            localStorage.removeItem('heritagecraft_user');
            localStorage.removeItem('heritagecraft_session_expiry');
          }
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        localStorage.removeItem('heritagecraft_user');
        localStorage.removeItem('heritagecraft_session_expiry');
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Determine the actual role based on email and provided role
      let actualRole: UserRole = role;
      
      // Special handling for demo accounts
      if (email === 'customer@demo.com') {
        actualRole = 'customer';
      } else if (email === 'artisan@demo.com') {
        actualRole = 'artisan';
      }
      
      // Demo credentials check
      const isValidLogin = (
        (email === 'customer@demo.com' && password === 'password') ||
        (email === 'artisan@demo.com' && password === 'password') ||
        password === 'password' // Allow any email with password "password" for demo
      );

      if (!isValidLogin) {
        return false;
      }
      
      // Mock authentication - in real app, this would be an API call
      const mockUser: User = {
        id: actualRole === 'artisan' ? 'artisan_1' : 'customer_1',
        name: actualRole === 'artisan' ? 'Rajesh Kumar' : 'John Doe',
        email: email,
        role: actualRole,
        avatar: actualRole === 'artisan' 
          ? 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=200'
          : 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=200'
      };

      // Set session expiry to 24 hours from now
      const expiryTime = Date.now() + (24 * 60 * 60 * 1000);

      setUser(mockUser);
      localStorage.setItem('heritagecraft_user', JSON.stringify(mockUser));
      localStorage.setItem('heritagecraft_session_expiry', expiryTime.toString());
      
      console.log('Login successful:', mockUser); // Debug log
      
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const register = async (userData: any, role: UserRole): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock registration - in real app, this would be an API call
      const newUser: User = {
        id: role === 'artisan' ? `artisan_${Date.now()}` : `customer_${Date.now()}`,
        name: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        role: role,
        avatar: role === 'artisan' 
          ? 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=200'
          : 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=200'
      };

      // Set session expiry to 24 hours from now
      const expiryTime = Date.now() + (24 * 60 * 60 * 1000);

      setUser(newUser);
      localStorage.setItem('heritagecraft_user', JSON.stringify(newUser));
      localStorage.setItem('heritagecraft_session_expiry', expiryTime.toString());
      
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('heritagecraft_user');
    localStorage.removeItem('heritagecraft_session_expiry');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isArtisan: user?.role === 'artisan',
    isLoading,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};