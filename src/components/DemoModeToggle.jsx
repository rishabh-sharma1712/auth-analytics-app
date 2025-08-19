import { useAuth } from '../contexts/AuthContext';

const DemoModeToggle = () => {
  const { demoMode, toggleDemoMode } = useAuth();

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 1000,
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>
      {/* Demo Mode Toggle */}
      <button
        onClick={toggleDemoMode}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          background: demoMode 
            ? 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' 
            : 'linear-gradient(135deg, #6c757d 0%, #495057 100%)',
          color: 'white'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.25)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
        }}
        title={demoMode ? 'Demo Mode: ON (Click to switch to Real API)' : 'Demo Mode: OFF (Click to switch to Demo)'}
      >
        {demoMode ? '🌐' : '🔧'}
      </button>

      {/* Tooltip */}
      <div style={{
        position: 'absolute',
        top: '50px',
        right: '0',
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '6px',
        fontSize: '12px',
        whiteSpace: 'nowrap',
        opacity: 0,
        transform: 'translateY(-10px)',
        transition: 'all 0.3s ease',
        pointerEvents: 'none'
      }}
      className="demo-toggle-tooltip"
      >
        {demoMode ? 'Demo Mode Active' : 'Real API Mode'}
      </div>
    </div>
  );
};

export default DemoModeToggle;
