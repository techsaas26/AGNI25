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
      {event.club && <p>Club: {event.club}</p>}
      {event.description && <p>Description: {event.description}</p>}
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
  const [selectedDay, setSelectedDay] = useState(null);
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
 
  // Filter events by type first
  const filteredByType = selectedType
    ? events.filter((e) => e.type === selectedType)
    : [];

  // Get available days dynamically for this type
  const availableDays = [...new Set(filteredByType.map((e) => e.day))];

  // Filter events by day after type
  const filteredEvents = selectedDay
    ? filteredByType.filter((e) => e.day === selectedDay)
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
            onClick={() => {
              setSelectedType(card.key);
              setSelectedDay(null); // reset day when type changes
            }}
          >
            <h3>{card.label}</h3>
          </div>
        ))}
      </div>

      {/* Day selector (shown only if type is selected) */}
      {selectedType && availableDays.length > 0 && (
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          {availableDays.map((day) => (
            <button
              key={day}
              style={{
                padding: "5px 10px",
                background: selectedDay === day ? "#333" : "#fff",
                color: selectedDay === day ? "#fff" : "#000",
                border: "1px solid #333",
                cursor: "pointer",
              }}
              onClick={() => setSelectedDay(day)}
            >
              Day {day}
            </button>
          ))}
        </div>
      )}

      {/* Event cards */}
      {selectedDay && filteredEvents.length === 0 && <p>No events available.</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredEvents.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;