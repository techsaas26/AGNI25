import React, { useState } from 'react';

function TeamMemberCard({ name, role, image, instagram, linkedin, onClick }) {
  // Normalize image path and convert to absolute URL so we can see exactly what is requested in the browser.
  const imgPath = image ? (image.startsWith('/') ? image : `/${image}`) : '/agni-logo.png';
  const [loadStatus, setLoadStatus] = useState('pending'); // 'pending' | 'loaded' | 'error'

  return (
    <div className="card" style={{ width: 200, height: 320, textAlign: 'center', cursor: 'pointer', padding: '0.75rem', borderRadius: 16 }} onClick={onClick}>
      <div style={{ width: 160, height: 160, margin: '0 auto 0.5rem', borderRadius: 14, overflow: 'hidden', background: 'rgba(255,255,255,0.06)' }}>
        <img
          src={imgPath}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onLoad={() => setLoadStatus('loaded')}
          onError={(e) => { setLoadStatus('error'); e.currentTarget.onerror = null; e.currentTarget.src = '/agni-logo.png'; }}
        />
      </div>
      {/* hide debug line now */}
      <div style={{ display: 'none' }}>{imgPath} — {loadStatus}</div>
      <div style={{ fontSize: 13, opacity: .9 }}>{role}</div>
      <h4 style={{ margin: 0 }}>{name}</h4>

      {/* Social icons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '0.6rem' }} onClick={(e) => e.stopPropagation()}>
        <a href={instagram || '#'} target={instagram ? '_blank' : undefined} rel={instagram ? 'noreferrer' : undefined} aria-label={`${name} Instagram`} style={{
          width: 28, height: 28, borderRadius: '50%', display: 'grid', placeItems: 'center',
          background: 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)', color: '#fff', fontSize: 14,
          opacity: instagram ? 1 : 0.4, pointerEvents: instagram ? 'auto' : 'none'
        }}>◎</a>
        <a href={linkedin || '#'} target={linkedin ? '_blank' : undefined} rel={linkedin ? 'noreferrer' : undefined} aria-label={`${name} LinkedIn`} style={{
          width: 28, height: 28, borderRadius: '50%', display: 'grid', placeItems: 'center',
          background: '#0a66c2', color: '#fff', fontWeight: 700, fontFamily: 'sans-serif', fontSize: 14,
          opacity: linkedin ? 1 : 0.4, pointerEvents: linkedin ? 'auto' : 'none'
        }}>in</a>
      </div>
    </div>
  );
}

export default TeamMemberCard;
