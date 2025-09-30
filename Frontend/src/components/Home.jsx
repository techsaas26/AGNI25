import { useState } from "react";
import { Link } from "react-router-dom";

// Dummy data
const agenda = { title: "Current Agenda", details: "Details about agenda..." };
const proshows = [
  { id: 1, name: "Proshow 1" },
  { id: 2, name: "Proshow 2" },
];
const events = [
  { id: 1, type: "clubs", name: "Club Event 1" },
  { id: 2, type: "iconic", name: "Iconic Event 1" },
  { id: 3, type: "signature", name: "Signature Event 1" },
];

const cardTypes = [
  { key: "clubs", label: "Clubs" },
  { key: "iconic", label: "Iconic" },
  { key: "signature", label: "Signature" },
];

const Home = () => {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          display: "flex",
          gap: "10px",
          padding: "10px",
          height: "50px",
        }}
      >
        <a href="#section1">Agenda & Proshows</a>
        <a href="#section2">Events</a>
        <Link to="/qwerty/agenda">Admin → Agenda Upload</Link>
      </nav>
      <div style={{ paddingTop: "50px" }}>
        {/* Section 1: Agenda + Proshows */}
        <section id="section1" style={{ margin: "20px 0", height: "100vh" }}>
          <h2>Current Agenda</h2>
          <div
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            <h3>{agenda.title}</h3>
            <p>{agenda.details}</p>
          </div>

          <h2>All Proshows</h2>
          <ul>
            {proshows.map((proshow) => (
              <li key={proshow.id}>{proshow.name}</li>
            ))}
          </ul>
        </section>

        {/* Section 2: Events */}
        <section id="section2" style={{ margin: "20px 0", height: "100vh" }}>
          <h2>Events</h2>
          <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
            {cardTypes.map((card) => (
              <div
                key={card.key}
                style={{
                  border: "1px solid #333",
                  padding: "20px",
                  cursor: "pointer",
                  background: selectedType === card.key ? "#eee" : "#fff",
                }}
                onClick={() => setSelectedType(card.key)}
              >
                <h3>{card.label}</h3>
              </div>
            ))}
          </div>

          {selectedType && (
            <div>
              <h3>
                Events: {cardTypes.find((c) => c.key === selectedType).label}
              </h3>
              <ul>
                {events
                  .filter((e) => e.type === selectedType)
                  .map((event) => (
                    <li key={event.id}>{event.name}</li>
                  ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Home;
