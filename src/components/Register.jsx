import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({ name:'', roll:'', year:'', username:'', password:'' });
  const navigate = useNavigate();

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = e => {
    e.preventDefault();
    alert(`Registered as ${formData.name}`);
    navigate('/login');
  };

  return (
    <div className="fire-rain-bg palette-bg">
      <div className="fire-rain-overlay">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="fire-drop" style={{ left: `${Math.random()*100}%`, animationDuration: `${6 + Math.random()*6}s`, animationDelay: `${Math.random()*4}s` }} />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem', position: 'relative', zIndex: 2 }}>
        <form style={{ background: 'var(--card-bg)', padding: '5rem', borderRadius: '12px', width: '500px' }} onSubmit={handleRegister}>
          <h2 className="display-font headline-sandal" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '4.7rem', letterSpacing: '1px' }}>Register</h2>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
        <input type="text" name="roll" placeholder="Roll No" value={formData.roll} onChange={handleChange} style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
        <input type="text" name="year" placeholder="Year" value={formData.year} onChange={handleChange} style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
        <button type="submit">Register</button>
      </form>
      </div>
    </div>
  );
}

export default Register;
