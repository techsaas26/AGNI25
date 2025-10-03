import React from 'react';

function EventCard({ title, onClick }) {
  return (
    <div className="card" style={{ width: '200px', textAlign: 'center', cursor: 'pointer' }} onClick={onClick}>
      <h3>{title}</h3>
    </div>
  );
}

export default EventCard;
