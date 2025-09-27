import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container className="d-flex justify-content-between flex-column flex-md-row">
        <div>
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            {["Home", "Events", "Agenda", "Merch", "Team", "Contact"].map(link => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Developed By</h5>
          <div className="d-flex mt-2">
            <div className="bg-light text-dark rounded-circle p-3 me-2" />
            <div className="bg-light text-dark rounded-circle p-3" />
          </div>
          <p className="mt-3">© Technical Design SAAS 2026</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
