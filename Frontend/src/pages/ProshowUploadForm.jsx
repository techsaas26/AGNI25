import { useState } from "react";
import axios from "axios";

const ProshowUploadForm = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  // un-authenticated
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "image_preset");

    try {
      // upload to cloudinary
      let cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      let resourceType = "image";
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(secure_url);

      // send backend request
      const op = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/upload/proshow`, { name, imgUrl: secure_url, date });
      console.log(op);      

      // reset states
      setFile(null);
      console.log("File uploaded successfully");
    } catch (e) {
      console.error(e);
    }
  };

  // authenticated
  // const getSignature = async (folder) => {
  //   try {
  //     const res = await axios.post(
  //       `${import.meta.env.VITE_BACKEND_URL}/api/sign`,
  //       { folder }
  //     );
  //     return res.data;
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // get the signature from backend
  //     const { timeStamp, signature } = await getSignature("pro-shows");

  //     // set the file
  //     const data = new FormData();
  //     data.append("file", file);
  //     data.append("timestamp", timeStamp);
  //     data.append("signature", signature);
  //     data.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);
  //     data.append("folder", "pro-shows");
  //     // upload to cloudinary
  //     let cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  //     let resourceType = "image";
  //     let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

  //     const res = await axios.post(api, data, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     const { secure_url } = res.data;
  //     console.log(secure_url);

  //     // send backend request
  //     await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/upload/proshow`, { name, imgUrl: secure_url, date });

  //     // reset states
  //     setFile(null);
  //     console.log("File uploaded successfully");
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

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
