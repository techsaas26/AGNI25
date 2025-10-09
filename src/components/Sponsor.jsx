import React from 'react';
import './HomeSponsors.css';

const sponsorsData = [
    { name: 'ClutchX', logo: 'clutch.png' },
    { name: 'Touriga', logo: 'touriga.png' },
    { name: 'Krafton', logo: 'krafton.png' },
    { name: 'Toyota', logo: 'toyota.png' },
    { name: 'Royal Enfield', logo: 're.png' },
    { name: 'Gourmet Popcornica', logo: 'gourmet.png' },
    { name: 'Aladipattiyan', logo: 'aladipattiyan.png' },
    { name: 'Alumni Association CEG', logo: 'alumni.png' },
    { name: 'Gurunath', logo: 'gurunath.png' },
    { name: 'AGS Cinemas', logo: 'ags.png' },
    { name: 'Poorvika', logo: 'poorvika.png' },
    { name: 'Blacksheep', logo: 'blacksheep.png' },
    { name: 'Medimix', logo: 'medimix.png' },
    { name: 'Rajams', logo: 'rajams.png' },
    { name: '2iim', logo: '2iim.png' },
    { name: 'Hayati Garments', logo: 'hiyati.png' },
    { name: 'Dream Bright', logo: 'dream-bright.png' },
];

const Sponsor = () => {
 return (
        <section className="home-sponsors-section">
            <div className="home-sponsors-content">
                <h2 className="home-sponsors-title">Sponsored by</h2>
                <div className="marquee-container">
                    <div className="marquee-track">
                        {/* We duplicate the list to create a seamless looping effect */}
                        {[...sponsorsData, ...sponsorsData].map((sponsor, index) => (
                            <div className="sponsor-card" key={`${sponsor.name}-${index}`}>
                                <img
                                    src={`/sponsors/${sponsor.logo}`}
                                    alt={`${sponsor.name} logo`}
                                    className="sponsor-logo-img"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Sponsor;