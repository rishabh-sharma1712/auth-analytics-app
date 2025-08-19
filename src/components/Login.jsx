import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DEMO_MODE, useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Enhanced form validation
    if (!formData.email.trim() || !formData.password.trim()) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (!validateEmail(formData.email.trim())) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    if (formData.password.length < 3) {
      setError('Password must be at least 3 characters long');
      setLoading(false);
      return;
    }

    // Attempt login
    try {
      const result = await login(formData.email.trim(), formData.password);
      
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.error);
      }
    } catch (err) {
      console.error('Login submission error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div className="card" style={{
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        border: 'none'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '32px',
          color: '#333',
          fontSize: '28px',
          fontWeight: '600'
        }}>
          Welcome Back
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              disabled={loading}
              minLength="3"
            />
          </div>

          {error && <div className="error">{error}</div>}

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '14px 20px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '8px',
              border: 'none',
              background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
              marginTop: '8px'
            }}
            disabled={loading}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 16px rgba(0, 123, 255, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(0, 123, 255, 0.3)';
              }
            }}
          >
            {loading ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid transparent',
                  borderTop: '2px solid white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  marginRight: '8px'
                }}></div>
                Logging in...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div style={{
          marginTop: '16px',
          padding: '16px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#666',
          border: '1px solid #e9ecef'
        }}>
          <strong style={{ color: '#495057' }}>Demo Credentials:</strong><br />
          Email: eve.holt@reqres.in<br />
          Password: cityslicka
          {DEMO_MODE && (
            <div style={{
              marginTop: '12px',
              marginLeft: '8px',
              padding: '6px 12px',
              backgroundColor: '#007bff',
              color: 'white',
              borderRadius: '6px',
              fontSize: '12px',
              display: 'inline-block',
              fontWeight: '500',
              boxShadow: '0 2px 4px rgba(0, 123, 255, 0.2)'
            }}>
              🚀 Demo Mode Active
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
