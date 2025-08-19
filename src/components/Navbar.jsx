import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a href="/dashboard" className="navbar-brand">
          React Analytics App
        </a>
        
        <ul className="navbar-nav">
          <li>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/analytics" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Analytics
            </NavLink>
          </li>
          <li>
            <button 
              onClick={logout}
              className="btn btn-secondary"
              style={{ 
                margin: 0,
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: '500',
                borderRadius: '6px',
                border: 'none',
                background: 'linear-gradient(135deg, #6c757d 0%, #545b62 100%)',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(108, 117, 125, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 4px 12px rgba(108, 117, 125, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 8px rgba(108, 117, 125, 0.3)';
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
