import React, { useState } from 'react';

function SponsorCard({ name, logo, description }) {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="card" 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)} 
      style={{ width: '200px', textAlign: 'center' }}
    >
      <img src={logo} alt={name} style={{ width: '80px', margin: '0 auto' }} />
      <h3>{name}</h3>
      {hover && (
        <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
          {description.map((d,i) => <p key={i}>{d}</p>)}
        </div>
      )}
    </div>
  );
}

export default SponsorCard;
