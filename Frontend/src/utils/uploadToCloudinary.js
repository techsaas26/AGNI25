import axios from "axios";

export async function uploadToCloudinary(file) {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "image_preset");

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const resourceType = "image";
  const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

  const res = await axios.post(api, data);
  return res.data.secure_url;
}