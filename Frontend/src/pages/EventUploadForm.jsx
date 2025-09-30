import { useState } from "react";
import axios from "axios";

const EventUploadForm = () => {
  const [file, setFile] = useState(null);
  const [day, setDay] = useState("");
  const [desc, setDesc] = useState("");
  const [venue, setVenue] = useState("");
  const [rounds, setRounds] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("day", day);
    formData.append("description", desc);
    formData.append("venue", venue);
    formData.append("rounds", rounds);

    // await axios.post("/api/upload/event", formData, {
    //   headers: { "Content-Type": "multipart/form-data" },
    // });

    alert("Event uploaded!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2>Event Upload</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
      <input
        type="number"
        placeholder="Day (1 or 2)"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Venue"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rounds"
        value={rounds}
        onChange={(e) => setRounds(e.target.value)}
      />
      <button type="submit">Upload Event</button>
    </form>
  );
}

export default EventUploadForm;
