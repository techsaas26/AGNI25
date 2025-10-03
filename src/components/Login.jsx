import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    alert(`Logging in as ${username}`);
    navigate('/');
  };

  return (
    <div className="fire-rain-bg palette-bg">
      <div className="fire-rain-overlay">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="fire-drop" style={{ left: `${Math.random()*100}%`, animationDuration: `${6 + Math.random()*6}s`, animationDelay: `${Math.random()*4}s` }} />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem', position: 'relative', zIndex: 2 }}>
        <form style={{ background: 'var(--card-bg)', padding: '8rem', borderRadius: '12px', width: '500px' }} onSubmit={handleLogin}>
          <h2 className="display-font headline-sandal" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '4.5rem', letterSpacing: '1.5px' }}>Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} style={{ width: '100%', marginBottom: '2rem', padding: '1rem' }}/>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', marginBottom: '2rem', padding: '1rem' }}/>
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  );
}

export default Login;
