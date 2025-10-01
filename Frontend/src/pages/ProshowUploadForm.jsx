import { useState } from "react";
import axios from "axios";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

const ProshowUploadForm = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  // un-authenticated
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // upload to cloudinary
      const secure_url = await uploadToCloudinary(file);
      console.log("URL: ", secure_url);
      
      // send backend request
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/upload/proshow`, { name, imgUrl: secure_url, date });
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
      <h2>Proshow Upload</h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Upload Proshow</button>
    </form>
  );
};

export default ProshowUploadForm;
