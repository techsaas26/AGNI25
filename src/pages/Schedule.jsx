import React, { useEffect, useState } from 'react';

// Image lists: place these files in the public/ folder
const AGENDA_IMAGES = ['/d1.png', '/d2.png', '/d3.png'];
const PROSHOW_IMAGES = ['/p1.png', '/p2.png', '/p3.png'];

const AGENDAS = AGENDA_IMAGES.map((src, i) => ({ day: `Day ${i + 1}`, images: [src] }));
const PROSHOWS = PROSHOW_IMAGES.map((src, i) => ({ day: `Day ${i + 1}`, images: [src] }));

function DayCard({ title, images, onOpen }) {
  const mainSrc = images && images.length ? images[0] : null;
  return (
    <div className="day-card">
      <div className="day-card-title">{title}</div>
      <div className="day-card-grid">
        {mainSrc && (
          <img
            src={mainSrc}
            alt={`${title}`}
            className="day-main-img"
            onClick={() => onOpen(mainSrc)}
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = mainSrc; }}
          />
        )}
      </div>
    </div>
  );
}

function Schedule() {
  const [modalSrc, setModalSrc] = useState(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setModalSrc(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="fire-rain-bg palette-bg">
      {/* Fire overlay drops */}
      <div className="fire-rain-overlay">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="fire-drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div style={{ position: 'relative', zIndex: 2, padding: '4rem 1rem' }}>
        <h1
          className="display-font headline-sandal"
          style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '2.8rem', color: '#e6b800' }}
        >
          Schedule
        </h1>

        {/* Agendas Section */}
        <section className="schedule-section">
          <h2
            className="display-font headline-sandal"
            style={{ textAlign: 'left', marginBottom: '1rem', fontSize: '1.6rem', color: '#ffd166' }}
          >
            Agendas
          </h2>
          <div className="day-cards">
            {AGENDAS.map((a, i) => (
              <DayCard key={i} title={a.day} images={a.images} onOpen={(src) => setModalSrc(src)} />
            ))}
          </div>
        </section>

        {/* Proshows Section */}
        <section className="schedule-section" style={{ marginTop: '2rem' }}>
          <h2
            className="display-font headline-sandal"
            style={{ textAlign: 'left', marginBottom: '1rem', fontSize: '1.6rem', color: '#ffd166' }}
          >
            Proshows
          </h2>
          <div className="day-cards">
            {PROSHOWS.map((p, i) => (
              <DayCard key={i} title={p.day} images={p.images} onOpen={(src) => setModalSrc(src)} />
            ))}
          </div>
        </section>

        {/* Modal */}
        {modalSrc && (
          <div
            className="img-modal-overlay"
            role="dialog"
            aria-modal="true"
            onClick={() => setModalSrc(null)}
          >
            <div className="img-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="img-modal-close" onClick={() => setModalSrc(null)}>
                ×
              </div>
              <img src={modalSrc} alt="Enlarged" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Schedule;
