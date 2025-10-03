import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);

  return (
    <>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.8rem 1.2rem', background: 'transparent', position: 'absolute', width: '100%', zIndex: 100 }}>
        <h1 className="display-font" style={{ fontSize: '2rem', letterSpacing: '2px' }}>AGNI25</h1>
        <div onClick={toggle} className={`hamburger ${open ? 'open' : ''}`} aria-label="Menu" role="button" tabIndex={0}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Corner logo (fixed) */}
      <img src="/agni-logo.png" alt="AGNI Logo" className="corner-logo" />

      <div className={`menu-overlay ${open ? 'open' : ''}`} onClick={toggle}>
        <div className="menu-close">✕</div>
        <div className="menu-grid" onClick={(e) => e.stopPropagation()}>
          <Link className="menu-link" to="/" onClick={toggle}>Home</Link>
          <Link className="menu-link" to="/events" onClick={toggle}>Events</Link>
          <Link className="menu-link" to="/schedule" onClick={toggle}>Schedule</Link>
          <Link className="menu-link" to="/register" onClick={toggle}>Register Now!</Link>
          <Link className="menu-link" to="/login" onClick={toggle}>Tickets</Link>
          <Link className="menu-link" to="/login" onClick={toggle}>Login</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
