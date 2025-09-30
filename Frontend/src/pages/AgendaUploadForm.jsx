import { useState } from "react";
import axios from "axios";

const AgendaUploadForm = () => {
  const [file, setFile] = useState(null);
  const [day, setDay] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("day", day);

    // await axios.post("/api/upload/agenda", formData, {
    //   headers: { "Content-Type": "multipart/form-data" },
    // });

    alert("Agenda uploaded!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2>Agenda Upload</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
      <input
        type="number"
        placeholder="Day (1 or 2)"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        required
      />
      <button type="submit">Upload Agenda</button>
    </form>
  );
}

export default AgendaUploadForm;