import React from 'react';

function Merchandise() {
  return (
    <div style={{ padding: '2rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1
          className="display-font headline-sandal"
          style={{ fontSize: '3rem', letterSpacing: '1px' }}
        >
          MERCHANDISE
        </h1>
      </section>

      <section
        style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: 12,
          padding: '1.25rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1rem',
            alignItems: 'start',
          }}
        >
          {/* Front card */}
          <div
            style={{
              background: 'rgba(0,0,0,0.5)',
              borderRadius: 16,
              padding: '0.75rem',
              textAlign: 'center',
              height: 480,
            }}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.06)',
                borderRadius: 14,
                height: 410,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                alt="Front of T-shirt"
                src="https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=900&auto=format&fit=crop"
                style={{
                  height: 380,
                  width: 'auto',
                  borderRadius: 10,
                  objectFit: 'cover',
                }}
              />
            </div>
            <div style={{ marginTop: 6, opacity: 0.9, fontSize: '0.95rem' }}>
              Front of T‑shirt
            </div>
          </div>

          {/* Back card */}
          <div
            style={{
              background: 'rgba(0,0,0,0.5)',
              borderRadius: 16,
              padding: '0.75rem',
              textAlign: 'center',
              height: 480,
            }}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.06)',
                borderRadius: 14,
                height: 410,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                alt="Back of T-shirt"
                src="https://images.unsplash.com/photo-1618354691457-77c2c35f2a13?q=80&w=900&auto=format&fit=crop"
                style={{
                  height: 380,
                  width: 'auto',
                  borderRadius: 10,
                  objectFit: 'cover',
                }}
              />
            </div>
            <div style={{ marginTop: 6, opacity: 0.9, fontSize: '0.95rem' }}>
              Back of T‑shirt
            </div>
          </div>

          {/* Info card */}
          <div
            style={{
              background: 'rgba(0,0,0,0.5)',
              borderRadius: 16,
              padding: '1rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ marginBottom: '0.5rem' }}>
              <div
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '0.25rem',
                  letterSpacing: '0.5px',
                }}
              >
                Concert Night T‑Shirt
              </div>
              <div style={{ fontSize: '0.95rem', opacity: 0.85, marginBottom: '0.75rem' }}>
                Wear the spirit of festivity at concert night!
              </div>
            </div>
            <ul style={{ lineHeight: 1.6, fontSize: '0.9rem', paddingLeft: '1.2rem', marginBottom: '0.75rem' }}>
              <li>
                <strong>Buy one</strong> T‑shirt @ Rs 149/-
              </li>
              <li>
                For bulk of <strong>5</strong> T‑shirts @ Rs 699/-
              </li>
            </ul>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              WEAR THE T‑SHIRT AND MEET OUR SINGERS ON CONCERT DAY!
            </p>
            <button style={{ alignSelf: 'start', marginBottom: '0.5rem' }}>Buy Now</button>
            <p style={{ opacity: 0.85, fontSize: '0.85rem' }}>
              Last Date for Registration: <strong>Oct 31st 2025</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Merchandise;
