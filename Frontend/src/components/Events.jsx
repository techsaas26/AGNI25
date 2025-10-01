import { useState, useEffect } from "react";

const cardTypes = [
  { key: "Club", label: "Clubs" },
  { key: "Iconic", label: "Iconic" },
  { key: "Signature", label: "Signature" },
];

const EventCard = ({ event }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        width: "250px",
        marginBottom: "20px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={event.imgUrl}
        alt={event.title}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "6px",
          marginBottom: "10px",
        }}
      />
      <h4>{event.title}</h4>
      {event.desc && <p>{event.desc}</p>}
      {event.venue && <p>Venue: {event.venue}</p>}
      <p>
        Day: {event.day} | {event.time}-Event
      </p>
      {event.isPaid && <button>Pay</button>}
    </div>
  );
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/fetch/event`
        );
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;

  const filteredEvents = selectedType
    ? events.filter((e) => e.type === selectedType)
    : [];

  return (
    <div>
      <h2>Events</h2>

      {/* Type selector */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        {cardTypes.map((card) => (
          <div
            key={card.key}
            style={{
              border: "1px solid #333",
              padding: "10px",
              cursor: "pointer",
              background: selectedType === card.key ? "#eee" : "#fff",
            }}
            onClick={() => setSelectedType(card.key)}
          >
            <h3>{card.label}</h3>
          </div>
        ))}
      </div>

      {/* Event cards */}
      {filteredEvents.length === 0 && selectedType && (
        <p>No events available.</p>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredEvents.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;