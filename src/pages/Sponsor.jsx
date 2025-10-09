import React from 'react';
import './Sponsor.css'; // Make sure the CSS file is in the same folder

// 1. Structure the sponsor data in an array of objects
//    (Assuming logo files are named logically and placed in public/assets/sponsors/)
const sponsorsData = [
    { name: 'ClutchX', logo: 'clutch.png', category: 'Associate Sponsors' },
    { name: 'Touriga', logo: 'touriga.png', category: 'Associate Sponsors' },
    { name: 'Krafton', logo: 'krafton.png', category: 'Events Sponsor' },
    { name: 'Toyota', logo: 'toyota.png', category: 'Automobile Sponsor' },
    { name: 'Royal Enfield', logo: 're.png', category: 'Merchandise Sponsor' },
    { name: 'Gourmet Popcornica', logo: 'gourmet.png', category: 'Refreshment Partner' },
    { name: 'Aladipattiyan', logo: 'aladipattiyan.png', category: 'Refreshment Partner' },
    { name: 'Alumni Association CEG', logo: 'alumni.png', category: 'Logistics Sponsor' },
    { name: 'Gurunath', logo: 'gurunath.png', category: 'Logistics Sponsor' },
    { name: 'AGS Cinemas', logo: 'ags.png', category: 'Multiplex Partner' },
    { name: 'Poorvika', logo: 'poorvika.png', category: 'Momento Sponsor' },
    { name: 'Blacksheep', logo: 'blacksheep.png', category: 'Media Partner' },
    { name: 'Medimix', logo: 'medimix.png', category: 'Hygiene Partner' },
    { name: 'Rajams', logo: 'rajams.png', category: 'Printing Partner' },
    { name: '2iim', logo: '2iim.png', category: 'Education Partner' },
    { name: 'Hayati Garments', logo: 'hiyati.png', category: 'T-shirt Partner' },
    { name: 'Dream Bright', logo: 'dream-bright.png', category: 'Production Partner' },
];

const Sponsor = () => {
    // 2. Group sponsors by their category
    const groupedSponsors = sponsorsData.reduce((acc, sponsor) => {
        const { category } = sponsor;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(sponsor);
        return acc;
    }, {});

    return (
        <section className="sponsor-section">
            <div className="sponsor-overlay"></div>
            <div className="sponsor-content">
                <h1 className="sponsor-main-title">Our Sponsors</h1>
                {/* 3. Map over the grouped object to display categories and logos */}
                {Object.entries(groupedSponsors).map(([category, sponsors]) => (
                    <div key={category} className="sponsor-group">
                        <h2 className="sponsor-category-title">{category}</h2>
                        <div className="sponsor-logos-container">
                            {sponsors.map((sponsor) => (
                                <div key={sponsor.name} className="sponsor-logo-wrapper">
                                    <img
                                        src={`/sponsors/${sponsor.logo}`}
                                        alt={sponsor.name}
                                        className="sponsor-logo"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Sponsor;