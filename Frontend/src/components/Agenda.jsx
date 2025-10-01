import { useState, useEffect } from "react";

const Agenda = () => {
  const [agenda, setAgenda] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgenda = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/fetch/agenda`);
        const data = await res.json();
        setAgenda(data);
      } catch (err) {
        console.error("Error fetching agenda:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAgenda();
  }, []);

  if (loading) return <p>Loading agenda...</p>;
  if (agenda.length === 0) return <p>No agendas available.</p>;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>Agendas...</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {agenda.map((agenda, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={agenda.imgUrl}
              alt={agenda.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <p>Day - {agenda.day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agenda;
