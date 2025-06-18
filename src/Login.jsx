import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  // Default users for testing (no backend)
  const defaultUsers = [
    { email: 'user@example.com', password: 'user123', role: 'user' },
    { email: 'admin@example.com', password: 'admin123', role: 'admin' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const matchedUser = defaultUsers.find(
      (u) => u.email === email && u.password === password && u.role === role
    );

    if (matchedUser) {
      localStorage.setItem('token', 'dummy-token');
      alert(`Login successful as ${role}`);
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/shopping');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  const handleRoleChange = (newRole) => {
    setRole(newRole);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                placeholder="example123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group role-toggle">
              <button
                type="button"
                className={role === 'user' ? 'active-role' : ''}
                onClick={() => handleRoleChange('user')}
              >
                User
              </button>
              <button
                type="button"
                className={role === 'admin' ? 'active-role' : ''}
                onClick={() => handleRoleChange('admin')}
              >
                Admin
              </button>
            </div>

            <div className="form-group">
              Don't have an account? <Link to="/register">Register</Link>
            </div>

            <button className="button-login" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
