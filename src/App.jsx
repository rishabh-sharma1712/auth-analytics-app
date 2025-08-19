import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Navbar from './components/Navbar';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Main App Component
const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <div className="container">
        <Routes>
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/analytics" element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          } />
          <Route path="/" element={
            <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
          } />
        </Routes>
      </div>
    </Router>
  );
};

// App Component with Auth Provider
const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
