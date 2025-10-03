import React, { useState } from 'react';

function TeamMemberCard({ name, role, image, onClick }) {
  // Normalize image path and convert to absolute URL so we can see exactly what is requested in the browser.
  const imgPath = image ? (image.startsWith('/') ? image : `/${image}`) : '/agni-logo.png';
  const [loadStatus, setLoadStatus] = useState('pending'); // 'pending' | 'loaded' | 'error'

  return (
    <div className="card" style={{ width: 200, height: 280, textAlign: 'center', cursor: 'pointer', padding: '0.75rem', borderRadius: 16 }} onClick={onClick}>
      <div style={{ width: 160, height: 160, margin: '0 auto 0.5rem', borderRadius: 14, overflow: 'hidden', background: 'rgba(255,255,255,0.06)' }}>
        <img
          src={imgPath}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onLoad={() => setLoadStatus('loaded')}
          onError={(e) => { setLoadStatus('error'); e.currentTarget.onerror = null; e.currentTarget.src = '/agni-logo.png'; }}
        />
      </div>
      {/* debug: show the computed src and load status so you can verify the path being requested */}
      <div style={{ fontSize: 12, color: '#fff', marginBottom: 6 }}>{imgPath} — {loadStatus}</div>
      <div style={{ fontSize: 13, opacity: .9 }}>{role}</div>
      <h4 style={{ margin: 0 }}>{name}</h4>
    </div>
  );
}

export default TeamMemberCard;
