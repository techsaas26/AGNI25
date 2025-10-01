import { useState, useEffect } from "react";

const Proshows = () => {
  const [proshows, setProshows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProshows = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/fetch/proshow`
        );
        const data = await res.json();
        setProshows(data); // expects [{name, imgUrl, date}, ...]
      } catch (err) {
        console.error("Error fetching proshows:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProshows();
  }, []);

  if (loading) return <p>Loading proshows...</p>;
  if (proshows.length === 0) return <p>No proshows available.</p>;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>All Proshows</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {proshows.map((proshow, idx) => (
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
              src={proshow.imgUrl}
              alt={proshow.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h3>{proshow.name}</h3>
            <p>{new Date(proshow.date).toDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proshows;
