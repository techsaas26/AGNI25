import React from "react";
import "./Sponsor.css";

const sponsors = Array.from({ length: 8 }, (_, i) => `Sponsor ${i + 1}`);

const SponsorPopSpin = () => {
  return (
    <section className="sponsor-section">
      <h2 className="sponsor-heading">Our Sponsors</h2>

      <div className="circle-container">
        {sponsors.map((sponsor, i) => {
          const angle = (360 / sponsors.length) * i;
          return (
            <div
              key={i}
              className="sponsor-item"
              style={{
                transform: `rotate(${angle}deg) translateY(-12rem)`,
                animationDelay: `${i * 0.2}s`, // staggered animation
              }}
            >
              {sponsor}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SponsorPopSpin;
