import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import EventCard from '../components/EventCard';
import Modal from '../components/Modal';

function Events() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  const eventSections = {
    'Signature Events': ['Sig Event 1', 'Sig Event 2', 'Sig Event 3'],
    'Iconic Events': ['Iconic 1', 'Iconic 2', 'Iconic 3'],
    'Club Events': ['Club 1', 'Club 2', 'Club 3'],
    'Proshows': ['Proshow 1', 'Proshow 2', 'Proshow 3']
  };

  const handleClick = e => {
    setCurrentEvent(e);
    setModalOpen(true);
  };

  return (
    <div className="fire-rain-bg">
      <div className="fire-rain-overlay">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="fire-drop" style={{ left: `${Math.random()*100}%`, animationDuration: `${6 + Math.random()*6}s`, animationDelay: `${Math.random()*4}s` }} />
        ))}
      </div>
      <div style={{ padding:'2rem', position: 'relative', zIndex: 2 }}>
        {Object.entries(eventSections).map(([section, events], idx) => (
          <div key={idx} style={{ marginBottom:'3rem' }}>
            <h2 className="display-font headline-sandal" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2.4rem', letterSpacing: '1px' }}>{section}</h2>
          <Swiper spaceBetween={20} slidesPerView={3} loop={true} autoplay={{ delay: 2500 }}>
            {events.map((e,i) => (
              <SwiperSlide key={i}>
                <EventCard title={e} onClick={() => handleClick(e)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}

        <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
          <h3>{currentEvent}</h3>
          <p>Description: Lorem ipsum dolor sit amet.</p>
          <p>Venue: Main Hall</p>
          <p>Pricing: Free / Paid</p>
          <button>Register</button>
        </Modal>
      </div>
    </div>
  );
}

export default Events;
