import { useState } from "react";
import axios from "axios";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

const AgendaUploadForm = () => {
  const [file, setFile] = useState(null);
  const [day, setDay] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // upload to cloudinary
      const secure_url = await uploadToCloudinary(file);
      console.log("URL: ", secure_url);

      // send backend request
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/upload/agenda`, { imgUrl: secure_url, day });
      console.log(res.data);

      // reset states
      setFile(null);
      console.log("File uploaded successfully");
    } catch (e) {
      // backend error
      if (e.response && e.response.data && e.response.data.error) {
        console.log(e.response.data.error);
      } else {
        console.log("Something went wrong"); // fallback
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2>Agenda Upload</h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
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
};

export default AgendaUploadForm;