import { createContext, useContext, useState, useEffect } from 'react';

// Demo mode toggle - set to false when reqres.in API is working
export const DEMO_MODE = true;

// Create Auth Context
const AuthContext = createContext();

// Custom hook to use auth context
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in on app load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      try {
        const parsedUserData = JSON.parse(userData);
        setIsAuthenticated(true);
        setUser(parsedUserData);
      } catch (error) {
        console.error('Error parsing user data:', error);
        // Clear corrupted data
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
      }
    }
    
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    // Demo mode - bypass API call for testing
    if (DEMO_MODE) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Check demo credentials
      if (email === 'eve.holt@reqres.in' && password === 'cityslicka') {
        const mockToken = 'demo_token_' + Date.now();
        localStorage.setItem('authToken', mockToken);
        localStorage.setItem('userData', JSON.stringify({ email }));
        
        setIsAuthenticated(true);
        setUser({ email });
        return { success: true };
      } else {
        return { success: false, error: 'Invalid demo credentials' };
      }
    }

    // Original API call - will be used when DEMO_MODE = false
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Handle different HTTP status codes
      if (response.status === 400) {
        return { success: false, error: 'Invalid email or password' };
      }
      
      if (response.status === 401) {
        return { success: false, error: 'Unauthorized. Please check your credentials.' };
      }
      
      if (response.status === 429) {
        return { success: false, error: 'Too many requests. Please try again later.' };
      }
      
      if (response.status >= 500) {
        return { success: false, error: 'Server error. Please try again later.' };
      }

      if (!response.ok) {
        return { success: false, error: `Login failed (${response.status})` };
      }

      const data = await response.json();

      if (data.token) {
        // Store token and user data
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userData', JSON.stringify({ email }));
        
        setIsAuthenticated(true);
        setUser({ email });
        return { success: true };
      } else {
        return { success: false, error: data.error || 'Login failed - no token received' };
      }
    } catch (error) {
      console.error('Login error:', error);
      
      // Handle specific network errors
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        return { success: false, error: 'Network error. Please check your internet connection.' };
      }
      
      if (error.name === 'AbortError') {
        return { success: false, error: 'Request timeout. Please try again.' };
      }
      
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
