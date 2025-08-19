import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  // Extract username from email
  const username = user?.email?.split('@')[0] || 'User';

  return (
    <div className="card">
      <h1 style={{ marginBottom: '16px', color: '#333' }}>
        Welcome, {username}!
      </h1>
      
      <p style={{ marginBottom: '24px', color: '#666', fontSize: '16px' }}>
        You have successfully logged into your dashboard. 
        Navigate to the Analytics page to view your data charts.
      </p>

      <div style={{ display: 'flex', gap: '12px' }}>
        <button 
          className="btn btn-secondary"
          onClick={logout}
          style={{ 
            padding: '10px 20px',
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
      </div>
    </div>
  );
};

export default Dashboard;
