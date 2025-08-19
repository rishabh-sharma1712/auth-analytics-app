import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch todos data
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        setError('Failed to load analytics data');
        console.error('Error fetching todos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Prepare data for pie chart (completed vs pending)
  const pieChartData = [
    { name: 'Completed', value: todos.filter(todo => todo.completed).length, color: '#28a745' },
    { name: 'Pending', value: todos.filter(todo => !todo.completed).length, color: '#ffc107' }
  ];

  // Prepare data for bar chart (todos per user)
  const barChartData = todos.reduce((acc, todo) => {
    const userId = todo.userId;
    if (!acc[userId]) {
      acc[userId] = { userId, total: 0, completed: 0 };
    }
    acc[userId].total += 1;
    if (todo.completed) {
      acc[userId].completed += 1;
    }
    return acc;
  }, {});

  const barChartArray = Object.values(barChartData);

  if (loading) {
    return (
      <div className="card">
        <h2>Analytics Dashboard</h2>
        <p>Loading analytics data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card">
        <h2>Analytics Dashboard</h2>
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="card">
        <h2 style={{ marginBottom: '24px', color: '#333' }}>
          Analytics Dashboard
        </h2>
        
        <div className="charts-container">
          {/* Pie Chart - Completed vs Pending */}
          <div className="card">
            <h3 style={{ marginBottom: '16px', color: '#333' }}>
              Todos Status Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart - Todos per User */}
          <div className="card">
            <h3 style={{ marginBottom: '16px', color: '#333' }}>
              Todos per User
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barChartArray}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="userId" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#007bff" name="Total Todos" />
                <Bar dataKey="completed" fill="#28a745" name="Completed" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="card" style={{ marginTop: '24px' }}>
          <h3 style={{ marginBottom: '16px', color: '#333' }}>Summary</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{ textAlign: 'center', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
                {todos.length}
              </div>
              <div style={{ color: '#666' }}>Total Todos</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#28a745' }}>
                {todos.filter(todo => todo.completed).length}
              </div>
              <div style={{ color: '#666' }}>Completed</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffc107' }}>
                {todos.filter(todo => !todo.completed).length}
              </div>
              <div style={{ color: '#666' }}>Pending</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#6c757d' }}>
                {new Set(todos.map(todo => todo.userId)).size}
              </div>
              <div style={{ color: '#666' }}>Unique Users</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
