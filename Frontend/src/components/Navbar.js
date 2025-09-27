// RetroNavbar.jsx
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // <-- import Link
import "./Navbar.css";

const RetroNavbar = () => {
  const navItems = [
    { name: "Events", path: "/events" },
    { name: "Agenda", path: "/agenda" },
    { name: "Merchandise", path: "/merchandise" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Navbar expand="lg" className="retro-navbar">
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand as={Link} to="/" className="retro-brand">
          <span className="logo-circle red" />
          <span className="logo-circle yellow" />
          AGNI 2025
        </Navbar.Brand>

        {/* Mobile toggle */}
        <Navbar.Toggle
          aria-controls="retro-navbar-nav"
          className="retro-toggle"
        />

        <Navbar.Collapse id="retro-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navItems.map((item) => (
              <Nav.Link
                as={Link}
                key={item.name}
                to={item.path}
                className="retro-link"
              >
                {item.name}
              </Nav.Link>
            ))}

            {/* Login & Register Buttons */}
            <Nav.Link as={Link} to="/login" className="retro-link login-btn">
              Login
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/register"
              className="retro-link register-btn"
            >
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default RetroNavbar;
