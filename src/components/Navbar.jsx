import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Component to inject CSS styles directly into the document head
const NavbarStyles = () => {
  const styles = `
    /* Main Navbar Styling */
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 1.2rem;
      background: rgba(0, 0, 0, 0.35);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 2000;
      backdrop-filter: blur(6px);
      box-sizing: border-box;
    }

    /* Logo and Title Alignment */
    .navbar-logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      color: white;
    }

    .navbar-logo img {
      height: 45px;
      width: auto;
      display: block;
    }

    .navbar-logo h1 {
      font-size: 1.5rem;
      margin: 0;
    }

    .navbar-content {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    /* Desktop Navigation Links */
    .nav-links-desktop {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }

    .nav-link {
      color: white;
      text-decoration: none;
      font-size: 1rem;
      transition: color 0.2s ease-in-out;
    }

    .nav-link:hover,
    .nav-link.active { /* Style for active NavLink */
      color: #ffc107;
    }

    /* Hamburger Icon Styling */
    .hamburger {
      display: none;
      width: 30px;
      height: 22px;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      position: relative;
      z-index: 2100;
      background: transparent;
      border: none;
      padding: 0;
    }

    .hamburger span {
      width: 100%;
      height: 3px;
      background-color: white;
      border-radius: 3px;
      transition: all 0.3s ease;
    }

    .hamburger.open span:nth-child(1) {
      transform: translateY(9.5px) rotate(45deg);
    }
    .hamburger.open span:nth-child(2) {
      opacity: 0;
    }
    .hamburger.open span:nth-child(3) {
      transform: translateY(-9.5px) rotate(-45deg);
    }

    /* Mobile Menu Overlay */
    .menu-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(10, 10, 10, 0.9);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
      z-index: 1999;
    }

    .menu-overlay.open {
      opacity: 1;
      visibility: visible;
    }

    .menu-grid {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      text-align: center;
    }

    .menu-link {
      color: white;
      text-decoration: none;
      font-size: 2rem;
      font-weight: bold;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .menu-link:hover,
    .menu-link.active {
        color: #ffc107;
    }

    .menu-overlay.open .menu-link {
      opacity: 1;
      transform: translateY(0);
    }

    /* Staggered animation for mobile links */
    .menu-overlay.open .menu-link:nth-child(1) { transition-delay: 0.1s; }
    .menu-overlay.open .menu-link:nth-child(2) { transition-delay: 0.15s; }
    .menu-overlay.open .menu-link:nth-child(3) { transition-delay: 0.2s; }
    .menu-overlay.open .menu-link:nth-child(4) { transition-delay: 0.25s; }
    .menu-overlay.open .menu-link:nth-child(5) { transition-delay: 0.3s; }
    .menu-overlay.open .menu-link:nth-child(6) { transition-delay: 0.35s; }

    /* Media Query for Responsiveness */
    @media (max-width: 820px) {
      .nav-links-desktop {
        display: none;
      }
      .hamburger {
        display: flex;
      }
    }
  `;
  return <style>{styles}</style>;
};


// Define navigation links in one place for easy management
const navLinks = [
  { path: '/', text: 'Home' },
  { path: '/events', text: 'Events' },
  { path: '/merch', text: 'Merch' },
  { path: '/schedule', text: 'Schedule' },
  { path: '/#team', text: 'Team', isAnchor: true },
  { path: '/#contact', text: 'Contact Us', isAnchor: true },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Helper to render links based on type (internal, anchor) and context (mobile, desktop)
  const renderLink = (link, isMobile = false) => {
    const className = isMobile ? 'menu-link' : 'nav-link';
    if (link.isAnchor) {
      return (
        <a key={link.text} href={link.path} className={className} onClick={closeMenu}>
          {link.text}
        </a>
      );
    }
    // Use NavLink for internal routes to get active styling
    return (
      <NavLink key={link.text} to={link.path} className={className} onClick={closeMenu}>
        {link.text}
      </NavLink>
    );
  };

  return (
    <>
      <NavbarStyles />
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/logo1.png" alt="AGNI Logo" />
          <h1>AGNI'25</h1>
        </Link>

        <div className="navbar-content">
          <div className="nav-links-desktop">
            {navLinks.map((link) => renderLink(link))}
          </div>

          <button
            onClick={toggleMenu}
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="menu-grid" onClick={(e) => e.stopPropagation()}>
          {navLinks.map((link) => renderLink(link, true))}
        </div>
      </div>
    </>
  );
}

export default Navbar;

