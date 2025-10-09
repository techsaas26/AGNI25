import React, { useState } from "react";
import "./Footer.css";

// Import images
import krishnenduImg from "/Krishnendu.JPG";
import krisnaImg from "/Krisna.jpeg";
import AbiramiImg from "/abirami.jpg";
import SuchitraImg from "/suchitra.jpg";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const designers = [
    {
      img: krishnenduImg,
      name: "Krishnendu M R",
      instagram:
        "https://www.instagram.com/krishnendu.m.r?igsh=MXQwOTdsOGtjN3BnZA==",
      linkedin: "https://www.linkedin.com/in/krishnendumr",
    },
    {
      img: krisnaImg,
      name: "Krisna VJ",
      instagram: "https://www.instagram.com/saas_ceg/",
      linkedin: "https://www.linkedin.com/in/krisna-vj/",
    },
    {
      img: AbiramiImg,
      name: "Abirami R",
      instagram: "https://www.instagram.com/abiramiii.r/?hl=en",
      linkedin: "https://www.linkedin.com/in/abirami-ramanathan-707521285/",
    },
    {
      img: SuchitraImg,
      name: "Suchitra S",
      instagram: "https://www.instagram.com/suchitra_sidd",
      linkedin: "https://www.linkedin.com/in/suchitra-siddharthan-6838292aa/",
    },
  ];

  return (
    <footer className="footer">
      {/* 1. Top Row: Copyright & Social Links */}
      <div className="footer-content">
        {/* Copyright */}
        <p className="copyright">
          &copy; 2025 AGNI @ Student Association and Arts Society, CEG
        </p>

        {/* Social Links for the Organization */}
        <ul className="social-links">
          <li>
            <a
              href="https://www.facebook.com/techofes.co.in"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/saas_ceg"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/saasceg/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/saas_ceg"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* 2. Bottom Row: Designed By & Popup (Handles hover state) */}
      <div
        className="designed-by-container"
        onMouseEnter={() => setShowPopup(true)}
        // Added a short delay to the onMouseLeave
        onMouseLeave={() => setTimeout(() => setShowPopup(false), 200)}
      >
        <p className="designed-by">
          Designed by Technical Design, SAAS
        </p>

        {showPopup && (
          <div className="designer-popup">
            <div className="designer-profiles">
              {designers.map((designer, index) => (
                <a
                  key={index}
                  className="designer-card-link"
                  href={designer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn profile for ${designer.name}`}
                >
                  <div className="designer-card">
                    <img
                      src={designer.img}
                      alt={designer.name}
                      className="designer-img"
                    />
                    <span className="designer-name">{designer.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;