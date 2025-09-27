// RetroNavbar.jsx
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

const RetroNavbar = () => {
  const navItems = ["Events", "Agenda", "Merchandise", "Team", "Contact"];
  return (
    <Navbar expand="lg" className="retro-navbar">
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand href="#" className="retro-brand">
          <span className="logo-circle red" />
          <span className="logo-circle yellow" />
          AGNI 2025
        </Navbar.Brand>

        {/* Mobile toggle */}
        <Navbar.Toggle aria-controls="retro-navbar-nav" className="retro-toggle" />

        <Navbar.Collapse id="retro-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navItems.map((item) => (
              <Nav.Link key={item} href="#" className="retro-link">
                {item}
              </Nav.Link>
            ))}

            {/* Login & Register Buttons */}
            <Nav.Link href="#" className="retro-link login-btn">
              Login
            </Nav.Link>
            <Nav.Link href="#" className="retro-link register-btn">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default RetroNavbar;
