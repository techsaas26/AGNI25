import React, { useState } from "react";
import "./Footer.css";

// Import images
import krishnenduImg from "/Krishnendu.JPG";
import krisnaImg from "/Krisna.jpeg";
import AbiramiImg from "/logo1.png";
import SuchitraImg from "/logo1.png";

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
      name: "Abirami",
      instagram: "https://www.instagram.com/abiramiii.r/?hl=en",
      linkedin: "https://www.linkedin.com/in/abirami-ramanathan-707521285/",
    },
    {
      img: SuchitraImg,
      name: "Suchitra",
      instagram: "https://www.instagram.com/suchitra_sidd",
      linkedin: "https://www.linkedin.com/in/suchitra-siddharthan-6838292aa/",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Copyright */}
        <p className="copyright">
          &copy; 2025 AGNI @ Student Association and Arts Society, CEG
        </p>

        {/* Social Links */}
        <ul className="social-links">
          <li>
            <a
              href="https://www.facebook.com/techofes.co.in"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/saas_ceg"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/saasceg/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/saas_ceg"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>

        {/* Designed by */}
        <div
          className="designed-by-wrapper"
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          <p className="designed-by">
            Designed by Technical Design, SAAS
          </p>

          {showPopup && (
            <div className="designer-popup">
              <div className="designer-profiles">
                {designers.map((designer, index) => (
                  <div key={index} className="designer-card">
                    <img
                      src={designer.img}
                      alt={designer.name}
                      className="designer-img"
                    />
                    <span className="designer-name">{designer.name}</span>
                    <div className="designer-links">
                      <a
                        href={designer.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href={designer.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
