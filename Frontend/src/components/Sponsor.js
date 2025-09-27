import React from "react";
import "./Sponsor.css";

const sponsors = Array.from({ length: 8 }, (_, i) => `Sponsor ${i + 1}`);

const SponsorBoxes = () => {
  return (
    <section className="sponsor-section">
      <h2 className="sponsor-heading">Our Sponsors</h2>

      <div className="sponsor-grid">
        {sponsors.map((sponsor, i) => (
          <div key={i} className="sponsor-item">
            {sponsor}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorBoxes;
