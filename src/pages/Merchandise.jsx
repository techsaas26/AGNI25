import React from 'react';

// Component to inject CSS styles directly into the document head
const MerchandiseStyles = () => {
  const styles = `
    .merchandise-page {
      padding: 6rem 2rem 2rem;
    }

    .merch-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .merch-title {
      font-size: 3rem;
      letter-spacing: 1px;
    }

    .merch-container {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      padding: 1.25rem;
    }

    .merchandise-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.5rem;
      align-items: stretch; /* Ensures cards in a row are the same height */
    }

    .merch-card {
      background: rgba(0, 0, 0, 0.5);
      border-radius: 16px;
      padding: 0.75rem;
      display: flex;
      flex-direction: column;
    }

    /* Styling for the image cards (Front & Back) */
    .image-card {
      text-align: center;
    }

    .merch-image-wrapper {
      background: rgba(255, 255, 255, 0.06);
      border-radius: 14px;
      padding: 1rem;
      margin-bottom: 0.75rem;
      flex-grow: 1; /* Allows this to take up available space */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .merch-image {
      width: 100%;
      height: auto;
      max-height: 400px; /* Prevents image from getting too large */
      border-radius: 10px;
      object-fit: contain;
    }

    .merch-image-label {
      opacity: 0.9;
      font-size: 0.95rem;
    }

    /* Styling for the info card */
    .info-card {
      justify-content: space-between;
      padding: 1rem 1.25rem;
    }

    .info-title {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
      letter-spacing: 0.5px;
    }

    .info-description {
      font-size: 0.95rem;
      opacity: 0.85;
      margin-bottom: 1rem;
    }

    .info-pricing {
      line-height: 1.6;
      font-size: 0.9rem;
      padding-left: 1.2rem;
      margin-bottom: 1rem;
    }
    
    .info-pricing li {
        margin-bottom: 0.5rem;
    }

    .info-promo {
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
      font-weight: 500;
    }

    .buy-now-button {
      align-self: flex-start;
      margin-bottom: 1rem;
      padding: 0.6rem 1.2rem;
      border-radius: 6px;
      background: #fff;
      color: #111;
      border: none;
      cursor: pointer;
      font-weight: 600;
      transition: background-color 0.2s;
    }

    .buy-now-button:hover {
      background-color: #eee;
    }

    .info-deadline {
      opacity: 0.85;
      font-size: 0.85rem;
      margin-top: auto;
    }

    /* --- Mobile Responsiveness --- */
    @media (max-width: 768px) {
      .merchandise-page {
        padding: 5rem 1rem 1rem;
      }

      .merch-title {
        font-size: 2.2rem;
      }

      .merchandise-grid {
        gap: 1rem;
      }
    }
  `;
  return <style>{styles}</style>;
};

// Data for the merchandise cards
const merchInfo = {
  title: 'Concert Night T-Shirt',
  description: 'Wear the spirit of festivity at concert night!',
  prices: [
    '<strong>Buy one</strong> T‑shirt @ Rs 180/-',
    'For bulk of <strong>5</strong> T‑shirts @ Rs 800/-',
  ],
  promo: 'WEAR THE T‑SHIRT AND MEET OUR SINGERS ON CONCERT DAY!',
  formLink: 'https://forms.gle/iMcqkxu2cX6GywPN9',
  deadline: 'Oct 31st 2025',
};

function Merchandise() {
  return (
    <div className="merchandise-page retro-green">
      <MerchandiseStyles />
      <section className="merch-header">
        <h1 className="merch-title display-font headline-sandal">
          MERCHANDISE
        </h1>
      </section>

      <section className="merch-container">
        <div className="merchandise-grid">
          {/* Image Card: Front */}
          <div className="merch-card image-card">
            <div className="merch-image-wrapper">
              <img alt="Front of T-shirt" src="/front.png" className="merch-image" />
            </div>
            <div className="merch-image-label">Front of T‑shirt</div>
          </div>

          {/* Image Card: Back */}
          <div className="merch-card image-card">
            <div className="merch-image-wrapper">
              <img alt="Back of T-shirt" src="/back.png" className="merch-image" />
            </div>
            <div className="merch-image-label">Back of T‑shirt</div>
          </div>

          {/* Info Card */}
          <div className="merch-card info-card">
            <div>
              <h2 className="info-title">{merchInfo.title}</h2>
              <p className="info-description">{merchInfo.description}</p>
            </div>
            <ul className="info-pricing">
              {merchInfo.prices.map((price, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: price }} />
              ))}
            </ul>
            <p className="info-promo">{merchInfo.promo}</p>
            <button
              className="buy-now-button"
              onClick={() => window.open(merchInfo.formLink, '_blank')}
            >
              Buy Now
            </button>
            <p className="info-deadline">
              Last Date for Registration: <strong>{merchInfo.deadline}</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Merchandise;

