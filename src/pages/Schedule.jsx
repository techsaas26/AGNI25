import React, { useEffect, useState } from 'react';
import './Schedule.css'; // Import the stylesheet

// Image lists: place these files in the public/ folder
const AGENDA_IMAGES = ['/cs.jpg', '/cs.jpg', '/cs.jpg'];

// Helper to create the agenda objects
const AGENDAS = AGENDA_IMAGES.map((src, i) => ({ day: `Day ${i + 1}`, images: [src] }));

/**
 * Component for a single day's card, displaying an image that can be clicked to open a modal.
 */
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
            // Basic error handling for image loading
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = mainSrc; }}
          />
        )}
      </div>
    </div>
  );
}

/**
 * Main Schedule component, handling the background, layout, and image modal.
 */
function Schedule() {
  const [modalSrc, setModalSrc] = useState(null);

  // Effect to close the modal when the 'Escape' key is pressed
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setModalSrc(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="fire-rain-bg palette-bg">
      {/* Fire overlay drops (For the visual effect) */}
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
          <div className="day-cards">
            {AGENDAS.map((a, i) => (
              <DayCard
                key={i}
                title={a.day}
                images={a.images}
                onOpen={(src) => setModalSrc(src)}
              />
            ))}
          </div>
        </section>

        {/* Modal - Renders only when modalSrc is set */}
        {modalSrc && (
          <div
            className="img-modal-overlay"
            role="dialog"
            aria-modal="true"
            // Click outside closes the modal
            onClick={() => setModalSrc(null)}
          >
            <div
              className="img-modal-content"
              // Stop propagation so clicking content doesn't close the modal
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button with '×' */}
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