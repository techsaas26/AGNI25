import { useState } from "react";
import axios from "axios";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

const EventUploadForm = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [venue, setVenue] = useState("");
  const [type, setType] = useState("Club");
  const [day, setDay] = useState(1);
  const [time, setTime] = useState("day");
  const [isPaid, setIsPaid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload image to Cloudinary
      const secure_url = await uploadToCloudinary(file);
      console.log("URL: ", secure_url);

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/upload/event`,
        { title, imgUrl : secure_url , desc, venue, type, day, time, isPaid }
      );

      console.log(res.data);

      // Reset form
      setTitle("");
      setDesc("");
      setVenue("");
      setType("Club");
      setDay(1);
      setTime("day");
      setIsPaid(false);
      setFile(null);

      console.log("File uploaded successfully");
    } catch (e) {
      if (e.response && e.response.data && e.response.data.error) {
        console.log(e.response.data.error);
      } else {
        console.log(e);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2>Event Upload</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <input
        type="text"
        placeholder="Venue"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)} required>
        <option value="Club">Club</option>
        <option value="Iconic">Iconic</option>
        <option value="Signature">Signature</option>
      </select>

      <input
        type="number"
        placeholder="Day (1 or 2)"
        value={day}
        onChange={(e) => setDay(Number(e.target.value))}
        min={1}
        max={2}
        required
      />

      <select value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="day">Day</option>
        <option value="night">Night</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={isPaid}
          onChange={(e) => setIsPaid(e.target.checked)}
        />
        Paid Event
      </label>
      <button type="submit">Upload Event</button>
    </form>
  );
}

export default EventUploadForm;